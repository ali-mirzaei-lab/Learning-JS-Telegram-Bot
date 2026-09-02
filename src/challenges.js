export const challenges = [
    {
        id: 1,
        lessonId: 3,
        type: "predict_output",
        difficulty: "easy",
        question: 'What will this code output?\n\nlet x = 5;\nconsole.log(x + "5");',
        options: [
            "10",
            "55",
            '"55"',
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            'JavaScript converts the number to a string because one operand is a string. The result is "55".',
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nlet x = 5;\nconsole.log(x + "5");',
        faOptions: [
            "10",
            "55",
            '"55"',
            "خطا",
        ],
        faExplanation:
            'در JavaScript وقتی یکی از عملوندها String باشد، عدد به String تبدیل می‌شود و نتیجه "55" خواهد بود.',
    },

    {
        id: 2,
        lessonId: 2,
        type: "predict_output",
        difficulty: "easy",
        question: "What will this code output?\n\nconsole.log(typeof null);",
        options: [
            '"null"',
            '"object"',
            '"undefined"',
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            'typeof null returns "object". This is a historical behavior in JavaScript.',
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconsole.log(typeof null);',
        faOptions: [
            '"null"',
            '"object"',
            '"undefined"',
            "خطا",
        ],
        faExplanation:
            'در JavaScript عبارت typeof null مقدار "object" را برمی‌گرداند که یک رفتار قدیمی و تاریخی در زبان است.',
    },

    {
        id: 3,
        lessonId: 3,
        type: "detective",
        difficulty: "easy",
        question:
            'Why does this output "105" instead of 15?\n\nlet score = "10";\nscore += 5;\nconsole.log(score);',
        options: [
            "Because += always multiplies",
            "Because the string causes concatenation",
            "Because 5 becomes a string error",
            "Because score is const",
        ],
        correctAnswer: 1,
        explanation:
            'The += operator performs string concatenation when the existing value is a string.',
        faQuestion:
            'چرا خروجی این کد 105 است و 15 نیست؟\n\nlet score = "10";\nscore += 5;\nconsole.log(score);',
        faOptions: [
            "چون += همیشه ضرب انجام می‌دهد",
            "چون String باعث اتصال رشته‌ها می‌شود",
            "چون عدد 5 باعث خطای String می‌شود",
            "چون score از نوع const است",
        ],
        faExplanation:
            'در اینجا مقدار score از نوع String است و عملگر += مقدار 5 را به انتهای رشته اضافه می‌کند.',
    },

    {
        id: 4,
        lessonId: 3,
        type: "predict_output",
        difficulty: "easy",
        question:
            "What will this code output?\n\nconsole.log(5 == \"5\");\nconsole.log(5 === \"5\");",
        options: [
            "true / true",
            "true / false",
            "false / true",
            "false / false",
        ],
        correctAnswer: 1,
        explanation:
            "== allows type conversion, while === checks both value and type.",
        faQuestion:
            'خروجی این دو خط چه خواهد بود؟\n\nconsole.log(5 == "5");\nconsole.log(5 === "5");',
        faOptions: [
            "true / true",
            "true / false",
            "false / true",
            "false / false",
        ],
        faExplanation:
            'در JavaScript عملگر == تبدیل نوع انجام می‌دهد، اما === هم مقدار و هم نوع داده را بررسی می‌کند.',
    },

    {
        id: 5,
        lessonId: 1,
        type: "what_would_you_do",
        difficulty: "easy",
        question:
            "You need a variable whose value should not be reassigned. Which keyword should you use?",
        options: [
            "var",
            "let",
            "const",
            "static",
        ],
        correctAnswer: 2,
        explanation:
            "const is the preferred choice when reassignment is not needed.",
        faQuestion:
            'برای متغیری که قرار نیست دوباره مقداردهی شود، از کدام keyword استفاده می‌کنید؟',
        faOptions: [
            "var",
            "let",
            "const",
            "static",
        ],
        faExplanation:
            'برای متغیری که نیازی به تغییر مقدار ندارد، معمولاً از const استفاده می‌شود.',
    },

    {
        id: 6,
        lessonId: 7,
        type: "predict_output",
        difficulty: "easy",
        question:
            "What will this code output?\n\nconst numbers = [1, 2, 3];\nconsole.log(numbers.length);",
        options: [
            "2",
            "3",
            "4",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "The array contains three elements, so its length is 3.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst numbers = [1, 2, 3];\nconsole.log(numbers.length);',
        faOptions: [
            "2",
            "3",
            "4",
            "undefined",
        ],
        faExplanation:
            'این Array شامل سه عنصر است، بنابراین مقدار length برابر 3 خواهد بود.',
    },

    {
        id: 7,
        lessonId: 8,
        type: "spot_the_bug",
        difficulty: "easy",
        question:
            "What is wrong with this code?\n\nconst user = {\n    name: \"Ali\"\n};\n\nconsole.log(user.age.toUpperCase());",
        options: [
            "Objects cannot have properties",
            "age is undefined",
            "toUpperCase only works on numbers",
            "const causes the error",
        ],
        correctAnswer: 1,
        explanation:
            "user.age does not exist, so its value is undefined. Calling toUpperCase() on undefined causes a TypeError.",
        faQuestion:
            'مشکل این کد چیست؟\n\nconst user = {\n    name: \"Ali\"\n};\n\nconsole.log(user.age.toUpperCase());',
        faOptions: [
            "Object نمی‌تواند property داشته باشد",
            "مقدار age برابر undefined است",
            "toUpperCase فقط روی Number کار می‌کند",
            "const باعث خطا می‌شود",
        ],
        faExplanation:
            'در این Object ویژگی age وجود ندارد و مقدار آن undefined است؛ بنابراین اجرای toUpperCase() باعث TypeError می‌شود.',
    },

    {
        id: 8,
        lessonId: 7,
        type: "one_liner",
        difficulty: "easy",
        question:
            "Which method creates a new array containing only numbers greater than 5?",
        options: [
            "map()",
            "filter()",
            "reduce()",
            "forEach()",
        ],
        correctAnswer: 1,
        explanation:
            "filter() creates a new array containing elements that pass the condition.",
        faQuestion:
            'کدام method یک Array جدید شامل فقط اعداد بزرگ‌تر از 5 ایجاد می‌کند؟',
        faOptions: [
            "map()",
            "filter()",
            "reduce()",
            "forEach()",
        ],
        faExplanation:
            'متد filter() یک Array جدید شامل عناصری ایجاد می‌کند که شرط موردنظر را قبول کرده‌اند.',
    },

    {
        id: 9,
        lessonId: 2,
        type: "predict_output",
        difficulty: "easy",
        question:
            "What will this code output?\n\nconsole.log(Boolean(0));\nconsole.log(Boolean(1));",
        options: [
            "true / true",
            "false / true",
            "true / false",
            "false / false",
        ],
        correctAnswer: 1,
        explanation:
            "0 is a falsy value, while 1 is truthy.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconsole.log(Boolean(0));\nconsole.log(Boolean(1));',
        faOptions: [
            "true / true",
            "false / true",
            "true / false",
            "false / false",
        ],
        faExplanation:
            'در JavaScript مقدار 0 یک مقدار falsy است، در حالی که 1 یک مقدار truthy محسوب می‌شود.',
    },

    {
        id: 10,
        lessonId: 2,
        type: "detective",
        difficulty: "easy",
        question:
            "What will this code output?\n\nconst name = \"Ali\";\nconsole.log(`Hello ${name}`);",
        options: [
            "Hello name",
            "Hello Ali",
            "${name}",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "Template literals use ${} to insert expressions into a string.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst name = "Ali";\nconsole.log(`Hello ${name}`);',
        faOptions: [
            "Hello name",
            "Hello Ali",
            "${name}",
            "خطا",
        ],
        faExplanation:
            'در Template Literal عبارت ${name} مقدار متغیر name را داخل String قرار می‌دهد.',
    },


    {
        id: 11,
        lessonId: 7,
        type: "predict_output",
        difficulty: "medium",
        question:
            "What will this code output?\n\nconst a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a);",
        options: [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[4]",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "b references the same array as a. Mutating b also changes a.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a);',
        faOptions: [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[4]",
            "خطا",
        ],
        faExplanation:
            'در این حالت متغیرهای a و b به یک Array یکسان اشاره می‌کنند، بنابراین تغییر b مقدار a را هم تغییر می‌دهد.',
    },

    {
        id: 12,
        lessonId: 7,
        type: "spot_the_bug",
        difficulty: "medium",
        question:
            "What is wrong with this code?\n\nconst numbers = [1, 2, 3];\n\nnumbers.forEach(number => {\n    return number * 2;\n});",
        options: [
            "forEach cannot use functions",
            "forEach does not create a new array",
            "number cannot be multiplied",
            "The array must use let",
        ],
        correctAnswer: 1,
        explanation:
            "forEach ignores returned values. Use map() when you want to create a transformed array.",
        faQuestion:
            'مشکل این کد چیست؟\n\nconst numbers = [1, 2, 3];\n\nnumbers.forEach(number => {\n    return number * 2;\n});',
        faOptions: [
            "forEach نمی‌تواند function دریافت کند",
            "forEach یک Array جدید ایجاد نمی‌کند",
            "number نمی‌تواند ضرب شود",
            "Array باید با let تعریف شود",
        ],
        faExplanation:
            'متد forEach مقدار return شده را نادیده می‌گیرد و برای ساختن Array جدید بهتر است از map() استفاده کنید.',
    },

    {
        id: 13,
        lessonId: 8,
        type: "predict_output",
        difficulty: "medium",
        question:
            "What will this code output?\n\nconst user = { name: \"Ali\" };\nconst copy = { ...user };\ncopy.name = \"Sara\";\nconsole.log(user.name);",
        options: [
            "Ali",
            "Sara",
            "undefined",
            "Error",
        ],
        correctAnswer: 0,
        explanation:
            "The spread syntax creates a new object with the copied property values.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst user = { name: "Ali" };\nconst copy = { ...user };\ncopy.name = "Sara";\nconsole.log(user.name);',
        faOptions: [
            "Ali",
            "Sara",
            "undefined",
            "خطا",
        ],
        faExplanation:
            'در اینجا spread یک Object جدید می‌سازد، بنابراین تغییر copy روی user اصلی تأثیری ندارد.',
    },

    {
        id: 14,
        lessonId: 9,
        type: "predict_output",
        difficulty: "medium",
        question:
            "What will this code output?\n\nlet x = 10;\n\nif (true) {\n    let x = 20;\n}\n\nconsole.log(x);",
        options: [
            "10",
            "20",
            "undefined",
            "Error",
        ],
        correctAnswer: 0,
        explanation:
            "let is block-scoped, so the x inside the if block is a different variable.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nlet x = 10;\n\nif (true) {\n    let x = 20;\n}\n\nconsole.log(x);',
        faOptions: [
            "10",
            "20",
            "undefined",
            "خطا",
        ],
        faExplanation:
            'در JavaScript متغیرهای let دارای Block Scope هستند، بنابراین x داخل if با x بیرون از آن متفاوت است.',
    },

    {
        id: 15,
        lessonId: 3,
        type: "detective",
        difficulty: "medium",
        question:
            "What will this code output?\n\nconsole.log([] == false);",
        options: [
            "true",
            "false",
            "undefined",
            "Error",
        ],
        correctAnswer: 0,
        explanation:
            "Loose equality performs type coercion, leading to true in this case.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconsole.log([] == false);',
        faOptions: [
            "true",
            "false",
            "undefined",
            "خطا",
        ],
        faExplanation:
            'در این مقایسه، عملگر == تبدیل نوع انجام می‌دهد و در نهایت نتیجه برابر true خواهد بود.',
    },

    {
        id: 16,
        lessonId: 10,
        type: "what_would_you_do",
        difficulty: "medium",
        question:
            "You need to stop a form from refreshing the page when submitted. What should you use?",
        options: [
            "event.stop()",
            "event.preventDefault()",
            "event.cancel()",
            "event.prevent()",
        ],
        correctAnswer: 1,
        explanation:
            "preventDefault() stops the browser's default action for the event.",
        faQuestion:
            'برای جلوگیری از refresh شدن صفحه هنگام ارسال فرم، از چه چیزی استفاده می‌کنید؟',
        faOptions: [
            "event.stop()",
            "event.preventDefault()",
            "event.cancel()",
            "event.prevent()",
        ],
        faExplanation:
            'برای جلوگیری از رفتار پیش‌فرض مرورگر هنگام submit کردن فرم، از preventDefault() استفاده می‌شود.',
    },

    {
        id: 17,
        lessonId: 3,
        type: "predict_output",
        difficulty: "medium",
        question:
            "What will this code output?\n\nconsole.log(2 + 3 * 4);",
        options: [
            "20",
            "14",
            "24",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "Multiplication has higher precedence than addition, so 3 * 4 is calculated first.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconsole.log(2 + 3 * 4);',
        faOptions: [
            "20",
            "14",
            "24",
            "خطا",
        ],
        faExplanation:
            'در JavaScript عملگر ضرب اولویت بیشتری از جمع دارد، بنابراین ابتدا 3 * 4 محاسبه می‌شود.',
    },

    {
        id: 18,
        lessonId: 7,
        type: "one_liner",
        difficulty: "medium",
        question:
            "Which method converts this array into a string separated by commas?\n\n[\"HTML\", \"CSS\", \"JS\"]",
        options: [
            "split()",
            "join()",
            "slice()",
            "concat()",
        ],
        correctAnswer: 1,
        explanation:
            "join() combines array elements into a string using the provided separator.",
        faQuestion:
            'کدام method این Array را به یک String با جداکننده comma تبدیل می‌کند؟\n\n["HTML", "CSS", "JS"]',
        faOptions: [
            "split()",
            "join()",
            "slice()",
            "concat()",
        ],
        faExplanation:
            'متد join() عناصر Array را با separator مشخص‌شده به یک String تبدیل می‌کند.',
    },

    {
        id: 19,
        lessonId: 6,
        type: "spot_the_bug",
        difficulty: "medium",
        question:
            "What is the problem here?\n\nconst result = await fetch(url);\nconsole.log(result);",
        options: [
            "fetch cannot be used with await",
            "await must be inside an async function",
            "url must always be a string",
            "console.log cannot print responses",
        ],
        correctAnswer: 1,
        explanation:
            "await normally must be used inside an async function, unless using supported top-level await.",
        faQuestion:
            'مشکل این کد چیست؟\n\nconst result = await fetch(url);\nconsole.log(result);',
        faOptions: [
            "fetch نمی‌تواند با await استفاده شود",
            "await باید داخل یک async function باشد",
            "url همیشه باید String باشد",
            "console.log نمی‌تواند response را نمایش دهد",
        ],
        faExplanation:
            'در حالت معمول، استفاده از await باید داخل یک async function انجام شود؛ البته در محیط‌های پشتیبان، top-level await هم ممکن است.',
    },

    {
        id: 20,
        lessonId: 8,
        type: "predict_output",
        difficulty: "medium",
        question:
            "What will this code output?\n\nconst user = { name: \"Ali\" };\nconst { name } = user;\nconsole.log(name);",
        options: [
            "user",
            "Ali",
            "undefined",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "Object destructuring extracts the name property into a variable called name.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst user = { name: "Ali" };\nconst { name } = user;\nconsole.log(name);',
        faOptions: [
            "user",
            "Ali",
            "undefined",
            "خطا",
        ],
        faExplanation:
            'در Object Destructuring مقدار property به نام name داخل متغیری با همان نام قرار می‌گیرد.',
    },

    {
        id: 21,
        lessonId: 2,
        type: "predict_output",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconsole.log(typeof NaN);",
        options: [
            '"NaN"',
            '"number"',
            '"undefined"',
            '"object"',
        ],
        correctAnswer: 1,
        explanation:
            "NaN is a special numeric value, so typeof NaN returns \"number\".",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconsole.log(typeof NaN);',
        faOptions: [
            '"NaN"',
            '"number"',
            '"undefined"',
            '"object"',
        ],
        faExplanation:
            'در JavaScript مقدار NaN یک مقدار ویژه از نوع Number است، بنابراین typeof NaN مقدار "number" را برمی‌گرداند.',
    },

    {
        id: 22,
        lessonId: 3,
        type: "predict_output",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconsole.log([] + []);\nconsole.log([] + {});",
        options: [
            '"" / "[object Object]"',
            "[] / {}",
            "0 / 0",
            "Error / Error",
        ],
        correctAnswer: 0,
        explanation:
            "JavaScript converts the arrays and object to primitive string values during the + operation.",
        faQuestion:
            'خروجی این دو خط چه خواهد بود؟\n\nconsole.log([] + []);\nconsole.log([] + {});',
        faOptions: [
            '"" / "[object Object]"',
            "[] / {}",
            "0 / 0",
            "خطا / خطا",
        ],
        faExplanation:
            'در این عملیات، JavaScript ساختارها را به مقدارهای primitive تبدیل می‌کند و عملگر + در نهایت عملیات اتصال رشته‌ای انجام می‌دهد.',
    },

    {
        id: 23,
        lessonId: 9,
        type: "spot_the_bug",
        difficulty: "hard",
        question:
            "What is wrong with this code?\n\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);\n}",
        options: [
            "setTimeout cannot be inside a loop",
            "var is function-scoped",
            "i cannot be used in an arrow function",
            "The loop never ends",
        ],
        correctAnswer: 1,
        explanation:
            "var is function-scoped, so all callbacks share the same i. By execution time, i is 3.",
        faQuestion:
            'مشکل اصلی این کد چیست؟\n\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);\n}',
        faOptions: [
            "setTimeout نمی‌تواند داخل loop باشد",
            "var دارای Function Scope است",
            "i نمی‌تواند داخل Arrow Function استفاده شود",
            "حلقه هیچ‌وقت تمام نمی‌شود",
        ],
        faExplanation:
            'در اینجا var دارای Function Scope است و تمام callbackها یک متغیر i مشترک دارند؛ بنابراین هنگام اجرا مقدار i برابر 3 است.',
    },

    {
        id: 24,
        lessonId: 8,
        type: "detective",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconst a = { value: 10 };\nconst b = a;\nb.value = 20;\nconsole.log(a.value);",
        options: [
            "10",
            "20",
            "undefined",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "Objects are reference values. a and b refer to the same object.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst a = { value: 10 };\nconst b = a;\nb.value = 20;\nconsole.log(a.value);',
        faOptions: [
            "10",
            "20",
            "undefined",
            "خطا",
        ],
        faExplanation:
            'در JavaScript متغیرهای a و b به یک Object یکسان اشاره می‌کنند، بنابراین تغییر b روی a نیز اثر می‌گذارد.',
    },

    {
        id: 25,
        lessonId: 3,
        type: "predict_output",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconsole.log(\"5\" - 2);\nconsole.log(\"5\" + 2);",
        options: [
            "3 / 7",
            '"3" / "7"',
            "3 / \"52\"",
            "Error / Error",
        ],
        correctAnswer: 2,
        explanation:
            "The - operator converts the string to a number, while + performs string concatenation.",
        faQuestion:
            'خروجی این دو خط چه خواهد بود؟\n\nconsole.log("5" - 2);\nconsole.log("5" + 2);',
        faOptions: [
            "3 / 7",
            '"3" / "7"',
            "3 / \"52\"",
            "خطا / خطا",
        ],
        faExplanation:
            'در JavaScript عملگر - مقدار String را به Number تبدیل می‌کند، اما عملگر + در این حالت اتصال String انجام می‌دهد.',
    },

    {
        id: 26,
        lessonId: 8,
        type: "one_liner",
        difficulty: "hard",
        question:
            "Which syntax safely reads user.profile.name when user or profile might be undefined?",
        options: [
            "user.profile.name",
            "user?.profile?.name",
            "user!.profile!.name",
            "user::profile::name",
        ],
        correctAnswer: 1,
        explanation:
            "Optional chaining prevents an error when an intermediate value is null or undefined.",
        faQuestion:
            'برای دسترسی امن به user.profile.name زمانی که user یا profile ممکن است undefined باشد، کدام syntax مناسب است؟',
        faOptions: [
            "user.profile.name",
            "user?.profile?.name",
            "user!.profile!.name",
            "user::profile::name",
        ],
        faExplanation:
            'در JavaScript عملگر Optional Chaining با استفاده از ?. از خطا هنگام null یا undefined بودن مقدارهای میانی جلوگیری می‌کند.',
    },

    {
        id: 27,
        lessonId: 8,
        type: "predict_output",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconst user = { name: \"Ali\" };\nconsole.log(user.age ?? \"Unknown\");",
        options: [
            "undefined",
            "null",
            "Unknown",
            "Error",
        ],
        correctAnswer: 2,
        explanation:
            "The nullish coalescing operator returns the right side when the left side is null or undefined.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst user = { name: "Ali" };\nconsole.log(user.age ?? "Unknown");',
        faOptions: [
            "undefined",
            "null",
            "Unknown",
            "خطا",
        ],
        faExplanation:
            'در اینجا چون user.age برابر undefined است، عملگر ?? مقدار سمت راست یعنی "Unknown" را برمی‌گرداند.',
    },

    {
        id: 28,
        lessonId: 7,
        type: "detective",
        difficulty: "hard",
        question:
            "What happens here?\n\nconst numbers = [1, 2, 3];\nconst result = numbers.map(number => {\n    number * 2;\n});\n\nconsole.log(result);",
        options: [
            "[2, 4, 6]",
            "[undefined, undefined, undefined]",
            "undefined",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "The arrow function uses braces without a return statement, so each callback returns undefined.",
        faQuestion:
            'در این کد چه اتفاقی می‌افتد؟\n\nconst numbers = [1, 2, 3];\nconst result = numbers.map(number => {\n    number * 2;\n});\n\nconsole.log(result);',
        faOptions: [
            "[2, 4, 6]",
            "[undefined, undefined, undefined]",
            "undefined",
            "خطا",
        ],
        faExplanation:
            'در این Arrow Function از {} استفاده شده اما return وجود ندارد، بنابراین هر callback مقدار undefined برمی‌گرداند.',
    },

    {
        id: 29,
        lessonId: 6,
        type: "predict_output",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconst promise = Promise.resolve(10);\n\npromise.then(value => {\n    console.log(value * 2);\n});",
        options: [
            "10",
            "20",
            "Promise",
            "Error",
        ],
        correctAnswer: 1,
        explanation:
            "Promise.resolve(10) creates a fulfilled Promise with the value 10, which is then doubled.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst promise = Promise.resolve(10);\n\npromise.then(value => {\n    console.log(value * 2);\n});',
        faOptions: [
            "10",
            "20",
            "Promise",
            "خطا",
        ],
        faExplanation:
            'در اینجا Promise با مقدار 10 موفق شده است و then() مقدار را دریافت کرده و آن را در 2 ضرب می‌کند.',
    },

    {
        id: 30,
        lessonId: 7,
        type: "detective",
        difficulty: "hard",
        question:
            "What will this code output?\n\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.reduce((total, number) => total + number, 0);\nconsole.log(result);",
        options: [
            "4",
            "10",
            "[1, 2, 3, 4]",
            "undefined",
        ],
        correctAnswer: 1,
        explanation:
            "reduce() accumulates the values. Starting from 0, the result is 1 + 2 + 3 + 4 = 10.",
        faQuestion:
            'خروجی این کد چه خواهد بود؟\n\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.reduce((total, number) => total + number, 0);\nconsole.log(result);',
        faOptions: [
            "4",
            "10",
            "[1, 2, 3, 4]",
            "undefined",
        ],
        faExplanation:
            'در اینجا reduce() مقادیر Array را از مقدار اولیه 0 جمع می‌کند و نتیجه نهایی برابر 10 خواهد بود.',
    },

    {
        id: 31,
        lessonId: 1,
        type: "Code Output",
        difficulty: "Easy",
        question: "What will be printed?\n\nlet score = 10;\nscore = 20;\nconsole.log(score);",
        options: [
            "10",
            "20",
            "undefined",
            "Error",
        ],
        correctAnswer: 1,
        explanation: "The variable score is first assigned 10 and then reassigned to 20, so console.log(score) prints 20.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nlet score = 10;\nscore = 20;\nconsole.log(score);",
        faOptions: [
            "10",
            "20",
            "undefined",
            "خطا",
        ],
        faExplanation: "متغیر score ابتدا مقدار 10 می‌گیرد و سپس مقدار آن به 20 تغییر می‌کند، بنابراین console.log(score) مقدار 20 را چاپ می‌کند.",
    },
    {
        id: 32,
        lessonId: 1,
        type: "Code Output",
        difficulty: "Medium",
        question: "What will be printed?\n\nconst name = \"Ali\";\nlet message = name;\nmessage = \"Hello \" + message;\nconsole.log(message);",
        options: [
            "Ali",
            "Hello",
            "Hello Ali",
            "Ali Hello",
        ],
        correctAnswer: 2,
        explanation: "message first receives the value of name, which is \"Ali\", and then \"Hello \" is added before it.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nconst name = \"Ali\";\nlet message = name;\nmessage = \"Hello \" + message;\nconsole.log(message);",
        faOptions: [
            "Ali",
            "Hello",
            "Hello Ali",
            "Ali Hello",
        ],
        faExplanation: "متغیر message ابتدا مقدار name یعنی \"Ali\" را می‌گیرد و سپس عبارت \"Hello \" به ابتدای آن اضافه می‌شود.",
    },
    {
        id: 33,
        lessonId: 1,
        type: "Code Output",
        difficulty: "Hard",
        question: "What will be printed?\n\nlet x = 5;\nlet y = x;\nx = 10;\nconsole.log(y);",
        options: [
            "5",
            "10",
            "15",
            "undefined",
        ],
        correctAnswer: 0,
        explanation: "When y = x runs, y receives the current value 5. Changing x afterward does not change y.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nlet x = 5;\nlet y = x;\nx = 10;\nconsole.log(y);",
        faOptions: [
            "5",
            "10",
            "15",
            "undefined",
        ],
        faExplanation: "وقتی y = x اجرا می‌شود، مقدار فعلی x یعنی 5 در y قرار می‌گیرد. تغییر بعدی x به 10 مقدار y را تغییر نمی‌دهد.",
    },
    {
        id: 34,
        lessonId: 4,
        type: "Conditionals",
        difficulty: "Easy",
        question: "What will be printed?\n\nconst age = 20;\n\nif (age >= 18) {\n    console.log(\"Adult\");\n} else {\n    console.log(\"Minor\");\n}",
        options: [
            "Adult",
            "Minor",
            "20",
            "Nothing",
        ],
        correctAnswer: 0,
        explanation: "The condition age >= 18 is true because age is 20, so the if block runs.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nconst age = 20;\n\nif (age >= 18) {\n    console.log(\"Adult\");\n} else {\n    console.log(\"Minor\");\n}",
        faOptions: [
            "Adult",
            "Minor",
            "20",
            "هیچ چیز",
        ],
        faExplanation: "شرط age >= 18 درست است چون مقدار age برابر 20 است، بنابراین کد داخل بخش if اجرا می‌شود.",
    },
    {
        id: 35,
        lessonId: 4,
        type: "Conditionals",
        difficulty: "Medium",
        question: "What will be printed?\n\nconst score = 75;\n\nif (score >= 90) {\n    console.log(\"A\");\n} else if (score >= 70) {\n    console.log(\"B\");\n} else {\n    console.log(\"C\");\n}",
        options: [
            "A",
            "B",
            "C",
            "75",
        ],
        correctAnswer: 1,
        explanation: "75 is not at least 90, but it is at least 70, so the else if block runs and prints B.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nconst score = 75;\n\nif (score >= 90) {\n    console.log(\"A\");\n} else if (score >= 70) {\n    console.log(\"B\");\n} else {\n    console.log(\"C\");\n}",
        faOptions: [
            "A",
            "B",
            "C",
            "75",
        ],
        faExplanation: "مقدار 75 حداقل 90 نیست، اما حداقل 70 است؛ بنابراین بخش else if اجرا شده و B چاپ می‌شود.",
    },

    {
        id: 36,
        lessonId: 4,
        type: "Conditionals",
        difficulty: "Medium",
        question: "What will be printed?\n\nconst temperature = 25;\n\nif (temperature > 30) {\n    console.log(\"Hot\");\n} else if (temperature >= 20) {\n    console.log(\"Warm\");\n} else {\n    console.log(\"Cold\");\n}",
        options: [
            "Hot",
            "Warm",
            "Cold",
            "25",
        ],
        correctAnswer: 1,
        explanation: "25 is not greater than 30, but it is greater than or equal to 20, so the else if block runs.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\ntemperature = 25 است.\n\nاگر temperature بزرگ‌تر از 30 باشد، Hot چاپ می‌شود؛ اگر حداقل 20 باشد، Warm چاپ می‌شود؛ در غیر این صورت Cold چاپ می‌شود.",
        faOptions: [
            "Hot",
            "Warm",
            "Cold",
            "25",
        ],
        faExplanation: "مقدار 25 بزرگ‌تر از 30 نیست، اما بزرگ‌تر یا مساوی 20 است، بنابراین بخش else if اجرا می‌شود و Warm چاپ می‌شود.",
    },
    {
        id: 37,
        lessonId: 4,
        type: "Conditionals",
        difficulty: "Hard",
        question: "What will be printed?\n\nconst x = 10;\nconst y = 5;\n\nif (x > 5 && y > 10) {\n    console.log(\"A\");\n} else if (x > 5 || y > 10) {\n    console.log(\"B\");\n} else {\n    console.log(\"C\");\n}",
        options: [
            "A",
            "B",
            "C",
            "Nothing",
        ],
        correctAnswer: 1,
        explanation: "The first condition is false because y > 10 is false. The second condition is true because x > 5 is true, so B is printed.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nx برابر 10 و y برابر 5 است.\n\nاگر x بزرگ‌تر از 5 و y بزرگ‌تر از 10 باشند، A چاپ می‌شود. در غیر این صورت اگر یکی از این دو شرط درست باشد، B چاپ می‌شود.",
        faOptions: [
            "A",
            "B",
            "C",
            "Nothing",
        ],
        faExplanation: "شرط اول درست نیست چون y > 10 نادرست است. شرط دوم درست است چون x > 5 درست است، بنابراین B چاپ می‌شود.",
    },
    {
        id: 38,
        lessonId: 5,
        type: "Loops",
        difficulty: "Easy",
        question: "What will be printed?\n\nfor (let i = 0; i < 3; i++) {\n    console.log(i);\n}",
        options: [
            "0 1 2",
            "1 2 3",
            "0 1 2 3",
            "1 2",
        ],
        correctAnswer: 0,
        explanation: "The loop starts at 0 and continues while i < 3, so it prints 0, 1, and 2.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nfor (let i = 0; i < 3; i++) {\n    console.log(i);\n}",
        faOptions: [
            "0 1 2",
            "1 2 3",
            "0 1 2 3",
            "1 2",
        ],
        faExplanation: "حلقه از 0 شروع می‌شود و تا زمانی که i کوچک‌تر از 3 باشد ادامه پیدا می‌کند، بنابراین 0، 1 و 2 چاپ می‌شوند.",
    },
    {
        id: 39,
        lessonId: 5,
        type: "Loops",
        difficulty: "Medium",
        question: "What will be printed?\n\nlet total = 0;\n\nfor (let i = 1; i <= 4; i++) {\n    total += i;\n}\n\nconsole.log(total);",
        options: [
            "4",
            "6",
            "10",
            "15",
        ],
        correctAnswer: 2,
        explanation: "The loop adds 1 + 2 + 3 + 4 to total, giving 10.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nlet total = 0;\n\nfor (let i = 1; i <= 4; i++) {\n    total += i;\n}\n\nconsole.log(total);",
        faOptions: [
            "4",
            "6",
            "10",
            "15",
        ],
        faExplanation: "حلقه اعداد 1 تا 4 را به total اضافه می‌کند: 1 + 2 + 3 + 4 برابر با 10 است.",
    },
    {
        id: 40,
        lessonId: 5,
        type: "Loops",
        difficulty: "Hard",
        question: "What will be printed?\n\nfor (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n        continue;\n    }\n    console.log(i);\n}",
        options: [
            "1 2 3 4 5",
            "1 2 4 5",
            "1 2 3",
            "3 4 5",
        ],
        correctAnswer: 1,
        explanation: "When i equals 3, continue skips the rest of that iteration, so 3 is not printed. The other values are printed.",
        faQuestion: "چه چیزی چاپ می‌شود؟\n\nfor (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n        continue;\n    }\n    console.log(i);\n}",
        faOptions: [
            "1 2 3 4 5",
            "1 2 4 5",
            "1 2 3",
            "3 4 5",
        ],
        faExplanation: "وقتی i برابر 3 می‌شود، دستور continue ادامه همان تکرار را رد می‌کند، بنابراین 3 چاپ نمی‌شود و بقیه اعداد چاپ می‌شوند.",
    },

];