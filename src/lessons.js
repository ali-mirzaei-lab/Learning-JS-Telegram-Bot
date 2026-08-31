export const lessons = [
    {
        id: 1,
        title: "JavaScript Variables",
        content:
            "Variables are used to store data that we can use later in our program.\n\n" +
            "There are three ways to declare variables in JavaScript:\n\n" +
            "let\n" +
            "const\n" +
            "var\n\n" +
            "Modern JavaScript mainly uses let and const.\n\n" +
            "Example:\n\n" +
            'let age = 25;\nconst name = "Ali";\n\n' +
            "💡 Remember:\n\n" +
            "let → can be reassigned\n" +
            "const → cannot be reassigned",
        faTitle: "متغیرها در JavaScript",
        faContent:
            "متغیرها برای ذخیره داده‌هایی استفاده می‌شوند که می‌توانیم بعداً در برنامه از آن‌ها استفاده کنیم.\n\n" +
            "در JavaScript سه روش برای تعریف متغیر وجود دارد:\n\n" +
            "let\n" +
            "const\n" +
            "var\n\n" +
            "در JavaScript مدرن بیشتر از let و const استفاده می‌شود.\n\n" +
            "مثال:\n\n" +
            'let age = 25;\nconst name = "Ali";\n\n' +
            "💡 به خاطر بسپار:\n\n" +
            "let → می‌تواند دوباره مقداردهی شود\n" +
            "const → نمی‌تواند دوباره مقداردهی شود",
    },

    {
        id: 2,
        title: "JavaScript Data Types",
        content:
            "JavaScript has different data types for representing different kinds of values.\n\n" +
            "Some of the most common data types are:\n\n" +
            "String → text\n" +
            "Number → numbers\n" +
            "Boolean → true or false\n" +
            "Undefined → a variable without a value\n" +
            "Null → an intentional empty value\n\n" +
            "Example:\n\n" +
            'let name = "Ali";\n' +
            "let age = 25;\n" +
            "let isStudent = true;\n" +
            "let score;\n" +
            "let result = null;\n\n" +
            "💡 Remember:\n\n" +
            "Strings are written inside quotes.\n" +
            "Booleans can only be true or false.",
        faTitle: "انواع داده در JavaScript",
        faContent:
            "JavaScript دارای انواع مختلفی از داده‌ها برای نمایش مقادیر مختلف است.\n\n" +
            "برخی از رایج‌ترین انواع داده عبارت‌اند از:\n\n" +
            "String → متن\n" +
            "Number → اعداد\n" +
            "Boolean → مقدار true یا false\n" +
            "Undefined → متغیری که هنوز مقداری ندارد\n" +
            "Null → یک مقدار خالی که عمداً تعیین شده است\n\n" +
            "مثال:\n\n" +
            'let name = "Ali";\n' +
            "let age = 25;\n" +
            "let isStudent = true;\n" +
            "let score;\n" +
            "let result = null;\n\n" +
            "💡 به خاطر بسپار:\n\n" +
            "رشته‌ها داخل کوتیشن نوشته می‌شوند.\n" +
            "مقادیر Boolean فقط می‌توانند true یا false باشند.",
    },

    {
        id: 3,
        title: "JavaScript Operators",
        faTitle: "عملگرها در JavaScript",
        content: `Operators are symbols used to perform operations on values and variables.

Some common JavaScript operators are:

+
-
*
/
%
=
===
>
<

The + operator performs addition.

Example:

let result = 10 + 5;

The - operator performs subtraction.

Example:

let result = 10 - 3;

The * operator performs multiplication.

Example:

let result = 4 * 5;

The / operator performs division.

Example:

let result = 10 / 2;

The % operator returns the remainder of a division.

Example:

let result = 10 % 3;

The = operator assigns a value to a variable.

Example:

let age = 25;

Comparison operators are used to compare values.

For example:

10 === 10

This returns true.

10 > 5

This also returns true.

💡 Remember:

+ → addition
- → subtraction
* → multiplication
/ → division
% → remainder
= → assignment
=== → strict equality
> → greater than
< → less than`,
        faContent: `عملگرها نمادهایی هستند که برای انجام عملیات روی مقادیر و متغیرها استفاده می‌شوند.

برخی از عملگرهای رایج در JavaScript عبارت‌اند از:

+
-
*
/
%
=
===
>
<

عملگر + برای جمع استفاده می‌شود.

مثال:

let result = 10 + 5;

عملگر - برای تفریق استفاده می‌شود.

مثال:

let result = 10 - 3;

عملگر * برای ضرب استفاده می‌شود.

مثال:

let result = 4 * 5;

عملگر / برای تقسیم استفاده می‌شود.

مثال:

let result = 10 / 2;

عملگر % باقی‌مانده تقسیم را برمی‌گرداند.

مثال:

let result = 10 % 3;

عملگر = برای اختصاص دادن یک مقدار به یک متغیر استفاده می‌شود.

مثال:

let age = 25;

عملگرهای مقایسه‌ای برای مقایسه مقادیر استفاده می‌شوند.

برای مثال:

10 === 10

نتیجه این عبارت true است.

10 > 5

این عبارت نیز true است.

💡 به خاطر بسپار:

+ → جمع
- → تفریق
* → ضرب
/ → تقسیم
% → باقی‌مانده
= → اختصاص مقدار
=== → برابری کامل
> → بزرگ‌تر از
< → کوچک‌تر از`,
    },
];