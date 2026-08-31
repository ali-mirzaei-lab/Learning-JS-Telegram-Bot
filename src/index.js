import { lessons } from "./lessons.js";
import { questions } from "./questions.js";

const quizzes = new Map();

async function sendMainMenu(chatId, env) {
    await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: "🏠 Main Menu\n\nChoose what you'd like to do:",
                reply_markup: {
                    inline_keyboard: [
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
                    ],
                },
            }),
        },
    );
}

async function ensureProgress(chatId, env) {
    await env.learning_js_bot_db
        .prepare(
            "INSERT OR IGNORE INTO progress (telegram_id) VALUES (?)",
        )
        .bind(String(chatId))
        .run();
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
            return new Response("Learning JS Telegram Bot is alive!");
        }

        try {
            const update = await request.json();

            if (update.callback_query) {
                const callbackQuery = update.callback_query;
                const callbackData = callbackQuery.data;
                const chatId = callbackQuery.message.chat.id;

                if (callbackData === "daily_lesson") {
                    const user = await env.learning_js_bot_db
                        .prepare(
                            "SELECT current_lesson FROM users WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .first();

                    if (!user) {
                        return new Response("User not found");
                    }

                    const lesson = lessons.find(
                        (lesson) => lesson.id === user.current_lesson,
                    );

                    if (!lesson) {
                        await fetch(
                            `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    chat_id: chatId,
                                    text:
                                        "🎉 Congratulations!\n\n" +
                                        "You've completed all available lessons!",
                                }),
                            },
                        );

                        await sendMainMenu(chatId, env);

                        return new Response("OK");
                    }

                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: `📚 Today's Lesson\n\n${lesson.title}\n\n${lesson.content}`,
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: "❓ Quick Question",
                                                callback_data: `question_${lesson.id}`,
                                            },
                                        ],
                                    ],
                                },
                            }),
                        },
                    );
                }

                if (callbackData.startsWith("question_")) {
                    const lessonId = Number(callbackData.split("_")[1]);

                    const lessonQuestions = questions.filter(
                        (question) => question.lessonId === lessonId,
                    );

                    if (lessonQuestions.length === 0) {
                        return new Response("OK");
                    }

                    const question = lessonQuestions[0];

                    const optionButtons = question.options.map(
                        (option, index) => [
                            {
                                text: option,
                                callback_data: `answer_${question.id}_${index}`,
                            },
                        ],
                    );

                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: `❓ Quick Question\n\n${question.question}`,
                                reply_markup: {
                                    inline_keyboard: optionButtons,
                                },
                            }),
                        },
                    );
                }

                if (callbackData.startsWith("answer_")) {
                    const parts = callbackData.split("_");

                    const questionId = Number(parts[1]);
                    const answerIndex = Number(parts[2]);

                    const question = questions.find(
                        (question) => question.id === questionId,
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
                        ? "✅ Correct!\n\n"
                        : "❌ Incorrect!\n\n";

                    const user = await env.learning_js_bot_db
                        .prepare(
                            "SELECT current_lesson FROM users WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .first();

                    if (!user) {
                        return new Response("User not found");
                    }

                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text:
                                    resultText +
                                    question.explanation,
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            {
                                                text: "✅ Complete Lesson",
                                                callback_data: `complete_lesson_${user.current_lesson}`,
                                            },
                                        ],
                                    ],
                                },
                            }),
                        },
                    );
                }

                if (callbackData.startsWith("complete_lesson_")) {
                    const lessonId = Number(
                        callbackData.split("_")[2],
                    );

                    const user = await env.learning_js_bot_db
                        .prepare(
                            "SELECT current_lesson FROM users WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .first();

                    if (!user) {
                        return new Response("User not found");
                    }

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

                        await fetch(
                            `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    chat_id: chatId,
                                    text:
                                        "🎉 Lesson Complete!\n\n" +
                                        `You've completed "${currentLesson.title}".\n\n` +
                                        `📚 Next lesson: ${nextLesson.title}`,
                                }),
                            },
                        );
                    } else {
                        await fetch(
                            `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    chat_id: chatId,
                                    text:
                                        "🎉 Congratulations!\n\n" +
                                        "You've completed all available lessons!",
                                }),
                            },
                        );
                    }

                    await sendMainMenu(chatId, env);
                }

                if (callbackData === "quiz") {
                    const shuffledQuestions = [...questions].sort(
                        () => Math.random() - 0.5,
                    );

                    const quizQuestions = shuffledQuestions.slice(0, 5);

                    quizzes.set(chatId, {
                        questions: quizQuestions,
                        currentQuestion: 0,
                        score: 0,
                    });

                    const quiz = quizzes.get(chatId);
                    const question = quiz.questions[0];

                    const optionButtons = question.options.map(
                        (option, index) => [
                            {
                                text: option,
                                callback_data: `quiz_answer_${question.id}_${index}`,
                            },
                        ],
                    );

                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text:
                                    `🧠 JavaScript Quiz\n\n` +
                                    `Question 1/${quiz.questions.length}\n\n` +
                                    question.question,
                                reply_markup: {
                                    inline_keyboard: optionButtons,
                                },
                            }),
                        },
                    );
                }

                if (callbackData.startsWith("quiz_answer_")) {
                    const parts = callbackData.split("_");

                    const questionId = Number(parts[2]);
                    const answerIndex = Number(parts[3]);

                    const quiz = quizzes.get(chatId);

                    if (!quiz) {
                        return new Response("OK");
                    }

                    const question = quiz.questions.find(
                        (question) => question.id === questionId,
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

                    const resultText = isCorrect
                        ? "✅ Correct!\n\n"
                        : "❌ Incorrect!\n\n";

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

                        await fetch(
                            `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    chat_id: chatId,
                                    text:
                                        resultText +
                                        question.explanation +
                                        `\n\n🏆 Quiz Complete!\n\n` +
                                        `Score: ${quiz.score}/${quiz.questions.length}`,
                                }),
                            },
                        );

                        quizzes.delete(chatId);

                        await sendMainMenu(chatId, env);

                        return new Response("OK");
                    }

                    const nextQuestion =
                        quiz.questions[quiz.currentQuestion];

                    const optionButtons =
                        nextQuestion.options.map(
                            (option, index) => [
                                {
                                    text: option,
                                    callback_data: `quiz_answer_${nextQuestion.id}_${index}`,
                                },
                            ],
                        );

                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text:
                                    resultText +
                                    question.explanation +
                                    `\n\n🧠 Question ${quiz.currentQuestion + 1}/${quiz.questions.length}\n\n` +
                                    nextQuestion.question,
                                reply_markup: {
                                    inline_keyboard: optionButtons,
                                },
                            }),
                        },
                    );
                }

                if (callbackData === "challenge") {
                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text:
                                    "💻 Challenge\n\n" +
                                    "The coding challenge system is coming soon! 🔥",
                            }),
                        },
                    );

                    await sendMainMenu(chatId, env);
                }

                if (callbackData === "progress") {
                    await ensureProgress(chatId, env);

                    const user = await env.learning_js_bot_db
                        .prepare(
                            "SELECT current_lesson FROM users WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .first();

                    const progress = await env.learning_js_bot_db
                        .prepare(
                            "SELECT questions_answered, correct_answers, quizzes_completed FROM progress WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .first();

                    if (!user || !progress) {
                        return new Response("User not found");
                    }

                    const completedLessons =
                        Math.max(user.current_lesson - 1, 0);

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
                        "📊 My Progress\n\n" +
                        `📚 Lessons completed: ${completedLessons}/${totalLessons}\n` +
                        `🎯 Current lesson: ${
                            currentLesson
                                ? currentLesson.title
                                : "All lessons completed!"
                        }\n\n` +
                        `❓ Questions answered: ${progress.questions_answered}\n` +
                        `✅ Correct answers: ${progress.correct_answers}\n` +
                        `📈 Accuracy: ${accuracy}%\n` +
                        `🏆 Quizzes completed: ${progress.quizzes_completed}`;

                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: progressText,
                            }),
                        },
                    );

                    await sendMainMenu(chatId, env);
                }

                if (callbackData === "reference") {
                    await fetch(
                        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text:
                                    "📖 JS Reference\n\n" +
                                    "The JavaScript reference is coming soon! 📚",
                            }),
                        },
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

                await fetch(
                    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text:
                                "🤖 JavaScript Learning Bot\n\n" +
                                "Welcome! 👋\n\n" +
                                "I'm your personal JavaScript learning companion.\n\n" +
                                "Choose what you'd like to do:",
                            reply_markup: {
                                inline_keyboard: [
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
                                ],
                            },
                        }),
                    },
                );
            }

            return new Response("OK");
        } catch (error) {
            console.error(error);
            return new Response("Error", { status: 500 });
        }
    },

    async scheduled(event, env, ctx) {
        console.log(`Scheduled event fired at ${event.cron}`);
    },
};