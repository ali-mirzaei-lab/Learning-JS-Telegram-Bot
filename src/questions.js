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
    {
        id: 31,
        lessonId: 4,
        question: "Which keyword is used to execute code only when a condition is true?",
        faQuestion: "کدام کلمه کلیدی برای اجرای کد فقط زمانی که یک شرط درست است استفاده می‌شود؟",
        options: [
            "if",
            "else",
            "for",
            "while"
        ],
        faOptions: [
            "if",
            "else",
            "for",
            "while"
        ],
        correctAnswer: 0,
        explanation: "The if statement runs its code block only when its condition evaluates to true.",
        faExplanation: "دستور if کد داخل بلوک خود را فقط زمانی اجرا می‌کند که شرط آن درست باشد."
    },
    {
        id: 32,
        lessonId: 4,
        question: "What will this code print if age is 20?",
        faQuestion: "اگر age برابر 20 باشد، این کد چه چیزی چاپ می‌کند؟",
        options: [
            "Adult",
            "Minor",
            "Nothing",
            "Error"
        ],
        faOptions: [
            "Adult",
            "Minor",
            "Nothing",
            "Error"
        ],
        correctAnswer: 0,
        explanation: "Because 20 is greater than or equal to 18, the condition is true and the code prints Adult.",
        faExplanation: "چون 20 بزرگ‌تر یا مساوی 18 است، شرط درست است و کد عبارت Adult را چاپ می‌کند."
    },
    {
        id: 33,
        lessonId: 4,
        question: "Which keyword is used when you want to run code if the if condition is false?",
        faQuestion: "وقتی می‌خواهید در صورت نادرست بودن شرط if کدی اجرا شود، از کدام کلمه کلیدی استفاده می‌کنید؟",
        options: [
            "else",
            "if",
            "then",
            "otherwise"
        ],
        faOptions: [
            "else",
            "if",
            "then",
            "otherwise"
        ],
        correctAnswer: 0,
        explanation: "The else block runs when the condition in the preceding if statement is false.",
        faExplanation: "بلوک else زمانی اجرا می‌شود که شرط دستور if قبلی نادرست باشد."
    },
    {
        id: 34,
        lessonId: 4,
        question: "Which operator checks whether two values are strictly equal?",
        faQuestion: "کدام عملگر بررسی می‌کند که دو مقدار دقیقاً برابر هستند؟",
        options: [
            "===",
            "=",
            "==",
            "!=="
        ],
        faOptions: [
            "===",
            "=",
            "==",
            "!=="
        ],
        correctAnswer: 0,
        explanation: "The === operator checks both value and type when comparing two values.",
        faExplanation: "عملگر === هنگام مقایسه دو مقدار، هم مقدار و هم نوع داده را بررسی می‌کند."
    },
    {
        id: 35,
        lessonId: 4,
        question: "What does the && operator require for the entire condition to be true?",
        faQuestion: "برای اینکه کل شرط با عملگر && درست باشد، چه چیزی لازم است؟",
        options: [
            "Both conditions must be true",
            "At least one condition must be true",
            "Both conditions must be false",
            "Only the first condition must be true"
        ],
        faOptions: [
            "هر دو شرط باید درست باشند",
            "حداقل یکی از شرط‌ها باید درست باشد",
            "هر دو شرط باید نادرست باشند",
            "فقط شرط اول باید درست باشد"
        ],
        correctAnswer: 0,
        explanation: "The && operator returns true only when both conditions are true.",
        faExplanation: "عملگر && فقط زمانی نتیجه درست می‌دهد که هر دو شرط درست باشند."
    },
    {
        id: 36,
        lessonId: 4,
        question: "What does the || operator require for the entire condition to be true?",
        faQuestion: "برای اینکه کل شرط با عملگر || درست باشد، چه چیزی لازم است؟",
        options: [
            "At least one condition must be true",
            "Both conditions must be true",
            "Both conditions must be false",
            "Only the second condition must be true"
        ],
        faOptions: [
            "حداقل یکی از شرط‌ها باید درست باشد",
            "هر دو شرط باید درست باشند",
            "هر دو شرط باید نادرست باشند",
            "فقط شرط دوم باید درست باشد"
        ],
        correctAnswer: 0,
        explanation: "The || operator returns true when at least one of the conditions is true.",
        faExplanation: "عملگر || زمانی نتیجه درست می‌دهد که حداقل یکی از شرط‌ها درست باشد."
    },
    {
        id: 37,
        lessonId: 4,
        question: "What does the ! operator do to a boolean value?",
        faQuestion: "عملگر ! با یک مقدار بولی چه کاری انجام می‌دهد؟",
        options: [
            "It reverses the boolean value",
            "It converts it to a number",
            "It checks strict equality",
            "It removes the value"
        ],
        faOptions: [
            "مقدار بولی را معکوس می‌کند",
            "آن را به عدد تبدیل می‌کند",
            "برابری دقیق را بررسی می‌کند",
            "مقدار را حذف می‌کند"
        ],
        correctAnswer: 0,
        explanation: "The ! operator reverses a boolean value. true becomes false, and false becomes true.",
        faExplanation: "عملگر ! مقدار بولی را معکوس می‌کند. true به false و false به true تبدیل می‌شود."
    },
    {
        id: 38,
        lessonId: 4,
        question: "Which keyword allows you to check another condition after an if condition is false?",
        faQuestion: "کدام کلمه کلیدی به شما اجازه می‌دهد بعد از نادرست بودن شرط if، شرط دیگری را بررسی کنید؟",
        options: [
            "else if",
            "else",
            "another if",
            "continue"
        ],
        faOptions: [
            "else if",
            "else",
            "another if",
            "continue"
        ],
        correctAnswer: 0,
        explanation: "The else if statement allows you to test another condition when the previous if condition is false.",
        faExplanation: "دستور else if به شما اجازه می‌دهد وقتی شرط قبلی نادرست است، شرط دیگری را بررسی کنید."
    },
    {
        id: 39,
        lessonId: 4,
        question: "What is a nested condition?",
        faQuestion: "شرط تو در تو (Nested Condition) چیست؟",
        options: [
            "A condition placed inside another condition",
            "A condition that always returns true",
            "Two conditions separated by a comma",
            "A condition without an if statement"
        ],
        faOptions: [
            "شرطی که داخل یک شرط دیگر قرار دارد",
            "شرطی که همیشه true برمی‌گرداند",
            "دو شرط که با کاما از هم جدا شده‌اند",
            "شرطی که بدون دستور if است"
        ],
        correctAnswer: 0,
        explanation: "A nested condition is a conditional statement placed inside another conditional statement.",
        faExplanation: "شرط تو در تو، یک دستور شرطی است که داخل یک دستور شرطی دیگر قرار گرفته است."
    },
    {
        id: 40,
        lessonId: 4,
        question: "What will this code print if score is 75?",
        faQuestion: "اگر score برابر 75 باشد، این کد چه چیزی چاپ می‌کند؟",
        options: [
            "Excellent!",
            "Good job!",
            "Keep practicing!",
            "Nothing"
        ],
        faOptions: [
            "Excellent!",
            "Good job!",
            "Keep practicing!",
            "Nothing"
        ],
        correctAnswer: 1,
        explanation: "75 is less than 90 but greater than or equal to 60, so the else if condition is true and Good job! is printed.",
        faExplanation: "عدد 75 کمتر از 90 اما بزرگ‌تر یا مساوی 60 است، بنابراین شرط else if درست است و Good job! چاپ می‌شود."
    },
    {
        id: 41,
        lessonId: 5,
        question: "What is the main purpose of a loop?",
        faQuestion: "هدف اصلی یک حلقه چیست؟",
        options: [
            "To repeat a block of code",
            "To create a variable",
            "To compare two values",
            "To delete data"
        ],
        faOptions: [
            "تکرار یک بخش از کد",
            "ایجاد یک متغیر",
            "مقایسه دو مقدار",
            "حذف داده‌ها"
        ],
        correctAnswer: 0,
        explanation: "Loops allow you to repeat a block of code multiple times without writing the same code repeatedly.",
        faExplanation: "حلقه‌ها به شما اجازه می‌دهند یک بخش از کد را چندین بار تکرار کنید بدون اینکه مجبور باشید همان کد را دوباره بنویسید."
    },
    {
        id: 42,
        lessonId: 5,
        question: "Which loop is commonly used when you know how many times you want to repeat something?",
        faQuestion: "وقتی می‌دانید چند بار می‌خواهید چیزی را تکرار کنید، معمولاً از کدام حلقه استفاده می‌کنید؟",
        options: [
            "for",
            "while",
            "do...while",
            "if"
        ],
        faOptions: [
            "for",
            "while",
            "do...while",
            "if"
        ],
        correctAnswer: 0,
        explanation: "A for loop is commonly used when you know the number of iterations you need.",
        faExplanation: "حلقه for معمولاً زمانی استفاده می‌شود که تعداد تکرارهای مورد نیاز را می‌دانید."
    },
    {
        id: 43,
        lessonId: 5,
        question: "What will this code print? for (let i = 0; i < 3; i++) { console.log(i); }",
        faQuestion: "این کد چه چیزی چاپ می‌کند؟ for (let i = 0; i < 3; i++) { console.log(i); }",
        options: [
            "0, 1, 2",
            "1, 2, 3",
            "0, 1, 2, 3",
            "3"
        ],
        faOptions: [
            "0، 1، 2",
            "1، 2، 3",
            "0، 1، 2، 3",
            "3"
        ],
        correctAnswer: 0,
        explanation: "The loop starts at 0 and continues while i is less than 3, so it prints 0, 1, and 2.",
        faExplanation: "حلقه از 0 شروع می‌شود و تا زمانی که i کمتر از 3 باشد ادامه دارد، بنابراین 0، 1 و 2 را چاپ می‌کند."
    },
    {
        id: 44,
        lessonId: 5,
        question: "Which three parts are found in a typical for loop?",
        faQuestion: "یک حلقه for معمولی شامل کدام سه بخش است؟",
        options: [
            "Initialization, condition, update",
            "Start, stop, delete",
            "Variable, function, return",
            "Create, read, write"
        ],
        faOptions: [
            "مقداردهی اولیه، شرط، به‌روزرسانی",
            "شروع، توقف، حذف",
            "متغیر، تابع، return",
            "ایجاد، خواندن، نوشتن"
        ],
        correctAnswer: 0,
        explanation: "A for loop normally contains initialization, a condition, and an update expression.",
        faExplanation: "یک حلقه for معمولاً شامل مقداردهی اولیه، شرط و عبارت به‌روزرسانی است."
    },
    {
        id: 45,
        lessonId: 5,
        question: "When does a while loop continue running?",
        faQuestion: "حلقه while چه زمانی به اجرای خود ادامه می‌دهد؟",
        options: [
            "While its condition is true",
            "While its condition is false",
            "Only once",
            "Only when an error occurs"
        ],
        faOptions: [
            "تا زمانی که شرط آن درست باشد",
            "تا زمانی که شرط آن نادرست باشد",
            "فقط یک بار",
            "فقط زمانی که خطایی رخ دهد"
        ],
        correctAnswer: 0,
        explanation: "A while loop continues executing as long as its condition evaluates to true.",
        faExplanation: "حلقه while تا زمانی که شرط آن درست باشد به اجرای خود ادامه می‌دهد."
    },
    {
        id: 46,
        lessonId: 5,
        question: "What is special about a do...while loop?",
        faQuestion: "ویژگی خاص حلقه do...while چیست؟",
        options: [
            "It runs at least once",
            "It never checks a condition",
            "It always runs forever",
            "It can only run twice"
        ],
        faOptions: [
            "حداقل یک بار اجرا می‌شود",
            "هیچ‌وقت شرط را بررسی نمی‌کند",
            "همیشه بی‌نهایت اجرا می‌شود",
            "فقط می‌تواند دو بار اجرا شود"
        ],
        correctAnswer: 0,
        explanation: "A do...while loop executes its code before checking the condition, so it always runs at least once.",
        faExplanation: "حلقه do...while ابتدا کد را اجرا می‌کند و سپس شرط را بررسی می‌کند، بنابراین حداقل یک بار اجرا می‌شود."
    },
    {
        id: 47,
        lessonId: 5,
        question: "What does the break statement do inside a loop?",
        faQuestion: "دستور break در یک حلقه چه کاری انجام می‌دهد؟",
        options: [
            "Stops the loop completely",
            "Skips one iteration",
            "Starts the loop again",
            "Creates a new loop"
        ],
        faOptions: [
            "حلقه را کاملاً متوقف می‌کند",
            "یک تکرار را رد می‌کند",
            "حلقه را دوباره شروع می‌کند",
            "یک حلقه جدید ایجاد می‌کند"
        ],
        correctAnswer: 0,
        explanation: "The break statement immediately stops the loop.",
        faExplanation: "دستور break بلافاصله حلقه را متوقف می‌کند."
    },
    {
        id: 48,
        lessonId: 5,
        question: "What does the continue statement do inside a loop?",
        faQuestion: "دستور continue در یک حلقه چه کاری انجام می‌دهد؟",
        options: [
            "Skips the current iteration",
            "Stops the entire loop",
            "Restarts the program",
            "Creates a new variable"
        ],
        faOptions: [
            "تکرار فعلی را رد می‌کند",
            "کل حلقه را متوقف می‌کند",
            "برنامه را دوباره اجرا می‌کند",
            "یک متغیر جدید ایجاد می‌کند"
        ],
        correctAnswer: 0,
        explanation: "The continue statement skips the rest of the current iteration and moves to the next iteration.",
        faExplanation: "دستور continue ادامه تکرار فعلی را رد می‌کند و به تکرار بعدی می‌رود."
    },
    {
        id: 49,
        lessonId: 5,
        question: "What will this code print? for (let i = 0; i < 5; i++) { if (i === 2) { continue; } console.log(i); }",
        faQuestion: "این کد چه چیزی چاپ می‌کند؟ for (let i = 0; i < 5; i++) { if (i === 2) { continue; } console.log(i); }",
        options: [
            "0, 1, 3, 4",
            "0, 1, 2, 3, 4",
            "2",
            "0, 1"
        ],
        faOptions: [
            "0، 1، 3، 4",
            "0، 1، 2، 3، 4",
            "2",
            "0، 1"
        ],
        correctAnswer: 0,
        explanation: "When i equals 2, continue skips that iteration, so 2 is not printed.",
        faExplanation: "وقتی i برابر 2 می‌شود، continue آن تکرار را رد می‌کند، بنابراین 2 چاپ نمی‌شود."
    },
    {
        id: 50,
        lessonId: 5,
        question: "What will this code print? let count = 0; while (count < 3) { console.log(count); count++; }",
        faQuestion: "این کد چه چیزی چاپ می‌کند؟ let count = 0; while (count < 3) { console.log(count); count++; }",
        options: [
            "0, 1, 2",
            "1, 2, 3",
            "0, 1, 2, 3",
            "3"
        ],
        faOptions: [
            "0، 1، 2",
            "1، 2، 3",
            "0، 1، 2، 3",
            "3"
        ],
        correctAnswer: 0,
        explanation: "The loop starts at 0 and stops when count reaches 3, so it prints 0, 1, and 2.",
        faExplanation: "حلقه از 0 شروع می‌شود و زمانی که count به 3 برسد متوقف می‌شود، بنابراین 0، 1 و 2 را چاپ می‌کند."
    },
    {
        id: 51,
        lessonId: 6,
        question: "What is a function?",
        faQuestion: "Function یا تابع چیست؟",
        options: [
            "A reusable block of code",
            "A type of variable",
            "A loop that never stops",
            "A data type"
        ],
        faOptions: [
            "یک بلوک قابل استفاده مجدد از کد",
            "یک نوع متغیر",
            "یک حلقه که هیچ‌وقت متوقف نمی‌شود",
            "یک نوع داده"
        ],
        correctAnswer: 0,
        explanation: "A function is a reusable block of code designed to perform a specific task.",
        faExplanation: "تابع یک بلوک قابل استفاده مجدد از کد است که برای انجام یک کار مشخص طراحی شده است."
    },
    {
        id: 52,
        lessonId: 6,
        question: "Which keyword is commonly used to declare a function?",
        faQuestion: "کدام کلمه کلیدی معمولاً برای تعریف یک تابع استفاده می‌شود؟",
        options: [
            "function",
            "def",
            "func",
            "method"
        ],
        faOptions: [
            "function",
            "def",
            "func",
            "method"
        ],
        correctAnswer: 0,
        explanation: "The function keyword is used to declare a traditional JavaScript function.",
        faExplanation: "کلمه کلیدی function برای تعریف یک تابع معمولی در JavaScript استفاده می‌شود."
    },
    {
        id: 53,
        lessonId: 6,
        question: "How do you call a function named greet?",
        faQuestion: "چگونه تابعی با نام greet را اجرا می‌کنید؟",
        options: [
            "greet()",
            "call greet",
            "greet",
            "run(greet)"
        ],
        faOptions: [
            "greet()",
            "call greet",
            "greet",
            "run(greet)"
        ],
        correctAnswer: 0,
        explanation: "You call a function by writing its name followed by parentheses.",
        faExplanation: "برای اجرای یک تابع، نام آن را به همراه پرانتز می‌نویسید."
    },
    {
        id: 54,
        lessonId: 6,
        question: "What is a parameter?",
        faQuestion: "Parameter یا پارامتر چیست؟",
        options: [
            "A variable defined in a function's declaration",
            "The value returned by a function",
            "The name of a function",
            "A loop inside a function"
        ],
        faOptions: [
            "متغیری که هنگام تعریف تابع مشخص می‌شود",
            "مقداری که تابع برمی‌گرداند",
            "نام یک تابع",
            "یک حلقه داخل تابع"
        ],
        correctAnswer: 0,
        explanation: "A parameter is a variable listed in a function's declaration that receives a value when the function is called.",
        faExplanation: "پارامتر متغیری است که هنگام تعریف تابع مشخص می‌شود و هنگام اجرای تابع یک مقدار دریافت می‌کند."
    },
    {
        id: 55,
        lessonId: 6,
        question: "What is an argument?",
        faQuestion: "Argument یا آرگومان چیست؟",
        options: [
            "A value passed to a function when it is called",
            "A variable declared outside a function",
            "The function's return keyword",
            "The name of a parameter"
        ],
        faOptions: [
            "مقداری که هنگام اجرای تابع به آن ارسال می‌شود",
            "متغیری که خارج از تابع تعریف شده است",
            "کلمه کلیدی return تابع",
            "نام یک پارامتر"
        ],
        correctAnswer: 0,
        explanation: "An argument is the actual value passed to a function when the function is called.",
        faExplanation: "آرگومان مقدار واقعی است که هنگام اجرای تابع به آن ارسال می‌شود."
    },
    {
        id: 56,
        lessonId: 6,
        question: "What keyword is used to send a value back from a function?",
        faQuestion: "از کدام کلمه کلیدی برای برگرداندن یک مقدار از تابع استفاده می‌شود؟",
        options: [
            "return",
            "send",
            "back",
            "output"
        ],
        faOptions: [
            "return",
            "send",
            "back",
            "output"
        ],
        correctAnswer: 0,
        explanation: "The return keyword sends a value back from a function and stops its execution.",
        faExplanation: "کلمه کلیدی return یک مقدار را از تابع برمی‌گرداند و اجرای تابع را متوقف می‌کند."
    },
    {
        id: 57,
        lessonId: 6,
        question: "What will this function return? function add(a, b) { return a + b; }",
        faQuestion: "این تابع چه مقداری را برمی‌گرداند؟ function add(a, b) { return a + b; }",
        options: [
            "The sum of a and b",
            "The value of a only",
            "The value of b only",
            "Nothing"
        ],
        faOptions: [
            "مجموع a و b",
            "فقط مقدار a",
            "فقط مقدار b",
            "هیچ مقداری"
        ],
        correctAnswer: 0,
        explanation: "The return statement returns the result of adding a and b.",
        faExplanation: "دستور return نتیجه جمع a و b را برمی‌گرداند."
    },
    {
        id: 58,
        lessonId: 6,
        question: "Which of these is a valid arrow function?",
        faQuestion: "کدام گزینه یک Arrow Function معتبر است؟",
        options: [
            "const add = (a, b) => a + b;",
            "const add => (a, b) a + b;",
            "arrow add(a, b) = a + b;",
            "const add = function => (a, b);"
        ],
        faOptions: [
            "const add = (a, b) => a + b;",
            "const add => (a, b) a + b;",
            "arrow add(a, b) = a + b;",
            "const add = function => (a, b);"
        ],
        correctAnswer: 0,
        explanation: "An arrow function can be created using the => syntax.",
        faExplanation: "برای ایجاد Arrow Function از سینتکس => استفاده می‌شود."
    },
    {
        id: 59,
        lessonId: 6,
        question: "What will this code return? const multiply = (a, b) => a * b; multiply(4, 3);",
        faQuestion: "این کد چه مقداری را برمی‌گرداند؟ const multiply = (a, b) => a * b; multiply(4, 3);",
        options: [
            "12",
            "7",
            "43",
            "1"
        ],
        faOptions: [
            "12",
            "7",
            "43",
            "1"
        ],
        correctAnswer: 0,
        explanation: "The function multiplies 4 by 3, so it returns 12.",
        faExplanation: "این تابع 4 را در 3 ضرب می‌کند، بنابراین مقدار 12 را برمی‌گرداند."
    },
    {
        id: 60,
        lessonId: 6,
        question: "What happens when a return statement is executed inside a function?",
        faQuestion: "وقتی دستور return داخل یک تابع اجرا می‌شود چه اتفاقی می‌افتد؟",
        options: [
            "The function stops and returns a value",
            "The function starts again",
            "The loop starts automatically",
            "The program always stops completely"
        ],
        faOptions: [
            "تابع متوقف می‌شود و یک مقدار برمی‌گرداند",
            "تابع دوباره شروع می‌شود",
            "حلقه به صورت خودکار شروع می‌شود",
            "برنامه به طور کامل متوقف می‌شود"
        ],
        correctAnswer: 0,
        explanation: "When return is executed, the function immediately stops and sends its value back to the caller.",
        faExplanation: "وقتی return اجرا می‌شود، تابع بلافاصله متوقف می‌شود و مقدار خود را به جایی که تابع را فراخوانی کرده برمی‌گرداند."
    },
    {
        id: 61,
        lessonId: 7,
        question: "What is an array used for?",
        faQuestion: "آرایه برای چه کاری استفاده می‌شود؟",
        options: [
            "Storing multiple values in a single variable",
            "Creating only numbers",
            "Running a function",
            "Checking a condition"
        ],
        faOptions: [
            "ذخیره چندین مقدار در یک متغیر",
            "ایجاد فقط اعداد",
            "اجرای یک تابع",
            "بررسی یک شرط"
        ],
        correctAnswer: 0,
        explanation: "An array allows you to store multiple values in a single variable.",
        faExplanation: "آرایه به شما اجازه می‌دهد چندین مقدار را در یک متغیر ذخیره کنید."
    },
    {
        id: 62,
        lessonId: 7,
        question: "What is the index of the first item in a JavaScript array?",
        faQuestion: "index اولین عنصر در آرایه JavaScript چند است؟",
        options: [
            "0",
            "1",
            "-1",
            "10"
        ],
        faOptions: [
            "0",
            "1",
            "-1",
            "10"
        ],
        correctAnswer: 0,
        explanation: "JavaScript arrays use zero-based indexing, so the first item has index 0.",
        faExplanation: "آرایه‌های JavaScript از شماره‌گذاری صفرمبنا استفاده می‌کنند، بنابراین اولین عنصر index برابر 0 دارد."
    },
    {
        id: 63,
        lessonId: 7,
        question: "What will fruits[1] return? const fruits = [\"Apple\", \"Banana\", \"Orange\"];",
        faQuestion: "عبارت fruits[1] چه مقداری را برمی‌گرداند؟ const fruits = [\"Apple\", \"Banana\", \"Orange\"];",
        options: [
            "Apple",
            "Banana",
            "Orange",
            "undefined"
        ],
        faOptions: [
            "Apple",
            "Banana",
            "Orange",
            "undefined"
        ],
        correctAnswer: 1,
        explanation: "Because array indexes start at 0, index 1 refers to Banana.",
        faExplanation: "چون index آرایه از 0 شروع می‌شود، index شماره 1 به Banana اشاره می‌کند."
    },
    {
        id: 64,
        lessonId: 7,
        question: "Which property tells you how many items are in an array?",
        faQuestion: "کدام property تعداد عناصر موجود در یک آرایه را مشخص می‌کند؟",
        options: [
            "length",
            "size",
            "count",
            "items"
        ],
        faOptions: [
            "length",
            "size",
            "count",
            "items"
        ],
        correctAnswer: 0,
        explanation: "The length property returns the number of elements in an array.",
        faExplanation: "property به نام length تعداد عناصر موجود در آرایه را برمی‌گرداند."
    },
    {
        id: 65,
        lessonId: 7,
        question: "Which method adds an item to the end of an array?",
        faQuestion: "کدام متد یک عنصر را به انتهای آرایه اضافه می‌کند؟",
        options: [
            "push()",
            "pop()",
            "shift()",
            "add()"
        ],
        faOptions: [
            "push()",
            "pop()",
            "shift()",
            "add()"
        ],
        correctAnswer: 0,
        explanation: "The push() method adds one or more elements to the end of an array.",
        faExplanation: "متد push() یک یا چند عنصر را به انتهای آرایه اضافه می‌کند."
    },
    {
        id: 66,
        lessonId: 7,
        question: "Which method removes the last item from an array?",
        faQuestion: "کدام متد آخرین عنصر آرایه را حذف می‌کند؟",
        options: [
            "pop()",
            "push()",
            "shift()",
            "remove()"
        ],
        faOptions: [
            "pop()",
            "push()",
            "shift()",
            "remove()"
        ],
        correctAnswer: 0,
        explanation: "The pop() method removes the last element from an array.",
        faExplanation: "متد pop() آخرین عنصر آرایه را حذف می‌کند."
    },
    {
        id: 67,
        lessonId: 7,
        question: "Which method removes the first item from an array?",
        faQuestion: "کدام متد اولین عنصر آرایه را حذف می‌کند؟",
        options: [
            "shift()",
            "pop()",
            "push()",
            "removeFirst()"
        ],
        faOptions: [
            "shift()",
            "pop()",
            "push()",
            "removeFirst()"
        ],
        correctAnswer: 0,
        explanation: "The shift() method removes the first element from an array.",
        faExplanation: "متد shift() اولین عنصر آرایه را حذف می‌کند."
    },
    {
        id: 68,
        lessonId: 7,
        question: "Which method adds an item to the beginning of an array?",
        faQuestion: "کدام متد یک عنصر را به ابتدای آرایه اضافه می‌کند؟",
        options: [
            "unshift()",
            "push()",
            "shift()",
            "prepend()"
        ],
        faOptions: [
            "unshift()",
            "push()",
            "shift()",
            "prepend()"
        ],
        correctAnswer: 0,
        explanation: "The unshift() method adds one or more elements to the beginning of an array.",
        faExplanation: "متد unshift() یک یا چند عنصر را به ابتدای آرایه اضافه می‌کند."
    },
    {
        id: 69,
        lessonId: 7,
        question: "What does the includes() method do?",
        faQuestion: "متد includes() چه کاری انجام می‌دهد؟",
        options: [
            "Checks whether a value exists in an array",
            "Adds a value to an array",
            "Removes a value from an array",
            "Returns the array length"
        ],
        faOptions: [
            "بررسی می‌کند که آیا یک مقدار در آرایه وجود دارد",
            "یک مقدار به آرایه اضافه می‌کند",
            "یک مقدار را از آرایه حذف می‌کند",
            "طول آرایه را برمی‌گرداند"
        ],
        correctAnswer: 0,
        explanation: "includes() checks whether an array contains a specific value and returns true or false.",
        faExplanation: "includes() بررسی می‌کند که آیا یک مقدار مشخص در آرایه وجود دارد و true یا false برمی‌گرداند."
    },
    {
        id: 70,
        lessonId: 7,
        question: "What will this code print? const numbers = [10, 20, 30]; console.log(numbers.length);",
        faQuestion: "این کد چه چیزی چاپ می‌کند؟ const numbers = [10, 20, 30]; console.log(numbers.length);",
        options: [
            "3",
            "2",
            "30",
            "0"
        ],
        faOptions: [
            "3",
            "2",
            "30",
            "0"
        ],
        correctAnswer: 0,
        explanation: "The array contains three elements, so its length is 3.",
        faExplanation: "این آرایه شامل سه عنصر است، بنابراین length آن برابر 3 است."
    },
    {
        id: 71,
        lessonId: 8,
        question: "What is an object commonly used for?",
        faQuestion: "Object معمولاً برای چه کاری استفاده می‌شود؟",
        options: [
            "Storing related data together",
            "Repeating code",
            "Creating loops",
            "Comparing numbers"
        ],
        faOptions: [
            "ذخیره اطلاعات مرتبط در کنار یکدیگر",
            "تکرار کد",
            "ایجاد حلقه",
            "مقایسه اعداد"
        ],
        correctAnswer: 0,
        explanation: "Objects allow you to organize related data and functionality together.",
        faExplanation: "Objects به شما اجازه می‌دهند اطلاعات و عملکردهای مرتبط را در کنار یکدیگر سازمان‌دهی کنید."
    },
    {
        id: 72,
        lessonId: 8,
        question: "What are the name and age in this object? const person = { name: \"Ali\", age: 25 };",
        faQuestion: "در این Object، name و age چه نامیده می‌شوند؟ const person = { name: \"Ali\", age: 25 };",
        options: [
            "Properties",
            "Arguments",
            "Functions",
            "Indexes"
        ],
        faOptions: [
            "Properties",
            "Arguments",
            "Functions",
            "Indexes"
        ],
        correctAnswer: 0,
        explanation: "name and age are properties of the person object.",
        faExplanation: "name و age، Propertyهای Object به نام person هستند."
    },
    {
        id: 73,
        lessonId: 8,
        question: "How can you access the name property using dot notation?",
        faQuestion: "چگونه می‌توانید با استفاده از Dot Notation به Property به نام name دسترسی پیدا کنید؟",
        options: [
            "person.name",
            "person[name]",
            "person->name",
            "person:name"
        ],
        faOptions: [
            "person.name",
            "person[name]",
            "person->name",
            "person:name"
        ],
        correctAnswer: 0,
        explanation: "Dot notation uses the object name followed by a dot and the property name.",
        faExplanation: "در Dot Notation نام Object، سپس نقطه و بعد نام Property نوشته می‌شود."
    },
    {
        id: 74,
        lessonId: 8,
        question: "Which is a valid way to access the age property using bracket notation?",
        faQuestion: "کدام گزینه روش صحیح دسترسی به Property به نام age با استفاده از Bracket Notation است؟",
        options: [
            "person[\"age\"]",
            "person.age()",
            "person->age",
            "person{age}"
        ],
        faOptions: [
            "person[\"age\"]",
            "person.age()",
            "person->age",
            "person{age}"
        ],
        correctAnswer: 0,
        explanation: "Bracket notation uses square brackets with the property name as a string.",
        faExplanation: "در Bracket Notation نام Property داخل براکت‌های مربعی و به صورت String قرار می‌گیرد."
    },
    {
        id: 75,
        lessonId: 8,
        question: "How can you change the age property of an object?",
        faQuestion: "چگونه می‌توانید مقدار Property به نام age را تغییر دهید؟",
        options: [
            "person.age = 26;",
            "person.age == 26;",
            "change(person.age, 26);",
            "person.age => 26;"
        ],
        faOptions: [
            "person.age = 26;",
            "person.age == 26;",
            "change(person.age, 26);",
            "person.age => 26;"
        ],
        correctAnswer: 0,
        explanation: "You can change an object's property by assigning a new value to it.",
        faExplanation: "با اختصاص دادن یک مقدار جدید به Property می‌توانید مقدار آن را تغییر دهید."
    },
    {
        id: 76,
        lessonId: 8,
        question: "How can you add a new city property to the person object?",
        faQuestion: "چگونه می‌توانید یک Property جدید به نام city به Object شخص اضافه کنید؟",
        options: [
            "person.city = \"Baku\";",
            "person.add(city, \"Baku\");",
            "person.city == \"Baku\";",
            "add person.city \"Baku\";"
        ],
        faOptions: [
            "person.city = \"Baku\";",
            "person.add(city, \"Baku\");",
            "person.city == \"Baku\";",
            "add person.city \"Baku\";"
        ],
        correctAnswer: 0,
        explanation: "Assigning a value to a new property creates that property on the object.",
        faExplanation: "با اختصاص دادن مقدار به یک Property جدید، آن Property به Object اضافه می‌شود."
    },
    {
        id: 77,
        lessonId: 8,
        question: "Which keyword is used to remove a property from an object?",
        faQuestion: "از کدام کلمه کلیدی برای حذف یک Property از Object استفاده می‌شود؟",
        options: [
            "delete",
            "remove",
            "clear",
            "destroy"
        ],
        faOptions: [
            "delete",
            "remove",
            "clear",
            "destroy"
        ],
        correctAnswer: 0,
        explanation: "The delete operator removes a property from an object.",
        faExplanation: "عملگر delete یک Property را از Object حذف می‌کند."
    },
    {
        id: 78,
        lessonId: 8,
        question: "What is a function stored inside an object called?",
        faQuestion: "تابعی که داخل یک Object ذخیره شده باشد چه نامیده می‌شود؟",
        options: [
            "Method",
            "Property",
            "Parameter",
            "Variable"
        ],
        faOptions: [
            "Method",
            "Property",
            "Parameter",
            "Variable"
        ],
        correctAnswer: 0,
        explanation: "A function stored as a property of an object is commonly called a method.",
        faExplanation: "تابعی که به عنوان Property یک Object ذخیره شده باشد معمولاً Method نامیده می‌شود."
    },
    {
        id: 79,
        lessonId: 8,
        question: "What does the this keyword refer to inside an object method?",
        faQuestion: "کلمه کلیدی this داخل یک Method از Object به چه چیزی اشاره می‌کند؟",
        options: [
            "The object itself",
            "The previous object",
            "The function's parameter",
            "The global array"
        ],
        faOptions: [
            "خود Object",
            "Object قبلی",
            "پارامتر تابع",
            "آرایه سراسری"
        ],
        correctAnswer: 0,
        explanation: "In a regular object method call, this refers to the object that the method belongs to.",
        faExplanation: "در یک فراخوانی معمولی از Method یک Object، this به همان Object اشاره می‌کند."
    },
    {
        id: 80,
        lessonId: 8,
        question: "What will this code print? const person = { name: \"Ali\" }; console.log(person.name);",
        faQuestion: "این کد چه چیزی چاپ می‌کند؟ const person = { name: \"Ali\" }; console.log(person.name);",
        options: [
            "Ali",
            "name",
            "person",
            "undefined"
        ],
        faOptions: [
            "Ali",
            "name",
            "person",
            "undefined"
        ],
        correctAnswer: 0,
        explanation: "person.name accesses the value stored in the name property, which is Ali.",
        faExplanation: "عبارت person.name به مقدار ذخیره‌شده در Property به نام name دسترسی پیدا می‌کند که Ali است."
    },
    {
        id: 81,
        lessonId: 9,
        question: "What does scope determine?",
        faQuestion: "Scope چه چیزی را مشخص می‌کند؟",
        options: [
            "Where a variable can be accessed",
            "How fast a function runs",
            "How many values an array contains",
            "What type a variable is"
        ],
        faOptions: [
            "اینکه یک متغیر در کجا قابل دسترسی است",
            "اینکه یک تابع با چه سرعتی اجرا می‌شود",
            "اینکه یک آرایه چند مقدار دارد",
            "اینکه نوع یک متغیر چیست"
        ],
        correctAnswer: 0,
        explanation: "Scope determines where variables can be accessed in your code.",
        faExplanation: "Scope مشخص می‌کند که متغیرها در کدام قسمت‌های کد قابل دسترسی هستند."
    },
    {
        id: 82,
        lessonId: 9,
        question: "What type of scope does a variable declared outside all functions and blocks have?",
        faQuestion: "متغیری که خارج از تمام Functionها و Blockها تعریف شود چه نوع Scopeای دارد؟",
        options: [
            "Global scope",
            "Function scope",
            "Block scope",
            "Local scope"
        ],
        faOptions: [
            "Global Scope",
            "Function Scope",
            "Block Scope",
            "Local Scope"
        ],
        correctAnswer: 0,
        explanation: "A variable declared outside functions and blocks has global scope.",
        faExplanation: "متغیری که خارج از Functionها و Blockها تعریف شود دارای Global Scope است."
    },
    {
        id: 83,
        lessonId: 9,
        question: "Where can a variable declared with const inside a function be accessed?",
        faQuestion: "متغیری که با const داخل یک Function تعریف شده باشد کجا قابل دسترسی است؟",
        options: [
            "Inside its scope",
            "Everywhere in the program",
            "Only inside arrays",
            "Only inside objects"
        ],
        faOptions: [
            "داخل Scope خودش",
            "در تمام قسمت‌های برنامه",
            "فقط داخل آرایه‌ها",
            "فقط داخل Objectها"
        ],
        correctAnswer: 0,
        explanation: "A const variable declared inside a function can only be accessed within its accessible scope.",
        faExplanation: "متغیر const که داخل یک Function تعریف شده باشد فقط در Scope قابل دسترسی خودش قابل استفاده است."
    },
    {
        id: 84,
        lessonId: 9,
        question: "Which keywords are block-scoped?",
        faQuestion: "کدام کلمات کلیدی دارای Block Scope هستند؟",
        options: [
            "let and const",
            "var only",
            "function and var",
            "if and else"
        ],
        faOptions: [
            "let و const",
            "فقط var",
            "function و var",
            "if و else"
        ],
        correctAnswer: 0,
        explanation: "Variables declared with let and const are block-scoped.",
        faExplanation: "متغیرهایی که با let و const تعریف می‌شوند دارای Block Scope هستند."
    },
    {
        id: 85,
        lessonId: 9,
        question: "What type of scope does var use?",
        faQuestion: "var از چه نوع Scopeای استفاده می‌کند؟",
        options: [
            "Function scope",
            "Block scope",
            "Global scope only",
            "Array scope"
        ],
        faOptions: [
            "Function Scope",
            "Block Scope",
            "فقط Global Scope",
            "Array Scope"
        ],
        correctAnswer: 0,
        explanation: "var is function-scoped rather than block-scoped.",
        faExplanation: "var دارای Function Scope است و مانند let و const محدود به Block نیست."
    },
    {
        id: 86,
        lessonId: 9,
        question: "What happens when you try to access a let variable outside the block where it was declared?",
        faQuestion: "اگر بخواهید به یک متغیر let خارج از Blockای که در آن تعریف شده دسترسی پیدا کنید چه اتفاقی می‌افتد؟",
        options: [
            "An error occurs",
            "The value becomes 0",
            "The value becomes undefined automatically",
            "JavaScript moves the variable to the global scope"
        ],
        faOptions: [
            "خطا رخ می‌دهد",
            "مقدار آن 0 می‌شود",
            "مقدار آن به صورت خودکار undefined می‌شود",
            "JavaScript متغیر را به Global Scope منتقل می‌کند"
        ],
        correctAnswer: 0,
        explanation: "A let variable is block-scoped, so it cannot be accessed outside its block.",
        faExplanation: "متغیر let دارای Block Scope است و خارج از Block خودش قابل دسترسی نیست."
    },
    {
        id: 87,
        lessonId: 9,
        question: "What will this code print? const name = \"Ali\"; function greet() { console.log(name); } greet();",
        faQuestion: "این کد چه چیزی چاپ می‌کند؟ const name = \"Ali\"; function greet() { console.log(name); } greet();",
        options: [
            "Ali",
            "undefined",
            "name",
            "An error"
        ],
        faOptions: [
            "Ali",
            "undefined",
            "name",
            "خطا"
        ],
        correctAnswer: 0,
        explanation: "The function can access name because name exists in an outer scope.",
        faExplanation: "Function می‌تواند به name دسترسی داشته باشد، چون name در یک Scope بیرونی قرار دارد."
    },
    {
        id: 88,
        lessonId: 9,
        question: "Can an inner scope access variables from an outer scope?",
        faQuestion: "آیا یک Scope داخلی می‌تواند به متغیرهای Scope بیرونی دسترسی داشته باشد؟",
        options: [
            "Yes",
            "No",
            "Only with var",
            "Only with arrays"
        ],
        faOptions: [
            "بله",
            "خیر",
            "فقط با var",
            "فقط با آرایه‌ها"
        ],
        correctAnswer: 0,
        explanation: "An inner scope can access variables from its outer scope.",
        faExplanation: "یک Scope داخلی می‌تواند به متغیرهای موجود در Scope بیرونی دسترسی داشته باشد."
    },
    {
        id: 89,
        lessonId: 9,
        question: "Can an outer scope access a variable declared only inside an inner scope?",
        faQuestion: "آیا یک Scope بیرونی می‌تواند به متغیری که فقط داخل یک Scope داخلی تعریف شده دسترسی داشته باشد؟",
        options: [
            "No",
            "Yes",
            "Only with const",
            "Only inside a loop"
        ],
        faOptions: [
            "خیر",
            "بله",
            "فقط با const",
            "فقط داخل یک حلقه"
        ],
        correctAnswer: 0,
        explanation: "Outer scopes cannot access variables that only exist inside an inner scope.",
        faExplanation: "Scopeهای بیرونی نمی‌توانند به متغیرهایی که فقط داخل Scopeهای داخلی وجود دارند دسترسی داشته باشند."
    },
    {
        id: 90,
        lessonId: 9,
        question: "Why is understanding scope important?",
        faQuestion: "چرا درک Scope مهم است؟",
        options: [
            "It helps organize and control variable access",
            "It makes every function asynchronous",
            "It automatically creates arrays",
            "It changes strings into numbers"
        ],
        faOptions: [
            "به سازمان‌دهی و کنترل دسترسی به متغیرها کمک می‌کند",
            "تمام Functionها را به صورت خودکار asynchronous می‌کند",
            "به صورت خودکار Array ایجاد می‌کند",
            "Stringها را به Number تبدیل می‌کند"
        ],
        correctAnswer: 0,
        explanation: "Understanding scope helps you control where variables can be accessed and prevents unwanted interference.",
        faExplanation: "درک Scope به شما کمک می‌کند محل دسترسی به متغیرها را کنترل کنید و از تداخل ناخواسته جلوگیری کنید."
    },
    {
        id: 91,
        lessonId: 10,
        question: "What does DOM stand for?",
        faQuestion: "DOM مخفف چیست؟",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Document Order Manager",
            "Dynamic Object Model"
        ],
        faOptions: [
            "Document Object Model",
            "Data Object Method",
            "Document Order Manager",
            "Dynamic Object Model"
        ],
        correctAnswer: 0,
        explanation: "DOM stands for Document Object Model.",
        faExplanation: "DOM مخفف Document Object Model است."
    },
    {
        id: 92,
        lessonId: 10,
        question: "What does the DOM represent?",
        faQuestion: "DOM چه چیزی را نمایش می‌دهد؟",
        options: [
            "An HTML page as a tree of objects",
            "Only JavaScript functions",
            "Only CSS styles",
            "A database"
        ],
        faOptions: [
            "یک صفحه HTML به صورت ساختاری از Objectها",
            "فقط Functionهای JavaScript",
            "فقط استایل‌های CSS",
            "یک Database"
        ],
        correctAnswer: 0,
        explanation: "The DOM represents an HTML document as a tree of objects that JavaScript can interact with.",
        faExplanation: "DOM یک سند HTML را به صورت ساختاری از Objectها نمایش می‌دهد که JavaScript می‌تواند با آن‌ها تعامل داشته باشد."
    },
    {
        id: 93,
        lessonId: 10,
        question: "Which method selects an element by its ID?",
        faQuestion: "کدام متد یک عنصر را با استفاده از ID آن انتخاب می‌کند؟",
        options: [
            "getElementById()",
            "getElementByClass()",
            "selectById()",
            "findId()"
        ],
        faOptions: [
            "getElementById()",
            "getElementByClass()",
            "selectById()",
            "findId()"
        ],
        correctAnswer: 0,
        explanation: "getElementById() finds an HTML element using its id attribute.",
        faExplanation: "متد getElementById() یک عنصر HTML را با استفاده از Attribute به نام id پیدا می‌کند."
    },
    {
        id: 94,
        lessonId: 10,
        question: "Which property can be used to change the text inside an element?",
        faQuestion: "از کدام Property می‌توان برای تغییر متن داخل یک عنصر استفاده کرد؟",
        options: [
            "textContent",
            "textChange",
            "innerTextOnly",
            "contentText"
        ],
        faOptions: [
            "textContent",
            "textChange",
            "innerTextOnly",
            "contentText"
        ],
        correctAnswer: 0,
        explanation: "textContent can be used to get or change the text content of an element.",
        faExplanation: "textContent برای دریافت یا تغییر متن داخل یک عنصر استفاده می‌شود."
    },
    {
        id: 95,
        lessonId: 10,
        question: "What does querySelector() return?",
        faQuestion: "querySelector() چه چیزی را برمی‌گرداند؟",
        options: [
            "The first matching element",
            "All matching elements",
            "The element's ID only",
            "A random element"
        ],
        faOptions: [
            "اولین عنصر مطابق",
            "تمام عناصر مطابق",
            "فقط ID عنصر",
            "یک عنصر تصادفی"
        ],
        correctAnswer: 0,
        explanation: "querySelector() returns the first element that matches the specified CSS selector.",
        faExplanation: "querySelector() اولین عنصری را که با CSS Selector مشخص‌شده مطابقت داشته باشد برمی‌گرداند."
    },
    {
        id: 96,
        lessonId: 10,
        question: "Which property can be used to change an element's CSS styles with JavaScript?",
        faQuestion: "با استفاده از کدام Property می‌توان استایل CSS یک عنصر را با JavaScript تغییر داد؟",
        options: [
            "style",
            "css",
            "styles",
            "design"
        ],
        faOptions: [
            "style",
            "css",
            "styles",
            "design"
        ],
        correctAnswer: 0,
        explanation: "The style property allows you to modify an element's inline CSS styles.",
        faExplanation: "Property به نام style به شما اجازه می‌دهد استایل‌های inline یک عنصر را تغییر دهید."
    },
    {
        id: 97,
        lessonId: 10,
        question: "Which method is used to listen for events such as clicks?",
        faQuestion: "کدام متد برای دریافت Eventهایی مانند کلیک استفاده می‌شود؟",
        options: [
            "addEventListener()",
            "listenEvent()",
            "onEvent()",
            "eventListener()"
        ],
        faOptions: [
            "addEventListener()",
            "listenEvent()",
            "onEvent()",
            "eventListener()"
        ],
        correctAnswer: 0,
        explanation: "addEventListener() allows JavaScript to respond to events such as clicks.",
        faExplanation: "addEventListener() به JavaScript اجازه می‌دهد به Eventهایی مانند کلیک واکنش نشان دهد."
    },
    {
        id: 98,
        lessonId: 10,
        question: "Which method changes the value of an HTML attribute?",
        faQuestion: "کدام متد مقدار یک HTML Attribute را تغییر می‌دهد؟",
        options: [
            "setAttribute()",
            "changeAttribute()",
            "updateAttribute()",
            "modifyAttribute()"
        ],
        faOptions: [
            "setAttribute()",
            "changeAttribute()",
            "updateAttribute()",
            "modifyAttribute()"
        ],
        correctAnswer: 0,
        explanation: "setAttribute() sets or changes the value of an HTML attribute.",
        faExplanation: "متد setAttribute() مقدار یک HTML Attribute را تنظیم یا تغییر می‌دهد."
    },
    {
        id: 99,
        lessonId: 10,
        question: "Which method can be used to read an HTML attribute?",
        faQuestion: "کدام متد برای دریافت مقدار یک HTML Attribute استفاده می‌شود؟",
        options: [
            "getAttribute()",
            "readAttribute()",
            "findAttribute()",
            "selectAttribute()"
        ],
        faOptions: [
            "getAttribute()",
            "readAttribute()",
            "findAttribute()",
            "selectAttribute()"
        ],
        correctAnswer: 0,
        explanation: "getAttribute() returns the value of a specified HTML attribute.",
        faExplanation: "متد getAttribute() مقدار یک HTML Attribute مشخص را برمی‌گرداند."
    },
    {
        id: 100,
        lessonId: 10,
        question: "Why is the DOM important for frontend development?",
        faQuestion: "چرا DOM برای Frontend Development مهم است؟",
        options: [
            "It connects JavaScript with HTML and allows the page to become interactive",
            "It replaces JavaScript",
            "It only controls databases",
            "It creates CSS automatically"
        ],
        faOptions: [
            "JavaScript را به HTML متصل می‌کند و باعث تعاملی شدن صفحه می‌شود",
            "جایگزین JavaScript می‌شود",
            "فقط Databaseها را کنترل می‌کند",
            "به صورت خودکار CSS ایجاد می‌کند"
        ],
        correctAnswer: 0,
        explanation: "The DOM allows JavaScript to interact with and change HTML elements, making webpages interactive.",
        faExplanation: "DOM به JavaScript اجازه می‌دهد با عناصر HTML تعامل داشته باشد و آن‌ها را تغییر دهد؛ در نتیجه صفحات وب تعاملی می‌شوند."
    },
    
];