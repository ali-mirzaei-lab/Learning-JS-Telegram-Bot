export default {
    async fetch(request, env) {
        if (request.method !== "POST") {
            return new Response("Learning JS Telegram Bot is alive!");
        }

        try {
            const update = await request.json();

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
                            text: "Hello! 👋 Your Learning JS Telegram Bot is working!",
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