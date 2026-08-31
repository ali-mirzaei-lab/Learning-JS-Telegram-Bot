export const questions = [
    {
        id: 1,
        lessonId: 1,
        question: "Which keyword should you use when a variable's value will not be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "static",
        ],
        correctAnswer: 2,
        explanation:
            "const is used when you don't want to reassign a variable after it has been declared.",
        faQuestion:
            "وقتی مقدار یک متغیر قرار نیست دوباره مقداردهی شود، از کدام کلمه کلیدی باید استفاده کنید؟",
        faOptions: [
            "var",
            "let",
            "const",
            "static",
        ],
        faExplanation:
            "وقتی نمی‌خواهید مقدار یک متغیر بعد از تعریف تغییر کند، از const استفاده می‌کنید.",
    },

    {
        id: 2,
        lessonId: 1,
        question: "Which keyword allows you to reassign a variable?",
        options: [
            "const",
            "let",
            "static",
            "fixed",
        ],
        correctAnswer: 1,
        explanation:
            "let allows you to declare a variable whose value can be reassigned later.",
        faQuestion:
            "کدام کلمه کلیدی به شما اجازه می‌دهد مقدار یک متغیر را دوباره تغییر دهید؟",
        faOptions: [
            "const",
            "let",
            "static",
            "fixed",
        ],
        faExplanation:
            "let به شما اجازه می‌دهد متغیری تعریف کنید که مقدار آن بعداً قابل تغییر باشد.",
    },

    {
        id: 3,
        lessonId: 1,
        question: 'What is the value of "age" after this code runs?\n\nlet age = 20;\nage = 25;',
        options: [
            "20",
            "25",
            "45",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "Because age was declared with let, its value can be reassigned from 20 to 25.",
        faQuestion:
            'بعد از اجرای کد زیر مقدار "age" چیست؟\n\nlet age = 20;\nage = 25;',
        faOptions: [
            "20",
            "25",
            "45",
            "undefined",
        ],
        faExplanation:
            "چون age با let تعریف شده است، مقدار آن می‌تواند از 20 به 25 تغییر کند.",
    },

    {
        id: 4,
        lessonId: 1,
        question: "What happens when you try to reassign a const variable?\n\nconst age = 20;\nage = 25;",
        options: [
            "The value becomes 25",
            "The value becomes 45",
            "JavaScript throws an error",
            "Nothing happens",
        ],
        correctAnswer: 2,
        explanation:
            "A const variable cannot be reassigned after it has been declared, so JavaScript throws an error.",
        faQuestion:
            "وقتی سعی می‌کنید مقدار یک متغیر const را تغییر دهید چه اتفاقی می‌افتد؟\n\nconst age = 20;\nage = 25;",
        faOptions: [
            "مقدار به 25 تغییر می‌کند",
            "مقدار به 45 تغییر می‌کند",
            "JavaScript یک خطا ایجاد می‌کند",
            "هیچ اتفاقی نمی‌افتد",
        ],
        faExplanation:
            "یک متغیر const بعد از تعریف نمی‌تواند دوباره مقداردهی شود، بنابراین JavaScript یک خطا ایجاد می‌کند.",
    },

    {
        id: 5,
        lessonId: 1,
        question: 'Which code correctly declares a constant called "name"?',
        options: [
            'constant name = "Ali";',
            'const name = "Ali";',
            'let const name = "Ali";',
            'fixed name = "Ali";',
        ],
        correctAnswer: 1,
        explanation:
            'The correct syntax is const name = "Ali";',
        faQuestion:
            'کدام کد یک ثابت به نام "name" را به‌درستی تعریف می‌کند؟',
        faOptions: [
            'constant name = "Ali";',
            'const name = "Ali";',
            'let const name = "Ali";',
            'fixed name = "Ali";',
        ],
        faExplanation:
            'نحو صحیح این کد const name = "Ali"; است.',
    },

    {
        id: 6,
        lessonId: 1,
        question: 'What will this code print?\n\nlet score = 10;\nscore = 20;\nconsole.log(score);',
        options: [
            "10",
            "20",
            "30",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "score is first set to 10 and then reassigned to 20. Therefore, console.log prints 20.",
        faQuestion:
            'این کد چه چیزی چاپ می‌کند؟\n\nlet score = 10;\nscore = 20;\nconsole.log(score);',
        faOptions: [
            "10",
            "20",
            "30",
            "undefined",
        ],
        faExplanation:
            "ابتدا مقدار score برابر 10 است و سپس به 20 تغییر می‌کند. بنابراین console.log مقدار 20 را چاپ می‌کند.",
    },

    {
        id: 7,
        lessonId: 1,
        question: "Which keyword is generally preferred in modern JavaScript when a variable needs to be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "static",
        ],
        correctAnswer: 1,
        explanation:
            "Modern JavaScript generally uses let when a variable needs to be reassigned.",
        faQuestion:
            "در JavaScript مدرن، وقتی مقدار یک متغیر باید دوباره تغییر کند، معمولاً از کدام کلمه کلیدی استفاده می‌شود؟",
        faOptions: [
            "var",
            "let",
            "const",
            "static",
        ],
        faExplanation:
            "در JavaScript مدرن معمولاً زمانی که مقدار متغیر باید تغییر کند از let استفاده می‌شود.",
    },

    {
        id: 8,
        lessonId: 1,
        question: "Which keyword is generally preferred in modern JavaScript when a variable does not need to be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "static",
        ],
        correctAnswer: 2,
        explanation:
            "Modern JavaScript generally uses const when a variable does not need to be reassigned.",
        faQuestion:
            "در JavaScript مدرن، وقتی مقدار یک متغیر قرار نیست تغییر کند، معمولاً از کدام کلمه کلیدی استفاده می‌شود؟",
        faOptions: [
            "var",
            "let",
            "const",
            "static",
        ],
        faExplanation:
            "در JavaScript مدرن معمولاً زمانی که مقدار متغیر قرار نیست تغییر کند از const استفاده می‌شود.",
    },

    {
        id: 9,
        lessonId: 1,
        question: 'What is stored in the variable "name"?\n\nconst name = "Ali";',
        options: [
            "The number Ali",
            'The string "Ali"',
            "The variable Ali",
            "Nothing",
        ],
        correctAnswer: 1,
        explanation:
            '"Ali" is a string value, and the variable name stores that string.',
        faQuestion:
            'چه چیزی در متغیر "name" ذخیره شده است؟\n\nconst name = "Ali";',
        faOptions: [
            "عدد Ali",
            'رشته متنی "Ali"',
            "متغیر Ali",
            "هیچ چیز",
        ],
        faExplanation:
            '"Ali" یک مقدار رشته‌ای است و متغیر name این رشته را ذخیره می‌کند.',
    },

    {
        id: 10,
        lessonId: 1,
        question: "Which statement about const is correct?",
        options: [
            "A const variable can always be reassigned",
            "const can only store numbers",
            "A const variable cannot be reassigned",
            "const is the same as var",
        ],
        correctAnswer: 2,
        explanation:
            "A variable declared with const cannot be reassigned after it has been initialized.",
        faQuestion:
            "کدام جمله درباره const صحیح است؟",
        faOptions: [
            "یک متغیر const همیشه می‌تواند دوباره مقداردهی شود",
            "const فقط می‌تواند اعداد را ذخیره کند",
            "یک متغیر const نمی‌تواند دوباره مقداردهی شود",
            "const با var یکسان است",
        ],
        faExplanation:
            "متغیری که با const تعریف شده باشد، بعد از مقداردهی اولیه نمی‌تواند دوباره مقداردهی شود.",
    },

    {
        id: 11,
        lessonId: 2,
        question: "Which data type is used to represent true or false?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        correctAnswer: 2,
        explanation:
            "Boolean is the data type used for true or false values.",
        faQuestion:
            "کدام نوع داده برای نمایش true یا false استفاده می‌شود؟",
        faOptions: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        faExplanation:
            "Boolean نوع داده‌ای است که برای مقادیر true یا false استفاده می‌شود.",
    },

    {
        id: 12,
        lessonId: 2,
        question: 'What data type is "Hello World"?',
        options: [
            "Number",
            "Boolean",
            "String",
            "Null",
        ],
        correctAnswer: 2,
        explanation:
            '"Hello World" is text, so it is a String.',
        faQuestion:
            '"Hello World" چه نوع داده‌ای است؟',
        faOptions: [
            "Number",
            "Boolean",
            "String",
            "Null",
        ],
        faExplanation:
            '"Hello World" یک متن است، بنابراین نوع داده آن String است.',
    },

    {
        id: 13,
        lessonId: 2,
        question: "Which data type is used for numbers such as 10 or 3.14?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Null",
        ],
        correctAnswer: 1,
        explanation:
            "JavaScript uses the Number data type for numeric values such as 10 and 3.14.",
        faQuestion:
            "کدام نوع داده برای اعدادی مانند 10 یا 3.14 استفاده می‌شود؟",
        faOptions: [
            "String",
            "Number",
            "Boolean",
            "Null",
        ],
        faExplanation:
            "JavaScript از نوع داده Number برای مقادیر عددی مانند 10 و 3.14 استفاده می‌کند.",
    },

    {
        id: 14,
        lessonId: 2,
        question: "What is the value of a variable that has been declared but not assigned a value?",
        options: [
            "null",
            "false",
            "undefined",
            "0",
        ],
        correctAnswer: 2,
        explanation:
            "A declared variable without an assigned value has the value undefined.",
        faQuestion:
            "مقدار متغیری که تعریف شده اما هنوز مقداری به آن اختصاص داده نشده چیست؟",
        faOptions: [
            "null",
            "false",
            "undefined",
            "0",
        ],
        faExplanation:
            "متغیری که تعریف شده اما هنوز مقداری دریافت نکرده است، مقدار undefined دارد.",
    },

    {
        id: 15,
        lessonId: 2,
        question: "Which value represents an intentionally empty value in JavaScript?",
        options: [
            "undefined",
            "null",
            "false",
            "0",
        ],
        correctAnswer: 1,
        explanation:
            "null is commonly used to represent an intentional empty or missing value.",
        faQuestion:
            "کدام مقدار در JavaScript یک مقدار خالیِ عمدی را نشان می‌دهد؟",
        faOptions: [
            "undefined",
            "null",
            "false",
            "0",
        ],
        faExplanation:
            "از null معمولاً برای نمایش یک مقدار خالی یا موجود نبودن مقدار به صورت عمدی استفاده می‌شود.",
    },

    {
        id: 16,
        lessonId: 2,
        question: 'What is the data type of this value?\n\nlet age = 25;',
        options: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        correctAnswer: 1,
        explanation:
            "25 is a numeric value, so its data type is Number.",
        faQuestion:
            'نوع داده این مقدار چیست؟\n\nlet age = 25;',
        faOptions: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        faExplanation:
            "25 یک مقدار عددی است، بنابراین نوع داده آن Number است.",
    },

    {
        id: 17,
        lessonId: 2,
        question: "Which of these is a Boolean value?",
        options: [
            '"true"',
            "1",
            "true",
            '"false"',
        ],
        correctAnswer: 2,
        explanation:
            "true without quotation marks is a Boolean value. Quoted values are strings.",
        faQuestion:
            "کدام گزینه یک مقدار Boolean است؟",
        faOptions: [
            '"true"',
            "1",
            "true",
            '"false"',
        ],
        faExplanation:
            "true بدون علامت نقل‌قول یک مقدار Boolean است. مقادیر داخل نقل‌قول String هستند.",
    },

    {
        id: 18,
        lessonId: 2,
        question: "Which of these is a String?",
        options: [
            "42",
            "true",
            '"42"',
            "null",
        ],
        correctAnswer: 2,
        explanation:
            '"42" is a String because it is surrounded by quotation marks.',
        faQuestion:
            "کدام گزینه یک String است؟",
        faOptions: [
            "42",
            "true",
            '"42"',
            "null",
        ],
        faExplanation:
            '"42" یک String است زیرا داخل علامت نقل‌قول قرار دارد.',
    },

    {
        id: 19,
        lessonId: 2,
        question: "Which statement about JavaScript data types is correct?",
        options: [
            "JavaScript can only store numbers",
            "JavaScript has different data types for different kinds of values",
            "Strings can only contain numbers",
            "Boolean can store any type of value",
        ],
        correctAnswer: 1,
        explanation:
            "JavaScript has different data types that are used to represent different kinds of values.",
        faQuestion:
            "کدام جمله درباره انواع داده در JavaScript صحیح است؟",
        faOptions: [
            "JavaScript فقط می‌تواند اعداد را ذخیره کند",
            "JavaScript برای انواع مختلف مقادیر، نوع‌های داده متفاوتی دارد",
            "String فقط می‌تواند شامل اعداد باشد",
            "Boolean می‌تواند هر نوع مقداری را ذخیره کند",
        ],
        faExplanation:
            "JavaScript برای نمایش انواع مختلف مقادیر، نوع‌های داده متفاوتی دارد.",
    },

    {
        id: 20,
        lessonId: 2,
        question: 'What is the value of "isStudent"?\n\nlet isStudent = true;',
        options: [
            "String",
            "false",
            "true",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The variable isStudent stores the Boolean value true.",
        faQuestion:
            'مقدار "isStudent" چیست؟\n\nlet isStudent = true;',
        faOptions: [
            "String",
            "false",
            "true",
            "undefined",
        ],
        faExplanation:
            "متغیر isStudent مقدار Boolean برابر با true را ذخیره می‌کند.",
    },

    {
        id: 21,
        lessonId: 3,
        question: "What is the purpose of an operator in JavaScript?",
        options: [
            "To create HTML elements",
            "To perform operations on values and variables",
            "To store files",
            "To create comments",
        ],
        correctAnswer: 1,
        explanation:
            "Operators are symbols used to perform operations on values and variables.",
        faQuestion:
            "هدف یک عملگر در JavaScript چیست؟",
        faOptions: [
            "ساخت عناصر HTML",
            "انجام عملیات روی مقادیر و متغیرها",
            "ذخیره فایل‌ها",
            "ایجاد کامنت‌ها",
        ],
        faExplanation:
            "عملگرها نمادهایی هستند که برای انجام عملیات روی مقادیر و متغیرها استفاده می‌شوند.",
    },

    {
        id: 22,
        lessonId: 3,
        question: "What is the result of this expression?\n\n10 + 5",
        options: [
            "5",
            "10",
            "15",
            "50",
        ],
        correctAnswer: 2,
        explanation:
            "The + operator performs addition, so 10 + 5 equals 15.",
        faQuestion:
            "نتیجه عبارت زیر چیست؟\n\n10 + 5",
        faOptions: [
            "5",
            "10",
            "15",
            "50",
        ],
        faExplanation:
            "عملگر + عملیات جمع را انجام می‌دهد، بنابراین 10 + 5 برابر با 15 است.",
    },

    {
        id: 23,
        lessonId: 3,
        question: "What is the result of this expression?\n\n10 - 3",
        options: [
            "7",
            "13",
            "30",
            "3",
        ],
        correctAnswer: 0,
        explanation:
            "The - operator performs subtraction, so 10 - 3 equals 7.",
        faQuestion:
            "نتیجه عبارت زیر چیست؟\n\n10 - 3",
        faOptions: [
            "7",
            "13",
            "30",
            "3",
        ],
        faExplanation:
            "عملگر - عملیات تفریق را انجام می‌دهد، بنابراین 10 - 3 برابر با 7 است.",
    },

    {
        id: 24,
        lessonId: 3,
        question: "What is the result of this expression?\n\n4 * 5",
        options: [
            "9",
            "20",
            "25",
            "1",
        ],
        correctAnswer: 1,
        explanation:
            "The * operator performs multiplication, so 4 * 5 equals 20.",
        faQuestion:
            "نتیجه عبارت زیر چیست؟\n\n4 * 5",
        faOptions: [
            "9",
            "20",
            "25",
            "1",
        ],
        faExplanation:
            "عملگر * عملیات ضرب را انجام می‌دهد، بنابراین 4 * 5 برابر با 20 است.",
    },

    {
        id: 25,
        lessonId: 3,
        question: "What is the result of this expression?\n\n10 / 2",
        options: [
            "2",
            "5",
            "8",
            "20",
        ],
        correctAnswer: 1,
        explanation:
            "The / operator performs division, so 10 / 2 equals 5.",
        faQuestion:
            "نتیجه عبارت زیر چیست؟\n\n10 / 2",
        faOptions: [
            "2",
            "5",
            "8",
            "20",
        ],
        faExplanation:
            "عملگر / عملیات تقسیم را انجام می‌دهد، بنابراین 10 / 2 برابر با 5 است.",
    },

    {
        id: 26,
        lessonId: 3,
        question: "What is the result of this expression?\n\n10 % 3",
        options: [
            "1",
            "3",
            "0",
            "10",
        ],
        correctAnswer: 0,
        explanation:
            "The % operator returns the remainder. The remainder of 10 divided by 3 is 1.",
        faQuestion:
            "نتیجه عبارت زیر چیست؟\n\n10 % 3",
        faOptions: [
            "1",
            "3",
            "0",
            "10",
        ],
        faExplanation:
            "عملگر % باقی‌مانده تقسیم را برمی‌گرداند. باقی‌مانده تقسیم 10 بر 3 برابر با 1 است.",
    },

    {
        id: 27,
        lessonId: 3,
        question: "What does the = operator do?",
        options: [
            "Compares two values",
            "Assigns a value to a variable",
            "Adds two numbers",
            "Checks if values are different",
        ],
        correctAnswer: 1,
        explanation:
            "The = operator assigns a value to a variable.",
        faQuestion:
            "عملگر = چه کاری انجام می‌دهد؟",
        faOptions: [
            "دو مقدار را با هم مقایسه می‌کند",
            "یک مقدار را به یک متغیر اختصاص می‌دهد",
            "دو عدد را با هم جمع می‌کند",
            "بررسی می‌کند که مقادیر متفاوت هستند یا نه",
        ],
        faExplanation:
            "عملگر = یک مقدار را به یک متغیر اختصاص می‌دهد.",
    },

    {
        id: 28,
        lessonId: 3,
        question: "What is the result of this comparison?\n\n10 === 10",
        options: [
            "true",
            "false",
            "10",
            "undefined",
        ],
        correctAnswer: 0,
        explanation:
            "The === operator checks strict equality. Since both values are the same number, the result is true.",
        faQuestion:
            "نتیجه مقایسه زیر چیست؟\n\n10 === 10",
        faOptions: [
            "true",
            "false",
            "10",
            "undefined",
        ],
        faExplanation:
            "عملگر === برابری کامل را بررسی می‌کند. چون هر دو مقدار یک عدد یکسان هستند، نتیجه true است.",
    },

    {
        id: 29,
        lessonId: 3,
        question: "What is the result of this comparison?\n\n10 > 5",
        options: [
            "true",
            "false",
            "15",
            "5",
        ],
        correctAnswer: 0,
        explanation:
            "10 is greater than 5, so the comparison returns true.",
        faQuestion:
            "نتیجه مقایسه زیر چیست؟\n\n10 > 5",
        faOptions: [
            "true",
            "false",
            "15",
            "5",
        ],
        faExplanation:
            "عدد 10 بزرگ‌تر از 5 است، بنابراین نتیجه مقایسه true است.",
    },

    {
        id: 30,
        lessonId: 3,
        question: "What does the += operator do?",
        options: [
            "Subtracts and assigns",
            "Compares two values",
            "Adds a value and assigns the result",
            "Divides two values",
        ],
        correctAnswer: 2,
        explanation:
            "The += operator adds a value to a variable and then assigns the new result back to that variable.",
        faQuestion:
            "عملگر += چه کاری انجام می‌دهد؟",
        faOptions: [
            "یک مقدار را کم می‌کند و اختصاص می‌دهد",
            "دو مقدار را مقایسه می‌کند",
            "یک مقدار را جمع می‌کند و نتیجه را دوباره اختصاص می‌دهد",
            "دو مقدار را تقسیم می‌کند",
        ],
        faExplanation:
            "عملگر += یک مقدار را به متغیر اضافه می‌کند و سپس نتیجه جدید را دوباره به همان متغیر اختصاص می‌دهد.",
    },
];