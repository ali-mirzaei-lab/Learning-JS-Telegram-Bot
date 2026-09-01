export const references = [
    {
        id: 1,
        title: "📦 Variables",
        content:
            "📦 VARIABLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Variables store values that can be used and changed throughout your program.\n\n" +

            "DECLARATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let → value can be reassigned\n" +
            "const → value cannot be reassigned\n" +
            "var → older way of declaring variables\n\n" +

            "EXAMPLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let age = 25;\n" +
            'const name = "Ali";\n' +
            'let score = 100;\nscore = 150;\n\n' +

            "NAMING RULES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "• Can contain letters, numbers, _ and $\n" +
            "• Cannot start with a number\n" +
            "• Cannot use reserved keywords\n" +
            "• JavaScript variables are case-sensitive\n\n" +

            "GOOD:\n" +
            "const userName = " + '"Ali"' + ";\n\n" +

            "REASSIGNMENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let count = 1;\n" +
            "count = 2; ✅\n\n" +

            "const count = 1;\n" +
            "count = 2; ❌\n\n" +

            "DESTRUCTURING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const { name } = user;\n" +
            "const [first, second] = items;\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Prefer const by default. Use let when reassignment is actually needed.",

        faTitle: "📦 متغیرها",
        faContent:
            "📦 متغیرها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "متغیرها برای ذخیره مقادیری استفاده می‌شوند که می‌توان در طول اجرای برنامه از آن‌ها استفاده کرد یا مقدارشان را تغییر داد.\n\n" +

            "تعریف متغیر\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let → مقدار متغیر می‌تواند دوباره مقداردهی شود\n" +
            "const → مقدار متغیر نمی‌تواند دوباره مقداردهی شود\n" +
            "var → روش قدیمی‌تر برای تعریف متغیر\n\n" +

            "مثال‌ها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let age = 25;\n" +
            'const name = "Ali";\n' +
            'let score = 100;\nscore = 150;\n\n' +

            "قوانین نام‌گذاری\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "• می‌تواند شامل حروف، اعداد، _ و $ باشد\n" +
            "• نمی‌تواند با عدد شروع شود\n" +
            "• نمی‌توان از کلمات رزروشده استفاده کرد\n" +
            "• متغیرهای JavaScript به حروف بزرگ و کوچک حساس هستند\n\n" +

            "نمونه صحیح:\n" +
            "const userName = " + '"Ali"' + ";\n\n" +

            "تغییر مقدار\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let count = 1;\n" +
            "count = 2; ✅\n\n" +

            "const count = 1;\n" +
            "count = 2; ❌\n\n" +

            "Destructuring\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const { name } = user;\n" +
            "const [first, second] = items;\n\n" +

            "💡 نکته\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "به‌صورت پیش‌فرض از const استفاده کنید و زمانی که واقعاً نیاز به تغییر مقدار دارید از let استفاده کنید.",
    },

    {
        id: 2,
        title: "🔤 Data Types",
        content:
            "🔤 DATA TYPES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript values are divided into primitive and reference types.\n\n" +

            "PRIMITIVE TYPES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "string → text\n" +
            "number → integers and decimals\n" +
            "bigint → very large integers\n" +
            "boolean → true / false\n" +
            "undefined → value has not been assigned\n" +
            "null → intentional absence of a value\n" +
            "symbol → unique identifiers\n\n" +

            "REFERENCE TYPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "object → collections of related data\n\n" +

            "EXAMPLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const name = "Ali";\n' +
            "const age = 25;\n" +
            "const active = true;\n" +
            "const value = null;\n" +
            "let result;\n" +
            "const user = { name: " + '"Ali"' + " };\n\n" +

            "CHECK A TYPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'typeof "Hello"; → "string"\n' +
            "typeof 25; → " +
            '"number"' +
            "\n" +
            "typeof true; → " +
            '"boolean"' +
            "\n" +
            "typeof undefined; → " +
            '"undefined"' +
            "\n\n" +

            "TYPE CONVERSION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'Number("25"); → 25\n' +
            'String(25); → "25"\n' +
            "Boolean(1); → true\n\n" +

            "TRUTHY / FALSY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Falsy values include:\n" +
            "false, 0, \"\", null, undefined, NaN\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "typeof null returns \"object\". This is a long-standing JavaScript behavior.",

        faTitle: "🔤 انواع داده",
        faContent:
            "JavaScript دارای چندین نوع داده برای ذخیره اطلاعات مختلف است.\n\n" +
            "انواع داده اولیه\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`string` → متن\n" +
            "`number` → اعداد\n" +
            "`bigint` → اعداد صحیح بسیار بزرگ\n" +
            "`boolean` → true یا false\n" +
            "`undefined` → مقدار تعریف نشده\n" +
            "`null` → نبود مقدار\n" +
            "`symbol` → مقدار یکتا\n\n" +
            "نوع مرجع\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`object` → اشیا، آرایه‌ها و بسیاری از ساختارهای پیچیده\n\n" +
            "بررسی نوع داده\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`typeof value` → نوع داده را برمی‌گرداند\n\n" +
            "مثال\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "typeof \"Ali\"; // string\n" +
            "typeof 25; // number\n" +
            "typeof true; // boolean\n\n" +
            "تبدیل نوع داده\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`String(value)` → تبدیل به رشته\n" +
            "`Number(value)` → تبدیل به عدد\n" +
            "`Boolean(value)` → تبدیل به boolean\n\n" +
            "مقادیر Falsy\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`false`, `0`, `\"\"`, `null`, `undefined`, `NaN`\n\n" +
            "💡 نکته\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`typeof null` مقدار `\"object\"` را برمی‌گرداند. این یک رفتار قدیمی JavaScript است.",
    },

    {
        id: 3,
        title: "➕ Operators",
        content:
            "➕ OPERATORS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Operators perform calculations, comparisons, assignments and logical operations.\n\n" +

            "ARITHMETIC\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "+ → addition\n" +
            "- → subtraction\n" +
            "* → multiplication\n" +
            "/ → division\n" +
            "% → remainder\n" +
            "** → exponentiation\n\n" +

            "EXAMPLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "10 + 5 → 15\n" +
            "10 % 3 → 1\n" +
            "2 ** 3 → 8\n\n" +

            "COMPARISON\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "=== → strictly equal\n" +
            "!== → strictly not equal\n" +
            "> → greater than\n" +
            "< → less than\n" +
            ">= → greater than or equal\n" +
            "<= → less than or equal\n\n" +

            "LOGICAL\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "&& → AND\n" +
            "|| → OR\n" +
            "! → NOT\n\n" +

            "ASSIGNMENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "= → assign\n" +
            "+= → add and assign\n" +
            "-= → subtract and assign\n" +
            "*= → multiply and assign\n" +
            "/= → divide and assign\n\n" +

            "TERNARY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "condition ? value1 : value2\n\n" +

            "NULLISH COALESCING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "value ?? fallback\n\n" +
            "Uses the fallback only when the value is null or undefined.\n\n" +

            "OPTIONAL CHAINING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "user?.profile?.name\n\n" +
            "Safely accesses nested properties without throwing when an earlier value is nullish.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Prefer === and !== for predictable comparisons.",

        faTitle: "➕ عملگرها",
        faContent:
            "عملگرها برای انجام عملیات روی مقادیر و متغیرها استفاده می‌شوند.\n\n" +
            "عملگرهای ریاضی\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`+` → جمع\n" +
            "`-` → تفریق\n" +
            "`*` → ضرب\n" +
            "`/` → تقسیم\n" +
            "`%` → باقی‌مانده\n" +
            "`**` → توان\n\n" +
            "عملگرهای مقایسه‌ای\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`===` → برابر و هم‌نوع\n" +
            "`!==` → نابرابر یا با نوع متفاوت\n" +
            "`>` → بزرگ‌تر\n" +
            "`<` → کوچک‌تر\n" +
            "`>=` → بزرگ‌تر یا مساوی\n" +
            "`<=` → کوچک‌تر یا مساوی\n\n" +
            "عملگرهای منطقی\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`&&` → AND\n" +
            "`||` → OR\n" +
            "`!` → NOT\n\n" +
            "عملگرهای انتساب\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`=` → مقداردهی\n" +
            "`+=` → جمع و انتساب\n" +
            "`-=` → تفریق و انتساب\n" +
            "`*=` → ضرب و انتساب\n" +
            "`/=` → تقسیم و انتساب\n\n" +
            "عملگر شرطی\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`condition ? value1 : value2`\n\n" +
            "Nullish Coalescing\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`value ?? fallback` → زمانی از fallback استفاده می‌کند که مقدار `null` یا `undefined` باشد.\n\n" +
            "Optional Chaining\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`user?.profile?.name` → بدون ایجاد خطا به propertyهای تو در تو دسترسی پیدا می‌کند.\n\n" +
            "💡 نکته\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "برای مقایسه معمولاً `===` را به `==` ترجیح دهید.",
    },

    {
        id: 4,
        title: "🔀 Conditions",
        content:
            "🔀 CONDITIONS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Conditions allow your program to make decisions based on whether an expression is true or false.\n\n" +

            "IF\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "if (age >= 18) {\n" +
            '    console.log("Adult");\n' +
            "}\n" +
            "\n\n" +

            "IF / ELSE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "if (age >= 18) {\n" +
            '    console.log("Adult");\n' +
            "} else {\n" +
            '    console.log("Minor");\n' +
            "}\n" +
            "\n\n" +

            "ELSE IF\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "if (score >= 90) {\n" +
            '    result = "A";\n' +
            "} else if (score >= 80) {\n" +
            '    result = "B";\n' +
            "} else {\n" +
            '    result = "C";\n' +
            "}\n" +
            "\n\n" +

            "TERNARY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const status = age >= 18 ? "Adult" : "Minor";\n' +
            "\n\n" +

            "SWITCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "switch (day) {\n" +
            '    case "Monday":\n' +
            '        console.log("Start");\n' +
            "        break;\n" +
            "    default:\n" +
            '        console.log("Other");\n' +
            "}\n" +
            "\n\n" +

            "SHORT-CIRCUIT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "condition && doSomething();\n\n" +
            "Runs the second expression only when the first is truthy.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use if for complex logic and a ternary for short value assignments.",

        faTitle: "🔀 شرط‌ها",
        faContent:
            "شرط‌ها به برنامه اجازه می‌دهند بر اساس شرایط مختلف تصمیم‌گیری کند.\n\n" +
            "if\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "if (age >= 18) {\n" +
            "    console.log(\"Adult\");\n" +
            "}\n\n" +
            "if / else\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "if (age >= 18) {\n" +
            "    console.log(\"Adult\");\n" +
            "} else {\n" +
            "    console.log(\"Minor\");\n" +
            "}\n\n" +
            "else if\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "if (score >= 90) {\n" +
            "    console.log(\"A\");\n" +
            "} else if (score >= 80) {\n" +
            "    console.log(\"B\");\n" +
            "} else {\n" +
            "    console.log(\"C\");\n" +
            "}\n\n" +
            "Ternary\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "const status = age >= 18 ? \"Adult\" : \"Minor\";\n\n" +
            "switch\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "switch (day) {\n" +
            "    case \"Monday\":\n" +
            "        console.log(\"Start\");\n" +
            "        break;\n" +
            "    case \"Friday\":\n" +
            "        console.log(\"Weekend\");\n" +
            "        break;\n" +
            "    default:\n" +
            "        console.log(\"Other\");\n" +
            "}\n\n" +
            "Short-circuit\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`condition && action` → action را فقط زمانی اجرا می‌کند که condition درست باشد.\n" +
            "`condition || fallback` → در صورت falsy بودن condition از fallback استفاده می‌کند.\n\n" +
            "💡 نکته\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "برای شرایط ساده ternary خوانا است، اما برای منطق پیچیده از `if` استفاده کنید.",
    },

    {
        id: 5,
        title: "🔁 Loops",
        content:
            "🔁 LOOPS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Loops repeat code while a condition is satisfied or while iterating over data.\n\n" +

            "FOR\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "for (let i = 0; i < 5; i++) {\n" +
            "    console.log(i);\n" +
            "}\n" +
            "\n\n" +

            "WHILE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "while (condition) {\n" +
            "    // code\n" +
            "}\n" +
            "\n\n" +

            "DO / WHILE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "do {\n" +
            "    // code\n" +
            "} while (condition);\n" +
            "\n\n" +

            "FOR...OF\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use it to iterate over values in an iterable such as an array.\n\n" +

            "js\n" +
            "for (const item of items) {\n" +
            "    console.log(item);\n" +
            "}\n" +
            "\n\n" +

            "FOR...IN\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use it to iterate over object keys.\n\n" +

            "js\n" +
            "for (const key in user) {\n" +
            "    console.log(key);\n" +
            "}\n" +
            "\n\n" +

            "BREAK\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "break immediately exits the loop.\n\n" +

            "CONTINUE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "continue skips the current iteration and moves to the next one.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use for...of for array values and for...in for object keys.",

        faTitle: "🔁 حلقه‌ها",
        faContent:
            "حلقه‌ها برای اجرای چندباره یک بخش از کد استفاده می‌شوند.\n\n" +
            "for\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "for (let i = 0; i < 5; i++) {\n" +
            "    console.log(i);\n" +
            "}\n\n" +
            "while\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "while (condition) {\n" +
            "    // code\n" +
            "}\n\n" +
            "do / while\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "do {\n" +
            "    // code\n" +
            "} while (condition);\n\n" +
            "for...of\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "for (const item of items) {\n" +
            "    console.log(item);\n" +
            "}\n\n" +
            "برای پیمایش مقدارهای یک iterable مانند Array استفاده می‌شود.\n\n" +
            "for...in\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "for (const key in user) {\n" +
            "    console.log(key);\n" +
            "}\n\n" +
            "معمولاً برای پیمایش propertyهای یک object استفاده می‌شود.\n\n" +
            "break\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`break` → حلقه را متوقف می‌کند.\n\n" +
            "continue\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "`continue` → iteration فعلی را رد می‌کند و به iteration بعدی می‌رود.\n\n" +
            "💡 نکته\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "برای آرایه‌ها معمولاً `for...of` یا متدهایی مثل `forEach()`، `map()` و `filter()` خواناتر هستند.",
    },

    {
        id: 6,
        title: "⚙️ Functions",
        content:
            "⚙️ FUNCTIONS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Functions are reusable blocks of code designed to perform a specific task.\n\n" +

            "FUNCTION DECLARATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "function greet(name) {\n" +
            "    return Hello ${name};\n" +
            "}\n" +
            "\n\n" +

            "CALLING A FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'greet("Ali");\n' +
            "\n\n" +

            "ARROW FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const add = (a, b) => {\n" +
            "    return a + b;\n" +
            "};\n" +
            "\n\n" +

            "SHORT ARROW FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const add = (a, b) => a + b;\n" +
            "\n\n" +

            "DEFAULT PARAMETERS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'function greet(name = "Guest") {\n' +
            "    return Hello ${name};\n" +
            "}\n" +
            "\n\n" +

            "REST PARAMETERS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "function sum(...numbers) {\n" +
            "    return numbers;\n" +
            "}\n" +
            "\n\n" +

            "CALLBACK\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "A callback is a function passed to another function.\n\n" +

            "js\n" +
            "function process(callback) {\n" +
            "    callback();\n" +
            "}\n" +
            "\n\n" +

            "HIGHER-ORDER FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "A function that accepts another function, returns a function, or both.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Keep functions focused on one clear responsibility whenever possible.",

        faTitle: "⚙️ توابع",
        faContent:
            "⚙️ توابع\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "توابع بلوک‌هایی از کد هستند که برای انجام یک کار مشخص استفاده می‌شوند و می‌توان آن‌ها را چندین بار اجرا کرد.\n\n" +

            "FUNCTION DECLARATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "function greet(name) {\n" +
            '    return "Hello " + name;\n' +
            "}\n\n" +

            "greet(\"Ali\");\n\n" +

            "CALLING A FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای اجرای یک تابع، نام آن را همراه با پرانتز می‌نویسیم.\n\n" +

            "greet(\"Ali\");\n\n" +

            "ARROW FUNCTIONS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const greet = (name) => {\n" +
            '    return "Hello " + name;\n' +
            "};\n\n" +

            "برای توابع ساده می‌توان آن را کوتاه‌تر نوشت:\n\n" +

            "const greet = name => \"Hello \" + name;\n\n" +

            "DEFAULT PARAMETERS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "function greet(name = \"Guest\") {\n" +
            "    console.log(name);\n" +
            "}\n\n" +

            "اگر آرگومان ارسال نشود، مقدار پیش‌فرض استفاده می‌شود.\n\n" +

            "REST PARAMETERS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "function sum(...numbers) {\n" +
            "    return numbers;\n" +
            "}\n\n" +

            "REST PARAMETERS تمام آرگومان‌های باقی‌مانده را در یک Array قرار می‌دهد.\n\n" +

            "CALLBACK\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "تابعی که به‌عنوان آرگومان به تابع دیگری ارسال می‌شود، callback نام دارد.\n\n" +

            "function process(callback) {\n" +
            "    callback();\n" +
            "}\n\n" +

            "HIGHER-ORDER FUNCTIONS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "تابعی که یک تابع را دریافت می‌کند یا یک تابع برمی‌گرداند، higher-order function نام دارد.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "توابع را کوچک و مشخص نگه دارید؛ هر تابع بهتر است یک مسئولیت اصلی داشته باشد.",
    },

    {
        id: 7,
        title: "📚 Arrays",
        content:
            "📚 ARRAYS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Arrays are ordered collections used to store multiple values in a single variable.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const fruits = ["apple", "banana", "orange"];\n' +
            "\n\n" +

            "ACCESS ELEMENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "fruits[0] → first element\n" +
            "fruits.at(-1) → last element\n" +
            "fruits.length → number of elements\n\n" +

            "ADD / REMOVE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "push() → add to the end\n" +
            "pop() → remove from the end\n" +
            "unshift() → add to the beginning\n" +
            "shift() → remove from the beginning\n\n" +

            "COPY / MODIFY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "slice() → copy a portion\n" +
            "splice() → add or remove elements\n" +
            "concat() → combine arrays\n\n" +

            "SEARCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "includes() → check for a value\n" +
            "indexOf() → find an index\n" +
            "find() → find the first matching element\n" +
            "findIndex() → find the matching index\n\n" +

            "TRANSFORM\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "map() → transform every element\n" +
            "filter() → create a filtered array\n" +
            "reduce() → reduce values to one result\n\n" +

            "ITERATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "forEach() → run a function for each element\n" +
            "some() → at least one element matches\n" +
            "every() → all elements match\n\n" +

            "OTHER USEFUL METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "sort() → sort elements\n" +
            "reverse() → reverse the array\n" +
            "join() → convert array to a string\n" +
            "flat() → flatten nested arrays\n" +
            "flatMap() → map and flatten\n\n" +

            "EXAMPLE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const numbers = [1, 2, 3];\n\n" +
            "const doubled = numbers.map(\n" +
            "    number => number * 2\n" +
            ");\n" +
            "\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "map() returns a new array. Use forEach() when you only need to perform an action.",

        faTitle: "📚 آرایه‌ها",
        faContent:
            "📚 آرایه‌ها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Array مجموعه‌ای مرتب از چند مقدار است که در یک متغیر ذخیره می‌شود.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const fruits = ["apple", "banana", "orange"];\n\n' +

            "ACCESS ELEMENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "fruits[0] → اولین عنصر\n" +
            "fruits.at(-1) → آخرین عنصر\n\n" +

            "ADD / REMOVE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "push() → اضافه کردن به انتهای Array\n" +
            "pop() → حذف از انتهای Array\n" +
            "unshift() → اضافه کردن به ابتدای Array\n" +
            "shift() → حذف از ابتدای Array\n\n" +

            "COPY / MODIFY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "slice() → ایجاد بخشی از Array بدون تغییر Array اصلی\n" +
            "splice() → اضافه، حذف یا جایگزین کردن عناصر در Array اصلی\n\n" +

            "SEARCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "includes() → بررسی وجود یک مقدار\n" +
            "indexOf() → پیدا کردن index یک مقدار\n" +
            "find() → پیدا کردن اولین عنصر مطابق شرط\n" +
            "findIndex() → پیدا کردن index اولین عنصر مطابق شرط\n\n" +

            "TRANSFORM\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "map() → ایجاد Array جدید با تغییر هر عنصر\n" +
            "filter() → ایجاد Array جدید شامل عناصر مطابق شرط\n" +
            "reduce() → تبدیل عناصر Array به یک مقدار نهایی\n\n" +

            "ITERATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "forEach() → اجرای یک تابع برای هر عنصر\n\n" +

            "OTHER METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "join() → تبدیل Array به string\n" +
            "reverse() → معکوس کردن Array اصلی\n" +
            "sort() → مرتب‌سازی عناصر\n" +
            "flat() → صاف کردن Arrayهای تو در تو\n\n" +

            "EXAMPLE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const numbers = [1, 2, 3, 4];\n" +
            "const doubled = numbers.map(number => number * 2);\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای ایجاد Array جدید معمولاً map() و filter() را به جای تغییر مستقیم Array اصلی ترجیح دهید.",
    },

    {
        id: 8,
        title: "🧱 Objects",
        content:
            "🧱 OBJECTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Objects store related data using key-value pairs.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const user = {\n" +
            '    name: "Ali",\n' +
            "    age: 25,\n" +
            "    active: true\n" +
            "};\n" +
            "\n\n" +

            "ACCESS PROPERTIES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "user.name\n" +
            'user["name"]\n\n' +

            "UPDATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'user.age = 26;\n' +
            'user.city = "Baku";\n\n' +

            "DELETE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "delete user.city;\n\n" +

            "OBJECT METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Object.keys() → array of keys\n" +
            "Object.values() → array of values\n" +
            "Object.entries() → key-value pairs\n" +
            "Object.assign() → copy/merge properties\n" +
            "Object.hasOwn() → check for an own property\n\n" +

            "DESTRUCTURING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const { name, age } = user;\n" +
            "\n\n" +

            "SPREAD\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const copy = { ...user };\n" +
            "\n\n" +

            "METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Objects can contain functions called methods.\n\n" +

            "js\n" +
            "const user = {\n" +
            "    name: " +
            '"Ali"' +
            ",\n" +
            "    greet() {\n" +
            '        console.log("Hello");\n' +
            "    }\n" +
            "};\n" +
            "\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use dot notation when the property name is known. Use bracket notation for dynamic property names.",

        faTitle: "🧱 اشیا",
        faContent:
            "🧱 اشیا\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Object مجموعه‌ای از propertyها و valueها است که برای نمایش داده‌های مرتبط استفاده می‌شود.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const user = {\n" +
            '    name: "Ali",\n' +
            "    age: 25,\n" +
            '    role: "Developer"\n' +
            "};\n\n" +

            "ACCESS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "user.name → دسترسی با dot notation\n" +
            'user["name"] → دسترسی با bracket notation\n\n' +

            "UPDATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'user.age = 26;\n' +
            'user.city = "Baku";\n\n' +

            "DELETE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "delete user.city;\n\n" +

            "OBJECT METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Object.keys() → دریافت keyها\n" +
            "Object.values() → دریافت valueها\n" +
            "Object.entries() → دریافت key و value به‌صورت جفت\n\n" +

            "DESTRUCTURING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const { name, age } = user;\n\n" +

            "SPREAD\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const updatedUser = { ...user, age: 26 };\n\n" +

            "METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Objectها می‌توانند function نیز داشته باشند.\n\n" +

            "const user = {\n" +
            '    name: "Ali",\n' +
            "    greet() {\n" +
            '        console.log("Hello");\n' +
            "    }\n" +
            "};\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "از Object برای گروه‌بندی داده‌های مرتبط استفاده کنید و propertyها را با نام‌های واضح تعریف کنید.",
    },

    {
        id: 9,
        title: "🎯 Scope",
        content:
            "🎯 SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Scope determines where variables can be accessed in your code.\n\n" +

            "GLOBAL SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "A variable declared outside functions or blocks can be accessible throughout the program.\n\n" +

            "FUNCTION SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "var is function-scoped.\n\n" +

            "js\n" +
            "function test() {\n" +
            '    var message = "Hello";\n' +
            "}\n" +
            "\n\n" +

            "BLOCK SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let and const are block-scoped.\n\n" +

            "js\n" +
            "if (true) {\n" +
            '    let message = "Hello";\n' +
            "}\n" +
            "\n\n" +

            "message cannot be accessed outside the block.\n\n" +

            "SCOPE CHAIN\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript looks for a variable in the current scope and then moves outward through parent scopes.\n\n" +

            "HOISTING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Declarations are processed before code execution, but let and const cannot be accessed before their declaration.\n\n" +

            "TEMPORAL DEAD ZONE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "The period between entering a scope and declaring a let or const variable.\n\n" +

            "CLOSURES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "A closure allows a function to remember variables from its outer scope.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Understanding scope and closures becomes especially important when working with callbacks, events and asynchronous code.",

        faTitle: "🎯 محدوده دسترسی",
        faContent:
            "🎯 محدوده دسترسی\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Scope مشخص می‌کند یک متغیر در کدام قسمت از برنامه قابل دسترسی است.\n\n" +

            "GLOBAL SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "متغیری که خارج از function یا block تعریف شود، در Global Scope قرار دارد.\n\n" +

            "const appName = \"My App\";\n\n" +

            "FUNCTION SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "متغیری که داخل function تعریف شود، فقط در همان function قابل دسترسی است.\n\n" +

            "function test() {\n" +
            "    const message = \"Hello\";\n" +
            "}\n\n" +

            "BLOCK SCOPE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "let و const دارای Block Scope هستند و داخل block قابل دسترسی‌اند.\n\n" +

            "if (true) {\n" +
            "    let value = 10;\n" +
            "    const name = \"Ali\";\n" +
            "}\n\n" +

            "SCOPE CHAIN\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript هنگام پیدا کردن یک متغیر ابتدا Scope فعلی و سپس Scopeهای بیرونی را بررسی می‌کند.\n\n" +

            "HOISTING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript برخی declarationها را قبل از اجرای کد پردازش می‌کند. این رفتار Hoisting نام دارد.\n\n" +

            "let و const نیز hoisted می‌شوند، اما قبل از declaration قابل استفاده نیستند.\n\n" +

            "TEMPORAL DEAD ZONE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "بازه‌ای بین شروع Scope و declaration متغیرهای let و const که در آن دسترسی به متغیر باعث ReferenceError می‌شود.\n\n" +

            "CLOSURES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Closure زمانی ایجاد می‌شود که یک function به متغیرهای Scope بیرونی خود دسترسی داشته باشد.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "استفاده از let و const به کنترل بهتر Scope و جلوگیری از خطاهای ناخواسته کمک می‌کند.",
    },

    {
        id: 10,
        title: "🌐 DOM",
        content:
            "🌐 DOM\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "The DOM (Document Object Model) represents an HTML document as a tree of objects that JavaScript can read and modify.\n\n" +

            "SELECT ELEMENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'document.getElementById("title");\n' +
            'document.querySelector(".title");\n' +
            'document.querySelectorAll(".item");\n\n' +

            "CREATE ELEMENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const div = document.createElement("div");\n' +
            "\n\n" +

            "CONTENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'element.textContent = "Hello";\n' +
            'element.innerHTML = "<strong>Hello</strong>";\n\n' +

            "INSERT ELEMENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "parent.append(element);\n" +
            "parent.prepend(element);\n" +
            "parent.appendChild(element);\n\n" +

            "CLASSES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'element.classList.add("active");\n' +
            'element.classList.remove("active");\n' +
            'element.classList.toggle("active");\n' +
            'element.classList.contains("active");\n\n' +

            "ATTRIBUTES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'element.setAttribute("id", "main");\n' +
            'element.getAttribute("id");\n' +
            'element.removeAttribute("id");\n\n' +

            "REMOVE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.remove();\n\n" +

            "STYLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'element.style.color = "red";\n' +
            'element.style.display = "none";\n\n' +

            "TRAVERSAL\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.parentElement\n" +
            "element.children\n" +
            "element.firstElementChild\n" +
            "element.lastElementChild\n" +
            "element.nextElementSibling\n" +
            "element.previousElementSibling\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "querySelector() accepts CSS selectors, making it one of the most useful DOM selection methods.",

        faTitle: "🌐 DOM",
        faContent:
            "🌐 DOM\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "DOM مخفف Document Object Model است و ساختار HTML صفحه را به‌صورت یک درخت از objectها در اختیار JavaScript قرار می‌دهد.\n\n" +

            "SELECT ELEMENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "document.querySelector(\".card\") → انتخاب اولین عنصر مطابق selector\n" +
            "document.querySelectorAll(\".card\") → انتخاب تمام عناصر مطابق selector\n" +
            "document.getElementById(\"title\") → انتخاب عنصر با ID مشخص\n\n" +

            "CREATE ELEMENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const button = document.createElement(\"button\");\n\n" +

            "CONTENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.textContent → خواندن یا تغییر متن\n" +
            "element.innerHTML → خواندن یا تغییر HTML داخلی\n\n" +

            "INSERT ELEMENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "parent.appendChild(child) → اضافه کردن عنصر به انتهای parent\n" +
            "parent.append(child) → اضافه کردن یک یا چند node\n" +
            "element.before(node) → قرار دادن node قبل از عنصر\n" +
            "element.after(node) → قرار دادن node بعد از عنصر\n\n" +

            "CLASSES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.classList.add(\"active\")\n" +
            "element.classList.remove(\"active\")\n" +
            "element.classList.toggle(\"active\")\n" +
            "element.classList.contains(\"active\")\n\n" +

            "ATTRIBUTES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.setAttribute(\"type\", \"button\")\n" +
            "element.getAttribute(\"type\")\n" +
            "element.removeAttribute(\"disabled\")\n\n" +

            "REMOVE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.remove(); → حذف عنصر از DOM\n\n" +

            "STYLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'element.style.color = "red";\n' +
            'element.style.display = "none";\n\n' +

            "TRAVERSAL\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "element.parentElement → والد عنصر\n" +
            "element.children → فرزندان element\n" +
            "element.nextElementSibling → عنصر بعدی\n" +
            "element.previousElementSibling → عنصر قبلی\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای انتخاب عناصر جدید معمولاً querySelector() و querySelectorAll() گزینه‌های انعطاف‌پذیری هستند.",
    },
    {
        id: 11,
        title: "🖱️ Events",
        content:
            "🖱️ EVENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Events allow JavaScript to react to user actions and browser activity.\n\n" +

            "ADD EVENT LISTENER\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'button.addEventListener("click", () => {\n' +
            '    console.log("Clicked");\n' +
            "});\n" +
            "\n\n" +

            "COMMON EVENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "click → element is clicked\n" +
            "submit → form is submitted\n" +
            "input → input value changes\n" +
            "change → value is committed\n" +
            "keydown → keyboard key is pressed\n" +
            "keyup → keyboard key is released\n" +
            "mouseenter → pointer enters element\n" +
            "mouseleave → pointer leaves element\n\n" +

            "EVENT OBJECT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "The event object contains information about the event.\n\n" +

            "js\n" +
            'button.addEventListener("click", (event) => {\n' +
            "    console.log(event.target);\n" +
            "});\n" +
            "\n\n" +

            "PREVENT DEFAULT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "event.preventDefault();\n\n" +
            "Prevents the browser's default behavior, such as a form submission.\n\n" +

            "STOP PROPAGATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "event.stopPropagation();\n\n" +
            "Stops the event from continuing through the propagation path.\n\n" +

            "EVENT DELEGATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Attach one listener to a parent instead of many child elements.\n\n" +

            "js\n" +
            'list.addEventListener("click", (event) => {\n' +
            "    if (event.target.matches(\"button\")) {\n" +
            "        // handle click\n" +
            "    }\n" +
            "});\n" +
            "\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Event delegation is especially useful for dynamically created elements.",

        faTitle: "🖱️ رویدادها",
        faContent:
            "🖱️ رویدادها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Eventها اتفاقاتی هستند که در صفحه رخ می‌دهند؛ مثل کلیک، تایپ، حرکت ماوس یا ارسال فرم.\n\n" +

            "ADD EVENT LISTENER\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای واکنش به یک Event از addEventListener() استفاده می‌شود.\n\n" +

            'button.addEventListener("click", () => {\n' +
            '    console.log("Clicked");\n' +
            "});\n\n" +

            "COMMON EVENTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "click → کلیک روی عنصر\n" +
            "dblclick → دوبار کلیک\n" +
            "mouseover → ورود ماوس به عنصر\n" +
            "mouseout → خروج ماوس از عنصر\n" +
            "keydown → فشردن یک کلید\n" +
            "keyup → رها کردن یک کلید\n" +
            "input → تغییر مقدار input\n" +
            "change → تغییر مقدار و ثبت آن\n" +
            "submit → ارسال فرم\n" +
            "DOMContentLoaded → آماده شدن HTML صفحه\n\n" +

            "EVENT OBJECT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Event handler می‌تواند اطلاعات مربوط به رویداد را دریافت کند.\n\n" +

            'button.addEventListener("click", (event) => {\n' +
            "    console.log(event.target);\n" +
            "});\n\n" +

            "preventDefault()\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای جلوگیری از رفتار پیش‌فرض مرورگر استفاده می‌شود.\n\n" +

            'form.addEventListener("submit", (event) => {\n' +
            "    event.preventDefault();\n" +
            "});\n\n" +

            "stopPropagation()\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "از انتقال Event به عناصر والد جلوگیری می‌کند.\n\n" +

            "EVENT DELEGATION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "به‌جای اضافه کردن listener به چندین عنصر، می‌توان listener را روی یک parent قرار داد و target را بررسی کرد.\n\n" +

            'list.addEventListener("click", (event) => {\n' +
            '    if (event.target.matches("button")) {\n' +
            "        console.log(event.target);\n" +
            "    }\n" +
            "});\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای مدیریت رویدادها معمولاً addEventListener() را به روش‌های قدیمی مانند onclick ترجیح دهید.",
    },

    {
        id: 12,
        title: "⏱️ Async JavaScript",
        content:
            "⏱️ ASYNC JAVASCRIPT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Asynchronous JavaScript allows code to handle tasks that finish later without blocking the rest of the program.\n\n" +

            "SET TIMEOUT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "setTimeout(() => {\n" +
            '    console.log("Done");\n' +
            "}, 1000);\n" +
            "\n\n" +

            "PROMISE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "A Promise represents the eventual result of an asynchronous operation.\n\n" +

            "States:\n" +
            "• pending\n" +
            "• fulfilled\n" +
            "• rejected\n\n" +

            "js\n" +
            "const promise = new Promise((resolve, reject) => {\n" +
            "    resolve(" +
            '"Success"' +
            ");\n" +
            "});\n" +
            "\n\n" +

            "THEN / CATCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "promise\n" +
            "    .then(result => console.log(result))\n" +
            "    .catch(error => console.error(error))\n" +
            "    .finally(() => console.log(" +
            '"Finished"' +
            "));\n" +
            "\n\n" +

            "ASYNC / AWAIT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "async function getData() {\n" +
            "    const result = await promise;\n" +
            "    return result;\n" +
            "}\n" +
            "\n\n" +

            "ERROR HANDLING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "try {\n" +
            "    const data = await getData();\n" +
            "} catch (error) {\n" +
            "    console.error(error);\n" +
            "}\n" +
            "\n\n" +

            "USEFUL METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Promise.all() → wait for all promises\n" +
            "Promise.allSettled() → wait for all outcomes\n" +
            "Promise.race() → first settled promise\n" +
            "Promise.any() → first fulfilled promise\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use async/await for readable asynchronous code and handle failures with try/catch.",

        faTitle: "⏱️ JavaScript ناهمگام",
        faContent:
            "⏱️ JavaScript ناهمگام\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Asynchronous JavaScript به کد اجازه می‌دهد کارهایی مانند درخواست شبکه و تایمرها را بدون متوقف کردن اجرای اصلی برنامه مدیریت کند.\n\n" +

            "setTimeout()\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "کد را پس از مدت مشخصی اجرا می‌کند.\n\n" +

            'setTimeout(() => {\n' +
            '    console.log("Done");\n' +
            "}, 1000);\n\n" +

            "PROMISE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Promise نشان‌دهنده نتیجه‌ای است که ممکن است در آینده آماده شود.\n\n" +

            "Promise دارای سه وضعیت اصلی است:\n\n" +

            "pending → در حال انتظار\n" +
            "fulfilled → با موفقیت انجام شده\n" +
            "rejected → با خطا مواجه شده\n\n" +

            "CREATING A PROMISE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const promise = new Promise((resolve, reject) => {\n" +
            "    resolve(\"Success\");\n" +
            "});\n\n" +

            "THEN / CATCH / FINALLY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "promise\n" +
            "    .then(result => console.log(result))\n" +
            "    .catch(error => console.error(error))\n" +
            "    .finally(() => console.log(\"Finished\"));\n\n" +

            "ASYNC / AWAIT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "async function loadData() {\n" +
            "    const result = await promise;\n" +
            "    console.log(result);\n" +
            "}\n\n" +

            "تابع async همیشه یک Promise برمی‌گرداند و await برای منتظر ماندن برای نتیجه Promise استفاده می‌شود.\n\n" +

            "ERROR HANDLING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "async function loadData() {\n" +
            "    try {\n" +
            "        const result = await promise;\n" +
            "    } catch (error) {\n" +
            "        console.error(error);\n" +
            "    }\n" +
            "}\n\n" +

            "PROMISE METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Promise.all() → منتظر تمام Promiseها می‌ماند\n" +
            "Promise.allSettled() → نتیجه تمام Promiseها را دریافت می‌کند\n" +
            "Promise.race() → اولین Promise تمام‌شده را برمی‌گرداند\n" +
            "Promise.any() → اولین Promise موفق را برمی‌گرداند\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای کدهای asynchronous پیچیده، async/await معمولاً خواناتر از زنجیره‌های طولانی then() است.",
    },

    {
        id: 13,
        title: "🌍 Fetch & APIs",
        content:
            "🌍 FETCH & APIs\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "The Fetch API allows JavaScript to communicate with servers and external APIs.\n\n" +

            "GET REQUEST\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const response = await fetch(url);\n" +
            "const data = await response.json();\n" +
            "\n\n" +

            "CHECK RESPONSE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "if (!response.ok) {\n" +
            '    throw new Error("Request failed");\n' +
            "}\n" +
            "\n\n" +

            "POST REQUEST\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const response = await fetch(url, {\n" +
            '    method: "POST",\n' +
            "    headers: {\n" +
            '        "Content-Type": "application/json"\n' +
            "    },\n" +
            "    body: JSON.stringify(data)\n" +
            "});\n" +
            "\n\n" +

            "HTTP METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "GET → retrieve data\n" +
            "POST → create/send data\n" +
            "PUT → replace data\n" +
            "PATCH → partially update data\n" +
            "DELETE → remove data\n\n" +

            "COMMON STATUS CODES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "200 → OK\n" +
            "201 → Created\n" +
            "204 → No Content\n" +
            "400 → Bad Request\n" +
            "401 → Unauthorized\n" +
            "403 → Forbidden\n" +
            "404 → Not Found\n" +
            "500 → Server Error\n\n" +

            "ERROR HANDLING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "try {\n" +
            "    const response = await fetch(url);\n\n" +
            "    if (!response.ok) {\n" +
            "        throw new Error(HTTP ${response.status});\n" +
            "    }\n\n" +
            "    const data = await response.json();\n" +
            "} catch (error) {\n" +
            "    console.error(error);\n" +
            "}\n" +
            "\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "fetch() does not reject automatically for HTTP errors such as 404 or 500. Check response.ok yourself.",

        faTitle: "🌍 Fetch و APIها",
        faContent:
            "🌍 Fetch و APIها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "API راهی برای ارتباط بین برنامه‌ها و دریافت یا ارسال داده است. fetch() برای ارسال درخواست‌های HTTP در JavaScript استفاده می‌شود.\n\n" +

            "GET REQUEST\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const response = await fetch(\"https://api.example.com/users\");\n" +
            "const data = await response.json();\n\n" +

            "response.ok\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "response.ok زمانی true است که وضعیت HTTP در محدوده 200 تا 299 باشد.\n\n" +

            "POST REQUEST\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const response = await fetch(\"https://api.example.com/users\", {\n" +
            '    method: "POST",\n' +
            "    headers: {\n" +
            '        "Content-Type": "application/json"\n' +
            "    },\n" +
            '    body: JSON.stringify({ name: "Ali" })\n' +
            "});\n\n" +

            "HTTP METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "GET → دریافت داده\n" +
            "POST → ایجاد یا ارسال داده\n" +
            "PUT → جایگزینی کامل داده\n" +
            "PATCH → تغییر بخشی از داده\n" +
            "DELETE → حذف داده\n\n" +

            "COMMON STATUS CODES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "200 → موفق\n" +
            "201 → ایجاد موفق\n" +
            "204 → موفق بدون محتوا\n" +
            "400 → درخواست نامعتبر\n" +
            "401 → نیاز به احراز هویت\n" +
            "403 → دسترسی ممنوع\n" +
            "404 → پیدا نشد\n" +
            "500 → خطای سرور\n\n" +

            "ERROR HANDLING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "try {\n" +
            '    const response = await fetch(url);\n' +
            "    if (!response.ok) {\n" +
            '        throw new Error("Request failed");\n' +
            "    }\n" +
            "    const data = await response.json();\n" +
            "} catch (error) {\n" +
            "    console.error(error);\n" +
            "}\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "fetch() برای خطاهای HTTP مانند 404 یا 500 به‌صورت خودکار reject نمی‌شود؛ response.ok یا response.status را بررسی کنید.",
    },

    {
        id: 14,
        title: "🧩 Strings",
        content:
            "🧩 STRINGS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Strings represent text in JavaScript.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const name = "Ali";\n' +
            "const message = 'Hello';\n" +
            "const greeting = Hello;\n\n" +

            "TEMPLATE LITERALS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const name = "Ali";\n' +
            "const message = Hello ${name};\n" +
            "\n\n" +

            "COMMON PROPERTIES & METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "length → string length\n" +
            "toUpperCase() → uppercase\n" +
            "toLowerCase() → lowercase\n" +
            "trim() → remove surrounding whitespace\n" +
            "includes() → check for text\n" +
            "startsWith() → check beginning\n" +
            "endsWith() → check ending\n" +
            "slice() → extract part\n" +
            "substring() → extract part\n" +
            "replace() → replace first match\n" +
            "replaceAll() → replace all matches\n" +
            "split() → convert to array\n" +
            "charAt() → get character\n\n" +

            "EXAMPLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const name = "  Ali  ";\n' +
            "name.trim();\n" +
            "name.toUpperCase();\n" +
            'name.includes("Ali");\n' +
            "\n\n" +

            "SPLIT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const words = "HTML CSS JS".split(" ");\n' +
            "\n\n" +

            "JOINING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const message = ["Hello", "Ali"].join(" ");\n' +
            "\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Strings are immutable. Methods return new strings instead of changing the original string.",

        faTitle: "🧩 رشته‌ها",
        faContent:
            "🧩 رشته‌ها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Stringها برای نمایش و مدیریت متن در JavaScript استفاده می‌شوند.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const name = "Ali";\n' +
            "const message = 'Hello';\n\n" +

            "TEMPLATE LITERALS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Template literalها با backtick ساخته می‌شوند و امکان قرار دادن متغیرها داخل متن را فراهم می‌کنند.\n\n" +

            'const name = "Ali";\n' +
            "const message = `Hello ${name}`;\n\n" +

            "COMMON PROPERTIES & METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "length → طول String\n" +
            "toUpperCase() → تبدیل به حروف بزرگ\n" +
            "toLowerCase() → تبدیل به حروف کوچک\n" +
            "trim() → حذف فاصله‌های ابتدا و انتهای متن\n" +
            "includes() → بررسی وجود یک متن\n" +
            "startsWith() → بررسی شروع متن\n" +
            "endsWith() → بررسی پایان متن\n" +
            "slice() → استخراج بخشی از متن\n" +
            "substring() → استخراج بخشی از متن\n" +
            "replace() → جایگزینی اولین مورد مطابق\n" +
            "replaceAll() → جایگزینی تمام موارد مطابق\n" +
            "split() → تبدیل String به Array\n" +
            "charAt() → دریافت کاراکتر در یک موقعیت\n\n" +

            "EXAMPLES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const name = "  Ali  ";\n' +
            "name.trim();\n" +
            "name.toUpperCase();\n" +
            'name.includes("Ali");\n\n' +

            "SPLIT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const words = "HTML CSS JS".split(" ");\n\n' +

            "JOINING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const message = ["Hello", "Ali"].join(" ");\n\n' +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Stringها immutable هستند؛ یعنی متدهای آن‌ها String اصلی را تغییر نمی‌دهند و معمولاً یک String جدید برمی‌گردانند.",
    },

    {
        id: 15,
        title: "🔢 Numbers & Math",
        content:
            "🔢 NUMBERS & MATH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript uses the number type for most integers and floating-point values.\n\n" +

            "CONVERSION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Number(value) → convert to number\n" +
            "parseInt(value) → parse integer\n" +
            "parseFloat(value) → parse decimal\n\n" +

            "NUMBER METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Number.isNaN() → check for NaN\n" +
            "Number.isInteger() → check for integer\n" +
            "Number.isFinite() → check for finite number\n" +
            "toFixed() → format decimal places\n\n" +

            "MATH METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Math.round() → nearest integer\n" +
            "Math.floor() → round down\n" +
            "Math.ceil() → round up\n" +
            "Math.trunc() → remove decimal part\n" +
            "Math.abs() → absolute value\n" +
            "Math.max() → largest value\n" +
            "Math.min() → smallest value\n" +
            "Math.pow() → exponentiation\n" +
            "Math.sqrt() → square root\n" +
            "Math.random() → random value from 0 to less than 1\n\n" +

            "RANDOM INTEGER\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const random = Math.floor(Math.random() * 10);\n" +
            "\n\n" +

            "This produces an integer from 0 to 9.\n\n" +

            "ROUNDING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Math.floor(4.9) → 4\n" +
            "Math.ceil(4.1) → 5\n" +
            "Math.round(4.5) → 5\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "For financial calculations, be careful with floating-point precision.",

        faTitle: "🔢 اعداد و Math",
        faContent:
            "🔢 اعداد و Math\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript از نوع number برای اعداد صحیح و اعشاری استفاده می‌کند و شیء Math مجموعه‌ای از ابزارهای ریاضی را در اختیار شما قرار می‌دهد.\n\n" +

            "NUMBER CONVERSION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Number(\"42\") → تبدیل String به Number\n" +
            "parseInt(\"42px\") → استخراج عدد صحیح\n" +
            "parseFloat(\"3.14px\") → استخراج عدد اعشاری\n\n" +

            "NUMBER METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "toFixed() → نمایش عدد با تعداد مشخصی رقم اعشار\n" +
            "toString() → تبدیل Number به String\n" +
            "Number.isInteger() → بررسی صحیح بودن عدد\n" +
            "Number.isNaN() → بررسی NaN بودن مقدار\n\n" +

            "MATH METHODS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Math.round() → گرد کردن به نزدیک‌ترین عدد صحیح\n" +
            "Math.floor() → گرد کردن به پایین\n" +
            "Math.ceil() → گرد کردن به بالا\n" +
            "Math.trunc() → حذف بخش اعشاری\n" +
            "Math.abs() → قدرمطلق\n" +
            "Math.max() → بزرگ‌ترین مقدار\n" +
            "Math.min() → کوچک‌ترین مقدار\n" +
            "Math.pow() → محاسبه توان\n" +
            "Math.sqrt() → جذر\n\n" +

            "RANDOM NUMBER\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Math.random() عددی تصادفی بین 0 و کمتر از 1 تولید می‌کند.\n\n" +

            "const random = Math.floor(Math.random() * 10);\n\n" +

            "برای تولید عدد صحیح از 1 تا 10:\n\n" +

            "const random = Math.floor(Math.random() * 10) + 1;\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "محاسبات اعشاری در JavaScript ممکن است به دلیل نحوه نمایش اعداد اعشاری دقیقاً نتیجه مورد انتظار را ندهند؛ برای مقادیر حساس به دقت این موضوع را در نظر بگیرید.",
    },

    {
        id: 16,
        title: "📅 Dates",
        content:
            "📅 DATES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "The Date object is used to work with dates and times.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const now = new Date();\n" +
            "\n\n" +

            "CURRENT TIMESTAMP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Date.now()\n\n" +

            "Returns the current time as milliseconds since January 1, 1970 UTC.\n\n" +

            "GET DATE PARTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "date.getFullYear() → year\n" +
            "date.getMonth() → month\n" +
            "date.getDate() → day of month\n" +
            "date.getDay() → day of week\n" +
            "date.getHours() → hour\n" +
            "date.getMinutes() → minutes\n" +
            "date.getSeconds() → seconds\n\n" +

            "IMPORTANT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "getMonth() starts at 0.\n\n" +

            "January → 0\n" +
            "February → 1\n" +
            "December → 11\n\n" +

            "CREATE A SPECIFIC DATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'const date = new Date("2026-09-02");\n' +
            "\n\n" +

            "ISO FORMAT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "date.toISOString()\n\n" +

            "Returns a standardized ISO date-time string.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "For complex date/time handling and formatting, frontend projects often use dedicated date libraries.",

        faTitle: "📅 تاریخ و زمان",
        faContent:
            "📅 تاریخ و زمان\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "شیء Date برای کار با تاریخ و زمان در JavaScript استفاده می‌شود.\n\n" +

            "CREATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const now = new Date();\n" +
            "const date = new Date(\"2026-09-02\");\n\n" +

            "CURRENT TIMESTAMP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Date.now() → زمان فعلی را به صورت timestamp برمی‌گرداند.\n\n" +

            "GET VALUES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "date.getFullYear() → سال\n" +
            "date.getMonth() → ماه\n" +
            "date.getDate() → روز ماه\n" +
            "date.getDay() → روز هفته\n" +
            "date.getHours() → ساعت\n" +
            "date.getMinutes() → دقیقه\n" +
            "date.getSeconds() → ثانیه\n\n" +

            "💡 IMPORTANT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "getMonth() از 0 شروع می‌شود؛ بنابراین January برابر 0 و December برابر 11 است.\n\n" +

            "SPECIFIC DATE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const date = new Date(2026, 8, 2);\n\n" +

            "در این مثال ماه 8 برابر September است.\n\n" +

            "ISO FORMAT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "date.toISOString();\n\n" +

            "تاریخ را در قالب استاندارد ISO 8601 برمی‌گرداند.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "برای کارهای پیچیده‌تر مربوط به تاریخ و timezone، APIهای مدرن یا کتابخانه‌های تخصصی می‌توانند مدیریت تاریخ را ساده‌تر کنند.",
    },

    {
        id: 17,
        title: "🧮 JSON",
        content:
            "🧮 JSON\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON (JavaScript Object Notation) is a common format for exchanging structured data between applications.\n\n" +

            "OBJECT → JSON\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const user = {\n" +
            '    name: "Ali",\n' +
            "    age: 25\n" +
            "};\n\n" +
            "const json = JSON.stringify(user);\n" +
            "\n\n" +

            "JSON → OBJECT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "const object = JSON.parse(json);\n" +
            "\n\n" +

            "COMMON USES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "• API requests and responses\n" +
            "• Configuration files\n" +
            "• Local storage\n" +
            "• Data exchange between systems\n\n" +

            "JSON VALUES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON supports:\n" +
            "• strings\n" +
            "• numbers\n" +
            "• booleans\n" +
            "• null\n" +
            "• arrays\n" +
            "• objects\n\n" +

            "IMPORTANT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON does not support JavaScript functions, undefined, or comments.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use JSON.stringify() when sending JavaScript data and JSON.parse() when receiving JSON text.",

        faTitle: "🧮 JSON",
        faContent:
            "🧮 JSON\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON یک فرمت متنی برای ذخیره و انتقال داده است و در ارتباط با APIها بسیار استفاده می‌شود.\n\n" +

            "CONVERT TO JSON\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON.stringify() → تبدیل JavaScript value به JSON string\n\n" +

            'const user = { name: "Ali", age: 25 };\n' +
            "const json = JSON.stringify(user);\n\n" +

            "PARSE JSON\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON.parse() → تبدیل JSON string به JavaScript value\n\n" +

            "const user = JSON.parse(json);\n\n" +

            "COMMON USES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "• ارسال و دریافت داده از API\n" +
            "• ذخیره داده در localStorage\n" +
            "• انتقال داده بین سیستم‌ها\n\n" +

            "SUPPORTED VALUES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON از object، Array، string، number، boolean و null پشتیبانی می‌کند.\n\n" +

            "IMPORTANT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JSON از function، undefined، Symbol و برخی ساختارهای خاص JavaScript پشتیبانی نمی‌کند.\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "قبل از JSON.parse() مطمئن شوید که متن واقعاً JSON معتبر است؛ در غیر این صورت ممکن است SyntaxError دریافت کنید.",
    },

    {
        id: 18,
        title: "💾 Web Storage",
        content:
            "💾 WEB STORAGE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Web Storage lets frontend applications store small amounts of data in the browser.\n\n" +

            "LOCAL STORAGE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Data remains available after the browser is closed.\n\n" +

            "js\n" +
            'localStorage.setItem("name", "Ali");\n' +
            'const name = localStorage.getItem("name");\n' +
            'localStorage.removeItem("name");\n' +
            "localStorage.clear();\n" +
            "\n\n" +

            "SESSION STORAGE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Data is associated with the current browser session.\n\n" +

            "js\n" +
            'sessionStorage.setItem("theme", "dark");\n' +
            'sessionStorage.getItem("theme");\n' +
            'sessionStorage.removeItem("theme");\n' +
            "sessionStorage.clear();\n" +
            "\n\n" +

            "STORING OBJECTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Storage values are strings, so objects should be converted to JSON.\n\n" +

            "js\n" +
            "const user = { name: " +
            '"Ali"' +
            " };\n" +
            'localStorage.setItem("user", JSON.stringify(user));\n\n' +
            'const savedUser = JSON.parse(localStorage.getItem("user"));\n' +
            "\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Never store sensitive information such as passwords or private tokens in Web Storage.",

        faTitle: "💾 ذخیره‌سازی در مرورگر",
        faContent:
            "💾 ذخیره‌سازی در مرورگر\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Web Storage به JavaScript اجازه می‌دهد داده‌های ساده را در مرورگر ذخیره کند.\n\n" +

            "LOCALSTORAGE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "داده‌ها تا زمانی که توسط کاربر یا برنامه حذف نشوند باقی می‌مانند.\n\n" +

            'localStorage.setItem("name", "Ali");\n' +
            'localStorage.getItem("name");\n' +
            'localStorage.removeItem("name");\n' +
            "localStorage.clear();\n\n" +

            "SESSIONSTORAGE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "sessionStorage API مشابه localStorage دارد، اما داده‌ها معمولاً فقط در طول session همان tab باقی می‌مانند.\n\n" +

            'sessionStorage.setItem("theme", "dark");\n' +
            'sessionStorage.getItem("theme");\n\n' +

            "STORING OBJECTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Storage فقط مقدارهای string را ذخیره می‌کند. برای objectها از JSON استفاده کنید.\n\n" +

            'const user = { name: "Ali", age: 25 };\n' +
            "localStorage.setItem(\"user\", JSON.stringify(user));\n\n" +

            "const savedUser = JSON.parse(localStorage.getItem(\"user\"));\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "اطلاعات حساس مانند password یا tokenهای امنیتی را در localStorage ذخیره نکنید.",
    },

    {
        id: 19,
        title: "🧯 Error Handling",
        content:
            "🧯 ERROR HANDLING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Error handling allows your application to detect and respond to problems without unexpectedly crashing.\n\n" +

            "TRY / CATCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "try {\n" +
            "    riskyOperation();\n" +
            "} catch (error) {\n" +
            "    console.error(error);\n" +
            "}\n" +
            "\n\n" +

            "FINALLY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "The finally block runs whether an error occurs or not.\n\n" +

            "js\n" +
            "try {\n" +
            "} catch (error) {\n" +
            "} finally {\n" +
            "    // cleanup\n" +
            "}\n" +
            "\n\n" +

            "THROW\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'throw new Error("Something went wrong");\n' +
            "\n\n" +

            "COMMON ERRORS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Error → generic error\n" +
            "TypeError → invalid value/type operation\n" +
            "ReferenceError → invalid variable reference\n" +
            "SyntaxError → invalid JavaScript syntax\n\n" +

            "CONSOLE DEBUGGING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "console.log() → general output\n" +
            "console.error() → errors\n" +
            "console.warn() → warnings\n" +
            "console.table() → display tabular data\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Handle errors where you can meaningfully recover from them. Don't hide errors with empty catch blocks.",

        faTitle: "🧯 مدیریت خطا",
        faContent:
            "🧯 مدیریت خطا\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Error Handling به برنامه اجازه می‌دهد خطاها را شناسایی و به شکل کنترل‌شده مدیریت کند.\n\n" +

            "TRY / CATCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "try {\n" +
            "    riskyOperation();\n" +
            "} catch (error) {\n" +
            "    console.error(error);\n" +
            "}\n\n" +

            "کد داخل try اجرا می‌شود و اگر خطایی رخ دهد، catch آن را دریافت می‌کند.\n\n" +

            "FINALLY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "finally در هر دو حالت موفقیت یا خطا اجرا می‌شود.\n\n" +

            "try {\n" +
            "    // code\n" +
            "} catch (error) {\n" +
            "    // handle error\n" +
            "} finally {\n" +
            "    // always runs\n" +
            "}\n\n" +

            "THROW\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "با throw می‌توان یک خطا را به‌صورت دستی ایجاد کرد.\n\n" +

            'throw new Error("Something went wrong");\n\n' +

            "COMMON ERRORS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "SyntaxError → خطای syntax\n" +
            "ReferenceError → دسترسی به متغیر نامعتبر\n" +
            "TypeError → استفاده نادرست از یک نوع داده\n" +
            "RangeError → مقدار خارج از محدوده مجاز\n\n" +

            "DEBUGGING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "console.log() → نمایش مقدار برای بررسی\n" +
            "console.error() → نمایش خطا\n" +
            "console.warn() → نمایش هشدار\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "خطاها را به‌جای نادیده گرفتن، به‌صورت مناسب مدیریت کنید تا برنامه قابل اعتمادتر و قابل دیباگ‌تر باشد.",
    },

    {
        id: 20,
        title: "📦 Modules",
        content:
            "📦 MODULES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "JavaScript modules allow code to be split into separate files and reused across a project.\n\n" +

            "NAMED EXPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "export function greet() {\n" +
            '    return "Hello";\n' +
            "}\n" +
            "\n\n" +

            "NAMED IMPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'import { greet } from "./utils.js";\n' +
            "\n\n" +

            "DEFAULT EXPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "export default greet;\n" +
            "\n\n" +

            "DEFAULT IMPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'import greet from "./utils.js";\n' +
            "\n\n" +

            "MULTIPLE EXPORTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            "export const name = " +
            '"Ali"' +
            ";\n" +
            "export const age = 25;\n" +
            "\n\n" +

            "IMPORT ALIAS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "js\n" +
            'import { greet as sayHello } from "./utils.js";\n' +
            "\n\n" +

            "WHY MODULES?\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "• Organize large projects\n" +
            "• Reuse code\n" +
            "• Reduce global variables\n" +
            "• Make dependencies explicit\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Keep related functionality together and give modules clear responsibilities.",

        faTitle: "📦 ماژول‌ها",
        faContent:
            "📦 ماژول‌ها\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Modules به شما اجازه می‌دهند کد را در فایل‌های جداگانه تقسیم و بین آن‌ها استفاده کنید.\n\n" +

            "NAMED EXPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "export const name = \"Ali\";\n" +
            "export function greet() {\n" +
            '    console.log("Hello");\n' +
            "}\n\n" +

            "NAMED IMPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'import { name, greet } from "./user.js";\n\n' +

            "DEFAULT EXPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const user = {\n" +
            '    name: "Ali"\n' +
            "};\n\n" +

            "export default user;\n\n" +

            "DEFAULT IMPORT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'import user from "./user.js";\n\n' +

            "MULTIPLE EXPORTS\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "یک فایل می‌تواند چند named export داشته باشد، اما فقط یک default export می‌تواند داشته باشد.\n\n" +

            "ALIASES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'import { name as userName } from "./user.js";\n\n' +

            "WHY MODULES?\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "• تقسیم کد به فایل‌های کوچک‌تر\n" +
            "• استفاده مجدد از کد\n" +
            "• جلوگیری از شلوغ شدن فایل‌ها\n" +
            "• مدیریت بهتر dependencyها\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "هر ماژول بهتر است مسئولیت مشخصی داشته باشد و فقط چیزهایی را export کند که فایل‌های دیگر واقعاً به آن‌ها نیاز دارند.",
    },

    {
        id: 21,
        title: "⚡ Quick Syntax",
        content:
            "⚡ QUICK SYNTAX\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "A fast lookup for common JavaScript syntax.\n\n" +

            "VARIABLE\n" +
            "const name = " +
            '"Ali"' +
            ";\n\n" +

            "FUNCTION\n" +
            "function greet() {}\n\n" +

            "ARROW FUNCTION\n" +
            "const greet = () => {};\n\n" +

            "CONDITION\n" +
            "if (condition) {}\n\n" +

            "TERNARY\n" +
            "condition ? value1 : value2\n\n" +

            "FOR LOOP\n" +
            "for (let i = 0; i < 10; i++) {}\n\n" +

            "FOR...OF\n" +
            "for (const item of items) {}\n\n" +

            "ARRAY\n" +
            "const users = [];\n\n" +

            "OBJECT\n" +
            "const user = {};\n\n" +

            "DESTRUCTURING\n" +
            "const { name } = user;\n" +
            "const [first] = items;\n\n" +

            "SPREAD\n" +
            "const copy = [...array];\n" +
            "const clone = { ...object };\n\n" +

            "TEMPLATE LITERAL\n" +
            "js\n" +
            "const message = Hello ${name};\n" +
            "\n\n" +

            "EVENT\n" +
            "js\n" +
            'button.addEventListener("click", () => {});\n' +
            "\n\n" +

            "FETCH\n" +
            "js\n" +
            "const response = await fetch(url);\n" +
            "const data = await response.json();\n" +
            "\n\n" +

            "LOCAL STORAGE\n" +
            'localStorage.setItem("key", "value");\n\n' +

            "IMPORT\n" +
            'import { thing } from "./file.js";\n\n' +

            "EXPORT\n" +
            "export function thing() {}\n\n" +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Use this page when you remember what you want to do but need a quick syntax reminder.",

        faTitle: "⚡ سینتکس سریع",
        faContent:
            "⚡ سینتکس سریع\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "مرجع سریع برای syntaxهای پرکاربرد JavaScript.\n\n" +

            "VARIABLE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const name = "Ali";\n' +
            "let age = 25;\n\n" +

            "FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "function greet(name) {\n" +
            '    return "Hello " + name;\n' +
            "}\n\n" +

            "ARROW FUNCTION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const greet = name => "Hello " + name;\n\n' +

            "CONDITION\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "if (age >= 18) {\n" +
            '    console.log("Adult");\n' +
            "}\n\n" +

            "TERNARY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const status = age >= 18 ? "Adult" : "Minor";\n\n' +

            "LOOP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "for (let i = 0; i < 5; i++) {\n" +
            "    console.log(i);\n" +
            "}\n\n" +

            "FOR...OF\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "for (const item of items) {\n" +
            "    console.log(item);\n" +
            "}\n\n" +

            "ARRAY\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const fruits = ["apple", "banana", "orange"];\n\n' +

            "OBJECT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const user = { name: "Ali", age: 25 };\n\n' +

            "DESTRUCTURING\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const { name, age } = user;\n" +
            "const [first, second] = items;\n\n" +

            "SPREAD\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "const updatedUser = { ...user, age: 26 };\n\n" +

            "TEMPLATE LITERAL\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const message = `Hello ${name}`;\n\n' +

            "EVENT\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'button.addEventListener("click", () => {\n' +
            '    console.log("Clicked");\n' +
            "});\n\n" +

            "FETCH\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'const response = await fetch("/api/users");\n' +
            "const data = await response.json();\n\n" +

            "LOCAL STORAGE\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'localStorage.setItem("theme", "dark");\n' +
            'const theme = localStorage.getItem("theme");\n\n' +

            "MODULES\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            'export const name = "Ali";\n' +
            'import { name } from "./user.js";\n\n' +

            "💡 TIP\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +

            "این بخش برای مرور سریع syntax است؛ برای توضیحات کامل‌تر هر موضوع، از Reference مربوط به همان topic استفاده کنید.",
    },
];