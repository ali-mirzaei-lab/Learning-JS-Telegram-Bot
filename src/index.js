import { lessons } from "./lessons.js";
import { questions } from "./questions.js";

async function getUser(chatId, env) {
    return await env.learning_js_bot_db
        .prepare(
            "SELECT * FROM users WHERE telegram_id = ?",
        )
        .bind(String(chatId))
        .first();
}

async function ensureProgress(chatId, env) {
    await env.learning_js_bot_db
        .prepare(
            "INSERT OR IGNORE INTO progress (telegram_id) VALUES (?)",
        )
        .bind(String(chatId))
        .run();
}

async function getQuizSession(chatId, env) {
    const row = await env.learning_js_bot_db
        .prepare("SELECT * FROM quiz_sessions WHERE telegram_id = ?")
        .bind(String(chatId))
        .first();

    if (!row) return null;

    return {
        questions: JSON.parse(row.questions),
        currentQuestion: row.current_question,
        score: row.score,
    };
}

async function setQuizSession(chatId, quizData, env) {
    const questionsJson = JSON.stringify(quizData.questions);
    const now = Date.now();

    await env.learning_js_bot_db
        .prepare(`
            INSERT INTO quiz_sessions (telegram_id, questions, current_question, score, updated_at) 
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(telegram_id) DO UPDATE SET 
                questions = excluded.questions,
                current_question = excluded.current_question,
                score = excluded.score,
                updated_at = excluded.updated_at
        `)
        .bind(String(chatId), questionsJson, quizData.currentQuestion, quizData.score, now)
        .run();
}

async function deleteQuizSession(chatId, env) {
    await env.learning_js_bot_db
        .prepare("DELETE FROM quiz_sessions WHERE telegram_id = ?")
        .bind(String(chatId))
        .run();
}

async function sendMessage(chatId, env, text, replyMarkup = null) {
    const body = {
        chat_id: chatId,
        text,
    };

    if (replyMarkup) {
        body.reply_markup = replyMarkup;
    }

    await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        },
    );
}

async function sendMainMenu(chatId, env) {
    const user = await getUser(chatId, env);
    const language = user?.language || "en";

    const text =
        language === "fa"
            ? "🏠 منوی اصلی\n\nانتخاب کنید چه کاری می‌خواهید انجام دهید:"
            : "🏠 Main Menu\n\nChoose what you'd like to do:";

    await sendMessage(chatId, env, text, {
        inline_keyboard:
            language === "fa"
                ? [
                    [
                        {
                            text: "📚 درس امروز",
                            callback_data: "daily_lesson",
                        },
                        {
                            text: "🧠 آزمون",
                            callback_data: "quiz",
                        },
                    ],
                    [
                        {
                            text: "💻 چالش",
                            callback_data: "challenge",
                        },
                        {
                            text: "📊 پیشرفت من",
                            callback_data: "progress",
                        },
                    ],
                    [
                        {
                            text: "📖 مرجع JavaScript",
                            callback_data: "reference",
                        },
                    ],
                    [
                        {
                            text: "🌐 زبان",
                            callback_data: "language",
                        },
                    ],
                ]
                : [
                    [
                        {
                            text: "📚 Today's Lesson",
                            callback_data: "daily_lesson",
                        },
                        {
                            text: "🧠 Quiz",
                            callback_data: "quiz",
                        },
                    ],
                    [
                        {
                            text: "💻 Challenge",
                            callback_data: "challenge",
                        },
                        {
                            text: "📊 My Progress",
                            callback_data: "progress",
                        },
                    ],
                    [
                        {
                            text: "📖 JS Reference",
                            callback_data: "reference",
                        },
                    ],
                    [
                        {
                            text: "🌐 Language",
                            callback_data: "language",
                        },
                    ],
                ],
    });
}

