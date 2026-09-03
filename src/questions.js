export const questions = [
    {
        id: 1,
        lessonId: 1,
        difficulty: "easy",
        question: "What is a variable used for in JavaScript?",
        options: [
            "To store data for later use",
            "To create a webpage",
            "To delete data",
            "To run JavaScript automatically",
        ],
        correctAnswer: 0,
        explanation:
            "A variable gives stored data a name so you can use that data later in your program.",
        faQuestion:
            "متغیر در JavaScript برای چه کاری استفاده می‌شود؟",
        faOptions: [
            "برای ذخیره داده‌ها و استفاده از آن‌ها در آینده",
            "برای ساختن یک صفحه وب",
            "برای حذف داده‌ها",
            "برای اجرای خودکار JavaScript",
        ],
        faExplanation:
            "متغیر به داده‌های ذخیره‌شده یک نام می‌دهد تا بتوانید بعداً در برنامه از آن‌ها استفاده کنید.",
    },

    {
        id: 2,
        lessonId: 1,
        difficulty: "easy",
        question: "Which keyword should you use when a variable's value needs to be changed later?",
        options: [
            "const",
            "let",
            "var",
            "fixed",
        ],
        correctAnswer: 1,
        explanation:
            "let is used when a variable may need to be reassigned later.",
        faQuestion:
            "وقتی ممکن است مقدار یک متغیر بعداً تغییر کند، از کدام کلمه کلیدی باید استفاده کنید؟",
        faOptions: [
            "const",
            "let",
            "var",
            "fixed",
        ],
        faExplanation:
            "از let زمانی استفاده می‌شود که ممکن است مقدار متغیر بعداً دوباره مقداردهی شود.",
    },

    {
        id: 3,
        lessonId: 1,
        difficulty: "easy",
        question: 'Which code correctly creates a variable called "age" with the value 25?',
        options: [
            "let age = 25;",
            "age let = 25;",
            "variable age = 25;",
            "create age = 25;",
        ],
        correctAnswer: 0,
        explanation:
            "let age = 25; correctly declares the variable age and assigns it the value 25.",
        faQuestion:
            'کدام کد متغیری به نام "age" با مقدار 25 را به‌درستی ایجاد می‌کند؟',
        faOptions: [
            "let age = 25;",
            "age let = 25;",
            "variable age = 25;",
            "create age = 25;",
        ],
        faExplanation:
            "کد let age = 25; متغیر age را به‌درستی تعریف می‌کند و مقدار 25 را به آن اختصاص می‌دهد.",
    },

    {
        id: 4,
        lessonId: 1,
        difficulty: "easy",
        question: "Which statement about let is correct?",
        options: [
            "A let variable cannot be changed",
            "A let variable can be reassigned",
            "let can only store numbers",
            "let is the same as const",
        ],
        correctAnswer: 1,
        explanation:
            "A variable declared with let can be reassigned after it has been created.",
        faQuestion:
            "کدام جمله درباره let صحیح است؟",
        faOptions: [
            "یک متغیر let نمی‌تواند تغییر کند",
            "یک متغیر let می‌تواند دوباره مقداردهی شود",
            "let فقط می‌تواند اعداد را ذخیره کند",
            "let با const یکسان است",
        ],
        faExplanation:
            "متغیری که با let تعریف شده باشد می‌تواند بعداً دوباره مقداردهی شود.",
    },

    {
        id: 5,
        lessonId: 1,
        difficulty: "medium",
        question: "What is the value of score after this code runs?\n\nlet score = 10;\nscore = 20;",
        options: [
            "10",
            "20",
            "30",
            "The variable is deleted",
        ],
        correctAnswer: 1,
        explanation:
            "score is first assigned 10 and then reassigned to 20, so its current value is 20.",
        faQuestion:
            "بعد از اجرای کد زیر مقدار score چیست؟\n\nlet score = 10;\nscore = 20;",
        faOptions: [
            "10",
            "20",
            "30",
            "متغیر حذف می‌شود",
        ],
        faExplanation:
            "ابتدا مقدار score برابر 10 است و سپس دوباره به 20 مقداردهی می‌شود، بنابراین مقدار فعلی آن 20 است.",
    },

    {
        id: 6,
        lessonId: 1,
        difficulty: "medium",
        question: "Which keyword is the better choice for a variable that should not be reassigned?",
        options: [
            "let",
            "const",
            "var",
            "fixed",
        ],
        correctAnswer: 1,
        explanation:
            "const is generally preferred when a variable does not need to be reassigned.",
        faQuestion:
            "برای متغیری که قرار نیست دوباره مقداردهی شود، کدام کلمه کلیدی انتخاب بهتری است؟",
        faOptions: [
            "let",
            "const",
            "var",
            "fixed",
        ],
        faExplanation:
            "وقتی قرار نیست مقدار متغیر دوباره تغییر کند، معمولاً const انتخاب بهتری است.",
    },

    {
        id: 7,
        lessonId: 1,
        difficulty: "medium",
        question: "What happens when this code runs?\n\nconst age = 20;\nage = 25;",
        options: [
            "age becomes 25",
            "age becomes 45",
            "JavaScript throws an error",
            "age becomes undefined",
        ],
        correctAnswer: 2,
        explanation:
            "A const variable cannot be reassigned after it has been initialized, so JavaScript throws an error.",
        faQuestion:
            "وقتی کد زیر اجرا می‌شود چه اتفاقی می‌افتد؟\n\nconst age = 20;\nage = 25;",
        faOptions: [
            "مقدار age به 25 تغییر می‌کند",
            "مقدار age به 45 تغییر می‌کند",
            "JavaScript یک خطا ایجاد می‌کند",
            "مقدار age برابر undefined می‌شود",
        ],
        faExplanation:
            "یک متغیر const بعد از مقداردهی اولیه نمی‌تواند دوباره مقداردهی شود، بنابراین JavaScript یک خطا ایجاد می‌کند.",
    },

    {
        id: 8,
        lessonId: 1,
        difficulty: "medium",
        question: 'Which declaration is the best choice for a user\'s name if the name will not be reassigned?',
        options: [
            'let name = "Ali";',
            'const name = "Ali";',
            'var name = "Ali";',
            'fixed name = "Ali";',
        ],
        correctAnswer: 1,
        explanation:
            "Because the name will not be reassigned, const is the appropriate choice.",
        faQuestion:
            'اگر نام کاربر قرار نیست تغییر کند، کدام تعریف انتخاب بهتری است؟',
        faOptions: [
            'let name = "Ali";',
            'const name = "Ali";',
            'var name = "Ali";',
            'fixed name = "Ali";',
        ],
        faExplanation:
            "چون قرار نیست نام دوباره مقداردهی شود، استفاده از const انتخاب مناسبی است.",
    },

    {
        id: 9,
        lessonId: 1,
        difficulty: "hard",
        question: "What will this code print?\n\nlet score = 10;\nscore = 15;\nscore = 25;\nconsole.log(score);",
        options: [
            "10",
            "15",
            "25",
            "50",
        ],
        correctAnswer: 2,
        explanation:
            "score is reassigned twice. Its final value is 25, so console.log prints 25.",
        faQuestion:
            "این کد چه چیزی چاپ می‌کند؟\n\nlet score = 10;\nscore = 15;\nscore = 25;\nconsole.log(score);",
        faOptions: [
            "10",
            "15",
            "25",
            "50",
        ],
        faExplanation:
            "مقدار score دو بار تغییر می‌کند و در نهایت برابر 25 است، بنابراین console.log مقدار 25 را چاپ می‌کند.",
    },

    {
        id: 10,
        lessonId: 1,
        difficulty: "hard",
        question: "Which code correctly uses both let and const?\n\nThe score will change, but the player's name will stay the same.",
        options: [
            'const score = 0;\nconst name = "Ali";',
            'let score = 0;\nconst name = "Ali";',
            'const score = 0;\nlet name = "Ali";',
            'let score = 0;\nlet name = "Ali";',
        ],
        correctAnswer: 1,
        explanation:
            "score needs to be reassigned, so it uses let. name does not need reassignment, so it uses const.",
        faQuestion:
            'کدام کد به‌درستی از let و const استفاده می‌کند؟\n\nمقدار امتیاز تغییر می‌کند، اما نام بازیکن ثابت می‌ماند.',
        faOptions: [
            'const score = 0;\nconst name = "Ali";',
            'let score = 0;\nconst name = "Ali";',
            'const score = 0;\nlet name = "Ali";',
            'let score = 0;\nlet name = "Ali";',
        ],
        faExplanation:
            "مقدار score باید دوباره تغییر کند، پس از let استفاده می‌شود. مقدار name قرار نیست تغییر کند، پس const انتخاب مناسبی است.",
    },

    {
        id: 11,
        lessonId: 2,
        difficulty: "easy",
        question: "What is a String used to represent in JavaScript?",
        options: [
            "Text",
            "Only numbers",
            "Only true or false",
            "An empty value",
        ],
        correctAnswer: 0,
        explanation:
            "A String is used to represent text in JavaScript.",
        faQuestion:
            "String در JavaScript برای نمایش چه چیزی استفاده می‌شود؟",
        faOptions: [
            "متن",
            "فقط اعداد",
            "فقط true یا false",
            "یک مقدار خالی",
        ],
        faExplanation:
            "String برای نمایش متن در JavaScript استفاده می‌شود.",
    },

    {
        id: 12,
        lessonId: 2,
        difficulty: "easy",
        question: 'Which value is a String?',
        options: [
            "42",
            "true",
            '"Hello"',
            "null",
        ],
        correctAnswer: 2,
        explanation:
            '"Hello" is a String because the text is surrounded by quotation marks.',
        faQuestion:
            "کدام گزینه یک String است؟",
        faOptions: [
            "42",
            "true",
            '"Hello"',
            "null",
        ],
        faExplanation:
            'مقدار "Hello" یک String است زیرا متن داخل علامت نقل‌قول قرار دارد.',
    },

    {
        id: 13,
        lessonId: 2,
        difficulty: "easy",
        question: 'Which code correctly stores the text "Ali" in a variable?',
        options: [
            'let name = "Ali";',
            'let "Ali" = name;',
            'text name = "Ali";',
            'name let = "Ali";',
        ],
        correctAnswer: 0,
        explanation:
            'let name = "Ali"; correctly declares the variable name and stores the String "Ali" in it.',
        faQuestion:
            'کدام کد متن "Ali" را به‌درستی در یک متغیر ذخیره می‌کند؟',
        faOptions: [
            'let name = "Ali";',
            'let "Ali" = name;',
            'text name = "Ali";',
            'name let = "Ali";',
        ],
        faExplanation:
            'کد let name = "Ali"; متغیر name را به‌درستی تعریف می‌کند و String "Ali" را در آن ذخیره می‌کند.',
    },

    {
        id: 14,
        lessonId: 2,
        difficulty: "easy",
        question: "Which quotation marks can be used to create a String in JavaScript?",
        options: [
            "Only single quotes",
            "Only double quotes",
            "Single or double quotes",
            "Quotation marks cannot be used",
        ],
        correctAnswer: 2,
        explanation:
            "JavaScript allows Strings to be written using matching single quotes or double quotes.",
        faQuestion:
            "برای ساختن یک String در JavaScript از کدام علامت‌های نقل‌قول می‌توان استفاده کرد؟",
        faOptions: [
            "فقط کوتیشن تکی",
            "فقط کوتیشن دوتایی",
            "کوتیشن تکی یا دوتایی",
            "نمی‌توان از کوتیشن استفاده کرد",
        ],
        faExplanation:
            "در JavaScript می‌توان String را با کوتیشن تکی یا دوتایی هماهنگ نوشت.",
    },

    {
        id: 15,
        lessonId: 2,
        difficulty: "medium",
        question: 'What is the data type of "25"?',
        options: [
            "Number",
            "String",
            "Boolean",
            "Null",
        ],
        correctAnswer: 1,
        explanation:
            '"25" is a String because the value is surrounded by quotation marks.',
        faQuestion:
            'نوع داده "25" چیست؟',
        faOptions: [
            "Number",
            "String",
            "Boolean",
            "Null",
        ],
        faExplanation:
            'مقدار "25" یک String است زیرا داخل علامت نقل‌قول قرار دارد.',
    },

    {
        id: 16,
        lessonId: 2,
        difficulty: "medium",
        question: "Which statement correctly compares 25 and \"25\"?",
        options: [
            "Both are Strings",
            "Both are Numbers",
            "25 is a Number and \"25\" is a String",
            "25 is a String and \"25\" is a Number",
        ],
        correctAnswer: 2,
        explanation:
            '25 is a numeric value, while "25" is text because it is inside quotation marks.',
        faQuestion:
            'کدام جمله تفاوت 25 و "25" را به‌درستی بیان می‌کند؟',
        faOptions: [
            "هر دو String هستند",
            "هر دو Number هستند",
            '25 یک Number است و "25" یک String است',
            '25 یک String است و "25" یک Number است',
        ],
        faExplanation:
            '25 یک مقدار عددی است، اما "25" به دلیل قرار گرفتن داخل علامت نقل‌قول یک String است.',
    },

    {
        id: 17,
        lessonId: 2,
        difficulty: "medium",
        question: 'What is stored in the variable "name"?\n\nconst name = "Ali";',
        options: [
            "The number Ali",
            'The text "Ali"',
            "The Boolean true",
            "An empty value",
        ],
        correctAnswer: 1,
        explanation:
            'The variable name stores the String value "Ali".',
        faQuestion:
            'چه چیزی در متغیر "name" ذخیره شده است؟\n\nconst name = "Ali";',
        faOptions: [
            "عدد Ali",
            'متن "Ali"',
            "مقدار Boolean یعنی true",
            "یک مقدار خالی",
        ],
        faExplanation:
            'متغیر name مقدار String یعنی "Ali" را ذخیره کرده است.',
    },

    {
        id: 18,
        lessonId: 2,
        difficulty: "hard",
        question: 'What will this code produce?\n\nconst name = "Ali";\nconst greeting = "Hello, " + name;',
        options: [
            '"Hello, Ali"',
            '"Hello, name"',
            '"Ali Hello, "',
            '"Hello, "',
        ],
        correctAnswer: 0,
        explanation:
            'The + operator joins the String "Hello, " with the value stored in name, producing "Hello, Ali".',
        faQuestion:
            'این کد چه مقداری ایجاد می‌کند؟\n\nconst name = "Ali";\nconst greeting = "Hello, " + name;',
        faOptions: [
            '"Hello, Ali"',
            '"Hello, name"',
            '"Ali Hello, "',
            '"Hello, "',
        ],
        faExplanation:
            'عملگر + رشته "Hello, " را با مقدار ذخیره‌شده در name به هم متصل می‌کند و مقدار "Hello, Ali" را ایجاد می‌کند.',
    },

    {
        id: 19,
        lessonId: 2,
        difficulty: "hard",
        question: 'Which value is text even though it contains only numbers?',
        options: [
            "123",
            "3.14",
            '"123"',
            "0",
        ],
        correctAnswer: 2,
        explanation:
            '"123" is text because it is surrounded by quotation marks, so it is a String.',
        faQuestion:
            "کدام مقدار با اینکه فقط شامل عدد است، یک متن محسوب می‌شود؟",
        faOptions: [
            "123",
            "3.14",
            '"123"',
            "0",
        ],
        faExplanation:
            'مقدار "123" به دلیل قرار گرفتن داخل علامت نقل‌قول یک String و در نتیجه یک متن است.',
    },

    {
        id: 20,
        lessonId: 2,
        difficulty: "hard",
        question: 'What will the variable "message" contain?\n\nconst name = "Ali";\nconst message = "Welcome " + name;',
        options: [
            '"Welcome"',
            '"Ali"',
            '"Welcome Ali"',
            '"Welcome name"',
        ],
        correctAnswer: 2,
        explanation:
            'The + operator joins "Welcome " with the value stored in name, so message contains "Welcome Ali".',
        faQuestion:
            'متغیر "message" شامل چه مقداری خواهد بود؟\n\nconst name = "Ali";\nconst message = "Welcome " + name;',
        faOptions: [
            '"Welcome"',
            '"Ali"',
            '"Welcome Ali"',
            '"Welcome name"',
        ],
        faExplanation:
            'عملگر + مقدار "Welcome " را با مقدار ذخیره‌شده در name ترکیب می‌کند، بنابراین message شامل "Welcome Ali" خواهد بود.',
    },

    {
        id: 21,
        lessonId: 3,
        difficulty: "easy",
        question: "Which data type is used for numbers in JavaScript?",
        options: [
            "Number",
            "String",
            "Boolean",
            "Null",
        ],
        correctAnswer: 0,
        explanation:
            "Number is the JavaScript data type used to represent numeric values such as whole numbers and decimals.",
        faQuestion:
            "کدام نوع داده در JavaScript برای اعداد استفاده می‌شود؟",
        faOptions: [
            "Number",
            "String",
            "Boolean",
            "Null",
        ],
        faExplanation:
            "نوع داده Number برای نمایش مقادیر عددی مانند اعداد صحیح و اعشاری در JavaScript استفاده می‌شود.",
    },

    {
        id: 22,
        lessonId: 3,
        difficulty: "easy",
        question: "Which value is a Number in JavaScript?",
        options: [
            '"42"',
            "true",
            "42",
            "null",
        ],
        correctAnswer: 2,
        explanation:
            "42 is a Number because it is written as a numeric value without quotation marks.",
        faQuestion:
            "کدام مقدار در JavaScript از نوع Number است؟",
        faOptions: [
            '"42"',
            "true",
            "42",
            "null",
        ],
        faExplanation:
            "مقدار 42 از نوع Number است زیرا به‌صورت یک مقدار عددی و بدون علامت نقل‌قول نوشته شده است.",
    },

    {
        id: 23,
        lessonId: 3,
        difficulty: "easy",
        question: "Which value is a decimal Number?",
        options: [
            '"3.14"',
            "3.14",
            "true",
            "null",
        ],
        correctAnswer: 1,
        explanation:
            "3.14 is a Number because JavaScript uses the Number type for decimal values as well as whole numbers.",
        faQuestion:
            "کدام مقدار یک عدد اعشاری از نوع Number است؟",
        faOptions: [
            '"3.14"',
            "3.14",
            "true",
            "null",
        ],
        faExplanation:
            "مقدار 3.14 از نوع Number است زیرا JavaScript از Number برای اعداد اعشاری و اعداد صحیح استفاده می‌کند.",
    },

    {
        id: 24,
        lessonId: 3,
        difficulty: "easy",
        question: "Which value is a negative Number?",
        options: [
            '"-15"',
            "true",
            "-15",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "-15 is a Number because negative numeric values are also represented using the Number type.",
        faQuestion:
            "کدام مقدار یک Number منفی است؟",
        faOptions: [
            '"-15"',
            "true",
            "-15",
            "undefined",
        ],
        faExplanation:
            "مقدار 15- از نوع Number است زیرا اعداد منفی نیز با نوع داده Number نمایش داده می‌شوند.",
    },

    {
        id: 25,
        lessonId: 3,
        difficulty: "medium",
        question: "What is the data type of the value stored in score?\n\nconst score = 95;",
        options: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The value 95 is a numeric value, so score stores a Number.",
        faQuestion:
            "نوع داده مقداری که در score ذخیره شده چیست؟\n\nconst score = 95;",
        faOptions: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        faExplanation:
            "مقدار 95 یک مقدار عددی است، بنابراین score یک مقدار از نوع Number را ذخیره می‌کند.",
    },

    {
        id: 26,
        lessonId: 3,
        difficulty: "medium",
        question: 'Which statement correctly compares 25 and "25"?',
        options: [
            "Both are Numbers",
            '25 is a Number and "25" is a String',
            "Both are Strings",
            '25 is a String and "25" is a Number',
        ],
        correctAnswer: 1,
        explanation:
            '25 is a Number, while "25" is a String because it is surrounded by quotation marks.',
        faQuestion:
            'کدام جمله تفاوت 25 و "25" را به‌درستی بیان می‌کند؟',
        faOptions: [
            "هر دو Number هستند",
            '25 یک Number است و "25" یک String است',
            "هر دو String هستند",
            '25 یک String است و "25" یک Number است',
        ],
        faExplanation:
            '25 یک Number است، در حالی که "25" به دلیل قرار گرفتن داخل علامت نقل‌قول یک String است.',
    },

    {
        id: 27,
        lessonId: 3,
        difficulty: "medium",
        question: 'What is the result of Number("hello")?',
        options: [
            "undefined",
            "null",
            "NaN",
            "hello",
        ],
        correctAnswer: 2,
        explanation:
            'Number("hello") cannot convert the text "hello" into a valid number, so the result is NaN.',
        faQuestion:
            'نتیجه Number("hello") چیست؟',
        faOptions: [
            "undefined",
            "null",
            "NaN",
            "hello",
        ],
        faExplanation:
            'تبدیل متن "hello" به یک عدد معتبر ممکن نیست، بنابراین نتیجه Number("hello") برابر NaN است.',
    },

    {
        id: 28,
        lessonId: 3,
        difficulty: "medium",
        question: "What does Math.round(4.6) return?",
        options: [
            "4",
            "5",
            "4.6",
            "6",
        ],
        correctAnswer: 1,
        explanation:
            "Math.round(4.6) rounds 4.6 to the nearest whole number, which is 5.",
        faQuestion:
            "نتیجه Math.round(4.6) چیست؟",
        faOptions: [
            "4",
            "5",
            "4.6",
            "6",
        ],
        faExplanation:
            "تابع Math.round مقدار 4.6 را به نزدیک‌ترین عدد صحیح گرد می‌کند که برابر با 5 است.",
    },

    {
        id: 29,
        lessonId: 3,
        difficulty: "hard",
        question: "What does this code return?\n\n10 / 0",
        options: [
            "0",
            "NaN",
            "Infinity",
            "An error",
        ],
        correctAnswer: 2,
        explanation:
            "Dividing a non-zero number by zero in JavaScript results in Infinity.",
        faQuestion:
            "کد زیر چه مقداری برمی‌گرداند؟\n\n10 / 0",
        faOptions: [
            "0",
            "NaN",
            "Infinity",
            "یک خطا",
        ],
        faExplanation:
            "تقسیم یک عدد غیرصفر بر صفر در JavaScript نتیجه Infinity را ایجاد می‌کند.",
    },

    {
        id: 30,
        lessonId: 3,
        difficulty: "hard",
        question: 'What are the data types of these three values?\n\n25, -5, "25"',
        options: [
            "Number, Number, String",
            "Number, String, Number",
            "String, Number, String",
            "Number, Number, Number",
        ],
        correctAnswer: 0,
        explanation:
            '25 and -5 are Numbers, while "25" is a String because it is surrounded by quotation marks.',
        faQuestion:
            'نوع داده این سه مقدار چیست؟\n\n25، -5، "25"',
        faOptions: [
            "Number، Number، String",
            "Number، String، Number",
            "String، Number، String",
            "Number، Number، Number",
        ],
        faExplanation:
            '25 و 5- از نوع Number هستند، در حالی که "25" به دلیل قرار گرفتن داخل علامت نقل‌قول از نوع String است.',
    },

    {
        id: 31,
        lessonId: 4,
        difficulty: "easy",
        question: "Which two values can a Boolean have in JavaScript?",
        options: [
            "true and false",
            "yes and no",
            "1 and 0",
            "on and off",
        ],
        correctAnswer: 0,
        explanation:
            "A Boolean can have only two values in JavaScript: true or false.",
        faQuestion:
            "یک مقدار Boolean در JavaScript می‌تواند چه دو مقداری داشته باشد؟",
        faOptions: [
            "true و false",
            "yes و no",
            "1 و 0",
            "on و off",
        ],
        faExplanation:
            "یک مقدار Boolean در JavaScript فقط می‌تواند true یا false باشد.",
    },

    {
        id: 32,
        lessonId: 4,
        difficulty: "easy",
        question: "Which value is a Boolean?",
        options: [
            '"true"',
            "true",
            '"false"',
            "1",
        ],
        correctAnswer: 1,
        explanation:
            "true without quotation marks is a Boolean value.",
        faQuestion:
            "کدام مقدار از نوع Boolean است؟",
        faOptions: [
            '"true"',
            "true",
            '"false"',
            "1",
        ],
        faExplanation:
            "مقدار true بدون علامت نقل‌قول یک مقدار Boolean است.",
    },

    {
        id: 33,
        lessonId: 4,
        difficulty: "easy",
        question: "What is the data type of false?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Null",
        ],
        correctAnswer: 2,
        explanation:
            "false is one of the two Boolean values in JavaScript.",
        faQuestion:
            "نوع داده false چیست؟",
        faOptions: [
            "String",
            "Number",
            "Boolean",
            "Null",
        ],
        faExplanation:
            "مقدار false یکی از دو مقدار نوع داده Boolean در JavaScript است.",
    },

    {
        id: 34,
        lessonId: 4,
        difficulty: "easy",
        question: "Which code correctly stores a Boolean value in a variable?",
        options: [
            'let isOnline = "true";',
            "let isOnline = true;",
            'let isOnline = "online";',
            "let isOnline = 1;",
        ],
        correctAnswer: 1,
        explanation:
            "let isOnline = true; correctly stores the Boolean value true in the variable isOnline.",
        faQuestion:
            "کدام کد یک مقدار Boolean را به‌درستی در یک متغیر ذخیره می‌کند؟",
        faOptions: [
            'let isOnline = "true";',
            "let isOnline = true;",
            'let isOnline = "online";',
            "let isOnline = 1;",
        ],
        faExplanation:
            "کد let isOnline = true; مقدار Boolean یعنی true را به‌درستی در متغیر isOnline ذخیره می‌کند.",
    },

    {
        id: 35,
        lessonId: 4,
        difficulty: "medium",
        question: "What is stored in the variable isLoggedIn?\n\nconst isLoggedIn = false;",
        options: [
            "The String false",
            "The Boolean true",
            "The Boolean false",
            "The value null",
        ],
        correctAnswer: 2,
        explanation:
            "isLoggedIn stores the Boolean value false because false is not surrounded by quotation marks.",
        faQuestion:
            "چه مقداری در متغیر isLoggedIn ذخیره شده است؟\n\nconst isLoggedIn = false;",
        faOptions: [
            "رشته false",
            "مقدار Boolean یعنی true",
            "مقدار Boolean یعنی false",
            "مقدار null",
        ],
        faExplanation:
            "متغیر isLoggedIn مقدار Boolean یعنی false را ذخیره کرده است زیرا false داخل علامت نقل‌قول قرار ندارد.",
    },

    {
        id: 36,
        lessonId: 4,
        difficulty: "medium",
        question: 'Which statement correctly compares true and "true"?',
        options: [
            'Both are Boolean values',
            'Both are Strings',
            'true is a Boolean and "true" is a String',
            'true is a String and "true" is a Boolean',
        ],
        correctAnswer: 2,
        explanation:
            'true is a Boolean, while "true" is a String because it is surrounded by quotation marks.',
        faQuestion:
            'کدام جمله تفاوت true و "true" را به‌درستی بیان می‌کند؟',
        faOptions: [
            "هر دو مقدار Boolean هستند",
            "هر دو String هستند",
            'true یک Boolean است و "true" یک String است',
            'true یک String است و "true" یک Boolean است',
        ],
        faExplanation:
            'true یک Boolean است، در حالی که "true" به دلیل قرار گرفتن داخل علامت نقل‌قول یک String است.',
    },

    {
        id: 37,
        lessonId: 4,
        difficulty: "medium",
        question: "Which keyword is the better choice for a Boolean value that will not be reassigned?",
        options: [
            "let",
            "var",
            "const",
            "boolean",
        ],
        correctAnswer: 2,
        explanation:
            "const is the better choice when the Boolean value does not need to be reassigned.",
        faQuestion:
            "برای یک مقدار Boolean که قرار نیست دوباره مقداردهی شود، کدام کلمه کلیدی انتخاب بهتری است؟",
        faOptions: [
            "let",
            "var",
            "const",
            "boolean",
        ],
        faExplanation:
            "وقتی مقدار Boolean قرار نیست دوباره مقداردهی شود، const انتخاب بهتری است.",
    },

    {
        id: 38,
        lessonId: 4,
        difficulty: "medium",
        question: "What is the value of isPlaying after this code runs?\n\nlet isPlaying = false;\nisPlaying = true;",
        options: [
            "false",
            "true",
            '"true"',
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "isPlaying starts as false and is then reassigned to true, so its final value is true.",
        faQuestion:
            "بعد از اجرای کد زیر مقدار isPlaying چیست؟\n\nlet isPlaying = false;\nisPlaying = true;",
        faOptions: [
            "false",
            "true",
            '"true"',
            "undefined",
        ],
        faExplanation:
            "isPlaying ابتدا مقدار false دارد و سپس دوباره به true مقداردهی می‌شود، بنابراین مقدار نهایی آن true است.",
    },

    {
        id: 39,
        lessonId: 4,
        difficulty: "hard",
        question: "Which declaration is the best choice for an admin status that will not change?\n\nThe user is an admin.",
        options: [
            "let isAdmin = true;",
            'const isAdmin = "true";',
            "const isAdmin = true;",
            "let isAdmin = false;",
        ],
        correctAnswer: 2,
        explanation:
            "The value should remain true and does not need to be reassigned, so const with the Boolean value true is the appropriate choice.",
        faQuestion:
            "برای وضعیت مدیر بودن کاربر که قرار نیست تغییر کند، کدام تعریف انتخاب بهتری است؟\n\nکاربر مدیر است.",
        faOptions: [
            "let isAdmin = true;",
            'const isAdmin = "true";',
            "const isAdmin = true;",
            "let isAdmin = false;",
        ],
        faExplanation:
            "چون مقدار باید true باشد و قرار نیست دوباره مقداردهی شود، استفاده از const همراه با مقدار Boolean یعنی true انتخاب مناسبی است.",
    },

    {
        id: 40,
        lessonId: 4,
        difficulty: "hard",
        question: "What are the data types of these three values?\n\ntrue, \"false\", false",
        options: [
            "Boolean, String, Boolean",
            "String, Boolean, Boolean",
            "Boolean, Boolean, String",
            "String, String, Boolean",
        ],
        correctAnswer: 0,
        explanation:
            'true and false are Boolean values, while "false" is a String because it is surrounded by quotation marks.',
        faQuestion:
            'نوع داده این سه مقدار چیست؟\n\ntrue، "false"، false',
        faOptions: [
            "Boolean، String، Boolean",
            "String، Boolean، Boolean",
            "Boolean، Boolean، String",
            "String، String، Boolean",
        ],
        faExplanation:
            'true و false از نوع Boolean هستند، در حالی که "false" به دلیل قرار گرفتن داخل علامت نقل‌قول از نوع String است.',
    },

    {
        id: 41,
        lessonId: 5,
        difficulty: "easy",
        question: "What does undefined usually mean in JavaScript?",
        options: [
            "A value has not been assigned",
            "The value is always zero",
            "The value is an empty String",
            "The value is false",
        ],
        correctAnswer: 0,
        explanation:
            "undefined usually means that a variable exists but a value has not been assigned to it.",
        faQuestion:
            "undefined در JavaScript معمولاً به چه معناست؟",
        faOptions: [
            "هنوز مقداری به متغیر اختصاص داده نشده است",
            "مقدار همیشه صفر است",
            "مقدار یک String خالی است",
            "مقدار false است",
        ],
        faExplanation:
            "undefined معمولاً یعنی متغیر وجود دارد اما هنوز مقداری به آن اختصاص داده نشده است.",
    },

    {
        id: 42,
        lessonId: 5,
        difficulty: "easy",
        question: "What is the value of age after this code runs?\n\nlet age;",
        options: [
            "null",
            "0",
            "undefined",
            "false",
        ],
        correctAnswer: 2,
        explanation:
            "The variable age is declared but no value is assigned to it, so its value is undefined.",
        faQuestion:
            "بعد از اجرای کد زیر مقدار age چیست؟\n\nlet age;",
        faOptions: [
            "null",
            "0",
            "undefined",
            "false",
        ],
        faExplanation:
            "متغیر age تعریف شده است اما مقداری به آن اختصاص داده نشده، بنابراین مقدار آن undefined است.",
    },

    {
        id: 43,
        lessonId: 5,
        difficulty: "easy",
        question: "What does null intentionally represent in JavaScript?",
        options: [
            "A missing or empty value",
            "The number zero",
            "The Boolean false",
            "An empty String",
        ],
        correctAnswer: 0,
        explanation:
            "null is an intentional value used to represent the absence of a value.",
        faQuestion:
            "مقدار null در JavaScript به‌صورت عمدی چه چیزی را نشان می‌دهد؟",
        faOptions: [
            "نبودن یا خالی بودن یک مقدار",
            "عدد صفر",
            "مقدار Boolean یعنی false",
            "یک String خالی",
        ],
        faExplanation:
            "null یک مقدار عمدی است که برای نشان دادن نبودن یک مقدار استفاده می‌شود.",
    },

    {
        id: 44,
        lessonId: 5,
        difficulty: "easy",
        question: "Which value is an empty String?",
        options: [
            '""',
            "null",
            "undefined",
            "0",
        ],
        correctAnswer: 0,
        explanation:
            '"" is an empty String because it contains no text but is still a String value.',
        faQuestion:
            "کدام مقدار یک String خالی است؟",
        faOptions: [
            '""',
            "null",
            "undefined",
            "0",
        ],
        faExplanation:
            'مقدار "" یک String خالی است زیرا هیچ متنی در آن وجود ندارد اما همچنان از نوع String است.',
    },

    {
        id: 45,
        lessonId: 5,
        difficulty: "medium",
        question: "What is the difference between undefined and null?",
        options: [
            "undefined means a value has not been assigned, while null is intentional",
            "undefined is always a Number, while null is always a String",
            "undefined means zero, while null means false",
            "There is no difference between them",
        ],
        correctAnswer: 0,
        explanation:
            "undefined usually means no value has been assigned, while null is intentionally used to represent the absence of a value.",
        faQuestion:
            "تفاوت بین undefined و null چیست؟",
        faOptions: [
            "undefined یعنی مقداری اختصاص داده نشده، اما null به‌صورت عمدی استفاده می‌شود",
            "undefined همیشه Number است، اما null همیشه String است",
            "undefined یعنی صفر، اما null یعنی false",
            "هیچ تفاوتی بین آن‌ها وجود ندارد",
        ],
        faExplanation:
            "undefined معمولاً یعنی مقداری اختصاص داده نشده است، در حالی که null به‌صورت عمدی برای نشان دادن نبودن مقدار استفاده می‌شود.",
    },

    {
        id: 46,
        lessonId: 5,
        difficulty: "medium",
        question: 'What is stored in username?\n\nlet username = undefined;',
        options: [
            "null",
            "undefined",
            '""',
            '"undefined"',
        ],
        correctAnswer: 1,
        explanation:
            "The variable username is explicitly assigned the special value undefined.",
        faQuestion:
            "چه مقداری در username ذخیره شده است؟\n\nlet username = undefined;",
        faOptions: [
            "null",
            "undefined",
            '""',
            '"undefined"',
        ],
        faExplanation:
            "مقدار ویژه undefined به‌صورت مستقیم به متغیر username اختصاص داده شده است.",
    },

    {
        id: 47,
        lessonId: 5,
        difficulty: "medium",
        question: "What is stored in selectedUser?\n\nlet selectedUser = null;",
        options: [
            "undefined",
            "0",
            "null",
            '""',
        ],
        correctAnswer: 2,
        explanation:
            "selectedUser intentionally stores null, which represents that there is currently no selected value.",
        faQuestion:
            "چه مقداری در selectedUser ذخیره شده است؟\n\nlet selectedUser = null;",
        faOptions: [
            "undefined",
            "0",
            "null",
            '""',
        ],
        faExplanation:
            "متغیر selectedUser به‌صورت عمدی مقدار null را ذخیره می‌کند که نشان‌دهنده نبودن مقدار انتخاب‌شده است.",
    },

    {
        id: 48,
        lessonId: 5,
        difficulty: "medium",
        question: "Which statement correctly describes 0?",
        options: [
            "It is a missing value",
            "It is an empty String",
            "It is a Number with the value zero",
            "It is the same as null",
        ],
        correctAnswer: 2,
        explanation:
            "0 is a Number whose value is zero. It does not mean that a value is missing.",
        faQuestion:
            "کدام جمله درباره 0 صحیح است؟",
        faOptions: [
            "این یک مقدار ناموجود است",
            "این یک String خالی است",
            "این یک Number با مقدار صفر است",
            "این با null یکسان است",
        ],
        faExplanation:
            "مقدار 0 یک Number با مقدار صفر است و به معنی نبودن یک مقدار نیست.",
    },

    {
        id: 49,
        lessonId: 5,
        difficulty: "hard",
        question: "What are the values stored in these variables?\n\nlet a;\nlet b = null;\nlet c = \"\";\nlet d = 0;",
        options: [
            "undefined, null, empty String, Number zero",
            "null, undefined, empty String, Number zero",
            "undefined, null, Number zero, empty String",
            "empty String, null, undefined, Number zero",
        ],
        correctAnswer: 0,
        explanation:
            "a is undefined because no value is assigned, b is null intentionally, c is an empty String, and d is the Number 0.",
        faQuestion:
            "مقدار ذخیره‌شده در این متغیرها چیست؟\n\nlet a;\nlet b = null;\nlet c = \"\";\nlet d = 0;",
        faOptions: [
            "undefined، null، String خالی، Number صفر",
            "null، undefined، String خالی، Number صفر",
            "undefined، null، Number صفر، String خالی",
            "String خالی، null، undefined، Number صفر",
        ],
        faExplanation:
            "متغیر a به دلیل نداشتن مقدار undefined است، b به‌صورت عمدی null است، c یک String خالی است و d مقدار Number برابر 0 دارد.",
    },

    {
        id: 50,
        lessonId: 5,
        difficulty: "hard",
        question: "Which code correctly represents the idea that there is currently no selected user?",
        options: [
            'let selectedUser = "";',
            "let selectedUser = 0;",
            "let selectedUser = undefined;",
            "let selectedUser = null;",
        ],
        correctAnswer: 3,
        explanation:
            "null is intentionally used to represent that there is currently no selected value.",
        faQuestion:
            "کدام کد به‌درستی نشان می‌دهد که در حال حاضر هیچ کاربری انتخاب نشده است؟",
        faOptions: [
            'let selectedUser = "";',
            "let selectedUser = 0;",
            "let selectedUser = undefined;",
            "let selectedUser = null;",
        ],
        faExplanation:
            "از null به‌صورت عمدی برای نشان دادن این موضوع استفاده می‌شود که در حال حاضر هیچ مقداری برای کاربر انتخاب‌شده وجود ندارد.",
    },

    {
        id: 51,
        lessonId: 6,
        difficulty: "easy",
        question: "What does type conversion mean in JavaScript?",
        options: [
            "Changing a value from one data type to another",
            "Deleting a value from a variable",
            "Changing a variable's name",
            "Running a function automatically",
        ],
        correctAnswer: 0,
        explanation:
            "Type conversion means changing a value from one data type to another, such as converting a String to a Number.",
        faQuestion:
            "تبدیل نوع داده در JavaScript به چه معناست؟",
        faOptions: [
            "تغییر یک مقدار از یک نوع داده به نوع داده دیگر",
            "حذف یک مقدار از یک متغیر",
            "تغییر نام یک متغیر",
            "اجرای خودکار یک تابع",
        ],
        faExplanation:
            "تبدیل نوع داده یعنی تغییر یک مقدار از یک نوع داده به نوع داده دیگر، مانند تبدیل یک String به Number.",
    },

    {
        id: 52,
        lessonId: 6,
        difficulty: "easy",
        question: 'What is the data type of age before any conversion?\n\nconst age = "25";',
        options: [
            "Number",
            "Boolean",
            "String",
            "Null",
        ],
        correctAnswer: 2,
        explanation:
            'The value "25" is a String because it is surrounded by quotation marks.',
        faQuestion:
            "قبل از هرگونه تبدیل، نوع داده age چیست؟\n\nconst age = \"25\";",
        faOptions: [
            "Number",
            "Boolean",
            "String",
            "Null",
        ],
        faExplanation:
            'مقدار "25" یک String است زیرا داخل علامت نقل‌قول قرار دارد.',
    },

    {
        id: 53,
        lessonId: 6,
        difficulty: "easy",
        question: 'Which function converts a String into a Number?\n\nconst age = "25";',
        options: [
            "String(age)",
            "Boolean(age)",
            "Number(age)",
            "Convert(age)",
        ],
        correctAnswer: 2,
        explanation:
            "Number() converts a value such as the String \"25\" into the Number 25.",
        faQuestion:
            "کدام تابع یک String را به Number تبدیل می‌کند؟\n\nconst age = \"25\";",
        faOptions: [
            "String(age)",
            "Boolean(age)",
            "Number(age)",
            "Convert(age)",
        ],
        faExplanation:
            "تابع Number() مقداری مانند String یعنی \"25\" را به Number یعنی 25 تبدیل می‌کند.",
    },

    {
        id: 54,
        lessonId: 6,
        difficulty: "easy",
        question: "Which function converts a Number into a String?",
        options: [
            "Number()",
            "Boolean()",
            "String()",
            "Text()",
        ],
        correctAnswer: 2,
        explanation:
            "String() converts a value such as the Number 100 into a String.",
        faQuestion:
            "کدام تابع یک Number را به String تبدیل می‌کند؟",
        faOptions: [
            "Number()",
            "Boolean()",
            "String()",
            "Text()",
        ],
        faExplanation:
            "تابع String() مقداری مانند Number یعنی 100 را به String تبدیل می‌کند.",
    },

    {
        id: 55,
        lessonId: 6,
        difficulty: "medium",
        question: "What is the value of numberAge after this code runs?\n\nconst age = \"25\";\nconst numberAge = Number(age);",
        options: [
            '"25"',
            "25",
            "true",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            'Number(age) converts the String "25" into the Number 25, which is stored in numberAge.',
        faQuestion:
            "بعد از اجرای کد زیر مقدار numberAge چیست؟\n\nconst age = \"25\";\nconst numberAge = Number(age);",
        faOptions: [
            '"25"',
            "25",
            "true",
            "undefined",
        ],
        faExplanation:
            'تابع Number(age) مقدار String یعنی "25" را به Number یعنی 25 تبدیل می‌کند و آن را در numberAge ذخیره می‌کند.',
    },

    {
        id: 56,
        lessonId: 6,
        difficulty: "medium",
        question: "What does Boolean(1) return?",
        options: [
            "false",
            "1",
            "true",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The value 1 converts to true when passed to Boolean().",
        faQuestion:
            "نتیجه Boolean(1) چیست؟",
        faOptions: [
            "false",
            "1",
            "true",
            "undefined",
        ],
        faExplanation:
            "مقدار 1 هنگام استفاده از Boolean() به true تبدیل می‌شود.",
    },

    {
        id: 57,
        lessonId: 6,
        difficulty: "medium",
        question: 'Which value becomes false when passed to Boolean()?',
        options: [
            '"hello"',
            "1",
            "0",
            "25",
        ],
        correctAnswer: 2,
        explanation:
            "The Number 0 converts to false when passed to Boolean().",
        faQuestion:
            "کدام مقدار هنگام استفاده از Boolean() به false تبدیل می‌شود؟",
        faOptions: [
            '"hello"',
            "1",
            "0",
            "25",
        ],
        faExplanation:
            "عدد 0 هنگام استفاده از Boolean() به false تبدیل می‌شود.",
    },

    {
        id: 58,
        lessonId: 6,
        difficulty: "medium",
        question: "What is the value of age after this code runs?\n\nlet age = \"25\";\nNumber(age);",
        options: [
            "25",
            '"25"',
            "true",
            "null",
        ],
        correctAnswer: 1,
        explanation:
            'Number(age) creates a converted Number, but the result is not assigned back to age, so age remains the String "25".',
        faQuestion:
            "بعد از اجرای کد زیر مقدار age چیست؟\n\nlet age = \"25\";\nNumber(age);",
        faOptions: [
            "25",
            '"25"',
            "true",
            "null",
        ],
        faExplanation:
            'تابع Number(age) یک مقدار Number ایجاد می‌کند، اما نتیجه دوباره در age ذخیره نشده است، بنابراین age همچنان String یعنی "25" است.',
    },

    {
        id: 59,
        lessonId: 6,
        difficulty: "hard",
        question: "What is the value of age after this code runs?\n\nlet age = \"25\";\nage = Number(age);",
        options: [
            '"25"',
            "true",
            "25",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            'Number(age) converts the String "25" into the Number 25, and the result is assigned back to age.',
        faQuestion:
            "بعد از اجرای کد زیر مقدار age چیست؟\n\nlet age = \"25\";\nage = Number(age);",
        faOptions: [
            '"25"',
            "true",
            "25",
            "undefined",
        ],
        faExplanation:
            'تابع Number(age) مقدار String یعنی "25" را به Number یعنی 25 تبدیل می‌کند و نتیجه دوباره در age ذخیره می‌شود.',
    },

    {
        id: 60,
        lessonId: 6,
        difficulty: "hard",
        question: 'What are the results of these conversions?\n\nNumber("25"), String(100), Boolean(0)',
        options: [
            '25, "100", true',
            '25, "100", false',
            '"25", 100, false',
            '25, 100, true',
        ],
        correctAnswer: 1,
        explanation:
            'Number("25") returns 25, String(100) returns "100", and Boolean(0) returns false.',
        faQuestion:
            'نتیجه این تبدیل‌ها چیست؟\n\nNumber("25")، String(100)، Boolean(0)',
        faOptions: [
            '25، "100"، true',
            '25، "100"، false',
            '"25"، 100، false',
            '25، 100، true',
        ],
        faExplanation:
            'Number("25") مقدار 25، String(100) مقدار "100" و Boolean(0) مقدار false را برمی‌گردانند.',
    },

    {
        id: 61,
        lessonId: 7,
        difficulty: "easy",
        question: "Which operator is used for addition in JavaScript?",
        options: [
            "+",
            "-",
            "*",
            "/",
        ],
        correctAnswer: 0,
        explanation:
            "The + operator is used to add numbers together.",
        faQuestion:
            "کدام عملگر برای جمع کردن در JavaScript استفاده می‌شود؟",
        faOptions: [
            "+",
            "-",
            "*",
            "/",
        ],
        faExplanation:
            "عملگر + برای جمع کردن اعداد با یکدیگر استفاده می‌شود.",
    },
    {
        id: 62,
        lessonId: 7,
        difficulty: "easy",
        question: "What is the result of 15 - 6?",
        options: [
            "21",
            "9",
            "8",
            "11",
        ],
        correctAnswer: 1,
        explanation:
            "15 - 6 equals 9.",
        faQuestion:
            "نتیجه عبارت 15 - 6 چیست؟",
        faOptions: [
            "21",
            "9",
            "8",
            "11",
        ],
        faExplanation:
            "نتیجه تفریق 15 از 6 برابر با 9 است.",
    },
    {
        id: 63,
        lessonId: 7,
        difficulty: "easy",
        question: "What is the result of 7 * 4?",
        options: [
            "28",
            "24",
            "11",
            "32",
        ],
        correctAnswer: 0,
        explanation:
            "The * operator performs multiplication, so 7 * 4 equals 28.",
        faQuestion:
            "نتیجه عبارت 7 * 4 چیست؟",
        faOptions: [
            "28",
            "24",
            "11",
            "32",
        ],
        faExplanation:
            "عملگر * برای ضرب استفاده می‌شود، بنابراین 7 ضربدر 4 برابر با 28 است.",
    },
    {
        id: 64,
        lessonId: 7,
        difficulty: "easy",
        question: "What is the result of 20 / 5?",
        options: [
            "4",
            "5",
            "15",
            "25",
        ],
        correctAnswer: 0,
        explanation:
            "The / operator performs division, and 20 divided by 5 equals 4.",
        faQuestion:
            "نتیجه عبارت 20 / 5 چیست؟",
        faOptions: [
            "4",
            "5",
            "15",
            "25",
        ],
        faExplanation:
            "عملگر / برای تقسیم استفاده می‌شود و 20 تقسیم بر 5 برابر با 4 است.",
    },
    {
        id: 65,
        lessonId: 7,
        difficulty: "medium",
        question: "What is the result of 17 % 5?",
        options: [
            "2",
            "3",
            "5",
            "12",
        ],
        correctAnswer: 0,
        explanation:
            "The % operator returns the remainder after division. 17 divided by 5 leaves a remainder of 2.",
        faQuestion:
            "نتیجه عبارت 17 % 5 چیست؟",
        faOptions: [
            "2",
            "3",
            "5",
            "12",
        ],
        faExplanation:
            "عملگر % باقی‌مانده تقسیم را برمی‌گرداند. با تقسیم 17 بر 5، باقی‌مانده برابر با 2 است.",
    },
    {
        id: 66,
        lessonId: 7,
        difficulty: "medium",
        question: "What is the value of total after this code runs?\n\nconst price = 20;\nconst quantity = 3;\nconst total = price * quantity;",
        options: [
            "23",
            "60",
            "17",
            "40",
        ],
        correctAnswer: 1,
        explanation:
            "The * operator multiplies price by quantity, so 20 * 3 equals 60.",
        faQuestion:
            "بعد از اجرای این کد، مقدار total چیست؟\n\nconst price = 20;\nconst quantity = 3;\nconst total = price * quantity;",
        faOptions: [
            "23",
            "60",
            "17",
            "40",
        ],
        faExplanation:
            "عملگر * مقدار price را در quantity ضرب می‌کند، بنابراین 20 ضربدر 3 برابر با 60 است.",
    },
    {
        id: 67,
        lessonId: 7,
        difficulty: "medium",
        question: "What is the result of 10 + 5 * 2?",
        options: [
            "30",
            "25",
            "20",
            "15",
        ],
        correctAnswer: 2,
        explanation:
            "Multiplication is performed before addition, so 5 * 2 equals 10, and 10 + 10 equals 20.",
        faQuestion:
            "نتیجه عبارت 10 + 5 * 2 چیست؟",
        faOptions: [
            "30",
            "25",
            "20",
            "15",
        ],
        faExplanation:
            "ضرب قبل از جمع انجام می‌شود، بنابراین 5 ضربدر 2 برابر 10 است و سپس 10 به آن اضافه می‌شود که نتیجه 20 است.",
    },
    {
        id: 68,
        lessonId: 7,
        difficulty: "medium",
        question: "What is the result of (10 + 5) * 2?",
        options: [
            "20",
            "25",
            "30",
            "15",
        ],
        correctAnswer: 2,
        explanation:
            "The parentheses are evaluated first, so 10 + 5 equals 15, and 15 * 2 equals 30.",
        faQuestion:
            "نتیجه عبارت (10 + 5) * 2 چیست؟",
        faOptions: [
            "20",
            "25",
            "30",
            "15",
        ],
        faExplanation:
            "ابتدا عبارت داخل پرانتز محاسبه می‌شود، بنابراین 10 به اضافه 5 برابر 15 است و 15 ضربدر 2 برابر با 30 می‌شود.",
    },
    {
        id: 69,
        lessonId: 7,
        difficulty: "hard",
        question: "What is the result of this code?\n\nconst a = 10;\nconst b = 3;\nconst result = a + b * 2;",
        options: [
            "26",
            "16",
            "23",
            "20",
        ],
        correctAnswer: 1,
        explanation:
            "Multiplication is performed first: 3 * 2 equals 6, then 10 + 6 equals 16.",
        faQuestion:
            "نتیجه این کد چیست؟\n\nconst a = 10;\nconst b = 3;\nconst result = a + b * 2;",
        faOptions: [
            "26",
            "16",
            "23",
            "20",
        ],
        faExplanation:
            "ابتدا ضرب انجام می‌شود؛ 3 ضربدر 2 برابر 6 است و سپس 6 با 10 جمع می‌شود که نتیجه 16 است.",
    },
    {
        id: 70,
        lessonId: 7,
        difficulty: "hard",
        question: "What is the result of this expression?\n\n20 - 4 * 3 + 2",
        options: [
            "50",
            "10",
            "6",
            "18",
        ],
        correctAnswer: 1,
        explanation:
            "Multiplication is performed first: 4 * 3 equals 12. Then 20 - 12 + 2 is evaluated from left to right, giving 10.",
        faQuestion:
            "نتیجه این عبارت چیست؟\n\n20 - 4 * 3 + 2",
        faOptions: [
            "50",
            "10",
            "6",
            "18",
        ],
        faExplanation:
            "ابتدا ضرب انجام می‌شود؛ 4 ضربدر 3 برابر 12 است. سپس 20 منهای 12 به اضافه 2 از چپ به راست محاسبه می‌شود و نتیجه 10 است.",
    },

    {
        id: 71,
        lessonId: 8,
        difficulty: "easy",
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "=",
            "+=",
            "==",
            "===",
        ],
        correctAnswer: 0,
        explanation:
            "The = operator assigns a value to a variable.",
        faQuestion:
            "کدام عملگر برای اختصاص دادن یک مقدار به متغیر استفاده می‌شود؟",
        faOptions: [
            "=",
            "+=",
            "==",
            "===",
        ],
        faExplanation:
            "عملگر = برای اختصاص دادن یک مقدار به متغیر استفاده می‌شود.",
    },
    {
        id: 72,
        lessonId: 8,
        difficulty: "easy",
        question: "What is the value of score after this code runs?\n\nlet score = 10;\nscore = 20;",
        options: [
            "10",
            "20",
            "30",
            "0",
        ],
        correctAnswer: 1,
        explanation:
            "The second assignment replaces the previous value, so score becomes 20.",
        faQuestion:
            "بعد از اجرای این کد، مقدار score چیست؟\n\nlet score = 10;\nscore = 20;",
        faOptions: [
            "10",
            "20",
            "30",
            "0",
        ],
        faExplanation:
            "در خط دوم مقدار قبلی جایگزین می‌شود، بنابراین مقدار score برابر با 20 می‌شود.",
    },
    {
        id: 73,
        lessonId: 8,
        difficulty: "easy",
        question: "What does the += operator do?",
        options: [
            "Subtracts and assigns",
            "Adds and assigns",
            "Multiplies and assigns",
            "Divides and assigns",
        ],
        correctAnswer: 1,
        explanation:
            "The += operator adds a value to the current value and assigns the result back to the variable.",
        faQuestion:
            "عملگر += چه کاری انجام می‌دهد؟",
        faOptions: [
            "تفریق و انتساب",
            "جمع و انتساب",
            "ضرب و انتساب",
            "تقسیم و انتساب",
        ],
        correctAnswer: 1,
        faExplanation:
            "عملگر += یک مقدار را به مقدار فعلی متغیر اضافه می‌کند و نتیجه را دوباره به همان متغیر اختصاص می‌دهد.",
    },
    {
        id: 74,
        lessonId: 8,
        difficulty: "easy",
        question: "What is the value of score after this code runs?\n\nlet score = 10;\nscore += 5;",
        options: [
            "5",
            "10",
            "15",
            "50",
        ],
        correctAnswer: 2,
        explanation:
            "The += operator adds 5 to the current value: 10 + 5 equals 15.",
        faQuestion:
            "بعد از اجرای این کد، مقدار score چیست؟\n\nlet score = 10;\nscore += 5;",
        faOptions: [
            "5",
            "10",
            "15",
            "50",
        ],
        faExplanation:
            "عملگر += مقدار 5 را به مقدار فعلی اضافه می‌کند؛ 10 به اضافه 5 برابر با 15 است.",
    },
    {
        id: 75,
        lessonId: 8,
        difficulty: "medium",
        question: "What is the value of score after this code runs?\n\nlet score = 20;\nscore -= 7;",
        options: [
            "27",
            "14",
            "13",
            "7",
        ],
        correctAnswer: 2,
        explanation:
            "The -= operator subtracts 7 from the current value: 20 - 7 equals 13.",
        faQuestion:
            "بعد از اجرای این کد، مقدار score چیست؟\n\nlet score = 20;\nscore -= 7;",
        faOptions: [
            "27",
            "14",
            "13",
            "7",
        ],
        faExplanation:
            "عملگر -= مقدار 7 را از مقدار فعلی کم می‌کند؛ 20 منهای 7 برابر با 13 است.",
    },
    {
        id: 76,
        lessonId: 8,
        difficulty: "medium",
        question: "What is the value of number after this code runs?\n\nlet number = 6;\nnumber *= 4;",
        options: [
            "10",
            "24",
            "18",
            "2",
        ],
        correctAnswer: 1,
        explanation:
            "The *= operator multiplies the current value by 4: 6 * 4 equals 24.",
        faQuestion:
            "بعد از اجرای این کد، مقدار number چیست؟\n\nlet number = 6;\nnumber *= 4;",
        faOptions: [
            "10",
            "24",
            "18",
            "2",
        ],
        faExplanation:
            "عملگر *= مقدار فعلی را در 4 ضرب می‌کند؛ 6 ضربدر 4 برابر با 24 است.",
    },
    {
        id: 77,
        lessonId: 8,
        difficulty: "medium",
        question: "What is the value of number after this code runs?\n\nlet number = 20;\nnumber /= 5;",
        options: [
            "100",
            "25",
            "15",
            "4",
        ],
        correctAnswer: 3,
        explanation:
            "The /= operator divides the current value by 5: 20 / 5 equals 4.",
        faQuestion:
            "بعد از اجرای این کد، مقدار number چیست؟\n\nlet number = 20;\nnumber /= 5;",
        faOptions: [
            "100",
            "25",
            "15",
            "4",
        ],
        faExplanation:
            "عملگر /= مقدار فعلی را بر 5 تقسیم می‌کند؛ 20 تقسیم بر 5 برابر با 4 است.",
    },
    {
        id: 78,
        lessonId: 8,
        difficulty: "medium",
        question: "What is the value of number after this code runs?\n\nlet number = 17;\nnumber %= 5;",
        options: [
            "3",
            "2",
            "5",
            "12",
        ],
        correctAnswer: 1,
        explanation:
            "The %= operator calculates the remainder and assigns it back. 17 % 5 equals 2.",
        faQuestion:
            "بعد از اجرای این کد، مقدار number چیست؟\n\nlet number = 17;\nnumber %= 5;",
        faOptions: [
            "3",
            "2",
            "5",
            "12",
        ],
        faExplanation:
            "عملگر %= باقی‌مانده را محاسبه کرده و دوباره به متغیر اختصاص می‌دهد. باقی‌مانده 17 تقسیم بر 5 برابر با 2 است.",
    },
    {
        id: 79,
        lessonId: 8,
        difficulty: "hard",
        question: "What is the value of points after this code runs?\n\nlet points = 100;\npoints += 10;\npoints -= 20;",
        options: [
            "80",
            "90",
            "110",
            "130",
        ],
        correctAnswer: 1,
        explanation:
            "points first becomes 110 after += 10, then becomes 90 after -= 20.",
        faQuestion:
            "بعد از اجرای این کد، مقدار points چیست؟\n\nlet points = 100;\npoints += 10;\npoints -= 20;",
        faOptions: [
            "80",
            "90",
            "110",
            "130",
        ],
        faExplanation:
            "ابتدا مقدار points با += 10 از 100 به 110 می‌رسد و سپس با -= 20 به 90 تغییر می‌کند.",
    },
    {
        id: 80,
        lessonId: 8,
        difficulty: "hard",
        question: "Which statement correctly updates a variable named score by adding 5 to its current value?",
        options: [
            "score = 5",
            "score += 5",
            "score *= 5",
            "score -= 5",
        ],
        correctAnswer: 1,
        explanation:
            "The += operator adds 5 to the current value of score and assigns the new result back to score.",
        faQuestion:
            "کدام دستور مقدار متغیری به نام score را به‌درستی 5 واحد افزایش می‌دهد؟",
        faOptions: [
            "score = 5",
            "score += 5",
            "score *= 5",
            "score -= 5",
        ],
        correctAnswer: 1,
        faExplanation:
            "عملگر += مقدار 5 را به مقدار فعلی score اضافه کرده و نتیجه جدید را دوباره به score اختصاص می‌دهد.",
    },

    {
        id: 81,
        lessonId: 9,
        difficulty: "easy",
        question: "What type of value does a comparison operator return?",
        options: [
            "Boolean",
            "String",
            "Number",
            "Object",
        ],
        correctAnswer: 0,
        explanation:
            "Comparison operators return a Boolean value: true or false.",
        faQuestion:
            "عملگرهای مقایسه‌ای چه نوع مقداری را برمی‌گردانند؟",
        faOptions: [
            "Boolean",
            "String",
            "Number",
            "Object",
        ],
        faExplanation:
            "عملگرهای مقایسه‌ای یک مقدار Boolean یعنی true یا false برمی‌گردانند.",
    },
    {
        id: 82,
        lessonId: 9,
        difficulty: "easy",
        question: "What is the result of 10 > 5?",
        options: [
            "false",
            "10",
            "true",
            "5",
        ],
        correctAnswer: 2,
        explanation:
            "10 is greater than 5, so the comparison returns true.",
        faQuestion:
            "نتیجه عبارت 10 > 5 چیست؟",
        faOptions: [
            "false",
            "10",
            "true",
            "5",
        ],
        faExplanation:
            "عدد 10 بزرگ‌تر از 5 است، بنابراین نتیجه مقایسه true است.",
    },
    {
        id: 83,
        lessonId: 9,
        difficulty: "easy",
        question: "Which operator checks whether the value on the left is less than the value on the right?",
        options: [
            ">",
            "<",
            ">=",
            "<=",
        ],
        correctAnswer: 1,
        explanation:
            "The < operator checks whether the left value is less than the right value.",
        faQuestion:
            "کدام عملگر بررسی می‌کند که مقدار سمت چپ کوچک‌تر از مقدار سمت راست باشد؟",
        faOptions: [
            ">",
            "<",
            ">=",
            "<=",
        ],
        faExplanation:
            "عملگر < بررسی می‌کند که آیا مقدار سمت چپ کوچک‌تر از مقدار سمت راست است یا خیر.",
    },
    {
        id: 84,
        lessonId: 9,
        difficulty: "easy",
        question: "What is the result of 10 >= 10?",
        options: [
            "false",
            "10",
            "true",
            "0",
        ],
        correctAnswer: 2,
        explanation:
            "The >= operator allows equality, and 10 is equal to 10, so the result is true.",
        faQuestion:
            "نتیجه عبارت 10 >= 10 چیست؟",
        faOptions: [
            "false",
            "10",
            "true",
            "0",
        ],
        faExplanation:
            "عملگر >= برابر بودن را نیز قبول می‌کند و چون 10 برابر با 10 است، نتیجه true می‌شود.",
    },
    {
        id: 85,
        lessonId: 9,
        difficulty: "medium",
        question: "What is the result of 10 === \"10\"?",
        options: [
            "true",
            "false",
            "\"10\"",
            "10",
        ],
        correctAnswer: 1,
        explanation:
            "The === operator checks both the value and the data type. One value is a Number and the other is a String, so the result is false.",
        faQuestion:
            "نتیجه عبارت 10 === \"10\" چیست؟",
        faOptions: [
            "true",
            "false",
            "\"10\"",
            "10",
        ],
        faExplanation:
            "عملگر === هم مقدار و هم نوع داده را بررسی می‌کند. یکی از مقدارها Number و دیگری String است، بنابراین نتیجه false است.",
    },
    {
        id: 86,
        lessonId: 9,
        difficulty: "medium",
        question: "What is the result of 15 !== 10?",
        options: [
            "false",
            "15",
            "10",
            "true",
        ],
        correctAnswer: 3,
        explanation:
            "The values 15 and 10 are different, so the !== comparison returns true.",
        faQuestion:
            "نتیجه عبارت 15 !== 10 چیست؟",
        faOptions: [
            "false",
            "15",
            "10",
            "true",
        ],
        faExplanation:
            "مقدارهای 15 و 10 با یکدیگر متفاوت هستند، بنابراین نتیجه عملگر !== برابر با true است.",
    },
    {
        id: 87,
        lessonId: 9,
        difficulty: "medium",
        question: "What is the result of this code?\n\nconst age = 20;\nage >= 18;",
        options: [
            "false",
            "20",
            "18",
            "true",
        ],
        correctAnswer: 3,
        explanation:
            "20 is greater than 18, so the comparison age >= 18 returns true.",
        faQuestion:
            "نتیجه این کد چیست؟\n\nconst age = 20;\nage >= 18;",
        faOptions: [
            "false",
            "20",
            "18",
            "true",
        ],
        faExplanation:
            "عدد 20 بزرگ‌تر از 18 است، بنابراین نتیجه مقایسه age >= 18 برابر با true است.",
    },
    {
        id: 88,
        lessonId: 9,
        difficulty: "medium",
        question: "Which statement correctly compares score with 100 without changing score?",
        options: [
            "score = 100",
            "score += 100",
            "score === 100",
            "score *= 100",
        ],
        correctAnswer: 2,
        explanation:
            "The === operator compares score with 100 without assigning a new value to score.",
        faQuestion:
            "کدام دستور score را بدون تغییر مقدار آن با 100 مقایسه می‌کند؟",
        faOptions: [
            "score = 100",
            "score += 100",
            "score === 100",
            "score *= 100",
        ],
        faExplanation:
            "عملگر === مقدار score را با 100 مقایسه می‌کند و مقدار score را تغییر نمی‌دهد.",
    },
    {
        id: 89,
        lessonId: 9,
        difficulty: "hard",
        question: "What is the result of this code?\n\nconst score = 80;\nscore > 50;",
        options: [
            "50",
            "false",
            "80",
            "true",
        ],
        correctAnswer: 3,
        explanation:
            "80 is greater than 50, so the comparison returns true.",
        faQuestion:
            "نتیجه این کد چیست؟\n\nconst score = 80;\nscore > 50;",
        faOptions: [
            "50",
            "false",
            "80",
            "true",
        ],
        faExplanation:
            "عدد 80 بزرگ‌تر از 50 است، بنابراین نتیجه مقایسه true است.",
    },
    {
        id: 90,
        lessonId: 9,
        difficulty: "hard",
        question: "Which comparison is true?",
        options: [
            "7 < 3",
            "10 === \"10\"",
            "5 >= 8",
            "12 !== 7",
        ],
        correctAnswer: 3,
        explanation:
            "12 and 7 are different values, so 12 !== 7 evaluates to true.",
        faQuestion:
            "کدام مقایسه نتیجه true دارد؟",
        faOptions: [
            "7 < 3",
            "10 === \"10\"",
            "5 >= 8",
            "12 !== 7",
        ],
        faExplanation:
            "مقدارهای 12 و 7 متفاوت هستند، بنابراین نتیجه مقایسه 12 !== 7 برابر با true است.",
    },

    {
        id: 91,
        lessonId: 10,
        difficulty: "easy",
        question: "Which logical operator means AND in JavaScript?",
        options: [
            "&&",
            "||",
            "!",
            "===",
        ],
        correctAnswer: 0,
        explanation:
            "The && operator means AND and requires both sides to be true.",
        faQuestion:
            "کدام عملگر منطقی در JavaScript به معنی AND یا «و» است؟",
        faOptions: [
            "&&",
            "||",
            "!",
            "===",
        ],
        faExplanation:
            "عملگر && به معنی AND است و برای true شدن به true بودن هر دو طرف نیاز دارد.",
    },
    {
        id: 92,
        lessonId: 10,
        difficulty: "easy",
        question: "What is the result of true && false?",
        options: [
            "true",
            "false",
            "null",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The && operator requires both sides to be true, but one side is false, so the result is false.",
        faQuestion:
            "نتیجه عبارت true && false چیست؟",
        faOptions: [
            "true",
            "false",
            "null",
            "undefined",
        ],
        faExplanation:
            "عملگر && به true بودن هر دو طرف نیاز دارد، اما یکی از طرفین false است، بنابراین نتیجه false می‌شود.",
    },
    {
        id: 93,
        lessonId: 10,
        difficulty: "easy",
        question: "What is the result of false || true?",
        options: [
            "false",
            "null",
            "true",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The || operator returns true when at least one side is true.",
        faQuestion:
            "نتیجه عبارت false || true چیست؟",
        faOptions: [
            "false",
            "null",
            "true",
            "undefined",
        ],
        faExplanation:
            "عملگر || زمانی true می‌شود که حداقل یکی از طرفین true باشد.",
    },
    {
        id: 94,
        lessonId: 10,
        difficulty: "easy",
        question: "What is the result of !true?",
        options: [
            "true",
            "false",
            "null",
            "1",
        ],
        correctAnswer: 1,
        explanation:
            "The ! operator reverses a Boolean value, so !true becomes false.",
        faQuestion:
            "نتیجه عبارت !true چیست؟",
        faOptions: [
            "true",
            "false",
            "null",
            "1",
        ],
        faExplanation:
            "عملگر ! مقدار Boolean را برعکس می‌کند، بنابراین !true برابر با false است.",
    },
    {
        id: 95,
        lessonId: 10,
        difficulty: "medium",
        question: "What is the result of true && true?",
        options: [
            "false",
            "undefined",
            "true",
            "null",
        ],
        correctAnswer: 2,
        explanation:
            "Both sides of && are true, so the complete expression evaluates to true.",
        faQuestion:
            "نتیجه عبارت true && true چیست؟",
        faOptions: [
            "false",
            "undefined",
            "true",
            "null",
        ],
        faExplanation:
            "هر دو طرف عملگر && مقدار true دارند، بنابراین نتیجه عبارت کامل true است.",
    },
    {
        id: 96,
        lessonId: 10,
        difficulty: "medium",
        question: "What is the result of false || false?",
        options: [
            "true",
            "false",
            "null",
            "1",
        ],
        correctAnswer: 1,
        explanation:
            "The || operator is false when both sides are false.",
        faQuestion:
            "نتیجه عبارت false || false چیست؟",
        faOptions: [
            "true",
            "false",
            "null",
            "1",
        ],
        faExplanation:
            "عملگر || فقط زمانی false می‌شود که هر دو طرف آن false باشند.",
    },
    {
        id: 97,
        lessonId: 10,
        difficulty: "medium",
        question: "What is the result of this expression?\n\nconst age = 20;\nage >= 18 && age <= 30;",
        options: [
            "false",
            "20",
            "30",
            "true",
        ],
        correctAnswer: 3,
        explanation:
            "Both comparisons are true: 20 is greater than or equal to 18 and less than or equal to 30. Therefore, && returns true.",
        faQuestion:
            "نتیجه این عبارت چیست؟\n\nconst age = 20;\nage >= 18 && age <= 30;",
        faOptions: [
            "false",
            "20",
            "30",
            "true",
        ],
        faExplanation:
            "هر دو مقایسه true هستند؛ 20 بزرگ‌تر یا مساوی 18 و کوچک‌تر یا مساوی 30 است، بنابراین نتیجه && برابر با true می‌شود.",
    },
    {
        id: 98,
        lessonId: 10,
        difficulty: "medium",
        question: "What is the result of this expression?\n\nconst isAdmin = false;\nconst isModerator = true;\nisAdmin || isModerator;",
        options: [
            "false",
            "undefined",
            "true",
            "null",
        ],
        correctAnswer: 2,
        explanation:
            "The || operator needs only one true value. isModerator is true, so the result is true.",
        faQuestion:
            "نتیجه این عبارت چیست؟\n\nconst isAdmin = false;\nconst isModerator = true;\nisAdmin || isModerator;",
        faOptions: [
            "false",
            "undefined",
            "true",
            "null",
        ],
        faExplanation:
            "عملگر || فقط به یک مقدار true نیاز دارد. مقدار isModerator برابر true است، بنابراین نتیجه true می‌شود.",
    },
    {
        id: 99,
        lessonId: 10,
        difficulty: "hard",
        question: "What is the result of this expression?\n\nconst isLoggedIn = true;\nconst isAdmin = false;\nconst isModerator = true;\nisLoggedIn && (isAdmin || isModerator);",
        options: [
            "false",
            "true",
            "undefined",
            "null",
        ],
        correctAnswer: 1,
        explanation:
            "Inside the parentheses, false || true produces true. Then true && true also produces true.",
        faQuestion:
            "نتیجه این عبارت چیست؟\n\nconst isLoggedIn = true;\nconst isAdmin = false;\nconst isModerator = true;\nisLoggedIn && (isAdmin || isModerator);",
        faOptions: [
            "false",
            "true",
            "undefined",
            "null",
        ],
        faExplanation:
            "ابتدا عبارت داخل پرانتز بررسی می‌شود و false || true نتیجه true دارد. سپس true && true نیز برابر با true می‌شود.",
    },
    {
        id: 100,
        lessonId: 10,
        difficulty: "hard",
        question: "Which expression evaluates to true?",
        options: [
            "true && false",
            "false || false",
            "!true",
            "true || false",
        ],
        correctAnswer: 3,
        explanation:
            "The || operator returns true when at least one side is true, so true || false evaluates to true.",
        faQuestion:
            "کدام عبارت نتیجه true دارد؟",
        faOptions: [
            "true && false",
            "false || false",
            "!true",
            "true || false",
        ],
        faExplanation:
            "عملگر || زمانی true می‌شود که حداقل یکی از طرفین true باشد، بنابراین true || false نتیجه true دارد.",
    },

    {
        id: 101,
        lessonId: 11,
        difficulty: "easy",
        question: "Which part of an arithmetic expression has the highest priority?",
        options: [
            "Addition",
            "Subtraction",
            "Parentheses",
            "Remainder",
        ],
        correctAnswer: 2,
        explanation:
            "Parentheses have the highest priority and are evaluated before the other arithmetic operators.",
        faQuestion:
            "کدام بخش از یک عبارت حسابی بالاترین اولویت را دارد؟",
        faOptions: [
            "جمع",
            "تفریق",
            "پرانتزها",
            "باقی‌مانده",
        ],
        faExplanation:
            "پرانتزها بالاترین اولویت را دارند و قبل از سایر عملگرهای حسابی محاسبه می‌شوند.",
    },
    {
        id: 102,
        lessonId: 11,
        difficulty: "easy",
        question: "What is the result of 10 + 5 * 2?",
        options: [
            "30",
            "20",
            "25",
            "15",
        ],
        correctAnswer: 1,
        explanation:
            "Multiplication is performed before addition, so 5 * 2 equals 10, and 10 + 10 equals 20.",
        faQuestion:
            "نتیجه عبارت 10 + 5 * 2 چیست؟",
        faOptions: [
            "30",
            "20",
            "25",
            "15",
        ],
        faExplanation:
            "ضرب قبل از جمع انجام می‌شود، بنابراین 5 ضربدر 2 برابر 10 است و سپس 10 به آن اضافه می‌شود که نتیجه 20 است.",
    },
    {
        id: 103,
        lessonId: 11,
        difficulty: "easy",
        question: "What is the result of (10 + 5) * 2?",
        options: [
            "30",
            "20",
            "25",
            "15",
        ],
        correctAnswer: 0,
        explanation:
            "The parentheses are evaluated first: 10 + 5 equals 15, then 15 * 2 equals 30.",
        faQuestion:
            "نتیجه عبارت (10 + 5) * 2 چیست؟",
        faOptions: [
            "30",
            "20",
            "25",
            "15",
        ],
        faExplanation:
            "ابتدا عبارت داخل پرانتز محاسبه می‌شود؛ 10 به اضافه 5 برابر 15 است و سپس 15 ضربدر 2 برابر 30 می‌شود.",
    },
    {
        id: 104,
        lessonId: 11,
        difficulty: "easy",
        question: "Which group of operators is evaluated before addition and subtraction?",
        options: [
            "Only subtraction",
            "Multiplication, division, and remainder",
            "Only addition",
            "Only parentheses",
        ],
        correctAnswer: 1,
        explanation:
            "Multiplication, division, and remainder have higher precedence than addition and subtraction.",
        faQuestion:
            "کدام گروه از عملگرها قبل از جمع و تفریق محاسبه می‌شوند؟",
        faOptions: [
            "فقط تفریق",
            "ضرب، تقسیم و باقی‌مانده",
            "فقط جمع",
            "فقط پرانتزها",
        ],
        faExplanation:
            "عملگرهای ضرب، تقسیم و باقی‌مانده اولویت بیشتری نسبت به جمع و تفریق دارند.",
    },
    {
        id: 105,
        lessonId: 11,
        difficulty: "medium",
        question: "What is the result of 20 - 5 + 3?",
        options: [
            "12",
            "18",
            "22",
            "8",
        ],
        correctAnswer: 1,
        explanation:
            "Addition and subtraction have the same precedence, so they are evaluated from left to right: 20 - 5 = 15, then 15 + 3 = 18.",
        faQuestion:
            "نتیجه عبارت 20 - 5 + 3 چیست؟",
        faOptions: [
            "12",
            "18",
            "22",
            "8",
        ],
        faExplanation:
            "جمع و تفریق اولویت یکسانی دارند، بنابراین از چپ به راست محاسبه می‌شوند؛ ابتدا 20 منهای 5 برابر 15 و سپس 15 به اضافه 3 برابر 18 است.",
    },
    {
        id: 106,
        lessonId: 11,
        difficulty: "medium",
        question: "What is the result of 20 / 5 * 2?",
        options: [
            "2",
            "8",
            "10",
            "20",
        ],
        correctAnswer: 1,
        explanation:
            "Division and multiplication have the same precedence, so they are evaluated from left to right: 20 / 5 = 4, then 4 * 2 = 8.",
        faQuestion:
            "نتیجه عبارت 20 / 5 * 2 چیست؟",
        faOptions: [
            "2",
            "8",
            "10",
            "20",
        ],
        faExplanation:
            "تقسیم و ضرب اولویت یکسانی دارند، بنابراین از چپ به راست محاسبه می‌شوند؛ ابتدا 20 تقسیم بر 5 برابر 4 و سپس 4 ضربدر 2 برابر 8 است.",
    },
    {
        id: 107,
        lessonId: 11,
        difficulty: "medium",
        question: "What is the result of 20 - (5 + 3)?",
        options: [
            "12",
            "18",
            "22",
            "8",
        ],
        correctAnswer: 0,
        explanation:
            "The parentheses are evaluated first: 5 + 3 = 8, then 20 - 8 = 12.",
        faQuestion:
            "نتیجه عبارت 20 - (5 + 3) چیست؟",
        faOptions: [
            "12",
            "18",
            "22",
            "8",
        ],
        faExplanation:
            "ابتدا عبارت داخل پرانتز محاسبه می‌شود؛ 5 به اضافه 3 برابر 8 است و سپس 20 منهای 8 برابر 12 می‌شود.",
    },
    {
        id: 108,
        lessonId: 11,
        difficulty: "medium",
        question: "What is the result of 18 + 6 / 3?",
        options: [
            "8",
            "24",
            "20",
            "6",
        ],
        correctAnswer: 2,
        explanation:
            "Division is performed before addition: 6 / 3 = 2, then 18 + 2 = 20.",
        faQuestion:
            "نتیجه عبارت 18 + 6 / 3 چیست؟",
        faOptions: [
            "8",
            "24",
            "20",
            "6",
        ],
        faExplanation:
            "ابتدا تقسیم انجام می‌شود؛ 6 تقسیم بر 3 برابر 2 است و سپس 2 با 18 جمع می‌شود که نتیجه 20 است.",
    },
    {
        id: 109,
        lessonId: 11,
        difficulty: "hard",
        question: "What is the result of (10 + 5) * (8 - 3)?",
        options: [
            "65",
            "75",
            "50",
            "80",
        ],
        correctAnswer: 1,
        explanation:
            "Both parentheses are evaluated first: 10 + 5 = 15 and 8 - 3 = 5. Then 15 * 5 = 75.",
        faQuestion:
            "نتیجه عبارت (10 + 5) * (8 - 3) چیست؟",
        faOptions: [
            "65",
            "75",
            "50",
            "80",
        ],
        faExplanation:
            "ابتدا هر دو عبارت داخل پرانتز محاسبه می‌شوند؛ 10 به اضافه 5 برابر 15 و 8 منهای 3 برابر 5 است. سپس 15 ضربدر 5 برابر 75 می‌شود.",
    },
    {
        id: 110,
        lessonId: 11,
        difficulty: "hard",
        question: "What is the result of 30 - 4 * 5 + 6?",
        options: [
            "26",
            "16",
            "46",
            "10",
        ],
        correctAnswer: 1,
        explanation:
            "Multiplication is performed first: 4 * 5 = 20. Then 30 - 20 + 6 is evaluated from left to right, giving 16.",
        faQuestion:
            "نتیجه عبارت 30 - 4 * 5 + 6 چیست؟",
        faOptions: [
            "26",
            "16",
            "46",
            "10",
        ],
        faExplanation:
            "ابتدا ضرب انجام می‌شود؛ 4 ضربدر 5 برابر 20 است. سپس 30 منهای 20 به اضافه 6 از چپ به راست محاسبه می‌شود و نتیجه 16 است.",
    },
    {
        id: 111,
        lessonId: 12,
        difficulty: "easy",
        question: "Which statement is used to run code when a condition is true?",
        options: [
            "else",
            "if",
            "for",
            "while",
        ],
        correctAnswer: 1,
        explanation:
            "The if statement runs its code block when its condition evaluates to true.",
        faQuestion:
            "کدام دستور برای اجرای کد زمانی که یک شرط درست است استفاده می‌شود؟",
        faOptions: [
            "else",
            "if",
            "for",
            "while",
        ],
        faExplanation:
            "دستور if کد داخل بلوک خود را زمانی اجرا می‌کند که شرط آن مقدار true داشته باشد.",
    },
    {
        id: 112,
        lessonId: 12,
        difficulty: "easy",
        question: "What does an if statement check before running its code block?",
        options: [
            "A condition",
            "A function",
            "A loop",
            "A String",
        ],
        correctAnswer: 0,
        explanation:
            "An if statement checks a condition to determine whether its code block should run.",
        faQuestion:
            "دستور if قبل از اجرای بلوک کد خود چه چیزی را بررسی می‌کند؟",
        faOptions: [
            "یک شرط",
            "یک تابع",
            "یک حلقه",
            "یک String",
        ],
        faExplanation:
            "دستور if یک شرط را بررسی می‌کند تا مشخص شود آیا بلوک کد آن باید اجرا شود یا نه.",
    },
    {
        id: 113,
        lessonId: 12,
        difficulty: "easy",
        question: "What does the else block run when the if condition is false?",
        options: [
            "The if block",
            "The else block",
            "Both blocks",
            "Neither block",
        ],
        correctAnswer: 1,
        explanation:
            "The else block runs when the condition of the preceding if statement is false.",
        faQuestion:
            "وقتی شرط if نادرست باشد، کدام بلوک اجرا می‌شود؟",
        faOptions: [
            "بلوک if",
            "بلوک else",
            "هر دو بلوک",
            "هیچ‌کدام از بلوک‌ها",
        ],
        faExplanation:
            "بلوک else زمانی اجرا می‌شود که شرط دستور if قبلی نادرست باشد.",
    },
    {
        id: 114,
        lessonId: 12,
        difficulty: "easy",
        question: "Which statement is used to check another condition after an if condition is false?",
        options: [
            "else",
            "if",
            "else if",
            "const",
        ],
        correctAnswer: 2,
        explanation:
            "The else if statement allows JavaScript to check another condition when the previous if condition is false.",
        faQuestion:
            "کدام دستور برای بررسی یک شرط دیگر پس از نادرست بودن شرط if استفاده می‌شود؟",
        faOptions: [
            "else",
            "if",
            "else if",
            "const",
        ],
        faExplanation:
            "دستور else if به JavaScript اجازه می‌دهد زمانی که شرط قبلی نادرست است، یک شرط دیگر را بررسی کند.",
    },
    {
        id: 115,
        lessonId: 12,
        difficulty: "medium",
        question: "What is printed by this code? const age = 20; if (age >= 18) { console.log(\"Adult\"); }",
        options: [
            "Adult",
            "Teenager",
            "Nothing",
            "20",
        ],
        correctAnswer: 0,
        explanation:
            "The condition 20 >= 18 is true, so the code inside the if block prints Adult.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟ const age = 20; if (age >= 18) { console.log(\"Adult\"); }",
        faOptions: [
            "Adult",
            "Teenager",
            "هیچ‌چیز",
            "20",
        ],
        faExplanation:
            "شرط 20 بزرگ‌تر یا مساوی 18 درست است، بنابراین کد داخل بلوک if عبارت Adult را نمایش می‌دهد.",
    },
    {
        id: 116,
        lessonId: 12,
        difficulty: "medium",
        question: "What is printed by this code? const age = 16; if (age >= 18) { console.log(\"Adult\"); } else { console.log(\"Not adult\"); }",
        options: [
            "Adult",
            "16",
            "Not adult",
            "Nothing",
        ],
        correctAnswer: 2,
        explanation:
            "The condition 16 >= 18 is false, so the else block runs and prints Not adult.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟ const age = 16; if (age >= 18) { console.log(\"Adult\"); } else { console.log(\"Not adult\"); }",
        faOptions: [
            "Adult",
            "16",
            "Not adult",
            "هیچ‌چیز",
        ],
        faExplanation:
            "شرط 16 بزرگ‌تر یا مساوی 18 نادرست است، بنابراین بلوک else اجرا می‌شود و عبارت Not adult را نمایش می‌دهد.",
    },
    {
        id: 117,
        lessonId: 12,
        difficulty: "medium",
        question: "What is printed by this code? const score = 75; if (score >= 90) { console.log(\"Excellent\"); } else if (score >= 60) { console.log(\"Passed\"); } else { console.log(\"Failed\"); }",
        options: [
            "Failed",
            "Passed",
            "Excellent",
            "75",
        ],
        correctAnswer: 1,
        explanation:
            "75 is not at least 90, but it is at least 60, so the else if block prints Passed.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟ const score = 75; if (score >= 90) { console.log(\"Excellent\"); } else if (score >= 60) { console.log(\"Passed\"); } else { console.log(\"Failed\"); }",
        faOptions: [
            "Failed",
            "Passed",
            "Excellent",
            "75",
        ],
        faExplanation:
            "عدد 75 حداقل 90 نیست، اما حداقل 60 است، بنابراین بلوک else if اجرا می‌شود و عبارت Passed را نمایش می‌دهد.",
    },
    {
        id: 118,
        lessonId: 12,
        difficulty: "medium",
        question: "Which operator should be used to compare whether age is exactly 18?",
        options: [
            "=",
            ">=",
            "===",
            "!==",
        ],
        correctAnswer: 2,
        explanation:
            "The === operator checks whether two values are strictly equal in both value and type.",
        faQuestion:
            "برای مقایسه اینکه age دقیقاً برابر 18 است، از کدام عملگر باید استفاده کرد؟",
        faOptions: [
            "=",
            ">=",
            "===",
            "!==",
        ],
        faExplanation:
            "عملگر === بررسی می‌کند که دو مقدار از نظر مقدار و نوع داده کاملاً برابر باشند.",
    },
    {
        id: 119,
        lessonId: 12,
        difficulty: "hard",
        question: "What is printed by this code? const age = 20; if (age >= 18) { console.log(\"Adult\"); } else if (age >= 13) { console.log(\"Teenager\"); } else { console.log(\"Child\"); }",
        options: [
            "Child",
            "Teenager",
            "Adult",
            "Nothing",
        ],
        correctAnswer: 2,
        explanation:
            "The first condition, 20 >= 18, is true, so Adult is printed and the remaining conditions are skipped.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟ const age = 20; if (age >= 18) { console.log(\"Adult\"); } else if (age >= 13) { console.log(\"Teenager\"); } else { console.log(\"Child\"); }",
        faOptions: [
            "Child",
            "Teenager",
            "Adult",
            "هیچ‌چیز",
        ],
        faExplanation:
            "شرط اول یعنی 20 بزرگ‌تر یا مساوی 18 درست است، بنابراین Adult نمایش داده می‌شود و شرط‌های باقی‌مانده بررسی نمی‌شوند.",
    },
    {
        id: 120,
        lessonId: 12,
        difficulty: "hard",
        question: "What is printed by this code? const age = 25; const hasTicket = true; if (age >= 18 && hasTicket) { console.log(\"Enter\"); } else { console.log(\"Denied\"); }",
        options: [
            "Denied",
            "25",
            "Enter",
            "Nothing",
        ],
        correctAnswer: 2,
        explanation:
            "Both conditions are true: age is at least 18 and hasTicket is true, so the if block prints Enter.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟ const age = 25; const hasTicket = true; if (age >= 18 && hasTicket) { console.log(\"Enter\"); } else { console.log(\"Denied\"); }",
        faOptions: [
            "Denied",
            "25",
            "Enter",
            "هیچ‌چیز",
        ],
        faExplanation:
            "هر دو شرط درست هستند؛ age حداقل 18 است و hasTicket نیز true است، بنابراین بلوک if عبارت Enter را نمایش می‌دهد.",
    },

    {
        id: 121,
        lessonId: 13,
        difficulty: "easy",
        question: "Which JavaScript statement is used to repeat a block of code multiple times?",
        options: [
            "if",
            "const",
            "for",
            "return",
        ],
        correctAnswer: 2,
        explanation:
            "A for loop repeats a block of code multiple times.",
        faQuestion:
            "کدام دستور JavaScript برای تکرار یک بلوک کد چندین بار استفاده می‌شود؟",
        faOptions: [
            "if",
            "const",
            "for",
            "return",
        ],
        faExplanation:
            "حلقه for برای تکرار یک بلوک کد چندین بار استفاده می‌شود.",
    },
    {
        id: 122,
        lessonId: 13,
        difficulty: "easy",
        question: "What are the three main parts of a for loop?",
        options: [
            "Variable, value, and type",
            "Initialization, condition, and update",
            "Start, stop, and print",
            "Input, output, and result",
        ],
        correctAnswer: 1,
        explanation:
            "A for loop contains initialization, a condition, and an update.",
        faQuestion:
            "سه بخش اصلی یک حلقه for کدام‌اند؟",
        faOptions: [
            "متغیر، مقدار و نوع",
            "مقداردهی اولیه، شرط و به‌روزرسانی",
            "شروع، توقف و نمایش",
            "ورودی، خروجی و نتیجه",
        ],
        faExplanation:
            "حلقه for شامل مقداردهی اولیه، شرط و به‌روزرسانی است.",
    },
    {
        id: 123,
        lessonId: 13,
        difficulty: "easy",
        question: "What is printed by this code? for (let i = 0; i < 3; i++) { console.log(i); }",
        options: [
            "0, 1, 2",
            "1, 2, 3",
            "0, 1, 2, 3",
            "3, 2, 1",
        ],
        correctAnswer: 0,
        explanation:
            "The loop starts at 0 and continues while i is less than 3, so it prints 0, 1, and 2.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 0; i < 3; i++) { console.log(i); }",
        faOptions: [
            "0، 1، 2",
            "1، 2، 3",
            "0، 1، 2، 3",
            "3، 2، 1",
        ],
        faExplanation:
            "حلقه از 0 شروع می‌شود و تا زمانی ادامه دارد که i از 3 کوچک‌تر باشد، بنابراین 0، 1 و 2 نمایش داده می‌شوند.",
    },
    {
        id: 124,
        lessonId: 13,
        difficulty: "easy",
        question: "What does i++ do in a for loop?",
        options: [
            "Decreases i by 1",
            "Stops the loop",
            "Increases i by 1",
            "Sets i to 0",
        ],
        correctAnswer: 2,
        explanation:
            "The ++ operator increases i by 1 after each iteration.",
        faQuestion:
            "عبارت i++ در یک حلقه for چه کاری انجام می‌دهد؟",
        faOptions: [
            "مقدار i را یک واحد کاهش می‌دهد",
            "حلقه را متوقف می‌کند",
            "مقدار i را یک واحد افزایش می‌دهد",
            "مقدار i را برابر 0 قرار می‌دهد",
        ],
        faExplanation:
            "عملگر ++ مقدار i را بعد از هر بار اجرای حلقه یک واحد افزایش می‌دهد.",
    },
    {
        id: 125,
        lessonId: 13,
        difficulty: "medium",
        question: "What is printed by this code? for (let i = 1; i <= 5; i++) { console.log(i); }",
        options: [
            "0, 1, 2, 3, 4",
            "1, 2, 3, 4",
            "1, 2, 3, 4, 5",
            "0, 1, 2, 3, 4, 5",
        ],
        correctAnswer: 2,
        explanation:
            "The loop starts at 1 and continues while i is less than or equal to 5, so it prints 1 through 5.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 1; i <= 5; i++) { console.log(i); }",
        faOptions: [
            "0، 1، 2، 3، 4",
            "1، 2، 3، 4",
            "1، 2، 3، 4، 5",
            "0، 1، 2، 3، 4، 5",
        ],
        faExplanation:
            "حلقه از 1 شروع می‌شود و تا زمانی ادامه دارد که i کوچک‌تر یا مساوی 5 باشد، بنابراین اعداد 1 تا 5 نمایش داده می‌شوند.",
    },
    {
        id: 126,
        lessonId: 13,
        difficulty: "medium",
        question: "What is printed by this code? for (let i = 0; i < 10; i += 2) { console.log(i); }",
        options: [
            "0, 1, 2, 3, 4",
            "0, 2, 4, 6, 8",
            "2, 4, 6, 8, 10",
            "0, 2, 4, 6, 8, 10",
        ],
        correctAnswer: 1,
        explanation:
            "The loop starts at 0 and increases i by 2 each time while i is less than 10, producing 0, 2, 4, 6, and 8.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 0; i < 10; i += 2) { console.log(i); }",
        faOptions: [
            "0، 1، 2، 3، 4",
            "0، 2، 4، 6، 8",
            "2، 4، 6، 8، 10",
            "0، 2، 4، 6، 8، 10",
        ],
        faExplanation:
            "حلقه از 0 شروع می‌شود و در هر بار اجرای حلقه i را 2 واحد افزایش می‌دهد و تا قبل از 10 ادامه پیدا می‌کند.",
    },
    {
        id: 127,
        lessonId: 13,
        difficulty: "medium",
        question: "How many times does this loop run? for (let i = 0; i < 4; i++) { console.log(\"Hello\"); }",
        options: [
            "3 times",
            "4 times",
            "5 times",
            "2 times",
        ],
        correctAnswer: 1,
        explanation:
            "The condition is true for i values 0, 1, 2, and 3, so the loop runs 4 times.",
        faQuestion:
            "حلقه زیر چند بار اجرا می‌شود؟ for (let i = 0; i < 4; i++) { console.log(\"Hello\"); }",
        faOptions: [
            "3 بار",
            "4 بار",
            "5 بار",
            "2 بار",
        ],
        faExplanation:
            "شرط برای مقدارهای 0، 1، 2 و 3 درست است، بنابراین حلقه 4 بار اجرا می‌شود.",
    },
    {
        id: 128,
        lessonId: 13,
        difficulty: "medium",
        question: "What happens when the condition of a for loop becomes false?",
        options: [
            "The loop continues forever",
            "The loop starts again from the beginning",
            "The loop stops",
            "The update runs twice",
        ],
        correctAnswer: 2,
        explanation:
            "A for loop stops running when its condition evaluates to false.",
        faQuestion:
            "وقتی شرط یک حلقه for نادرست شود چه اتفاقی می‌افتد؟",
        faOptions: [
            "حلقه برای همیشه ادامه پیدا می‌کند",
            "حلقه دوباره از ابتدا شروع می‌شود",
            "حلقه متوقف می‌شود",
            "بخش به‌روزرسانی دو بار اجرا می‌شود",
        ],
        faExplanation:
            "وقتی شرط حلقه مقدار false داشته باشد، اجرای حلقه متوقف می‌شود.",
    },
    {
        id: 129,
        lessonId: 13,
        difficulty: "hard",
        question: "What is printed by this code? for (let i = 2; i <= 8; i += 2) { console.log(i); }",
        options: [
            "2, 4, 6, 8",
            "2, 4, 6",
            "0, 2, 4, 6, 8",
            "4, 6, 8, 10",
        ],
        correctAnswer: 0,
        explanation:
            "The loop starts at 2, increases by 2, and continues while i is less than or equal to 8, so it prints 2, 4, 6, and 8.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 2; i <= 8; i += 2) { console.log(i); }",
        faOptions: [
            "2، 4، 6، 8",
            "2، 4، 6",
            "0، 2، 4، 6، 8",
            "4، 6، 8، 10",
        ],
        faExplanation:
            "حلقه از 2 شروع می‌شود، در هر بار 2 واحد افزایش پیدا می‌کند و تا زمانی ادامه دارد که i کوچک‌تر یا مساوی 8 باشد.",
    },
    {
        id: 130,
        lessonId: 13,
        difficulty: "hard",
        question: "What is printed by this code? for (let i = 5; i > 1; i--) { console.log(i); }",
        options: [
            "5, 4, 3, 2",
            "5, 4, 3, 2, 1",
            "4, 3, 2, 1",
            "1, 2, 3, 4, 5",
        ],
        correctAnswer: 0,
        explanation:
            "The loop starts at 5, decreases by 1, and continues while i is greater than 1, so it prints 5, 4, 3, and 2.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 5; i > 1; i--) { console.log(i); }",
        faOptions: [
            "5، 4، 3، 2",
            "5، 4، 3، 2، 1",
            "4، 3، 2، 1",
            "1، 2، 3، 4، 5",
        ],
        faExplanation:
            "حلقه از 5 شروع می‌شود، در هر بار یک واحد کاهش پیدا می‌کند و تا زمانی ادامه دارد که i بزرگ‌تر از 1 باشد، بنابراین 5، 4، 3 و 2 نمایش داده می‌شوند.",
    },

    {
        id: 131,
        lessonId: 14,
        difficulty: "easy",
        question: "When does a while loop continue running?",
        options: [
            "While its condition is true",
            "While its condition is false",
            "Only once",
            "Only when the loop has no condition",
        ],
        correctAnswer: 0,
        explanation:
            "A while loop continues running as long as its condition evaluates to true.",
        faQuestion:
            "حلقه while چه زمانی به اجرای خود ادامه می‌دهد؟",
        faOptions: [
            "تا زمانی که شرط آن درست باشد",
            "تا زمانی که شرط آن نادرست باشد",
            "فقط یک بار",
            "فقط زمانی که حلقه شرط نداشته باشد",
        ],
        faExplanation:
            "حلقه while تا زمانی به اجرای خود ادامه می‌دهد که شرط آن مقدار true داشته باشد.",
    },
    {
        id: 132,
        lessonId: 14,
        difficulty: "easy",
        question: "When is the condition of a while loop checked?",
        options: [
            "After every two iterations",
            "After the loop finishes",
            "Before each iteration",
            "Only before the program starts",
        ],
        correctAnswer: 2,
        explanation:
            "A while loop checks its condition before each iteration.",
        faQuestion:
            "شرط حلقه while چه زمانی بررسی می‌شود؟",
        faOptions: [
            "بعد از هر دو بار اجرا",
            "بعد از پایان حلقه",
            "قبل از هر بار اجرای حلقه",
            "فقط قبل از شروع برنامه",
        ],
        faExplanation:
            "حلقه while قبل از هر بار اجرای حلقه شرط خود را بررسی می‌کند.",
    },
    {
        id: 133,
        lessonId: 14,
        difficulty: "easy",
        question: "What is the main difference between while and do...while?",
        options: [
            "while cannot use conditions",
            "do...while runs the code before checking the condition",
            "while always runs at least once",
            "do...while cannot update variables",
        ],
        correctAnswer: 1,
        explanation:
            "A do...while loop runs its code first and checks the condition afterward.",
        faQuestion:
            "تفاوت اصلی بین while و do...while چیست؟",
        faOptions: [
            "while نمی‌تواند شرط داشته باشد",
            "do...while ابتدا کد را اجرا می‌کند و سپس شرط را بررسی می‌کند",
            "while همیشه حداقل یک بار اجرا می‌شود",
            "do...while نمی‌تواند متغیرها را تغییر دهد",
        ],
        faExplanation:
            "حلقه do...while ابتدا کد خود را اجرا می‌کند و سپس شرط را بررسی می‌کند.",
    },
    {
        id: 134,
        lessonId: 14,
        difficulty: "easy",
        question: "How many times does this do...while loop run? let count = 10; do { console.log(count); } while (count < 5);",
        options: [
            "0 times",
            "5 times",
            "1 time",
            "10 times",
        ],
        correctAnswer: 2,
        explanation:
            "A do...while loop runs its code once before checking the condition, so it runs 1 time.",
        faQuestion:
            "حلقه do...while زیر چند بار اجرا می‌شود؟ let count = 10; do { console.log(count); } while (count < 5);",
        faOptions: [
            "0 بار",
            "5 بار",
            "1 بار",
            "10 بار",
        ],
        faExplanation:
            "حلقه do...while قبل از بررسی شرط یک بار کد خود را اجرا می‌کند، بنابراین 1 بار اجرا می‌شود.",
    },
    {
        id: 135,
        lessonId: 14,
        difficulty: "medium",
        question: "What is printed by this code? let count = 0; while (count < 3) { console.log(count); count++; }",
        options: [
            "1, 2, 3",
            "0, 1, 2",
            "0, 1, 2, 3",
            "3, 2, 1",
        ],
        correctAnswer: 1,
        explanation:
            "The loop starts at 0 and continues while count is less than 3, printing 0, 1, and 2.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ let count = 0; while (count < 3) { console.log(count); count++; }",
        faOptions: [
            "1، 2، 3",
            "0، 1، 2",
            "0، 1، 2، 3",
            "3، 2، 1",
        ],
        faExplanation:
            "حلقه از 0 شروع می‌شود و تا زمانی ادامه دارد که count از 3 کوچک‌تر باشد، بنابراین 0، 1 و 2 نمایش داده می‌شوند.",
    },
    {
        id: 136,
        lessonId: 14,
        difficulty: "medium",
        question: "What is printed by this code? let count = 1; while (count <= 3) { console.log(count); count++; }",
        options: [
            "0, 1, 2",
            "1, 2",
            "1, 2, 3",
            "1, 2, 3, 4",
        ],
        correctAnswer: 2,
        explanation:
            "The loop runs for count values 1, 2, and 3 because the condition allows values less than or equal to 3.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ let count = 1; while (count <= 3) { console.log(count); count++; }",
        faOptions: [
            "0، 1، 2",
            "1، 2",
            "1، 2، 3",
            "1، 2، 3، 4",
        ],
        faExplanation:
            "حلقه برای مقدارهای 1، 2 و 3 اجرا می‌شود زیرا شرط مقدارهای کوچک‌تر یا مساوی 3 را می‌پذیرد.",
    },
    {
        id: 137,
        lessonId: 14,
        difficulty: "medium",
        question: "What happens if the control variable of a while loop is never updated and its condition remains true?",
        options: [
            "The loop stops immediately",
            "The loop runs only once",
            "The loop never stops",
            "The condition becomes false automatically",
        ],
        correctAnswer: 2,
        explanation:
            "If the condition remains true and nothing changes the value controlling it, the loop continues indefinitely.",
        faQuestion:
            "اگر متغیر کنترل‌کننده حلقه while هیچ‌وقت تغییر نکند و شرط همچنان درست باشد، چه اتفاقی می‌افتد؟",
        faOptions: [
            "حلقه فوراً متوقف می‌شود",
            "حلقه فقط یک بار اجرا می‌شود",
            "حلقه متوقف نمی‌شود",
            "شرط به‌صورت خودکار نادرست می‌شود",
        ],
        faExplanation:
            "اگر شرط همچنان درست بماند و مقدار کنترل‌کننده آن تغییر نکند، حلقه به اجرای خود ادامه می‌دهد و متوقف نمی‌شود.",
    },
    {
        id: 138,
        lessonId: 14,
        difficulty: "medium",
        question: "What is printed by this code? let count = 2; do { console.log(count); count++; } while (count < 5);",
        options: [
            "2, 3, 4",
            "2, 3, 4, 5",
            "3, 4, 5",
            "2, 4",
        ],
        correctAnswer: 0,
        explanation:
            "The loop starts at 2 and runs while count is less than 5, so it prints 2, 3, and 4.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ let count = 2; do { console.log(count); count++; } while (count < 5);",
        faOptions: [
            "2، 3، 4",
            "2، 3، 4، 5",
            "3، 4، 5",
            "2، 4",
        ],
        faExplanation:
            "حلقه از 2 شروع می‌شود و تا زمانی ادامه دارد که count از 5 کوچک‌تر باشد، بنابراین 2، 3 و 4 نمایش داده می‌شوند.",
    },
    {
        id: 139,
        lessonId: 14,
        difficulty: "hard",
        question: "What is printed by this code? let count = 5; while (count > 2) { console.log(count); count--; }",
        options: [
            "5, 4, 3",
            "5, 4, 3, 2",
            "4, 3, 2",
            "3, 2",
        ],
        correctAnswer: 0,
        explanation:
            "The loop runs while count is greater than 2, so it prints 5, 4, and 3 before count becomes 2.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ let count = 5; while (count > 2) { console.log(count); count--; }",
        faOptions: [
            "5، 4، 3",
            "5، 4، 3، 2",
            "4، 3، 2",
            "3، 2",
        ],
        faExplanation:
            "حلقه تا زمانی اجرا می‌شود که count بزرگ‌تر از 2 باشد، بنابراین 5، 4 و 3 نمایش داده می‌شوند و سپس count به 2 می‌رسد.",
    },
    {
        id: 140,
        lessonId: 14,
        difficulty: "hard",
        question: "What is printed by this code? let count = 5; do { console.log(count); count--; } while (count > 5);",
        options: [
            "Nothing",
            "5",
            "5, 4",
            "4",
        ],
        correctAnswer: 1,
        explanation:
            "The do block runs once before the condition is checked, so 5 is printed. After the update, count is 4 and 4 > 5 is false.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟ let count = 5; do { console.log(count); count--; } while (count > 5);",
        faOptions: [
            "هیچ‌چیز",
            "5",
            "5، 4",
            "4",
        ],
        faExplanation:
            "بخش do قبل از بررسی شرط یک بار اجرا می‌شود، بنابراین 5 نمایش داده می‌شود. پس از کاهش مقدار، count برابر 4 است و شرط 4 بزرگ‌تر از 5 نادرست می‌شود.",
    },

    {
        id: 151,
        lessonId: 15,
        difficulty: "easy",
        question: "Which statement stops a loop completely?",
        options: [
            "continue",
            "break",
            "else",
            "return",
        ],
        correctAnswer: 1,
        explanation:
            "The break statement immediately stops the entire loop.",
        faQuestion:
            "کدام دستور یک حلقه را به‌طور کامل متوقف می‌کند؟",
        faOptions: [
            "continue",
            "break",
            "else",
            "return",
        ],
        faExplanation:
            "دستور break بلافاصله کل حلقه را متوقف می‌کند.",
    },
    {
        id: 152,
        lessonId: 15,
        difficulty: "easy",
        question: "Which statement skips the current iteration and continues with the next one?",
        options: [
            "break",
            "continue",
            "if",
            "else",
        ],
        correctAnswer: 1,
        explanation:
            "The continue statement skips the rest of the current iteration and moves to the next iteration.",
        faQuestion:
            "کدام دستور تکرار فعلی را رد می‌کند و به تکرار بعدی می‌رود؟",
        faOptions: [
            "break",
            "continue",
            "if",
            "else",
        ],
        faExplanation:
            "دستور continue ادامه تکرار فعلی را رد می‌کند و به تکرار بعدی می‌رود.",
    },
    {
        id: 153,
        lessonId: 15,
        difficulty: "easy",
        question: "What is printed by this code? for (let i = 0; i < 5; i++) { if (i === 3) { break; } console.log(i); }",
        options: [
            "0, 1, 2",
            "0, 1, 2, 3",
            "1, 2, 3",
            "0, 1, 2, 3, 4",
        ],
        correctAnswer: 0,
        explanation:
            "The loop prints 0, 1, and 2. When i becomes 3, break stops the loop before 3 is printed.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 0; i < 5; i++) { if (i === 3) { break; } console.log(i); }",
        faOptions: [
            "0، 1، 2",
            "0، 1، 2، 3",
            "1، 2، 3",
            "0، 1، 2، 3، 4",
        ],
        faExplanation:
            "حلقه اعداد 0، 1 و 2 را نمایش می‌دهد. وقتی i برابر 3 شود، break حلقه را قبل از نمایش 3 متوقف می‌کند.",
    },
    {
        id: 154,
        lessonId: 15,
        difficulty: "easy",
        question: "What is printed by this code? for (let i = 0; i < 5; i++) { if (i === 2) { continue; } console.log(i); }",
        options: [
            "0, 1, 2, 3, 4",
            "0, 1, 3, 4",
            "0, 1",
            "2, 3, 4",
        ],
        correctAnswer: 1,
        explanation:
            "When i is 2, continue skips that iteration. The loop then continues and prints 3 and 4.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 0; i < 5; i++) { if (i === 2) { continue; } console.log(i); }",
        faOptions: [
            "0، 1، 2، 3، 4",
            "0، 1، 3، 4",
            "0، 1",
            "2، 3، 4",
        ],
        faExplanation:
            "وقتی i برابر 2 شود، continue آن تکرار را رد می‌کند. سپس حلقه ادامه پیدا می‌کند و 3 و 4 نیز نمایش داده می‌شوند.",
    },
    {
        id: 155,
        lessonId: 15,
        difficulty: "medium",
        question: "What is printed by this code? for (let i = 1; i <= 5; i++) { if (i === 4) { break; } console.log(i); }",
        options: [
            "1, 2, 3",
            "1, 2, 3, 4",
            "2, 3, 4",
            "1, 2, 3, 4, 5",
        ],
        correctAnswer: 0,
        explanation:
            "The loop prints 1, 2, and 3. When i reaches 4, break stops the loop before 4 is printed.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 1; i <= 5; i++) { if (i === 4) { break; } console.log(i); }",
        faOptions: [
            "1، 2، 3",
            "1، 2، 3، 4",
            "2، 3، 4",
            "1، 2، 3، 4، 5",
        ],
        faExplanation:
            "حلقه اعداد 1، 2 و 3 را نمایش می‌دهد. وقتی i به 4 برسد، break قبل از نمایش 4 حلقه را متوقف می‌کند.",
    },
    {
        id: 156,
        lessonId: 15,
        difficulty: "medium",
        question: "What is printed by this code? for (let i = 1; i <= 5; i++) { if (i === 4) { continue; } console.log(i); }",
        options: [
            "1, 2, 3, 5",
            "1, 2, 3, 4",
            "1, 2, 5",
            "4, 5",
        ],
        correctAnswer: 0,
        explanation:
            "The iteration where i equals 4 is skipped, but the loop continues and prints 5.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ for (let i = 1; i <= 5; i++) { if (i === 4) { continue; } console.log(i); }",
        faOptions: [
            "1، 2، 3، 5",
            "1، 2، 3، 4",
            "1، 2، 5",
            "4، 5",
        ],
        faExplanation:
            "تکراری که در آن i برابر 4 است رد می‌شود، اما حلقه ادامه پیدا می‌کند و 5 نیز نمایش داده می‌شود.",
    },
    {
        id: 157,
        lessonId: 15,
        difficulty: "medium",
        question: "What happens when break executes inside a while loop?",
        options: [
            "The current iteration is skipped",
            "The loop stops completely",
            "The loop starts again",
            "The condition becomes true",
        ],
        correctAnswer: 1,
        explanation:
            "When break executes, the entire while loop stops immediately.",
        faQuestion:
            "وقتی break داخل یک حلقه while اجرا شود چه اتفاقی می‌افتد؟",
        faOptions: [
            "تکرار فعلی رد می‌شود",
            "حلقه به‌طور کامل متوقف می‌شود",
            "حلقه دوباره شروع می‌شود",
            "شرط درست می‌شود",
        ],
        faExplanation:
            "وقتی break اجرا شود، کل حلقه while بلافاصله متوقف می‌شود.",
    },
    {
        id: 158,
        lessonId: 15,
        difficulty: "medium",
        question: "What happens when continue executes inside a loop?",
        options: [
            "The entire loop stops",
            "The program stops",
            "The current iteration is skipped",
            "The loop variable is reset",
        ],
        correctAnswer: 2,
        explanation:
            "The continue statement skips the remaining code in the current iteration and moves to the next iteration.",
        faQuestion:
            "وقتی continue داخل یک حلقه اجرا شود چه اتفاقی می‌افتد؟",
        faOptions: [
            "کل حلقه متوقف می‌شود",
            "برنامه متوقف می‌شود",
            "تکرار فعلی رد می‌شود",
            "متغیر حلقه دوباره مقداردهی می‌شود",
        ],
        faExplanation:
            "دستور continue ادامه کد در تکرار فعلی را رد می‌کند و حلقه به تکرار بعدی می‌رود.",
    },
    {
        id: 159,
        lessonId: 15,
        difficulty: "hard",
        question: "What is printed by this code? let count = 0; while (count < 6) { count++; if (count === 3) { continue; } console.log(count); }",
        options: [
            "1, 2, 3, 4, 5, 6",
            "0, 1, 2, 4, 5",
            "1, 2, 4, 5, 6",
            "1, 2, 3",
        ],
        correctAnswer: 2,
        explanation:
            "count is increased before the condition. The value 3 is skipped by continue, while 1, 2, 4, 5, and 6 are printed.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ let count = 0; while (count < 6) { count++; if (count === 3) { continue; } console.log(count); }",
        faOptions: [
            "1، 2، 3، 4، 5، 6",
            "0، 1، 2، 4، 5",
            "1، 2، 4، 5، 6",
            "1، 2، 3",
        ],
        faExplanation:
            "مقدار count قبل از شرط افزایش پیدا می‌کند. مقدار 3 توسط continue رد می‌شود و 1، 2، 4، 5 و 6 نمایش داده می‌شوند.",
    },
    {
        id: 160,
        lessonId: 15,
        difficulty: "hard",
        question: "What is printed by this code? let count = 0; while (count < 5) { count++; if (count === 3) { break; } console.log(count); }",
        options: [
            "1, 2",
            "1, 2, 3",
            "0, 1, 2",
            "1, 2, 4, 5",
        ],
        correctAnswer: 0,
        explanation:
            "The loop prints 1 and 2. When count becomes 3, break stops the loop before 3 is printed.",
        faQuestion:
            "کد زیر چه اعدادی را نمایش می‌دهد؟ let count = 0; while (count < 5) { count++; if (count === 3) { break; } console.log(count); }",
        faOptions: [
            "1، 2",
            "1، 2، 3",
            "0، 1، 2",
            "1، 2، 4، 5",
        ],
        faExplanation:
            "حلقه 1 و 2 را نمایش می‌دهد. وقتی count برابر 3 شود، break قبل از نمایش 3 حلقه را متوقف می‌کند.",
    },

    {
        id: 161,
        lessonId: 16,
        difficulty: "easy",
        question: "What is a function in JavaScript?",
        options: [
            "A reusable block of code that performs a task",
            "A value that can only be true or false",
            "A special type of loop",
            "A way to store multiple values",
        ],
        correctAnswer: 0,
        explanation:
            "A function is a reusable block of code designed to perform a specific task.",
        faQuestion:
            "تابع در JavaScript چیست؟",
        faOptions: [
            "یک بخش قابل استفاده مجدد از کد که یک کار مشخص انجام می‌دهد",
            "مقداری که فقط می‌تواند true یا false باشد",
            "یک نوع خاص از حلقه",
            "روشی برای ذخیره چند مقدار",
        ],
        faExplanation:
            "تابع یک بخش قابل استفاده مجدد از کد است که برای انجام یک کار مشخص طراحی شده است.",
    },
    {
        id: 162,
        lessonId: 16,
        difficulty: "easy",
        question: "Which keyword is used to create a function declaration?",
        options: [
            "return",
            "function",
            "const",
            "call",
        ],
        correctAnswer: 1,
        explanation:
            "The function keyword is used to declare a function in JavaScript.",
        faQuestion:
            "کدام کلمه کلیدی برای ساخت یک تابع استفاده می‌شود؟",
        faOptions: [
            "return",
            "function",
            "const",
            "call",
        ],
        faExplanation:
            "کلمه کلیدی function برای تعریف یک تابع در JavaScript استفاده می‌شود.",
    },
    {
        id: 163,
        lessonId: 16,
        difficulty: "easy",
        question: "What does calling a function do?",
        options: [
            "It deletes the function",
            "It creates a variable",
            "It runs the code inside the function",
            "It changes the function name",
        ],
        correctAnswer: 2,
        explanation:
            "Calling a function executes the code inside its function body.",
        faQuestion:
            "فراخوانی یک تابع چه کاری انجام می‌دهد؟",
        faOptions: [
            "تابع را حذف می‌کند",
            "یک متغیر ایجاد می‌کند",
            "کد داخل تابع را اجرا می‌کند",
            "نام تابع را تغییر می‌دهد",
        ],
        faExplanation:
            "فراخوانی تابع باعث اجرای کدی می‌شود که داخل بدنه تابع قرار دارد.",
    },
    {
        id: 164,
        lessonId: 16,
        difficulty: "easy",
        question: "What will this code print?\n\nfunction sayHello() {\n    console.log(\"Hello!\");\n}\n\nsayHello();",
        options: [
            "Nothing",
            "Hello!",
            "sayHello",
            "function",
        ],
        correctAnswer: 1,
        explanation:
            "sayHello() calls the function, so the console.log statement runs and prints Hello!.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction sayHello() {\n    console.log(\"Hello!\");\n}\n\nsayHello();",
        faOptions: [
            "هیچ چیزی",
            "Hello!",
            "sayHello",
            "function",
        ],
        faExplanation:
            "عبارت sayHello() تابع را فراخوانی می‌کند، بنابراین دستور console.log اجرا می‌شود و Hello! را نمایش می‌دهد.",
    },
    {
        id: 165,
        lessonId: 16,
        difficulty: "medium",
        question: "How many times will \"Game started!\" be printed?\n\nfunction startGame() {\n    console.log(\"Game started!\");\n}\n\nstartGame();\nstartGame();",
        options: [
            "Once",
            "Twice",
            "Three times",
            "Zero times",
        ],
        correctAnswer: 1,
        explanation:
            "The function is called two times, so the code inside it runs two times.",
        faQuestion:
            "عبارت \"Game started!\" چند بار نمایش داده می‌شود؟\n\nfunction startGame() {\n    console.log(\"Game started!\");\n}\n\nstartGame();\nstartGame();",
        faOptions: [
            "یک بار",
            "دو بار",
            "سه بار",
            "هیچ بار",
        ],
        faExplanation:
            "تابع دو بار فراخوانی شده است، بنابراین کد داخل آن نیز دو بار اجرا می‌شود.",
    },
    {
        id: 166,
        lessonId: 16,
        difficulty: "medium",
        question: "Which line actually calls the function in this code?\n\nfunction showMessage() {\n    console.log(\"Learning JavaScript!\");\n}\n\nshowMessage();",
        options: [
            "function showMessage()",
            "console.log(\"Learning JavaScript!\");",
            "showMessage();",
            "{ }",
        ],
        correctAnswer: 2,
        explanation:
            "showMessage(); calls the function and causes its code to execute.",
        faQuestion:
            "در کد زیر کدام خط تابع را فراخوانی می‌کند؟\n\nfunction showMessage() {\n    console.log(\"Learning JavaScript!\");\n}\n\nshowMessage();",
        faOptions: [
            "function showMessage()",
            "console.log(\"Learning JavaScript!\");",
            "showMessage();",
            "{ }",
        ],
        faExplanation:
            "عبارت showMessage(); تابع را فراخوانی می‌کند و باعث اجرای کد داخل آن می‌شود.",
    },
    {
        id: 167,
        lessonId: 16,
        difficulty: "medium",
        question: "What happens when a function is defined but never called?",
        options: [
            "Its code runs automatically",
            "Its code runs once after the program starts",
            "Its code does not run",
            "The function is deleted",
        ],
        correctAnswer: 2,
        explanation:
            "Defining a function only creates it; its code runs when the function is called.",
        faQuestion:
            "اگر یک تابع تعریف شود اما هیچ‌وقت فراخوانی نشود چه اتفاقی می‌افتد؟",
        faOptions: [
            "کد آن به صورت خودکار اجرا می‌شود",
            "کد آن یک بار بعد از شروع برنامه اجرا می‌شود",
            "کد آن اجرا نمی‌شود",
            "تابع حذف می‌شود",
        ],
        faExplanation:
            "تعریف کردن تابع فقط آن را ایجاد می‌کند و کد آن زمانی اجرا می‌شود که تابع فراخوانی شود.",
    },
    {
        id: 168,
        lessonId: 16,
        difficulty: "hard",
        question: "What will this code print?\n\nfunction calculateScore() {\n    let score = 10;\n    score += 5;\n    console.log(score);\n}\n\ncalculateScore();",
        options: [
            "5",
            "10",
            "15",
            "Nothing",
        ],
        correctAnswer: 2,
        explanation:
            "score starts at 10, then score += 5 changes it to 15 before it is printed.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction calculateScore() {\n    let score = 10;\n    score += 5;\n    console.log(score);\n}\n\ncalculateScore();",
        faOptions: [
            "5",
            "10",
            "15",
            "هیچ مقداری",
        ],
        faExplanation:
            "متغیر score ابتدا مقدار 10 دارد و سپس با score += 5 به 15 تغییر می‌کند و همان مقدار نمایش داده می‌شود.",
    },
    {
        id: 169,
        lessonId: 16,
        difficulty: "hard",
        question: "What will this code print?\n\nfunction showProfile() {\n    let username = \"Ali\";\n    let age = 25;\n\n    console.log(username);\n    console.log(age);\n}\n\nshowProfile();",
        options: [
            "Ali, then 25",
            "25, then Ali",
            "Nothing",
            "Only Ali",
        ],
        correctAnswer: 0,
        explanation:
            "The function first logs username, which is Ali, and then logs age, which is 25.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction showProfile() {\n    let username = \"Ali\";\n    let age = 25;\n\n    console.log(username);\n    console.log(age);\n}\n\nshowProfile();",
        faOptions: [
            "ابتدا Ali و سپس 25",
            "ابتدا 25 و سپس Ali",
            "هیچ چیزی",
            "فقط Ali",
        ],
        explanation:
            "The function first logs username, which is Ali, and then logs age, which is 25.",
        faExplanation:
            "تابع ابتدا username یعنی Ali و سپس age یعنی 25 را نمایش می‌دهد.",
    },
    {
        id: 170,
        lessonId: 16,
        difficulty: "hard",
        question: "Which statement correctly describes the relationship between defining and calling a function?",
        options: [
            "Defining a function runs it, while calling it deletes it",
            "Defining a function creates it, while calling it runs it",
            "Defining a function deletes it, while calling it creates it",
            "Defining and calling a function always mean exactly the same thing",
        ],
        correctAnswer: 1,
        explanation:
            "Defining creates the function and specifies its code, while calling executes that code.",
        faQuestion:
            "کدام عبارت رابطه بین تعریف کردن و فراخوانی یک تابع را به‌درستی توضیح می‌دهد؟",
        faOptions: [
            "تعریف تابع آن را اجرا می‌کند و فراخوانی آن را حذف می‌کند",
            "تعریف تابع آن را ایجاد می‌کند و فراخوانی آن را اجرا می‌کند",
            "تعریف تابع آن را حذف می‌کند و فراخوانی آن را ایجاد می‌کند",
            "تعریف و فراخوانی تابع همیشه دقیقاً یک معنی دارند",
        ],
        explanation:
            "تعریف کردن تابع آن را ایجاد می‌کند و کد آن را مشخص می‌کند، در حالی که فراخوانی تابع باعث اجرای آن کد می‌شود.",
    },

    {
        id: 171,
        lessonId: 17,
        difficulty: "easy",
        question: "What does a function declaration do?",
        options: [
            "It calls a function",
            "It creates and defines a function",
            "It deletes a function",
            "It repeats a function automatically",
        ],
        correctAnswer: 1,
        explanation:
            "A function declaration creates a named function and defines the code that should run when it is called.",
        faQuestion:
            "تعریف یک تابع چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک تابع را فراخوانی می‌کند",
            "یک تابع را ایجاد و تعریف می‌کند",
            "یک تابع را حذف می‌کند",
            "یک تابع را به صورت خودکار تکرار می‌کند",
        ],
        faExplanation:
            "تعریف تابع یک تابع نام‌دار را ایجاد می‌کند و کدی را که هنگام فراخوانی باید اجرا شود مشخص می‌کند.",
    },
    {
        id: 172,
        lessonId: 17,
        difficulty: "easy",
        question: "Which code correctly calls the function greet?",
        options: [
            "greet",
            "call greet",
            "greet()",
            "function greet()",
        ],
        correctAnswer: 2,
        explanation:
            "Writing greet() calls the function and executes the code inside it.",
        faQuestion:
            "کدام کد تابع greet را به‌درستی فراخوانی می‌کند؟",
        faOptions: [
            "greet",
            "call greet",
            "greet()",
            "function greet()",
        ],
        faExplanation:
            "نوشتن greet() تابع را فراخوانی می‌کند و باعث اجرای کد داخل آن می‌شود.",
    },
    {
        id: 173,
        lessonId: 17,
        difficulty: "easy",
        question: "What is the purpose of the parentheses when calling a function?",
        options: [
            "They rename the function",
            "They tell JavaScript to execute the function",
            "They create a variable",
            "They stop the function",
        ],
        correctAnswer: 1,
        explanation:
            "The parentheses after a function name are used to call the function and execute its code.",
        faQuestion:
            "پرانتزها هنگام فراخوانی تابع چه کاربردی دارند؟",
        faOptions: [
            "نام تابع را تغییر می‌دهند",
            "به JavaScript می‌گویند تابع را اجرا کند",
            "یک متغیر ایجاد می‌کنند",
            "تابع را متوقف می‌کنند",
        ],
        faExplanation:
            "پرانتزهای بعد از نام تابع برای فراخوانی تابع و اجرای کد آن استفاده می‌شوند.",
    },
    {
        id: 174,
        lessonId: 17,
        difficulty: "easy",
        question: "What will this code print?\n\nfunction sayHello() {\n    console.log(\"Hello!\");\n}\n\nsayHello();",
        options: [
            "Hello!",
            "Nothing",
            "sayHello",
            "function",
        ],
        correctAnswer: 0,
        explanation:
            "sayHello() calls the function, so console.log prints Hello!.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction sayHello() {\n    console.log(\"Hello!\");\n}\n\nsayHello();",
        faOptions: [
            "Hello!",
            "هیچ چیزی",
            "sayHello",
            "function",
        ],
        faExplanation:
            "عبارت sayHello() تابع را فراخوانی می‌کند، بنابراین console.log عبارت Hello! را نمایش می‌دهد.",
    },
    {
        id: 175,
        lessonId: 17,
        difficulty: "medium",
        question: "How many times will \"Welcome!\" be printed?\n\nfunction showMessage() {\n    console.log(\"Welcome!\");\n}\n\nshowMessage();\nshowMessage();",
        options: [
            "Zero times",
            "Once",
            "Twice",
            "Three times",
        ],
        correctAnswer: 2,
        explanation:
            "The function is called twice, so the code inside it runs twice.",
        faQuestion:
            "عبارت \"Welcome!\" چند بار نمایش داده می‌شود؟\n\nfunction showMessage() {\n    console.log(\"Welcome!\");\n}\n\nshowMessage();\nshowMessage();",
        faOptions: [
            "هیچ بار",
            "یک بار",
            "دو بار",
            "سه بار",
        ],
        faExplanation:
            "تابع دو بار فراخوانی شده است، بنابراین کد داخل آن نیز دو بار اجرا می‌شود.",
    },
    {
        id: 176,
        lessonId: 17,
        difficulty: "medium",
        question: "How many times is the function declared in this code?\n\nfunction startGame() {\n    console.log(\"Game started!\");\n}\n\nstartGame();\nstartGame();",
        options: [
            "Once",
            "Twice",
            "Three times",
            "Zero times",
        ],
        correctAnswer: 0,
        explanation:
            "The function declaration appears once. The two startGame() lines are function calls.",
        faQuestion:
            "در کد زیر تابع چند بار تعریف شده است؟\n\nfunction startGame() {\n    console.log(\"Game started!\");\n}\n\nstartGame();\nstartGame();",
        faOptions: [
            "یک بار",
            "دو بار",
            "سه بار",
            "هیچ بار",
        ],
        faExplanation:
            "تعریف تابع فقط یک بار نوشته شده است و دو عبارت startGame() فراخوانی‌های تابع هستند.",
    },
    {
        id: 177,
        lessonId: 17,
        difficulty: "medium",
        question: "What happens if this function is declared but never called?\n\nfunction showMessage() {\n    console.log(\"Hello!\");\n}",
        options: [
            "Hello! is printed automatically",
            "The function runs three times",
            "The code inside the function does not run",
            "The function is deleted",
        ],
        correctAnswer: 2,
        explanation:
            "Defining a function does not execute its code. The function must be called.",
        faQuestion:
            "اگر تابع زیر تعریف شود اما هیچ‌وقت فراخوانی نشود چه اتفاقی می‌افتد؟\n\nfunction showMessage() {\n    console.log(\"Hello!\");\n}",
        faOptions: [
            "Hello! به صورت خودکار نمایش داده می‌شود",
            "تابع سه بار اجرا می‌شود",
            "کد داخل تابع اجرا نمی‌شود",
            "تابع حذف می‌شود",
        ],
        faExplanation:
            "تعریف تابع باعث اجرای کد آن نمی‌شود و برای اجرا باید تابع فراخوانی شود.",
    },
    {
        id: 178,
        lessonId: 17,
        difficulty: "medium",
        question: "What will this code print?\n\nfunction showScore() {\n    console.log(100);\n}\n\nshowScore();\nshowScore();\nshowScore();",
        options: [
            "100 once",
            "100 twice",
            "100 three times",
            "Nothing",
        ],
        correctAnswer: 2,
        explanation:
            "The function is declared once but called three times, so 100 is printed three times.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction showScore() {\n    console.log(100);\n}\n\nshowScore();\nshowScore();\nshowScore();",
        faOptions: [
            "100 یک بار",
            "100 دو بار",
            "100 سه بار",
            "هیچ چیزی",
        ],
        explanation:
            "تابع یک بار تعریف شده اما سه بار فراخوانی شده است، بنابراین 100 سه بار نمایش داده می‌شود.",
    },
    {
        id: 179,
        lessonId: 17,
        difficulty: "hard",
        question: "Which line is the function declaration in this code?\n\nfunction openMenu() {\n    console.log(\"Menu opened!\");\n}\n\nopenMenu();",
        options: [
            "openMenu();",
            "console.log(\"Menu opened!\");",
            "function openMenu() { ... }",
            "Menu opened!",
        ],
        correctAnswer: 2,
        explanation:
            "The function openMenu is declared with the function keyword and its code block.",
        faQuestion:
            "در کد زیر کدام خط تعریف تابع است؟\n\nfunction openMenu() {\n    console.log(\"Menu opened!\");\n}\n\nopenMenu();",
        faOptions: [
            "openMenu();",
            "console.log(\"Menu opened!\");",
            "function openMenu() { ... }",
            "Menu opened!",
        ],
        explanation:
            "تابع openMenu با کلمه کلیدی function و بدنه کد آن تعریف شده است.",
    },
    {
        id: 180,
        lessonId: 17,
        difficulty: "hard",
        question: "What will this code print?\n\nfunction startLesson() {\n    console.log(\"Lesson started!\");\n}\n\nstartLesson();\nconsole.log(\"Keep learning!\");\nstartLesson();",
        options: [
            "Lesson started!, Keep learning!, Lesson started!",
            "Keep learning!, Lesson started!, Lesson started!",
            "Lesson started! only",
            "Nothing",
        ],
        correctAnswer: 0,
        explanation:
            "The first function call prints Lesson started!, then Keep learning! is printed, and the second function call prints Lesson started! again.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction startLesson() {\n    console.log(\"Lesson started!\");\n}\n\nstartLesson();\nconsole.log(\"Keep learning!\");\nstartLesson();",
        faOptions: [
            "Lesson started!، سپس Keep learning!، سپس Lesson started!",
            "Keep learning!، سپس Lesson started!، سپس Lesson started!",
            "فقط Lesson started!",
            "هیچ چیزی",
        ],
        explanation:
            "فراخوانی اول تابع Lesson started! را نمایش می‌دهد، سپس Keep learning! نمایش داده می‌شود و فراخوانی دوم دوباره Lesson started! را نمایش می‌دهد.",
    },

    {
        id: 181,
        lessonId: 18,
        difficulty: "easy",
        question: "What is a parameter in a function?",
        options: [
            "The actual value passed to a function",
            "The variable written in the function definition",
            "The result printed by a function",
            "The name of the JavaScript file",
        ],
        correctAnswer: 1,
        explanation:
            "A parameter is a variable written in the function definition that receives a value when the function is called.",
        faQuestion:
            "پارامتر در یک تابع چیست؟",
        faOptions: [
            "مقدار واقعی ارسال‌شده به تابع",
            "متغیری که هنگام تعریف تابع نوشته می‌شود",
            "نتیجه‌ای که تابع نمایش می‌دهد",
            "نام فایل JavaScript",
        ],
        faExplanation:
            "پارامتر متغیری است که هنگام تعریف تابع نوشته می‌شود و هنگام فراخوانی تابع یک مقدار دریافت می‌کند.",
    },
    {
        id: 182,
        lessonId: 18,
        difficulty: "easy",
        question: "What is an argument in a function call?",
        options: [
            "The actual value passed to the function",
            "The function name",
            "The parameter name",
            "The function body",
        ],
        correctAnswer: 0,
        explanation:
            "An argument is the actual value that is passed to a function when it is called.",
        faQuestion:
            "آرگومان در فراخوانی یک تابع چیست؟",
        faOptions: [
            "مقدار واقعی ارسال‌شده به تابع",
            "نام تابع",
            "نام پارامتر",
            "بدنه تابع",
        ],
        faExplanation:
            "آرگومان مقدار واقعی است که هنگام فراخوانی تابع به آن ارسال می‌شود.",
    },
    {
        id: 183,
        lessonId: 18,
        difficulty: "easy",
        question: "In this code, what is name?\n\nfunction greet(name) {\n    console.log(name);\n}",
        options: [
            "An argument",
            "A parameter",
            "A function call",
            "A return value",
        ],
        correctAnswer: 1,
        explanation:
            "name is a parameter because it is written inside the function definition.",
        faQuestion:
            "در کد زیر name چیست؟\n\nfunction greet(name) {\n    console.log(name);\n}",
        faOptions: [
            "یک آرگومان",
            "یک پارامتر",
            "یک فراخوانی تابع",
            "یک مقدار بازگشتی",
        ],
        faExplanation:
            "name یک پارامتر است زیرا هنگام تعریف تابع داخل پرانتزهای تابع نوشته شده است.",
    },
    {
        id: 184,
        lessonId: 18,
        difficulty: "easy",
        question: "In this code, what is \"Ali\"?\n\nfunction greet(name) {\n    console.log(name);\n}\n\ngreet(\"Ali\");",
        options: [
            "A parameter",
            "A function declaration",
            "An argument",
            "A function name",
        ],
        correctAnswer: 2,
        explanation:
            "\"Ali\" is an argument because it is the actual value passed when greet is called.",
        faQuestion:
            "در کد زیر \"Ali\" چیست؟\n\nfunction greet(name) {\n    console.log(name);\n}\n\ngreet(\"Ali\");",
        faOptions: [
            "یک پارامتر",
            "یک تعریف تابع",
            "یک آرگومان",
            "نام تابع",
        ],
        faExplanation:
            "\"Ali\" یک آرگومان است زیرا مقدار واقعی هنگام فراخوانی تابع greet به آن ارسال شده است.",
    },
    {
        id: 185,
        lessonId: 18,
        difficulty: "medium",
        question: "What will this code print?\n\nfunction greet(name) {\n    console.log(\"Hello \" + name + \"!\");\n}\n\ngreet(\"Ali\");",
        options: [
            "Hello name!",
            "Ali",
            "Hello Ali!",
            "Nothing",
        ],
        correctAnswer: 2,
        explanation:
            "The argument \"Ali\" is assigned to the parameter name, so the function prints Hello Ali!.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction greet(name) {\n    console.log(\"Hello \" + name + \"!\");\n}\n\ngreet(\"Ali\");",
        faOptions: [
            "Hello name!",
            "Ali",
            "Hello Ali!",
            "هیچ چیزی",
        ],
        faExplanation:
            "آرگومان \"Ali\" به پارامتر name داده می‌شود، بنابراین تابع عبارت Hello Ali! را نمایش می‌دهد.",
    },
    {
        id: 186,
        lessonId: 18,
        difficulty: "medium",
        question: "What will this code print?\n\nfunction addNumbers(firstNumber, secondNumber) {\n    console.log(firstNumber + secondNumber);\n}\n\naddNumbers(10, 5);",
        options: [
            "15",
            "105",
            "10",
            "5",
        ],
        correctAnswer: 0,
        explanation:
            "The arguments 10 and 5 are assigned to the two parameters, so 10 + 5 produces 15.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction addNumbers(firstNumber, secondNumber) {\n    console.log(firstNumber + secondNumber);\n}\n\naddNumbers(10, 5);",
        faOptions: [
            "15",
            "105",
            "10",
            "5",
        ],
        faExplanation:
            "آرگومان‌های 10 و 5 به دو پارامتر داده می‌شوند و حاصل جمع آن‌ها برابر با 15 است.",
    },
    {
        id: 187,
        lessonId: 18,
        difficulty: "medium",
        question: "What will this code print?\n\nfunction introduce(name, age) {\n    console.log(name);\n    console.log(age);\n}\n\nintroduce(\"Ali\", 25);",
        options: [
            "25, then Ali",
            "Ali, then 25",
            "Ali, then Ali",
            "25, then 25",
        ],
        correctAnswer: 1,
        explanation:
            "The first argument \"Ali\" goes to name and the second argument 25 goes to age, so they are printed in that order.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction introduce(name, age) {\n    console.log(name);\n    console.log(age);\n}\n\nintroduce(\"Ali\", 25);",
        faOptions: [
            "ابتدا 25 و سپس Ali",
            "ابتدا Ali و سپس 25",
            "ابتدا Ali و سپس Ali",
            "ابتدا 25 و سپس 25",
        ],
        faExplanation:
            "آرگومان اول یعنی \"Ali\" به name و آرگومان دوم یعنی 25 به age داده می‌شود، بنابراین همین ترتیب نمایش داده می‌شود.",
    },
    {
        id: 188,
        lessonId: 18,
        difficulty: "medium",
        question: "What happens when the order of arguments is changed?\n\nfunction introduce(name, age) {\n    console.log(name);\n    console.log(age);\n}\n\nintroduce(25, \"Ali\");",
        options: [
            "25 is assigned to name and \"Ali\" to age",
            "\"Ali\" is assigned to name and 25 to age",
            "Both values are assigned to name",
            "The function cannot be called",
        ],
        correctAnswer: 0,
        explanation:
            "Arguments are assigned to parameters by position, so the first argument 25 goes to name and the second argument \"Ali\" goes to age.",
        faQuestion:
            "وقتی ترتیب آرگومان‌ها تغییر کند چه اتفاقی می‌افتد؟\n\nfunction introduce(name, age) {\n    console.log(name);\n    console.log(age);\n}\n\nintroduce(25, \"Ali\");",
        faOptions: [
            "25 به name و \"Ali\" به age داده می‌شود",
            "\"Ali\" به name و 25 به age داده می‌شود",
            "هر دو مقدار به name داده می‌شوند",
            "تابع نمی‌تواند فراخوانی شود",
        ],
        faExplanation:
            "آرگومان‌ها بر اساس جایگاه به پارامترها داده می‌شوند، بنابراین آرگومان اول یعنی 25 وارد name و آرگومان دوم یعنی \"Ali\" وارد age می‌شود.",
    },
    {
        id: 189,
        lessonId: 18,
        difficulty: "hard",
        question: "What will this code print?\n\nfunction multiply(a, b) {\n    console.log(a * b);\n}\n\nmultiply(4, 5);",
        options: [
            "9",
            "20",
            "45",
            "1",
        ],
        correctAnswer: 1,
        explanation:
            "The arguments 4 and 5 are assigned to a and b, and 4 × 5 equals 20.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction multiply(a, b) {\n    console.log(a * b);\n}\n\nmultiply(4, 5);",
        faOptions: [
            "9",
            "20",
            "45",
            "1",
        ],
        faExplanation:
            "آرگومان‌های 4 و 5 به a و b داده می‌شوند و حاصل ضرب 4 در 5 برابر با 20 است.",
    },
    {
        id: 190,
        lessonId: 18,
        difficulty: "hard",
        question: "Which statement correctly describes parameters and arguments?",
        options: [
            "Parameters are actual values, while arguments are placeholders",
            "Parameters and arguments are always completely different types",
            "Parameters are written in the function definition, while arguments are passed when the function is called",
            "Arguments are written in the function definition, while parameters are passed when the function is called",
        ],
        correctAnswer: 2,
        explanation:
            "Parameters are the variables defined by the function, while arguments are the actual values supplied during a function call.",
        faQuestion:
            "کدام عبارت پارامترها و آرگومان‌ها را به‌درستی توضیح می‌دهد؟",
        faOptions: [
            "پارامترها مقدارهای واقعی هستند و آرگومان‌ها جای خالی هستند",
            "پارامترها و آرگومان‌ها همیشه کاملاً از نوع‌های متفاوت هستند",
            "پارامترها هنگام تعریف تابع نوشته می‌شوند و آرگومان‌ها هنگام فراخوانی تابع ارسال می‌شوند",
            "آرگومان‌ها هنگام تعریف تابع نوشته می‌شوند و پارامترها هنگام فراخوانی تابع ارسال می‌شوند",
        ],
        faExplanation:
            "پارامترها متغیرهای تعریف‌شده در تابع هستند و آرگومان‌ها مقدارهای واقعی هستند که هنگام فراخوانی تابع ارسال می‌شوند.",
    },

    {
        id: 191,
        lessonId: 19,
        difficulty: "easy",
        question: "What does the return keyword do in a function?",
        options: [
            "It displays a value in the console",
            "It sends a value back from the function",
            "It creates a new function",
            "It repeats the function",
        ],
        correctAnswer: 1,
        explanation:
            "The return keyword sends a value back from the function to the code that called it.",
        faQuestion:
            "کلمه کلیدی return در یک تابع چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک مقدار را در کنسول نمایش می‌دهد",
            "یک مقدار را از تابع برمی‌گرداند",
            "یک تابع جدید ایجاد می‌کند",
            "تابع را تکرار می‌کند",
        ],
        faExplanation:
            "کلمه کلیدی return یک مقدار را از تابع به کدی که تابع را فراخوانی کرده برمی‌گرداند.",
    },
    {
        id: 192,
        lessonId: 19,
        difficulty: "easy",
        question: "What will this code store in result?\n\nfunction getScore() {\n    return 100;\n}\n\nlet result = getScore();",
        options: [
            "100",
            "getScore",
            "Nothing",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "getScore() returns 100, so that returned value is stored in result.",
        faQuestion:
            "کد زیر چه مقداری را در result ذخیره می‌کند؟\n\nfunction getScore() {\n    return 100;\n}\n\nlet result = getScore();",
        faOptions: [
            "100",
            "getScore",
            "هیچ مقداری",
            "undefined",
        ],
        faExplanation:
            "تابع getScore() مقدار 100 را برمی‌گرداند، بنابراین همین مقدار در result ذخیره می‌شود.",
    },
    {
        id: 193,
        lessonId: 19,
        difficulty: "easy",
        question: "What is the main difference between return and console.log()?",
        options: [
            "return displays a value, while console.log() returns it",
            "They always do exactly the same thing",
            "return sends a value back, while console.log() displays a value",
            "console.log() stops a function, while return repeats it",
        ],
        correctAnswer: 2,
        explanation:
            "return sends a value back to the calling code, while console.log() displays a value in the console.",
        faQuestion:
            "تفاوت اصلی بین return و console.log() چیست؟",
        faOptions: [
            "return مقدار را نمایش می‌دهد و console.log() آن را برمی‌گرداند",
            "هر دو همیشه دقیقاً یک کار انجام می‌دهند",
            "return مقدار را برمی‌گرداند و console.log() مقدار را نمایش می‌دهد",
            "console.log() تابع را متوقف می‌کند و return آن را تکرار می‌کند",
        ],
        faExplanation:
            "return یک مقدار را به کدی که تابع را فراخوانی کرده برمی‌گرداند، در حالی که console.log() مقدار را در کنسول نمایش می‌دهد.",
    },
    {
        id: 194,
        lessonId: 19,
        difficulty: "easy",
        question: "What will this code print?\n\nfunction add(a, b) {\n    return a + b;\n}\n\nconsole.log(add(10, 5));",
        options: [
            "5",
            "10",
            "15",
            "105",
        ],
        correctAnswer: 2,
        explanation:
            "add(10, 5) returns 15, and console.log() displays that returned value.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction add(a, b) {\n    return a + b;\n}\n\nconsole.log(add(10, 5));",
        faOptions: [
            "5",
            "10",
            "15",
            "105",
        ],
        faExplanation:
            "تابع add(10, 5) مقدار 15 را برمی‌گرداند و console.log() همین مقدار را نمایش می‌دهد.",
    },
    {
        id: 195,
        lessonId: 19,
        difficulty: "medium",
        question: "What will this code print?\n\nfunction add(a, b) {\n    return a + b;\n}\n\nconsole.log(add(10, 5) + 5);",
        options: [
            "15",
            "20",
            "105",
            "10",
        ],
        correctAnswer: 1,
        explanation:
            "The function returns 15, and then 5 is added to the returned value, producing 20.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction add(a, b) {\n    return a + b;\n}\n\nconsole.log(add(10, 5) + 5);",
        faOptions: [
            "15",
            "20",
            "105",
            "10",
        ],
        faExplanation:
            "تابع مقدار 15 را برمی‌گرداند و سپس 5 به آن اضافه می‌شود، بنابراین نتیجه 20 است.",
    },
    {
        id: 196,
        lessonId: 19,
        difficulty: "medium",
        question: "What will this code print?\n\nfunction calculateTotal(price, quantity) {\n    return price * quantity;\n}\n\nlet total = calculateTotal(20, 3);\nconsole.log(total);",
        options: [
            "23",
            "40",
            "60",
            "203",
        ],
        correctAnswer: 2,
        explanation:
            "calculateTotal(20, 3) returns 20 × 3, which is 60.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction calculateTotal(price, quantity) {\n    return price * quantity;\n}\n\nlet total = calculateTotal(20, 3);\nconsole.log(total);",
        faOptions: [
            "23",
            "40",
            "60",
            "203",
        ],
        faExplanation:
            "تابع calculateTotal(20, 3) حاصل 20 × 3 را برمی‌گرداند که برابر با 60 است.",
    },
    {
        id: 197,
        lessonId: 19,
        difficulty: "medium",
        question: "What happens to code after a return statement inside the same function?",
        options: [
            "It runs before return",
            "It runs twice",
            "It does not run",
            "It becomes a parameter",
        ],
        correctAnswer: 2,
        explanation:
            "When JavaScript reaches return, the function immediately ends, so later code in that function is not executed.",
        faQuestion:
            "بعد از دستور return در همان تابع چه اتفاقی برای کد بعد از آن می‌افتد؟",
        faOptions: [
            "قبل از return اجرا می‌شود",
            "دو بار اجرا می‌شود",
            "اجرا نمی‌شود",
            "به یک پارامتر تبدیل می‌شود",
        ],
        faExplanation:
            "وقتی JavaScript به return می‌رسد، اجرای تابع بلافاصله تمام می‌شود و کد بعد از آن اجرا نمی‌شود.",
    },
    {
        id: 198,
        lessonId: 19,
        difficulty: "hard",
        question: "What will this code print?\n\nfunction isAdult(age) {\n    return age &gt;= 18;\n}\n\nconsole.log(isAdult(20));",
        options: [
            "20",
            "18",
            "false",
            "true",
        ],
        correctAnswer: 3,
        explanation:
            "20 is greater than or equal to 18, so the comparison returns true.",
        faQuestion:
            "کد زیر چه مقداری را نمایش می‌دهد؟\n\nfunction isAdult(age) {\n    return age &gt;= 18;\n}\n\nconsole.log(isAdult(20));",
        faOptions: [
            "20",
            "18",
            "false",
            "true",
        ],
        faExplanation:
            "عدد 20 بزرگ‌تر یا مساوی 18 است، بنابراین نتیجه مقایسه true خواهد بود.",
    },
    {
        id: 199,
        lessonId: 19,
        difficulty: "hard",
        question: "What is stored in result?\n\nfunction add(a, b) {\n    console.log(a + b);\n}\n\nlet result = add(10, 5);",
        options: [
            "15",
            "10",
            "Nothing from the console.log result",
            "5",
        ],
        correctAnswer: 2,
        explanation:
            "console.log() displays 15 but does not return that value to result, so result does not receive 15.",
        faQuestion:
            "چه مقداری در result ذخیره می‌شود؟\n\nfunction add(a, b) {\n    console.log(a + b);\n}\n\nlet result = add(10, 5);",
        faOptions: [
            "15",
            "10",
            "نتیجه‌ای از مقدار نمایش‌داده‌شده توسط console.log دریافت نمی‌کند",
            "5",
        ],
        faExplanation:
            "console.log() مقدار 15 را نمایش می‌دهد اما آن را به result برنمی‌گرداند، بنابراین result مقدار 15 را دریافت نمی‌کند.",
    },
    {
        id: 200,
        lessonId: 19,
        difficulty: "hard",
        question: "What will this code print?\n\nfunction test() {\n    return 10;\n    console.log(\"Hello!\");\n}\n\ntest();",
        options: [
            "10 only",
            "Hello! only",
            "10 and Hello!",
            "Nothing",
        ],
        correctAnswer: 0,
        explanation:
            "The function returns 10 and immediately ends, so the console.log statement after return never runs.",
        faQuestion:
            "کد زیر چه چیزی را نمایش می‌دهد؟\n\nfunction test() {\n    return 10;\n    console.log(\"Hello!\");\n}\n\ntest();",
        faOptions: [
            "فقط 10",
            "فقط Hello!",
            "10 و Hello!",
            "هیچ چیزی",
        ],
        explanation:
            "تابع مقدار 10 را برمی‌گرداند و بلافاصله تمام می‌شود، بنابراین دستور console.log بعد از return اجرا نمی‌شود.",
    },

    {
        id: 191,
        lessonId: 20,
        difficulty: "easy",
        question: "What is a function expression in JavaScript?",
        options: [
            "A function stored in a variable",
            "A loop stored in a variable",
            "A condition stored in a variable",
            "A string stored in a function",
        ],
        correctAnswer: 0,
        explanation:
            "A function expression creates a function and assigns it to a variable.",
        faQuestion: "Function Expression در JavaScript چیست؟",
        faOptions: [
            "تابعی که داخل یک متغیر ذخیره شده است",
            "حلقه‌ای که داخل یک متغیر ذخیره شده است",
            "شرطی که داخل یک متغیر ذخیره شده است",
            "رشته‌ای که داخل یک تابع ذخیره شده است",
        ],
        faExplanation:
            "در Function Expression یک تابع ساخته می‌شود و داخل یک متغیر قرار می‌گیرد.",
    },
    {
        id: 192,
        lessonId: 20,
        difficulty: "easy",
        question: `How do you call this function expression?

const greet = function() {
    console.log("Hello!");
};`,
        options: [
            "greet",
            "greet()",
            "function greet()",
            "call(greet)",
        ],
        correctAnswer: 1,
        explanation:
            "The function is stored in greet, and parentheses are used to call it.",
        faQuestion: `چگونه Function Expression زیر را فراخوانی می‌کنیم؟

const greet = function() {
    console.log("Hello!");
};`,
        faOptions: [
            "greet",
            "greet()",
            "function greet()",
            "call(greet)",
        ],
        faExplanation:
            "تابع داخل greet ذخیره شده است و برای فراخوانی آن باید از پرانتز استفاده کنیم.",
    },
    {
        id: 193,
        lessonId: 20,
        difficulty: "easy",
        question:
            "Which keyword can be used to store a function expression in a variable that can be reassigned?",
        options: [
            "const",
            "let",
            "return",
            "function",
        ],
        correctAnswer: 1,
        explanation:
            "A function expression can be assigned to a let variable, and let variables can be reassigned.",
        faQuestion:
            "کدام کلمه کلیدی می‌تواند برای ذخیره Function Expression در متغیری استفاده شود که قابل تغییر مقدار است؟",
        faOptions: [
            "const",
            "let",
            "return",
            "function",
        ],
        faExplanation:
            "Function Expression را می‌توان داخل متغیر let ذخیره کرد و مقدار متغیرهای let قابل تغییر است.",
    },
    {
        id: 194,
        lessonId: 20,
        difficulty: "medium",
        question: `What will this code print?

const add = function(a, b) {
    return a + b;
};

console.log(add(10, 5));`,
        options: [
            "5",
            "10",
            "15",
            "105",
        ],
        correctAnswer: 2,
        explanation:
            "The function expression returns 10 + 5, which is 15.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const add = function(a, b) {
    return a + b;
};

console.log(add(10, 5));`,
        faOptions: [
            "5",
            "10",
            "15",
            "105",
        ],
        faExplanation:
            "Function Expression مقدار 10 + 5 را برمی‌گرداند که برابر با 15 است.",
    },
    {
        id: 195,
        lessonId: 20,
        difficulty: "medium",
        question:
            "What is the key structural difference between a function declaration and a function expression?",
        options: [
            "A declaration stores a function in a variable, while an expression cannot",
            "A declaration uses parameters, while an expression cannot",
            "A declaration defines the function directly, while an expression assigns the function to a variable",
            "A declaration can return values, while an expression cannot",
        ],
        correctAnswer: 2,
        explanation:
            "A function declaration defines a named function directly, while a function expression assigns a function to a variable.",
        faQuestion:
            "تفاوت ساختاری اصلی بین Function Declaration و Function Expression چیست؟",
        faOptions: [
            "Declaration تابع را داخل متغیر ذخیره می‌کند اما Expression نمی‌تواند",
            "Declaration از پارامتر استفاده می‌کند اما Expression نمی‌تواند",
            "Declaration تابع را مستقیماً تعریف می‌کند اما Expression تابع را به یک متغیر اختصاص می‌دهد",
            "Declaration می‌تواند مقدار برگرداند اما Expression نمی‌تواند",
        ],
        faExplanation:
            "در Function Declaration تابع مستقیماً تعریف می‌شود، اما در Function Expression تابع داخل یک متغیر قرار می‌گیرد.",
    },
    {
        id: 196,
        lessonId: 20,
        difficulty: "medium",
        question: `What happens when this code runs?

sayHello();

const sayHello = function() {
    console.log("Hello!");
};`,
        options: [
            "It prints Hello!",
            "It calls the function twice",
            "It causes an error because sayHello is not initialized yet",
            "It creates a new function automatically",
        ],
        correctAnswer: 2,
        explanation:
            "The function expression has not been assigned to sayHello when the call is reached, so the call causes an error.",
        faQuestion: `وقتی کد زیر اجرا شود چه اتفاقی می‌افتد؟

sayHello();

const sayHello = function() {
    console.log("Hello!");
};`,
        faOptions: [
            "Hello! را نمایش می‌دهد",
            "تابع را دو بار اجرا می‌کند",
            "خطا ایجاد می‌شود زیرا sayHello هنوز مقداردهی نشده است",
            "به‌صورت خودکار یک تابع جدید ایجاد می‌کند",
        ],
        faExplanation:
            "هنگام رسیدن به فراخوانی، تابع هنوز داخل sayHello قرار نگرفته است و همین باعث خطا می‌شود.",
    },
    {
        id: 197,
        lessonId: 20,
        difficulty: "hard",
        question: `What will this code print?

const greet = function(name) {
    return "Hello " + name;
};

console.log(greet("Ali"));`,
        options: [
            "Ali",
            "Hello",
            "Hello Ali",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The argument Ali is assigned to name, so the function returns Hello Ali.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const greet = function(name) {
    return "Hello " + name;
};

console.log(greet("Ali"));`,
        faOptions: [
            "Ali",
            "Hello",
            "Hello Ali",
            "undefined",
        ],
        faExplanation:
            "مقدار Ali به پارامتر name داده می‌شود و تابع رشته Hello Ali را برمی‌گرداند.",
    },
    {
        id: 198,
        lessonId: 20,
        difficulty: "hard",
        question: `What will this code print?

const calculate = function(a, b) {
    return a + b;
};

let first = calculate(5, 10);
let second = calculate(first, 5);
console.log(second);`,
        options: [
            "10",
            "15",
            "20",
            "25",
        ],
        correctAnswer: 2,
        explanation:
            "The first call returns 15, then calculate(15, 5) returns 20.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const calculate = function(a, b) {
    return a + b;
};

let first = calculate(5, 10);
let second = calculate(first, 5);
console.log(second);`,
        faOptions: [
            "10",
            "15",
            "20",
            "25",
        ],
        faExplanation:
            "فراخوانی اول مقدار 15 را برمی‌گرداند و سپس calculate(15, 5) مقدار 20 را برمی‌گرداند.",
    },
    {
        id: 199,
        lessonId: 20,
        difficulty: "hard",
        question:
            "Which statement about a function expression stored in a const variable is true?",
        options: [
            "The function can never be called",
            "The variable cannot be reassigned to another value",
            "The function cannot have parameters",
            "The function cannot return a value",
        ],
        correctAnswer: 1,
        explanation:
            "A const variable cannot be reassigned after initialization, but the function stored in it can still be called, receive parameters, and return values.",
        faQuestion:
            "کدام عبارت درباره Function Expression ذخیره‌شده در یک متغیر const درست است؟",
        faOptions: [
            "تابع هرگز قابل فراخوانی نیست",
            "متغیر را نمی‌توان به مقدار دیگری اختصاص داد",
            "تابع نمی‌تواند پارامتر داشته باشد",
            "تابع نمی‌تواند مقدار برگرداند",
        ],
        faExplanation:
            "متغیر const پس از مقداردهی قابل اختصاص دادن به مقدار دیگری نیست، اما تابع همچنان قابل فراخوانی است و می‌تواند پارامتر و return داشته باشد.",
    },
    {
        id: 200,
        lessonId: 20,
        difficulty: "hard",
        question: `What will this code print?

const getValue = function() {
    return 10;
};

console.log(getValue() + getValue());`,
        options: [
            "10",
            "20",
            "100",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "Each call to getValue() returns 10, so 10 + 10 equals 20.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const getValue = function() {
    return 10;
};

console.log(getValue() + getValue());`,
        faOptions: [
            "10",
            "20",
            "100",
            "undefined",
        ],
        faExplanation:
            "هر بار فراخوانی getValue() مقدار 10 را برمی‌گرداند، بنابراین 10 + 10 برابر با 20 است.",
    },

    {
        id: 201,
        lessonId: 21,
        difficulty: "easy",
        question: "What is an arrow function?",
        options: [
            "A shorter way to write a function expression",
            "A special type of loop",
            "A way to create an object",
            "A replacement for variables",
        ],
        correctAnswer: 0,
        explanation:
            "An arrow function provides a shorter syntax for writing a function expression.",
        faQuestion: "Arrow Function چیست؟",
        faOptions: [
            "روشی کوتاه‌تر برای نوشتن Function Expression",
            "نوع خاصی از حلقه",
            "روشی برای ساختن Object",
            "جایگزینی برای متغیرها",
        ],
        faExplanation:
            "Arrow Function سینتکس کوتاه‌تری برای نوشتن Function Expression فراهم می‌کند.",
    },
    {
        id: 202,
        lessonId: 21,
        difficulty: "easy",
        question: "Which syntax correctly creates an arrow function with no parameters?",
        options: [
            "function => ()",
            "() => {}",
            "function() => {}",
            "=> function()",
        ],
        correctAnswer: 1,
        explanation:
            "() => {} is the correct arrow function syntax when there are no parameters.",
        faQuestion: "کدام سینتکس یک Arrow Function بدون پارامتر را به‌درستی ایجاد می‌کند؟",
        faOptions: [
            "function => ()",
            "() => {}",
            "function() => {}",
            "=> function()",
        ],
        faExplanation:
            "ساختار () => {} سینتکس صحیح Arrow Function بدون پارامتر است.",
    },
    {
        id: 203,
        lessonId: 21,
        difficulty: "easy",
        question: `How do you call this arrow function?

const greet = () => {
    console.log("Hello!");
};`,
        options: [
            "greet",
            "greet()",
            "() => greet",
            "call.greet",
        ],
        correctAnswer: 1,
        explanation:
            "The function is stored in greet, so parentheses are used to call it.",
        faQuestion: `چگونه Arrow Function زیر را فراخوانی می‌کنیم؟

const greet = () => {
    console.log("Hello!");
};`,
        faOptions: [
            "greet",
            "greet()",
            "() => greet",
            "call.greet",
        ],
        faExplanation:
            "تابع داخل greet ذخیره شده است، بنابراین برای فراخوانی آن از پرانتز استفاده می‌کنیم.",
    },
    {
        id: 204,
        lessonId: 21,
        difficulty: "medium",
        question: `What will this code print?

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));`,
        options: [
            "10",
            "15",
            "50",
            "105",
        ],
        correctAnswer: 1,
        explanation:
            "The arrow function returns 10 + 5, which is 15.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));`,
        faOptions: [
            "10",
            "15",
            "50",
            "105",
        ],
        faExplanation:
            "Arrow Function حاصل 10 + 5 را برمی‌گرداند که برابر با 15 است.",
    },
    {
        id: 205,
        lessonId: 21,
        difficulty: "medium",
        question: "When an arrow function has only one parameter, what can you do with the parameter's parentheses?",
        options: [
            "They must always be replaced with brackets",
            "They can be omitted",
            "They must contain a second parameter",
            "They must be replaced with curly braces",
        ],
        correctAnswer: 1,
        explanation:
            "For an arrow function with exactly one parameter, the parameter parentheses can be omitted.",
        faQuestion: "وقتی Arrow Function فقط یک پارامتر دارد، با پرانتز پارامتر چه کاری می‌توان انجام داد؟",
        faOptions: [
            "باید همیشه با براکت جایگزین شوند",
            "می‌توان آن‌ها را حذف کرد",
            "باید یک پارامتر دوم داخل آن‌ها قرار بگیرد",
            "باید با آکولاد جایگزین شوند",
        ],
        faExplanation:
            "در Arrow Function که دقیقاً یک پارامتر دارد، می‌توان پرانتز پارامتر را حذف کرد.",
    },
    {
        id: 206,
        lessonId: 21,
        difficulty: "medium",
        question: `What will this code print?

const double = number => {
    return number * 2;
};

console.log(double(5));`,
        options: [
            "5",
            "7",
            "10",
            "25",
        ],
        correctAnswer: 2,
        explanation:
            "The function receives 5 and returns 5 × 2, which is 10.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const double = number => {
    return number * 2;
};

console.log(double(5));`,
        faOptions: [
            "5",
            "7",
            "10",
            "25",
        ],
        faExplanation:
            "تابع مقدار 5 را دریافت می‌کند و 5 × 2 را برمی‌گرداند که برابر با 10 است.",
    },
    {
        id: 207,
        lessonId: 21,
        difficulty: "hard",
        question: `What will this code print?

const add = (a, b) => a + b;

console.log(add(7, 3));`,
        options: [
            "4",
            "10",
            "21",
            "73",
        ],
        correctAnswer: 1,
        explanation:
            "The expression a + b is implicitly returned, so 7 + 3 produces 10.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const add = (a, b) => a + b;

console.log(add(7, 3));`,
        faOptions: [
            "4",
            "10",
            "21",
            "73",
        ],
        faExplanation:
            "عبارت a + b به‌صورت ضمنی برگردانده می‌شود، بنابراین 7 + 3 برابر با 10 است.",
    },
    {
        id: 208,
        lessonId: 21,
        difficulty: "hard",
        question: `Which arrow function correctly returns the result of multiplying a and b?

const multiply = ...`,
        options: [
            "(a, b) => a * b",
            "(a, b) => { a * b; }",
            "(a, b) => console.log(a * b)",
            "(a, b) => { a + b; }",
        ],
        correctAnswer: 0,
        explanation:
            "Without curly braces, the expression a * b is implicitly returned.",
        faQuestion: `کدام Arrow Function نتیجه ضرب a و b را به‌درستی برمی‌گرداند؟

const multiply = ...`,
        faOptions: [
            "(a, b) => a * b",
            "(a, b) => { a * b; }",
            "(a, b) => console.log(a * b)",
            "(a, b) => { a + b; }",
        ],
        faExplanation:
            "وقتی آکولاد استفاده نمی‌شود، عبارت a * b به‌صورت ضمنی برگردانده می‌شود.",
    },
    {
        id: 209,
        lessonId: 21,
        difficulty: "hard",
        question: `What is the difference between these two arrow functions?

const first = (a, b) => a + b;

const second = (a, b) => {
    return a + b;
};`,
        options: [
            "They return different values",
            "Only the second one can receive parameters",
            "They produce the same result, but the first uses an implicit return",
            "Only the first one can be called",
        ],
        correctAnswer: 2,
        explanation:
            "Both functions return a + b. The first uses implicit return, while the second explicitly uses return.",
        faQuestion: `تفاوت دو Arrow Function زیر چیست؟

const first = (a, b) => a + b;

const second = (a, b) => {
    return a + b;
};`,
        faOptions: [
            "مقدارهای متفاوتی برمی‌گردانند",
            "فقط تابع دوم می‌تواند پارامتر دریافت کند",
            "نتیجه یکسانی دارند، اما اولی از implicit return استفاده می‌کند",
            "فقط تابع اول قابل فراخوانی است",
        ],
        faExplanation:
            "هر دو تابع مقدار a + b را برمی‌گردانند؛ اولی از implicit return و دومی از return صریح استفاده می‌کند.",
    },
    {
        id: 210,
        lessonId: 21,
        difficulty: "hard",
        question: `What will this code print?

const multiply = (a, b) => {
    return a * b;
};

let result = multiply(4, 5);
console.log(result + 10);`,
        options: [
            "9",
            "20",
            "25",
            "30",
        ],
        correctAnswer: 2,
        explanation:
            "multiply(4, 5) returns 20, and adding 10 produces 30.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

const multiply = (a, b) => {
    return a * b;
};

let result = multiply(4, 5);
console.log(result + 10);`,
        faOptions: [
            "9",
            "20",
            "25",
            "30",
        ],
        explanation:
            "تابع multiply(4, 5) مقدار 20 را برمی‌گرداند و با اضافه کردن 10 نتیجه 30 می‌شود.",
        faExplanation:
            "تابع multiply(4, 5) مقدار 20 را برمی‌گرداند و با اضافه کردن 10 نتیجه 30 می‌شود.",
    },

    {
        id: 211,
        lessonId: 22,
        difficulty: "easy",
        question: "What does scope determine in JavaScript?",
        options: [
            "Where a variable can be accessed",
            "How many times a function runs",
            "How quickly a variable is created",
            "What type of loop is used",
        ],
        correctAnswer: 0,
        explanation:
            "Scope determines where a variable can be accessed in JavaScript code.",
        faQuestion: "Scope در JavaScript چه چیزی را مشخص می‌کند؟",
        faOptions: [
            "اینکه یک متغیر در کجا قابل دسترسی است",
            "اینکه یک تابع چند بار اجرا می‌شود",
            "اینکه یک متغیر با چه سرعتی ایجاد می‌شود",
            "اینکه از چه نوع حلقه‌ای استفاده می‌شود",
        ],
        faExplanation:
            "Scope مشخص می‌کند که یک متغیر در کدام قسمت از کد JavaScript قابل دسترسی است.",
    },
    {
        id: 212,
        lessonId: 22,
        difficulty: "easy",
        question: "What is a local variable?",
        options: [
            "A variable created inside a function",
            "A variable that can only store numbers",
            "A variable created by JavaScript automatically",
            "A variable that can only be used in loops",
        ],
        correctAnswer: 0,
        explanation:
            "A variable created inside a function is a local variable of that function.",
        faQuestion: "Local Variable یا متغیر محلی چیست؟",
        faOptions: [
            "متغیری که داخل یک تابع ایجاد شده است",
            "متغیری که فقط می‌تواند عدد ذخیره کند",
            "متغیری که JavaScript به‌صورت خودکار ایجاد می‌کند",
            "متغیری که فقط داخل حلقه‌ها قابل استفاده است",
        ],
        faExplanation:
            "متغیری که داخل یک تابع ایجاد شود، متغیر محلی همان تابع محسوب می‌شود.",
    },
    {
        id: 213,
        lessonId: 22,
        difficulty: "easy",
        question: `What will this code print?

function showName() {
    let name = "Ali";
    console.log(name);
}

showName();`,
        options: [
            "Ali",
            "name",
            "undefined",
            "An error",
        ],
        correctAnswer: 0,
        explanation:
            "name is available inside showName, so console.log(name) prints Ali.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function showName() {
    let name = "Ali";
    console.log(name);
}

showName();`,
        faOptions: [
            "Ali",
            "name",
            "undefined",
            "خطا",
        ],
        faExplanation:
            "متغیر name داخل showName در دسترس است، بنابراین console.log(name) مقدار Ali را نمایش می‌دهد.",
    },
    {
        id: 214,
        lessonId: 22,
        difficulty: "medium",
        question: `What happens when this code runs?

function showName() {
    let name = "Ali";
}

console.log(name);`,
        options: [
            "It prints Ali",
            "It prints name",
            "It causes an error because name is local to the function",
            "It creates another name variable",
        ],
        correctAnswer: 2,
        explanation:
            "name was created inside showName, so code outside the function cannot directly access it.",
        faQuestion: `وقتی کد زیر اجرا شود چه اتفاقی می‌افتد؟

function showName() {
    let name = "Ali";
}

console.log(name);`,
        faOptions: [
            "Ali را نمایش می‌دهد",
            "name را نمایش می‌دهد",
            "خطا ایجاد می‌شود زیرا name متغیر محلی تابع است",
            "یک متغیر name دیگر ایجاد می‌کند",
        ],
        faExplanation:
            "متغیر name داخل showName ایجاد شده است، بنابراین کد خارج از تابع نمی‌تواند مستقیماً به آن دسترسی داشته باشد.",
    },
    {
        id: 215,
        lessonId: 22,
        difficulty: "medium",
        question: `What will this code print?

let score = 100;

function showScore() {
    let score = 50;
    console.log(score);
}

showScore();
console.log(score);`,
        options: [
            "100 then 50",
            "50 then 100",
            "50 then 50",
            "100 then 100",
        ],
        correctAnswer: 1,
        explanation:
            "The function uses its local score of 50, while the outer score remains 100.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let score = 100;

function showScore() {
    let score = 50;
    console.log(score);
}

showScore();
console.log(score);`,
        faOptions: [
            "100 سپس 50",
            "50 سپس 100",
            "50 سپس 50",
            "100 سپس 100",
        ],
        faExplanation:
            "تابع از score محلی با مقدار 50 استفاده می‌کند، در حالی که score بیرون از تابع همچنان 100 است.",
    },
    {
        id: 216,
        lessonId: 22,
        difficulty: "medium",
        question: `What will this code print?

let username = "Ali";

function showUser() {
    console.log(username);
}

showUser();`,
        options: [
            "Ali",
            "username",
            "undefined",
            "An error",
        ],
        correctAnswer: 0,
        explanation:
            "The function can access username because username was created in the outer scope.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let username = "Ali";

function showUser() {
    console.log(username);
}

showUser();`,
        faOptions: [
            "Ali",
            "username",
            "undefined",
            "خطا",
        ],
        faExplanation:
            "تابع می‌تواند به username دسترسی داشته باشد زیرا این متغیر در Scope بیرونی ایجاد شده است.",
    },
    {
        id: 217,
        lessonId: 22,
        difficulty: "hard",
        question: `What will this code print?

let value = 10;

function test() {
    let value = 20;
    console.log(value);
}

test();
console.log(value);`,
        options: [
            "10 then 20",
            "20 then 10",
            "20 then 20",
            "10 then 10",
        ],
        correctAnswer: 1,
        explanation:
            "The local value inside test is 20, while the outer value remains 10.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let value = 10;

function test() {
    let value = 20;
    console.log(value);
}

test();
console.log(value);`,
        faOptions: [
            "10 سپس 20",
            "20 سپس 10",
            "20 سپس 20",
            "10 سپس 10",
        ],
        faExplanation:
            "مقدار محلی value داخل test برابر 20 است، در حالی که value بیرون از تابع همچنان 10 باقی می‌ماند.",
    },
    {
        id: 218,
        lessonId: 22,
        difficulty: "hard",
        question: `What will this code print?

let message = "Hello";

function greet() {
    let message = "Hi";
    console.log(message);
}

greet();`,
        options: [
            "Hello",
            "Hi",
            "message",
            "An error",
        ],
        correctAnswer: 1,
        explanation:
            "The function has its own local message variable, so console.log uses Hi.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let message = "Hello";

function greet() {
    let message = "Hi";
    console.log(message);
}

greet();`,
        faOptions: [
            "Hello",
            "Hi",
            "message",
            "خطا",
        ],
        faExplanation:
            "تابع message محلی خودش را دارد، بنابراین console.log مقدار Hi را استفاده می‌کند.",
    },
    {
        id: 219,
        lessonId: 22,
        difficulty: "hard",
        question: `Which statement is true?

let age = 25;

function showAge() {
    let name = "Ali";
    console.log(age);
}`,
        options: [
            "The function can access age, but code outside cannot directly access name",
            "The function cannot access age",
            "Both age and name are only available inside the function",
            "Code outside can always access name",
        ],
        correctAnswer: 0,
        explanation:
            "The function can access the outer age variable, while name is local to the function.",
        faQuestion: `کدام عبارت درست است؟

let age = 25;

function showAge() {
    let name = "Ali";
    console.log(age);
}`,
        faOptions: [
            "تابع می‌تواند به age دسترسی داشته باشد، اما کد بیرون مستقیماً به name دسترسی ندارد",
            "تابع نمی‌تواند به age دسترسی داشته باشد",
            "هر دو age و name فقط داخل تابع در دسترس هستند",
            "کد بیرون همیشه می‌تواند به name دسترسی داشته باشد",
        ],
        faExplanation:
            "تابع می‌تواند به متغیر بیرونی age دسترسی داشته باشد، اما name متغیر محلی تابع است.",
    },
    {
        id: 220,
        lessonId: 22,
        difficulty: "hard",
        question: `What will this code print?

let score = 100;

function calculate() {
    let score = 40;
    return score + 10;
}

console.log(calculate());
console.log(score);`,
        options: [
            "50 then 100",
            "110 then 40",
            "100 then 50",
            "40 then 100",
        ],
        correctAnswer: 0,
        explanation:
            "calculate uses its local score of 40 and returns 50. The outer score remains 100.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let score = 100;

function calculate() {
    let score = 40;
    return score + 10;
}

console.log(calculate());
console.log(score);`,
        faOptions: [
            "50 سپس 100",
            "110 سپس 40",
            "100 سپس 50",
            "40 سپس 100",
        ],
        faExplanation:
            "تابع از score محلی با مقدار 40 استفاده می‌کند و 50 را برمی‌گرداند. مقدار score بیرون از تابع همچنان 100 است.",
    },

    {
        id: 221,
        lessonId: 23,
        difficulty: "easy",
        question: "What is a callback function?",
        options: [
            "A function passed to another function",
            "A variable that stores a number",
            "A function that can never be called",
            "A loop that repeats code",
        ],
        correctAnswer: 0,
        explanation:
            "A callback is a function passed to another function so it can be called by that function.",
        faQuestion: "Callback Function چیست؟",
        faOptions: [
            "تابعی که به تابع دیگری داده می‌شود",
            "متغیری که یک عدد ذخیره می‌کند",
            "تابعی که هیچ‌وقت نمی‌توان آن را اجرا کرد",
            "حلقه‌ای که کد را تکرار می‌کند",
        ],
        faExplanation:
            "Callback تابعی است که به تابع دیگری داده می‌شود تا آن تابع بتواند آن را اجرا کند.",
    },
    {
        id: 222,
        lessonId: 23,
        difficulty: "easy",
        question: "What does a Higher-Order Function do?",
        options: [
            "It only works with numbers",
            "It receives or returns a function",
            "It always creates a loop",
            "It can only print messages",
        ],
        correctAnswer: 1,
        explanation:
            "A Higher-Order Function receives another function as an argument or returns a function.",
        faQuestion: "Higher-Order Function چه کاری انجام می‌دهد؟",
        faOptions: [
            "فقط با عددها کار می‌کند",
            "یک تابع را دریافت یا برمی‌گرداند",
            "همیشه یک حلقه ایجاد می‌کند",
            "فقط می‌تواند پیام نمایش دهد",
        ],
        faExplanation:
            "Higher-Order Function تابعی است که یک تابع دیگر را دریافت می‌کند یا یک تابع را برمی‌گرداند.",
    },
    {
        id: 223,
        lessonId: 23,
        difficulty: "easy",
        question: `What will this code print?

function greet() {
    console.log("Hello!");
}

function run(fn) {
    fn();
}

run(greet);`,
        options: [
            "Nothing",
            "greet",
            "Hello!",
            "fn",
        ],
        correctAnswer: 2,
        explanation:
            "greet is passed to run and then called inside run, so it prints Hello!.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet() {
    console.log("Hello!");
}

function run(fn) {
    fn();
}

run(greet);`,
        faOptions: [
            "هیچ چیزی",
            "greet",
            "Hello!",
            "fn",
        ],
        faExplanation:
            "تابع greet به run داده می‌شود و سپس داخل run اجرا می‌شود، بنابراین Hello! نمایش داده می‌شود.",
    },
    {
        id: 224,
        lessonId: 23,
        difficulty: "easy",
        question: "Which code passes the function itself as a callback?",
        options: [
            "run(sayHello)",
            "run(sayHello())",
            "run(\"sayHello\")",
            "run(sayHello + 1)",
        ],
        correctAnswer: 0,
        explanation:
            "run(sayHello) passes the function itself without executing it first.",
        faQuestion: "کدام کد خود تابع را به‌عنوان Callback ارسال می‌کند؟",
        faOptions: [
            "run(sayHello)",
            "run(sayHello())",
            "run(\"sayHello\")",
            "run(sayHello + 1)",
        ],
        faExplanation:
            "در run(sayHello) خود تابع بدون اجرای فوری آن به تابع دیگر داده می‌شود.",
    },
    {
        id: 225,
        lessonId: 23,
        difficulty: "medium",
        question: `What will this code print?

function execute(callback) {
    callback();
}

execute(() => {
    console.log("Done!");
});`,
        options: [
            "callback",
            "Done!",
            "execute",
            "Nothing",
        ],
        correctAnswer: 1,
        explanation:
            "The arrow function is passed as the callback and execute calls it, so Done! is printed.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function execute(callback) {
    callback();
}

execute(() => {
    console.log("Done!");
});`,
        faOptions: [
            "callback",
            "Done!",
            "execute",
            "هیچ چیزی",
        ],
        faExplanation:
            "تابع Arrow به‌عنوان Callback ارسال می‌شود و execute آن را اجرا می‌کند، بنابراین Done! نمایش داده می‌شود.",
    },
    {
        id: 226,
        lessonId: 23,
        difficulty: "medium",
        question: `What will this code print?

function process(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Done!");
}

process("Ali", finish);`,
        options: [
            "Done! then Hello Ali",
            "Hello Ali then Done!",
            "Ali then Done!",
            "Hello then Ali",
        ],
        correctAnswer: 1,
        explanation:
            "process first prints Hello Ali and then calls finish, which prints Done!.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function process(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Done!");
}

process("Ali", finish);`,
        faOptions: [
            "Done! سپس Hello Ali",
            "Hello Ali سپس Done!",
            "Ali سپس Done!",
            "Hello سپس Ali",
        ],
        faExplanation:
            "تابع process ابتدا Hello Ali را نمایش می‌دهد و سپس finish را اجرا می‌کند که Done! را نمایش می‌دهد.",
    },
    {
        id: 227,
        lessonId: 23,
        difficulty: "medium",
        question: `What happens when this code runs?

function sayHello() {
    console.log("Hello!");
}

function run(action) {
    action();
}

run(sayHello());`,
        options: [
            "sayHello runs immediately before run receives its result",
            "sayHello is stored as a callback without running",
            "run is never called",
            "The code creates a loop",
        ],
        correctAnswer: 0,
        explanation:
            "sayHello() calls the function immediately, so its returned value is passed to run instead of the function itself.",
        faQuestion: `وقتی کد زیر اجرا شود چه اتفاقی می‌افتد؟

function sayHello() {
    console.log("Hello!");
}

function run(action) {
    action();
}

run(sayHello());`,
        faOptions: [
            "sayHello بلافاصله اجرا می‌شود و مقدار بازگشتی آن به run داده می‌شود",
            "sayHello بدون اجرا به‌عنوان Callback ذخیره می‌شود",
            "تابع run اصلاً اجرا نمی‌شود",
            "کد یک حلقه ایجاد می‌کند",
        ],
        faExplanation:
            "در sayHello() تابع بلافاصله اجرا می‌شود و مقدار بازگشتی آن به run داده می‌شود، نه خود تابع.",
    },
    {
        id: 228,
        lessonId: 23,
        difficulty: "hard",
        question: `What will this code print?

function run(action) {
    action();
    console.log("Finished");
}

function start() {
    console.log("Started");
}

run(start);`,
        options: [
            "Finished then Started",
            "Started then Finished",
            "Started only",
            "Finished only",
        ],
        correctAnswer: 1,
        explanation:
            "run first calls start, which prints Started, and then prints Finished.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function run(action) {
    action();
    console.log("Finished");
}

function start() {
    console.log("Started");
}

run(start);`,
        faOptions: [
            "Finished سپس Started",
            "Started سپس Finished",
            "فقط Started",
            "فقط Finished",
        ],
        faExplanation:
            "تابع run ابتدا start را اجرا می‌کند که Started را نمایش می‌دهد و سپس Finished را نمایش می‌دهد.",
    },
    {
        id: 229,
        lessonId: 23,
        difficulty: "hard",
        question: `What will this code print?

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function showResult(value) {
    console.log(value * 2);
}

calculate(5, 3, showResult);`,
        options: [
            "8",
            "10",
            "16",
            "20",
        ],
        correctAnswer: 2,
        explanation:
            "calculate produces 8, passes it to showResult, and showResult multiplies it by 2 to print 16.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function showResult(value) {
    console.log(value * 2);
}

calculate(5, 3, showResult);`,
        faOptions: [
            "8",
            "10",
            "16",
            "20",
        ],
        faExplanation:
            "تابع calculate مقدار 8 را ایجاد می‌کند و به showResult می‌دهد؛ سپس showResult آن را در 2 ضرب کرده و 16 را نمایش می‌دهد.",
    },
    {
        id: 230,
        lessonId: 23,
        difficulty: "hard",
        question: `What will this code print?

function createRunner(message) {
    return function() {
        console.log(message);
    };
}

let runner = createRunner("Hello!");
runner();`,
        options: [
            "Nothing",
            "createRunner",
            "Hello!",
            "message",
        ],
        correctAnswer: 2,
        explanation:
            "createRunner returns a function that remembers message, and runner() calls that returned function.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function createRunner(message) {
    return function() {
        console.log(message);
    };
}

let runner = createRunner("Hello!");
runner();`,
        faOptions: [
            "هیچ چیزی",
            "createRunner",
            "Hello!",
            "message",
        ],
        faExplanation:
            "تابع createRunner یک تابع را برمی‌گرداند و آن تابع مقدار message را نگه می‌دارد؛ با اجرای runner مقدار Hello! نمایش داده می‌شود.",
    },

    {
        id: 241,
        lessonId: 24,
        difficulty: "easy",
        question: "What is an Array mainly used for?",
        options: [
            "Storing multiple values in one variable",
            "Creating only Boolean values",
            "Repeating a function automatically",
            "Comparing two numbers",
        ],
        correctAnswer: 0,
        explanation:
            "An Array is used to store multiple values in a single variable.",
        faQuestion: "Array معمولاً برای چه کاری استفاده می‌شود؟",
        faOptions: [
            "ذخیره چند مقدار در یک متغیر",
            "ایجاد فقط مقدارهای Boolean",
            "اجرای خودکار یک تابع چند بار",
            "مقایسه دو عدد",
        ],
        faExplanation:
            "Array برای ذخیره چند مقدار در یک متغیر استفاده می‌شود.",
    },
    {
        id: 242,
        lessonId: 24,
        difficulty: "easy",
        question: "Which index does the first item in a JavaScript Array have?",
        options: [
            "1",
            "0",
            "-1",
            "2",
        ],
        correctAnswer: 1,
        explanation:
            "JavaScript Array indexes start at 0, so the first item has index 0.",
        faQuestion: "اولین مقدار در یک Array در JavaScript چه Indexای دارد؟",
        faOptions: [
            "1",
            "0",
            "-1",
            "2",
        ],
        faExplanation:
            "Indexهای Array در JavaScript از 0 شروع می‌شوند، بنابراین اولین مقدار Index شماره 0 دارد.",
    },
    {
        id: 243,
        lessonId: 24,
        difficulty: "easy",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]);`,
        options: [
            "Apple",
            "Orange",
            "Banana",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "Index 1 refers to the second item in the Array, which is Banana.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]);`,
        faOptions: [
            "Apple",
            "Orange",
            "Banana",
            "undefined",
        ],
        faExplanation:
            "Index شماره 1 به مقدار دوم Array اشاره می‌کند که Banana است.",
    },
    {
        id: 244,
        lessonId: 24,
        difficulty: "easy",
        question: `What will this code print?

let scores = [10, 20, 30];
console.log(scores[0]);`,
        options: [
            "10",
            "20",
            "30",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "The first item is stored at index 0, so scores[0] returns 10.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let scores = [10, 20, 30];
console.log(scores[0]);`,
        faOptions: [
            "10",
            "20",
            "30",
            "undefined",
        ],
        faExplanation:
            "اولین مقدار در Index شماره 0 قرار دارد، بنابراین scores[0] مقدار 10 را برمی‌گرداند.",
    },
    {
        id: 245,
        lessonId: 24,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
let position = 2;

console.log(fruits[position]);`,
        options: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The position variable contains 2, so fruits[position] accesses fruits[2], which is Orange.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
let position = 2;

console.log(fruits[position]);`,
        faOptions: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        faExplanation:
            "متغیر position مقدار 2 دارد، بنابراین fruits[position] به fruits[2] دسترسی پیدا می‌کند که Orange است.",
    },
    {
        id: 246,
        lessonId: 24,
        difficulty: "medium",
        question: `What will this code print?

const colors = ["Red", "Blue", "Green"];
colors[0] = "Yellow";

console.log(colors[0]);`,
        options: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
        ],
        correctAnswer: 2,
        explanation:
            "const prevents reassignment of the Array variable, but an existing Array item can still be changed.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const colors = ["Red", "Blue", "Green"];
colors[0] = "Yellow";

console.log(colors[0]);`,
        faOptions: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
        ],
        faExplanation:
            "const مانع تغییر خود متغیر به یک Array دیگر می‌شود، اما مقدارهای داخل Array همچنان قابل تغییر هستند.",
    },
    {
        id: 247,
        lessonId: 24,
        difficulty: "medium",
        question: `What will this code print?

let items = ["A", "B", "C"];
console.log(items[3]);`,
        options: [
            "A",
            "C",
            "undefined",
            "3",
        ],
        correctAnswer: 2,
        explanation:
            "The Array has indexes 0, 1, and 2, so index 3 does not exist and returns undefined.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let items = ["A", "B", "C"];
console.log(items[3]);`,
        faOptions: [
            "A",
            "C",
            "undefined",
            "3",
        ],
        faExplanation:
            "این Array فقط Indexهای 0، 1 و 2 را دارد، بنابراین Index شماره 3 وجود ندارد و undefined برگردانده می‌شود.",
    },
    {
        id: 248,
        lessonId: 24,
        difficulty: "medium",
        question: `What will this code print?

let data = ["Ali", 25, true];

console.log(data[2]);`,
        options: [
            "Ali",
            "25",
            "true",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The value at index 2 is the Boolean true.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let data = ["Ali", 25, true];

console.log(data[2]);`,
        faOptions: [
            "Ali",
            "25",
            "true",
            "undefined",
        ],
        faExplanation:
            "مقدار موجود در Index شماره 2، مقدار Boolean یعنی true است.",
    },
    {
        id: 249,
        lessonId: 24,
        difficulty: "hard",
        question: `What will this code print?

let numbers = [10, 20, 30, 40];
let first = 0;
let second = 2;

console.log(numbers[first] + numbers[second]);`,
        options: [
            "30",
            "40",
            "50",
            "60",
        ],
        correctAnswer: 2,
        explanation:
            "numbers[0] is 10 and numbers[2] is 30, so 10 + 30 equals 40.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [10, 20, 30, 40];
let first = 0;
let second = 2;

console.log(numbers[first] + numbers[second]);`,
        faOptions: [
            "30",
            "40",
            "50",
            "60",
        ],
        faExplanation:
            "numbers[0] مقدار 10 و numbers[2] مقدار 30 است، بنابراین 10 + 30 برابر با 40 می‌شود.",
    },
    {
        id: 250,
        lessonId: 24,
        difficulty: "hard",
        question: `What will this code print?

const values = ["A", "B", "C"];

values[1] = "X";
values[2] = "Y";

console.log(values[0] + values[1] + values[2]);`,
        options: [
            "ABC",
            "AXY",
            "AYX",
            "XYZ",
        ],
        correctAnswer: 1,
        explanation:
            "The Array starts as A, B, C and changes to A, X, Y, so concatenation produces AXY.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const values = ["A", "B", "C"];

values[1] = "X";
values[2] = "Y";

console.log(values[0] + values[1] + values[2]);`,
        faOptions: [
            "ABC",
            "AXY",
            "AYX",
            "XYZ",
        ],
        faExplanation:
            "آرایه ابتدا A، B و C دارد و سپس مقدارهای Indexهای 1 و 2 به X و Y تغییر می‌کنند، بنابراین نتیجه AXY است.",
    },

    {
        id: 251,
        lessonId: 25,
        difficulty: "easy",
        question: "What does the length property of an Array tell you?",
        options: [
            "The highest index",
            "The number of items",
            "The first index",
            "The last value",
        ],
        correctAnswer: 1,
        explanation:
            "The length property tells you how many items the Array contains.",
        faQuestion: "property مربوط به length در Array چه چیزی را مشخص می‌کند؟",
        faOptions: [
            "بزرگ‌ترین Index",
            "تعداد مقدارهای داخل Array",
            "اولین Index",
            "آخرین مقدار",
        ],
        faExplanation:
            "property مربوط به length تعداد مقدارهای موجود در Array را مشخص می‌کند.",
    },
    {
        id: 252,
        lessonId: 25,
        difficulty: "easy",
        question: `What will this code print?

let numbers = [10, 20, 30, 40];
console.log(numbers.length);`,
        options: [
            "3",
            "4",
            "40",
            "5",
        ],
        correctAnswer: 1,
        explanation:
            "The Array contains four items, so its length is 4.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [10, 20, 30, 40];
console.log(numbers.length);`,
        faOptions: [
            "3",
            "4",
            "40",
            "5",
        ],
        faExplanation:
            "این Array شامل چهار مقدار است، بنابراین length آن برابر 4 است.",
    },
    {
        id: 253,
        lessonId: 25,
        difficulty: "easy",
        question: "If an Array has a length of 5, what is its last valid index?",
        options: [
            "5",
            "4",
            "3",
            "6",
        ],
        correctAnswer: 1,
        explanation:
            "The last index is always one less than the length, so 5 - 1 equals 4.",
        faQuestion: "اگر length یک Array برابر 5 باشد، آخرین Index معتبر آن چیست؟",
        faOptions: [
            "5",
            "4",
            "3",
            "6",
        ],
        faExplanation:
            "آخرین Index همیشه یک واحد کمتر از length است، بنابراین 5 - 1 برابر 4 می‌شود.",
    },
    {
        id: 254,
        lessonId: 25,
        difficulty: "easy",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[fruits.length - 1]);`,
        options: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The length is 3, so length - 1 is index 2, which contains Orange.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[fruits.length - 1]);`,
        faOptions: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        faExplanation:
            "length برابر 3 است، بنابراین length - 1 برابر Index شماره 2 می‌شود که مقدار Orange را دارد.",
    },
    {
        id: 255,
        lessonId: 25,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
fruits[1] = "Mango";

console.log(fruits[1]);`,
        options: [
            "Apple",
            "Mango",
            "Banana",
            "Orange",
        ],
        correctAnswer: 1,
        explanation:
            "Index 1 originally contains Banana, but it is updated to Mango.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
fruits[1] = "Mango";

console.log(fruits[1]);`,
        faOptions: [
            "Apple",
            "Mango",
            "Banana",
            "Orange",
        ],
        faExplanation:
            "مقدار موجود در Index شماره 1 ابتدا Banana است، اما سپس به Mango تغییر می‌کند.",
    },
    {
        id: 256,
        lessonId: 25,
        difficulty: "medium",
        question: `What will this code print?

let scores = [10, 20, 30];
scores[0] = 100;
scores[2] = 300;

console.log(scores[0] + scores[2]);`,
        options: [
            "130",
            "300",
            "400",
            "330",
        ],
        correctAnswer: 2,
        explanation:
            "scores[0] becomes 100 and scores[2] becomes 300, so 100 + 300 equals 400.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let scores = [10, 20, 30];
scores[0] = 100;
scores[2] = 300;

console.log(scores[0] + scores[2]);`,
        faOptions: [
            "130",
            "300",
            "400",
            "330",
        ],
        faExplanation:
            "scores[0] به 100 و scores[2] به 300 تغییر می‌کنند، بنابراین 100 + 300 برابر 400 می‌شود.",
    },
    {
        id: 257,
        lessonId: 25,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
let position = 1;

fruits[position] = "Mango";

console.log(fruits[1]);`,
        options: [
            "Apple",
            "Banana",
            "Mango",
            "Orange",
        ],
        correctAnswer: 2,
        explanation:
            "position contains 1, so fruits[position] updates the item at index 1 to Mango.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
let position = 1;

fruits[position] = "Mango";

console.log(fruits[1]);`,
        faOptions: [
            "Apple",
            "Banana",
            "Mango",
            "Orange",
        ],
        faExplanation:
            "position مقدار 1 دارد، بنابراین fruits[position] مقدار Index شماره 1 را به Mango تغییر می‌دهد.",
    },
    {
        id: 258,
        lessonId: 25,
        difficulty: "medium",
        question: `What will this code print?

let colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[colors.length - 2]);`,
        options: [
            "Red",
            "Blue",
            "Green",
            "Yellow",
        ],
        correctAnswer: 2,
        explanation:
            "The length is 4, so length - 2 is index 2, which contains Green.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[colors.length - 2]);`,
        faOptions: [
            "Red",
            "Blue",
            "Green",
            "Yellow",
        ],
        faExplanation:
            "length برابر 4 است، بنابراین length - 2 برابر Index شماره 2 می‌شود که مقدار Green را دارد.",
    },
    {
        id: 259,
        lessonId: 25,
        difficulty: "hard",
        question: `What will this code print?

let numbers = [10, 20, 30];

numbers[5] = 60;

console.log(numbers.length);`,
        options: [
            "3",
            "5",
            "6",
            "60",
        ],
        correctAnswer: 2,
        explanation:
            "Assigning a value at index 5 makes the highest index 5, so the Array length becomes 6.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [10, 20, 30];

numbers[5] = 60;

console.log(numbers.length);`,
        faOptions: [
            "3",
            "5",
            "6",
            "60",
        ],
        faExplanation:
            "با قرار دادن مقدار در Index شماره 5، بزرگ‌ترین Index برابر 5 می‌شود و length برابر 6 خواهد بود.",
    },
    {
        id: 260,
        lessonId: 25,
        difficulty: "hard",
        question: `What will this code print?

const values = ["A", "B", "C", "D"];

values[1] = "X";
values[3] = "Y";

console.log(values[0] + values[1] + values[2] + values[3]);`,
        options: [
            "ABCD",
            "AXCY",
            "AXCD",
            "ABXY",
        ],
        correctAnswer: 1,
        explanation:
            "The values at indexes 1 and 3 become X and Y, producing A X C Y.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const values = ["A", "B", "C", "D"];

values[1] = "X";
values[3] = "Y";

console.log(values[0] + values[1] + values[2] + values[3]);`,
        faOptions: [
            "ABCD",
            "AXCY",
            "AXCD",
            "ABXY",
        ],
        faExplanation:
            "مقدارهای Indexهای 1 و 3 به X و Y تغییر می‌کنند، بنابراین نتیجه AXCY خواهد بود.",
    },

    {
        id: 261,
        lessonId: 26,
        difficulty: "easy",
        question: "Which method adds an item to the end of an Array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()",
        ],
        correctAnswer: 0,
        explanation:
            "push() adds one or more items to the end of an Array.",
        faQuestion: "کدام Method یک مقدار را به انتهای Array اضافه می‌کند؟",
        faOptions: [
            "push()",
            "pop()",
            "shift()",
            "unshift()",
        ],
        faExplanation:
            "push() یک یا چند مقدار را به انتهای Array اضافه می‌کند.",
    },
    {
        id: 262,
        lessonId: 26,
        difficulty: "easy",
        question: "Which method removes the last item from an Array?",
        options: [
            "shift()",
            "push()",
            "pop()",
            "unshift()",
        ],
        correctAnswer: 2,
        explanation:
            "pop() removes the last item from an Array.",
        faQuestion: "کدام Method آخرین مقدار Array را حذف می‌کند؟",
        faOptions: [
            "shift()",
            "push()",
            "pop()",
            "unshift()",
        ],
        faExplanation:
            "pop() آخرین مقدار Array را حذف می‌کند.",
    },
    {
        id: 263,
        lessonId: 26,
        difficulty: "easy",
        question: "Which method adds an item to the beginning of an Array?",
        options: [
            "pop()",
            "unshift()",
            "push()",
            "shift()",
        ],
        correctAnswer: 1,
        explanation:
            "unshift() adds one or more items to the beginning of an Array.",
        faQuestion: "کدام Method یک مقدار را به ابتدای Array اضافه می‌کند؟",
        faOptions: [
            "pop()",
            "unshift()",
            "push()",
            "shift()",
        ],
        faExplanation:
            "unshift() یک یا چند مقدار را به ابتدای Array اضافه می‌کند.",
    },
    {
        id: 264,
        lessonId: 26,
        difficulty: "easy",
        question: "Which method removes the first item from an Array?",
        options: [
            "shift()",
            "pop()",
            "push()",
            "unshift()",
        ],
        correctAnswer: 0,
        explanation:
            "shift() removes the first item from an Array.",
        faQuestion: "کدام Method اولین مقدار Array را حذف می‌کند؟",
        faOptions: [
            "shift()",
            "pop()",
            "push()",
            "unshift()",
        ],
        faExplanation:
            "shift() اولین مقدار Array را حذف می‌کند.",
    },
    {
        id: 265,
        lessonId: 26,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits[2]);`,
        options: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "push() adds Orange to the end, making it the item at index 2.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits[2]);`,
        faOptions: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        faExplanation:
            "push() مقدار Orange را به انتهای Array اضافه می‌کند، بنابراین Orange در Index شماره 2 قرار می‌گیرد.",
    },
    {
        id: 266,
        lessonId: 26,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
fruits.pop();

console.log(fruits.length);`,
        options: [
            "1",
            "2",
            "3",
            "Orange",
        ],
        correctAnswer: 1,
        explanation:
            "pop() removes Orange, leaving two items, so the Array length becomes 2.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
fruits.pop();

console.log(fruits.length);`,
        faOptions: [
            "1",
            "2",
            "3",
            "Orange",
        ],
        faExplanation:
            "pop() مقدار Orange را حذف می‌کند و دو مقدار باقی می‌ماند، بنابراین length برابر 2 می‌شود.",
    },
    {
        id: 267,
        lessonId: 26,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");

console.log(fruits[0]);`,
        options: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "unshift() adds Apple to the beginning, so it becomes the item at index 0.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");

console.log(fruits[0]);`,
        faOptions: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        faExplanation:
            "unshift() مقدار Apple را به ابتدای Array اضافه می‌کند، بنابراین Apple در Index شماره 0 قرار می‌گیرد.",
    },
    {
        id: 268,
        lessonId: 26,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
fruits.shift();

console.log(fruits[0]);`,
        options: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "shift() removes Apple, so Banana becomes the first item at index 0.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
fruits.shift();

console.log(fruits[0]);`,
        faOptions: [
            "Apple",
            "Banana",
            "Orange",
            "undefined",
        ],
        faExplanation:
            "shift() مقدار Apple را حذف می‌کند، بنابراین Banana به اولین مقدار در Index شماره 0 تبدیل می‌شود.",
    },
    {
        id: 269,
        lessonId: 26,
        difficulty: "hard",
        question: `What will this code print?

let numbers = [10, 20];

let result = numbers.push(30);

console.log(result);`,
        options: [
            "30",
            "2",
            "3",
            "[10, 20, 30]",
        ],
        correctAnswer: 2,
        explanation:
            "push() returns the new length of the Array. After adding 30, the length is 3.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [10, 20];

let result = numbers.push(30);

console.log(result);`,
        faOptions: [
            "30",
            "2",
            "3",
            "[10, 20, 30]",
        ],
        faExplanation:
            "push() طول جدید Array را برمی‌گرداند و بعد از اضافه شدن 30، طول Array برابر 3 است.",
    },
    {
        id: 270,
        lessonId: 26,
        difficulty: "hard",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.pop();

console.log(removed);
console.log(fruits.length);`,
        options: [
            "Apple and 2",
            "Orange and 2",
            "Orange and 3",
            "Banana and 2",
        ],
        correctAnswer: 1,
        explanation:
            "pop() returns Orange, and removing it leaves two items in the Array.",
        faQuestion: `کد زیر چه چیزهایی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.pop();

console.log(removed);
console.log(fruits.length);`,
        faOptions: [
            "Apple و 2",
            "Orange و 2",
            "Orange و 3",
            "Banana و 2",
        ],
        faExplanation:
            "pop() مقدار Orange را برمی‌گرداند و بعد از حذف آن، دو مقدار در Array باقی می‌ماند.",
    },

    {
        id: 271,
        lessonId: 27,
        difficulty: "easy",
        question: "What does includes() return when an Array contains the searched value?",
        options: [
            "true",
            "false",
            "The index",
            "The Array length",
        ],
        correctAnswer: 0,
        explanation:
            "includes() returns true when the searched value exists in the Array.",
        faQuestion: "اگر مقدار موردنظر داخل Array وجود داشته باشد، includes() چه مقداری برمی‌گرداند؟",
        faOptions: [
            "true",
            "false",
            "Index مقدار",
            "طول Array",
        ],
        faExplanation:
            "اگر مقدار موردنظر در Array وجود داشته باشد، includes() مقدار true را برمی‌گرداند.",
    },
    {
        id: 272,
        lessonId: 27,
        difficulty: "easy",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));`,
        options: [
            "false",
            "Banana",
            "true",
            "1",
        ],
        correctAnswer: 2,
        explanation:
            "Banana exists in the Array, so includes() returns true.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));`,
        faOptions: [
            "false",
            "Banana",
            "true",
            "1",
        ],
        faExplanation:
            "مقدار Banana در Array وجود دارد، بنابراین includes() مقدار true را برمی‌گرداند.",
    },
    {
        id: 273,
        lessonId: 27,
        difficulty: "easy",
        question: "Which loop gives you each Array value directly?",
        options: [
            "for...of",
            "if...else",
            "while...of",
            "for...in",
        ],
        correctAnswer: 0,
        explanation:
            "for...of iterates over the values of an Array directly.",
        faQuestion: "کدام Loop هر مقدار Array را مستقیماً در اختیار شما قرار می‌دهد؟",
        faOptions: [
            "for...of",
            "if...else",
            "while...of",
            "for...in",
        ],
        faExplanation:
            "for...of روی مقدارهای Array حرکت می‌کند و هر مقدار را مستقیماً در اختیار قرار می‌دهد.",
    },
    {
        id: 274,
        lessonId: 27,
        difficulty: "easy",
        question: `What will this code print?

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}`,
        options: [
            "0, 1, 2",
            "10, 20, 30",
            "3, 3, 3",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "for...of gives each Array value directly, so the loop prints 10, 20, and 30.",
        faQuestion: `کد زیر چه مقدارهایی را نمایش می‌دهد؟

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}`,
        faOptions: [
            "0، 1، 2",
            "10، 20، 30",
            "3، 3، 3",
            "undefined",
        ],
        faExplanation:
            "for...of هر مقدار Array را مستقیماً دریافت می‌کند، بنابراین 10، 20 و 30 نمایش داده می‌شوند.",
    },
    {
        id: 275,
        lessonId: 27,
        difficulty: "medium",
        question: `What will this code print?

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}`,
        options: [
            "0, 1, 2, 3",
            "10, 20, 30, 40",
            "10, 20, 30",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The loop visits indexes 0 through 3 and prints the values stored at those indexes.",
        faQuestion: `کد زیر چه مقدارهایی را نمایش می‌دهد؟

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}`,
        faOptions: [
            "0، 1، 2، 3",
            "10، 20، 30، 40",
            "10، 20، 30",
            "undefined",
        ],
        faExplanation:
            "حلقه Indexهای 0 تا 3 را بررسی می‌کند و مقدارهای ذخیره‌شده در آن‌ها یعنی 10، 20، 30 و 40 را نمایش می‌دهد.",
    },
    {
        id: 276,
        lessonId: 27,
        difficulty: "medium",
        question: `What will this code print?

let scores = [45, 80, 92, 60];

for (let score of scores) {
    if (score >= 60) {
        console.log(score);
    }
}`,
        options: [
            "45, 80, 92",
            "80, 92, 60",
            "45, 60",
            "All four scores",
        ],
        correctAnswer: 1,
        explanation:
            "Only scores greater than or equal to 60 satisfy the condition, so 80, 92, and 60 are printed.",
        faQuestion: `کد زیر چه مقدارهایی را نمایش می‌دهد؟

let scores = [45, 80, 92, 60];

for (let score of scores) {
    if (score >= 60) {
        console.log(score);
    }
}`,
        faOptions: [
            "45، 80، 92",
            "80، 92، 60",
            "45، 60",
            "هر چهار مقدار",
        ],
        faExplanation:
            "فقط مقدارهایی که بزرگ‌تر یا مساوی 60 هستند شرط را می‌گذرانند، بنابراین 80، 92 و 60 نمایش داده می‌شوند.",
    },
    {
        id: 277,
        lessonId: 27,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];

if (fruits.includes("Mango")) {
    console.log("Found");
} else {
    console.log("Not found");
}`,
        options: [
            "Found",
            "Mango",
            "Not found",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "Mango is not in the Array, so includes() returns false and the else branch runs.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];

if (fruits.includes("Mango")) {
    console.log("Found");
} else {
    console.log("Not found");
}`,
        faOptions: [
            "Found",
            "Mango",
            "Not found",
            "undefined",
        ],
        faExplanation:
            "مقدار Mango در Array وجود ندارد، بنابراین includes() مقدار false می‌دهد و بخش else اجرا می‌شود.",
    },
    {
        id: 278,
        lessonId: 27,
        difficulty: "medium",
        question: `What is wrong with this loop?

let numbers = [10, 20, 30];

for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}`,
        options: [
            "It starts at the wrong index",
            "It should use < instead of <=",
            "It needs push()",
            "It cannot use numbers[i]",
        ],
        correctAnswer: 1,
        explanation:
            "The loop should use i < numbers.length because the last valid index is one less than the length.",
        faQuestion: `مشکل Loop زیر چیست؟

let numbers = [10, 20, 30];

for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}`,
        faOptions: [
            "باید از Index دیگری شروع شود",
            "باید از < به‌جای <= استفاده شود",
            "به push() نیاز دارد",
            "نمی‌توان از numbers[i] استفاده کرد",
        ],
        faExplanation:
            "باید از i < numbers.length استفاده شود، زیرا آخرین Index معتبر یک واحد کمتر از length است.",
    },
    {
        id: 279,
        lessonId: 27,
        difficulty: "hard",
        question: `What will this code print?

let numbers = [5, 10, 15, 20];

for (let number of numbers) {
    if (number > 10) {
        console.log(number);
    }
}`,
        options: [
            "5, 10",
            "10, 15, 20",
            "15, 20",
            "5, 15, 20",
        ],
        correctAnswer: 2,
        explanation:
            "Only values strictly greater than 10 satisfy the condition, so 15 and 20 are printed.",
        faQuestion: `کد زیر چه مقدارهایی را نمایش می‌دهد؟

let numbers = [5, 10, 15, 20];

for (let number of numbers) {
    if (number > 10) {
        console.log(number);
    }
}`,
        faOptions: [
            "5، 10",
            "10، 15، 20",
            "15، 20",
            "5، 15، 20",
        ],
        faExplanation:
            "فقط مقدارهایی که به‌صورت strict بزرگ‌تر از 10 هستند شرط را می‌گذرانند، بنابراین 15 و 20 نمایش داده می‌شوند.",
    },
    {
        id: 280,
        lessonId: 27,
        difficulty: "hard",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];
let found = false;

for (let fruit of fruits) {
    if (fruit === "Orange") {
        found = true;
    }
}

console.log(found);`,
        options: [
            "false",
            "Orange",
            "true",
            "2",
        ],
        correctAnswer: 2,
        explanation:
            "The loop finds Orange and changes found from false to true.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];
let found = false;

for (let fruit of fruits) {
    if (fruit === "Orange") {
        found = true;
    }
}

console.log(found);`,
        faOptions: [
            "false",
            "Orange",
            "true",
            "2",
        ],
        faExplanation:
            "حلقه مقدار Orange را پیدا می‌کند و found را از false به true تغییر می‌دهد.",
    },

    {
        id: 281,
        lessonId: 28,
        difficulty: "easy",
        question: "Which Array method runs a callback once for every item?",
        options: [
            "forEach()",
            "filter()",
            "find()",
            "map()",
        ],
        correctAnswer: 0,
        explanation:
            "forEach() runs the provided callback once for every item in the Array.",
        faQuestion: "کدام متد Array یک Callback را برای هر مقدار یک بار اجرا می‌کند؟",
        faOptions: [
            "forEach()",
            "filter()",
            "find()",
            "map()",
        ],
        faExplanation:
            "forEach() تابع Callback را برای هر مقدار موجود در Array یک بار اجرا می‌کند.",
    },
    {
        id: 282,
        lessonId: 28,
        difficulty: "easy",
        question: "Which Array method creates a new Array from transformed values?",
        options: [
            "find()",
            "map()",
            "forEach()",
            "filter()",
        ],
        correctAnswer: 1,
        explanation:
            "map() creates a new Array containing the values returned by its callback.",
        faQuestion: "کدام متد Array یک Array جدید از مقدارهای تبدیل‌شده ایجاد می‌کند؟",
        faOptions: [
            "find()",
            "map()",
            "forEach()",
            "filter()",
        ],
        faExplanation:
            "map() یک Array جدید شامل مقدارهایی که Callback برمی‌گرداند ایجاد می‌کند.",
    },
    {
        id: 283,
        lessonId: 28,
        difficulty: "easy",
        question: "Which Array method keeps only items that satisfy a condition?",
        options: [
            "map()",
            "find()",
            "filter()",
            "forEach()",
        ],
        correctAnswer: 2,
        explanation:
            "filter() creates a new Array containing only the items whose callback returns true.",
        faQuestion: "کدام متد Array فقط مقدارهایی را نگه می‌دارد که یک شرط را قبول می‌کنند؟",
        faOptions: [
            "map()",
            "find()",
            "filter()",
            "forEach()",
        ],
        faExplanation:
            "filter() یک Array جدید شامل مقدارهایی ایجاد می‌کند که Callback آن‌ها true برمی‌گرداند.",
    },
    {
        id: 284,
        lessonId: 28,
        difficulty: "easy",
        question: "Which Array method returns the first item that satisfies a condition?",
        options: [
            "filter()",
            "map()",
            "find()",
            "forEach()",
        ],
        correctAnswer: 2,
        explanation:
            "find() returns the first item for which the callback returns true.",
        faQuestion: "کدام متد Array اولین مقدار مطابق یک شرط را برمی‌گرداند؟",
        faOptions: [
            "filter()",
            "map()",
            "find()",
            "forEach()",
        ],
        faExplanation:
            "find() اولین مقداری را برمی‌گرداند که Callback برای آن true برگرداند.",
    },
    {
        id: 285,
        lessonId: 28,
        difficulty: "medium",
        question: `What will this code print?

let numbers = [1, 2, 3];

let doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);`,
        options: [
            "[1, 2, 3]",
            "[2, 4, 6]",
            "[3, 4, 5]",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "map() doubles each value and creates the new Array [2, 4, 6].",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let numbers = [1, 2, 3];

let doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);`,
        faOptions: [
            "[1, 2, 3]",
            "[2, 4, 6]",
            "[3, 4, 5]",
            "undefined",
        ],
        faExplanation:
            "map() هر مقدار را دو برابر می‌کند و Array جدید [2, 4, 6] را می‌سازد.",
    },
    {
        id: 286,
        lessonId: 28,
        difficulty: "medium",
        question: `What will this code print?

let numbers = [10, 15, 20, 25];

let result = numbers.filter((number) => {
    return number >= 20;
});

console.log(result);`,
        options: [
            "[10, 15]",
            "[20, 25]",
            "[15, 20, 25]",
            "20",
        ],
        correctAnswer: 1,
        explanation:
            "filter() keeps the values that are greater than or equal to 20, producing [20, 25].",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [10, 15, 20, 25];

let result = numbers.filter((number) => {
    return number >= 20;
});

console.log(result);`,
        faOptions: [
            "[10, 15]",
            "[20, 25]",
            "[15, 20, 25]",
            "20",
        ],
        faExplanation:
            "filter() مقدارهای بزرگ‌تر یا مساوی 20 را نگه می‌دارد و نتیجه [20, 25] است.",
    },
    {
        id: 287,
        lessonId: 28,
        difficulty: "medium",
        question: `What will this code print?

let numbers = [10, 15, 20, 25];

let result = numbers.find((number) => {
    return number > 18;
});

console.log(result);`,
        options: [
            "18",
            "20",
            "25",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "20 is the first value in the Array that is greater than 18.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [10, 15, 20, 25];

let result = numbers.find((number) => {
    return number > 18;
});

console.log(result);`,
        faOptions: [
            "18",
            "20",
            "25",
            "undefined",
        ],
        faExplanation:
            "عدد 20 اولین مقدار در Array است که بزرگ‌تر از 18 است.",
    },
    {
        id: 288,
        lessonId: 28,
        difficulty: "medium",
        question: `What will this code print?

let numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number + 5);
});`,
        options: [
            "10, 20, 30",
            "15, 25, 35",
            "5, 15, 25",
            "[15, 25, 35]",
        ],
        correctAnswer: 1,
        explanation:
            "forEach() runs the callback for each value, so it prints 15, 25, and 35.",
        faQuestion: `کد زیر چه مقدارهایی را نمایش می‌دهد؟

let numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number + 5);
});`,
        faOptions: [
            "10، 20، 30",
            "15، 25، 35",
            "5، 15، 25",
            "[15، 25، 35]",
        ],
        faExplanation:
            "forEach() تابع را برای هر مقدار اجرا می‌کند، بنابراین 15، 25 و 35 نمایش داده می‌شوند.",
    },
    {
        id: 289,
        lessonId: 28,
        difficulty: "hard",
        question: `What will this code print?

let numbers = [2, 4, 6, 8];

let result = numbers
    .filter((number) => number > 4)
    .map((number) => number * 10);

console.log(result);`,
        options: [
            "[20, 40, 60, 80]",
            "[6, 8]",
            "[60, 80]",
            "[40, 60, 80]",
        ],
        correctAnswer: 2,
        explanation:
            "filter() first keeps 6 and 8, then map() transforms them into 60 and 80.",
        faQuestion: `کد زیر چه مقداری را نمایش می‌دهد؟

let numbers = [2, 4, 6, 8];

let result = numbers
    .filter((number) => number > 4)
    .map((number) => number * 10);

console.log(result);`,
        faOptions: [
            "[20، 40، 60، 80]",
            "[6، 8]",
            "[60، 80]",
            "[40، 60، 80]",
        ],
        faExplanation:
            "ابتدا filter() مقدارهای 6 و 8 را نگه می‌دارد و سپس map() آن‌ها را به 60 و 80 تبدیل می‌کند.",
    },
    {
        id: 290,
        lessonId: 28,
        difficulty: "hard",
        question: `What will this code print?

let names = ["Ali", "Sara", "Jonathan"];

let result = names
    .filter((name) => name.length > 3)
    .find((name) => name.length > 5);

console.log(result);`,
        options: [
            "Ali",
            "Sara",
            "Jonathan",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The filter keeps Sara and Jonathan, and find() returns the first one whose length is greater than 5: Jonathan.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let names = ["Ali", "Sara", "Jonathan"];

let result = names
    .filter((name) => name.length > 3)
    .find((name) => name.length > 5);

console.log(result);`,
        faOptions: [
            "Ali",
            "Sara",
            "Jonathan",
            "undefined",
        ],
        faExplanation:
            "ابتدا filter() مقدارهای Sara و Jonathan را نگه می‌دارد و سپس find() اولین نام با طول بیشتر از 5 را پیدا می‌کند که Jonathan است.",
    },

    {
        id: 291,
        lessonId: 29,
        difficulty: "easy",
        question: "Which method creates a new Array from part of an Array without changing the original?",
        options: [
            "slice()",
            "splice()",
            "push()",
            "pop()",
        ],
        correctAnswer: 0,
        explanation:
            "slice() returns a new Array containing a selected portion without modifying the original Array.",
        faQuestion:
            "کدام متد بخشی از یک Array را بدون تغییر Array اصلی در یک Array جدید قرار می‌دهد؟",
        faOptions: [
            "slice()",
            "splice()",
            "push()",
            "pop()",
        ],
        faExplanation:
            "slice() یک Array جدید شامل بخش انتخاب‌شده ایجاد می‌کند و Array اصلی را تغییر نمی‌دهد.",
    },
    {
        id: 292,
        lessonId: 29,
        difficulty: "easy",
        question: "In slice(1, 3), which indexes are included?",
        options: [
            "1 and 2",
            "1, 2, and 3",
            "2 and 3",
            "Only index 3",
        ],
        correctAnswer: 0,
        explanation:
            "slice() includes the start index but excludes the end index, so indexes 1 and 2 are included.",
        faQuestion:
            "در slice(1, 3)، کدام اندیس‌ها در نتیجه قرار می‌گیرند؟",
        faOptions: [
            "1 و 2",
            "1، 2 و 3",
            "2 و 3",
            "فقط اندیس 3",
        ],
        faExplanation:
            "slice() اندیس شروع را شامل می‌کند اما اندیس پایان را شامل نمی‌کند، بنابراین اندیس‌های 1 و 2 انتخاب می‌شوند.",
    },
    {
        id: 293,
        lessonId: 29,
        difficulty: "easy",
        question: "What does the second argument of splice() specify?",
        options: [
            "The ending index",
            "The number of items to remove",
            "The first item to add",
            "The new Array length",
        ],
        correctAnswer: 1,
        explanation:
            "The second splice() argument is deleteCount, which specifies how many items should be removed.",
        faQuestion:
            "آرگومان دوم splice() چه چیزی را مشخص می‌کند؟",
        faOptions: [
            "اندیس پایان",
            "تعداد مقدارهایی که باید حذف شوند",
            "اولین مقداری که باید اضافه شود",
            "طول جدید Array",
        ],
        faExplanation:
            "آرگومان دوم splice() مقدار deleteCount است و تعداد مقدارهایی را که باید حذف شوند مشخص می‌کند.",
    },
    {
        id: 294,
        lessonId: 29,
        difficulty: "easy",
        question: "Which method changes the original Array?",
        options: [
            "slice()",
            "splice()",
            "find()",
            "filter()",
        ],
        correctAnswer: 1,
        explanation:
            "splice() directly modifies the original Array by removing, adding, or replacing items.",
        faQuestion:
            "کدام متد Array اصلی را تغییر می‌دهد؟",
        faOptions: [
            "slice()",
            "splice()",
            "find()",
            "filter()",
        ],
        faExplanation:
            "splice() با حذف، اضافه یا جایگزین کردن مقدارها مستقیماً Array اصلی را تغییر می‌دهد.",
    },
    {
        id: 295,
        lessonId: 29,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(1, 3);

console.log(selected);`,
        options: [
            '["Apple", "Banana"]',
            '["Banana", "Orange"]',
            '["Orange", "Mango"]',
            '["Banana", "Orange", "Mango"]',
        ],
        correctAnswer: 1,
        explanation:
            "slice(1, 3) includes indexes 1 and 2, producing Banana and Orange.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(1, 3);

console.log(selected);`,
        faOptions: [
            '["Apple", "Banana"]',
            '["Banana", "Orange"]',
            '["Orange", "Mango"]',
            '["Banana", "Orange", "Mango"]',
        ],
        faExplanation:
            "slice(1, 3) اندیس‌های 1 و 2 را شامل می‌کند، بنابراین Banana و Orange در نتیجه قرار می‌گیرند.",
    },
    {
        id: 296,
        lessonId: 29,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);`,
        options: [
            '["Apple", "Banana"]',
            '["Banana", "Orange"]',
            '["Apple", "Orange"]',
            '["Apple", "Banana", "Orange"]',
        ],
        correctAnswer: 2,
        explanation:
            "splice(1, 1) starts at index 1 and removes one item, which is Banana.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);`,
        faOptions: [
            '["Apple", "Banana"]',
            '["Banana", "Orange"]',
            '["Apple", "Orange"]',
            '["Apple", "Banana", "Orange"]',
        ],
        faExplanation:
            "splice(1, 1) از اندیس 1 شروع می‌کند و یک مقدار را حذف می‌کند، یعنی Banana حذف می‌شود.",
    },
    {
        id: 297,
        lessonId: 29,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);`,
        options: [
            '["Apple", "Banana", "Orange"]',
            '["Banana", "Apple", "Orange"]',
            '["Apple", "Orange", "Banana"]',
            '["Apple", "Orange"]',
        ],
        correctAnswer: 0,
        explanation:
            'splice(1, 0, "Banana") inserts Banana at index 1 without removing any items.',
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);`,
        faOptions: [
            '["Apple", "Banana", "Orange"]',
            '["Banana", "Apple", "Orange"]',
            '["Apple", "Orange", "Banana"]',
            '["Apple", "Orange"]',
        ],
        faExplanation:
            'splice(1, 0, "Banana") مقدار Banana را در اندیس 1 اضافه می‌کند و هیچ مقداری را حذف نمی‌کند.',
    },
    {
        id: 298,
        lessonId: 29,
        difficulty: "medium",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.splice(1, 1);

console.log(removed);`,
        options: [
            '["Apple"]',
            '["Banana"]',
            '["Orange"]',
            '["Apple", "Orange"]',
        ],
        correctAnswer: 1,
        explanation:
            "splice(1, 1) removes Banana, and splice() returns an Array containing the removed item.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.splice(1, 1);

console.log(removed);`,
        faOptions: [
            '["Apple"]',
            '["Banana"]',
            '["Orange"]',
            '["Apple", "Orange"]',
        ],
        faExplanation:
            "splice(1, 1) مقدار Banana را حذف می‌کند و splice() یک Array شامل مقدار حذف‌شده برمی‌گرداند.",
    },
    {
        id: 299,
        lessonId: 29,
        difficulty: "hard",
        question: `What will this code print?

let numbers = [10, 20, 30, 40];

let selected = numbers.slice(1, 3);

numbers.splice(0, 1);

console.log(selected);
console.log(numbers);`,
        options: [
            'selected = [20, 30], numbers = [20, 30, 40]',
            'selected = [20, 30], numbers = [10, 20, 30]',
            'selected = [10, 20], numbers = [20, 30, 40]',
            'selected = [20, 30, 40], numbers = [20, 30, 40]',
        ],
        correctAnswer: 0,
        explanation:
            "slice() creates [20, 30] without changing numbers, then splice(0, 1) removes 10 from the original Array.",
        faQuestion: `کد زیر چه چیزهایی را نمایش می‌دهد؟

let numbers = [10, 20, 30, 40];

let selected = numbers.slice(1, 3);

numbers.splice(0, 1);

console.log(selected);
console.log(numbers);`,
        faOptions: [
            "selected = [20، 30]، numbers = [20، 30، 40]",
            "selected = [20، 30]، numbers = [10، 20، 30]",
            "selected = [10، 20]، numbers = [20، 30، 40]",
            "selected = [20، 30، 40]، numbers = [20، 30، 40]",
        ],
        faExplanation:
            "slice() مقدارهای [20، 30] را بدون تغییر Array اصلی ایجاد می‌کند و سپس splice(0, 1) مقدار 10 را از Array اصلی حذف می‌کند.",
    },
    {
        id: 300,
        lessonId: 29,
        difficulty: "hard",
        question: `What will this code print?

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango", "Grape");

console.log(fruits);`,
        options: [
            '["Apple", "Mango", "Grape", "Orange"]',
            '["Apple", "Banana", "Mango", "Grape", "Orange"]',
            '["Mango", "Grape", "Apple", "Orange"]',
            '["Apple", "Orange", "Mango", "Grape"]',
        ],
        correctAnswer: 0,
        explanation:
            'splice(1, 1, "Mango", "Grape") removes Banana and inserts Mango and Grape at index 1.',
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango", "Grape");

console.log(fruits);`,
        faOptions: [
            '["Apple", "Mango", "Grape", "Orange"]',
            '["Apple", "Banana", "Mango", "Grape", "Orange"]',
            '["Mango", "Grape", "Apple", "Orange"]',
            '["Apple", "Orange", "Mango", "Grape"]',
        ],
        faExplanation:
            'splice(1, 1, "Mango", "Grape") مقدار Banana را حذف و Mango و Grape را در اندیس 1 اضافه می‌کند.',
    },

    {
        id: 301,
        lessonId: 30,
        difficulty: "easy",
        question: "What does an Object use to organize its data?",
        options: [
            "Key-value pairs",
            "Only numbered indexes",
            "Only Boolean values",
            "Only String values",
        ],
        correctAnswer: 0,
        explanation:
            "Objects organize related data using key-value pairs.",
        faQuestion: "Object اطلاعات خود را با چه ساختاری سازمان‌دهی می‌کند؟",
        faOptions: [
            "جفت‌های کلید و مقدار",
            "فقط اندیس‌های عددی",
            "فقط مقدارهای Boolean",
            "فقط مقدارهای String",
        ],
        faExplanation:
            "Object اطلاعات مرتبط را به صورت جفت‌های کلید و مقدار نگهداری می‌کند.",
    },
    {
        id: 302,
        lessonId: 30,
        difficulty: "easy",
        question: `Given this Object, what is the value of the "age" property?

let user = {
    name: "Ali",
    age: 25,
    isStudent: true
};`,
        options: [
            "Ali",
            "true",
            "25",
            "age",
        ],
        correctAnswer: 2,
        explanation:
            'The value stored under the "age" key is 25.',
        faQuestion: `با توجه به Object زیر، مقدار Property به نام "age" چیست؟

let user = {
    name: "Ali",
    age: 25,
    isStudent: true
};`,
        faOptions: [
            "Ali",
            "true",
            "25",
            "age",
        ],
        faExplanation:
            'مقداری که زیر کلید "age" ذخیره شده است 25 است.',
    },
    {
        id: 303,
        lessonId: 30,
        difficulty: "easy",
        question: "Which notation accesses the name property of user when the property name is known?",
        options: [
            "user.name",
            "user(name)",
            "user->name",
            "user::name",
        ],
        correctAnswer: 0,
        explanation:
            "Dot notation, user.name, accesses a known Object property named name.",
        faQuestion:
            "وقتی نام Property را می‌دانیم، کدام روش به Property به نام name در user دسترسی پیدا می‌کند؟",
        faOptions: [
            "user.name",
            "user(name)",
            "user->name",
            "user::name",
        ],
        faExplanation:
            "Dot Notation یعنی user.name برای دسترسی به Propertyای با نام name استفاده می‌شود.",
    },
    {
        id: 304,
        lessonId: 30,
        difficulty: "easy",
        question: `Given let user = { name: "Ali", age: 25 }, which expression accesses the name property using bracket notation?`,
        options: [
            'user["name"]',
            'user(name)',
            'user["age"]',
            'user.name()',
        ],
        correctAnswer: 0,
        explanation:
            'user["name"] uses bracket notation to access the name property.',
        faQuestion:
            `با توجه به let user = { name: "Ali", age: 25 }، کدام عبارت با Bracket Notation به Property به نام name دسترسی پیدا می‌کند؟`,
        faOptions: [
            'user["name"]',
            "user(name)",
            'user["age"]',
            "user.name()",
        ],
        explanation:
            'user["name"] از Bracket Notation برای دسترسی به Property به نام name استفاده می‌کند.',
        faExplanation:
            'user["name"] از Bracket Notation برای دسترسی به Property به نام name استفاده می‌کند.',
    },
    {
        id: 305,
        lessonId: 30,
        difficulty: "medium",
        question: `What will this code print?

let user = {
    name: "Ali",
    age: 25
};

console.log(user.name);`,
        options: [
            "Ali",
            "25",
            "name",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "user.name accesses the name property, whose value is Ali.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let user = {
    name: "Ali",
    age: 25
};

console.log(user.name);`,
        faOptions: [
            "Ali",
            "25",
            "name",
            "undefined",
        ],
        faExplanation:
            "user.name به Property مربوط به name دسترسی پیدا می‌کند و مقدار آن Ali است.",
    },
    {
        id: 306,
        lessonId: 30,
        difficulty: "medium",
        question: `What will this code print?

let user = {
    name: "Ali",
    age: 25
};

let property = "age";

console.log(user[property]);`,
        options: [
            "age",
            "25",
            "Ali",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "user[property] uses the value stored in property, which is age, so it returns 25.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let user = {
    name: "Ali",
    age: 25
};

let property = "age";

console.log(user[property]);`,
        faOptions: [
            "age",
            "25",
            "Ali",
            "undefined",
        ],
        faExplanation:
            "user[property] از مقدار ذخیره‌شده در property یعنی age استفاده می‌کند، بنابراین 25 را برمی‌گرداند.",
    },
    {
        id: 307,
        lessonId: 30,
        difficulty: "medium",
        question: `What will this code print?

let product = {
    name: "Laptop",
    price: 1200,
    available: true
};

console.log(product.available);`,
        options: [
            "Laptop",
            "1200",
            "true",
            "available",
        ],
        correctAnswer: 2,
        explanation:
            "The available property stores the Boolean value true.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let product = {
    name: "Laptop",
    price: 1200,
    available: true
};

console.log(product.available);`,
        faOptions: [
            "Laptop",
            "1200",
            "true",
            "available",
        ],
        faExplanation:
            "Property مربوط به available مقدار Boolean یعنی true را نگهداری می‌کند.",
    },
    {
        id: 308,
        lessonId: 30,
        difficulty: "medium",
        question: `What will this code print?

let student = {
    name: "Ali",
    courses: ["JavaScript", "HTML", "CSS"]
};

console.log(student.courses[1]);`,
        options: [
            "JavaScript",
            "HTML",
            "CSS",
            "Ali",
        ],
        correctAnswer: 1,
        explanation:
            "student.courses accesses the Array, and index 1 contains HTML.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let student = {
    name: "Ali",
    courses: ["JavaScript", "HTML", "CSS"]
};

console.log(student.courses[1]);`,
        faOptions: [
            "JavaScript",
            "HTML",
            "CSS",
            "Ali",
        ],
        faExplanation:
            "student.courses به Array دسترسی پیدا می‌کند و اندیس 1 شامل HTML است.",
    },
    {
        id: 309,
        lessonId: 30,
        difficulty: "hard",
        question: `Given:

let user = {
    name: "Ali",
    age: 25
};

let property = "name";

What does user[property] return?`,
        options: [
            "name",
            "Ali",
            "25",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The property variable contains name, so user[property] accesses user.name and returns Ali.",
        faQuestion: `با توجه به کد زیر، user[property] چه مقداری را برمی‌گرداند؟

let user = {
    name: "Ali",
    age: 25
};

let property = "name";`,
        faOptions: [
            "name",
            "Ali",
            "25",
            "undefined",
        ],
        faExplanation:
            "متغیر property شامل name است، بنابراین user[property] به user.name دسترسی پیدا می‌کند و Ali را برمی‌گرداند.",
    },
    {
        id: 310,
        lessonId: 30,
        difficulty: "hard",
        question: `What will this code print?

let user = {
    name: "Ali",
    age: 25
};

console.log(user.property);`,
        options: [
            "Ali",
            "25",
            "property",
            "undefined",
        ],
        correctAnswer: 3,
        explanation:
            'user.property looks for a property literally named "property", which does not exist, so the result is undefined.',
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let user = {
    name: "Ali",
    age: 25
};

console.log(user.property);`,
        faOptions: [
            "Ali",
            "25",
            "property",
            "undefined",
        ],
        faExplanation:
            'user.property به دنبال Propertyای با نام واقعی "property" می‌گردد که در Object وجود ندارد، بنابراین نتیجه undefined است.',
    },

    {
        id: 311,
        lessonId: 31,
        difficulty: "easy",
        question: `Given const user = { name: "Ali", age: 25 }, which expression accesses the age property?`,
        options: [
            "user.age",
            "user->age",
            "user(age)",
            "user.age()",
        ],
        correctAnswer: 0,
        explanation:
            "user.age uses Dot Notation to access the age property.",
        faQuestion:
            `با توجه به const user = { name: "Ali", age: 25 }، کدام عبارت به Property مربوط به age دسترسی پیدا می‌کند؟`,
        faOptions: [
            "user.age",
            "user->age",
            "user(age)",
            "user.age()",
        ],
        faExplanation:
            "عبارت user.age با استفاده از Dot Notation مقدار Property مربوط به age را دریافت می‌کند.",
    },

    {
        id: 312,
        lessonId: 31,
        difficulty: "easy",
        question: `Given const user = { name: "Ali", age: 25 }, which expression accesses name using bracket notation?`,
        options: [
            'user["name"]',
            "user.name()",
            'user["age"]',
            "user(name)",
        ],
        correctAnswer: 0,
        explanation:
            'user["name"] uses Bracket Notation to access the name property.',
        faQuestion:
            `با توجه به const user = { name: "Ali", age: 25 }، کدام عبارت با Bracket Notation به name دسترسی پیدا می‌کند؟`,
        faOptions: [
            'user["name"]',
            "user.name()",
            'user["age"]',
            "user(name)",
        ],
        faExplanation:
            'عبارت user["name"] با استفاده از Bracket Notation به Property مربوط به name دسترسی پیدا می‌کند.',
    },

    {
        id: 313,
        lessonId: 31,
        difficulty: "easy",
        question: `What will this code print?

const user = { name: "Ali", age: 25 };

user.age = 26;

console.log(user.age);`,
        options: [
            "25",
            "26",
            "undefined",
            "age",
        ],
        correctAnswer: 1,
        explanation:
            "The assignment user.age = 26 updates the existing age property to 26.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = { name: "Ali", age: 25 };

user.age = 26;

console.log(user.age);`,
        faOptions: [
            "25",
            "26",
            "undefined",
            "age",
        ],
        faExplanation:
            "دستور user.age = 26 مقدار Property مربوط به age را از 25 به 26 تغییر می‌دهد.",
    },

    {
        id: 314,
        lessonId: 31,
        difficulty: "easy",
        question: `Given const user = { name: "Ali" }, what happens after user.age = 25?`,
        options: [
            "The age property is deleted",
            "A new age property is created",
            "The name property is renamed",
            "The object becomes undefined",
        ],
        correctAnswer: 1,
        explanation:
            "Assigning a value to a missing property creates that new property on the object.",
        faQuestion:
            `با توجه به const user = { name: "Ali" }، بعد از اجرای user.age = 25 چه اتفاقی می‌افتد؟`,
        faOptions: [
            "Property مربوط به age حذف می‌شود",
            "یک Property جدید به نام age ایجاد می‌شود",
            "Property مربوط به name تغییر نام می‌دهد",
            "Object به undefined تبدیل می‌شود",
        ],
        faExplanation:
            "با Assignment کردن مقدار به Propertyای که وجود ندارد، یک Property جدید به نام age ایجاد می‌شود.",
    },

    {
        id: 315,
        lessonId: 31,
        difficulty: "medium",
        question: `Which operator is used to remove a property from an object?`,
        options: [
            "remove",
            "delete",
            "clear",
            "unset",
        ],
        correctAnswer: 1,
        explanation:
            "The delete operator removes a property from an object.",
        faQuestion:
            "کدام Operator برای حذف یک Property از Object استفاده می‌شود؟",
        faOptions: [
            "remove",
            "delete",
            "clear",
            "unset",
        ],
        faExplanation:
            "عملگر delete برای حذف کردن یک Property از Object استفاده می‌شود.",
    },

    {
        id: 316,
        lessonId: 31,
        difficulty: "medium",
        question: `What is the difference between user.age = undefined and delete user.age?`,
        options: [
            "Both always remove the property",
            "The first changes the value; the second removes the property",
            "The first removes the object; the second changes the value",
            "There is no difference",
        ],
        correctAnswer: 1,
        explanation:
            "Assigning undefined keeps the property, while delete removes the property itself.",
        faQuestion:
            "تفاوت بین user.age = undefined و delete user.age چیست؟",
        faOptions: [
            "هر دو همیشه Property را حذف می‌کنند",
            "اولی مقدار را تغییر می‌دهد و دومی خود Property را حذف می‌کند",
            "اولی Object را حذف می‌کند و دومی مقدار را تغییر می‌دهد",
            "هیچ تفاوتی ندارند",
        ],
        faExplanation:
            "در حالت اول Property باقی می‌ماند و فقط مقدار آن undefined می‌شود، اما در حالت دوم خود Property حذف می‌شود.",
    },

    {
        id: 317,
        lessonId: 31,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

delete user.age;

console.log(user.age);`,
        options: [
            "25",
            "age",
            "undefined",
            "null",
        ],
        correctAnswer: 2,
        explanation:
            "delete removes the age property, so accessing user.age afterward returns undefined.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

delete user.age;

console.log(user.age);`,
        faOptions: [
            "25",
            "age",
            "undefined",
            "null",
        ],
        faExplanation:
            "دستور delete Property مربوط به age را حذف می‌کند، بنابراین دسترسی دوباره به user.age مقدار undefined را برمی‌گرداند.",
    },

    {
        id: 318,
        lessonId: 31,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

const property = "age";

console.log(user[property]);`,
        options: [
            "Ali",
            "25",
            "age",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The property variable contains the string age, so user[property] accesses user.age and returns 25.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

const property = "age";

console.log(user[property]);`,
        faOptions: [
            "Ali",
            "25",
            "age",
            "undefined",
        ],
        faExplanation:
            "متغیر property مقدار age را دارد، بنابراین عبارت user[property] به Property مربوط به age دسترسی پیدا می‌کند و مقدار 25 را برمی‌گرداند.",
    },

    {
        id: 319,
        lessonId: 31,
        difficulty: "hard",
        question: `What will this code print?

const product = {
    name: "Laptop",
    price: 1000
};

product.price = 1200;
product.stock = 5;
delete product.name;

console.log(product.stock);`,
        options: [
            "1000",
            "1200",
            "5",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The stock property is created with the value 5, while the other operations affect price and name.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const product = {
    name: "Laptop",
    price: 1000
};

product.price = 1200;
product.stock = 5;
delete product.name;

console.log(product.stock);`,
        faOptions: [
            "1000",
            "1200",
            "5",
            "undefined",
        ],
        faExplanation:
            "در این کد Property مربوط به stock با مقدار 5 ایجاد می‌شود و حذف name روی مقدار stock تأثیری ندارد.",
    },

    {
        id: 320,
        lessonId: 31,
        difficulty: "hard",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

const property = "age";

user[property] = 30;

console.log(user.age);`,
        options: [
            "25",
            "30",
            "age",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "user[property] refers to user.age because property contains the string age, so the value becomes 30.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

const property = "age";

user[property] = 30;

console.log(user.age);`,
        faOptions: [
            "25",
            "30",
            "age",
            "undefined",
        ],
        explanation:
            "متغیر property مقدار age را دارد، بنابراین user[property] همان user.age است و مقدار آن به 30 تغییر می‌کند.",
    },

    {
        id: 321,
        lessonId: 32,
        difficulty: "easy",
        question: `In JavaScript, what is a function stored inside an object called?`,
        options: [
            "Method",
            "Index",
            "Parameter",
            "Operator",
        ],
        correctAnswer: 0,
        explanation:
            "A function stored as an object property is called a Method.",
        faQuestion:
            "در JavaScript به Functionای که داخل یک Object قرار دارد چه می‌گوییم؟",
        faOptions: [
            "Method",
            "Index",
            "Parameter",
            "Operator",
        ],
        faExplanation:
            "به Functionای که به عنوان Property داخل یک Object قرار دارد Method گفته می‌شود.",
    },

    {
        id: 322,
        lessonId: 32,
        difficulty: "easy",
        question: `Given const user = { sayHello: function() { console.log("Hello"); } }, which expression calls the method?`,
        options: [
            "user.sayHello",
            "user.sayHello()",
            "user.sayHello[]",
            "user.sayHello{}",
        ],
        correctAnswer: 1,
        explanation:
            "user.sayHello() accesses the method and uses parentheses to execute it.",
        faQuestion:
            `با توجه به const user = { sayHello: function() { console.log("Hello"); } }، کدام عبارت Method را اجرا می‌کند؟`,
        faOptions: [
            "user.sayHello",
            "user.sayHello()",
            "user.sayHello[]",
            "user.sayHello{}",
        ],
        faExplanation:
            "عبارت user.sayHello() به Method دسترسی پیدا می‌کند و با استفاده از پرانتز آن را اجرا می‌کند.",
    },

    {
        id: 323,
        lessonId: 32,
        difficulty: "easy",
        question: `What does this refer to inside an object method such as user.sayHello()?`,
        options: [
            "The current object",
            "The current array",
            "The current parameter",
            "The current loop",
        ],
        correctAnswer: 0,
        explanation:
            "When called as user.sayHello(), this inside the method refers to the user object.",
        faQuestion:
            "داخل یک Object Method مانند user.sayHello()، this به چه چیزی اشاره می‌کند؟",
        faOptions: [
            "Object فعلی",
            "Array فعلی",
            "Parameter فعلی",
            "Loop فعلی",
        ],
        faExplanation:
            "در این حالت this داخل Method به Objectای اشاره می‌کند که Method از طریق آن فراخوانی شده است.",
    },

    {
        id: 324,
        lessonId: 32,
        difficulty: "easy",
        question: `What will this code print?

const user = {
    name: "Ali",
    sayHello: function() {
        console.log(this.name);
    }
};

user.sayHello();`,
        options: [
            "this",
            "name",
            "Ali",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "When user.sayHello() runs, this refers to user, so this.name returns Ali.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    sayHello: function() {
        console.log(this.name);
    }
};

user.sayHello();`,
        faOptions: [
            "this",
            "name",
            "Ali",
            "undefined",
        ],
        faExplanation:
            "در زمان اجرای user.sayHello()، کلمه this به user اشاره می‌کند و this.name مقدار Ali را برمی‌گرداند.",
    },

    {
        id: 325,
        lessonId: 32,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25,

    introduce: function() {
        console.log(this.name + " " + this.age);
    }
};

user.introduce();`,
        options: [
            "Ali 25",
            "name age",
            "undefined undefined",
            "Ali undefined",
        ],
        correctAnswer: 0,
        explanation:
            "this.name accesses Ali and this.age accesses 25 from the same user object.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25,

    introduce: function() {
        console.log(this.name + " " + this.age);
    }
};

user.introduce();`,
        faOptions: [
            "Ali 25",
            "name age",
            "undefined undefined",
            "Ali undefined",
        ],
        faExplanation:
            "در این Method، this به user اشاره می‌کند؛ بنابراین this.name مقدار Ali و this.age مقدار 25 را دریافت می‌کنند.",
    },

    {
        id: 326,
        lessonId: 32,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    age: 25,

    birthday: function() {
        this.age = this.age + 1;
    }
};

user.birthday();

console.log(user.age);`,
        options: [
            "25",
            "26",
            "27",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The method adds 1 to the current age, changing 25 to 26.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    age: 25,

    birthday: function() {
        this.age = this.age + 1;
    }
};

user.birthday();

console.log(user.age);`,
        faOptions: [
            "25",
            "26",
            "27",
            "undefined",
        ],
        faExplanation:
            "در اجرای Method، مقدار age یک واحد افزایش پیدا می‌کند؛ بنابراین مقدار نهایی 26 است.",
    },

    {
        id: 327,
        lessonId: 32,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",

    greet: function(message) {
        console.log(message + ", " + this.name);
    }
};

user.greet("Hello");`,
        options: [
            "Hello, Ali",
            "Ali, Hello",
            "Hello, undefined",
            "message, Ali",
        ],
        correctAnswer: 0,
        explanation:
            "The argument Hello becomes message, while this.name provides Ali from the object.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",

    greet: function(message) {
        console.log(message + ", " + this.name);
    }
};

user.greet("Hello");`,
        faOptions: [
            "Hello, Ali",
            "Ali, Hello",
            "Hello, undefined",
            "message, Ali",
        ],
        faExplanation:
            "در این فراخوانی، مقدار Hello به message داده می‌شود و this.name مقدار Ali را از Object دریافت می‌کند.",
    },

    {
        id: 328,
        lessonId: 32,
        difficulty: "medium",
        question: `Which expression correctly changes the age property using this inside an object method?`,
        options: [
            "this.age = 30",
            "this = 30",
            "age.this = 30",
            "this.age(30)",
        ],
        correctAnswer: 0,
        explanation:
            "this.age = 30 assigns 30 to the age property of the current object.",
        faQuestion:
            "کدام عبارت داخل یک Object Method مقدار Property مربوط به age را با استفاده از this تغییر می‌دهد؟",
        faOptions: [
            "this.age = 30",
            "this = 30",
            "age.this = 30",
            "this.age(30)",
        ],
        faExplanation:
            "عبارت this.age = 30 مقدار 30 را به Property مربوط به age در Object فعلی اختصاص می‌دهد.",
    },

    {
        id: 329,
        lessonId: 32,
        difficulty: "hard",
        question: `What will this code print?

const player = {
    score: 10,

    addPoints: function(points) {
        this.score = this.score + points;
    }
};

player.addPoints(5);
player.addPoints(10);

console.log(player.score);`,
        options: [
            "15",
            "20",
            "25",
            "30",
        ],
        correctAnswer: 2,
        explanation:
            "The first call changes 10 to 15, and the second adds 10 more, producing 25.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const player = {
    score: 10,

    addPoints: function(points) {
        this.score = this.score + points;
    }
};

player.addPoints(5);
player.addPoints(10);

console.log(player.score);`,
        faOptions: [
            "15",
            "20",
            "25",
            "30",
        ],
        faExplanation:
            "در فراخوانی اول امتیاز از 10 به 15 می‌رسد و در فراخوانی دوم 10 واحد دیگر اضافه می‌شود؛ بنابراین مقدار نهایی 25 است.",
    },

    {
        id: 330,
        lessonId: 32,
        difficulty: "hard",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25,

    birthday: function() {
        this.age = this.age + 1;
        console.log(this.name + " " + this.age);
    }
};

user.birthday();`,
        options: [
            "Ali 25",
            "Ali 26",
            "25 Ali",
            "undefined 26",
        ],
        correctAnswer: 1,
        explanation:
            "The method first increases age from 25 to 26, then prints this.name and this.age.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25,

    birthday: function() {
        this.age = this.age + 1;
        console.log(this.name + " " + this.age);
    }
};

user.birthday();`,
        faOptions: [
            "Ali 25",
            "Ali 26",
            "25 Ali",
            "undefined 26",
        ],
        faExplanation:
            "در اجرای Method ابتدا age از 25 به 26 افزایش پیدا می‌کند و سپس name و age با مقادیر Ali و 26 نمایش داده می‌شوند.",
    },

    {
        id: 331,
        lessonId: 33,
        difficulty: "easy",
        question: `Given const user = { name: "Ali", address: { city: "Baku" } }, which expression accesses the city property?`,
        options: [
            "user.city",
            "user.address.city",
            "user.address",
            "user[city]",
        ],
        correctAnswer: 1,
        explanation:
            "The city property is inside address, so user.address.city accesses it.",
        faQuestion:
            `با توجه به const user = { name: "Ali", address: { city: "Baku" } }، کدام عبارت به Property مربوط به city دسترسی پیدا می‌کند؟`,
        faOptions: [
            "user.city",
            "user.address.city",
            "user.address",
            "user[city]",
        ],
        faExplanation:
            "عبارت user.address.city ابتدا به address و سپس به Property مربوط به city دسترسی پیدا می‌کند.",
    },

    {
        id: 332,
        lessonId: 33,
        difficulty: "easy",
        question: `What is an object stored inside another object called?`,
        options: [
            "Nested Object",
            "Indexed Object",
            "Loop Object",
            "Global Object",
        ],
        correctAnswer: 0,
        explanation:
            "An object stored as a property inside another object is a Nested Object.",
        faQuestion:
            "به Objectای که داخل یک Object دیگر قرار دارد چه می‌گوییم؟",
        faOptions: [
            "Nested Object",
            "Indexed Object",
            "Loop Object",
            "Global Object",
        ],
        faExplanation:
            "به Objectای که به عنوان مقدار یک Property داخل Object دیگر قرار گرفته باشد Nested Object گفته می‌شود.",
    },

    {
        id: 333,
        lessonId: 33,
        difficulty: "easy",
        question: `What will this code print?

const user = {
    name: "Ali",
    address: {
        city: "Baku"
    }
};

console.log(user.address.city);`,
        options: [
            "user",
            "address",
            "Ali",
            "Baku",
        ],
        correctAnswer: 3,
        explanation:
            "The expression reaches the nested city property, whose value is Baku.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    address: {
        city: "Baku"
    }
};

console.log(user.address.city);`,
        faOptions: [
            "user",
            "address",
            "Ali",
            "Baku",
        ],
        faExplanation:
            "عبارت user.address.city به Property مربوط به city در Object داخلی دسترسی پیدا می‌کند و مقدار Baku را برمی‌گرداند.",
    },

    {
        id: 334,
        lessonId: 33,
        difficulty: "easy",
        question: `Which method returns an Array containing the keys of an object?`,
        options: [
            "Object.values()",
            "Object.entries()",
            "Object.keys()",
            "Object.items()",
        ],
        correctAnswer: 2,
        explanation:
            "Object.keys() returns an Array containing the object's property keys.",
        faQuestion:
            "کدام Method یک Array شامل Keyهای یک Object برمی‌گرداند؟",
        faOptions: [
            "Object.values()",
            "Object.entries()",
            "Object.keys()",
            "Object.items()",
        ],
        faExplanation:
            "متد Object.keys() یک Array شامل Keyهای Object برمی‌گرداند.",
    },

    {
        id: 335,
        lessonId: 33,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

console.log(Object.values(user));`,
        options: [
            '["name", "age"]',
            '["Ali", 25]',
            '[["name", "Ali"], ["age", 25]]',
            "user",
        ],
        correctAnswer: 1,
        explanation:
            "Object.values() returns an Array containing the values Ali and 25.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

console.log(Object.values(user));`,
        faOptions: [
            '["name", "age"]',
            '["Ali", 25]',
            '[["name", "Ali"], ["age", 25]]',
            "user",
        ],
        faExplanation:
            "متد Object.values() فقط Valueهای Object را در یک Array قرار می‌دهد و نتیجه شامل Ali و 25 است.",
    },

    {
        id: 336,
        lessonId: 33,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

console.log(Object.keys(user));`,
        options: [
            '["Ali", 25]',
            "user",
            '["name", "age"]',
            '[["name", "Ali"], ["age", 25]]',
        ],
        correctAnswer: 2,
        explanation:
            "Object.keys() returns an Array containing the keys name and age.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

console.log(Object.keys(user));`,
        faOptions: [
            '["Ali", 25]',
            "user",
            '["name", "age"]',
            '[["name", "Ali"], ["age", 25]]',
        ],
        faExplanation:
            "متد Object.keys() نام Propertyهای Object را در یک Array قرار می‌دهد و نتیجه شامل name و age است.",
    },

    {
        id: 337,
        lessonId: 33,
        difficulty: "medium",
        question: `What does Object.entries(user) return?`,
        options: [
            "An Array of the object's keys only",
            "An Array of the object's values only",
            "An Array containing key-value pairs",
            "The original object",
        ],
        correctAnswer: 2,
        explanation:
            "Object.entries() returns an Array where each item contains a key and its corresponding value.",
        faQuestion:
            "متد Object.entries(user) چه چیزی برمی‌گرداند؟",
        faOptions: [
            "یک Array شامل فقط Keyهای Object",
            "یک Array شامل فقط Valueهای Object",
            "یک Array شامل Pairهای Key-Value",
            "خود Object اصلی",
        ],
        faExplanation:
            "متد Object.entries() یک Array برمی‌گرداند که هر عنصر آن شامل یک Key و Value مربوط به آن است.",
    },

    {
        id: 338,
        lessonId: 33,
        difficulty: "medium",
        question: `What will this code print?

const product = {
    name: "Laptop",
    details: {
        price: 1000
    }
};

product.details.price = 1200;

console.log(product.details.price);`,
        options: [
            "1000",
            "1200",
            "details",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The nested price property is updated from 1000 to 1200.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const product = {
    name: "Laptop",
    details: {
        price: 1000
    }
};

product.details.price = 1200;

console.log(product.details.price);`,
        faOptions: [
            "1000",
            "1200",
            "details",
            "undefined",
        ],
        faExplanation:
            "در این کد مقدار price داخل Object داخلی از 1000 به 1200 تغییر داده می‌شود.",
    },

    {
        id: 339,
        lessonId: 33,
        difficulty: "hard",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

const entries = Object.entries(user);

console.log(entries[1][1]);`,
        options: [
            "name",
            "Ali",
            "25",
            "Baku",
        ],
        correctAnswer: 2,
        explanation:
            'entries[1] is ["age", 25], and entries[1][1] accesses its second item, 25.',
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

const entries = Object.entries(user);

console.log(entries[1][1]);`,
        faOptions: [
            "name",
            "Ali",
            "25",
            "Baku",
        ],
        faExplanation:
            "در این نتیجه، عنصر دوم شامل age و 25 است و دسترسی به اندیس دوم آن مقدار 25 را برمی‌گرداند.",
    },

    {
        id: 340,
        lessonId: 33,
        difficulty: "hard",
        question: `What will this code print?

const user = {
    name: "Ali",
    address: {
        city: "Baku",
        country: "Azerbaijan"
    }
};

user.address.city = "Tehran";

console.log(Object.keys(user.address));`,
        options: [
            '["name", "address"]',
            '["city", "country"]',
            '["Baku", "Azerbaijan"]',
            '["address"]',
        ],
        correctAnswer: 1,
        explanation:
            "The address object contains the keys city and country, regardless of the updated city value.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    address: {
        city: "Baku",
        country: "Azerbaijan"
    }
};

user.address.city = "Tehran";

console.log(Object.keys(user.address));`,
        faOptions: [
            '["name", "address"]',
            '["city", "country"]',
            '["Baku", "Azerbaijan"]',
            '["address"]',
        ],
        faExplanation:
            "متد Object.keys() فقط نام Propertyهای address را برمی‌گرداند، بنابراین تغییر مقدار city روی Keyهای آن تأثیری ندارد.",
    },

    {
        id: 341,
        lessonId: 34,
        difficulty: "easy",
        question: `Given const user = { name: "Ali", age: 25 }, which statement correctly extracts name using object destructuring?`,
        options: [
            "const [name] = user;",
            "const { name } = user;",
            "const (name) = user;",
            "const <name> = user;",
        ],
        correctAnswer: 1,
        explanation:
            "const { name } = user extracts the name property from the object.",
        faQuestion:
            `با توجه به const user = { name: "Ali", age: 25 }، کدام دستور با Object Destructuring مقدار name را استخراج می‌کند؟`,
        faOptions: [
            "const [name] = user;",
            "const { name } = user;",
            "const (name) = user;",
            "const <name> = user;",
        ],
        faExplanation:
            "عبارت const { name } = user مقدار Property مربوط به name را از Object استخراج می‌کند.",
    },

    {
        id: 342,
        lessonId: 34,
        difficulty: "easy",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

const { name, age } = user;

console.log(name);`,
        options: [
            "user",
            "name",
            "Ali",
            "25",
        ],
        correctAnswer: 2,
        explanation:
            "Destructuring assigns the value of the name property, Ali, to the name variable.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

const { name, age } = user;

console.log(name);`,
        faOptions: [
            "user",
            "name",
            "Ali",
            "25",
        ],
        faExplanation:
            "در این Destructuring، مقدار Property مربوط به name یعنی Ali داخل Variable به نام name قرار می‌گیرد.",
    },

    {
        id: 343,
        lessonId: 34,
        difficulty: "easy",
        question: `Given const user = { name: "Ali", age: 25 }, what does const { age } = user create?`,
        options: [
            "A variable named age containing 25",
            "A variable named user containing age",
            "A property named age inside user",
            "A function named age",
        ],
        correctAnswer: 0,
        explanation:
            "The destructuring statement creates an age variable containing the value 25.",
        faQuestion:
            `با توجه به const user = { name: "Ali", age: 25 }، دستور const { age } = user چه چیزی ایجاد می‌کند؟`,
        faOptions: [
            "یک Variable به نام age که مقدار 25 دارد",
            "یک Variable به نام user که مقدار age دارد",
            "یک Property به نام age داخل user",
            "یک Function به نام age",
        ],
        faExplanation:
            "دستور Destructuring یک Variable به نام age ایجاد می‌کند که مقدار آن 25 است.",
    },

    {
        id: 344,
        lessonId: 34,
        difficulty: "easy",
        question: `What happens when an object property is missing and no default value is provided during destructuring?`,
        options: [
            "The value becomes null",
            "The value becomes undefined",
            "The object is deleted",
            "JavaScript creates an empty object",
        ],
        correctAnswer: 1,
        explanation:
            "A missing destructured property without a default value produces undefined.",
        faQuestion:
            "اگر یک Property هنگام Destructuring وجود نداشته باشد و مقدار پیش‌فرض هم تعیین نشده باشد چه اتفاقی می‌افتد؟",
        faOptions: [
            "مقدار null می‌شود",
            "مقدار undefined می‌شود",
            "Object حذف می‌شود",
            "JavaScript یک Object خالی ایجاد می‌کند",
        ],
        faExplanation:
            "وقتی Property وجود نداشته باشد و مقدار پیش‌فرض تعیین نشده باشد، Variable مقدار undefined دریافت می‌کند.",
    },

    {
        id: 345,
        lessonId: 34,
        difficulty: "medium",
        question: `Given const user = { name: "Ali", age: 25 }, which statement stores the name value in a variable called userName?`,
        options: [
            "const { name = userName } = user;",
            "const { userName: name } = user;",
            "const { name: userName } = user;",
            "const { name -> userName } = user;",
        ],
        correctAnswer: 2,
        explanation:
            "The syntax name: userName extracts the name property and stores its value in userName.",
        faQuestion:
            `با توجه به const user = { name: "Ali", age: 25 }، کدام دستور مقدار name را داخل Variable به نام userName قرار می‌دهد؟`,
        faOptions: [
            "const { name = userName } = user;",
            "const { userName: name } = user;",
            "const { name: userName } = user;",
            "const { name -> userName } = user;",
        ],
        faExplanation:
            "در این Syntax، ساختار name: userName مقدار Property مربوط به name را داخل Variable به نام userName قرار می‌دهد.",
    },

    {
        id: 346,
        lessonId: 34,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali"
};

const { age = 18 } = user;

console.log(age);`,
        options: [
            "undefined",
            "null",
            "18",
            "25",
        ],
        correctAnswer: 2,
        explanation:
            "The age property is missing, so the default value 18 is used.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali"
};

const { age = 18 } = user;

console.log(age);`,
        faOptions: [
            "undefined",
            "null",
            "18",
            "25",
        ],
        faExplanation:
            "در این Object، Property مربوط به age وجود ندارد، بنابراین مقدار پیش‌فرض 18 استفاده می‌شود.",
    },

    {
        id: 347,
        lessonId: 34,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

const { age, name } = user;

console.log(age);`,
        options: [
            "Ali",
            "name",
            "25",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "Object destructuring uses property names, so age receives 25 regardless of the order.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

const { age, name } = user;

console.log(age);`,
        faOptions: [
            "Ali",
            "name",
            "25",
            "undefined",
        ],
        faExplanation:
            "در Object Destructuring ترتیب Propertyها مهم نیست و age بر اساس نام خودش مقدار 25 را دریافت می‌کند.",
    },

    {
        id: 348,
        lessonId: 34,
        difficulty: "medium",
        question: `What will this code print?

const user = {
    name: "Ali",
    age: 25
};

const { name: userName } = user;

console.log(userName);`,
        options: [
            "name",
            "userName",
            "Ali",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The name property is renamed to the variable userName, which receives Ali.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    age: 25
};

const { name: userName } = user;

console.log(userName);`,
        faOptions: [
            "name",
            "userName",
            "Ali",
            "undefined",
        ],
        faExplanation:
            "در این Destructuring، Property مربوط به name با نام userName در Variable قرار می‌گیرد و مقدار آن Ali است.",
    },

    {
        id: 349,
        lessonId: 34,
        difficulty: "hard",
        question: `What will this code print?

const product = {
    name: "Laptop",
    price: 1000,
    stock: 5
};

const { name: productName, price, stock = 10 } = product;

console.log(productName + " " + price + " " + stock);`,
        options: [
            "Laptop 1000 10",
            "name 1000 5",
            "Laptop 1000 5",
            "undefined 1000 5",
        ],
        correctAnswer: 2,
        explanation:
            "productName receives Laptop, price receives 1000, and the existing stock value 5 overrides the default 10.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const product = {
    name: "Laptop",
    price: 1000,
    stock: 5
};

const { name: productName, price, stock = 10 } = product;

console.log(productName + " " + price + " " + stock);`,
        faOptions: [
            "Laptop 1000 10",
            "name 1000 5",
            "Laptop 1000 5",
            "undefined 1000 5",
        ],
        faExplanation:
            "در این Destructuring، مقدار productName برابر Laptop و مقدار price برابر 1000 است و چون stock وجود دارد مقدار واقعی 5 استفاده می‌شود.",
    },

    {
        id: 350,
        lessonId: 34,
        difficulty: "hard",
        question: `What will this code print?

const user = {
    name: "Ali",
    profile: {
        city: "Baku"
    }
};

const { profile: { city } } = user;

console.log(city);`,
        options: [
            "Ali",
            "profile",
            "Baku",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The nested destructuring reaches profile and extracts its city property, which is Baku.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

const user = {
    name: "Ali",
    profile: {
        city: "Baku"
    }
};

const { profile: { city } } = user;

console.log(city);`,
        faOptions: [
            "Ali",
            "profile",
            "Baku",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "در این Destructuring، ابتدا profile و سپس Property مربوط به city استخراج می‌شود و مقدار آن Baku است.",
    },

    {
        id: 351,
        lessonId: 35,
        difficulty: "easy",
        question: "What does Scope determine in JavaScript?",
        options: [
            "Where a variable can be accessed",
            "How fast a variable runs",
            "How many values a variable stores",
            "What data type a variable becomes",
        ],
        correctAnswer: 0,
        explanation:
            "Scope determines where a variable can be accessed in JavaScript.",
        faQuestion: "Scope در JavaScript چه چیزی را مشخص می‌کند؟",
        faOptions: [
            "اینکه Variable در کجا قابل دسترسی است",
            "اینکه Variable با چه سرعتی اجرا می‌شود",
            "اینکه Variable چند مقدار نگهداری می‌کند",
            "اینکه Variable به چه نوع داده‌ای تبدیل می‌شود",
        ],
        faExplanation:
            "محدوده Scope مشخص می‌کند که یک Variable در کدام قسمت از کد قابل دسترسی است.",
    },

    {
        id: 352,
        lessonId: 35,
        difficulty: "easy",
        question: `Which variable has Global Scope?

let name = "Ali";

function greet() {
    console.log(name);
}`,
        options: [
            "name",
            "greet",
            "console",
            "log",
        ],
        correctAnswer: 0,
        explanation:
            "name is declared outside the function, so it is available from the surrounding program scope.",
        faQuestion: `کدام Variable دارای Global Scope است؟

let name = "Ali";

function greet() {
    console.log(name);
}`,
        faOptions: [
            "name",
            "greet",
            "console",
            "log",
        ],
        faExplanation:
            "متغیر name خارج از Function تعریف شده است، بنابراین در Scope اطراف برنامه قرار دارد.",
    },

    {
        id: 353,
        lessonId: 35,
        difficulty: "easy",
        question: `What will this code print?

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();`,
        options: [
            "Hello",
            "undefined",
            "message",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "message is declared inside greet and is accessed inside the same function, so Hello is printed.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();`,
        faOptions: [
            "Hello",
            "undefined",
            "message",
            "خطا ایجاد می‌کند",
        ],
        faExplanation:
            "متغیر message داخل Function تعریف شده و همان‌جا نیز استفاده می‌شود، بنابراین Hello نمایش داده می‌شود.",
    },

    {
        id: 354,
        lessonId: 35,
        difficulty: "easy",
        question: `What happens when this code runs?

function greet() {
    let message = "Hello";
}

console.log(message);`,
        options: [
            "It prints Hello",
            "It prints undefined",
            "It causes an error",
            "It creates a global variable",
        ],
        correctAnswer: 2,
        explanation:
            "message is declared inside greet, so code outside the function cannot directly access it.",
        faQuestion: `با اجرای کد زیر چه اتفاقی می‌افتد؟

function greet() {
    let message = "Hello";
}

console.log(message);`,
        faOptions: [
            "Hello را نمایش می‌دهد",
            "undefined را نمایش می‌دهد",
            "باعث ایجاد خطا می‌شود",
            "یک Global Variable ایجاد می‌کند",
        ],
        faExplanation:
            "متغیر message داخل Function تعریف شده است، بنابراین کد خارج از Function نمی‌تواند مستقیماً به آن دسترسی داشته باشد.",
    },

    {
        id: 355,
        lessonId: 35,
        difficulty: "medium",
        question: `What will this code print?

let score = 100;

function showScore() {
    console.log(score);
}

showScore();`,
        options: [
            "100",
            "undefined",
            "score",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "score is declared outside the function, so showScore can access it from the surrounding scope.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let score = 100;

function showScore() {
    console.log(score);
}

showScore();`,
        faOptions: [
            "100",
            "undefined",
            "score",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "متغیر score خارج از Function تعریف شده است، بنابراین Function می‌تواند به آن از Scope اطراف دسترسی داشته باشد.",
    },

    {
        id: 356,
        lessonId: 35,
        difficulty: "medium",
        question: `What will this code print?

if (true) {
    let message = "Hello";
    console.log(message);
}`,
        options: [
            "Hello",
            "undefined",
            "message",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "message is declared and accessed inside the same block, so Hello is printed.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

if (true) {
    let message = "Hello";
    console.log(message);
}`,
        faOptions: [
            "Hello",
            "undefined",
            "message",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "متغیر message داخل همان Block تعریف و استفاده شده است، بنابراین Hello نمایش داده می‌شود.",
    },

    {
        id: 357,
        lessonId: 35,
        difficulty: "medium",
        question: `What happens when this code runs?

if (true) {
    let message = "Hello";
}

console.log(message);`,
        options: [
            "It prints Hello",
            "It prints undefined",
            "It causes an error",
            "It creates a global variable",
        ],
        correctAnswer: 2,
        explanation:
            "message is declared with let inside the block, so it is not accessible outside that block.",
        faQuestion: `با اجرای کد زیر چه اتفاقی می‌افتد؟

if (true) {
    let message = "Hello";
}

console.log(message);`,
        faOptions: [
            "Hello را نمایش می‌دهد",
            "undefined را نمایش می‌دهد",
            "باعث ایجاد خطا می‌شود",
            "یک Global Variable ایجاد می‌کند",
        ],
        faExplanation:
            "متغیر message با let داخل Block تعریف شده است، بنابراین خارج از آن Block قابل دسترسی نیست.",
    },

    {
        id: 358,
        lessonId: 35,
        difficulty: "medium",
        question: `What will this code print?

let name = "Ali";

function greet() {
    let message = "Hello";

    if (true) {
        let city = "Baku";

        console.log(name);
        console.log(message);
        console.log(city);
    }
}

greet();`,
        options: [
            "Ali, Hello, Baku",
            "Ali, undefined, Baku",
            "undefined, Hello, Baku",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "The inner block can access name from the global scope, message from the function scope, and city from its own block scope.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let name = "Ali";

function greet() {
    let message = "Hello";

    if (true) {
        let city = "Baku";

        console.log(name);
        console.log(message);
        console.log(city);
    }
}

greet();`,
        faOptions: [
            "Ali، Hello، Baku",
            "Ali، undefined، Baku",
            "undefined، Hello، Baku",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "بلوک داخلی می‌تواند به name از Global Scope، به message از Function Scope و به city از Scope خودش دسترسی داشته باشد.",
    },

    {
        id: 359,
        lessonId: 35,
        difficulty: "hard",
        question: `What will this code print?

let value = "Global";

function test() {
    let value = "Function";

    if (true) {
        let value = "Block";
        console.log(value);
    }
}

test();`,
        options: [
            "Global",
            "Function",
            "Block",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The console.log is inside the block, where the closest value variable is the one declared in that block.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let value = "Global";

function test() {
    let value = "Function";

    if (true) {
        let value = "Block";
        console.log(value);
    }
}

test();`,
        faOptions: [
            "Global",
            "Function",
            "Block",
            "undefined",
        ],
        faExplanation:
            "دستور console.log داخل Block قرار دارد و نزدیک‌ترین Variable به آن همان value تعریف‌شده در Block است، بنابراین Block نمایش داده می‌شود.",
    },

    {
        id: 360,
        lessonId: 35,
        difficulty: "hard",
        question: `What will this code print?

let value = 10;

function test() {
    if (true) {
        let value = 20;
        console.log(value);
    }

    console.log(value);
}

test();`,
        options: [
            "20 then 20",
            "10 then 20",
            "20 then 10",
            "10 then 10",
        ],
        correctAnswer: 2,
        explanation:
            "The first console.log uses the block-scoped value of 20. After the block ends, the function uses the outer value of 10.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let value = 10;

function test() {
    if (true) {
        let value = 20;
        console.log(value);
    }

    console.log(value);
}

test();`,
        faOptions: [
            "20 سپس 20",
            "10 سپس 20",
            "20 سپس 10",
            "10 سپس 10",
        ],
        faExplanation:
            "دستور اول داخل Block به value برابر 20 دسترسی دارد، اما بعد از پایان Block، دستور دوم به value بیرونی برابر 10 دسترسی پیدا می‌کند.",
    },

    {
        id: 361,
        lessonId: 36,
        difficulty: "easy",
        question: "What does Lexical Scope describe?",
        options: [
            "Which variables are available based on where code is written",
            "How quickly a function executes",
            "How many parameters a function has",
            "How an Array stores its indexes",
        ],
        correctAnswer: 0,
        explanation:
            "Lexical Scope determines variable availability based on where code is written.",
        faQuestion: "Lexical Scope چه چیزی را مشخص می‌کند؟",
        faOptions: [
            "اینکه بر اساس محل نوشته شدن کد، کدام Variableها در دسترس هستند",
            "اینکه یک Function با چه سرعتی اجرا می‌شود",
            "اینکه یک Function چند Parameter دارد",
            "اینکه Array چگونه اندیس‌های خود را ذخیره می‌کند",
        ],
        faExplanation:
            "مفهوم Lexical Scope مشخص می‌کند که بر اساس محل نوشته شدن کد، کدام Variableها قابل دسترسی هستند.",
    },

    {
        id: 362,
        lessonId: 36,
        difficulty: "easy",
        question: `What will this code print?

let name = "Ali";

function greet() {
    console.log(name);
}

greet();`,
        options: [
            "Ali",
            "undefined",
            "name",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "The function can access name because name exists in its surrounding scope.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let name = "Ali";

function greet() {
    console.log(name);
}

greet();`,
        faOptions: [
            "Ali",
            "undefined",
            "name",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "تابع می‌تواند به name دسترسی داشته باشد، چون این Variable در Scope اطراف آن وجود دارد.",
    },

    {
        id: 363,
        lessonId: 36,
        difficulty: "easy",
        question: `What will this code print?

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();`,
        options: [
            "Hello",
            "undefined",
            "message",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "The inner function can access message from its outer function scope.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();`,
        faOptions: [
            "Hello",
            "undefined",
            "message",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "تابع داخلی می‌تواند به message از Scope تابع بیرونی دسترسی داشته باشد.",
    },

    {
        id: 364,
        lessonId: 36,
        difficulty: "easy",
        question: "What is a Closure?",
        options: [
            "A function that remembers variables from its surrounding scope",
            "A function that always has two parameters",
            "A variable that can only store numbers",
            "A loop that never ends",
        ],
        correctAnswer: 0,
        explanation:
            "A Closure allows a function to remember and access variables from its surrounding scope.",
        faQuestion: "Closure چیست؟",
        faOptions: [
            "تابعی که Variableهای Scope اطراف خود را به خاطر می‌سپارد",
            "تابعی که همیشه دو Parameter دارد",
            "Variableای که فقط می‌تواند Number نگهداری کند",
            "حلقه‌ای که هیچ‌وقت تمام نمی‌شود",
        ],
        faExplanation:
            "Closure به یک Function اجازه می‌دهد Variableهای Scope اطراف خود را به خاطر بسپارد و به آن‌ها دسترسی داشته باشد.",
    },

    {
        id: 365,
        lessonId: 36,
        difficulty: "medium",
        question: `What will this code print?

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());`,
        options: [
            "0",
            "1",
            "undefined",
            "It causes an error",
        ],
        correctAnswer: 1,
        explanation:
            "count starts at 0, then counter() increases it to 1 and returns that value.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());`,
        faOptions: [
            "0",
            "1",
            "undefined",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "متغیر count از 0 شروع می‌شود و با اجرای counter() ابتدا یک واحد افزایش پیدا می‌کند، بنابراین مقدار 1 برگردانده می‌شود.",
    },

    {
        id: 366,
        lessonId: 36,
        difficulty: "medium",
        question: `What will this code print?

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());`,
        options: [
            "1 then 1",
            "0 then 1",
            "1 then 2",
            "2 then 2",
        ],
        correctAnswer: 2,
        explanation:
            "The returned function remembers count between calls, so the values are 1 and then 2.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());`,
        faOptions: [
            "1 سپس 1",
            "0 سپس 1",
            "1 سپس 2",
            "2 سپس 2",
        ],
        faExplanation:
            "تابع برگشتی مقدار count را بین اجراها به خاطر می‌سپارد، بنابراین ابتدا 1 و سپس 2 نمایش داده می‌شود.",
    },

    {
        id: 367,
        lessonId: 36,
        difficulty: "medium",
        question: `What will this code print?

let value = "Global";

function outer() {
    let value = "Outer";

    function inner() {
        console.log(value);
    }

    inner();
}

outer();`,
        options: [
            "Global",
            "Outer",
            "undefined",
            "It causes an error",
        ],
        correctAnswer: 1,
        explanation:
            "The inner function uses the closest value variable available in its surrounding lexical scope: Outer.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let value = "Global";

function outer() {
    let value = "Outer";

    function inner() {
        console.log(value);
    }

    inner();
}

outer();`,
        faOptions: [
            "Global",
            "Outer",
            "undefined",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "تابع داخلی نزدیک‌ترین Variable به نام value را در Scope اطراف خود پیدا می‌کند که مقدار آن Outer است.",
    },

    {
        id: 368,
        lessonId: 36,
        difficulty: "medium",
        question: `What is preserved by this Closure?

function createMessage() {
    let message = "Hello";

    return function() {
        return message;
    };
}

let getMessage = createMessage();`,
        options: [
            "The message variable",
            "The createMessage function name only",
            "The return keyword",
            "Nothing",
        ],
        correctAnswer: 0,
        explanation:
            "The returned function preserves access to message from the surrounding scope.",
        faQuestion: `این Closure چه چیزی را حفظ می‌کند؟

function createMessage() {
    let message = "Hello";

    return function() {
        return message;
    };
}

let getMessage = createMessage();`,
        faOptions: [
            "Variable مربوط به message",
            "فقط نام Function مربوط به createMessage",
            "کلمه return",
            "هیچ چیزی",
        ],
        faExplanation:
            "تابع برگشتی همچنان به Variable مربوط به message از Scope اطراف خود دسترسی دارد.",
    },

    {
        id: 369,
        lessonId: 36,
        difficulty: "hard",
        question: `What will this code print?

function createCounter() {
    let count = 5;

    return function() {
        count += 2;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());`,
        options: [
            "5 then 7",
            "7 then 9",
            "7 then 7",
            "9 then 11",
        ],
        correctAnswer: 1,
        explanation:
            "count starts at 5. The first call changes it to 7, and the remembered value becomes 7 for the second call, which changes it to 9.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function createCounter() {
    let count = 5;

    return function() {
        count += 2;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());`,
        faOptions: [
            "5 سپس 7",
            "7 سپس 9",
            "7 سپس 7",
            "9 سپس 11",
        ],
        faExplanation:
            "مقدار count از 5 شروع می‌شود، در اجرای اول به 7 و در اجرای دوم با حفظ مقدار قبلی به 9 تغییر می‌کند.",
    },

    {
        id: 370,
        lessonId: 36,
        difficulty: "hard",
        question: `What will this code print?

function outer() {
    let value = "A";

    return function() {
        return value;
    };
}

let getValue = outer();

console.log(getValue());`,
        options: [
            "A",
            "undefined",
            "outer",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "The returned function keeps access to value through its Closure, so it returns A.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function outer() {
    let value = "A";

    return function() {
        return value;
    };
}

let getValue = outer();

console.log(getValue());`,
        faOptions: [
            "A",
            "undefined",
            "outer",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "تابع برگشتی از طریق Closure همچنان به value دسترسی دارد، بنابراین مقدار A را برمی‌گرداند.",
    },

    {
        id: 371,
        lessonId: 37,
        difficulty: "easy",
        question: "Which syntax creates a Template Literal in JavaScript?",
        options: [
            "Backticks",
            "Single quotes",
            "Double quotes",
            "Parentheses",
        ],
        correctAnswer: 0,
        explanation:
            "Template Literals are created using backticks.",
        faQuestion: "کدام Syntax یک Template Literal در JavaScript ایجاد می‌کند؟",
        faOptions: [
            "Backtick",
            "Single Quote",
            "Double Quote",
            "پرانتز",
        ],
        faExplanation:
            "برای ساخت Template Literal از Backtick استفاده می‌شود.",
    },

    {
        id: 372,
        lessonId: 37,
        difficulty: "easy",
        question: `What will this code print?

let name = "Ali";
let message = \`Hello \${name}\`;

console.log(message);`,
        options: [
            "Hello Ali",
            "Hello name",
            "Hello ${name}",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "The Template Literal replaces ${name} with the value stored in name.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let name = "Ali";
let message = \`Hello \${name}\`;

console.log(message);`,
        faOptions: [
            "Hello Ali",
            "Hello name",
            "Hello ${name}",
            "undefined",
        ],
        faExplanation:
            "در Template Literal، مقدار Variable مربوط به name جایگزین ${name} می‌شود.",
    },

    {
        id: 373,
        lessonId: 37,
        difficulty: "easy",
        question: `What will this code print?

let price = 10;
let quantity = 3;

console.log(\`Total: \${price * quantity}\`);`,
        options: [
            "Total: 13",
            "Total: 30",
            "Total: 103",
            "Total: price * quantity",
        ],
        correctAnswer: 1,
        explanation:
            "The expression price * quantity is evaluated as 10 * 3, producing 30.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let price = 10;
let quantity = 3;

console.log(\`Total: \${price * quantity}\`);`,
        faOptions: [
            "Total: 13",
            "Total: 30",
            "Total: 103",
            "Total: price * quantity",
        ],
        faExplanation:
            "عبارت داخل ${} محاسبه می‌شود و حاصل 10 × 3 برابر 30 است.",
    },

    {
        id: 374,
        lessonId: 37,
        difficulty: "easy",
        question: `What will this code print?

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();`,
        options: [
            "Hello Guest",
            "Hello undefined",
            "Hello name",
            "It causes an error",
        ],
        correctAnswer: 0,
        explanation:
            "No argument is provided, so the default value Guest is used for name.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();`,
        faOptions: [
            "Hello Guest",
            "Hello undefined",
            "Hello name",
            "باعث ایجاد خطا می‌شود",
        ],
        faExplanation:
            "چون هیچ Argumentی ارسال نشده است، مقدار پیش‌فرض Guest برای name استفاده می‌شود.",
    },

    {
        id: 375,
        lessonId: 37,
        difficulty: "medium",
        question: `What will this code print?

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Ali");`,
        options: [
            "Hello Guest",
            "Hello Ali",
            "Hello name",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The provided argument Ali replaces the default value Guest.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Ali");`,
        faOptions: [
            "Hello Guest",
            "Hello Ali",
            "Hello name",
            "undefined",
        ],
        faExplanation:
            "وقتی Argument برابر Ali ارسال می‌شود، مقدار ارسال‌شده جایگزین مقدار پیش‌فرض Guest می‌شود.",
    },

    {
        id: 376,
        lessonId: 37,
        difficulty: "medium",
        question: `What will this code print?

let name = "Sara";
let age = 20;

console.log(\`\${name} is \${age} years old.\`);`,
        options: [
            "Sara is 20 years old.",
            "${name} is ${age} years old.",
            "Sara is age years old.",
            "20 is Sara years old.",
        ],
        correctAnswer: 0,
        explanation:
            "Both variables are evaluated inside the Template Literal and replaced with their values.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let name = "Sara";
let age = 20;

console.log(\`\${name} is \${age} years old.\`);`,
        faOptions: [
            "Sara is 20 years old.",
            "${name} is ${age} years old.",
            "Sara is age years old.",
            "20 is Sara years old.",
        ],
        faExplanation:
            "در Template Literal، مقدارهای name و age به ترتیب جایگزین ${name} و ${age} می‌شوند.",
    },

    {
        id: 377,
        lessonId: 37,
        difficulty: "medium",
        question: `What will this code print?

function createMessage(message = "No message") {
    console.log(message);
}

createMessage();`,
        options: [
            "No message",
            "message",
            "undefined",
            "null",
        ],
        correctAnswer: 0,
        explanation:
            "Because no argument is provided, message receives the default value No message.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function createMessage(message = "No message") {
    console.log(message);
}

createMessage();`,
        faOptions: [
            "No message",
            "message",
            "undefined",
            "null",
        ],
        faExplanation:
            "چون Function بدون Argument اجرا شده است، Parameter مربوط به message مقدار پیش‌فرض No message را دریافت می‌کند.",
    },

    {
        id: 378,
        lessonId: 37,
        difficulty: "medium",
        question: `What will this code print?

function greet(name = "Guest") {
    return \`Hello \${name}\`;
}

console.log(greet());`,
        options: [
            "Hello Guest",
            "Hello name",
            "Hello undefined",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "The function uses Guest as the default name and returns Hello Guest.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet(name = "Guest") {
    return \`Hello \${name}\`;
}

console.log(greet());`,
        faOptions: [
            "Hello Guest",
            "Hello name",
            "Hello undefined",
            "undefined",
        ],
        faExplanation:
            "تابع بدون Argument اجرا می‌شود، بنابراین مقدار پیش‌فرض Guest استفاده شده و Hello Guest برگردانده می‌شود.",
    },

    {
        id: 379,
        lessonId: 37,
        difficulty: "hard",
        question: `What will this code print?

function calculate(price, quantity = 2) {
    return \`Total: \${price * quantity}\`;
}

console.log(calculate(50));`,
        options: [
            "Total: 50",
            "Total: 52",
            "Total: 100",
            "Total: undefined",
        ],
        correctAnswer: 2,
        explanation:
            "quantity uses its default value 2, so 50 * 2 produces 100.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function calculate(price, quantity = 2) {
    return \`Total: \${price * quantity}\`;
}

console.log(calculate(50));`,
        faOptions: [
            "Total: 50",
            "Total: 52",
            "Total: 100",
            "Total: undefined",
        ],
        faExplanation:
            "چون quantity ارسال نشده است، مقدار پیش‌فرض 2 استفاده می‌شود و حاصل 50 × 2 برابر 100 است.",
    },

    {
        id: 380,
        lessonId: 37,
        difficulty: "hard",
        question: `What will this code print?

function greet(name = "Guest") {
    return \`Hello \${name}\`;
}

console.log(greet("Ali"));`,
        options: [
            "Hello Guest",
            "Hello Ali",
            "Hello name",
            "Hello undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The argument Ali is provided, so it is used instead of the default value Guest.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet(name = "Guest") {
    return \`Hello \${name}\`;
}

console.log(greet("Ali"));`,
        faOptions: [
            "Hello Guest",
            "Hello Ali",
            "Hello name",
            "Hello undefined",
        ],
        faExplanation:
            "با ارسال Argument برابر Ali، مقدار ارسال‌شده استفاده می‌شود و مقدار پیش‌فرض Guest نادیده گرفته می‌شود.",
    },

    {
        id: 381,
        lessonId: 38,
        difficulty: "easy",
        question: "What does Spread Syntax do when used with an Array?",
        options: [
            "It expands the Array's values",
            "It deletes the Array",
            "It sorts the Array",
            "It converts the Array to a String",
        ],
        correctAnswer: 0,
        explanation:
            "Spread expands the values of an Array into the surrounding structure.",
        faQuestion: "Spread Syntax هنگام استفاده با Array چه کاری انجام می‌دهد؟",
        faOptions: [
            "مقدارهای Array را باز می‌کند",
            "Array را حذف می‌کند",
            "Array را مرتب می‌کند",
            "Array را به String تبدیل می‌کند",
        ],
        faExplanation:
            "Spread مقدارهای داخل Array را در ساختار جدید باز می‌کند.",
    },

    {
        id: 382,
        lessonId: 38,
        difficulty: "easy",
        question: `What will this code print?

let numbers = [1, 2];
let result = [...numbers, 3];

console.log(result);`,
        options: [
            "[1, 2]",
            "[3, 1, 2]",
            "[1, 2, 3]",
            "[[1, 2], 3]",
        ],
        correctAnswer: 2,
        explanation:
            "Spread expands the values of numbers, so 3 is added after 1 and 2.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let numbers = [1, 2];
let result = [...numbers, 3];

console.log(result);`,
        faOptions: [
            "[1, 2]",
            "[3, 1, 2]",
            "[1, 2, 3]",
            "[[1, 2], 3]",
        ],
        faExplanation:
            "Spread مقدارهای numbers را باز می‌کند و سپس مقدار 3 به انتهای Array اضافه می‌شود.",
    },

    {
        id: 383,
        lessonId: 38,
        difficulty: "easy",
        question: "What does Rest Syntax do in function parameters?",
        options: [
            "It collects multiple arguments into an Array",
            "It removes all arguments",
            "It converts arguments into an Object",
            "It limits the function to one argument",
        ],
        correctAnswer: 0,
        explanation:
            "Rest collects multiple arguments into an Array inside the function.",
        faQuestion: "Rest Syntax در Parameterهای Function چه کاری انجام می‌دهد؟",
        faOptions: [
            "چند Argument را داخل یک Array جمع می‌کند",
            "تمام Argumentها را حذف می‌کند",
            "Argumentها را به Object تبدیل می‌کند",
            "Function را به یک Argument محدود می‌کند",
        ],
        faExplanation:
            "Rest چند Argument را دریافت کرده و آن‌ها را داخل یک Array جمع می‌کند.",
    },

    {
        id: 384,
        lessonId: 38,
        difficulty: "easy",
        question: `What will this code print?

function test(...values) {
    console.log(values);
}

test(10, 20, 30);`,
        options: [
            "[10, 20, 30]",
            "10",
            "30",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "Rest collects all three arguments into the values Array.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function test(...values) {
    console.log(values);
}

test(10, 20, 30);`,
        faOptions: [
            "[10, 20, 30]",
            "10",
            "30",
            "undefined",
        ],
        faExplanation:
            "Rest هر سه Argument را داخل Array مربوط به values جمع می‌کند.",
    },

    {
        id: 385,
        lessonId: 38,
        difficulty: "medium",
        question: `What will this code print?

let first = [1, 2];
let second = [3, 4];

let result = [...first, ...second];

console.log(result);`,
        options: [
            "[1, 2, 3, 4]",
            "[[1, 2], [3, 4]]",
            "[3, 4, 1, 2]",
            "[1, 3, 2, 4]",
        ],
        correctAnswer: 0,
        explanation:
            "Both Arrays are expanded in order, producing 1, 2, 3, 4.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let first = [1, 2];
let second = [3, 4];

let result = [...first, ...second];

console.log(result);`,
        faOptions: [
            "[1, 2, 3, 4]",
            "[[1, 2], [3, 4]]",
            "[3, 4, 1, 2]",
            "[1, 3, 2, 4]",
        ],
        faExplanation:
            "Spread مقدارهای هر دو Array را به ترتیب باز می‌کند و نتیجه [1, 2, 3, 4] می‌شود.",
    },

    {
        id: 386,
        lessonId: 38,
        difficulty: "medium",
        question: `What will this code print?

function greet(firstName, ...others) {
    console.log(firstName);
    console.log(others);
}

greet("Ali", "Sara", "John");`,
        options: [
            "Ali and [Sara, John]",
            "Sara and [Ali, John]",
            "Ali and [John]",
            "undefined and [Sara, John]",
        ],
        correctAnswer: 0,
        explanation:
            "The first argument goes to firstName, while the remaining arguments are collected by others.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

function greet(firstName, ...others) {
    console.log(firstName);
    console.log(others);
}

greet("Ali", "Sara", "John");`,
        faOptions: [
            "Ali و [Sara, John]",
            "Sara و [Ali, John]",
            "Ali و [John]",
            "undefined و [Sara, John]",
        ],
        faExplanation:
            "Argument اول به firstName می‌رسد و Argumentهای باقی‌مانده داخل others جمع می‌شوند.",
    },

    {
        id: 387,
        lessonId: 38,
        difficulty: "medium",
        question: `What will this code print?

let original = ["A", "B"];
let copy = [...original];

copy.push("C");

console.log(original);`,
        options: [
            '["A", "B"]',
            '["A", "B", "C"]',
            '["C", "A", "B"]',
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "Spread creates a separate Array, so changing copy does not change original.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let original = ["A", "B"];
let copy = [...original];

copy.push("C");

console.log(original);`,
        faOptions: [
            '["A", "B"]',
            '["A", "B", "C"]',
            '["C", "A", "B"]',
            "undefined",
        ],
        faExplanation:
            "Spread یک Array جدا ایجاد می‌کند، بنابراین تغییر copy باعث تغییر original نمی‌شود.",
    },

    {
        id: 388,
        lessonId: 38,
        difficulty: "medium",
        question: `What will this code print?

let user = {
    name: "Ali",
    age: 25
};

let updatedUser = {
    ...user,
    city: "Baku"
};

console.log(updatedUser.city);`,
        options: [
            "Ali",
            "25",
            "Baku",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "Spread copies the existing properties and city is added with the value Baku.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let user = {
    name: "Ali",
    age: 25
};

let updatedUser = {
    ...user,
    city: "Baku"
};

console.log(updatedUser.city);`,
        faOptions: [
            "Ali",
            "25",
            "Baku",
            "undefined",
        ],
        faExplanation:
            "Spread Propertyهای قبلی را کپی می‌کند و city با مقدار Baku به Object جدید اضافه می‌شود.",
    },

    {
        id: 389,
        lessonId: 38,
        difficulty: "hard",
        question: `What will this code return?

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

sum(5, 10, 15);`,
        options: [
            "20",
            "25",
            "30",
            "35",
        ],
        correctAnswer: 2,
        explanation:
            "Rest collects 5, 10, and 15 into numbers, and the loop calculates 5 + 10 + 15 = 30.",
        faQuestion: `کد زیر چه مقداری برمی‌گرداند؟

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

sum(5, 10, 15);`,
        faOptions: [
            "20",
            "25",
            "30",
            "35",
        ],
        faExplanation:
            "Rest مقدارهای 5 و 10 و 15 را داخل numbers جمع می‌کند و مجموع آن‌ها برابر 30 می‌شود.",
    },

    {
        id: 390,
        lessonId: 38,
        difficulty: "hard",
        question: `What will this code print?

let base = {
    name: "Ali",
    age: 25
};

let user = {
    ...base,
    age: 26,
    city: "Baku"
};

console.log(user.age);`,
        options: [
            "25",
            "26",
            "Baku",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The later age property overwrites the copied age value, so user.age is 26.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let base = {
    name: "Ali",
    age: 25
};

let user = {
    ...base,
    age: 26,
    city: "Baku"
};

console.log(user.age);`,
        faOptions: [
            "25",
            "26",
            "Baku",
            "undefined",
        ],
        faExplanation:
            "در Object جدید، مقدار age که بعد از Spread نوشته شده است مقدار قبلی را بازنویسی می‌کند و برابر 26 می‌شود.",
    },

    {
        id: 391,
        lessonId: 39,
        difficulty: "easy",
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Document Operation Manager",
            "Dynamic Object Model",
        ],
        correctAnswer: 0,
        explanation:
            "DOM stands for Document Object Model, which represents the structure of a web page.",
        faQuestion: "DOM مخفف چیست؟",
        faOptions: [
            "Document Object Model",
            "Data Object Method",
            "Document Operation Manager",
            "Dynamic Object Model",
        ],
        faExplanation:
            "عبارت DOM مخفف Document Object Model است که ساختار صفحه وب را نمایش می‌دهد.",
    },

    {
        id: 392,
        lessonId: 39,
        difficulty: "easy",
        question: "Which method selects an element by its id?",
        options: [
            'document.getElementById("title")',
            'document.getElementByClass("title")',
            'document.selectId("title")',
            'document.queryId("title")',
        ],
        correctAnswer: 0,
        explanation:
            'getElementById("title") selects the element whose id is title.',
        faQuestion: "کدام Method یک Element را با id آن انتخاب می‌کند؟",
        faOptions: [
            'document.getElementById("title")',
            'document.getElementByClass("title")',
            'document.selectId("title")',
            'document.queryId("title")',
        ],
        faExplanation:
            'متد getElementById("title") المنتی را انتخاب می‌کند که id آن title باشد.',
    },

    {
        id: 393,
        lessonId: 39,
        difficulty: "easy",
        question: `Given &lt;h1 id="title"&gt;Hello&lt;/h1&gt;, which selector targets this element with querySelector()?`,
        options: [
            '"title"',
            '"#title"',
            '".title"',
            '"h1.title"',
        ],
        correctAnswer: 1,
        explanation:
            '"#title" is the CSS selector for an element with id="title".',
        faQuestion: `با توجه به &lt;h1 id="title"&gt;Hello&lt;/h1&gt;، کدام Selector در querySelector() این Element را انتخاب می‌کند؟`,
        faOptions: [
            '"title"',
            '"#title"',
            '".title"',
            '"h1.title"',
        ],
        faExplanation:
            'عبارت "#title" Selector مربوط به Element دارای id برابر title است.',
    },

    {
        id: 394,
        lessonId: 39,
        difficulty: "easy",
        question: `Which selector targets an element with class="card" using querySelector()?`,
        options: [
            '".card"',
            '"card"',
            '"#card"',
            '"*card"',
        ],
        correctAnswer: 0,
        explanation:
            '".card" is the CSS selector for an element with class="card".',
        faQuestion: `کدام Selector با querySelector() المنت دارای class="card" را انتخاب می‌کند؟`,
        faOptions: [
            '".card"',
            '"card"',
            '"#card"',
            '"*card"',
        ],
        faExplanation:
            'عبارت ".card" Selector مربوط به Element دارای class برابر card است.',
    },

    {
        id: 395,
        lessonId: 39,
        difficulty: "medium",
        question: `Given these elements:

&lt;p class="item"&gt;One&lt;/p&gt;
&lt;p class="item"&gt;Two&lt;/p&gt;

Which method selects both elements?`,
        options: [
            'document.querySelector(".item")',
            'document.getElementById("item")',
            'document.querySelectorAll(".item")',
            'document.querySelectorAll("#item")',
        ],
        correctAnswer: 2,
        explanation:
            'querySelectorAll(".item") selects all elements matching the .item CSS selector.',
        faQuestion: `با توجه به این Elementها:

&lt;p class="item"&gt;One&lt;/p&gt;
&lt;p class="item"&gt;Two&lt;/p&gt;

کدام Method هر دو Element را انتخاب می‌کند؟`,
        faOptions: [
            'document.querySelector(".item")',
            'document.getElementById("item")',
            'document.querySelectorAll(".item")',
            'document.querySelectorAll("#item")',
        ],
        faExplanation:
            'متد querySelectorAll(".item") تمام Elementهای دارای Class مربوط به item را انتخاب می‌کند.',
    },

    {
        id: 396,
        lessonId: 39,
        difficulty: "medium",
        question: 'What does querySelector("button") return?',
        options: [
            "All button elements",
            "The first matching button element",
            "The button's text only",
            "The button's id only",
        ],
        correctAnswer: 1,
        explanation:
            'querySelector("button") returns the first element matching the button selector.',
        faQuestion: 'querySelector("button") چه چیزی را برمی‌گرداند؟',
        faOptions: [
            "تمام Buttonها",
            "اولین Button مطابق Selector",
            "فقط متن Button",
            "فقط id مربوط به Button",
        ],
        faExplanation:
            'متد querySelector("button") اولین Element مطابق Selector مربوط به button را برمی‌گرداند.',
    },

    {
        id: 397,
        lessonId: 39,
        difficulty: "medium",
        question: 'What does querySelectorAll(".item") return?',
        options: [
            "Only the first matching element",
            "The id of the matching elements",
            "All elements matching .item",
            "The text of every matching element",
        ],
        correctAnswer: 2,
        explanation:
            'querySelectorAll(".item") returns a collection containing all elements that match .item.',
        faQuestion: 'querySelectorAll(".item") چه چیزی را برمی‌گرداند؟',
        faOptions: [
            "فقط اولین Element مطابق",
            "id مربوط به Elementها",
            "تمام Elementهای مطابق با .item",
            "متن تمام Elementهای مطابق",
        ],
        faExplanation:
            'متد querySelectorAll(".item") مجموعه‌ای شامل تمام Elementهای مطابق با .item را برمی‌گرداند.',
    },

    {
        id: 398,
        lessonId: 39,
        difficulty: "medium",
        question: `Given:

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;

let title = document.getElementById("title");

What does title refer to?`,
        options: [
            "The h1 element",
            "The text Hello as a String",
            "The id name as a String",
            "The entire HTML document",
        ],
        correctAnswer: 0,
        explanation:
            'getElementById("title") returns the element with id="title", so title refers to the h1 element.',
        faQuestion: `با توجه به کد زیر، title به چه چیزی اشاره می‌کند؟

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;

let title = document.getElementById("title");`,
        faOptions: [
            "Element مربوط به h1",
            "متن Hello به صورت String",
            "نام id به صورت String",
            "کل Document مربوط به HTML",
        ],
        faExplanation:
            'متد getElementById("title") خود Element دارای id برابر title را برمی‌گرداند.',
    },

    {
        id: 399,
        lessonId: 39,
        difficulty: "hard",
        question: `Given:

&lt;h1 class="title"&gt;Hello&lt;/h1&gt;
&lt;h1 class="title"&gt;Welcome&lt;/h1&gt;

Which expression selects both elements?`,
        options: [
            'document.querySelector(".title")',
            'document.querySelectorAll(".title")',
            'document.getElementById("title")',
            'document.querySelector("#title")',
        ],
        correctAnswer: 1,
        explanation:
            'querySelectorAll(".title") selects every element matching the .title selector.',
        faQuestion: `با توجه به کد زیر، کدام عبارت هر دو Element را انتخاب می‌کند؟

&lt;h1 class="title"&gt;Hello&lt;/h1&gt;
&lt;h1 class="title"&gt;Welcome&lt;/h1&gt;`,
        faOptions: [
            'document.querySelector(".title")',
            'document.querySelectorAll(".title")',
            'document.getElementById("title")',
            'document.querySelector("#title")',
        ],
        faExplanation:
            'عبارت querySelectorAll(".title") تمام Elementهای دارای Class برابر title را انتخاب می‌کند.',
    },

    {
        id: 400,
        lessonId: 39,
        difficulty: "hard",
        question: `Given:

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;
&lt;p id="text"&gt;Welcome&lt;/p&gt;

Which expression selects the p element?`,
        options: [
            'document.querySelector("#title")',
            'document.querySelector("#text")',
            'document.getElementById("title")',
            'document.querySelector(".text")',
        ],
        correctAnswer: 1,
        explanation:
            'The p element has id="text", so #text selects it with querySelector.',
        faQuestion: `با توجه به کد زیر، کدام عبارت Element مربوط به p را انتخاب می‌کند؟`,
        faOptions: [
            'document.querySelector("#title")',
            'document.querySelector("#text")',
            'document.getElementById("title")',
            'document.querySelector(".text")',
        ],
        faExplanation:
            'Element مربوط به p دارای id برابر text است، بنابراین #text آن را انتخاب می‌کند.',
    },

    {
        id: 401,
        lessonId: 40,
        difficulty: "easy",
        question: `Given:

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;

let title = document.getElementById("title");
title.textContent = "Welcome";

What will the h1 display?`,
        options: [
            "Hello",
            "Welcome",
            "title",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            'textContent replaces the existing text with "Welcome".',
        faQuestion: `با توجه به کد زیر، متن h1 چه چیزی خواهد بود؟

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;

let title = document.getElementById("title");
title.textContent = "Welcome";`,
        faOptions: [
            "Hello",
            "Welcome",
            "title",
            "undefined",
        ],
        faExplanation:
            'متد textContent متن قبلی را با مقدار "Welcome" جایگزین می‌کند.',
    },

    {
        id: 402,
        lessonId: 40,
        difficulty: "easy",
        question: "Which property changes the text inside an element?",
        options: [
            "textContent",
            "classList",
            "style",
            "setAttribute",
        ],
        correctAnswer: 0,
        explanation:
            "textContent is used to read or change the text inside an element.",
        faQuestion: "کدام Property متن داخل یک Element را تغییر می‌دهد؟",
        faOptions: [
            "textContent",
            "classList",
            "style",
            "setAttribute",
        ],
        faExplanation:
            "Property مربوط به textContent برای خواندن یا تغییر متن داخل یک Element استفاده می‌شود.",
    },

    {
        id: 403,
        lessonId: 40,
        difficulty: "easy",
        question: "Which property can interpret HTML markup assigned to an element?",
        options: [
            "textContent",
            "innerHTML",
            "classList",
            "getAttribute",
        ],
        correctAnswer: 1,
        explanation:
            "innerHTML interprets HTML markup assigned as the element's content.",
        faQuestion: "کدام Property می‌تواند Markup مربوط به HTML را در محتوای یک Element تفسیر کند؟",
        faOptions: [
            "textContent",
            "innerHTML",
            "classList",
            "getAttribute",
        ],
        faExplanation:
            "Property مربوط به innerHTML محتوای HTML را به عنوان Markup تفسیر می‌کند.",
    },

    {
        id: 404,
        lessonId: 40,
        difficulty: "easy",
        question: "Which property is used to change an element's inline styles?",
        options: [
            "style",
            "textContent",
            "classList",
            "innerHTML",
        ],
        correctAnswer: 0,
        explanation:
            "The style property is used to change an element's inline CSS styles.",
        faQuestion: "کدام Property برای تغییر Inline Style یک Element استفاده می‌شود؟",
        faOptions: [
            "style",
            "textContent",
            "classList",
            "innerHTML",
        ],
        faExplanation:
            "Property مربوط به style برای تغییر Inline Styleهای یک Element استفاده می‌شود.",
    },

    {
        id: 405,
        lessonId: 40,
        difficulty: "medium",
        question: `Given:

let title = document.getElementById("title");

title.style.backgroundColor = "blue";

Which CSS property is being changed?`,
        options: [
            "background-color",
            "font-size",
            "color",
            "border-color",
        ],
        correctAnswer: 0,
        explanation:
            "backgroundColor is the JavaScript camelCase form of the CSS property background-color.",
        faQuestion: `با توجه به کد زیر، کدام Property مربوط به CSS تغییر می‌کند؟

let title = document.getElementById("title");

title.style.backgroundColor = "blue";`,
        faOptions: [
            "background-color",
            "font-size",
            "color",
            "border-color",
        ],
        faExplanation:
            "Property مربوط به backgroundColor شکل camelCase مربوط به background-color در JavaScript است.",
    },

    {
        id: 406,
        lessonId: 40,
        difficulty: "medium",
        question: "Which method adds a class to an element?",
        options: [
            'classList.add("active")',
            'classList.remove("active")',
            'classList.toggle("active")',
            'classList.get("active")',
        ],
        correctAnswer: 0,
        explanation:
            'classList.add("active") adds the active class to the element.',
        faQuestion: "کدام Method یک Class را به Element اضافه می‌کند؟",
        faOptions: [
            'classList.add("active")',
            'classList.remove("active")',
            'classList.toggle("active")',
            'classList.get("active")',
        ],
        faExplanation:
            'عبارت classList.add("active") کلاس active را به Element اضافه می‌کند.',
    },

    {
        id: 407,
        lessonId: 40,
        difficulty: "medium",
        question: "Which method removes a class from an element?",
        options: [
            'classList.add("active")',
            'classList.remove("active")',
            'classList.toggle("active")',
            'classList.set("active")',
        ],
        correctAnswer: 1,
        explanation:
            'classList.remove("active") removes the active class from the element.',
        faQuestion: "کدام Method یک Class را از Element حذف می‌کند؟",
        faOptions: [
            'classList.add("active")',
            'classList.remove("active")',
            'classList.toggle("active")',
            'classList.set("active")',
        ],
        faExplanation:
            'عبارت classList.remove("active") کلاس active را از Element حذف می‌کند.',
    },

    {
        id: 408,
        lessonId: 40,
        difficulty: "medium",
        question: `Given:

let link = document.querySelector("a");

link.setAttribute("href", "https://example.com");

What does setAttribute() do here?`,
        options: [
            "Changes the link's href attribute",
            "Changes the link's text",
            "Removes the link",
            "Adds a CSS class",
        ],
        correctAnswer: 0,
        explanation:
            'setAttribute("href", "https://example.com") sets or changes the href attribute.',
        faQuestion: `با توجه به کد زیر، setAttribute() چه کاری انجام می‌دهد؟

let link = document.querySelector("a");

link.setAttribute("href", "https://example.com");`,
        faOptions: [
            "Attribute مربوط به href لینک را تغییر می‌دهد",
            "متن لینک را تغییر می‌دهد",
            "لینک را حذف می‌کند",
            "یک Class به لینک اضافه می‌کند",
        ],
        faExplanation:
            'متد setAttribute() مقدار Attribute مربوط به href را روی آدرس مشخص‌شده قرار می‌دهد.',
    },

    {
        id: 409,
        lessonId: 40,
        difficulty: "hard",
        question: `Given:

&lt;div id="box"&gt;Hello&lt;/div&gt;

let box = document.getElementById("box");

box.textContent = "&lt;strong&gt;Hi&lt;/strong&gt;";

What will be displayed inside the div?`,
        options: [
            "Hi in bold text",
            "&lt;strong&gt;Hi&lt;/strong&gt; as visible text",
            "Hello",
            "Nothing",
        ],
        correctAnswer: 1,
        explanation:
            "textContent treats the assigned HTML tags as plain text, so the tags are displayed instead of interpreted.",
        faQuestion: `با توجه به کد زیر، چه چیزی داخل div نمایش داده می‌شود؟

&lt;div id="box"&gt;Hello&lt;/div&gt;

let box = document.getElementById("box");

box.textContent = "&lt;strong&gt;Hi&lt;/strong&gt;";`,
        faOptions: [
            "Hi به صورت Bold",
            "&lt;strong&gt;Hi&lt;/strong&gt; as visible text",
            "Hello",
            "هیچ چیزی",
        ],
        faExplanation:
            "متد textContent تگ‌های HTML را به عنوان متن معمولی در نظر می‌گیرد، بنابراین خود تگ‌ها نمایش داده می‌شوند.",
    },

    {
        id: 410,
        lessonId: 40,
        difficulty: "hard",
        question: `Given:

&lt;div id="box"&gt;Hello&lt;/div&gt;

let box = document.getElementById("box");

box.innerHTML = "&lt;strong&gt;Hi&lt;/strong&gt;";

What will the browser display?`,
        options: [
            "&lt;strong&gt;Hi&lt;/strong&gt; به صورت متن",
            "Hello",
            "Hi in bold text",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "innerHTML interprets the strong markup, so Hi is rendered as bold text.",
        faQuestion: `با توجه به کد زیر، مرورگر چه چیزی را نمایش می‌دهد؟

&lt;div id="box"&gt;Hello&lt;/div&gt;

let box = document.getElementById("box");

box.innerHTML = "&lt;strong&gt;Hi&lt;/strong&gt;";`,
        faOptions: [
            "&lt;strong&gt;Hi&lt;/strong&gt; به صورت متن",
            "Hello",
            "Hi به صورت Bold",
            "undefined",
        ],
        faExplanation:
            "متد innerHTML تگ strong را به عنوان HTML تفسیر می‌کند، بنابراین Hi به صورت Bold نمایش داده می‌شود.",
    },

    {
        id: 411,
        lessonId: 41,
        difficulty: "easy",
        question: "Which method creates a new HTML element?",
        options: [
            'document.createElement("p")',
            'document.newElement("p")',
            'document.addElement("p")',
            'document.makeElement("p")',
        ],
        correctAnswer: 0,
        explanation:
            'document.createElement("p") creates a new p element.',
        faQuestion: "کدام Method یک Element جدید HTML ایجاد می‌کند؟",
        faOptions: [
            'document.createElement("p")',
            'document.newElement("p")',
            'document.addElement("p")',
            'document.makeElement("p")',
        ],
        faExplanation:
            'متد document.createElement("p") یک Element جدید از نوع p ایجاد می‌کند.',
    },

    {
        id: 412,
        lessonId: 41,
        difficulty: "easy",
        question: "Does createElement() automatically add the new element to the page?",
        options: [
            "Yes, always",
            "No, it only creates the element",
            "Only when using textContent",
            "Only when using remove()",
        ],
        correctAnswer: 1,
        explanation:
            "createElement() creates the element, but another method such as append() is needed to add it to the page.",
        faQuestion: "آیا createElement() به صورت خودکار Element جدید را به صفحه اضافه می‌کند؟",
        faOptions: [
            "بله، همیشه",
            "خیر، فقط Element را ایجاد می‌کند",
            "فقط هنگام استفاده از textContent",
            "فقط هنگام استفاده از remove()",
        ],
        faExplanation:
            "متد createElement() فقط Element را ایجاد می‌کند و برای اضافه کردن آن به صفحه به متدی مانند append() نیاز است.",
    },

    {
        id: 413,
        lessonId: 41,
        difficulty: "easy",
        question: "Which method adds an element to the end of another element?",
        options: [
            "append()",
            "prepend()",
            "remove()",
            "createElement()",
        ],
        correctAnswer: 0,
        explanation:
            "append() adds the specified content to the end of an element.",
        faQuestion: "کدام Method یک Element را به انتهای Element دیگر اضافه می‌کند؟",
        faOptions: [
            "append()",
            "prepend()",
            "remove()",
            "createElement()",
        ],
        faExplanation:
            "متد append() محتوای مشخص‌شده را به انتهای یک Element اضافه می‌کند.",
    },

    {
        id: 414,
        lessonId: 41,
        difficulty: "easy",
        question: "Which method adds an element to the beginning of another element?",
        options: [
            "append()",
            "prepend()",
            "remove()",
            "createElement()",
        ],
        correctAnswer: 1,
        explanation:
            "prepend() adds the specified content to the beginning of an element.",
        faQuestion: "کدام Method یک Element را به ابتدای Element دیگر اضافه می‌کند؟",
        faOptions: [
            "append()",
            "prepend()",
            "remove()",
            "createElement()",
        ],
        faExplanation:
            "متد prepend() محتوای مشخص‌شده را به ابتدای یک Element اضافه می‌کند.",
    },

    {
        id: 415,
        lessonId: 41,
        difficulty: "medium",
        question: `What will this code add to the page?

let button = document.createElement("button");
button.textContent = "Click me";
document.body.append(button);`,
        options: [
            "A new button with the text Click me",
            "A new paragraph with the text Click me",
            "A new button without any text",
            "Nothing",
        ],
        correctAnswer: 0,
        explanation:
            'createElement("button") creates the button, textContent gives it text, and append() adds it to the page.',
        faQuestion: `کد زیر چه چیزی به صفحه اضافه می‌کند؟

let button = document.createElement("button");
button.textContent = "Click me";
document.body.append(button);`,
        faOptions: [
            "یک Button جدید با متن Click me",
            "یک Paragraph جدید با متن Click me",
            "یک Button جدید بدون متن",
            "هیچ چیزی",
        ],
        faExplanation:
            'ابتدا createElement("button") یک Button می‌سازد، سپس textContent متن را قرار می‌دهد و append() آن را به صفحه اضافه می‌کند.',
    },

    {
        id: 416,
        lessonId: 41,
        difficulty: "medium",
        question: `Given:

let box = document.getElementById("box");
let item = document.createElement("p");

item.textContent = "Hello";
box.append(item);

Where is item added inside box?`,
        options: [
            "At the beginning",
            "At the end",
            "It is removed",
            "It is not added",
        ],
        correctAnswer: 1,
        explanation:
            "append() adds the new element to the end of the parent's content.",
        faQuestion: `با توجه به کد زیر، item در کجای box قرار می‌گیرد؟

let box = document.getElementById("box");
let item = document.createElement("p");

item.textContent = "Hello";
box.append(item);`,
        faOptions: [
            "در ابتدا",
            "در انتها",
            "حذف می‌شود",
            "اضافه نمی‌شود",
        ],
        faExplanation:
            "متد append() Element جدید را به انتهای محتوای Element والد اضافه می‌کند.",
    },

    {
        id: 417,
        lessonId: 41,
        difficulty: "medium",
        question: `Given:

let box = document.getElementById("box");
let item = document.createElement("p");

item.textContent = "Hello";
box.prepend(item);

Where is item added inside box?`,
        options: [
            "At the beginning",
            "At the end",
            "It is removed",
            "It is added outside the page",
        ],
        correctAnswer: 0,
        explanation:
            "prepend() adds the new element to the beginning of the parent's content.",
        faQuestion: `با توجه به کد زیر، item در کجای box قرار می‌گیرد؟

let box = document.getElementById("box");
let item = document.createElement("p");

item.textContent = "Hello";
box.prepend(item);`,
        faOptions: [
            "در ابتدا",
            "در انتها",
            "حذف می‌شود",
            "خارج از صفحه اضافه می‌شود",
        ],
        faExplanation:
            "متد prepend() Element جدید را به ابتدای محتوای Element والد اضافه می‌کند.",
    },

    {
        id: 418,
        lessonId: 41,
        difficulty: "medium",
        question: "Which method removes an existing element from the DOM?",
        options: [
            "append()",
            "prepend()",
            "remove()",
            "createElement()",
        ],
        correctAnswer: 2,
        explanation:
            "remove() removes the selected element from the DOM.",
        faQuestion: "کدام Method یک Element موجود را از DOM حذف می‌کند؟",
        faOptions: [
            "append()",
            "prepend()",
            "remove()",
            "createElement()",
        ],
        faExplanation:
            "متد remove() Element انتخاب‌شده را از DOM حذف می‌کند.",
    },

    {
        id: 419,
        lessonId: 41,
        difficulty: "hard",
        question: `What will this code do?

let paragraph = document.createElement("p");
paragraph.textContent = "Hello";

document.body.append(paragraph);

paragraph.remove();`,
        options: [
            "It creates and keeps the paragraph",
            "It creates the paragraph and then removes it",
            "It removes the entire body",
            "It changes the paragraph into a button",
        ],
        correctAnswer: 1,
        explanation:
            "The paragraph is created and added to the body, then remove() removes that paragraph.",
        faQuestion: `کد زیر چه کاری انجام می‌دهد؟

let paragraph = document.createElement("p");
paragraph.textContent = "Hello";

document.body.append(paragraph);

paragraph.remove();`,
        faOptions: [
            "Paragraph را ایجاد کرده و نگه می‌دارد",
            "Paragraph را ایجاد کرده و سپس حذف می‌کند",
            "کل Body را حذف می‌کند",
            "Paragraph را به Button تبدیل می‌کند",
        ],
        faExplanation:
            "ابتدا Paragraph ایجاد و به Body اضافه می‌شود، سپس متد remove() همان Paragraph را از DOM حذف می‌کند.",
    },

    {
        id: 420,
        lessonId: 41,
        difficulty: "hard",
        question: `What will the page contain after this code runs?

let first = document.createElement("p");
first.textContent = "First";

let second = document.createElement("p");
second.textContent = "Second";

document.body.append(first);
document.body.prepend(second);`,
        options: [
            "First, then Second",
            "Second, then First",
            "Only First",
            "Only Second",
        ],
        correctAnswer: 1,
        explanation:
            "first is appended to the body, then second is prepended before the existing first element.",
        faQuestion: `بعد از اجرای کد زیر، صفحه چه ترتیبی از متن‌ها خواهد داشت؟

let first = document.createElement("p");
first.textContent = "First";

let second = document.createElement("p");
second.textContent = "Second";

document.body.append(first);
document.body.prepend(second);`,
        faOptions: [
            "First و سپس Second",
            "Second و سپس First",
            "فقط First",
            "فقط Second",
        ],
        explanation:
            "ابتدا first با append() اضافه می‌شود و سپس second با prepend() قبل از first قرار می‌گیرد.",
        faExplanation:
            "ابتدا first با append() اضافه می‌شود و سپس second با prepend() قبل از first قرار می‌گیرد.",
    },

    {
        id: 421,
        lessonId: 42,
        difficulty: "easy",
        question: "Which method is used to listen for an event on an element?",
        options: [
            "addEventListener()",
            "listenEvent()",
            "eventListener()",
            "addEvent()",
        ],
        correctAnswer: 0,
        explanation:
            "addEventListener() registers a function to run when the specified event occurs.",
        faQuestion: "کدام Method برای گوش دادن به یک Event روی یک Element استفاده می‌شود؟",
        faOptions: [
            "addEventListener()",
            "listenEvent()",
            "eventListener()",
            "addEvent()",
        ],
        faExplanation:
            "متد addEventListener() یک Function را برای اجرای هنگام رخ دادن Event مشخص ثبت می‌کند.",
    },

    {
        id: 422,
        lessonId: 42,
        difficulty: "easy",
        question: 'In button.addEventListener("click", handler), what does "click" represent?',
        options: [
            "The callback function",
            "The event type",
            "The element",
            "The return value",
        ],
        correctAnswer: 1,
        explanation:
            '"click" is the event type that tells the listener which event to watch for.',
        faQuestion: 'در button.addEventListener("click", handler)، عبارت "click" نشان‌دهنده چیست؟',
        faOptions: [
            "Callback Function",
            "نوع Event",
            "Element",
            "مقدار برگشتی",
        ],
        faExplanation:
            'عبارت "click" نوع Event را مشخص می‌کند که Listener باید منتظر آن بماند.',
    },

    {
        id: 423,
        lessonId: 42,
        difficulty: "easy",
        question: "What is the second argument of addEventListener() normally used for?",
        options: [
            "The event name",
            "The element selector",
            "The callback function",
            "The HTML tag",
        ],
        correctAnswer: 2,
        explanation:
            "The second argument is the callback function that runs when the event occurs.",
        faQuestion: "آرگومان دوم addEventListener() معمولاً برای چه چیزی استفاده می‌شود؟",
        faOptions: [
            "نام Event",
            "Selector مربوط به Element",
            "Callback Function",
            "Tag مربوط به HTML",
        ],
        faExplanation:
            "آرگومان دوم معمولاً Callback Function است که هنگام رخ دادن Event اجرا می‌شود.",
    },

    {
        id: 424,
        lessonId: 42,
        difficulty: "easy",
        question: "Which event is triggered when a user clicks an element?",
        options: [
            "keydown",
            "mouseover",
            "click",
            "submit",
        ],
        correctAnswer: 2,
        explanation:
            "The click event occurs when the user clicks the element.",
        faQuestion: "کدام Event زمانی رخ می‌دهد که کاربر روی یک Element کلیک کند؟",
        faOptions: [
            "keydown",
            "mouseover",
            "click",
            "submit",
        ],
        faExplanation:
            "رویداد click زمانی رخ می‌دهد که کاربر روی Element کلیک کند.",
    },

    {
        id: 425,
        lessonId: 42,
        difficulty: "medium",
        question: `What will happen when the button is clicked?

let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Hello");
});`,
        options: [
            "Hello is logged",
            "The button is removed",
            "Nothing happens",
            "A new button is created",
        ],
        correctAnswer: 0,
        explanation:
            'The click event triggers the callback, which runs console.log("Hello").',
        faQuestion: `وقتی Button کلیک شود، چه اتفاقی می‌افتد؟

let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Hello");
});`,
        faOptions: [
            "متن Hello نمایش داده می‌شود",
            "Button حذف می‌شود",
            "هیچ اتفاقی نمی‌افتد",
            "یک Button جدید ساخته می‌شود",
        ],
        faExplanation:
            'با رخ دادن click، Callback اجرا می‌شود و console.log("Hello") را اجرا می‌کند.',
    },

    {
        id: 426,
        lessonId: 42,
        difficulty: "medium",
        question: `Which version correctly registers handleClick to run when the button is clicked?

function handleClick() {
    console.log("Clicked");
}`,
        options: [
            'button.addEventListener("click", handleClick)',
            'button.addEventListener("click", handleClick())',
            'button.addEventListener(handleClick, "click")',
            'button.addEventListener("handleClick", click)',
        ],
        correctAnswer: 0,
        explanation:
            'handleClick is passed as the callback function, so it runs when the click event occurs.',
        faQuestion: `کدام نسخه handleClick را به‌درستی ثبت می‌کند تا هنگام کلیک روی Button اجرا شود؟

function handleClick() {
    console.log("Clicked");
}`,
        faOptions: [
            'button.addEventListener("click", handleClick)',
            'button.addEventListener("click", handleClick())',
            'button.addEventListener(handleClick, "click")',
            'button.addEventListener("handleClick", click)',
        ],
        faExplanation:
            "در این ساختار خود Function به عنوان Callback ارسال می‌شود تا هنگام رخ دادن click اجرا شود.",
    },

    {
        id: 427,
        lessonId: 42,
        difficulty: "medium",
        question: `What is the role of this function?

button.addEventListener("click", function() {
    console.log("Clicked");
});`,
        options: [
            "It selects the button",
            "It is the callback function",
            "It creates the event",
            "It removes the listener",
        ],
        correctAnswer: 1,
        explanation:
            "The function passed as the second argument is the callback that runs when the event occurs.",
        faQuestion: `نقش این Function در کد زیر چیست؟

button.addEventListener("click", function() {
    console.log("Clicked");
});`,
        faOptions: [
            "Button را انتخاب می‌کند",
            "یک Callback Function است",
            "Event را ایجاد می‌کند",
            "Listener را حذف می‌کند",
        ],
        faExplanation:
            "تابعی که به عنوان آرگومان دوم قرار گرفته است، Callback است و هنگام رخ دادن Event اجرا می‌شود.",
    },

    {
        id: 428,
        lessonId: 42,
        difficulty: "medium",
        question: `What happens when this code is registered?

button.addEventListener("click", handleClick());

function handleClick() {
    console.log("Clicked");
}`,
        options: [
            "handleClick runs immediately",
            "handleClick waits for a click",
            "The listener is removed",
            "A new event type is created",
        ],
        correctAnswer: 0,
        explanation:
            "handleClick() calls the function immediately, so its result is passed instead of the function itself.",
        faQuestion: `وقتی کد زیر ثبت شود، چه اتفاقی می‌افتد؟

button.addEventListener("click", handleClick());

function handleClick() {
    console.log("Clicked");
}`,
        faOptions: [
            "handleClick همان لحظه اجرا می‌شود",
            "handleClick منتظر کلیک می‌ماند",
            "Listener حذف می‌شود",
            "یک نوع Event جدید ساخته می‌شود",
        ],
        faExplanation:
            "نوشتن handleClick() باعث می‌شود Function همان لحظه فراخوانی شود و نتیجه آن ارسال شود، نه خود Function.",
    },

    {
        id: 429,
        lessonId: 42,
        difficulty: "hard",
        question: `What will happen in this code?

let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("A");
});

button.addEventListener("click", () => {
    console.log("B");
});`,
        options: [
            "Only A is logged",
            "Only B is logged",
            "A and B are logged",
            "Nothing is logged",
        ],
        correctAnswer: 2,
        explanation:
            "Both listeners are registered for the same click event, so both callbacks run.",
        faQuestion: `کد زیر هنگام کلیک روی Button چه چیزی را نمایش می‌دهد؟

let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("A");
});

button.addEventListener("click", () => {
    console.log("B");
});`,
        faOptions: [
            "فقط A نمایش داده می‌شود",
            "فقط B نمایش داده می‌شود",
            "A و B نمایش داده می‌شوند",
            "هیچ چیزی نمایش داده نمی‌شود",
        ],
        explanation:
            "هر دو Listener برای Event مربوط به click ثبت شده‌اند، بنابراین هر دو Callback اجرا می‌شوند.",
        faExplanation:
            "هر دو Listener برای Event مربوط به click ثبت شده‌اند، بنابراین هر دو Callback اجرا می‌شوند.",
    },

    {
        id: 430,
        lessonId: 42,
        difficulty: "hard",
        question: `What will happen when the button is clicked?

let count = 0;

button.addEventListener("click", () => {
    count++;
});

button.addEventListener("click", () => {
    console.log(count);
});`,
        options: [
            "0",
            "1",
            "2",
            "The code throws an error",
        ],
        correctAnswer: 1,
        explanation:
            "Both click listeners run for the same event. The first increments count to 1, then the second logs 1.",
        faQuestion: `وقتی روی Button کلیک شود، چه مقداری نمایش داده می‌شود؟

let count = 0;

button.addEventListener("click", () => {
    count++;
});

button.addEventListener("click", () => {
    console.log(count);
});`,
        faOptions: [
            "0",
            "1",
            "2",
            "کد با خطا متوقف می‌شود",
        ],
        explanation:
            "هر دو Listener برای یک click اجرا می‌شوند. ابتدا count به 1 افزایش پیدا می‌کند و سپس مقدار 1 نمایش داده می‌شود.",
        faExplanation:
            "هر دو Listener برای یک click اجرا می‌شوند. ابتدا count به 1 افزایش پیدا می‌کند و سپس مقدار 1 نمایش داده می‌شود.",
    },

    {
        id: 431,
        lessonId: 43,
        difficulty: "easy",
        question: "Which property gives you the current value of an input element?",
        options: [
            ".text",
            ".value",
            ".content",
            ".input",
        ],
        correctAnswer: 1,
        explanation:
            "The value property contains the current value entered into an input element.",
        faQuestion: "کدام Property مقدار فعلی یک Input را در اختیار قرار می‌دهد؟",
        faOptions: [
            ".text",
            ".value",
            ".content",
            ".input",
        ],
        faExplanation:
            "Property مربوط به value مقدار فعلی واردشده در Input را نگهداری می‌کند.",
    },

    {
        id: 432,
        lessonId: 43,
        difficulty: "easy",
        question: 'Which event runs when the value of an input changes?',
        options: [
            '"submit"',
            '"click"',
            '"input"',
            '"changeValue"',
        ],
        correctAnswer: 2,
        explanation:
            'The "input" event runs when the value of an input changes through user input.',
        faQuestion: 'کدام Event هنگام تغییر مقدار یک Input اجرا می‌شود؟',
        faOptions: [
            '"submit"',
            '"click"',
            '"input"',
            '"changeValue"',
        ],
        faExplanation:
            'رویداد "input" هنگام تغییر مقدار Input از طریق ورودی کاربر اجرا می‌شود.',
    },

    {
        id: 433,
        lessonId: 43,
        difficulty: "easy",
        question: 'Which event is specifically used to detect a form submission?',
        options: [
            '"input"',
            '"submit"',
            '"click"',
            '"keydown"',
        ],
        correctAnswer: 1,
        explanation:
            'The "submit" event is fired when a form is submitted.',
        faQuestion: 'کدام Event برای تشخیص ارسال Form استفاده می‌شود؟',
        faOptions: [
            '"input"',
            '"submit"',
            '"click"',
            '"keydown"',
        ],
        faExplanation:
            'رویداد "submit" زمانی اجرا می‌شود که یک Form ارسال شود.',
    },

    {
        id: 434,
        lessonId: 43,
        difficulty: "easy",
        question: "What does event.preventDefault() do?",
        options: [
            "Creates a new event",
            "Stops the browser's default action",
            "Deletes the event object",
            "Removes the element",
        ],
        correctAnswer: 1,
        explanation:
            "preventDefault() prevents the browser from performing the default action for that event.",
        faQuestion: "متد event.preventDefault() چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک Event جدید ایجاد می‌کند",
            "رفتار پیش‌فرض مرورگر را متوقف می‌کند",
            "Event Object را حذف می‌کند",
            "Element را حذف می‌کند",
        ],
        faExplanation:
            "متد preventDefault() از اجرای رفتار پیش‌فرض مرورگر برای آن Event جلوگیری می‌کند.",
    },

    {
        id: 435,
        lessonId: 43,
        difficulty: "medium",
        question: `If an input contains the text "Ali", what does this code print?

let input = document.querySelector("input");

console.log(input.value);`,
        options: [
            "input",
            "Ali",
            "undefined",
            "true",
        ],
        correctAnswer: 1,
        explanation:
            "The value property contains the current text entered into the input, which is Ali.",
        faQuestion: `اگر یک Input شامل متن "Ali" باشد، کد زیر چه چیزی را نمایش می‌دهد؟

let input = document.querySelector("input");

console.log(input.value);`,
        faOptions: [
            "input",
            "Ali",
            "undefined",
            "true",
        ],
        faExplanation:
            "Property مربوط به value متن فعلی Input را برمی‌گرداند که در این مثال Ali است.",
    },

    {
        id: 436,
        lessonId: 43,
        difficulty: "medium",
        question: `What will happen when the user types into this input?

let input = document.querySelector("input");

input.addEventListener("input", () => {
    console.log(input.value);
});`,
        options: [
            "The current value is logged as it changes",
            "The input is automatically removed",
            "The form is submitted",
            "Nothing happens until the page reloads",
        ],
        correctAnswer: 0,
        explanation:
            'The "input" event runs when the input value changes, so the current value is logged.',
        faQuestion: `وقتی کاربر داخل این Input تایپ کند، چه اتفاقی رخ می‌دهد؟

let input = document.querySelector("input");

input.addEventListener("input", () => {
    console.log(input.value);
});`,
        faOptions: [
            "مقدار فعلی هنگام تغییر نمایش داده می‌شود",
            "Input به صورت خودکار حذف می‌شود",
            "Form ارسال می‌شود",
            "تا زمان Reload صفحه هیچ اتفاقی نمی‌افتد",
        ],
        explanation:
            'با تغییر مقدار Input، رویداد "input" اجرا می‌شود و مقدار فعلی نمایش داده می‌شود.',
        faExplanation:
            'با تغییر مقدار Input، رویداد "input" اجرا می‌شود و مقدار فعلی نمایش داده می‌شود.',
    },

    {
        id: 437,
        lessonId: 43,
        difficulty: "medium",
        question: "What is the event object used for?",
        options: [
            "Storing information about the event",
            "Creating HTML elements",
            "Changing CSS files",
            "Deleting all listeners",
        ],
        correctAnswer: 0,
        explanation:
            "The event object provides information about the event that occurred.",
        faQuestion: "Event Object برای چه چیزی استفاده می‌شود؟",
        faOptions: [
            "نگهداری اطلاعات مربوط به Event",
            "ساخت Elementهای HTML",
            "تغییر فایل‌های CSS",
            "حذف همه Listenerها",
        ],
        explanation:
            "Event Object اطلاعات مربوط به Event رخ‌داده را در اختیار Function قرار می‌دهد.",
        faExplanation:
            "Event Object اطلاعات مربوط به Event رخ‌داده را در اختیار Function قرار می‌دهد.",
    },

    {
        id: 438,
        lessonId: 43,
        difficulty: "medium",
        question: `Which code correctly handles a form submission without performing the browser's default action?

let form = document.querySelector("form");`,
        options: [
            'form.addEventListener("submit", (event) => { event.preventDefault(); })',
            'form.addEventListener("submit", event.preventDefault())',
            'form.addEventListener("preventDefault", (event) => {})',
            'form.preventDefault("submit")',
        ],
        correctAnswer: 0,
        explanation:
            'The submit callback receives the event object, then event.preventDefault() stops the default form action.',
        faQuestion: `کدام کد ارسال Form را مدیریت می‌کند و رفتار پیش‌فرض مرورگر را متوقف می‌کند؟

let form = document.querySelector("form");`,
        faOptions: [
            'form.addEventListener("submit", (event) => { event.preventDefault(); })',
            'form.addEventListener("submit", event.preventDefault())',
            'form.addEventListener("preventDefault", (event) => {})',
            'form.preventDefault("submit")',
        ],
        faExplanation:
            "در این ساختار Callback مربوط به submit، Event Object را دریافت می‌کند و سپس رفتار پیش‌فرض را متوقف می‌کند.",
    },

    {
        id: 439,
        lessonId: 43,
        difficulty: "hard",
        question: `What will be logged when the form is submitted?

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submitted");
});`,
        options: [
            "Nothing",
            "Submitted",
            "submit",
            "true",
        ],
        correctAnswer: 1,
        explanation:
            'The submit event runs the callback, preventDefault() stops the default action, and "Submitted" is logged.',
        faQuestion: `هنگام ارسال Form، چه چیزی نمایش داده می‌شود؟

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submitted");
});`,
        faOptions: [
            "هیچ چیزی",
            "Submitted",
            "submit",
            "true",
        ],
        faExplanation:
            'با رخ دادن submit، Callback اجرا می‌شود، رفتار پیش‌فرض متوقف می‌شود و "Submitted" نمایش داده می‌شود.',
    },

    {
        id: 440,
        lessonId: 43,
        difficulty: "hard",
        question: `What does the parameter event represent here?

button.addEventListener("click", (event) => {
    console.log(event);
});`,
        options: [
            "The button element",
            "The event object",
            "The callback result",
            "The event name",
        ],
        correctAnswer: 1,
        explanation:
            "event refers to the Event Object passed to the callback when the click occurs.",
        faQuestion: `پارامتر event در کد زیر نشان‌دهنده چیست؟

button.addEventListener("click", (event) => {
    console.log(event);
});`,
        faOptions: [
            "Element مربوط به Button",
            "Event Object",
            "مقدار برگشتی Callback",
            "نام Event",
        ],
        explanation:
            "پارامتر event همان Event Object است که هنگام رخ دادن click به Callback داده می‌شود.",
        faExplanation:
            "پارامتر event همان Event Object است که هنگام رخ دادن click به Callback داده می‌شود.",
    },

    {
        id: 441,
        lessonId: 44,
        difficulty: "easy",
        question: "What does JSON.stringify() do?",
        options: [
            "Converts a JavaScript value into a JSON string",
            "Converts a JSON string into an Object",
            "Deletes JSON data",
            "Stores data in Local Storage",
        ],
        correctAnswer: 0,
        explanation:
            "JSON.stringify() converts a JavaScript value into a JSON string.",
        faQuestion: "متد JSON.stringify() چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک مقدار JavaScript را به JSON String تبدیل می‌کند",
            "یک JSON String را به Object تبدیل می‌کند",
            "داده‌های JSON را حذف می‌کند",
            "داده را در Local Storage ذخیره می‌کند",
        ],
        faExplanation:
            "متد JSON.stringify() یک مقدار JavaScript را به JSON String تبدیل می‌کند.",
    },

    {
        id: 442,
        lessonId: 44,
        difficulty: "easy",
        question: "What does JSON.parse() do?",
        options: [
            "Converts a JavaScript Object into HTML",
            "Converts a JSON string into a JavaScript value",
            "Stores a value in Local Storage",
            "Deletes a JSON string",
        ],
        correctAnswer: 1,
        explanation:
            "JSON.parse() converts a JSON string into a JavaScript value.",
        faQuestion: "متد JSON.parse() چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک JavaScript Object را به HTML تبدیل می‌کند",
            "یک JSON String را به یک مقدار JavaScript تبدیل می‌کند",
            "یک مقدار را در Local Storage ذخیره می‌کند",
            "یک JSON String را حذف می‌کند",
        ],
        faExplanation:
            "متد JSON.parse() یک JSON String را دوباره به یک مقدار JavaScript تبدیل می‌کند.",
    },

    {
        id: 443,
        lessonId: 44,
        difficulty: "easy",
        question: "Which method stores a value in Local Storage?",
        options: [
            "localStorage.saveItem()",
            "localStorage.addItem()",
            "localStorage.setItem()",
            "localStorage.store()",
        ],
        correctAnswer: 2,
        explanation:
            "localStorage.setItem() stores a value using a specified key.",
        faQuestion: "کدام Method یک مقدار را در Local Storage ذخیره می‌کند؟",
        faOptions: [
            "localStorage.saveItem()",
            "localStorage.addItem()",
            "localStorage.setItem()",
            "localStorage.store()",
        ],
        faExplanation:
            "متد localStorage.setItem() یک مقدار را با استفاده از یک کلید مشخص ذخیره می‌کند.",
    },

    {
        id: 444,
        lessonId: 44,
        difficulty: "easy",
        question: "Which method retrieves a value from Local Storage?",
        options: [
            "getItem()",
            "readItem()",
            "loadItem()",
            "findItem()",
        ],
        correctAnswer: 0,
        explanation:
            "getItem() retrieves the value stored under a specified key.",
        faQuestion: "کدام Method یک مقدار را از Local Storage دریافت می‌کند؟",
        faOptions: [
            "getItem()",
            "readItem()",
            "loadItem()",
            "findItem()",
        ],
        faExplanation:
            "متد getItem() مقدار ذخیره‌شده با یک کلید مشخص را دریافت می‌کند.",
    },

    {
        id: 445,
        lessonId: 44,
        difficulty: "medium",
        question: `What will data contain after this code runs?

let user = {
    name: "Ali",
    age: 25
};

let data = JSON.stringify(user);`,
        options: [
            "A JavaScript Object",
            "A JSON String",
            "A Number",
            "A Boolean",
        ],
        correctAnswer: 1,
        explanation:
            "JSON.stringify() converts the Object into a JSON string, so data contains a String.",
        faQuestion: `بعد از اجرای کد زیر، data شامل چه نوع مقداری خواهد بود؟

let user = {
    name: "Ali",
    age: 25
};

let data = JSON.stringify(user);`,
        faOptions: [
            "یک JavaScript Object",
            "یک JSON String",
            "یک Number",
            "یک Boolean",
        ],
        faExplanation:
            "متد JSON.stringify()، Object را به JSON String تبدیل می‌کند، بنابراین data شامل یک String است.",
    },

    {
        id: 446,
        lessonId: 44,
        difficulty: "medium",
        question: `What will user.name contain?

let data = '{"name":"Ali","age":25}';
let user = JSON.parse(data);`,
        options: [
            "25",
            "undefined",
            "Ali",
            'The string \'{"name":"Ali","age":25}\'',
        ],
        correctAnswer: 2,
        explanation:
            "JSON.parse() converts the JSON string into an Object, so user.name is Ali.",
        faQuestion: `بعد از اجرای کد زیر، user.name شامل چه مقداری خواهد بود؟

let data = '{"name":"Ali","age":25}';
let user = JSON.parse(data);`,
        faOptions: [
            "25",
            "undefined",
            "Ali",
            'رشته \'{"name":"Ali","age":25}\'',
        ],
        faExplanation:
            "متد JSON.parse() رشته JSON را به Object تبدیل می‌کند، بنابراین مقدار user.name برابر Ali است.",
    },

    {
        id: 447,
        lessonId: 44,
        difficulty: "medium",
        question: `What will this code retrieve?

localStorage.setItem("username", "Ali");

let username = localStorage.getItem("username");`,
        options: [
            "username",
            "Ali",
            "undefined",
            "true",
        ],
        correctAnswer: 1,
        explanation:
            'setItem() stores "Ali" under the key "username", and getItem() retrieves that stored value.',
        faQuestion: `کد زیر چه مقداری را دریافت می‌کند؟

localStorage.setItem("username", "Ali");

let username = localStorage.getItem("username");`,
        faOptions: [
            "username",
            "Ali",
            "undefined",
            "true",
        ],
        faExplanation:
            'متد setItem() مقدار "Ali" را با کلید "username" ذخیره می‌کند و getItem() همان مقدار ذخیره‌شده را دریافت می‌کند.',
    },

    {
        id: 448,
        lessonId: 44,
        difficulty: "medium",
        question: `Which code correctly stores the user Object in Local Storage?

let user = {
    name: "Ali",
    age: 25
};`,
        options: [
            'localStorage.setItem("user", JSON.stringify(user))',
            'localStorage.setItem("user", JSON.parse(user))',
            'localStorage.store("user", user)',
            'localStorage.setObject("user", user)',
        ],
        correctAnswer: 0,
        explanation:
            "Local Storage stores Strings, so the Object should be converted with JSON.stringify() before storing it.",
        faQuestion: `کدام کد Object مربوط به user را به‌درستی در Local Storage ذخیره می‌کند؟

let user = {
    name: "Ali",
    age: 25
};`,
        faOptions: [
            'localStorage.setItem("user", JSON.stringify(user))',
            'localStorage.setItem("user", JSON.parse(user))',
            'localStorage.store("user", user)',
            'localStorage.setObject("user", user)',
        ],
        faExplanation:
            "چون Local Storage مقدارها را به صورت String ذخیره می‌کند، Object باید قبل از ذخیره با JSON.stringify() تبدیل شود.",
    },

    {
        id: 449,
        lessonId: 44,
        difficulty: "hard",
        question: `What will user.age contain?

localStorage.setItem(
    "user",
    JSON.stringify({
        name: "Ali",
        age: 25
    })
);

let data = localStorage.getItem("user");
let user = JSON.parse(data);`,
        options: [
            '"25"',
            "25",
            "undefined",
            "null",
        ],
        correctAnswer: 1,
        explanation:
            "JSON.parse() converts the stored JSON back into a JavaScript Object, so age is the Number 25.",
        faQuestion: `بعد از اجرای کد زیر، user.age شامل چه مقداری خواهد بود؟

localStorage.setItem(
    "user",
    JSON.stringify({
        name: "Ali",
        age: 25
    })
);

let data = localStorage.getItem("user");
let user = JSON.parse(data);`,
        faOptions: [
            '"25"',
            "25",
            "undefined",
            "null",
        ],
        faExplanation:
            "متد JSON.parse() داده ذخیره‌شده را دوباره به Object تبدیل می‌کند، بنابراین age یک Number با مقدار 25 خواهد بود.",
    },

    {
        id: 450,
        lessonId: 44,
        difficulty: "hard",
        question: `What happens after this code runs?

localStorage.setItem("username", "Ali");
localStorage.removeItem("username");`,
        options: [
            "username remains with the value Ali",
            "The username item is removed",
            "All Local Storage data is removed",
            "The browser closes Local Storage",
        ],
        correctAnswer: 1,
        explanation:
            'removeItem("username") removes only the item stored under the username key.',
        faQuestion: `بعد از اجرای کد زیر چه اتفاقی می‌افتد؟

localStorage.setItem("username", "Ali");
localStorage.removeItem("username");`,
        faOptions: [
            "مقدار Ali همچنان برای username باقی می‌ماند",
            "مورد مربوط به username حذف می‌شود",
            "تمام داده‌های Local Storage حذف می‌شوند",
            "مرورگر Local Storage را می‌بندد",
        ],
        explanation:
            'متد removeItem("username") فقط موردی را که با کلید username ذخیره شده است حذف می‌کند.',
        faExplanation:
            'متد removeItem("username") فقط موردی را که با کلید username ذخیره شده است حذف می‌کند.',
    },

    {
        id: 451,
        lessonId: 45,
        difficulty: "easy",
        question: "Which function is used to make a request with the Fetch API?",
        options: [
            "request()",
            "fetch()",
            "http()",
            "getData()",
        ],
        correctAnswer: 1,
        explanation:
            "fetch() is the function provided by the Fetch API for making requests.",
        faQuestion: "کدام Function برای ایجاد Request با Fetch API استفاده می‌شود؟",
        faOptions: [
            "request()",
            "fetch()",
            "http()",
            "getData()",
        ],
        faExplanation:
            "تابع fetch() برای ایجاد Request با استفاده از Fetch API استفاده می‌شود.",
    },

    {
        id: 452,
        lessonId: 45,
        difficulty: "easy",
        question: "What does fetch() return?",
        options: [
            "A String",
            "A Promise",
            "An HTML Element",
            "A Boolean",
        ],
        correctAnswer: 1,
        explanation:
            "fetch() returns a Promise that represents the result of the asynchronous request.",
        faQuestion: "تابع fetch() چه چیزی برمی‌گرداند؟",
        faOptions: [
            "یک String",
            "یک Promise",
            "یک HTML Element",
            "یک Boolean",
        ],
        faExplanation:
            "تابع fetch() یک Promise برمی‌گرداند که نتیجه Request غیرهمزمان را نشان می‌دهد.",
    },

    {
        id: 453,
        lessonId: 45,
        difficulty: "easy",
        question: "Which method is commonly used to convert a JSON response body into a JavaScript value?",
        options: [
            "response.text()",
            "response.json()",
            "response.parse()",
            "response.data()",
        ],
        correctAnswer: 1,
        explanation:
            "response.json() reads the response body and parses JSON into a JavaScript value.",
        faQuestion: "کدام Method معمولاً برای تبدیل JSON موجود در Response به مقدار JavaScript استفاده می‌شود؟",
        faOptions: [
            "response.text()",
            "response.json()",
            "response.parse()",
            "response.data()",
        ],
        faExplanation:
            "متد response.json() داده JSON موجود در Response را خوانده و به یک مقدار JavaScript تبدیل می‌کند.",
    },

    {
        id: 454,
        lessonId: 45,
        difficulty: "easy",
        question: "Which HTTP method is commonly used to request data?",
        options: [
            "GET",
            "POST",
            "SEND",
            "FETCH",
        ],
        correctAnswer: 0,
        explanation:
            "GET is commonly used when requesting data from a server.",
        faQuestion: "کدام HTTP Method معمولاً برای دریافت داده استفاده می‌شود؟",
        faOptions: [
            "GET",
            "POST",
            "SEND",
            "FETCH",
        ],
        faExplanation:
            "معمولاً از GET برای درخواست و دریافت داده از Server استفاده می‌شود.",
    },

    {
        id: 455,
        lessonId: 45,
        difficulty: "medium",
        question: `What does the second .then() receive here?

fetch("/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });`,
        options: [
            "The original request",
            "The parsed JSON data",
            "The fetch function",
            "The URL string",
        ],
        correctAnswer: 1,
        explanation:
            "The first .then() returns response.json(), so the next .then() receives the parsed JavaScript value.",
        faQuestion: `دومین .then() در کد زیر چه چیزی را دریافت می‌کند؟

fetch("/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });`,
        faOptions: [
            "Request اولیه",
            "داده JSON تبدیل‌شده",
            "تابع fetch",
            "رشته مربوط به URL",
        ],
        faExplanation:
            "اولین .then() نتیجه response.json() را برمی‌گرداند، بنابراین .then() بعدی مقدار JavaScript تبدیل‌شده را دریافت می‌کند.",
    },

    {
        id: 456,
        lessonId: 45,
        difficulty: "medium",
        question: `Which fetch() call explicitly creates a POST request?

fetch("/users", {
    method: "POST"
});`,
        options: [
            'fetch("/users")',
            'fetch("/users", { method: "GET" })',
            'fetch("/users", { method: "POST" })',
            'fetch("/users", { type: "POST" })',
        ],
        correctAnswer: 2,
        explanation:
            'Setting method to "POST" explicitly makes the request a POST request.',
        faQuestion: "کدام فراخوانی fetch() به صورت صریح یک POST Request ایجاد می‌کند؟",
        faOptions: [
            'fetch("/users")',
            'fetch("/users", { method: "GET" })',
            'fetch("/users", { method: "POST" })',
            'fetch("/users", { type: "POST" })',
        ],
        faExplanation:
            'قرار دادن method روی "POST" باعث می‌شود Request از نوع POST باشد.',
    },

    {
        id: 457,
        lessonId: 45,
        difficulty: "medium",
        question: `What is the purpose of JSON.stringify() in this request?

fetch("/users", {
    method: "POST",
    body: JSON.stringify({
        name: "Ali"
    })
});`,
        options: [
            "It converts the Object into a JSON string",
            "It sends the request",
            "It parses the response",
            "It selects the server",
        ],
        correctAnswer: 0,
        explanation:
            "JSON.stringify() converts the JavaScript Object into a JSON string for the request body.",
        faQuestion: `هدف JSON.stringify() در این Request چیست؟

fetch("/users", {
    method: "POST",
    body: JSON.stringify({
        name: "Ali"
    })
});`,
        faOptions: [
            "Object را به JSON String تبدیل می‌کند",
            "Request را ارسال می‌کند",
            "Response را Parse می‌کند",
            "Server را انتخاب می‌کند",
        ],
        faExplanation:
            "متد JSON.stringify() Object مربوط به داده را به JSON String تبدیل می‌کند تا در Body Request قرار بگیرد.",
    },

    {
        id: 458,
        lessonId: 45,
        difficulty: "medium",
        question: "What does the response parameter represent in a fetch().then() callback?",
        options: [
            "The server's response",
            "The request URL",
            "The JSON data only",
            "The callback function",
        ],
        correctAnswer: 0,
        explanation:
            "The response parameter represents the Response object produced by the fetch request.",
        faQuestion: "پارامتر response در Callback مربوط به fetch().then() نشان‌دهنده چیست؟",
        faOptions: [
            "Response مربوط به Server",
            "URL مربوط به Request",
            "فقط داده JSON",
            "Callback Function",
        ],
        faExplanation:
            "پارامتر response همان Response Object مربوط به نتیجه Request است.",
    },

    {
        id: 459,
        lessonId: 45,
        difficulty: "hard",
        question: `What does this code do?

fetch("/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });`,
        options: [
            "It requests users and logs the parsed response data",
            "It sends a POST request with new users",
            "It deletes the users from the server",
            "It converts users into HTML automatically",
        ],
        correctAnswer: 0,
        explanation:
            "The code makes a request, parses the JSON response, and logs the resulting JavaScript value.",
        faQuestion: `کد زیر چه کاری انجام می‌دهد؟

fetch("/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });`,
        faOptions: [
            "داده کاربران را درخواست کرده و Response تبدیل‌شده را نمایش می‌دهد",
            "یک POST Request برای ساخت کاربران ارسال می‌کند",
            "کاربران را از Server حذف می‌کند",
            "داده کاربران را به صورت خودکار به HTML تبدیل می‌کند",
        ],
        explanation:
            "کد یک Request ایجاد می‌کند، Response را به JSON تبدیل می‌کند و مقدار JavaScript حاصل را نمایش می‌دهد.",
        faExplanation:
            "کد یک Request ایجاد می‌کند، Response را به JSON تبدیل می‌کند و مقدار JavaScript حاصل را نمایش می‌دهد.",
    },

    {
        id: 460,
        lessonId: 45,
        difficulty: "hard",
        question: `Which option correctly describes this request?

fetch("/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Ali"
    })
});`,
        options: [
            "It sends a POST request with JSON data",
            "It makes a GET request with no body",
            "It retrieves and parses JSON automatically",
            "It stores the Object in Local Storage",
        ],
        correctAnswer: 0,
        explanation:
            'The method is "POST", the content type is JSON, and JSON.stringify() creates the JSON request body.',
        faQuestion: "کدام گزینه این Request را به‌درستی توصیف می‌کند؟",
        faOptions: [
            "یک POST Request با داده JSON ارسال می‌کند",
            "یک GET Request بدون Body ایجاد می‌کند",
            "داده JSON را دریافت و به صورت خودکار Parse می‌کند",
            "Object را در Local Storage ذخیره می‌کند",
        ],
        explanation:
            'در این ساختار method روی "POST" است، نوع داده JSON مشخص شده و JSON.stringify() Body مربوط به Request را ایجاد می‌کند.',
        faExplanation:
            'در این ساختار method روی "POST" است، نوع داده JSON مشخص شده و JSON.stringify() Body مربوط به Request را ایجاد می‌کند.',
    },

    {
        id: 461,
        lessonId: 46,
        difficulty: "easy",
        question: "What does a Promise represent?",
        options: [
            "A future result of an asynchronous operation",
            "An HTML element",
            "A CSS rule",
            "A JavaScript comment",
        ],
        correctAnswer: 0,
        explanation:
            "A Promise represents the eventual result of an asynchronous operation.",
        faQuestion: "یک Promise چه چیزی را نشان می‌دهد؟",
        faOptions: [
            "نتیجه آینده یک عملیات غیرهمزمان",
            "یک HTML Element",
            "یک قانون CSS",
            "یک Comment در JavaScript",
        ],
        faExplanation:
            "Promise نتیجه آینده یک عملیات غیرهمزمان را نشان می‌دهد.",
    },

    {
        id: 462,
        lessonId: 46,
        difficulty: "easy",
        question: "Which Promise state means the operation is still running?",
        options: [
            "fulfilled",
            "rejected",
            "pending",
            "finished",
        ],
        correctAnswer: 2,
        explanation:
            "A pending Promise has not yet completed or failed.",
        faQuestion: "کدام وضعیت Promise یعنی عملیات هنوز در حال انجام است؟",
        faOptions: [
            "fulfilled",
            "rejected",
            "pending",
            "finished",
        ],
        faExplanation:
            "وضعیت pending یعنی Promise هنوز کامل نشده و با خطا نیز مواجه نشده است.",
    },

    {
        id: 463,
        lessonId: 46,
        difficulty: "easy",
        question: "Which method handles a successful Promise result?",
        options: [
            "catch()",
            "then()",
            "error()",
            "success()",
        ],
        correctAnswer: 1,
        explanation:
            "then() is used to handle a fulfilled Promise result.",
        faQuestion: "کدام Method نتیجه موفقیت‌آمیز Promise را مدیریت می‌کند؟",
        faOptions: [
            "catch()",
            "then()",
            "error()",
            "success()",
        ],
        faExplanation:
            "متد then() برای مدیریت نتیجه موفقیت‌آمیز یک Promise استفاده می‌شود.",
    },

    {
        id: 464,
        lessonId: 46,
        difficulty: "easy",
        question: "Which method is commonly used to handle a rejected Promise?",
        options: [
            "then()",
            "catch()",
            "finallyError()",
            "rejectHandler()",
        ],
        correctAnswer: 1,
        explanation:
            "catch() is commonly used to handle a rejected Promise.",
        faQuestion: "کدام Method معمولاً برای مدیریت Promise ردشده استفاده می‌شود؟",
        faOptions: [
            "then()",
            "catch()",
            "finallyError()",
            "rejectHandler()",
        ],
        faExplanation:
            "متد catch() معمولاً برای مدیریت Promiseای که با خطا مواجه شده است استفاده می‌شود.",
    },

    {
        id: 465,
        lessonId: 46,
        difficulty: "medium",
        question: "What does the async keyword do when used before a function?",
        options: [
            "Makes the function return a Promise",
            "Deletes all Promises",
            "Stops asynchronous operations",
            "Turns the function into an HTML element",
        ],
        correctAnswer: 0,
        explanation:
            "An async function always returns a Promise.",
        faQuestion: "کلمه کلیدی async هنگام قرار گرفتن قبل از یک Function چه کاری انجام می‌دهد؟",
        faOptions: [
            "باعث می‌شود Function یک Promise برگرداند",
            "تمام Promiseها را حذف می‌کند",
            "عملیات غیرهمزمان را متوقف می‌کند",
            "Function را به یک HTML Element تبدیل می‌کند",
        ],
        faExplanation:
            "یک Function دارای async همیشه یک Promise برمی‌گرداند.",
    },

    {
        id: 466,
        lessonId: 46,
        difficulty: "medium",
        question: "What does await do inside an async function?",
        options: [
            "Creates a new Promise",
            "Waits for a Promise to settle before continuing",
            "Deletes the Promise",
            "Converts the Promise into HTML",
        ],
        correctAnswer: 1,
        explanation:
            "await pauses execution inside the async function until the Promise settles.",
        faQuestion: "کلمه کلیدی await داخل یک async Function چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک Promise جدید ایجاد می‌کند",
            "تا تعیین تکلیف Promise منتظر می‌ماند و سپس ادامه می‌دهد",
            "Promise را حذف می‌کند",
            "Promise را به HTML تبدیل می‌کند",
        ],
        faExplanation:
            "کلمه کلیدی await اجرای Function را تا تعیین تکلیف Promise متوقف می‌کند و سپس ادامه می‌دهد.",
    },

    {
        id: 467,
        lessonId: 46,
        difficulty: "medium",
        question: `Which code correctly uses await with fetch() inside an async function?

async function getUsers() {
    // code
}`,
        options: [
            'let response = await fetch("/users");',
            'let response = wait fetch("/users");',
            'let response = fetch.await("/users");',
            'await let response = fetch("/users");',
        ],
        correctAnswer: 0,
        explanation:
            'await can be used before the Promise returned by fetch() inside an async function.',
        faQuestion: `کدام کد به‌درستی از await همراه fetch() داخل یک async Function استفاده می‌کند؟

async function getUsers() {
    // code
}`,
        faOptions: [
            'let response = await fetch("/users");',
            'let response = wait fetch("/users");',
            'let response = fetch.await("/users");',
            'await let response = fetch("/users");',
        ],
        faExplanation:
            'در یک async Function می‌توان await را قبل از Promise برگشتی از fetch() قرار داد.',
    },

    {
        id: 468,
        lessonId: 46,
        difficulty: "medium",
        question: "Which structure is used to handle errors with async/await?",
        options: [
            "if...else",
            "try...catch",
            "for...of",
            "switch...case",
        ],
        correctAnswer: 1,
        explanation:
            "try...catch is commonly used to handle errors in async/await code.",
        faQuestion: "کدام ساختار برای مدیریت خطا در کد async/await استفاده می‌شود؟",
        faOptions: [
            "if...else",
            "try...catch",
            "for...of",
            "switch...case",
        ],
        faExplanation:
            "ساختار try...catch معمولاً برای مدیریت خطا در کد async/await استفاده می‌شود.",
    },

    {
        id: 469,
        lessonId: 46,
        difficulty: "hard",
        question: `What will data contain after this function successfully completes?

async function getData() {
    let response = await fetch("/users");
    let data = await response.json();

    return data;
}`,
        options: [
            "The parsed JSON response data",
            "The original URL string",
            "The Response Object only",
            "A CSS style",
        ],
        correctAnswer: 0,
        explanation:
            "response.json() produces the parsed JavaScript value, which is then returned by the function.",
        faQuestion: `اگر Function زیر با موفقیت کامل شود، data شامل چه چیزی خواهد بود؟

async function getData() {
    let response = await fetch("/users");
    let data = await response.json();

    return data;
}`,
        faOptions: [
            "داده JSON تبدیل‌شده",
            "رشته URL اولیه",
            "فقط Response Object",
            "یک Style مربوط به CSS",
        ],
        faExplanation:
            "متد response.json() داده JSON را به مقدار JavaScript تبدیل می‌کند و سپس Function همان مقدار را برمی‌گرداند.",
    },

    {
        id: 470,
        lessonId: 46,
        difficulty: "hard",
        question: `What happens if fetch() rejects in this code?

async function getUsers() {
    try {
        let response = await fetch("/users");
        let data = await response.json();
    } catch (error) {
        console.log("Failed");
    }
}`,
        options: [
            "The catch block runs",
            "The try block runs again automatically",
            "The page reloads",
            "The Promise becomes a CSS rule",
        ],
        correctAnswer: 0,
        explanation:
            "If the awaited Promise rejects, control moves to the catch block.",
        faQuestion: `اگر fetch() در کد زیر Reject شود، چه اتفاقی رخ می‌دهد؟

async function getUsers() {
    try {
        let response = await fetch("/users");
        let data = await response.json();
    } catch (error) {
        console.log("Failed");
    }
}`,
        faOptions: [
            "بخش catch اجرا می‌شود",
            "بخش try دوباره به صورت خودکار اجرا می‌شود",
            "صفحه Reload می‌شود",
            "Promise به یک قانون CSS تبدیل می‌شود",
        ],
        faExplanation:
            "اگر Promise مربوط به await با خطا Reject شود، اجرای کد به بخش catch منتقل می‌شود.",
    },

    {
        id: 471,
        lessonId: 47,
        difficulty: "easy",
        question: "Which block is used to handle an error from code inside try?",
        options: [
            "catch",
            "error",
            "handle",
            "except",
        ],
        correctAnswer: 0,
        explanation:
            "The catch block runs when an error occurs inside the associated try block.",
        faQuestion: "کدام Block برای مدیریت خطای ایجادشده در try استفاده می‌شود؟",
        faOptions: [
            "catch",
            "error",
            "handle",
            "except",
        ],
        faExplanation:
            "بخش catch زمانی اجرا می‌شود که در try خطایی رخ دهد.",
    },

    {
        id: 472,
        lessonId: 47,
        difficulty: "easy",
        question: "Which property commonly contains an error's description?",
        options: [
            ".name",
            ".message",
            ".description",
            ".text",
        ],
        correctAnswer: 1,
        explanation:
            "The message property contains the descriptive message associated with an Error.",
        faQuestion: "کدام Property معمولاً توضیح مربوط به Error را نگهداری می‌کند؟",
        faOptions: [
            ".name",
            ".message",
            ".description",
            ".text",
        ],
        faExplanation:
            "Property مربوط به message توضیح مرتبط با Error را نگهداری می‌کند.",
    },

    {
        id: 473,
        lessonId: 47,
        difficulty: "easy",
        question: "Which keyword is used to create a custom error?",
        options: [
            "error",
            "throw",
            "raise",
            "fail",
        ],
        correctAnswer: 1,
        explanation:
            "The throw keyword creates and throws an error.",
        faQuestion: "کدام Keyword برای ایجاد یک Error دلخواه استفاده می‌شود؟",
        faOptions: [
            "error",
            "throw",
            "raise",
            "fail",
        ],
        faExplanation:
            "کلمه کلیدی throw برای ایجاد و پرتاب کردن Error استفاده می‌شود.",
    },

    {
        id: 474,
        lessonId: 47,
        difficulty: "easy",
        question: "Which keyword makes a value available from a JavaScript module?",
        options: [
            "import",
            "export",
            "module",
            "share",
        ],
        correctAnswer: 1,
        explanation:
            "The export keyword makes a declaration available to other modules.",
        faQuestion: "کدام Keyword یک مقدار را از یک JavaScript Module در دسترس Moduleهای دیگر قرار می‌دهد؟",
        faOptions: [
            "import",
            "export",
            "module",
            "share",
        ],
        faExplanation:
            "کلمه کلیدی export یک Declaration را برای استفاده در Moduleهای دیگر در دسترس قرار می‌دهد.",
    },

    {
        id: 475,
        lessonId: 47,
        difficulty: "medium",
        question: "Which statement correctly imports a named export called name?",
        options: [
            'import name from "./user.js";',
            'import { name } from "./user.js";',
            'import [name] from "./user.js";',
            'import "name" from "./user.js";',
        ],
        correctAnswer: 1,
        explanation:
            "Named exports are imported using curly braces around the exported name.",
        faQuestion: "کدام Statement یک Named Export با نام name را به‌درستی Import می‌کند؟",
        faOptions: [
            'import name from "./user.js";',
            'import { name } from "./user.js";',
            'import [name] from "./user.js";',
            'import "name" from "./user.js";',
        ],
        faExplanation:
            "برای Import کردن Named Export باید نام Export داخل Curly Braces قرار بگیرد.",
    },

    {
        id: 476,
        lessonId: 47,
        difficulty: "medium",
        question: "Which statement correctly imports a default export called greet?",
        options: [
            'import { greet } from "./greet.js";',
            'import greet from "./greet.js";',
            'import default greet from "./greet.js";',
            'import [greet] from "./greet.js";',
        ],
        correctAnswer: 1,
        explanation:
            "A default export is imported without curly braces.",
        faQuestion: "کدام Statement یک Default Export با نام greet را به‌درستی Import می‌کند؟",
        faOptions: [
            'import { greet } from "./greet.js";',
            'import greet from "./greet.js";',
            'import default greet from "./greet.js";',
            'import [greet] from "./greet.js";',
        ],
        faExplanation:
            "برای Import کردن Default Export نیازی به Curly Braces نیست.",
    },

    {
        id: 477,
        lessonId: 47,
        difficulty: "medium",
        question: `What happens when this code runs?

try {
    JSON.parse("invalid");
} catch (error) {
    console.log("Failed");
}`,
        options: [
            "Failed is logged",
            "Nothing is logged",
            "The catch block is skipped",
            "A new module is imported",
        ],
        correctAnswer: 0,
        explanation:
            "Parsing the invalid JSON throws an error, so execution moves to the catch block.",
        faQuestion: `کد زیر چه اتفاقی ایجاد می‌کند؟

try {
    JSON.parse("invalid");
} catch (error) {
    console.log("Failed");
}`,
        faOptions: [
            "متن Failed نمایش داده می‌شود",
            "هیچ چیزی نمایش داده نمی‌شود",
            "بخش catch اجرا نمی‌شود",
            "یک Module جدید Import می‌شود",
        ],
        faExplanation:
            "پردازش JSON نامعتبر باعث Error می‌شود، بنابراین اجرای کد به بخش catch منتقل می‌شود.",
    },

    {
        id: 478,
        lessonId: 47,
        difficulty: "medium",
        question: `What does this code do?

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}`,
        options: [
            "It throws an error when b is 0",
            "It always returns 0",
            "It imports a module",
            "It catches every error automatically",
        ],
        correctAnswer: 0,
        explanation:
            "When b is 0, the condition is true and throw creates an Error instead of returning a result.",
        faQuestion: `کد زیر چه کاری انجام می‌دهد؟

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}`,
        faOptions: [
            "وقتی b برابر 0 باشد یک Error ایجاد می‌کند",
            "همیشه مقدار 0 را برمی‌گرداند",
            "یک Module را Import می‌کند",
            "به صورت خودکار تمام خطاها را مدیریت می‌کند",
        ],
        faExplanation:
            "وقتی b برابر 0 باشد شرط برقرار شده و throw یک Error ایجاد می‌کند.",
    },

    {
        id: 479,
        lessonId: 47,
        difficulty: "hard",
        question: `What happens when this code runs?

try {
    throw new Error("Oops");
} catch (error) {
    console.log(error.message);
}`,
        options: [
            "The text Oops is logged",
            "The Error Object is deleted",
            "Nothing happens",
            "The try block runs again",
        ],
        correctAnswer: 0,
        explanation:
            "throw creates an Error with the message Oops, and catch receives it through error.message.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

try {
    throw new Error("Oops");
} catch (error) {
    console.log(error.message);
}`,
        faOptions: [
            "متن Oops نمایش داده می‌شود",
            "Error Object حذف می‌شود",
            "هیچ اتفاقی رخ نمی‌دهد",
            "بخش try دوباره اجرا می‌شود",
        ],
        faExplanation:
            "عبارت throw یک Error با پیام Oops ایجاد می‌کند و catch آن را دریافت کرده و message را نمایش می‌دهد.",
    },

    {
        id: 480,
        lessonId: 47,
        difficulty: "hard",
        question: `A file contains this named export:

export const name = "Ali";

Which statement correctly imports it?`,
        options: [
            'import name from "./user.js";',
            'import { name } from "./user.js";',
            'import default name from "./user.js";',
            'import [name] from "./user.js";',
        ],
        correctAnswer: 1,
        explanation:
            "The declaration uses a named export, so the imported name must be placed inside curly braces.",
        faQuestion: `یک فایل شامل Named Export زیر است:

export const name = "Ali";

کدام Statement آن را به‌درستی Import می‌کند؟`,
        faOptions: [
            'import name from "./user.js";',
            'import { name } from "./user.js";',
            'import default name from "./user.js";',
            'import [name] from "./user.js";',
        ],
        faExplanation:
            "چون name به صورت Named Export تعریف شده است، هنگام Import باید داخل Curly Braces قرار بگیرد.",
    },

    {
        id: 481,
        lessonId: 48,
        difficulty: "easy",
        question: "What does debugging mean?",
        options: [
            "Finding and fixing problems in code",
            "Writing HTML only",
            "Deleting all variables",
            "Making code run faster automatically",
        ],
        correctAnswer: 0,
        explanation:
            "Debugging is the process of finding and fixing problems in code.",
        faQuestion: "Debugging به چه معناست؟",
        faOptions: [
            "پیدا کردن و رفع مشکلات کد",
            "فقط نوشتن HTML",
            "حذف کردن تمام Variableها",
            "سریع‌تر کردن خودکار کد",
        ],
        faExplanation:
            "Debugging یعنی پیدا کردن و رفع مشکلات موجود در کد.",
    },

    {
        id: 482,
        lessonId: 48,
        difficulty: "easy",
        question: "Which tool is commonly used to inspect values while debugging?",
        options: [
            "console.log()",
            "debug.value()",
            "print.code()",
            "inspect.js()",
        ],
        correctAnswer: 0,
        explanation:
            "console.log() can display values so you can inspect what your code is producing.",
        faQuestion: "کدام ابزار معمولاً برای بررسی مقدارها هنگام Debugging استفاده می‌شود؟",
        faOptions: [
            "console.log()",
            "debug.value()",
            "print.code()",
            "inspect.js()",
        ],
        faExplanation:
            "متد console.log() مقدارها را نمایش می‌دهد تا بتوان نتیجه اجرای کد را بررسی کرد.",
    },

    {
        id: 483,
        lessonId: 48,
        difficulty: "easy",
        question: "Which variable name is clearer for storing a user's age?",
        options: [
            "x",
            "a",
            "userAge",
            "value1",
        ],
        correctAnswer: 2,
        explanation:
            "userAge clearly describes the data stored in the variable.",
        faQuestion: "کدام نام Variable برای نگهداری سن کاربر واضح‌تر است؟",
        faOptions: [
            "x",
            "a",
            "userAge",
            "value1",
        ],
        faExplanation:
            "نام userAge به‌وضوح نشان می‌دهد که Variable مربوط به سن کاربر است.",
    },

    {
        id: 484,
        lessonId: 48,
        difficulty: "easy",
        question: "What is one goal of clean code?",
        options: [
            "Making code harder to understand",
            "Making code easier to read and maintain",
            "Removing every function",
            "Avoiding all variable names",
        ],
        correctAnswer: 1,
        explanation:
            "Clean code should be easier to read, understand, and maintain.",
        faQuestion: "یکی از هدف‌های Clean Code چیست؟",
        faOptions: [
            "سخت‌تر کردن درک کد",
            "ساده‌تر کردن خواندن و نگهداری کد",
            "حذف کردن تمام Functionها",
            "اجتناب از تمام نام‌های Variable",
        ],
        faExplanation:
            "Clean Code باید خواندن، درک کردن و نگهداری کد را ساده‌تر کند.",
    },

    {
        id: 485,
        lessonId: 48,
        difficulty: "medium",
        question: "What is a good practice when debugging a problem?",
        options: [
            "Change many unrelated parts at once",
            "Ignore the error message",
            "Identify the exact problem before changing code",
            "Delete the entire project",
        ],
        correctAnswer: 2,
        explanation:
            "Identifying the exact problem first makes debugging more controlled and reliable.",
        faQuestion: "هنگام Debugging یک مشکل، کدام روش مناسب‌تر است؟",
        faOptions: [
            "تغییر دادن چند بخش نامرتبط به صورت همزمان",
            "نادیده گرفتن پیام Error",
            "پیدا کردن مشکل دقیق قبل از تغییر کد",
            "حذف کردن کل پروژه",
        ],
        faExplanation:
            "پیدا کردن مشکل دقیق قبل از تغییر کد باعث می‌شود فرآیند Debugging کنترل‌شده‌تر باشد.",
    },

    {
        id: 486,
        lessonId: 48,
        difficulty: "medium",
        question: "Why are small focused functions useful?",
        options: [
            "They make code easier to understand and maintain",
            "They prevent variables from existing",
            "They remove the need for debugging",
            "They automatically fix syntax errors",
        ],
        correctAnswer: 0,
        explanation:
            "Functions with one clear responsibility are generally easier to understand and maintain.",
        faQuestion: "چرا Functionهای کوچک و متمرکز مفید هستند؟",
        faOptions: [
            "کد را ساده‌تر برای درک و نگهداری می‌کنند",
            "از وجود Variableها جلوگیری می‌کنند",
            "نیاز به Debugging را حذف می‌کنند",
            "خطاهای Syntax را به صورت خودکار رفع می‌کنند",
        ],
        faExplanation:
            "Functionهایی با یک وظیفه مشخص معمولاً ساده‌تر درک و نگهداری می‌شوند.",
    },

    {
        id: 487,
        lessonId: 48,
        difficulty: "medium",
        question: "What should you consider when the same logic appears many times?",
        options: [
            "Repeating it more often",
            "Putting reusable logic inside a function",
            "Deleting all variables",
            "Replacing JavaScript with CSS",
        ],
        correctAnswer: 1,
        explanation:
            "Repeated logic can often be moved into a reusable function.",
        faQuestion: "وقتی یک منطق چندین بار در کد تکرار می‌شود، چه کاری مناسب است؟",
        faOptions: [
            "تکرار کردن آن برای دفعات بیشتر",
            "قرار دادن منطق قابل استفاده مجدد داخل یک Function",
            "حذف کردن تمام Variableها",
            "جایگزین کردن JavaScript با CSS",
        ],
        faExplanation:
            "می‌توان منطق تکراری را در یک Function قابل استفاده مجدد قرار داد.",
    },

    {
        id: 488,
        lessonId: 48,
        difficulty: "medium",
        question: "What is a useful role for a code comment?",
        options: [
            "Explaining why a non-obvious decision was made",
            "Replacing every line of JavaScript",
            "Hiding syntax errors",
            "Making variable names unnecessary",
        ],
        correctAnswer: 0,
        explanation:
            "A useful comment can explain why something is done when the reason is not obvious from the code.",
        faQuestion: "یک Comment مفید در کد چه کاربردی می‌تواند داشته باشد؟",
        faOptions: [
            "توضیح دادن دلیل یک تصمیم غیرواضح در کد",
            "جایگزین کردن تمام خط‌های JavaScript",
            "پنهان کردن Syntax Errorها",
            "بی‌نیاز کردن کد از نام Variableها",
        ],
        faExplanation:
            "یک Comment مفید می‌تواند دلیل انجام یک کار غیرواضح را توضیح دهد.",
    },

    {
        id: 489,
        lessonId: 48,
        difficulty: "hard",
        question: `What is the problem with this code?

let user = {
    name: "Ali"
};

console.log(user.age.toUpperCase());`,
        options: [
            "user.age is undefined, so toUpperCase() cannot be called on it",
            "user.name is a Number",
            "toUpperCase() only works on Arrays",
            "The Object cannot contain Strings",
        ],
        correctAnswer: 0,
        explanation:
            "The Object has no age property, so user.age is undefined and cannot use toUpperCase().",
        faQuestion: `مشکل کد زیر چیست؟

let user = {
    name: "Ali"
};

console.log(user.age.toUpperCase());`,
        faOptions: [
            "user.age مقدار undefined است و نمی‌توان toUpperCase() را روی آن اجرا کرد",
            "user.name یک Number است",
            "toUpperCase() فقط روی Arrayها کار می‌کند",
            "Object نمی‌تواند String داشته باشد",
        ],
        faExplanation:
            "چون Object دارای Property به نام age نیست، مقدار user.age برابر undefined است و نمی‌توان toUpperCase() را روی آن اجرا کرد.",
    },

    {
        id: 490,
        lessonId: 48,
        difficulty: "hard",
        question: `Which version is cleaner and easier to understand?

let x = 25;

console.log(x);`,
        options: [
            `let userAge = 25;

console.log(userAge);`,
            `let x = 25;

console.log(x);`,
            `let a = 25;

console.log(a);`,
            `let value1 = 25;

console.log(value1);`,
        ],
        correctAnswer: 0,
        explanation:
            "userAge clearly communicates what the stored value represents.",
        faQuestion: `کدام نسخه خواناتر و تمیزتر است؟

let x = 25;

console.log(x);`,
        faOptions: [
            `let userAge = 25;

console.log(userAge);`,
            `let x = 25;

console.log(x);`,
            `let a = 25;

console.log(a);`,
            `let value1 = 25;

console.log(value1);`,
        ],
        faExplanation:
            "نام userAge مشخص می‌کند که مقدار Variable مربوط به سن کاربر است.",
    },

    {
        id: 491,
        lessonId: 49,
        difficulty: "easy",
        question: "What is the main purpose of the final Task Manager project?",
        options: [
            "To combine several JavaScript skills in one project",
            "To practice only CSS selectors",
            "To replace JavaScript with HTML",
            "To avoid using Functions",
        ],
        correctAnswer: 0,
        explanation:
            "The final project combines several JavaScript concepts into one practical application.",
        faQuestion: "هدف اصلی پروژه نهایی Task Manager چیست؟",
        faOptions: [
            "ترکیب چندین مهارت JavaScript در یک پروژه",
            "تمرین فقط CSS Selectorها",
            "جایگزین کردن JavaScript با HTML",
            "اجتناب از استفاده از Functionها",
        ],
        faExplanation:
            "هدف پروژه نهایی ترکیب چندین مفهوم JavaScript در یک پروژه عملی است.",
    },

    {
        id: 492,
        lessonId: 49,
        difficulty: "easy",
        question: "Which data structure is suitable for storing multiple tasks?",
        options: [
            "Boolean",
            "Array",
            "Number",
            "String",
        ],
        correctAnswer: 1,
        explanation:
            "An Array can store multiple task Objects together.",
        faQuestion: "کدام ساختار داده برای نگهداری چند Task مناسب است؟",
        faOptions: [
            "Boolean",
            "Array",
            "Number",
            "String",
        ],
        faExplanation:
            "یک Array می‌تواند چند Object مربوط به Taskها را در خود نگهداری کند.",
    },

    {
        id: 493,
        lessonId: 49,
        difficulty: "easy",
        question: "Which property can store whether a task is completed?",
        options: [
            "text: false",
            "completed: false",
            "task: Array",
            "index: String",
        ],
        correctAnswer: 1,
        explanation:
            "The completed property can store a Boolean indicating whether the task is completed.",
        faQuestion: "کدام Property می‌تواند مشخص کند یک Task کامل شده است یا نه؟",
        faOptions: [
            "text: false",
            "completed: false",
            "task: Array",
            "index: String",
        ],
        faExplanation:
            "Property به نام completed می‌تواند با یک Boolean وضعیت کامل شدن Task را مشخص کند.",
    },

    {
        id: 494,
        lessonId: 49,
        difficulty: "easy",
        question: "Which DOM method creates a new Element?",
        options: [
            "createElement()",
            "makeElement()",
            "newElement()",
            "buildDOM()",
        ],
        correctAnswer: 0,
        explanation:
            "createElement() creates a new DOM Element.",
        faQuestion: "کدام متد DOM یک Element جدید ایجاد می‌کند؟",
        faOptions: [
            "createElement()",
            "makeElement()",
            "newElement()",
            "buildDOM()",
        ],
        faExplanation:
            "متد createElement() برای ایجاد یک Element جدید در DOM استفاده می‌شود.",
    },

    {
        id: 495,
        lessonId: 49,
        difficulty: "medium",
        question: "Which expression reads the current value from a form input?",
        options: [
            "input.text",
            "input.content",
            "input.value",
            "input.data",
        ],
        correctAnswer: 2,
        explanation:
            "The value property gives the current value entered into a form input.",
        faQuestion: "کدام Expression مقدار فعلی یک Input را دریافت می‌کند؟",
        faOptions: [
            "input.text",
            "input.content",
            "input.value",
            "input.data",
        ],
        faExplanation:
            "Property مربوط به value مقدار فعلی واردشده در Input را برمی‌گرداند.",
    },

    {
        id: 496,
        lessonId: 49,
        difficulty: "medium",
        question: "Why is JSON.stringify(tasks) useful when saving tasks to localStorage?",
        options: [
            "It converts the Array into JSON text",
            "It deletes the Array",
            "It converts JSON text into an Array",
            "It creates a DOM Element",
        ],
        correctAnswer: 0,
        explanation:
            "JSON.stringify() converts the JavaScript Array into JSON text that can be stored.",
        faQuestion: "چرا JSON.stringify(tasks) هنگام ذخیره Taskها در localStorage مفید است؟",
        faOptions: [
            "Array را به متن JSON تبدیل می‌کند",
            "Array را حذف می‌کند",
            "متن JSON را به Array تبدیل می‌کند",
            "یک DOM Element ایجاد می‌کند",
        ],
        faExplanation:
            "متد JSON.stringify() آرایه JavaScript را به متن JSON تبدیل می‌کند تا بتوان آن را ذخیره کرد.",
    },

    {
        id: 497,
        lessonId: 49,
        difficulty: "medium",
        question: "Which method converts saved JSON text back into a JavaScript value?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.load()",
        ],
        correctAnswer: 1,
        explanation:
            "JSON.parse() converts JSON text back into a JavaScript value.",
        faQuestion: "کدام متد متن JSON ذخیره‌شده را دوباره به یک مقدار JavaScript تبدیل می‌کند؟",
        faOptions: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.load()",
        ],
        faExplanation:
            "متد JSON.parse() متن JSON را دوباره به یک مقدار JavaScript تبدیل می‌کند.",
    },

    {
        id: 498,
        lessonId: 49,
        difficulty: "medium",
        question: "What should you do when building a project this size?",
        options: [
            "Build everything at once",
            "Change unrelated code randomly",
            "Build and test it step by step",
            "Avoid testing until the end",
        ],
        correctAnswer: 2,
        explanation:
            "Building and testing step by step makes it easier to find and fix problems.",
        faQuestion: "هنگام ساخت پروژه‌ای با این اندازه چه کاری بهتر است انجام دهی؟",
        faOptions: [
            "همه چیز را یک‌باره بساز",
            "کدهای نامرتبط را به صورت تصادفی تغییر بده",
            "پروژه را مرحله‌به‌مرحله بساز و تست کن",
            "تا پایان پروژه از تست کردن خودداری کن",
        ],
        faExplanation:
            "ساختن و تست کردن پروژه به صورت مرحله‌به‌مرحله پیدا کردن و رفع مشکلات را ساده‌تر می‌کند.",
    },

    {
        id: 499,
        lessonId: 49,
        difficulty: "hard",
        question: `A task is stored like this:

{
    text: "Learn JavaScript",
    completed: false
}

Which expression changes its completed status to true?`,
        options: [
            "task.completed = true;",
            "task.text = true;",
            "task.completed === true;",
            "task = true;",
        ],
        correctAnswer: 0,
        explanation:
            "Assignment to the completed property changes its stored Boolean value to true.",
        faQuestion: `یک Task به شکل زیر ذخیره شده است:

{
    text: "Learn JavaScript",
    completed: false
}

کدام Expression وضعیت completed را به true تغییر می‌دهد؟`,
        faOptions: [
            "task.completed = true;",
            "task.text = true;",
            "task.completed === true;",
            "task = true;",
        ],
        faExplanation:
            "با Assignment به Property مربوط به completed می‌توان مقدار Boolean آن را به true تغییر داد.",
    },

    {
        id: 500,
        lessonId: 49,
        difficulty: "hard",
        question: `What will this code print?

let tasks = [
    { text: "Learn JS", completed: true },
    { text: "Practice DOM", completed: false },
    { text: "Build Project", completed: true }
];

let completedTasks = tasks.filter((task) => task.completed);

console.log(completedTasks.length);`,
        options: [
            "1",
            "2",
            "3",
            "0",
        ],
        correctAnswer: 1,
        explanation:
            "Two task Objects have completed set to true, so filter() returns an Array with length 2.",
        faQuestion: `کد زیر چه چیزی را نمایش می‌دهد؟

let tasks = [
    { text: "Learn JS", completed: true },
    { text: "Practice DOM", completed: false },
    { text: "Build Project", completed: true }
];

let completedTasks = tasks.filter((task) => task.completed);

console.log(completedTasks.length);`,
        faOptions: [
            "1",
            "2",
            "3",
            "0",
        ],
        faExplanation:
            "دو Object مقدار completed برابر true دارند، بنابراین filter() یک Array با طول 2 برمی‌گرداند.",
    },


















];