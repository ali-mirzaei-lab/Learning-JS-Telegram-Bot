import { lessons } from "./lessons.js";
import { questions } from "./questions.js";

const quizzes = new Map();

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
                    const lesson = lessons[0];

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

                    const resultText = isCorrect
                        ? "✅ Correct!\n\n"
                        : "❌ Incorrect!\n\n";

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
                            }),
                        },
                    );
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
                }

                if (callbackData === "progress") {
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
                                    "📊 My Progress\n\n" +
                                    "Your progress system is coming soon! 📈",
                            }),
                        },
                    );
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
                }

                return new Response("OK");
            }

            if (!update.message) {
                return new Response("OK");
            }

            const chatId = update.message.chat.id;
            const message = update.message.text;

            if (message === "/start") {
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