async function sendLanguageMenu(chatId, env, isStart = false) {
    const text = isStart
        ? "🤖 JavaScript Learning Bot\n\nWelcome! 👋\n\n🌐 Choose your language:"
        : "🌐 Choose your language:";

    await sendMessage(chatId, env, text, {
        inline_keyboard: [
            [
                {
                    text: "🇬🇧 English",
                    callback_data: "language_en",
                },
                {
                    text: "🇮🇷 فارسی",
                    callback_data: "language_fa",
                },
            ],
        ],
    });
}

async function recordQuestionAnswer(chatId, isCorrect, env) {
    await ensureProgress(chatId, env);

    if (isCorrect) {
        await env.learning_js_bot_db
            .prepare(
                "UPDATE progress SET questions_answered = questions_answered + 1, correct_answers = correct_answers + 1 WHERE telegram_id = ?",
            )
            .bind(String(chatId))
            .run();
    } else {
        await env.learning_js_bot_db
            .prepare(
                "UPDATE progress SET questions_answered = questions_answered + 1 WHERE telegram_id = ?",
            )
            .bind(String(chatId))
            .run();
    }
}

export default {
    async fetch(request, env) {
        if (request.method !== "POST") {
            return new Response(
                "Learning JS Telegram Bot is alive!",
            );
        }

        try {
            const update = await request.json();

            if (update.callback_query) {
                const callbackQuery = update.callback_query;
                const callbackData = callbackQuery.data;
                const chatId = callbackQuery.message.chat.id;

                if (callbackData === "language") {
                    await sendLanguageMenu(chatId, env);
                    return new Response("OK");
                }

                if (
                    callbackData === "language_en" ||
                    callbackData === "language_fa"
                ) {
                    const language =
                        callbackData === "language_fa"
                            ? "fa"
                            : "en";

                    await env.learning_js_bot_db
                        .prepare(
                            "UPDATE users SET language = ? WHERE telegram_id = ?",
                        )
                        .bind(language, String(chatId))
                        .run();

                    const confirmation =
                        language === "fa"
                            ? "🇮🇷 زبان شما روی فارسی تنظیم شد."
                            : "🇬🇧 Your language has been set to English.";

                    await sendMessage(
                        chatId,
                        env,
                        confirmation,
                    );

                    await sendMainMenu(chatId, env);

                    return new Response("OK");
                }

                const user = await getUser(chatId, env);

                if (!user) {
                    return new Response("User not found");
                }

                const language = user.language || "en";

                if (callbackData === "daily_lesson") {
                    const lesson = lessons.find(
                        (lesson) =>
                            lesson.id === user.current_lesson,
                    );

                    if (!lesson) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🎉 تبریک!\n\nشما تمام درس‌های موجود را به پایان رسانده‌اید!"
                                : "🎉 Congratulations!\n\nYou've completed all available lessons!",
                        );

                        await sendMainMenu(chatId, env);
                        return new Response("OK");
                    }

                    const title =
                        language === "fa"
                            ? lesson.faTitle
                            : lesson.title;

                    const content =
                        language === "fa"
                            ? lesson.faContent
                            : lesson.content;

                    await sendMessage(
                        chatId,
                        env,
                        `📚 ${language === "fa"
                            ? "درس امروز"
                            : "Today's Lesson"
                        }\n\n${title}\n\n${content}`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "❓ سؤال کوتاه"
                                                : "❓ Quick Question",
                                        callback_data: `question_${lesson.id}`,
                                    },
                                ],
                            ],
                        },
                    );
                }

                if (callbackData.startsWith("question_")) {
                    const lessonId = Number(
                        callbackData.split("_")[1],
                    );

                    const lessonQuestions = questions.filter(
                        (question) =>
                            question.lessonId === lessonId,
                    );

                    if (lessonQuestions.length === 0) {
                        return new Response("OK");
                    }

                    const question =
                        lessonQuestions[
                        Math.floor(
                            Math.random() *
                            lessonQuestions.length,
                        )
                        ];

                    const options =
                        language === "fa"
                            ? question.faOptions
                            : question.options;

                    const questionText =
                        language === "fa"
                            ? question.faQuestion
                            : question.question;

                    const optionButtons = options.map(
                        (option, index) => [
                            {
                                text: option,
                                callback_data: `answer_${question.id}_${index}`,
                            },
                        ],
                    );

                    await sendMessage(
                        chatId,
                        env,
                        `❓ ${language === "fa"
                            ? "سؤال کوتاه"
                            : "Quick Question"
                        }\n\n${questionText}`,
                        {
                            inline_keyboard: optionButtons,
                        },
                    );
                }

                if (callbackData.startsWith("answer_")) {
                    const parts = callbackData.split("_");

                    const questionId = Number(parts[1]);
                    const answerIndex = Number(parts[2]);

                    const question = questions.find(
                        (question) =>
                            question.id === questionId,
                    );

                    if (!question) {
                        return new Response("OK");
                    }

                    const isCorrect =
                        answerIndex === question.correctAnswer;

                    await recordQuestionAnswer(
                        chatId,
                        isCorrect,
                        env,
                    );

                    const resultText = isCorrect
                        ? language === "fa"
                            ? "✅ درست!\n\n"
                            : "✅ Correct!\n\n"
                        : language === "fa"
                            ? "❌ اشتباه!\n\n"
                            : "❌ Incorrect!\n\n";

                    const explanation =
                        language === "fa"
                            ? question.faExplanation
                            : question.explanation;

                    await sendMessage(
                        chatId,
                        env,
                        resultText + explanation,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "✅ تکمیل درس"
                                                : "✅ Complete Lesson",
                                        callback_data: `complete_lesson_${user.current_lesson}`,
                                    },
                                ],
                            ],
                        },
                    );
                }

                if (
                    callbackData.startsWith(
                        "complete_lesson_",
                    )
                ) {
                    const lessonId = Number(
                        callbackData.split("_")[2],
                    );

                    if (user.current_lesson !== lessonId) {
                        return new Response("OK");
                    }

                    const currentLesson = lessons.find(
                        (lesson) => lesson.id === lessonId,
                    );

                    const nextLesson = lessons.find(
                        (lesson) => lesson.id === lessonId + 1,
                    );

                    if (nextLesson) {
                        await env.learning_js_bot_db
                            .prepare(
                                "UPDATE users SET current_lesson = ? WHERE telegram_id = ?",
                            )
                            .bind(
                                nextLesson.id,
                                String(chatId),
                            )
                            .run();

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? `🎉 درس کامل شد!\n\nشما درس «${currentLesson.faTitle}» را به پایان رساندید.\n\n📚 درس بعدی: ${nextLesson.faTitle}`
                                : `🎉 Lesson Complete!\n\nYou've completed "${currentLesson.title}".\n\n📚 Next lesson: ${nextLesson.title}`,
                        );
                    } else {
                        // Last lesson completed
                        await env.learning_js_bot_db
                            .prepare(
                                "UPDATE users SET current_lesson = ? WHERE telegram_id = ?",
                            )
                            .bind(
                                lessons.length + 1,
                                String(chatId),
                            )
                            .run();

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? `🎉 تبریک!\n\nشما درس «${currentLesson.faTitle}» را به پایان رساندید.\n\n🏆 شما تمام درس‌های موجود را به پایان رسانده‌اید!`
                                : `🎉 Congratulations!\n\nYou've completed "${currentLesson.title}".\n\n🏆 You've completed all available lessons!`,
                        );
                    }

                    await sendMainMenu(chatId, env);
                }

                if (callbackData === "quiz") {
                    const completedLessonIds = lessons
                        .filter(
                            (lesson) =>
                                lesson.id < user.current_lesson,
                        )
                        .map((lesson) => lesson.id);

                    const quizPool = questions.filter(
                        (question) =>
                            completedLessonIds.includes(
                                question.lessonId,
                            ),
                    );

                    if (quizPool.length === 0) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🧠 آزمون\n\nبرای شرکت در آزمون باید حداقل یک درس را کامل کنید. 📚"
                                : "🧠 Quiz\n\nYou need to complete at least one lesson before taking a quiz. 📚",
                        );

                        await sendMainMenu(chatId, env);
                        return new Response("OK");
                    }

                    const shuffledQuestions = [...quizPool].sort(
                        () => Math.random() - 0.5,
                    );

                    const quizQuestions =
                        shuffledQuestions.slice(0, 5);

                    await setQuizSession(chatId, {
                        questions: quizQuestions,
                        currentQuestion: 0,
                        score: 0,
                    }, env);

                    const quiz = await getQuizSession(chatId, env);
                    const question = quiz.questions[0];

                    const options =
                        language === "fa"
                            ? question.faOptions
                            : question.options;

                    const questionText =
                        language === "fa"
                            ? question.faQuestion
                            : question.question;

                    const optionButtons = options.map(
                        (option, index) => [
                            {
                                text: option,
                                callback_data: `quiz_answer_${question.id}_${index}`,
                            },
                        ],
                    );

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? `🧠 آزمون JavaScript\n\nسؤال 1/${quiz.questions.length}\n\n${questionText}`
                            : `🧠 JavaScript Quiz\n\nQuestion 1/${quiz.questions.length}\n\n${questionText}`,
                        {
                            inline_keyboard: optionButtons,
                        },
                    );
                }

                if (
                    callbackData.startsWith(
                        "quiz_answer_",
                    )
                ) {
                    const parts = callbackData.split("_");

                    const questionId = Number(parts[2]);
                    const answerIndex = Number(parts[3]);

                    const quiz = await getQuizSession(chatId, env);

                    if (!quiz) {
                        return new Response("OK");
                    }

                    const question = quiz.questions.find(
                        (question) =>
                            question.id === questionId,
                    );

                    if (!question) {
                        return new Response("OK");
                    }

                    const isCorrect =
                        answerIndex === question.correctAnswer;

                    await recordQuestionAnswer(
                        chatId,
                        isCorrect,
                        env,
                    );

                    if (isCorrect) {
                        quiz.score++;
                    }

                    quiz.currentQuestion++;

                    await setQuizSession(chatId, quiz, env);

                    const resultText = isCorrect
                        ? language === "fa"
                            ? "✅ درست!\n\n"
                            : "✅ Correct!\n\n"
                        : language === "fa"
                            ? "❌ اشتباه!\n\n"
                            : "❌ Incorrect!\n\n";

                    const explanation =
                        language === "fa"
                            ? question.faExplanation
                            : question.explanation;

                    if (
                        quiz.currentQuestion >=
                        quiz.questions.length
                    ) {
                        await env.learning_js_bot_db
                            .prepare(
                                "UPDATE progress SET quizzes_completed = quizzes_completed + 1 WHERE telegram_id = ?",
                            )
                            .bind(String(chatId))
                            .run();

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? `${resultText}${explanation}\n\n🏆 آزمون تمام شد!\n\nامتیاز: ${quiz.score}/${quiz.questions.length}`
                                : `${resultText}${explanation}\n\n🏆 Quiz Complete!\n\nScore: ${quiz.score}/${quiz.questions.length}`,
                        );

                        await deleteQuizSession(chatId, env);

                        await sendMainMenu(chatId, env);

                        return new Response("OK");
                    }

                    const nextQuestion =
                        quiz.questions[quiz.currentQuestion];

                    const options =
                        language === "fa"
                            ? nextQuestion.faOptions
                            : nextQuestion.options;

                    const questionText =
                        language === "fa"
                            ? nextQuestion.faQuestion
                            : nextQuestion.question;

                    const optionButtons =
                        options.map(
                            (option, index) => [
                                {
                                    text: option,
                                    callback_data: `quiz_answer_${nextQuestion.id}_${index}`,
                                },
                            ],
                        );

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? `${resultText}${explanation}\n\n🧠 سؤال ${quiz.currentQuestion + 1}/${quiz.questions.length}\n\n${questionText}`
                            : `${resultText}${explanation}\n\n🧠 Question ${quiz.currentQuestion + 1}/${quiz.questions.length}\n\n${questionText}`,
                        {
                            inline_keyboard:
                                optionButtons,
                        },
                    );
                }

                if (callbackData === "challenge") {
                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "💻 چالش\n\nسیستم چالش‌های کدنویسی به‌زودی اضافه می‌شود! 🔥"
                            : "💻 Challenge\n\nThe coding challenge system is coming soon! 🔥",
                    );

                    await sendMainMenu(chatId, env);
                }

                if (callbackData === "progress") {
                    await ensureProgress(chatId, env);

                    const progress =
                        await env.learning_js_bot_db
                            .prepare(
                                "SELECT questions_answered, correct_answers, quizzes_completed FROM progress WHERE telegram_id = ?",
                            )
                            .bind(String(chatId))
                            .first();

                    if (!progress) {
                        return new Response("Progress not found");
                    }

                    const completedLessons = Math.max(
                        user.current_lesson - 1,
                        0,
                    );

                    const totalLessons = lessons.length;

                    const accuracy =
                        progress.questions_answered > 0
                            ? Math.round(
                                (progress.correct_answers /
                                    progress.questions_answered) *
                                100,
                            )
                            : 0;

                    const currentLesson = lessons.find(
                        (lesson) =>
                            lesson.id === user.current_lesson,
                    );

                    const progressText =
                        language === "fa"
                            ? "📊 پیشرفت من\n\n" +
                            `📚 درس‌های تکمیل‌شده: ${completedLessons}/${totalLessons}\n` +
                            `🎯 درس فعلی: ${currentLesson
                                ? currentLesson.faTitle
                                : "تمام درس‌ها تکمیل شده‌اند!"
                            }\n\n` +
                            `❓ سؤالات پاسخ داده‌شده: ${progress.questions_answered}\n` +
                            `✅ پاسخ‌های صحیح: ${progress.correct_answers}\n` +
                            `📈 دقت: ${accuracy}%\n` +
                            `🏆 آزمون‌های تکمیل‌شده: ${progress.quizzes_completed}`
                            : "📊 My Progress\n\n" +
                            `📚 Lessons completed: ${completedLessons}/${totalLessons}\n` +
                            `🎯 Current lesson: ${currentLesson
                                ? currentLesson.title
                                : "All lessons completed!"
                            }\n\n` +
                            `❓ Questions answered: ${progress.questions_answered}\n` +
                            `✅ Correct answers: ${progress.correct_answers}\n` +
                            `📈 Accuracy: ${accuracy}%\n` +
                            `🏆 Quizzes completed: ${progress.quizzes_completed}`;

                    await sendMessage(
                        chatId,
                        env,
                        progressText,
                    );

                    await sendMainMenu(chatId, env);
                }

                if (callbackData === "reference") {
                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "📖 مرجع JavaScript\n\nمرجع JavaScript به‌زودی اضافه می‌شود! 📚"
                            : "📖 JS Reference\n\nThe JavaScript reference is coming soon! 📚",
                    );

                    await sendMainMenu(chatId, env);
                }

                return new Response("OK");
            }

            if (!update.message) {
                return new Response("OK");
            }

            const chatId = update.message.chat.id;
            const message = update.message.text;

            if (message === "/start") {
                const existingUser =
                    await env.learning_js_bot_db
                        .prepare(
                            "SELECT id FROM users WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .first();

                if (!existingUser) {
                    await env.learning_js_bot_db
                        .prepare(
                            "INSERT INTO users (telegram_id) VALUES (?)",
                        )
                        .bind(String(chatId))
                        .run();
                }

                await ensureProgress(chatId, env);

                await sendLanguageMenu(
                    chatId,
                    env,
                    true,
                );
            }

            return new Response("OK");
        } catch (error) {
            console.error(error);

            return new Response("Error", {
                status: 500,
            });
        }
    },

    async scheduled(event, env, ctx) {
        console.log(
            `Scheduled event fired at ${event.cron}`,
        );
    },
};