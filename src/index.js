import { lessons } from "./lessons.js";
import { questions } from "./questions.js";
import { references } from "./reference.js";

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

async function sendMessage(
    chatId,
    env,
    text,
    replyMarkup = null,
) {
    const body = {
        chat_id: chatId,
        text,
    };

    if (replyMarkup) {
        body.reply_markup = replyMarkup;
    }

    const response = await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        },
    );

    const data = await response.json();
    return data.result?.message_id;
}

async function removeMessageKeyboard(chatId, messageId, env) {
    await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/editMessageReplyMarkup`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                message_id: messageId,
                reply_markup: { inline_keyboard: [] },
            }),
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
                            text: "📖 JS Reference",
                            callback_data: "reference",
                        },
                    ],
                    [
                        {
                            text: "📚 همه درس‌ها",
                            callback_data: "all_lessons",
                        },
                    ],
                    [
                        {
                            text: "⚙️ تنظیمات",
                            callback_data: "settings",
                        }
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
                            text: "📚 All Lessons",
                            callback_data: "all_lessons",
                        },
                    ],
                    [
                        {
                            text: "⚙️ Settings",
                            callback_data: "settings",
                        }
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

                if (callbackData === "main_menu") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    await sendMainMenu(chatId, env);
                    return new Response("OK");
                }

                if (callbackQuery.data === "settings") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "⚙️ تنظیمات"
                            : "⚙️ Settings",
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🌐 زبان"
                                                : "🌐 Language",
                                        callback_data: "language",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🔄 بازنشانی پیشرفت"
                                                : "🔄 Reset Progress",
                                        callback_data: "reset_progress",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🏠 منوی اصلی"
                                                : "🏠 Main Menu",
                                        callback_data: "main_menu",
                                    },
                                ],
                            ],
                        },
                    );

                    return new Response("OK");
                }

                if (callbackQuery.data === "language") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    await sendLanguageMenu(chatId, env);

                    return new Response("OK");
                }

                if (
                    callbackData === "language_en" ||
                    callbackData === "language_fa"
                ) {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

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

                if (callbackData === "all_lessons") {

                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const availableLessons = lessons.filter(
                        (lesson) => lesson.id <= user.current_lesson,
                    );

                    const lessonButtons = availableLessons.map(
                        (lesson) => [
                            {
                                text:
                                    language === "fa"
                                        ? `${lesson.id}️⃣ ${lesson.faTitle}`
                                        : `${lesson.id}️⃣ ${lesson.title}`,
                                callback_data: `lesson_${lesson.id}`,
                            },
                        ],
                    );

                    lessonButtons.push([
                        {
                            text:
                                language === "fa"
                                    ? "🏠 منوی اصلی"
                                    : "🏠 Main Menu",
                            callback_data: "main_menu",
                        },
                    ]);

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "📚 همه درس‌ها\n\nیک درس را برای مشاهده انتخاب کنید:"
                            : "📚 All Lessons\n\nChoose a lesson to review:",
                        {
                            inline_keyboard: lessonButtons,
                        },
                    );

                    return new Response("OK");
                }

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

                await removeMessageKeyboard(
                    chatId,
                    callbackQuery.message.message_id,
                    env,
                );

                if (callbackData.startsWith("lesson_")) {
                    const lessonId = Number(
                        callbackData.split("_")[1],
                    );

                    if (lessonId > user.current_lesson) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🔒 این درس هنوز برای شما در دسترس نیست."
                                : "🔒 This lesson is not available to you yet.",
                        );

                        return new Response("OK");
                    }

                    const lesson = lessons.find(
                        (lesson) => lesson.id === lessonId,
                    );

                    if (!lesson) {
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
                        `📚 ${title}\n\n${content}`,
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
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "📚 همه درس‌ها"
                                                : "📚 All Lessons",
                                        callback_data: "all_lessons",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🏠 منوی اصلی"
                                                : "🏠 Main Menu",
                                        callback_data: "main_menu",
                                    },
                                ],
                            ],
                        },
                    );

                    return new Response("OK");
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

                    const resultMessageId = await sendMessage(
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

                    if (resultMessageId && callbackQuery.message) {
                        await removeMessageKeyboard(
                            chatId,
                            callbackQuery.message.message_id,
                            env,
                        );
                    }
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

                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

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
                    const availableLessons = lessons.filter(
                        (lesson) => lesson.id <= user.current_lesson,
                    );

                    if (availableLessons.length === 0) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🧠 آزمون\n\nهنوز درسی برای آزمون در دسترس نیست. 📚"
                                : "🧠 Quiz\n\nThere are no available lessons for a quiz yet. 📚",
                        );

                        await sendMainMenu(chatId, env);
                        return new Response("OK");
                    }

                    const existingQuiz = await getQuizSession(chatId, env);

                    if (existingQuiz) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🧠 شما یک آزمون ناتمام دارید.\n\nمی‌خواهید ادامه دهید؟"
                                : "🧠 You have an unfinished quiz.\n\nWould you like to continue?",
                            {
                                inline_keyboard: [
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "▶️ ادامه آزمون"
                                                    : "▶️ Continue Quiz",
                                            callback_data: "continue_quiz",
                                        },
                                    ],
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "🔄 آزمون جدید"
                                                    : "🔄 New Quiz",
                                            callback_data: "start_quiz",
                                        },
                                    ],
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "🏠 منوی اصلی"
                                                    : "🏠 Main Menu",
                                            callback_data: "main_menu",
                                        },
                                    ],
                                ],
                            },
                        );

                        return new Response("OK");
                    }

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? `🧠 آزمون JavaScript\n\nاین آزمون شامل ${availableLessons.length} سؤال است.\n\n📚 از هر درس در دسترس شما، یک سؤال به‌صورت تصادفی انتخاب می‌شود.\n\n🎲 سؤال‌ها در هر آزمون به‌صورت تصادفی انتخاب می‌شوند.\n\n📊 در پایان، امتیاز و دقت شما نمایش داده می‌شود.\n\nآماده‌ای؟`
                            : `🧠 JavaScript Quiz\n\nThis quiz contains ${availableLessons.length} questions.\n\n📚 One random question will be selected from each lesson available to you.\n\n🎲 Questions are randomly selected every time.\n\n📊 At the end, you'll see your score and accuracy.\n\nReady?`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🚀 شروع آزمون"
                                                : "🚀 Start Quiz",
                                        callback_data: "start_quiz",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🏠 منوی اصلی"
                                                : "🏠 Main Menu",
                                        callback_data: "main_menu",
                                    },
                                ],
                            ],
                        },
                    );

                    return new Response("OK");
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

                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

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

                    await setQuizSession(
                        chatId,
                        quiz,
                        env,
                    );

                    const resultText = isCorrect
                        ? language === "fa"
                            ? "✅ درست!"
                            : "✅ Correct!"
                        : language === "fa"
                            ? "❌ اشتباه!"
                            : "❌ Incorrect!";

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

                        const accuracy =
                            Math.round(
                                (quiz.score /
                                    quiz.questions.length) *
                                100,
                            );

                        await deleteQuizSession(
                            chatId,
                            env,
                        );

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? `${resultText}\n\n${explanation}\n\n🏆 آزمون تمام شد!\n\n🎯 امتیاز: ${quiz.score}/${quiz.questions.length}\n📊 دقت: ${accuracy}%`
                                : `${resultText}\n\n${explanation}\n\n🏆 Quiz Complete!\n\n🎯 Score: ${quiz.score}/${quiz.questions.length}\n📊 Accuracy: ${accuracy}%`,
                            {
                                inline_keyboard: [
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "🔄 آزمون جدید"
                                                    : "🔄 New Quiz",
                                            callback_data: "quiz",
                                        },
                                    ],
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "📊 پیشرفت من"
                                                    : "📊 My Progress",
                                            callback_data: "progress",
                                        },
                                    ],
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "🏠 منوی اصلی"
                                                    : "🏠 Main Menu",
                                            callback_data: "main_menu",
                                        },
                                    ],
                                ],
                            },
                        );

                        return new Response("OK");
                    }

                    const nextQuestion =
                        quiz.questions[
                        quiz.currentQuestion
                        ];

                    const nextLesson = lessons.find(
                        (lesson) =>
                            lesson.id ===
                            nextQuestion.lessonId,
                    );

                    const options =
                        language === "fa"
                            ? nextQuestion.faOptions
                            : nextQuestion.options;

                    const questionText =
                        language === "fa"
                            ? nextQuestion.faQuestion
                            : nextQuestion.question;

                    const lessonName =
                        language === "fa"
                            ? nextLesson.faTitle
                            : nextLesson.title;

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
                        `${resultText}\n\n${explanation}`,
                    );

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? `🧠 سؤال ${quiz.currentQuestion + 1}/${quiz.questions.length}\n📚 درس ${nextLesson.id}: ${lessonName}\n\n${questionText}`
                            : `🧠 Question ${quiz.currentQuestion + 1}/${quiz.questions.length}\n📚 Lesson ${nextLesson.id}: ${lessonName}\n\n${questionText}`,
                        {
                            inline_keyboard:
                                optionButtons,
                        },
                    );

                    return new Response("OK");
                }

                if (callbackQuery.data === "reset_progress") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "⚠️ بازنشانی پیشرفت\n\nاین کار موارد زیر را بازنشانی می‌کند:\n\n• درس فعلی\n• درس‌های تکمیل‌شده\n• آمار سؤالات\n• آمار آزمون‌ها\n\nزبان و حساب کاربری شما حذف نخواهد شد.\n\nآیا مطمئن هستید؟"
                            : "⚠️ Reset Progress\n\nThis will reset:\n\n• Current lesson\n• Completed lessons\n• Question statistics\n• Quiz statistics\n\nYour language and account will NOT be affected.\n\nAre you sure you want to continue?",
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "❌ لغو"
                                                : "❌ Cancel",
                                        callback_data: "cancel_reset",
                                    },
                                    {
                                        text:
                                            language === "fa"
                                                ? "🔄 بازنشانی پیشرفت"
                                                : "🔄 Reset Progress",
                                        callback_data: "confirm_reset",
                                    },
                                ],
                            ],
                        },
                    );

                    return new Response("OK");
                }

                if (callbackQuery.data === "cancel_reset") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "❌ بازنشانی لغو شد.\n\nپیشرفت شما امن است."
                            : "❌ Reset cancelled.\n\nYour progress is safe.",
                    );

                    return new Response("OK");
                }

                if (callbackQuery.data === "confirm_reset") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await env.learning_js_bot_db
                        .prepare(
                            `UPDATE users
             SET reset_confirmation = 1
             WHERE telegram_id = ?`,
                        )
                        .bind(String(chatId))
                        .run();

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "🚨 تأیید نهایی\n\nاین کار قابل بازگشت نیست.\n\nبرای تأیید، کلمه زیر را ارسال کنید:\n\nDELETE\n\nهر چیز دیگری باعث لغو بازنشانی می‌شود."
                            : "🚨 Final Confirmation\n\nThis action cannot be undone.\n\nTo confirm, type:\n\nDELETE\n\nAnything else will cancel the reset.",
                    );

                    return new Response("OK");
                }

                if (callbackData === "continue_quiz") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const quiz = await getQuizSession(chatId, env);

                    if (!quiz) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "❌ آزمون فعالی وجود ندارد."
                                : "❌ There is no active quiz.",
                        );

                        await sendMainMenu(chatId, env);
                        return new Response("OK");
                    }

                    const question = quiz.questions[quiz.currentQuestion];

                    const lesson = lessons.find(
                        (lesson) => lesson.id === question.lessonId,
                    );

                    const options =
                        language === "fa"
                            ? question.faOptions
                            : question.options;

                    const questionText =
                        language === "fa"
                            ? question.faQuestion
                            : question.question;

                    const lessonName =
                        language === "fa"
                            ? lesson.faTitle
                            : lesson.title;

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
                            ? `🧠 آزمون JavaScript\n\nسؤال ${quiz.currentQuestion + 1}/${quiz.questions.length}\n📚 درس ${lesson.id}: ${lessonName}\n\n${questionText}`
                            : `🧠 JavaScript Quiz\n\nQuestion ${quiz.currentQuestion + 1}/${quiz.questions.length}\n📚 Lesson ${lesson.id}: ${lessonName}\n\n${questionText}`,
                        {
                            inline_keyboard: optionButtons,
                        },
                    );

                    return new Response("OK");
                }

                if (callbackData === "start_quiz") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const availableLessons = lessons.filter(
                        (lesson) => lesson.id <= user.current_lesson,
                    );

                    const quizQuestions = availableLessons.map((lesson) => {
                        const lessonQuestions = questions.filter(
                            (question) => question.lessonId === lesson.id,
                        );

                        const randomQuestion =
                            lessonQuestions[
                            Math.floor(Math.random() * lessonQuestions.length)
                            ];

                        return randomQuestion;
                    });

                    const shuffledQuizQuestions = [...quizQuestions].sort(
                        () => Math.random() - 0.5,
                    );

                    await setQuizSession(
                        chatId,
                        {
                            questions: shuffledQuizQuestions,
                            currentQuestion: 0,
                            score: 0,
                        },
                        env,
                    );

                    const quiz = await getQuizSession(chatId, env);
                    const question = quiz.questions[0];

                    const lesson = lessons.find(
                        (lesson) => lesson.id === question.lessonId,
                    );

                    const options =
                        language === "fa"
                            ? question.faOptions
                            : question.options;

                    const questionText =
                        language === "fa"
                            ? question.faQuestion
                            : question.question;

                    const lessonName =
                        language === "fa"
                            ? lesson.faTitle
                            : lesson.title;

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
                            ? `🧠 آزمون JavaScript\n\nسؤال 1/${quiz.questions.length}\n📚 درس ${lesson.id}: ${lessonName}\n\n${questionText}`
                            : `🧠 JavaScript Quiz\n\nQuestion 1/${quiz.questions.length}\n📚 Lesson ${lesson.id}: ${lessonName}\n\n${questionText}`,
                        {
                            inline_keyboard: optionButtons,
                        },
                    );

                    return new Response("OK");
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
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    const keyboard = [];

                    for (let i = 0; i < references.length; i += 2) {
                        const row = [];

                        row.push({
                            text:
                                language === "fa"
                                    ? references[i].faTitle
                                    : references[i].title,
                            callback_data: `reference_${references[i].id}`,
                        });

                        if (references[i + 1]) {
                            row.push({
                                text:
                                    language === "fa"
                                        ? references[i + 1].faTitle
                                        : references[i + 1].title,
                                callback_data: `reference_${references[i + 1].id}`,
                            });
                        }

                        keyboard.push(row);
                    }

                    keyboard.push([
                        {
                            text:
                                language === "fa"
                                    ? "🏠 منوی اصلی"
                                    : "🏠 Main Menu",
                            callback_data: "main_menu",
                        },
                    ]);

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "📖 مرجع JavaScript\n\n" +
                            "اطلاعات سریع و کاربردی JavaScript برای توسعه روزمره Frontend.\n\n" +
                            "یک موضوع را انتخاب کنید:"
                            : "📖 JavaScript Reference\n\n" +
                            "Quick, practical JavaScript information for everyday frontend development.\n\n" +
                            "Choose a topic:",
                        {
                            inline_keyboard: keyboard,
                        },
                    );

                    return new Response("OK");
                }

                if (callbackData.startsWith("reference_")) {
                    const referenceId = Number(
                        callbackData.replace("reference_", ""),
                    );

                    const reference = references.find(
                        (item) => item.id === referenceId,
                    );

                    if (!reference) {
                        const user = await getUser(chatId, env);
                        const language = user?.language || "en";

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "❌ موضوع Reference پیدا نشد."
                                : "❌ Reference topic not found.",
                        );

                        return new Response("OK");
                    }

                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? reference.faContent
                            : reference.content,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "⬅️ بازگشت به Reference"
                                                : "⬅️ Back to Reference",
                                        callback_data: "reference",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🏠 منوی اصلی"
                                                : "🏠 Main Menu",
                                        callback_data: "main_menu",
                                    },
                                ],
                            ],
                        },
                    );

                    return new Response("OK");
                }

                return new Response("OK");
            }

            if (!update.message) {
                return new Response("OK");
            }

            const chatId = update.message.chat.id;
            const message = update.message.text;

            if (message === "/start") {
                const existingUser = await getUser(chatId, env);

                if (!existingUser) {
                    await env.learning_js_bot_db
                        .prepare(
                            "INSERT INTO users (telegram_id) VALUES (?)",
                        )
                        .bind(String(chatId))
                        .run();

                    await ensureProgress(chatId, env);

                    await sendLanguageMenu(
                        chatId,
                        env,
                        true,
                    );

                    return new Response("OK");
                }

                await ensureProgress(chatId, env);

                const language = existingUser.language || "en";

                const currentLesson = lessons.find(
                    (lesson) => lesson.id === existingUser.current_lesson,
                );

                await sendMessage(
                    chatId,
                    env,
                    language === "fa"
                        ? currentLesson
                            ? `👋 خوش برگشتی!\n\n📚 درس فعلی شما:\n${currentLesson.faTitle}\n\nآماده‌ای به یادگیری ادامه بدی؟`
                            : "👋 خوش برگشتی!\n\n🏆 شما تمام درس‌های موجود را به پایان رسانده‌اید!"
                        : currentLesson
                            ? `👋 Welcome back!\n\n📚 Your current lesson:\n${currentLesson.title}\n\nReady to continue learning?`
                            : "👋 Welcome back!\n\n🏆 You've completed all available lessons!",
                );

                await sendMainMenu(chatId, env);

                return new Response("OK");
            }

            const resetConfirmation = await env.learning_js_bot_db
                .prepare(
                    "SELECT reset_confirmation FROM users WHERE telegram_id = ?",
                )
                .bind(String(chatId))
                .first();

            if (resetConfirmation?.reset_confirmation === 1) {
                const normalizedMessage = message.trim().toLowerCase();

                if (normalizedMessage === "delete") {
                    await env.learning_js_bot_db
                        .prepare(
                            `UPDATE users
                 SET current_lesson = 1,
                     reset_confirmation = 0
                 WHERE telegram_id = ?`,
                        )
                        .bind(String(chatId))
                        .run();

                    await env.learning_js_bot_db
                        .prepare(
                            "DELETE FROM progress WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .run();

                    await env.learning_js_bot_db
                        .prepare(
                            "DELETE FROM answered_questions WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .run();

                    await env.learning_js_bot_db
                        .prepare(
                            "DELETE FROM quiz_sessions WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .run();

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "✅ پیشرفت شما با موفقیت بازنشانی شد.\n\n🚀 شما دوباره از درس اول شروع می‌کنید."
                            : "✅ Progress Reset\n\nYour learning progress has been reset.\n\n🚀 You're back to Lesson 1.",
                    );

                    await sendMainMenu(chatId, env);

                    return new Response("OK");
                }

                await env.learning_js_bot_db
                    .prepare(
                        `UPDATE users
             SET reset_confirmation = 0
             WHERE telegram_id = ?`,
                    )
                    .bind(String(chatId))
                    .run();

                const user = await getUser(chatId, env);
                const language = user?.language || "en";

                await sendMessage(
                    chatId,
                    env,
                    language === "fa"
                        ? "❌ بازنشانی لغو شد.\n\nپیشرفت شما امن است."
                        : "❌ Reset cancelled.\n\nYour progress is safe.",
                );

                await sendMainMenu(chatId, env);

                return new Response("OK");
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