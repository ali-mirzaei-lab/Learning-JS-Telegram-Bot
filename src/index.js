import { lessons } from "./lessons.js";
import { questions } from "./questions.js";
import { references } from "./reference.js";
import { challenges } from "./challenges.js";

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

async function getChallengeProgress(chatId, env) {
    const result = await env.learning_js_bot_db
        .prepare(
            `SELECT *
             FROM challenge_progress
             WHERE telegram_id = ?`,
        )
        .bind(String(chatId))
        .first();

    return result;
}

async function ensureChallengeProgress(chatId, env) {
    await env.learning_js_bot_db
        .prepare(
            `INSERT OR IGNORE INTO challenge_progress
             (telegram_id)
             VALUES (?)`,
        )
        .bind(String(chatId))
        .run();

    return getChallengeProgress(chatId, env);
}

function getTodayDate() {
    return new Date().toISOString().slice(0, 10);
}

async function getDailyChallenge(
    chatId,
    completedLessons,
    env,
) {
    const eligibleLessons =
        completedLessons.filter(
            (lesson) =>
                challenges.some(
                    (challenge) =>
                        challenge.lessonId ===
                        lesson.id,
                ),
        );

    if (eligibleLessons.length === 0) {
        return null;
    }

    let lessonCycleRow =
        await env.learning_js_bot_db
            .prepare(
                `SELECT MAX(cycle) AS cycle
                 FROM challenge_lesson_history
                 WHERE telegram_id = ?`,
            )
            .bind(String(chatId))
            .first();

    let lessonCycle =
        lessonCycleRow?.cycle || 1;

    let lessonHistory =
        await env.learning_js_bot_db
            .prepare(
                `SELECT lesson_id
                 FROM challenge_lesson_history
                 WHERE telegram_id = ?
                 AND cycle = ?`,
            )
            .bind(
                String(chatId),
                lessonCycle,
            )
            .all();

    let usedLessonIds =
        new Set(
            lessonHistory.results.map(
                (row) => Number(row.lesson_id),
            ),
        );

    let availableLessons =
        eligibleLessons.filter(
            (lesson) =>
                !usedLessonIds.has(lesson.id),
        );

    if (availableLessons.length === 0) {
        lessonCycle += 1;

        usedLessonIds = new Set();

        availableLessons =
            [...eligibleLessons];
    }

    const selectedLesson =
        availableLessons[
        Math.floor(
            Math.random() *
            availableLessons.length,
        )
        ];

    let questionCycleRow =
        await env.learning_js_bot_db
            .prepare(
                `SELECT MAX(cycle) AS cycle
                 FROM challenge_question_history
                 WHERE telegram_id = ?
                 AND lesson_id = ?`,
            )
            .bind(
                String(chatId),
                selectedLesson.id,
            )
            .first();

    let questionCycle =
        questionCycleRow?.cycle || 1;

    let questionHistory =
        await env.learning_js_bot_db
            .prepare(
                `SELECT question_id
                 FROM challenge_question_history
                 WHERE telegram_id = ?
                 AND lesson_id = ?
                 AND cycle = ?`,
            )
            .bind(
                String(chatId),
                selectedLesson.id,
                questionCycle,
            )
            .all();

    let usedQuestionIds =
        new Set(
            questionHistory.results.map(
                (row) => Number(row.question_id),
            ),
        );

    const lessonChallenges =
        challenges.filter(
            (challenge) =>
                challenge.lessonId ===
                selectedLesson.id,
        );

    let availableQuestions =
        lessonChallenges.filter(
            (challenge) =>
                !usedQuestionIds.has(
                    challenge.id,
                ),
        );

    if (availableQuestions.length === 0) {
        questionCycle += 1;

        availableQuestions =
            [...lessonChallenges];
    }

    const selectedChallenge =
        availableQuestions[
        Math.floor(
            Math.random() *
            availableQuestions.length,
        )
        ];

    return {
        ...selectedChallenge,
        lessonCycle,
        questionCycle,
    };
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
        parse_mode: "HTML",
    };

    if (replyMarkup) {
        body.reply_markup = replyMarkup;
    }

    if (text.includes("<a href=")) {
        body.link_preview_options = {
            is_disabled: true,
        };
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
                            text: "🧩 چالش امروز",
                            callback_data: "challenge",
                        },
                    ],
                    [
                        {
                            text: "🧠 آزمون",
                            callback_data: "quiz",
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
                            text: "ℹ️ درباره",
                            callback_data: "about",
                        },
                    ],
                    [
                        {
                            text: "⚙️ تنظیمات",
                            callback_data: "settings",
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
                            text: "🧩 Daily Challenge",
                            callback_data: "challenge",
                        },
                    ],
                    [
                        {
                            text: "🧠 Quiz",
                            callback_data: "quiz",
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
                            text: "ℹ️ About",
                            callback_data: "about",
                        },
                    ],
                    [
                        {
                            text: "⚙️ Settings",
                            callback_data: "settings",
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

function getQuizSize(completedLessonsCount) {
    return Math.min(
        12,
        Math.max(5, completedLessonsCount + 4),
    );
}

function shuffleArray(array) {
    return [...array].sort(
        () => Math.random() - 0.5,
    );
}

async function getQuizHistory(
    chatId,
    difficulty,
    cycle,
    env,
) {
    const rows =
        await env.learning_js_bot_db
            .prepare(
                "SELECT question_id FROM quiz_question_history WHERE telegram_id = ? AND difficulty = ? AND cycle = ?",
            )
            .bind(
                String(chatId),
                difficulty,
                cycle,
            )
            .all();

    return new Set(
        rows.results.map(
            (row) => Number(row.question_id),
        ),
    );
}

async function getCurrentQuizCycle(
    chatId,
    difficulty,
    env,
) {
    const row =
        await env.learning_js_bot_db
            .prepare(
                "SELECT MAX(cycle) AS cycle FROM quiz_question_history WHERE telegram_id = ? AND difficulty = ?",
            )
            .bind(
                String(chatId),
                difficulty,
            )
            .first();

    return row?.cycle || 1;
}

async function recordQuizQuestionHistory(
    chatId,
    selectedQuestions,
    env,
) {
    for (const question of selectedQuestions) {
        await env.learning_js_bot_db
            .prepare(
                `INSERT OR IGNORE INTO quiz_question_history
                (telegram_id, question_id, difficulty, cycle, used_at)
                VALUES (?, ?, ?, ?, ?)`,
            )
            .bind(
                String(chatId),
                question.id,
                question.difficulty,
                question.quizCycle || 1,
                Date.now(),
            )
            .run();
    }
}

async function recordQuizAnswer(
    chatId,
    question,
    isCorrect,
    env,
) {
    await env.learning_js_bot_db
        .prepare(
            `INSERT INTO quiz_answer_history
            (telegram_id, question_id, lesson_id, difficulty, is_correct, answered_at)
            VALUES (?, ?, ?, ?, ?, ?)`,
        )
        .bind(
            String(chatId),
            question.id,
            question.lessonId,
            question.difficulty,
            isCorrect ? 1 : 0,
            Date.now(),
        )
        .run();
}

async function selectQuizQuestions(
    chatId,
    completedLessons,
    difficulty,
    env,
) {
    const quizSize = getQuizSize(
        completedLessons.length,
    );

    let cycle = await getCurrentQuizCycle(
        chatId,
        difficulty,
        env,
    );

    const eligibleQuestions = questions.filter(
        (question) =>
            question.difficulty === difficulty &&
            completedLessons.some(
                (lesson) =>
                    lesson.id === question.lessonId,
            ),
    );

    if (eligibleQuestions.length === 0) {
        return [];
    }

    let history = await getQuizHistory(
        chatId,
        difficulty,
        cycle,
        env,
    );

    let unusedQuestions =
        eligibleQuestions.filter(
            (question) =>
                !history.has(question.id),
        );

    if (unusedQuestions.length === 0) {
        cycle++;
        history = new Set();
        unusedQuestions = [
            ...eligibleQuestions,
        ];
    }

    const selectedQuestions = [];

    const shuffledLessons =
        shuffleArray(completedLessons);

    for (const lesson of shuffledLessons) {
        if (selectedQuestions.length >= quizSize) {
            break;
        }

        let lessonUnused =
            unusedQuestions.filter(
                (question) =>
                    question.lessonId === lesson.id,
            );

        if (lessonUnused.length === 0) {
            cycle++;

            lessonUnused =
                eligibleQuestions.filter(
                    (question) =>
                        question.lessonId ===
                        lesson.id &&
                        !selectedQuestions.some(
                            (selected) =>
                                selected.id ===
                                question.id,
                        ),
                );
        }

        if (lessonUnused.length === 0) {
            continue;
        }

        const selected =
            shuffleArray(lessonUnused)[0];

        selectedQuestions.push({
            ...selected,
            quizCycle: cycle,
        });

        unusedQuestions =
            unusedQuestions.filter(
                (question) =>
                    question.id !== selected.id,
            );
    }

    while (
        selectedQuestions.length < quizSize
    ) {
        if (unusedQuestions.length === 0) {
            cycle++;

            unusedQuestions =
                shuffleArray(
                    eligibleQuestions,
                ).filter(
                    (question) =>
                        !selectedQuestions.some(
                            (selected) =>
                                selected.id ===
                                question.id,
                        ),
                );

            if (unusedQuestions.length === 0) {
                break;
            }
        }

        const lessonCounts = {};

        for (const question of selectedQuestions) {
            lessonCounts[question.lessonId] =
                (lessonCounts[question.lessonId] || 0) +
                1;
        }

        const shuffledUnused =
            shuffleArray(unusedQuestions);

        shuffledUnused.sort(
            (a, b) =>
                (lessonCounts[a.lessonId] || 0) -
                (lessonCounts[b.lessonId] || 0),
        );

        const selected = shuffledUnused[0];

        selectedQuestions.push({
            ...selected,
            quizCycle: cycle,
        });

        unusedQuestions =
            unusedQuestions.filter(
                (question) =>
                    question.id !== selected.id,
            );
    }

    await recordQuizQuestionHistory(
        chatId,
        selectedQuestions,
        env,
    );

    return shuffleArray(
        selectedQuestions,
    );
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

                if (callbackQuery.data === "about") {
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
                            ? "ℹ️ درباره"
                            : "ℹ️ About",
                        {
                            inline_keyboard:
                                language === "fa"
                                    ? [
                                        [
                                            {
                                                text: "📖 معرفی بات",
                                                callback_data: "introduction",
                                            },
                                        ],
                                        [
                                            {
                                                text: "👨‍💻 درباره سازنده",
                                                callback_data: "credits",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🧭 راهنمای کامل",
                                                callback_data: "complete_guide",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🏠 منوی اصلی",
                                                callback_data: "main_menu",
                                            },
                                        ],
                                    ]
                                    : [
                                        [
                                            {
                                                text: "📖 Introduction",
                                                callback_data: "introduction",
                                            },
                                        ],
                                        [
                                            {
                                                text: "👨‍💻 Credits",
                                                callback_data: "credits",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🧭 Complete Guide",
                                                callback_data: "complete_guide",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🏠 Main Menu",
                                                callback_data: "main_menu",
                                            },
                                        ],
                                    ],
                        },
                    );

                    return new Response("OK");
                }

                if (callbackQuery.data === "complete_guide") {
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
                            ? "🧭 راهنمای کامل\n\nدرباره‌ی کدوم بخش می‌خوای بیشتر بدونی؟"
                            : "🧭 Complete Guide\n\nWhat would you like to learn more about?",
                        {
                            inline_keyboard:
                                language === "fa"
                                    ? [
                                        [
                                            {
                                                text: "📚 درس‌ها",
                                                callback_data: "guide_lessons",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🧠 آزمون",
                                                callback_data: "guide_quiz",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🧩 چالش روزانه",
                                                callback_data: "guide_challenge",
                                            },
                                        ],
                                        [
                                            {
                                                text: "📊 پیشرفت من",
                                                callback_data: "guide_progress",
                                            },
                                        ],
                                        [
                                            {
                                                text: "📖 JS Reference",
                                                callback_data: "guide_reference",
                                            },
                                        ],
                                        [
                                            {
                                                text: "⬅️ درباره",
                                                callback_data: "about",
                                            },
                                        ],
                                    ]
                                    : [
                                        [
                                            {
                                                text: "📚 Lessons",
                                                callback_data: "guide_lessons",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🧠 Quiz",
                                                callback_data: "guide_quiz",
                                            },
                                        ],
                                        [
                                            {
                                                text: "🧩 Daily Challenge",
                                                callback_data: "guide_challenge",
                                            },
                                        ],
                                        [
                                            {
                                                text: "📊 My Progress",
                                                callback_data: "guide_progress",
                                            },
                                        ],
                                        [
                                            {
                                                text: "📖 JS Reference",
                                                callback_data: "guide_reference",
                                            },
                                        ],
                                        [
                                            {
                                                text: "⬅️ About",
                                                callback_data: "about",
                                            },
                                        ],
                                    ],
                        },
                    );

                    return new Response("OK");
                }

                if (callbackQuery.data === "guide_lessons") {
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
                            ? `📚 درس‌ها

بخش درس‌ها جاییه که مسیر اصلی یادگیری جاوااسکریپتت رو دنبال می‌کنی.

━━━━━━━━━━━━━━

📅 درس روزانه

هر روز یک درس جدید در دسترس قرار می‌گیره.

می‌تونی هر بار روی یک موضوع تمرکز کنی و بدون عجله کل دوره رو جلو ببری.

هر درس شامل:
• یک موضوع جاوااسکریپت
• یک توضیح کوتاه
• ۱۰ سؤال تمرینی

━━━━━━━━━━━━━━

📈 پیشرفت

بعد از تکمیل هر درس، پیشرفتت به‌صورت خودکار ذخیره می‌شه.

درس‌های تکمیل‌شده روی بخش‌های دیگه‌ی سیستم یادگیری، از جمله Quiz 2.0، هم تأثیر می‌ذارن.

━━━━━━━━━━━━━━

📚 همه درس‌ها

از بخش همه درس‌ها می‌تونی درس‌هایی که در دسترست قرار گرفتن رو ببینی و مطالب قبلی رو دوباره مرور کنی.

━━━━━━━━━━━━━━

🔗 ارتباط با بخش‌های دیگه

درس‌ها پایه‌ی بخش‌های دیگه‌ی ربات هستن.

یاد بگیر ← با سؤال‌ها تمرین کن ← در JS Reference مرور کن ← با Quiz خودت رو امتحان کن ← چالش روزانه رو انجام بده

━━━━━━━━━━━━━━`
                            : `📚 Lessons

The Lessons section is where your main JavaScript learning journey happens.

━━━━━━━━━━━━━━

📅 DAILY LESSON

A new lesson becomes available each day.

You can focus on one topic at a time instead of rushing through the entire course.

Each lesson contains:
• A JavaScript topic
• A short explanation
• 10 practice questions

━━━━━━━━━━━━━━

📈 PROGRESS

Once you complete a lesson, your progress is saved automatically.

Your completed lessons also affect other parts of the learning system, including Quiz 2.0.

━━━━━━━━━━━━━━

📚 ALL LESSONS

Use All Lessons to see the lessons you've unlocked and revisit previous material.

━━━━━━━━━━━━━━

🔗 CONNECTED FEATURES

Lessons are the foundation of the rest of the bot.

Learn a topic → Practice with questions → Review it in JS Reference → Test yourself with Quiz → Take on Daily Challenges

━━━━━━━━━━━━━━`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "⬅️ راهنمای کامل"
                                                : "⬅️ Back to Guide",
                                        callback_data: "complete_guide",
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

                if (callbackQuery.data === "guide_quiz") {
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
                            ? `🧠 آزمون

بخش آزمون جاییه که می‌تونی ببینی چقدر مفاهیم جاوااسکریپتی که یاد گرفتی رو واقعاً درک کردی.

━━━━━━━━━━━━━━

🎚️ سطح دشواری

آزمون ۳.۰ سه سطح دشواری داره:

🟢 آسان
سؤال‌هایی که روی مفاهیم پایه تمرکز دارن.

🟡 متوسط
سؤال‌هایی که به درک قوی‌تری از مفاهیم نیاز دارن.

🔴 سخت
سؤال‌های چالش‌برانگیزتری که به درک عمیق‌تر و دقت بیشتری در حل مسئله نیاز دارن.

━━━━━━━━━━━━━━

🎯 انتخاب سؤال‌ها

سیستم آزمون از درس‌هایی که تکمیل کردی برای ساخت مجموعه سؤال‌ها استفاده می‌کنه.

سؤال‌ها از بین درس‌هایی که یاد گرفتی انتخاب می‌شن تا آزمون فقط روی یک موضوع متمرکز نباشه.

سیستم همچنین سؤال‌هایی که قبلاً در هر سطح دشواری دیدی رو به خاطر می‌سپاره و تا زمانی که سؤال‌های موجود در اون سطح استفاده نشده باشن، از تکرار اون‌ها جلوگیری می‌کنه.

━━━━━━━━━━━━━━

📊 تعداد سؤال‌ها

تعداد سؤال‌های هر آزمون به تعداد درس‌هایی که تکمیل کردی بستگی داره.

هرچه درس‌های بیشتری رو کامل کنی، آزمون‌ها می‌تونن طولانی‌تر بشن؛ تا حداکثر ۱۲ سؤال.

━━━━━━━━━━━━━━

📈 نتیجه آزمون

بعد از تموم کردن آزمون، می‌تونی این موارد رو ببینی:

• امتیازت
• دقت پاسخ‌ها
• سطح دشواری آزمون
• عملکردت در هر درس
• نقاط ضعفت برای مرور بیشتر
• بهترین رکورد دقتت

━━━━━━━━━━━━━━

💡 هدف

هدف آزمون فقط گرفتن امتیاز بالا نیست.

با آزمون می‌تونی بفهمی چه چیزهایی رو خوب یاد گرفتی، کجاها نیاز به تمرین بیشتری داری و چه موضوعاتی رو بهتره دوباره مرور کنی.

━━━━━━━━━━━━━━`
                            : `🧠 Quiz

The Quiz section is where you test how well you understand the JavaScript topics you've learned.

━━━━━━━━━━━━━━

🎚️ DIFFICULTY

Quiz 3.0 has three difficulty levels:

🟢 Easy
Questions focused on the fundamentals.

🟡 Medium
Questions that require a stronger understanding of the concepts.

🔴 Hard
More challenging questions that require deeper understanding and careful reasoning.

━━━━━━━━━━━━━━

🎯 HOW QUESTIONS ARE SELECTED

The quiz uses your completed lessons to build the question pool.

Questions are selected across the lessons you've learned, so the quiz doesn't focus on only one topic.

The system also remembers which questions you've already seen at each difficulty level and avoids repeating them until the available questions have been used.

━━━━━━━━━━━━━━

📊 QUIZ SIZE

The number of questions depends on how many lessons you've completed.

As you complete more lessons, your quizzes can become longer, up to 12 questions.

━━━━━━━━━━━━━━

📈 YOUR RESULTS

After finishing a quiz, you'll see:

• Your score
• Accuracy
• Quiz difficulty
• Performance by lesson
• Weak areas to review
• Your best accuracy

━━━━━━━━━━━━━━

💡 THE GOAL

The quiz isn't just about getting a high score.

Use it to find what you understand, discover where you need more practice, and identify the topics you should review.

━━━━━━━━━━━━━━`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "⬅️ راهنمای کامل"
                                                : "⬅️ Back to Guide",
                                        callback_data: "complete_guide",
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

                if (callbackQuery.data === "guide_challenge") {
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
                            ? `🧩 چالش روزانه

بخش چالش روزانه هر روز یه چالش کوچیک جاوااسکریپتی بهت می‌ده که حلش کنی.

━━━━━━━━━━━━━━

📅 یک چالش در روز

هر روز فقط می‌تونی یک چالش رو کامل کنی.

بعد از تکمیل چالش، باید تا روز بعد صبر کنی تا چالش جدیدی در دسترست قرار بگیره.

━━━━━━━━━━━━━━

🧠 یک نوع تمرین متفاوت

چالش‌های روزانه کمی سخت‌تر از سؤال‌های معمولی آزمون هستن.

این چالش‌ها نوع سؤال‌های متفاوتی دارن و از یک مجموعه سؤال جدا از Quiz 3.0 استفاده می‌کنن.

یعنی قرار نیست همون سؤال‌های بخش آزمون رو فقط با یک شکل متفاوت دوباره ببینی.

━━━━━━━━━━━━━━

🎯 چرخش چالش‌ها

چالش‌ها از بین موضوعاتی که یاد گرفتی انتخاب می‌شن.

سیستم بین درس‌های در دسترست می‌چرخه تا مدام از یک موضوع خاص چالش نگیری.

سؤال‌ها هم داخل هر درس می‌چرخن تا از تکرار غیرضروری جلوگیری بشه.

━━━━━━━━━━━━━━

🔥 استریک

با انجام منظم چالش‌های روزانه می‌تونی استریک خودت رو بسازی.

روندت این موارد رو ثبت می‌کنه:

• استریک فعلی
• بهترین استریک
• تعداد کل چالش‌های تکمیل‌شده
• تعداد کل پاسخ‌های درست

━━━━━━━━━━━━━━

💡 هدف

هدف چالش روزانه این نیست که یه جلسه‌ی طولانی مطالعه داشته باشی.

هر روز یه فرصت کوچیکه تا چیزهایی که یاد گرفتی رو به یاد بیاری، یک مسئله‌ی کمی سخت‌تر رو حل کنی و مهارت‌های جاوااسکریپتت رو فعال نگه داری.

━━━━━━━━━━━━━━

🚀 فردا برگرد

یک چالش.
یک قدم کوچیک.
هر روز.

به یادگیری ادامه بده و استریکت رو زنده نگه دار. 🔥`
                            : `🧩 Daily Challenge

The Daily Challenge gives you one small JavaScript challenge to complete each day.

━━━━━━━━━━━━━━

📅 ONE CHALLENGE A DAY

You can complete only one challenge per day.

Once you complete it, you'll need to wait until the next day for another challenge.

━━━━━━━━━━━━━━

🧠 A DIFFERENT KIND OF PRACTICE

Daily Challenges are a bit trickier than regular quiz questions.

They also use different question types and a separate question pool from Quiz 3.0.

This means you won't simply get the same questions from the Quiz section in a different format.

━━━━━━━━━━━━━━

🎯 CHALLENGE ROTATION

Challenges are selected from topics you've already learned.

The system rotates through the available lessons so you don't keep getting challenges from the same topic.

Questions also rotate within each lesson to avoid unnecessary repetition.

━━━━━━━━━━━━━━

🔥 YOUR STREAK

Complete your daily challenges consistently to build a streak.

Your progress keeps track of:

• Current streak
• Best streak
• Total completed challenges
• Total correct answers

━━━━━━━━━━━━━━

💡 THE GOAL

The Daily Challenge isn't meant to be a long study session.

It's a small daily opportunity to recall what you've learned, solve a slightly trickier problem, and keep your JavaScript skills active.

━━━━━━━━━━━━━━

🚀 COME BACK TOMORROW

One challenge.
One small step.
Every day.

Keep learning and keep the streak alive. 🔥`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "⬅️ راهنمای کامل"
                                                : "⬅️ Back to Guide",
                                        callback_data: "complete_guide",
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

                if (callbackQuery.data === "guide_progress") {
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
                            ? `📊 پیشرفت من

بخش پیشرفت من یه نمای کلی از مسیر یادگیری جاوااسکریپتت بهت می‌ده.

━━━━━━━━━━━━━━

📚 پیشرفت یادگیری

توی این بخش می‌تونی ببینی چند درس رو کامل کردی و چقدر از مسیر دوره رو جلو رفتی.

پیشرفت درس‌هات همزمان با یادگیری به‌صورت خودکار ذخیره می‌شه.

━━━━━━━━━━━━━━

🧠 عملکرد در آزمون

عملکردت در آزمون‌ها و میزان دقت پاسخ‌هات رو دنبال کن.

همچنین می‌تونی بهترین رکورد دقتت رو ببینی و متوجه بشی کدوم بخش‌ها نیاز به تمرین بیشتری دارن.

━━━━━━━━━━━━━━

🔥 چالش روزانه

فعالیتت در چالش‌های روزانه هم در روند پیشرفتت ثبت می‌شه.

می‌تونی این موارد رو ببینی:

• استریک فعلی
• بهترین استریک
• تعداد کل چالش‌های تکمیل‌شده
• تعداد کل پاسخ‌های درست

━━━━━━━━━━━━━━

🎯 پیدا کردن نقاط ضعف

عملکردت در هر درس بهت کمک می‌کنه بفهمی توی کدوم موضوعات جاوااسکریپت قوی‌تری و کدوم موضوعات رو بهتره دوباره مرور کنی.

━━━━━━━━━━━━━━

💡 هدف

هدف بخش پیشرفت فقط نمایش چندتا عدد نیست.

از این بخش استفاده کن تا روند یادگیریت رو بهتر بشناسی، پیشرفتت رو ببینی و تصمیم بگیری قدم بعدیت روی چه موضوعی باشه.

━━━━━━━━━━━━━━`
                            : `📊 My Progress

The My Progress section gives you a clear overview of your JavaScript learning journey.

━━━━━━━━━━━━━━

📚 LEARNING PROGRESS

See how many lessons you've completed and how far you've progressed through the course.

Your lesson progress is saved automatically as you learn.

━━━━━━━━━━━━━━

🧠 QUIZ PERFORMANCE

Track your quiz performance and see how accurately you're answering questions.

You can also see your best accuracy and identify areas where you may need more practice.

━━━━━━━━━━━━━━

🔥 DAILY CHALLENGE

Your progress also includes your Daily Challenge activity.

You can see:

• Current streak
• Best streak
• Total completed challenges
• Total correct answers

━━━━━━━━━━━━━━

🎯 FIND YOUR WEAK AREAS

Your quiz performance by lesson helps you identify which JavaScript topics you're strongest in and which ones could use more review.

━━━━━━━━━━━━━━

💡 THE GOAL

My Progress isn't just about numbers.

Use it to understand your learning, notice improvement over time, and decide what you should focus on next.

━━━━━━━━━━━━━━`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "⬅️ راهنمای کامل"
                                                : "⬅️ Back to Guide",
                                        callback_data: "complete_guide",
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

                if (callbackQuery.data === "guide_reference") {
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
                            ? `📖 JS Reference

بخش مرجع جاوااسکریپت یه ابزار سریع برای مرور مفاهیمیه که یاد گرفتی.

━━━━━━━━━━━━━━

📚 مرور سریع

از این بخش استفاده کن تا مفاهیم جاوااسکریپتی که قبلاً یاد گرفتی رو سریع مرور کنی، بدون اینکه دوباره کل درس رو بخونی.

هر موضوع یه توضیح کوتاه از مفهوم و نکات مهمی که باید به خاطر داشته باشی داره.

━━━━━━━━━━━━━━

🧠 موضوعات یادگرفته‌شده

این بخش روی موضوعات جاوااسکریپتی تمرکز داره که در ربات آموزش داده می‌شن.

هرچقدر درس‌های بیشتری رو جلو ببری، مفاهیم بیشتری هم برای مرور در دسترست قرار می‌گیرن.

━━━━━━━━━━━━━━

🎯 چه زمانی استفاده کنیم؟

وقتی این موقعیت‌ها پیش اومد، از مرجع استفاده کن:

• وقتی به یه مرور سریع نیاز داری
• وقتی یادت رفته یه مفهوم چطور کار می‌کنه
• وقتی می‌خوای قبل از آزمون مطالب رو مرور کنی
• وقتی می‌خوای سریع یه مفهوم جاوااسکریپتی رو بررسی کنی

━━━━━━━━━━━━━━

💡 هدف

هدف این بخش جایگزین کردن درس‌ها نیست.

این بخش یه راه سریعه برای اینکه مطالب رو دوباره یادت بیاری و مفاهیم مهم جاوااسکریپت رو همیشه دم دست داشته باشی.

━━━━━━━━━━━━━━`
                            : `📖 JS Reference

The JS Reference is your quick JavaScript review tool.

━━━━━━━━━━━━━━

📚 QUICK REVIEW

Use it to quickly review JavaScript concepts you've already learned without going back through the full lessons.

Each topic gives you a concise explanation of the concept and the key points you need to remember.

━━━━━━━━━━━━━━

🧠 LEARNED TOPICS

The Reference focuses on the JavaScript topics covered by the bot.

As you progress through the lessons, you'll have more concepts available to review.

━━━━━━━━━━━━━━

🎯 WHEN TO USE IT

Use the Reference when:

• You need a quick refresher
• You forgot how a concept works
• You want to review before taking a quiz
• You want to quickly check a JavaScript concept

━━━━━━━━━━━━━━

💡 THE GOAL

The Reference isn't meant to replace the lessons.

It's a quick way to refresh your memory and keep important JavaScript concepts close at hand.

━━━━━━━━━━━━━━`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "⬅️ راهنمای کامل"
                                                : "⬅️ Back to Guide",
                                        callback_data: "complete_guide",
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



                if (callbackQuery.data === "credits") {
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
                            ? `🧩 ربات آموزش جاوااسکریپت

این پروژه رو همزمان با یادگیری جاوااسکریپت ساختم.

━━━━━━━━━━━━━━

👨‍💻 سازنده

علی میرزایی
&lt;Frontend Developer /&gt;

━━━━━━━━━━━━━━

🎯 درباره‌ی پروژه

این ربات یه محیط ساده و کاربردیه برای یادگیری و تمرین جاوااسکریپت.

سعی کردم یادگیری رو تا جای ممکن عملی و جذاب نگه دارم؛ یعنی هم یاد بگیری، هم خودت رو با سؤال و چالش امتحان کنی و هم روند پیشرفتت رو ببینی.

━━━━━━━━━━━━━━

⚙️ ساخته‌شده با

JavaScript
Cloudflare Workers
Cloudflare D1
Telegram Bot API

━━━━━━━━━━━━━━

🤝 با تشکر از

استاد پارسا قربانیان و  Parnian Web Design School
برای آموزش و همراهی در این مسیر. ❤️

━━━━━━━━━━━━━━

🔗 ارتباط با من

<a href="https://github.com/ali-mirzaei-dev">GitHub</a> · <a href="https://www.linkedin.com/in/ali-mirzaei-dev/">LinkedIn</a> · <a href="https://instagram.com/ali.mirzaei.dev">Instagram</a>

━━━━━━━━━━━━━━

این پروژه با جاوااسکریپت، کلی کنجکاوی
و مقدار خیلی زیادی دیباگ ساخته شده. 😭

🤖 تشکر ویژه از Edward (ChatGPT)

که توی ایده‌ها، باگ‌ها، تصمیم‌های عجیب
و کلی جلسه‌ی دیباگ کنارم بود.`
                            : `🧩 JavaScript Learning Bot

Built while learning JavaScript.

This project started as a way to practice JavaScript and gradually evolved into a complete learning system.

━━━━━━━━━━━━━━

👨‍💻 CREATOR

Ali Mirzaei
&lt;Frontend Developer /&gt;

━━━━━━━━━━━━━━

🎯 ABOUT THE PROJECT

A hands-on JavaScript learning environment designed around lessons, quizzes, challenges, and practical learning.

━━━━━━━━━━━━━━

⚙️ BUILT WITH

JavaScript
Cloudflare Workers
Cloudflare D1
Telegram Bot API

━━━━━━━━━━━━━━

🤝 Mentor

Parsa Ghorbanian & Parnian Web Design School
Special thanks for the teaching and support throughout this journey. ❤️

━━━━━━━━━━━━━━

🔗 CONNECT

<a href="https://github.com/ali-mirzaei-dev">GitHub</a> · <a href="https://www.linkedin.com/in/ali-mirzaei-dev/">LinkedIn</a> · <a href="https://instagram.com/ali.mirzaei.dev">Instagram</a>
━━━━━━━━━━━━━━

Built with JavaScript, curiosity, and a lot of debugging. 😭

🤖 Special thanks to Edward (ChatGPT)

For the ideas, bugs, questionable decisions, and countless debugging sessions along the way.`,
                        {
                            inline_keyboard: [
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
                            link_preview_options: {
                                is_disabled: true,
                            },
                        },
                    );

                    return new Response("OK");
                }

                async function sendIntroduction(chatId, env, showStartButton = false) {
                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? `🚀 به ربات آموزش جاوااسکریپت خوش اومدی

یه راه عملی برای یادگیری، تمرین و محک زدن مهارت‌های جاوااسکریپت.

━━━━━━━━━━━━━━

💡 چرا این ربات ساخته شد؟

یادگیری جاوااسکریپت فقط خوندن سینتکس نیست.

باید چیزهایی که یاد می‌گیری رو واقعاً استفاده کنی، اشتباه کنی، بفهمی چرا اشتباه کردی و دوباره امتحان کنی.

این ربات با همین ایده ساخته شده؛ اینکه یادگیری جاوااسکریپت رو تا جای ممکن عملی‌تر و تعاملی‌تر کنه.

━━━━━━━━━━━━━━

📚 اینجا چه کارهایی می‌تونی انجام بدی؟

📚 درس‌ها
جاوااسکریپت رو قدم‌به‌قدم یاد بگیر و از مفاهیم پایه شروع کن.

هر روز فقط یک درس در دسترسه تا بتونی روی یک موضوع تمرکز کنی و با عجله جلو نری.

🧠 آزمون‌ها
دانشت رو با سؤال‌های آسان، متوسط و سخت امتحان کن.

🧩 چالش روزانه
هر روز با یک چالش جدید جاوااسکریپت خودت رو محک بزن.

هر روز فقط یک چالش می‌تونی انجام بدی؛ یه چالش کوچیک که هر روز دلیلی برای برگشتن و ادامه دادن بهت می‌ده.

📊 پیشرفت من
روند یادگیریت رو دنبال کن و ببین چقدر پیشرفت کردی.

📖 JS Reference
مفاهیم جاوااسکریپتی که یاد گرفتی رو سریع مرور کن.

━━━━━━━━━━━━━━

🎯 هدف

نگران این نباش که همیشه جواب درست رو بدی.

اشتباه کن.
دوباره امتحان کن.
بفهم چرا اشتباه کردی.
به پیشرفتت ادامه بده.

اشتباه کردن هم بخشی از یادگیریه.

━━━━━━━━━━━━━━

🚀 مسیر یادگیری

یاد بگیر → تمرین کن → اشتباه کن → پیشرفت کن

عجله نکن، کنجکاو بمون و از مسیر لذت ببر.

موفق باشی و از کدنویسی لذت ببر! 🚀`
                            : `🚀 Welcome to JavaScript Learning Bot

A hands-on way to learn, practice, and test your JavaScript skills.

━━━━━━━━━━━━━━

💡 WHY THIS BOT EXISTS

Learning JavaScript isn't just about reading syntax.

You need to actually use what you learn, make mistakes, figure out why they happened, and try again.

This bot was built around that idea — turning JavaScript learning into something more practical and interactive.

━━━━━━━━━━━━━━

📚 WHAT YOU CAN DO

📚 Lessons
Learn JavaScript step by step, starting with the fundamentals.

Only one lesson is available each day, so you can focus on learning one topic at a time and avoid rushing through the material.

🧠 Quizzes
Test your knowledge with Easy, Medium, and Hard questions.

🧩 Daily Challenge
Take on a new JavaScript challenge every day.

You can complete only one challenge per day, giving you a small challenge to come back to each day.

📊 My Progress
Keep track of your learning and see how you're improving.

📖 JS Reference
Quickly review the JavaScript concepts you've learned.

━━━━━━━━━━━━━━

🎯 THE GOAL

Don't worry about getting everything right.

Make mistakes.
Try again.
Understand why you were wrong.
Keep improving.

That's part of learning.

━━━━━━━━━━━━━━

🚀 THE JOURNEY

Learn → Practice → Make mistakes → Improve

Take your time, stay curious, and enjoy the process.

Good luck — and have fun coding! 🚀`,
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text: showStartButton
                                            ? language === "fa"
                                                ? "🚀 شروع یادگیری"
                                                : "🚀 Start Learning"
                                            : language === "fa"
                                                ? "🏠 منوی اصلی"
                                                : "🏠 Main Menu",
                                        callback_data: showStartButton
                                            ? "start_learning"
                                            : "main_menu",
                                    },
                                ],
                            ],
                        },
                    );
                }

                if (callbackQuery.data === "introduction") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    await sendIntroduction(chatId, env);

                    return new Response("OK");
                }

                if (callbackQuery.data === "start_learning") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    await env.learning_js_bot_db
                        .prepare(
                            "UPDATE users SET has_seen_introduction = 1 WHERE telegram_id = ?",
                        )
                        .bind(String(chatId))
                        .run();

                    await sendMainMenu(chatId, env);

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

                    const user = await getUser(chatId, env);

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

                    if (user?.has_seen_introduction === 0) {
                        await sendIntroduction(chatId, env, true);
                    } else {
                        await sendMainMenu(chatId, env);
                    }

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
                        (lesson) => lesson.id < user.current_lesson,
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
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const today = getTodayDate();

                    if (user.last_lesson_date === today) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "📚 درس امروز را قبلاً انجام داده‌اید.\n\nفردا برای درس بعدی برگردید!"
                                : "📚 You already completed today's lesson.\n\nCome back tomorrow for the next lesson!",
                            {
                                inline_keyboard: [
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

                    return new Response("OK");
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

                    const keyboard = [];

                    if (lessonId === user.current_lesson) {
                        keyboard.push([
                            {
                                text:
                                    language === "fa"
                                        ? "❓ سؤال کوتاه"
                                        : "❓ Quick Question",
                                callback_data: `question_${lesson.id}`,
                            },
                        ]);
                    }

                    keyboard.push([
                        {
                            text:
                                language === "fa"
                                    ? "📚 همه درس‌ها"
                                    : "📚 All Lessons",
                            callback_data: "all_lessons",
                        },
                    ]);

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
                        `📚 ${title}\n\n${content}`,
                        {
                            inline_keyboard: keyboard,
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
                                "UPDATE users SET current_lesson = ?, last_lesson_date = ? WHERE telegram_id = ?",
                            )
                            .bind(
                                nextLesson.id,
                                getTodayDate(),
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
                                "UPDATE users SET current_lesson = ?, last_lesson_date = ? WHERE telegram_id = ?",
                            )
                            .bind(
                                lessons.length + 1,
                                getTodayDate(),
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
                        (lesson) => lesson.id < user.current_lesson,
                    );

                    if (availableLessons.length === 0) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🧠 آزمون\n\nهنوز درسی برای آزمون در دسترس نیست. 📚"
                                : "🧠 Quiz\n\nThere are no completed lessons available for a quiz yet. 📚",
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
                                            callback_data: "choose_quiz_difficulty",
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
                            ? "🧠 آزمون JavaScript\n\nسطح سختی آزمون را انتخاب کنید:"
                            : "🧠 JavaScript Quiz\n\nChoose your quiz difficulty:",
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🟢 آسان"
                                                : "🟢 Easy",
                                        callback_data: "quiz_difficulty_easy",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🟡 متوسط"
                                                : "🟡 Medium",
                                        callback_data: "quiz_difficulty_medium",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🔴 سخت"
                                                : "🔴 Hard",
                                        callback_data: "quiz_difficulty_hard",
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

                    await recordQuizAnswer(
                        chatId,
                        question,
                        isCorrect,
                        env,
                    );

                    if (isCorrect) {
                        quiz.score++;
                    }

                    question.isCorrect = isCorrect;

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
                        const accuracy =
                            Math.round(
                                (quiz.score /
                                    quiz.questions.length) *
                                100,
                            );

                        const difficulty =
                            question.difficulty;

                        const difficultyName =
                            language === "fa"
                                ? difficulty === "easy"
                                    ? "آسان"
                                    : difficulty === "medium"
                                        ? "متوسط"
                                        : "سخت"
                                : difficulty === "easy"
                                    ? "Easy"
                                    : difficulty === "medium"
                                        ? "Medium"
                                        : "Hard";

                        const lessonResults = {};

                        for (const quizQuestion of quiz.questions) {
                            if (
                                quizQuestion.isCorrect ===
                                undefined
                            ) {
                                continue;
                            }

                            if (
                                !lessonResults[
                                quizQuestion.lessonId
                                ]
                            ) {
                                lessonResults[
                                    quizQuestion.lessonId
                                ] = {
                                    total: 0,
                                    correct: 0,
                                };
                            }

                            lessonResults[
                                quizQuestion.lessonId
                            ].total++;

                            if (quizQuestion.isCorrect) {
                                lessonResults[
                                    quizQuestion.lessonId
                                ].correct++;
                            }
                        }

                        const lessonPerformance =
                            Object.entries(
                                lessonResults,
                            )
                                .sort(
                                    ([a], [b]) =>
                                        Number(a) - Number(b),
                                )
                                .map(
                                    ([lessonId, result]) => {
                                        const lesson =
                                            lessons.find(
                                                (lesson) =>
                                                    lesson.id ===
                                                    Number(
                                                        lessonId,
                                                    ),
                                            );

                                        const lessonAccuracy =
                                            Math.round(
                                                (result.correct /
                                                    result.total) *
                                                100,
                                            );

                                        const lessonName =
                                            language === "fa"
                                                ? lesson.faTitle
                                                : lesson.title;

                                        return language === "fa"
                                            ? `📚 درس ${lessonId}: ${lessonName} — ${result.correct}/${result.total} (${lessonAccuracy}%)`
                                            : `📚 Lesson ${lessonId}: ${lessonName} — ${result.correct}/${result.total} (${lessonAccuracy}%)`;
                                    },
                                )
                                .join("\n");

                        const weakLessons =
                            Object.entries(
                                lessonResults,
                            )
                                .filter(
                                    ([, result]) =>
                                        result.correct /
                                        result.total <
                                        0.6,
                                )
                                .sort(
                                    ([, a], [, b]) =>
                                        a.correct / a.total -
                                        b.correct / b.total,
                                )
                                .map(
                                    ([lessonId, result]) => {
                                        const lesson =
                                            lessons.find(
                                                (lesson) =>
                                                    lesson.id ===
                                                    Number(
                                                        lessonId,
                                                    ),
                                            );

                                        const lessonName =
                                            language === "fa"
                                                ? lesson.faTitle
                                                : lesson.title;

                                        const lessonAccuracy =
                                            Math.round(
                                                (result.correct /
                                                    result.total) *
                                                100,
                                            );

                                        return language === "fa"
                                            ? `📚 ${lessonName} — ${lessonAccuracy}%`
                                            : `📚 ${lessonName} — ${lessonAccuracy}%`;
                                    },
                                )
                                .join("\n");

                        await ensureProgress(
                            chatId,
                            env,
                        );

                        const progress =
                            await env.learning_js_bot_db
                                .prepare(
                                    "SELECT best_accuracy FROM progress WHERE telegram_id = ?",
                                )
                                .bind(String(chatId))
                                .first();

                        const previousBest =
                            progress?.best_accuracy || 0;

                        const bestAccuracy =
                            Math.max(
                                previousBest,
                                accuracy,
                            );

                        await env.learning_js_bot_db
                            .prepare(
                                "UPDATE progress SET quizzes_completed = quizzes_completed + 1, best_accuracy = ? WHERE telegram_id = ?",
                            )
                            .bind(
                                bestAccuracy,
                                String(chatId),
                            )
                            .run();

                        await deleteQuizSession(
                            chatId,
                            env,
                        );

                        const weakAreas =
                            weakLessons ||
                            (language === "fa"
                                ? "نداری! عملکردت در همه درس‌ها خوب بود. 🎉"
                                : "None! You performed well across all lessons. 🎉");

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? `${resultText}\n\n${explanation}\n\n🏆 آزمون تمام شد!\n\n🎯 امتیاز: ${quiz.score}/${quiz.questions.length}\n📊 دقت: ${accuracy}%\n🎯 سطح: ${difficultyName}\n🏆 بهترین دقت: ${bestAccuracy}%\n\n━━━━━━━━━━━━━━━━━━\n\n📚 عملکرد درس‌ها\n\n${lessonPerformance}\n\n━━━━━━━━━━━━━━━━━━\n\n⚠️ نقاط ضعف\n\n${weakAreas}`
                                : `${resultText}\n\n${explanation}\n\n🏆 Quiz Complete!\n\n🎯 Score: ${quiz.score}/${quiz.questions.length}\n📊 Accuracy: ${accuracy}%\n🎯 Difficulty: ${difficultyName}\n🏆 Best Accuracy: ${bestAccuracy}%\n\n━━━━━━━━━━━━━━━━━━\n\n📚 Lesson Performance\n\n${lessonPerformance}\n\n━━━━━━━━━━━━━━━━━━\n\n⚠️ Weak Areas\n\n${weakAreas}`,
                            {
                                inline_keyboard: [
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "🔄 آزمون جدید"
                                                    : "🔄 New Quiz",
                                            callback_data:
                                                "quiz",
                                        },
                                    ],
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "📊 پیشرفت من"
                                                    : "📊 My Progress",
                                            callback_data:
                                                "progress",
                                        },
                                    ],
                                    [
                                        {
                                            text:
                                                language === "fa"
                                                    ? "🏠 منوی اصلی"
                                                    : "🏠 Main Menu",
                                            callback_data:
                                                "main_menu",
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

                if (callbackData === "choose_quiz_difficulty") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    await deleteQuizSession(
                        chatId,
                        env,
                    );

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? "🧠 آزمون JavaScript\n\nسطح سختی آزمون جدید را انتخاب کنید:"
                            : "🧠 JavaScript Quiz\n\nChoose your new quiz difficulty:",
                        {
                            inline_keyboard: [
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🟢 آسان"
                                                : "🟢 Easy",
                                        callback_data:
                                            "quiz_difficulty_easy",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🟡 متوسط"
                                                : "🟡 Medium",
                                        callback_data:
                                            "quiz_difficulty_medium",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🔴 سخت"
                                                : "🔴 Hard",
                                        callback_data:
                                            "quiz_difficulty_hard",
                                    },
                                ],
                                [
                                    {
                                        text:
                                            language === "fa"
                                                ? "🏠 منوی اصلی"
                                                : "🏠 Main Menu",
                                        callback_data:
                                            "main_menu",
                                    },
                                ],
                            ],
                        },
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

                if (
                    callbackData === "quiz_difficulty_easy" ||
                    callbackData === "quiz_difficulty_medium" ||
                    callbackData === "quiz_difficulty_hard"
                ) {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const difficulty =
                        callbackData.replace(
                            "quiz_difficulty_",
                            "",
                        );

                    const completedLessons = lessons.filter(
                        (lesson) =>
                            lesson.id < user.current_lesson,
                    );

                    if (completedLessons.length === 0) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🧠 آزمون\n\nهنوز درسی برای آزمون در دسترس نیست. 📚"
                                : "🧠 Quiz\n\nThere are no completed lessons available for a quiz yet. 📚",
                        );

                        await sendMainMenu(chatId, env);

                        return new Response("OK");
                    }

                    const quizQuestions =
                        await selectQuizQuestions(
                            chatId,
                            completedLessons,
                            difficulty,
                            env,
                        );

                    if (quizQuestions.length === 0) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "❌ سؤالی با این سطح سختی برای درس‌های تکمیل‌شده پیدا نشد."
                                : "❌ No questions were found for this difficulty in your completed lessons.",
                        );

                        await sendMainMenu(chatId, env);

                        return new Response("OK");
                    }

                    await setQuizSession(
                        chatId,
                        {
                            questions: quizQuestions,
                            currentQuestion: 0,
                            score: 0,
                        },
                        env,
                    );

                    const quiz =
                        await getQuizSession(chatId, env);

                    const question =
                        quiz.questions[0];

                    const lesson = lessons.find(
                        (lesson) =>
                            lesson.id === question.lessonId,
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

                    const optionButtons =
                        options.map(
                            (option, index) => [
                                {
                                    text: option,
                                    callback_data: `quiz_answer_${question.id}_${index}`,
                                },
                            ],
                        );

                    const difficultyName =
                        language === "fa"
                            ? difficulty === "easy"
                                ? "آسان"
                                : difficulty === "medium"
                                    ? "متوسط"
                                    : "سخت"
                            : difficulty === "easy"
                                ? "Easy"
                                : difficulty === "medium"
                                    ? "Medium"
                                    : "Hard";

                    await sendMessage(
                        chatId,
                        env,
                        language === "fa"
                            ? `🧠 آزمون JavaScript\n\n🎯 سطح: ${difficultyName}\n\nسؤال 1/${quiz.questions.length}\n📚 درس ${lesson.id}: ${lessonName}\n\n${questionText}`
                            : `🧠 JavaScript Quiz\n\n🎯 Difficulty: ${difficultyName}\n\nQuestion 1/${quiz.questions.length}\n📚 Lesson ${lesson.id}: ${lessonName}\n\n${questionText}`,
                        {
                            inline_keyboard:
                                optionButtons,
                        },
                    );

                    return new Response("OK");
                }

                if (callbackData === "challenge") {
                    await removeMessageKeyboard(
                        chatId,
                        callbackQuery.message.message_id,
                        env,
                    );

                    const user = await getUser(chatId, env);
                    const language = user?.language || "en";

                    const challengeProgress =
                        await ensureChallengeProgress(
                            chatId,
                            env,
                        );

                    const today = getTodayDate();

                    let challenge = null;

                    const completedLessons = lessons.filter(
                        (lesson) =>
                            lesson.id < user.current_lesson &&
                            challenges.some(
                                (challenge) =>
                                    challenge.lessonId === lesson.id,
                            ),
                    );

                    if (
                        challengeProgress.last_completed_date === today &&
                        challengeProgress.current_challenge_id
                    ) {
                        const savedChallenge = challenges.find(
                            (item) =>
                                item.id ===
                                challengeProgress.current_challenge_id,
                        );

                        if (savedChallenge) {
                            challenge = {
                                ...savedChallenge,
                                lessonCycle:
                                    challengeProgress.current_lesson_cycle || 1,
                                questionCycle:
                                    challengeProgress.current_question_cycle || 1,
                            };
                        }
                    } else {
                        challenge = await getDailyChallenge(
                            chatId,
                            completedLessons,
                            env,
                        );

                        if (challenge) {
                            await env.learning_js_bot_db
                                .prepare(
                                    `UPDATE challenge_progress
                 SET current_challenge_id = ?
                 WHERE telegram_id = ?`,
                                )
                                .bind(
                                    challenge.id,
                                    String(chatId),
                                )
                                .run();
                        }
                    }

                    if (challengeProgress.last_completed_date === today) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "🧩 چالش امروز را قبلاً انجام داده‌اید.\n\n" +
                                `🔥 استریک فعلی: ${challengeProgress.current_streak}\n` +
                                `🏆 بهترین استریک: ${challengeProgress.best_streak}\n` +
                                `✅ تعداد چالش‌های انجام‌شده: ${challengeProgress.total_completed}`
                                : "🧩 You already completed today's challenge.\n\n" +
                                `🔥 Current streak: ${challengeProgress.current_streak}\n` +
                                `🏆 Best streak: ${challengeProgress.best_streak}\n` +
                                `✅ Challenges completed: ${challengeProgress.total_completed}`,
                            {
                                inline_keyboard: [
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

                    if (!challenge) {
                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "❌ چالش مناسبی برای امروز پیدا نشد."
                                : "❌ No suitable challenge was found for today.",
                        );

                        await sendMainMenu(chatId, env);

                        return new Response("OK");
                    }

                    const options =
                        language === "fa"
                            ? challenge.faOptions
                            : challenge.options;

                    const question =
                        language === "fa"
                            ? challenge.faQuestion
                            : challenge.question;

                    const keyboard = options.map((option, index) => [
                        {
                            text: option,
                            callback_data: `challenge_answer_${challenge.id}_${index}`,
                        },
                    ]);

                    keyboard.push([
                        {
                            text:
                                language === "fa"
                                    ? "🏠 منوی اصلی"
                                    : "🏠 Main Menu",
                            callback_data: "main_menu",
                        },
                    ]);

                    const header =
                        language === "fa"
                            ? "🧩 چالش روزانه JavaScript"
                            : "🧩 Daily JavaScript Challenge";

                    const type =
                        language === "fa"
                            ? `🎯 نوع: ${challenge.type}`
                            : `🎯 Type: ${challenge.type}`;

                    const difficulty =
                        language === "fa"
                            ? `📊 سطح: ${challenge.difficulty}`
                            : `📊 Difficulty: ${challenge.difficulty}`;

                    await sendMessage(
                        chatId,
                        env,
                        `${header}\n\n${type}\n${difficulty}\n\n${question}`,
                        {
                            inline_keyboard: keyboard,
                        },
                    );

                    return new Response("OK");
                }

                if (callbackData.startsWith("challenge_answer_")) {
                    const parts = callbackData.split("_");

                    const challengeId = Number(parts[2]);
                    const answerIndex = Number(parts[3]);

                    const challenge = challenges.find(
                        (item) => item.id === challengeId,
                    );

                    if (!challenge) {
                        const user = await getUser(chatId, env);
                        const language = user?.language || "en";

                        await sendMessage(
                            chatId,
                            env,
                            language === "fa"
                                ? "❌ چالش پیدا نشد."
                                : "❌ Challenge not found.",
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

                    const isCorrect = answerIndex === challenge.correctAnswer;

                    const challengeProgress = await ensureChallengeProgress(
                        chatId,
                        env,
                    );

                    const today = getTodayDate();

                    const lessonCycle =
                        challenge.lessonCycle || 1;

                    const questionCycle =
                        challenge.questionCycle || 1;

                    let currentStreak = challengeProgress.current_streak;
                    let bestStreak = challengeProgress.best_streak;

                    if (challengeProgress.last_completed_date === today) {
                        return new Response("OK");
                    }

                    if (challengeProgress.last_completed_date) {
                        const lastDate = new Date(
                            `${challengeProgress.last_completed_date}T00:00:00Z`,
                        );

                        const currentDate = new Date(
                            `${today}T00:00:00Z`,
                        );

                        const daysSinceLastChallenge = Math.floor(
                            (currentDate - lastDate) /
                            (1000 * 60 * 60 * 24),
                        );

                        if (daysSinceLastChallenge === 1) {
                            currentStreak += 1;
                        } else {
                            currentStreak = 1;
                        }
                    } else {
                        currentStreak = 1;
                    }

                    if (currentStreak > bestStreak) {
                        bestStreak = currentStreak;
                    }

                    await env.learning_js_bot_db
                        .prepare(
                            `UPDATE challenge_progress
             SET current_streak = ?,
                 best_streak = ?,
                 last_completed_date = ?,
                 total_completed = total_completed + 1,
                 correct_answers = correct_answers + ?
             WHERE telegram_id = ?`,
                        )
                        .bind(
                            currentStreak,
                            bestStreak,
                            today,
                            isCorrect ? 1 : 0,
                            String(chatId),
                        )
                        .run();

                    await env.learning_js_bot_db
                        .prepare(
                            `INSERT OR IGNORE INTO challenge_lesson_history
         (telegram_id, lesson_id, cycle, used_at)
         VALUES (?, ?, ?, ?)`,
                        )
                        .bind(
                            String(chatId),
                            challenge.lessonId,
                            lessonCycle,
                            Date.now(),
                        )
                        .run();

                    await env.learning_js_bot_db
                        .prepare(
                            `INSERT OR IGNORE INTO challenge_question_history
         (telegram_id, lesson_id, question_id, cycle, used_at)
         VALUES (?, ?, ?, ?, ?)`,
                        )
                        .bind(
                            String(chatId),
                            challenge.lessonId,
                            challenge.id,
                            questionCycle,
                            Date.now(),
                        )
                        .run();

                    await env.learning_js_bot_db
                        .prepare(
                            `UPDATE challenge_progress
         SET current_challenge_id = NULL
         WHERE telegram_id = ?`,
                        )
                        .bind(String(chatId))
                        .run();

                    const explanation =
                        language === "fa"
                            ? challenge.faExplanation
                            : challenge.explanation;

                    const resultText =
                        language === "fa"
                            ? isCorrect
                                ? "✅ درست بود!"
                                : "❌ جواب اشتباه بود!"
                            : isCorrect
                                ? "✅ Correct!"
                                : "❌ Wrong!";

                    const motivation =
                        language === "fa"
                            ? "🔥 فردا برگرد و چالش بعدی رو فتح کن!"
                            : "🔥 Come back tomorrow and conquer the next challenge!";

                    const statsText =
                        language === "fa"
                            ? `🔥 استریک فعلی: ${currentStreak}\n` +
                            `🏆 بهترین استریک: ${bestStreak}\n` +
                            `✅ چالش‌های انجام‌شده: ${challengeProgress.total_completed + 1}\n` +
                            `🎯 پاسخ‌های درست: ${challengeProgress.correct_answers +
                            (isCorrect ? 1 : 0)
                            }`
                            : `🔥 Current streak: ${currentStreak}\n` +
                            `🏆 Best streak: ${bestStreak}\n` +
                            `✅ Challenges completed: ${challengeProgress.total_completed + 1
                            }\n` +
                            `🎯 Correct answers: ${challengeProgress.correct_answers +
                            (isCorrect ? 1 : 0)
                            }`;

                    await sendMessage(
                        chatId,
                        env,
                        `${resultText}\n\n${explanation}\n\n${motivation}\n\n${statsText}`,
                        {
                            inline_keyboard: [
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

                if (callbackData === "progress") {
                    await ensureProgress(chatId, env);

                    const progress =
                        await env.learning_js_bot_db
                            .prepare(
                                "SELECT questions_answered, correct_answers, quizzes_completed, best_accuracy FROM progress WHERE telegram_id = ?",)
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

                    const challengeProgress =
                        await ensureChallengeProgress(chatId, env);

                    const challengeAccuracy =
                        challengeProgress.total_completed > 0
                            ? Math.round(
                                (challengeProgress.correct_answers /
                                    challengeProgress.total_completed) *
                                100,
                            )
                            : 0;

                    const progressText =
                        language === "fa"
                            ? "📊 پیشرفت من\n\n" +
                            "📚 پیشرفت یادگیری\n\n" +
                            `🎓 درس‌های تکمیل‌شده: ${completedLessons}/${totalLessons}\n` +
                            `🎯 درس فعلی: ${currentLesson
                                ? currentLesson.faTitle
                                : "تمام درس‌ها تکمیل شده‌اند!"
                            }\n\n` +
                            "━━━━━━━━━━━━━━━━━━\n\n" +
                            "📊 آمار آزمون\n\n" +
                            `📝 آزمون‌های تکمیل‌شده: ${progress.quizzes_completed}\n` +
                            `❓ سؤالات پاسخ داده‌شده: ${progress.questions_answered}\n` +
                            `✅ پاسخ‌های صحیح: ${progress.correct_answers}\n` +
                            `📊 دقت: ${accuracy}%\n` +
                            `🏆 بهترین دقت: ${progress.best_accuracy}%\n\n` +
                            "🧩 چالش روزانه\n\n" +
                            `🔥 استریک فعلی: ${challengeProgress.current_streak}\n` +
                            `🏆 بهترین استریک: ${challengeProgress.best_streak}\n` +
                            `✅ چالش‌های انجام‌شده: ${challengeProgress.total_completed}\n` +
                            `🎯 پاسخ‌های صحیح: ${challengeProgress.correct_answers}\n` +
                            `📊 دقت: ${challengeAccuracy}%`
                            : "📊 My Progress\n\n" +
                            "📚 Learning Progress\n\n" +
                            `🎓 Lessons completed: ${completedLessons}/${totalLessons}\n` +
                            `🎯 Current lesson: ${currentLesson
                                ? currentLesson.title
                                : "All lessons completed!"
                            }\n\n` +
                            "━━━━━━━━━━━━━━━━━━\n\n" +
                            "📊 Quiz Stats\n\n" +
                            `📝 Quizzes completed: ${progress.quizzes_completed}\n` +
                            `❓ Questions answered: ${progress.questions_answered}\n` +
                            `✅ Correct answers: ${progress.correct_answers}\n` +
                            `📊 Accuracy: ${accuracy}%\n\n` +
                            "━━━━━━━━━━━━━━━━━━\n\n" +
                            "🧩 Daily Challenge\n\n" +
                            `🔥 Current streak: ${challengeProgress.current_streak}\n` +
                            `🏆 Best streak: ${challengeProgress.best_streak}\n` +
                            `✅ Challenges completed: ${challengeProgress.total_completed}\n` +
                            `🎯 Correct answers: ${challengeProgress.correct_answers}\n` +
                            `📊 Accuracy: ${challengeAccuracy}%`;

                    await sendMessage(
                        chatId,
                        env,
                        progressText,
                        {
                            inline_keyboard: [
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
    reset_confirmation = 0,
    last_lesson_date = NULL
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
                    await env.learning_js_bot_db
                        .prepare(
                            `UPDATE challenge_progress
         SET current_streak = 0,
             best_streak = 0,
             last_completed_date = NULL,
             total_completed = 0,
             correct_answers = 0
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