import { lessons } from "./lessons.js";

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
                            }),
                        },
                    );
                }

                if (callbackData === "quiz") {
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
                                    "🧠 Quiz\n\n" +
                                    "The quiz system is coming soon! 🎯",
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