export const lessons = [
    {
        id: 1,
        title: "JavaScript Variables",
        content:
            "Variables are used to store data in a program so we can use that data later.\n\n" +

            "Think of a variable like a named container. You give it a name and store a value inside it.\n\n" +

            "For example:\n\n" +

            'let age = 25;\n\n' +

            "Here, age is the variable name and 25 is the value stored in it.\n\n" +

            "You can then use the variable later:\n\n" +

            'let age = 25;\nconsole.log(age);\n\n' +

            "This tells JavaScript to use the value stored in age.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "DECLARING VARIABLES\n\n" +

            "JavaScript has three keywords for declaring variables:\n\n" +

            "let\n" +
            "const\n" +
            "var\n\n" +

            "In modern JavaScript, you will mainly use let and const. You will see var in older JavaScript code, but it is generally not the first choice when writing new code.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "let\n\n" +

            "Use let when you expect the value to change later.\n\n" +

            'let score = 10;\nscore = 20;\n\n' +

            "The value stored in score was changed from 10 to 20. This is called reassignment.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "const\n\n" +

            "Use const when the variable should not be reassigned after it is created.\n\n" +

            'const name = "Ali";\n\n' +

            "You cannot later assign a different value to name.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "let OR const?\n\n" +

            "A simple rule for now:\n\n" +

            "let → use it when the value needs to change\n" +
            "const → use it when the value should stay assigned\n\n" +

            "When you are not planning to reassign a variable, const is usually the better choice.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "COMMON MISTAKE\n\n" +

            "A const variable cannot be reassigned.\n\n" +

            'const age = 25;\nage = 30;\n\n' +

            "This causes an error because age was declared with const.\n\n" +

            "💡 Remember:\n\n" +

            "Variables give data a name so you can use that data later.\n\n" +

            "let → can be reassigned\n" +
            "const → cannot be reassigned\n" +
            "var → older way of declaring variables",

        faContent:
            "متغیرها برای ذخیره داده‌ها در برنامه استفاده می‌شوند تا بتوانیم بعداً از آن داده‌ها استفاده کنیم.\n\n" +

            "می‌توانی متغیر را مثل یک ظرف نام‌گذاری‌شده در نظر بگیری. به آن یک نام می‌دهی و یک مقدار داخل آن قرار می‌دهی.\n\n" +

            "مثلاً:\n\n" +

            'let age = 25;\n\n' +

            "در اینجا age نام متغیر است و 25 مقداری است که داخل آن ذخیره شده است.\n\n" +

            "بعداً می‌توانی از این متغیر استفاده کنی:\n\n" +

            'let age = 25;\nconsole.log(age);\n\n' +

            "این کد به JavaScript می‌گوید مقداری را که داخل age ذخیره شده استفاده کند.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "تعریف متغیرها\n\n" +

            "در JavaScript سه کلمه کلیدی برای تعریف متغیر وجود دارد:\n\n" +

            "let\n" +
            "const\n" +
            "var\n\n" +

            "در JavaScript مدرن بیشتر از let و const استفاده می‌شود. ممکن است var را در کدهای قدیمی‌تر ببینی، اما معمولاً برای نوشتن کد جدید انتخاب اول نیست.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "let\n\n" +

            "وقتی احتمال می‌دهی مقدار یک متغیر بعداً تغییر کند، از let استفاده می‌کنی.\n\n" +

            'let score = 10;\nscore = 20;\n\n' +

            "در اینجا مقدار ذخیره‌شده در score از 10 به 20 تغییر کرده است. به این کار مقداردهی مجدد گفته می‌شود.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "const\n\n" +

            "وقتی نمی‌خواهی بعد از ایجاد متغیر، مقدار دیگری به آن اختصاص بدهی، از const استفاده می‌کنی.\n\n" +

            'const name = "Ali";\n\n' +

            "بعداً نمی‌توانی مقدار متفاوتی به name اختصاص بدهی.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "let یا const؟\n\n" +

            "فعلاً یک قانون ساده را به خاطر بسپار:\n\n" +

            "let → وقتی استفاده کن که مقدار باید تغییر کند\n" +
            "const → وقتی استفاده کن که مقدار قرار است همان‌طور باقی بماند\n\n" +

            "اگر قصد نداری مقدار یک متغیر را دوباره تغییر بدهی، معمولاً const انتخاب بهتری است.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "یک اشتباه رایج\n\n" +

            "مقدار یک متغیر const را نمی‌توان دوباره تغییر داد.\n\n" +

            'const age = 25;\nage = 30;\n\n' +

            "این کد باعث خطا می‌شود، چون age با const تعریف شده است.\n\n" +

            "💡 به خاطر بسپار:\n\n" +

            "متغیرها به داده‌ها یک نام می‌دهند تا بتوانی بعداً از آن داده‌ها استفاده کنی.\n\n" +

            "let → می‌تواند دوباره مقداردهی شود\n" +
            "const → نمی‌تواند دوباره مقداردهی شود\n" +
            "var → روش قدیمی‌تر برای تعریف متغیرها",
    },

    {
        id: 2,
        title: "JavaScript Data Types",
        content:
            "A string is a data type used to represent text in JavaScript.\n\n" +

            "Text can contain letters, numbers, spaces, and symbols.\n\n" +

            "For example:\n\n" +

            'let name = "Ali";\n' +
            'let message = "Hello world!";\n' +
            'let phone = "12345";\n\n' +

            "Notice that all three values are written inside quotation marks. This tells JavaScript that they are strings.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "CREATING STRINGS\n\n" +

            "You can write a string using single quotes or double quotes:\n\n" +

            'let name = "Ali";\n' +
            "let city = 'Tehran';\n\n" +

            "Both create string values.\n\n" +

            "The important part is that the text is surrounded by matching quotation marks.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "STRINGS CAN CONTAIN NUMBERS\n\n" +

            'A number written inside quotation marks is still text.\n\n' +

            'let age = 25;\n' +
            'let ageText = "25";\n\n' +

            "The first value is a number. The second value is a string containing the characters 25.\n\n" +

            "This difference becomes important when JavaScript performs operations with these values.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "USING VARIABLES WITH STRINGS\n\n" +

            "You can store text in a variable and use that variable later.\n\n" +

            'const name = "Ali";\n' +
            'const greeting = "Hello, " + name;\n\n' +

            'The + operator can join strings together. This is called string concatenation.\n\n' +

            "━━━━━━━━━━━━━━\n\n" +

            "COMMON MISTAKE\n\n" +

            "Do not confuse a number with a string containing a number.\n\n" +

            '25\n' +
            '"25"\n\n' +

            "The first is a number. The second is a string.\n\n" +

            "💡 Remember:\n\n" +

            "String → text\n" +

            'Text is written inside quotation marks.\n' +

            "Numbers inside quotation marks are strings.",

        faContent:
            "String یک نوع داده برای نمایش متن در JavaScript است.\n\n" +

            "متن می‌تواند شامل حروف، اعداد، فاصله‌ها و نمادها باشد.\n\n" +

            "مثلاً:\n\n" +

            'let name = "Ali";\n' +
            'let message = "Hello world!";\n' +
            'let phone = "12345";\n\n' +

            "همان‌طور که می‌بینی، هر سه مقدار داخل علامت نقل‌قول نوشته شده‌اند. این موضوع به JavaScript می‌گوید که این مقادیر از نوع String هستند.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "ساختن String\n\n" +

            "برای نوشتن یک String می‌توانی از کوتیشن تکی یا دوتایی استفاده کنی:\n\n" +

            'let name = "Ali";\n' +
            "let city = 'Tehran';\n\n" +

            "هر دو کد یک مقدار String ایجاد می‌کنند.\n\n" +

            "نکته مهم این است که متن باید داخل علامت‌های نقل‌قول هماهنگ قرار بگیرد.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "عددها هم می‌توانند داخل String باشند\n\n" +

            "عددی که داخل علامت نقل‌قول نوشته شود، همچنان یک متن محسوب می‌شود.\n\n" +

            'let age = 25;\n' +
            'let ageText = "25";\n\n' +

            "مقدار اول یک عدد است. مقدار دوم یک String است که شامل کاراکترهای 25 می‌شود.\n\n" +

            "این تفاوت زمانی مهم می‌شود که JavaScript بخواهد با این مقادیر عملیات انجام دهد.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "استفاده از متغیرها با String\n\n" +

            "می‌توانی یک متن را داخل متغیر ذخیره کنی و بعداً از آن متغیر استفاده کنی.\n\n" +

            'const name = "Ali";\n' +
            'const greeting = "Hello, " + name;\n\n' +

            "از عملگر + می‌توان برای چسباندن Stringها به یکدیگر استفاده کرد. به این کار اتصال رشته‌ها یا String Concatenation گفته می‌شود.\n\n" +

            "━━━━━━━━━━━━━━\n\n" +

            "یک اشتباه رایج\n\n" +

            "نباید یک عدد را با یک String که شامل عدد است اشتباه بگیری.\n\n" +

            '25\n' +
            '"25"\n\n' +

            "مقدار اول یک Number است. مقدار دوم یک String است.\n\n" +

            "💡 به خاطر بسپار:\n\n" +

            "String → متن\n" +

            "متن داخل علامت نقل‌قول نوشته می‌شود.\n" +

            "عددهای داخل علامت نقل‌قول، String هستند.",
    },

    {
        id: 3,
        title: "JavaScript Numbers",
        faTitle: "اعداد در JavaScript",
        content: `Numbers are used to represent numeric values in JavaScript.

A number can be a whole number, such as:

25
100
-10

Or it can be a decimal number:

3.14
0.5
-2.75

JavaScript uses the Number data type for both whole numbers and decimal numbers.

━━━━━━━━━━━━━━

NUMBERS IN VARIABLES

You can store a number inside a variable:

let age = 25;
const price = 19.99;

Here, age and price contain Number values.

You can use these variables later in your program:

let score = 100;
console.log(score);

The value stored in score is a Number.

━━━━━━━━━━━━━━

POSITIVE AND NEGATIVE NUMBERS

Numbers can be positive, negative, or zero.

For example:

let temperature = -5;
let balance = 100;
let change = 0;

The minus sign makes a number negative.

━━━━━━━━━━━━━━

NaN

JavaScript also has a special Number value called NaN.

NaN means "Not a Number".

It can appear when JavaScript tries to perform a numeric operation that does not produce a valid number.

For example:

const result = Number("hello");

The result is NaN because "hello" cannot be converted into a valid number.

NaN is still considered part of JavaScript's Number type.

━━━━━━━━━━━━━━

INFINITY

JavaScript also has a special numeric value called Infinity.

Infinity represents a value greater than any finite number.

For example:

const result = 10 / 0;

The result is Infinity.

You will not need to use Infinity often as a beginner, but it is useful to know that JavaScript has this special numeric value.

━━━━━━━━━━━━━━

THE Math OBJECT

JavaScript provides the Math object for common mathematical operations.

For example:

Math.round(4.6);

This returns 5 because 4.6 is rounded to the nearest whole number.

You can also use:

Math.floor(4.9);

This returns 4 because floor rounds down.

And:

Math.ceil(4.1);

This returns 5 because ceil rounds up.

━━━━━━━━━━━━━━

COMMON MISTAKE

Do not confuse a Number with a String containing a number.

For example:

25

is a Number.

But:

"25"

is a String.

The quotation marks change the data type.

💡 Remember:

Number → numeric values
Whole numbers and decimals are both Numbers.
Positive, negative, and zero are all Numbers.
NaN is a special Number value.
Infinity is a special numeric value.
"25" is a String, while 25 is a Number.`,
        faContent: `عددها یا Number برای نمایش مقادیر عددی در JavaScript استفاده می‌شوند.

یک Number می‌تواند یک عدد صحیح باشد، مانند:

25
100
-10

یا می‌تواند یک عدد اعشاری باشد:

3.14
0.5
-2.75

در JavaScript، هم اعداد صحیح و هم اعداد اعشاری از نوع Number هستند.

━━━━━━━━━━━━━━

اعداد در متغیرها

می‌توانی یک عدد را داخل یک متغیر ذخیره کنی:

let age = 25;
const price = 19.99;

در اینجا age و price شامل مقادیر Number هستند.

بعداً می‌توانی از این متغیرها در برنامه استفاده کنی:

let score = 100;
console.log(score);

مقداری که داخل score ذخیره شده است از نوع Number است.

━━━━━━━━━━━━━━

اعداد مثبت و منفی

عددها می‌توانند مثبت، منفی یا صفر باشند.

مثلاً:

let temperature = -5;
let balance = 100;
let change = 0;

علامت منفی باعث می‌شود یک عدد منفی باشد.

━━━━━━━━━━━━━━

NaN

در JavaScript یک مقدار عددی ویژه به نام NaN نیز وجود دارد.

NaN مخفف "Not a Number" است.

این مقدار ممکن است زمانی ایجاد شود که JavaScript تلاش کند یک عملیات عددی را انجام دهد اما نتیجه یک عدد معتبر نباشد.

مثلاً:

const result = Number("hello");

نتیجه NaN است، زیرا "hello" نمی‌تواند به یک عدد معتبر تبدیل شود.

مقدار NaN همچنان بخشی از نوع داده Number در JavaScript محسوب می‌شود.

━━━━━━━━━━━━━━

Infinity

در JavaScript یک مقدار عددی ویژه به نام Infinity نیز وجود دارد.

Infinity مقداری را نشان می‌دهد که از هر عدد متناهی بزرگ‌تر است.

مثلاً:

const result = 10 / 0;

نتیجه Infinity است.

در ابتدای مسیر یادگیری معمولاً زیاد از Infinity استفاده نمی‌کنی، اما مهم است بدانی JavaScript چنین مقدار عددی ویژه‌ای دارد.

━━━━━━━━━━━━━━

آبجکت Math

در JavaScript آبجکت Math برای انجام برخی عملیات ریاضی رایج استفاده می‌شود.

مثلاً:

Math.round(4.6);

این عبارت مقدار 5 را برمی‌گرداند، زیرا 4.6 به نزدیک‌ترین عدد صحیح گرد می‌شود.

همچنین می‌توانی از این موارد استفاده کنی:

Math.floor(4.9);

این عبارت مقدار 4 را برمی‌گرداند، زیرا floor عدد را به سمت پایین گرد می‌کند.

و:

Math.ceil(4.1);

این عبارت مقدار 5 را برمی‌گرداند، زیرا ceil عدد را به سمت بالا گرد می‌کند.

━━━━━━━━━━━━━━

یک اشتباه رایج

نباید یک Number را با یک String که شامل عدد است اشتباه بگیری.

مثلاً:

25

یک Number است.

اما:

"25"

یک String است.

وجود علامت‌های نقل‌قول نوع داده را تغییر می‌دهد.

💡 به خاطر بسپار:

Number → مقادیر عددی
اعداد صحیح و اعشاری هر دو Number هستند.
اعداد مثبت، منفی و صفر همگی Number هستند.
NaN یک مقدار ویژه از نوع Number است.
Infinity یک مقدار عددی ویژه است.
"25" یک String است، در حالی که 25 یک Number است.`,
    },

    {
        id: 4,
        title: "JavaScript Booleans",
        faTitle: "مقادیر Boolean در JavaScript",
        content: {
            en: `A Boolean is a data type that can have only two values: true or false.

Booleans are useful when your program needs to represent whether something is true or false.

For example:

let isOnline = true;
let isLoggedIn = false;

Here, isOnline stores true because the user is online, while isLoggedIn stores false because the user is not logged in.

Booleans are often used to describe the state of something:

let hasPermission = true;
let isFinished = false;

The variable names often start with words such as is, has, or can because they make the meaning easier to understand.

Booleans can also be stored in const variables when their value does not need to be reassigned:

const isAdmin = true;

If a Boolean value needs to change later, you can use let:

let isPlaying = false;
isPlaying = true;

Remember that true and false are Boolean values. They are not Strings.

true
false

"true"
"false"

The first two are Booleans, while the last two are Strings because they are surrounded by quotation marks.

Booleans become especially useful when you start working with conditions and comparisons, because they allow your program to make decisions based on whether something is true or false.

Quick rule to remember:

true and false → Boolean
"true" and "false" → String`,
            fa: `Boolean یا مقدار بولی یک نوع داده است که فقط می‌تواند دو مقدار داشته باشد: true یا false.

مقادیر Boolean زمانی کاربرد دارند که برنامه باید مشخص کند چیزی درست است یا نادرست.

برای مثال:

let isOnline = true;
let isLoggedIn = false;

در اینجا isOnline مقدار true را ذخیره می‌کند چون کاربر آنلاین است، در حالی که isLoggedIn مقدار false را ذخیره می‌کند چون کاربر وارد نشده است.

از Booleanها معمولاً برای نشان دادن وضعیت یک چیز استفاده می‌شود:

let hasPermission = true;
let isFinished = false;

نام متغیرهای Boolean معمولاً با کلماتی مانند is، has یا can شروع می‌شود تا معنی متغیر راحت‌تر قابل درک باشد.

اگر مقدار Boolean قرار نیست دوباره تغییر کند، می‌توان آن را در یک متغیر const ذخیره کرد:

const isAdmin = true;

اگر مقدار Boolean قرار است بعداً تغییر کند، می‌توان از let استفاده کرد:

let isPlaying = false;
isPlaying = true;

به یاد داشته باشید که true و false مقدارهای Boolean هستند و String نیستند.

true
false

"true"
"false"

دو مقدار اول Boolean هستند، اما دو مقدار آخر String هستند زیرا داخل علامت نقل‌قول قرار گرفته‌اند.

Booleanها زمانی اهمیت بیشتری پیدا می‌کنند که با شرط‌ها و مقایسه‌ها کار کنید، زیرا به برنامه اجازه می‌دهند بر اساس درست یا نادرست بودن یک وضعیت تصمیم‌گیری کند.

قانون ساده برای به خاطر سپردن:

true و false → Boolean
"true" و "false" → String`
        }
    },

    {
        id: 5,
        title: "JavaScript Undefined & Null",
        faTitle: "Undefined و Null در JavaScript",
        content: {
            en: `JavaScript has two special values called undefined and null.

They are both commonly used when a value is missing or does not contain useful data, but they are not the same.

undefined usually means that a value has not been assigned yet.

For example:

let age;
console.log(age);

The variable age exists, but no value has been assigned to it, so its value is undefined.

A variable can also become undefined when you explicitly assign undefined to it:

let username = undefined;

null is different. It is an intentional value that means there is no value here.

For example:

let selectedUser = null;

This can mean that there is currently no selected user.

A simple way to remember the difference:

undefined → a value is not assigned
null → an intentional empty value

Both undefined and null are different from an empty String:

let message = "";

Here, message contains an empty String. It is not undefined or null.

They are also different from zero:

let score = 0;

Zero is a Number with the value 0. It does not mean that the variable is missing.

Remember:

undefined → no value has been assigned
null → intentionally represents no value
"" → empty String
0 → Number with the value zero

Understanding these differences will become especially important when you work with conditions, objects, and data from APIs.`,

            fa: `در JavaScript دو مقدار ویژه به نام undefined و null وجود دارد.

این دو مقدار معمولاً زمانی استفاده می‌شوند که یک مقدار وجود ندارد یا داده‌ای در آن قرار نگرفته است، اما با یکدیگر یکسان نیستند.

مقدار undefined معمولاً یعنی هنوز مقداری به یک متغیر اختصاص داده نشده است.

برای مثال:

let age;
console.log(age);

متغیر age وجود دارد، اما هنوز مقداری به آن اختصاص داده نشده است، بنابراین مقدار آن undefined است.

یک متغیر همچنین می‌تواند به‌صورت مستقیم مقدار undefined دریافت کند:

let username = undefined;

مقدار null متفاوت است. null یک مقدار عمدی است که نشان می‌دهد در حال حاضر مقداری وجود ندارد.

برای مثال:

let selectedUser = null;

این مقدار می‌تواند نشان دهد که در حال حاضر هیچ کاربری انتخاب نشده است.

یک روش ساده برای به خاطر سپردن تفاوت آن‌ها:

undefined → هنوز مقداری اختصاص داده نشده است
null → به‌صورت عمدی نشان‌دهنده نبودن مقدار است

هر دو مقدار undefined و null با یک String خالی متفاوت هستند:

let message = "";

در اینجا message یک String خالی را در خود دارد و مقدار آن undefined یا null نیست.

این مقادیر با صفر نیز متفاوت هستند:

let score = 0;

صفر یک Number با مقدار 0 است و به معنی نبودن مقدار نیست.

به یاد داشته باشید:

undefined → مقداری اختصاص داده نشده است
null → به‌صورت عمدی نشان‌دهنده نبودن مقدار است
"" → یک String خالی
0 → یک Number با مقدار صفر

درک این تفاوت‌ها زمانی اهمیت بیشتری پیدا می‌کند که با شرط‌ها، Objectها و داده‌های دریافت‌شده از APIها کار کنید.`
        }
    },

    {
        id: 6,
        title: "JavaScript Type Conversion",
        faTitle: "تبدیل نوع داده در JavaScript",
        content: {
            en: `Type conversion means changing a value from one data type to another.

JavaScript often works with different types of data, such as Strings, Numbers, and Booleans. Sometimes you need to convert a value so your program can work with it correctly.

For example, a value that looks like a number can actually be a String:

const age = "25";

Here, age contains the String "25", not the Number 25.

You can use Number() to convert a value to a Number:

const age = "25";
const numberAge = Number(age);

Now numberAge contains the Number 25.

You can use String() to convert a value to a String:

const score = 100;
const textScore = String(score);

Now textScore contains the String "100".

You can also use Boolean() to convert a value to a Boolean:

const value = 1;
const result = Boolean(value);

Here, result becomes true.

Some values convert to false when using Boolean(). For example:

Boolean(false);
Boolean(0);
Boolean("");
Boolean(null);
Boolean(undefined);

These values become false.

Many other values become true, such as:

Boolean(1);
Boolean("hello");

A common mistake is assuming that a value inside quotation marks is automatically a Number just because it contains digits.

const age = "25";

age is still a String until you convert it:

const numberAge = Number(age);

Another important point is that conversion does not change the original variable unless you store the converted value somewhere or assign it back.

For example:

let age = "25";
Number(age);

age is still the String "25".

But:

let age = "25";
age = Number(age);

Now age contains the Number 25.

Remember:

Number() → converts a value to a Number
String() → converts a value to a String
Boolean() → converts a value to a Boolean

Type conversion is an important skill because real programs often receive data in a different type than the one you need.`,

            fa: `تبدیل نوع داده یعنی تغییر دادن یک مقدار از یک نوع داده به نوع داده دیگر.

در JavaScript معمولاً با انواع مختلف داده مانند String، Number و Boolean کار می‌کنیم. گاهی لازم است یک مقدار را تبدیل کنیم تا برنامه بتواند به‌درستی با آن کار کند.

برای مثال، مقداری که شبیه یک عدد است ممکن است در واقع یک String باشد:

const age = "25";

در اینجا age شامل String یعنی "25" است، نه Number یعنی 25.

برای تبدیل یک مقدار به Number می‌توان از Number() استفاده کرد:

const age = "25";
const numberAge = Number(age);

حالا numberAge شامل Number یعنی 25 است.

برای تبدیل یک مقدار به String می‌توان از String() استفاده کرد:

const score = 100;
const textScore = String(score);

حالا textScore شامل String یعنی "100" است.

برای تبدیل یک مقدار به Boolean نیز می‌توان از Boolean() استفاده کرد:

const value = 1;
const result = Boolean(value);

در اینجا result برابر true می‌شود.

بعضی مقدارها هنگام استفاده از Boolean() به false تبدیل می‌شوند. برای مثال:

Boolean(false);
Boolean(0);
Boolean("");
Boolean(null);
Boolean(undefined);

این مقدارها به false تبدیل می‌شوند.

بسیاری از مقدارهای دیگر به true تبدیل می‌شوند، مانند:

Boolean(1);
Boolean("hello");

یک اشتباه رایج این است که تصور کنیم مقداری که داخل علامت نقل‌قول قرار دارد، فقط به دلیل داشتن رقم حتماً Number است.

const age = "25";

مقدار age همچنان یک String است تا زمانی که آن را تبدیل کنیم:

const numberAge = Number(age);

نکته مهم دیگر این است که تبدیل نوع داده لزوماً متغیر اصلی را تغییر نمی‌دهد، مگر اینکه مقدار تبدیل‌شده را ذخیره کنیم یا دوباره به متغیر اختصاص دهیم.

برای مثال:

let age = "25";
Number(age);

مقدار age همچنان String یعنی "25" است.

اما:

let age = "25";
age = Number(age);

حالا age شامل Number یعنی 25 است.

به یاد داشته باشید:

Number() → یک مقدار را به Number تبدیل می‌کند
String() → یک مقدار را به String تبدیل می‌کند
Boolean() → یک مقدار را به Boolean تبدیل می‌کند

تبدیل نوع داده یک مهارت مهم است زیرا در برنامه‌های واقعی معمولاً داده‌ها با نوعی متفاوت از نوع مورد نیاز برنامه دریافت می‌شوند.`
        }
    },

    {
        id: 7,
        title: "JavaScript Arithmetic Operators",
        faTitle: "عملگرهای حسابی در JavaScript",
        content: {
            en: `Arithmetic operators are used to perform calculations with numbers in JavaScript.

The main arithmetic operators are:

+ → addition
- → subtraction
* → multiplication
/ → division
% → remainder

The + operator adds two numbers together:

let result = 10 + 5;

The value of result is 15.

The - operator subtracts one number from another:

let result = 10 - 5;

The value of result is 5.

The * operator multiplies numbers:

let result = 10 * 5;

The value of result is 50.

The / operator divides one number by another:

let result = 10 / 5;

The value of result is 2.

The % operator returns the remainder after division:

let result = 10 % 3;

The value of result is 1 because 10 divided by 3 leaves a remainder of 1.

Arithmetic operators can also be used with variables:

const price = 20;
const quantity = 3;
const total = price * quantity;

Here, total becomes 60.

You can also perform more than one calculation:

const result = 10 + 5 * 2;

JavaScript follows operator precedence when it evaluates an expression. Multiplication and division are performed before addition and subtraction.

Parentheses can be used when you want a specific part of a calculation to be performed first:

const result = (10 + 5) * 2;

Here, the addition inside the parentheses happens first.

A common beginner mistake is confusing + with joining Strings.

When both values are Numbers:

10 + 5

produces 15.

But when Strings are involved:

"10" + "5"

produces "105" because the + operator joins the two Strings.

Remember:

+ → add
- → subtract
* → multiply
/ → divide
% → get the remainder

Arithmetic operators are the foundation for performing calculations and working with numeric data in JavaScript.`,

            fa: `عملگرهای حسابی برای انجام محاسبات با اعداد در JavaScript استفاده می‌شوند.

مهم‌ترین عملگرهای حسابی عبارت‌اند از:

+ → جمع
- → تفریق
* → ضرب
/ → تقسیم
% → باقی‌مانده

عملگر + دو عدد را با یکدیگر جمع می‌کند:

let result = 10 + 5;

مقدار result برابر 15 می‌شود.

عملگر - یک عدد را از عدد دیگر کم می‌کند:

let result = 10 - 5;

مقدار result برابر 5 می‌شود.

عملگر * برای ضرب کردن اعداد استفاده می‌شود:

let result = 10 * 5;

مقدار result برابر 50 می‌شود.

عملگر / یک عدد را بر عدد دیگر تقسیم می‌کند:

let result = 10 / 5;

مقدار result برابر 2 می‌شود.

عملگر % باقی‌مانده تقسیم را برمی‌گرداند:

let result = 10 % 3;

مقدار result برابر 1 می‌شود زیرا با تقسیم 10 بر 3، باقی‌مانده برابر 1 است.

از عملگرهای حسابی می‌توان با متغیرها نیز استفاده کرد:

const price = 20;
const quantity = 3;
const total = price * quantity;

در اینجا مقدار total برابر 60 می‌شود.

می‌توان چند محاسبه را نیز در یک عبارت انجام داد:

const result = 10 + 5 * 2;

JavaScript هنگام محاسبه یک عبارت از ترتیب انجام عملگرها پیروی می‌کند. عملگرهای ضرب و تقسیم قبل از جمع و تفریق انجام می‌شوند.

اگر بخواهید بخش خاصی از یک محاسبه زودتر انجام شود، می‌توانید از پرانتز استفاده کنید:

const result = (10 + 5) * 2;

در اینجا ابتدا جمع داخل پرانتز انجام می‌شود.

یک اشتباه رایج در بین افراد مبتدی، اشتباه گرفتن + برای جمع اعداد با اتصال Stringها است.

وقتی هر دو مقدار Number باشند:

10 + 5

نتیجه 15 است.

اما وقتی Stringها درگیر باشند:

"10" + "5"

نتیجه "105" است زیرا عملگر + دو String را به یکدیگر متصل می‌کند.

به یاد داشته باشید:

+ → جمع
- → تفریق
* → ضرب
/ → تقسیم
% → باقی‌مانده

عملگرهای حسابی پایه انجام محاسبات و کار با داده‌های عددی در JavaScript هستند.`
        }
    },

    {
        id: 8,
        title: "JavaScript Assignment Operators",
        faTitle: "عملگرهای انتساب در JavaScript",
        content: {
            en: `Assignment operators are used to assign values to variables and update their values in JavaScript.

The most basic assignment operator is =.

For example:

let score = 10;

Here, the value 10 is assigned to the variable score.

The = operator does not mean "is equal to" in this context. It means "assign this value to the variable."

You can also use assignment operators to update an existing variable.

For example:

let score = 10;
score = 20;

After the second line, score stores 20.

JavaScript also provides compound assignment operators that combine an arithmetic operation with assignment.

The main compound assignment operators are:

+= → add and assign
-= → subtract and assign
*= → multiply and assign
/= → divide and assign
%= → remainder and assign

For example:

let score = 10;
score += 5;

This is the same as:

score = score + 5;

After this operation, score is 15.

The -= operator subtracts a value and assigns the new result:

let score = 10;
score -= 3;

This is the same as:

score = score - 3;

The value of score becomes 7.

The *= operator multiplies a variable by a value and assigns the result:

let score = 10;
score *= 2;

This is the same as:

score = score * 2;

The value of score becomes 20.

The /= operator divides a variable by a value and assigns the result:

let score = 20;
score /= 4;

This is the same as:

score = score / 4;

The value of score becomes 5.

The %= operator calculates the remainder and assigns it back to the variable:

let number = 17;
number %= 5;

This is the same as:

number = number % 5;

The value of number becomes 2.

These operators are especially useful when a variable needs to be updated based on its current value.

For example:

let points = 100;
points += 10;
points -= 20;

The value changes from 100 to 110, and then from 110 to 90.

A common beginner mistake is confusing = with == or ===.

The = operator assigns a value:

let age = 25;

The === operator compares values:

age === 25

Comparison operators will be covered in more detail later.

Another important point is that const variables cannot be reassigned:

const score = 10;
score += 5;

This causes an error because += tries to change the value stored in a const variable.

If the value needs to change, use let:

let score = 10;
score += 5;

Remember:

= → assign a value
+= → add and assign
-= → subtract and assign
*= → multiply and assign
/= → divide and assign
%= → remainder and assign

Assignment operators make it easier to update variables without repeatedly writing the variable name and the full calculation.`,

            fa: `عملگرهای انتساب برای قرار دادن مقدار در متغیرها و تغییر دادن مقدار آن‌ها در JavaScript استفاده می‌شوند.

ساده‌ترین عملگر انتساب = است.

برای مثال:

let score = 10;

در اینجا مقدار 10 به متغیر score اختصاص داده می‌شود.

عملگر = در اینجا به معنی «برابر بودن» نیست، بلکه به معنی «اختصاص دادن این مقدار به متغیر» است.

می‌توان از عملگرهای انتساب برای تغییر مقدار یک متغیر موجود نیز استفاده کرد.

برای مثال:

let score = 10;
score = 20;

بعد از اجرای خط دوم، مقدار score برابر با 20 می‌شود.

JavaScript همچنین عملگرهای انتساب ترکیبی دارد که یک عملگر حسابی را با عملگر انتساب ترکیب می‌کنند.

مهم‌ترین عملگرهای انتساب ترکیبی عبارت‌اند از:

+= → جمع و انتساب
-= → تفریق و انتساب
*= → ضرب و انتساب
/= → تقسیم و انتساب
%= → باقی‌مانده و انتساب

برای مثال:

let score = 10;
score += 5;

این کد معادل عبارت زیر است:

score = score + 5;

بعد از این عملیات، مقدار score برابر با 15 می‌شود.

عملگر -= یک مقدار را از متغیر کم کرده و نتیجه جدید را دوباره در همان متغیر قرار می‌دهد:

let score = 10;
score -= 3;

این کد معادل عبارت زیر است:

score = score - 3;

مقدار score برابر با 7 می‌شود.

عملگر *= مقدار متغیر را در یک مقدار دیگر ضرب کرده و نتیجه را دوباره در متغیر قرار می‌دهد:

let score = 10;
score *= 2;

این کد معادل عبارت زیر است:

score = score * 2;

مقدار score برابر با 20 می‌شود.

عملگر /= مقدار متغیر را بر یک مقدار دیگر تقسیم کرده و نتیجه را دوباره در متغیر قرار می‌دهد:

let score = 20;
score /= 4;

این کد معادل عبارت زیر است:

score = score / 4;

مقدار score برابر با 5 می‌شود.

عملگر %= باقی‌مانده تقسیم را محاسبه کرده و نتیجه را دوباره در همان متغیر قرار می‌دهد:

let number = 17;
number %= 5;

این کد معادل عبارت زیر است:

number = number % 5;

مقدار number برابر با 2 می‌شود.

این عملگرها زمانی بسیار کاربردی هستند که مقدار یک متغیر باید بر اساس مقدار فعلی خودش تغییر کند.

برای مثال:

let points = 100;
points += 10;
points -= 20;

مقدار points ابتدا از 100 به 110 و سپس از 110 به 90 تغییر می‌کند.

یک اشتباه رایج در بین افراد مبتدی، اشتباه گرفتن = با == یا === است.

عملگر = برای اختصاص دادن مقدار استفاده می‌شود:

let age = 25;

عملگر === برای مقایسه مقدارها استفاده می‌شود:

age === 25

عملگرهای مقایسه در درس‌های بعدی با جزئیات بیشتری بررسی خواهند شد.

نکته مهم دیگر این است که نمی‌توان مقدار یک متغیر const را دوباره تغییر داد:

const score = 10;
score += 5;

این کد باعث خطا می‌شود زیرا عملگر += تلاش می‌کند مقدار یک متغیر const را تغییر دهد.

اگر مقدار متغیر قرار است تغییر کند، از let استفاده کنید:

let score = 10;
score += 5;

به یاد داشته باشید:

= → اختصاص دادن مقدار
+= → جمع و انتساب
-= → تفریق و انتساب
*= → ضرب و انتساب
/= → تقسیم و انتساب
%= → باقی‌مانده و انتساب

عملگرهای انتساب باعث می‌شوند بتوانید مقدار متغیرها را بدون نوشتن دوباره نام متغیر و کل محاسبه، به‌سادگی به‌روزرسانی کنید.`
        }
    },

    {
        id: 9,
        title: "JavaScript Comparison Operators",
        faTitle: "عملگرهای مقایسه‌ای در JavaScript",
        content: {
            en: `Comparison operators are used to compare values in JavaScript.

The result of a comparison is always a Boolean: true or false.

For example:

10 > 5

The result is true because 10 is greater than 5.

The main comparison operators are:

> → greater than
< → less than
>= → greater than or equal to
<= → less than or equal to
=== → strictly equal
!== → strictly not equal

The > operator checks whether the value on the left is greater than the value on the right:

10 > 5

The result is true.

The < operator checks whether the value on the left is less than the value on the right:

3 < 8

The result is true.

The >= operator checks whether a value is greater than or equal to another value:

10 >= 10

The result is true because the values are equal.

The <= operator checks whether a value is less than or equal to another value:

7 <= 10

The result is true because 7 is less than 10.

The === operator checks whether two values are strictly equal.

For example:

10 === 10

The result is true.

But:

10 === "10"

The result is false because one value is a Number and the other is a String.

The !== operator checks whether two values are strictly not equal:

10 !== 5

The result is true because the values are different.

It also considers their data types:

10 !== "10"

The result is true because the values have different data types.

Comparison operators can be used with variables:

const age = 20;

age >= 18

The result is true.

You can also compare the result of expressions:

const score = 80;

score > 50

The result is true.

A common beginner mistake is confusing = with ===.

The = operator assigns a value:

let age = 20;

The === operator compares values:

age === 20

These operators have completely different purposes.

Another common mistake is using === when you only want to assign a value:

let score === 100;

This is invalid JavaScript.

To assign 100 to score, use:

let score = 100;

To check whether score is strictly equal to 100, use:

score === 100

Remember:

> → greater than
< → less than
>= → greater than or equal to
<= → less than or equal to
=== → strictly equal
!== → strictly not equal

Comparison operators are important because they produce Boolean values that can later be used by conditions and other decision-making code.`,

            fa: `عملگرهای مقایسه‌ای برای مقایسه مقدارها در JavaScript استفاده می‌شوند.

نتیجه یک مقایسه همیشه یک مقدار Boolean یعنی true یا false است.

برای مثال:

10 > 5

نتیجه true است زیرا 10 بزرگ‌تر از 5 است.

مهم‌ترین عملگرهای مقایسه‌ای عبارت‌اند از:

> → بزرگ‌تر از
< → کوچک‌تر از
>= → بزرگ‌تر یا مساوی
<= → کوچک‌تر یا مساوی
=== → کاملاً برابر
!== → کاملاً نابرابر

عملگر > بررسی می‌کند که آیا مقدار سمت چپ بزرگ‌تر از مقدار سمت راست است یا نه:

10 > 5

نتیجه true است.

عملگر < بررسی می‌کند که آیا مقدار سمت چپ کوچک‌تر از مقدار سمت راست است یا نه:

3 < 8

نتیجه true است.

عملگر >= بررسی می‌کند که آیا یک مقدار بزرگ‌تر یا مساوی مقدار دیگر است:

10 >= 10

نتیجه true است زیرا دو مقدار با یکدیگر برابر هستند.

عملگر <= بررسی می‌کند که آیا یک مقدار کوچک‌تر یا مساوی مقدار دیگر است:

7 <= 10

نتیجه true است زیرا 7 کوچک‌تر از 10 است.

عملگر === بررسی می‌کند که آیا دو مقدار کاملاً برابر هستند یا نه.

برای مثال:

10 === 10

نتیجه true است.

اما:

10 === "10"

نتیجه false است زیرا یکی از مقدارها Number و دیگری String است.

عملگر !== بررسی می‌کند که آیا دو مقدار کاملاً نابرابر هستند:

10 !== 5

نتیجه true است زیرا دو مقدار با یکدیگر متفاوت هستند.

این عملگر نوع داده را نیز در نظر می‌گیرد:

10 !== "10"

نتیجه true است زیرا نوع داده دو مقدار متفاوت است.

می‌توان از عملگرهای مقایسه‌ای با متغیرها نیز استفاده کرد:

const age = 20;

age >= 18

نتیجه true است.

همچنین می‌توان نتیجه عبارت‌ها را با یکدیگر مقایسه کرد:

const score = 80;

score > 50

نتیجه true است.

یک اشتباه رایج در بین افراد مبتدی، اشتباه گرفتن = با === است.

عملگر = برای اختصاص دادن مقدار استفاده می‌شود:

let age = 20;

عملگر === برای مقایسه مقدارها استفاده می‌شود:

age === 20

این دو عملگر کاربرد کاملاً متفاوتی دارند.

اشتباه رایج دیگر، استفاده از === زمانی است که می‌خواهید یک مقدار را به متغیر اختصاص دهید:

let score === 100;

این کد در JavaScript معتبر نیست.

برای اختصاص دادن مقدار 100 به score باید از این شکل استفاده کنید:

let score = 100;

برای بررسی اینکه آیا score دقیقاً برابر با 100 است، باید از این شکل استفاده کنید:

score === 100

به یاد داشته باشید:

> → بزرگ‌تر از
< → کوچک‌تر از
>= → بزرگ‌تر یا مساوی
<= → کوچک‌تر یا مساوی
=== → کاملاً برابر
!== → کاملاً نابرابر

عملگرهای مقایسه‌ای اهمیت زیادی دارند زیرا مقدارهای Boolean تولید می‌کنند و این مقدارها بعداً در شرط‌ها و بخش‌های تصمیم‌گیری برنامه استفاده می‌شوند.`
        }
    },

    {
        id: 10,
        title: "JavaScript Logical Operators",
        faTitle: "عملگرهای منطقی در JavaScript",
        content: {
            en: `Logical operators are used to combine or change Boolean values in JavaScript.

They are especially useful when you need to work with more than one condition or Boolean value.

The three main logical operators are:

&& → AND
|| → OR
! → NOT

The && operator means AND.

It returns true only when both sides are true.

For example:

true && true

The result is true.

But:

true && false

The result is false because both sides are not true.

Another example:

const isLoggedIn = true;
const isAdmin = true;

isLoggedIn && isAdmin

The result is true because both values are true.

If one of the values is false:

const isLoggedIn = true;
const isAdmin = false;

isLoggedIn && isAdmin

The result is false.

The || operator means OR.

It returns true when at least one side is true.

For example:

true || false

The result is true.

Even when both sides are true:

true || true

The result is also true.

The result is false only when both sides are false:

false || false

The result is false.

For example:

const isAdmin = false;
const isModerator = true;

isAdmin || isModerator

The result is true because at least one value is true.

The ! operator means NOT.

It reverses a Boolean value.

For example:

!true

The result is false.

And:

!false

The result is true.

You can also use ! with Boolean variables:

const isOnline = true;

!isOnline

The result is false.

Logical operators can be combined with comparison operators.

For example:

const age = 20;

age >= 18 && age <= 30

The first comparison is true and the second comparison is also true, so the complete expression is true.

Another example:

const age = 16;

age >= 18 || age <= 30

The first comparison is false, but the second comparison is true, so the complete expression is true.

Parentheses can be used to make a logical expression easier to understand or to control the order in which parts are evaluated.

For example:

const isLoggedIn = true;
const isAdmin = false;
const isModerator = true;

isLoggedIn && (isAdmin || isModerator)

First, the expression inside the parentheses is evaluated.

isAdmin || isModerator

This is true because isModerator is true.

Then:

isLoggedIn && true

This is also true because isLoggedIn is true.

A common beginner mistake is thinking that && means true when either side is true.

Remember that && requires both sides to be true.

Another common mistake is thinking that || requires both sides to be true.

The || operator needs only one side to be true.

Quick rule:

&& → both must be true
|| → at least one must be true
! → reverses true and false

Logical operators are important because they allow JavaScript to combine multiple Boolean conditions and make more complex decisions.`,

            fa: `عملگرهای منطقی برای ترکیب کردن یا تغییر دادن مقدارهای Boolean در JavaScript استفاده می‌شوند.

این عملگرها زمانی کاربرد دارند که بخواهید با بیش از یک شرط یا مقدار Boolean کار کنید.

سه عملگر منطقی اصلی عبارت‌اند از:

&& → AND
|| → OR
! → NOT

عملگر && به معنی AND یا «و» است.

این عملگر فقط زمانی true برمی‌گرداند که هر دو طرف آن true باشند.

برای مثال:

true && true

نتیجه true است.

اما:

true && false

نتیجه false است زیرا هر دو طرف true نیستند.

مثال دیگر:

const isLoggedIn = true;
const isAdmin = true;

isLoggedIn && isAdmin

نتیجه true است زیرا هر دو مقدار true هستند.

اگر یکی از مقدارها false باشد:

const isLoggedIn = true;
const isAdmin = false;

isLoggedIn && isAdmin

نتیجه false است.

عملگر || به معنی OR یا «یا» است.

این عملگر زمانی true برمی‌گرداند که حداقل یکی از دو طرف true باشد.

برای مثال:

true || false

نتیجه true است.

حتی اگر هر دو طرف true باشند:

true || true

نتیجه نیز true است.

این عملگر فقط زمانی false می‌شود که هر دو طرف false باشند:

false || false

نتیجه false است.

مثال:

const isAdmin = false;
const isModerator = true;

isAdmin || isModerator

نتیجه true است زیرا حداقل یکی از مقدارها true است.

عملگر ! به معنی NOT یا «نقیض» است.

این عملگر مقدار Boolean را برعکس می‌کند.

برای مثال:

!true

نتیجه false است.

و:

!false

نتیجه true است.

می‌توان از ! با متغیرهای Boolean نیز استفاده کرد:

const isOnline = true;

!isOnline

نتیجه false است.

می‌توان عملگرهای منطقی را با عملگرهای مقایسه‌ای نیز ترکیب کرد.

برای مثال:

const age = 20;

age >= 18 && age <= 30

مقایسه اول true و مقایسه دوم نیز true است، بنابراین نتیجه عبارت کامل true می‌شود.

مثال دیگر:

const age = 16;

age >= 18 || age <= 30

مقایسه اول false است، اما مقایسه دوم true است، بنابراین نتیجه عبارت کامل true می‌شود.

می‌توان از پرانتز برای خوانایی بیشتر عبارت منطقی یا کنترل ترتیب بررسی بخش‌های مختلف استفاده کرد.

برای مثال:

const isLoggedIn = true;
const isAdmin = false;
const isModerator = true;

isLoggedIn && (isAdmin || isModerator)

ابتدا عبارت داخل پرانتز بررسی می‌شود.

isAdmin || isModerator

این عبارت true است زیرا isModerator مقدار true دارد.

سپس عبارت زیر بررسی می‌شود:

isLoggedIn && true

این عبارت نیز true است زیرا isLoggedIn مقدار true دارد.

یک اشتباه رایج در بین افراد مبتدی این است که تصور کنند && زمانی true می‌شود که یکی از طرفین true باشد.

به یاد داشته باشید که && به true بودن هر دو طرف نیاز دارد.

اشتباه رایج دیگر این است که تصور کنید || به true بودن هر دو طرف نیاز دارد.

عملگر || فقط به true بودن حداقل یکی از طرفین نیاز دارد.

قانون ساده برای به خاطر سپردن:

&& → هر دو باید true باشند
|| → حداقل یکی باید true باشد
! → true و false را برعکس می‌کند

عملگرهای منطقی اهمیت زیادی دارند زیرا به JavaScript اجازه می‌دهند چند شرط Boolean را با یکدیگر ترکیب کند و تصمیم‌های پیچیده‌تری ایجاد کند.`
        }
    },

    {
        id: 11,
        title: "JavaScript Operator Precedence",
        faTitle: "ترتیب اجرای عملگرها در JavaScript",
        content: {
            en: `Operator precedence determines the order in which JavaScript evaluates different operators in an expression.

This becomes important when an expression contains more than one operator.

For example:

const result = 10 + 5 * 2;

JavaScript does not simply calculate from left to right.

Multiplication has higher precedence than addition, so JavaScript calculates:

5 * 2

first.

Then:

10 + 10

The final result is 20.

This means:

10 + 5 * 2

is 20, not 30.

The basic precedence order you need to remember for now is:

1. Parentheses
2. Multiplication, division, and remainder
3. Addition and subtraction

Parentheses have the highest priority.

For example:

const result = (10 + 5) * 2;

JavaScript calculates the expression inside the parentheses first:

10 + 5

which gives 15.

Then:

15 * 2

which gives 30.

Without parentheses:

const result = 10 + 5 * 2;

The multiplication happens first, so the result is 20.

You can also have several multiplication and division operators in the same expression.

For example:

const result = 20 / 5 * 2;

Division and multiplication have the same precedence, so they are evaluated from left to right.

First:

20 / 5

which gives 4.

Then:

4 * 2

which gives 8.

Addition and subtraction also have the same precedence and are evaluated from left to right.

For example:

const result = 20 - 5 + 3;

First:

20 - 5

which gives 15.

Then:

15 + 3

which gives 18.

Parentheses can make an expression easier to understand and can change the normal order of evaluation.

For example:

const result = 20 - (5 + 3);

The parentheses are evaluated first:

5 + 3

which gives 8.

Then:

20 - 8

which gives 12.

You can use multiple levels of parentheses when an expression becomes more complex:

const result = (10 + 5) * (8 - 3);

JavaScript evaluates both parenthesized expressions first:

10 + 5 → 15
8 - 3 → 5

Then:

15 * 5

The final result is 75.

A common beginner mistake is assuming that JavaScript always evaluates arithmetic expressions from left to right.

It does not.

Operator precedence determines which operations happen first.

Another common mistake is forgetting that parentheses can change the result.

Compare:

10 + 5 * 2

and:

(10 + 5) * 2

The first expression gives 20.

The second expression gives 30.

The numbers are the same, but the parentheses change the order of evaluation.

Remember:

Parentheses → first
* / % → next
+ - → after that

When operators have the same precedence, JavaScript evaluates them from left to right.

Understanding operator precedence will help you read and write more complex expressions correctly.`,

            fa: `ترتیب اجرای عملگرها مشخص می‌کند که JavaScript عملگرهای مختلف را در یک عبارت با چه ترتیبی محاسبه کند.

این موضوع زمانی اهمیت پیدا می‌کند که یک عبارت شامل چند عملگر مختلف باشد.

برای مثال:

const result = 10 + 5 * 2;

JavaScript این عبارت را به‌سادگی از چپ به راست محاسبه نمی‌کند.

عملگر ضرب اولویت بیشتری نسبت به جمع دارد، بنابراین JavaScript ابتدا این بخش را محاسبه می‌کند:

5 * 2

که نتیجه آن 10 است.

سپس:

10 + 10

محاسبه می‌شود.

نتیجه نهایی 20 است.

بنابراین:

10 + 5 * 2

برابر با 20 است، نه 30.

ترتیب پایه‌ای که فعلاً باید به خاطر بسپارید این است:

1. پرانتزها
2. ضرب، تقسیم و باقی‌مانده
3. جمع و تفریق

پرانتزها بالاترین اولویت را دارند.

برای مثال:

const result = (10 + 5) * 2;

JavaScript ابتدا عبارت داخل پرانتز را محاسبه می‌کند:

10 + 5

که نتیجه آن 15 است.

سپس:

15 * 2

محاسبه می‌شود و نتیجه 30 خواهد بود.

بدون پرانتز:

const result = 10 + 5 * 2;

ابتدا ضرب انجام می‌شود، بنابراین نتیجه 20 است.

همچنین ممکن است چند عملگر ضرب و تقسیم در یک عبارت وجود داشته باشد.

برای مثال:

const result = 20 / 5 * 2;

عملگرهای تقسیم و ضرب اولویت یکسانی دارند، بنابراین از چپ به راست محاسبه می‌شوند.

ابتدا:

20 / 5

که نتیجه آن 4 است.

سپس:

4 * 2

که نتیجه آن 8 است.

عملگرهای جمع و تفریق نیز اولویت یکسانی دارند و از چپ به راست محاسبه می‌شوند.

برای مثال:

const result = 20 - 5 + 3;

ابتدا:

20 - 5

محاسبه می‌شود که نتیجه آن 15 است.

سپس:

15 + 3

محاسبه می‌شود و نتیجه نهایی 18 است.

می‌توان از پرانتز برای خواناتر شدن عبارت و همچنین تغییر ترتیب معمول محاسبات استفاده کرد.

برای مثال:

const result = 20 - (5 + 3);

ابتدا عبارت داخل پرانتز محاسبه می‌شود:

5 + 3

که نتیجه آن 8 است.

سپس:

20 - 8

محاسبه می‌شود و نتیجه 12 خواهد بود.

می‌توان در عبارت‌های پیچیده‌تر از چند بخش دارای پرانتز نیز استفاده کرد:

const result = (10 + 5) * (8 - 3);

JavaScript ابتدا هر دو عبارت داخل پرانتز را محاسبه می‌کند:

10 + 5 → 15
8 - 3 → 5

سپس:

15 * 5

محاسبه می‌شود و نتیجه نهایی 75 خواهد بود.

یک اشتباه رایج در بین افراد مبتدی این است که تصور کنند JavaScript همیشه عبارت‌های حسابی را از چپ به راست محاسبه می‌کند.

این‌طور نیست.

ترتیب اجرای عملگرها مشخص می‌کند کدام عملیات زودتر انجام شود.

اشتباه رایج دیگر، فراموش کردن تأثیر پرانتزها بر نتیجه است.

این دو عبارت را مقایسه کنید:

10 + 5 * 2

و:

(10 + 5) * 2

عبارت اول نتیجه 20 دارد.

عبارت دوم نتیجه 30 دارد.

اعداد هر دو عبارت یکسان هستند، اما پرانتزها ترتیب محاسبه را تغییر می‌دهند.

به یاد داشته باشید:

پرانتزها → اول
* / % → بعد
+ - → پس از آن

وقتی چند عملگر اولویت یکسانی دارند، JavaScript آن‌ها را از چپ به راست محاسبه می‌کند.

درک ترتیب اجرای عملگرها به شما کمک می‌کند عبارت‌های پیچیده‌تر را به‌درستی بخوانید و بنویسید.`
        }
    },

    {
        id: 12,
        title: "JavaScript Conditional Statements",
        faTitle: "دستورهای شرطی در JavaScript",
        content: {
            en: `Conditional statements allow your program to make decisions based on whether a condition is true or false.

The most basic conditional statement in JavaScript is if.

For example:

if (age >= 18) {
    console.log("You can enter.");
}

The code inside the if block runs only when the condition is true.

Here, if age is 18 or greater, the message is printed.

Conditions usually produce Boolean values:

10 > 5

This produces true.

10 < 5

This produces false.

The if statement uses this result to decide whether its code should run.

You can also use variables in conditions:

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
}

Because isLoggedIn is true, the code inside the if block runs.

You can use else when you want to run different code when the condition is false.

For example:

const age = 16;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

If age is 18 or greater, the first block runs.

Otherwise, the else block runs.

You can also use else if when there are multiple conditions to check.

For example:

const score = 75;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
}

JavaScript checks the conditions from top to bottom.

Once it finds a true condition, its block runs and the remaining conditions are skipped.

The order of conditions matters.

For example:

const age = 20;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
}

Because age is 20, the first condition is true, so JavaScript does not check the else if block.

Conditions can also use comparison operators:

const passwordLength = 8;

if (passwordLength >= 8) {
    console.log("Password is long enough.");
}

Logical operators can be used when a condition depends on more than one requirement:

const age = 25;
const hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("You can enter.");
}

The code runs only when both conditions are true.

A common beginner mistake is forgetting that the condition must be inside parentheses:

if (age >= 18) {
    console.log("Adult");
}

Another common mistake is using = instead of a comparison operator.

For example:

if (age = 18) {
    console.log("Adult");
}

The = operator assigns a value. It is not used to compare whether two values are equal.

For equality comparisons, use ===.

Remember:

if → run code when a condition is true
else → run code when the if condition is false
else if → check another condition
conditions → usually produce true or false

Conditional statements are one of the main ways JavaScript programs make decisions.`,

            fa: `دستورهای شرطی به برنامه اجازه می‌دهند بر اساس درست یا نادرست بودن یک شرط تصمیم‌گیری کند.

ساده‌ترین دستور شرطی در JavaScript، دستور if است.

برای مثال:

if (age >= 18) {
    console.log("You can enter.");
}

کد داخل بلوک if فقط زمانی اجرا می‌شود که شرط درست باشد.

در این مثال، اگر age بزرگ‌تر یا مساوی 18 باشد، پیام نمایش داده می‌شود.

شرط‌ها معمولاً مقدار Boolean تولید می‌کنند:

10 > 5

این عبارت مقدار true تولید می‌کند.

10 < 5

این عبارت مقدار false تولید می‌کند.

دستور if از این نتیجه استفاده می‌کند تا مشخص کند کد آن باید اجرا شود یا نه.

می‌توان از متغیرها نیز در شرط‌ها استفاده کرد:

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
}

چون مقدار isLoggedIn برابر true است، کد داخل بلوک if اجرا می‌شود.

اگر بخواهید زمانی که شرط نادرست است کد متفاوتی اجرا شود، می‌توانید از else استفاده کنید.

برای مثال:

const age = 16;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

اگر age بزرگ‌تر یا مساوی 18 باشد، بلوک اول اجرا می‌شود.

در غیر این صورت، بلوک else اجرا می‌شود.

زمانی که چند شرط مختلف دارید، می‌توانید از else if استفاده کنید.

برای مثال:

const score = 75;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
}

JavaScript شرط‌ها را از بالا به پایین بررسی می‌کند.

به محض اینکه یک شرط درست پیدا شود، کد همان بلوک اجرا می‌شود و شرط‌های باقی‌مانده بررسی نمی‌شوند.

ترتیب شرط‌ها اهمیت دارد.

برای مثال:

const age = 20;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
}

چون age برابر 20 است، شرط اول درست است؛ بنابراین JavaScript بلوک else if را بررسی نمی‌کند.

می‌توان در شرط‌ها از عملگرهای مقایسه نیز استفاده کرد:

const passwordLength = 8;

if (passwordLength >= 8) {
    console.log("Password is long enough.");
}

وقتی یک شرط به بیشتر از یک نیاز وابسته باشد، می‌توان از عملگرهای منطقی استفاده کرد:

const age = 25;
const hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("You can enter.");
}

این کد فقط زمانی اجرا می‌شود که هر دو شرط درست باشند.

یک اشتباه رایج در بین افراد مبتدی، فراموش کردن پرانتزهای شرط است:

if (age >= 18) {
    console.log("Adult");
}

اشتباه رایج دیگر، استفاده از = به جای عملگر مقایسه است.

برای مثال:

if (age = 18) {
    console.log("Adult");
}

عملگر = برای اختصاص دادن مقدار استفاده می‌شود و برای مقایسه برابر بودن دو مقدار نیست.

برای مقایسه برابر بودن مقدارها از === استفاده کنید.

به یاد داشته باشید:

if → اجرای کد زمانی که شرط درست است
else → اجرای کد زمانی که شرط if نادرست است
else if → بررسی یک شرط دیگر
شرط‌ها → معمولاً مقدار true یا false تولید می‌کنند

دستورهای شرطی یکی از روش‌های اصلی تصمیم‌گیری در برنامه‌های JavaScript هستند.`
        }
    },

    {
        id: 13,
        title: "JavaScript for Loops",
        faTitle: "حلقه for در JavaScript",
        content: {
            en: `A for loop allows you to repeat a block of code multiple times.

Loops are useful when you want to perform the same action repeatedly without writing the same code again and again.

For example:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

This loop prints:

0
1
2
3
4

A for loop has three main parts:

for (initialization; condition; update)

The initialization runs once before the loop starts.

For example:

let i = 0

This creates the variable i and gives it an initial value of 0.

The condition is checked before each iteration.

For example:

i < 5

As long as this condition is true, the loop continues running.

The update runs after each iteration.

For example:

i++

This increases i by 1 after each iteration.

The loop therefore works like this:

Start with i = 0.
Check if i < 5.
Run the code inside the loop.
Increase i by 1.
Check the condition again.
Continue until the condition becomes false.

You can use a different starting value:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

This prints:

1
2
3
4
5

The condition determines how many times the loop runs.

You can also count by different amounts.

For example:

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

This prints:

0
2
4
6
8

Here, i increases by 2 after each iteration.

A for loop can also be used to repeat an action a specific number of times.

For example:

for (let i = 0; i < 3; i++) {
    console.log("Hello");
}

This prints Hello three times.

The variable used to control a loop is often called a loop counter.

The name i is commonly used, but you can use another variable name:

for (let count = 0; count < 3; count++) {
    console.log(count);
}

A common beginner mistake is forgetting to update the loop variable.

For example, the loop must eventually make its condition false.

Another common mistake is using the wrong condition, which can cause the loop to run too many or too few times.

Remember:

initialization → where the loop starts
condition → when the loop continues
update → how the loop changes

A for loop is one of the most common tools for repeating code in JavaScript.`,

            fa: `حلقه for به شما اجازه می‌دهد یک بلوک از کد را چندین بار تکرار کنید.

حلقه‌ها زمانی کاربرد دارند که بخواهید یک کار مشابه را چندین بار انجام دهید، بدون اینکه همان کد را دوباره و دوباره بنویسید.

برای مثال:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

این حلقه اعداد زیر را نمایش می‌دهد:

0
1
2
3
4

حلقه for سه بخش اصلی دارد:

for (initialization; condition; update)

بخش initialization یک بار و قبل از شروع حلقه اجرا می‌شود.

برای مثال:

let i = 0

در این بخش متغیر i ساخته می‌شود و مقدار اولیه آن 0 قرار می‌گیرد.

بخش condition قبل از هر بار اجرای حلقه بررسی می‌شود.

برای مثال:

i < 5

تا زمانی که این شرط درست باشد، اجرای حلقه ادامه پیدا می‌کند.

بخش update بعد از هر بار اجرای حلقه انجام می‌شود.

برای مثال:

i++

این عبارت بعد از هر بار اجرا مقدار i را یک واحد افزایش می‌دهد.

بنابراین روند حلقه به این شکل است:

ابتدا i برابر 0 قرار می‌گیرد.
بررسی می‌شود که آیا i از 5 کوچک‌تر است.
کد داخل حلقه اجرا می‌شود.
مقدار i یک واحد افزایش پیدا می‌کند.
شرط دوباره بررسی می‌شود.
این روند تا زمانی ادامه پیدا می‌کند که شرط نادرست شود.

می‌توان مقدار شروع متفاوتی برای حلقه تعیین کرد:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

این حلقه اعداد زیر را نمایش می‌دهد:

1
2
3
4
5

شرط مشخص می‌کند که حلقه چند بار اجرا شود.

می‌توان مقدار افزایش را نیز تغییر داد.

برای مثال:

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

این حلقه اعداد زیر را نمایش می‌دهد:

0
2
4
6
8

در این مثال مقدار i بعد از هر بار اجرا، 2 واحد افزایش پیدا می‌کند.

حلقه for می‌تواند برای تکرار یک کار به تعداد مشخص نیز استفاده شود.

برای مثال:

for (let i = 0; i < 3; i++) {
    console.log("Hello");
}

این کد Hello را سه بار نمایش می‌دهد.

متغیری که برای کنترل حلقه استفاده می‌شود معمولاً loop counter نامیده می‌شود.

نام i بسیار رایج است، اما می‌توان از نام دیگری برای این متغیر استفاده کرد:

for (let count = 0; count < 3; count++) {
    console.log(count);
}

یک اشتباه رایج در بین افراد مبتدی، فراموش کردن تغییر دادن متغیر کنترل حلقه است.

حلقه باید در نهایت به نقطه‌ای برسد که شرط آن نادرست شود.

اشتباه رایج دیگر، انتخاب شرط اشتباه است که می‌تواند باعث شود حلقه تعداد دفعات بیشتری یا کمتری از حد موردنظر اجرا شود.

به یاد داشته باشید:

initialization → نقطه شروع حلقه
condition → زمانی که حلقه ادامه پیدا می‌کند
update → نحوه تغییر مقدار متغیر

حلقه for یکی از رایج‌ترین ابزارها برای تکرار کد در JavaScript است.`
        }
    },

    {
        id: 14,
        title: "JavaScript while and do...while Loops",
        faTitle: "حلقه‌های while و do...while در JavaScript",
        content: {
            en: `The while loop repeats a block of code as long as a condition is true.

It is useful when you want to keep repeating an action while a particular condition remains true.

For example:

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

This prints:

0
1
2
3
4

The condition is checked before each iteration.

The loop continues while:

count < 5

is true.

Once count becomes 5, the condition becomes false and the loop stops.

A while loop usually has three important parts:

1. A variable that controls the loop
2. A condition that determines whether the loop continues
3. An update that eventually makes the condition false

For example:

let count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

The value of count changes after each iteration, allowing the loop to eventually stop.

A common beginner mistake is forgetting to update the control variable:

let count = 0;

while (count < 3) {
    console.log(count);
}

Because count never changes, the condition always remains true and the loop never stops.

The do...while loop is similar to while, but it checks the condition after running the code.

For example:

let count = 0;

do {
    console.log(count);
    count++;
} while (count < 3);

This prints:

0
1
2

The important difference is that a do...while loop always runs its code at least once.

For example:

let count = 10;

do {
    console.log(count);
} while (count < 5);

Even though count < 5 is false, the code inside the do block runs once before the condition is checked.

Compare this with a while loop:

let count = 10;

while (count < 5) {
    console.log(count);
}

Here, nothing is printed because the condition is false before the first iteration.

So the main difference is:

while → checks the condition before running
do...while → runs once, then checks the condition

Both loops can be used when the number of repetitions depends on a condition.

A for loop is often convenient when you know how a counter should start, when it should stop, and how it should change.

A while loop can be useful when the condition itself is the main thing controlling the repetition.

Remember:

while → check first, then run
do...while → run first, then check

When using either loop, make sure the condition can eventually become false so the loop can stop.`,

            fa: `حلقه while یک بلوک از کد را تا زمانی تکرار می‌کند که یک شرط درست باشد.

این حلقه زمانی کاربرد دارد که بخواهید یک کار را تا زمانی ادامه دهید که یک شرط مشخص همچنان درست باشد.

برای مثال:

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

این کد اعداد زیر را نمایش می‌دهد:

0
1
2
3
4

شرط قبل از هر بار اجرای حلقه بررسی می‌شود.

حلقه تا زمانی ادامه پیدا می‌کند که:

count < 5

درست باشد.

وقتی count به 5 برسد، شرط نادرست می‌شود و حلقه متوقف می‌شود.

یک حلقه while معمولاً سه بخش مهم دارد:

1. متغیری که حلقه را کنترل می‌کند
2. شرطی که مشخص می‌کند حلقه ادامه پیدا کند یا نه
3. به‌روزرسانی‌ای که در نهایت باعث نادرست شدن شرط می‌شود

برای مثال:

let count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

مقدار count بعد از هر بار اجرای حلقه تغییر می‌کند و در نهایت باعث توقف حلقه می‌شود.

یک اشتباه رایج در بین افراد مبتدی، فراموش کردن به‌روزرسانی متغیر کنترل حلقه است:

let count = 0;

while (count < 3) {
    console.log(count);
}

چون مقدار count هیچ‌وقت تغییر نمی‌کند، شرط همیشه درست باقی می‌ماند و حلقه متوقف نمی‌شود.

حلقه do...while شبیه while است، اما شرط را بعد از اجرای کد بررسی می‌کند.

برای مثال:

let count = 0;

do {
    console.log(count);
    count++;
} while (count < 3);

این کد اعداد زیر را نمایش می‌دهد:

0
1
2

تفاوت مهم این است که حلقه do...while کد داخل خود را حداقل یک بار اجرا می‌کند.

برای مثال:

let count = 10;

do {
    console.log(count);
} while (count < 5);

حتی اگر count < 5 نادرست باشد، کد داخل بخش do یک بار اجرا می‌شود و سپس شرط بررسی می‌شود.

این موضوع را با حلقه while مقایسه کنید:

let count = 10;

while (count < 5) {
    console.log(count);
}

در اینجا چیزی نمایش داده نمی‌شود، زیرا شرط قبل از اولین اجرای حلقه نادرست است.

بنابراین تفاوت اصلی این دو حلقه این است:

while → ابتدا شرط را بررسی می‌کند، سپس اجرا می‌شود
do...while → ابتدا اجرا می‌شود، سپس شرط را بررسی می‌کند

هر دو حلقه زمانی کاربرد دارند که تعداد تکرارها به یک شرط وابسته باشد.

حلقه for معمولاً زمانی مناسب است که بدانید شمارنده از کجا شروع شود، چه زمانی متوقف شود و چگونه تغییر کند.

حلقه while زمانی می‌تواند مناسب باشد که خود شرط عامل اصلی کنترل تکرار باشد.

به یاد داشته باشید:

while → ابتدا بررسی، سپس اجرا
do...while → ابتدا اجرا، سپس بررسی

هنگام استفاده از هر دو حلقه، مطمئن شوید که شرط در نهایت می‌تواند نادرست شود تا حلقه متوقف شود.`
        }
    },

    {
        id: 15,
        title: "JavaScript break and continue",
        faTitle: "دستورهای break و continue در JavaScript",
        content: {
            en: `The break and continue statements control how a loop runs.

The break statement immediately stops the loop.

For example:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

This prints:

0
1
2

When i becomes 3, the break statement stops the loop completely.

The remaining iterations are not executed.

The break statement can be used when you have found what you were looking for or when you no longer need the loop to continue.

For example:

let count = 0;

while (count < 10) {
    if (count === 5) {
        break;
    }

    console.log(count);
    count++;
}

This loop stops when count reaches 5.

The continue statement works differently.

Instead of stopping the entire loop, continue skips the current iteration and moves to the next one.

For example:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}

This prints:

0
1
3
4

When i becomes 2, continue skips the rest of that iteration.

The loop then continues with the next value.

The important difference is:

break → stops the entire loop
continue → skips the current iteration

You can use break inside a while loop:

let count = 0;

while (count < 5) {
    if (count === 3) {
        break;
    }

    console.log(count);
    count++;
}

The loop stops when count reaches 3.

You can also use continue inside a while loop:

let count = 0;

while (count < 5) {
    count++;

    if (count === 3) {
        continue;
    }

    console.log(count);
}

This prints:

1
2
4
5

The continue statement skips the iteration where count is 3.

When using continue in a while loop, make sure the control variable is updated before continue can skip to the next iteration.

Otherwise, the loop may never reach a point where its condition becomes false.

A common beginner mistake is confusing break and continue.

For example:

break

means:

"Stop the loop completely."

continue

means:

"Skip this iteration and keep going."

Another common mistake is placing continue before updating a while loop's control variable.

The update must happen before continue if the loop depends on that variable to eventually stop.

Remember:

break → exit the loop
continue → skip one iteration

These statements give you more control over how loops behave and are especially useful when a loop needs to handle certain cases differently.`,

            fa: `دستورهای break و continue برای کنترل نحوه اجرای حلقه‌ها استفاده می‌شوند.

دستور break بلافاصله حلقه را به‌طور کامل متوقف می‌کند.

برای مثال:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

این کد اعداد زیر را نمایش می‌دهد:

0
1
2

وقتی مقدار i به 3 برسد، دستور break حلقه را به‌طور کامل متوقف می‌کند.

تکرارهای باقی‌مانده دیگر اجرا نمی‌شوند.

دستور break زمانی کاربرد دارد که چیزی را که به دنبال آن بوده‌اید پیدا کرده باشید یا دیگر نیازی به ادامه حلقه نداشته باشید.

برای مثال:

let count = 0;

while (count < 10) {
    if (count === 5) {
        break;
    }

    console.log(count);
    count++;
}

این حلقه زمانی متوقف می‌شود که count به 5 برسد.

دستور continue عملکرد متفاوتی دارد.

این دستور کل حلقه را متوقف نمی‌کند، بلکه تکرار فعلی را رد می‌کند و به تکرار بعدی می‌رود.

برای مثال:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}

این کد اعداد زیر را نمایش می‌دهد:

0
1
3
4

وقتی مقدار i برابر 2 شود، دستور continue باقی کدهای همان تکرار را رد می‌کند.

سپس حلقه با مقدار بعدی ادامه پیدا می‌کند.

تفاوت اصلی این دو دستور این است:

break → کل حلقه را متوقف می‌کند
continue → فقط تکرار فعلی را رد می‌کند

می‌توان از break داخل حلقه while نیز استفاده کرد:

let count = 0;

while (count < 5) {
    if (count === 3) {
        break;
    }

    console.log(count);
    count++;
}

حلقه زمانی که count به 3 برسد متوقف می‌شود.

همچنین می‌توان از continue داخل حلقه while استفاده کرد:

let count = 0;

while (count < 5) {
    count++;

    if (count === 3) {
        continue;
    }

    console.log(count);
}

این کد اعداد زیر را نمایش می‌دهد:

1
2
4
5

دستور continue تکراری را که count برابر 3 است رد می‌کند.

هنگام استفاده از continue در حلقه while، باید مطمئن شوید که متغیر کنترل‌کننده قبل از رسیدن به continue به‌روزرسانی شده است.

در غیر این صورت ممکن است حلقه هیچ‌وقت به نقطه‌ای نرسد که شرط آن نادرست شود.

یک اشتباه رایج در بین افراد مبتدی، اشتباه گرفتن break و continue است.

برای مثال:

break

یعنی:

«حلقه را به‌طور کامل متوقف کن.»

continue

یعنی:

«این تکرار را رد کن و به ادامه حلقه برو.»

اشتباه رایج دیگر، قرار دادن continue قبل از به‌روزرسانی متغیر کنترل‌کننده در یک حلقه while است.

اگر حلقه برای متوقف شدن به آن متغیر وابسته باشد، باید قبل از continue مقدار متغیر به‌روزرسانی شود.

به یاد داشته باشید:

break → خروج از حلقه
continue → رد کردن یک تکرار

این دستورها کنترل بیشتری روی رفتار حلقه‌ها به شما می‌دهند و زمانی مفید هستند که حلقه باید با بعضی حالت‌ها به شکل متفاوتی برخورد کند.`
        }
    },

















    {
        id: 16,
        title: "What Functions Are",
        faTitle: "تابع چیست؟",
        content: {
            en: `A function is a reusable block of code designed to perform a specific task.

Functions are one of the most important parts of JavaScript because they allow you to organize your code into separate, reusable pieces.

Why do we need functions?

Imagine you need to print the same welcome message in several places:

console.log("Welcome to the JavaScript Bot!");
console.log("Welcome to the JavaScript Bot!");
console.log("Welcome to the JavaScript Bot!");

This works, but repeating the same code makes programs harder to maintain.

A function lets you write the code once and reuse it:

function showWelcomeMessage() {
    console.log("Welcome to the JavaScript Bot!");
}

Now you can run that code whenever you need it:

showWelcomeMessage();

showWelcomeMessage();

Each time you write showWelcomeMessage(), JavaScript runs the code inside the function.

This is called calling a function.

Function syntax

A basic function has three important parts:

function functionName() {
    // code to run
}

The function keyword tells JavaScript that you are creating a function.

The function name identifies the function.

The parentheses () come after the name.

The curly braces {} contain the code that belongs to the function.

For example:

function sayHello() {
    console.log("Hello!");
}

Creating a function does not execute it.

You have to call it:

sayHello();

Example 1:

function showMessage() {
    console.log("Learning JavaScript!");
}

showMessage();

The function is created first, and then it is called so the message is displayed.

Example 2:

function startGame() {
    console.log("Game started!");
}

startGame();
startGame();

The function can be called multiple times. Each call runs the code inside the function again.

Example 3:

function calculateScore() {
    let score = 10;
    score += 5;
    console.log(score);
}

calculateScore();

The function can contain variables and other JavaScript statements.

Example 4:

function showProfile() {
    let username = "Ali";
    let age = 25;

    console.log(username);
    console.log(age);
}

showProfile();

The main benefit is that the code inside the function is grouped under a meaningful name.

Functions can become much more powerful when they receive information and return results. You will learn about parameters, arguments, and return values in the following lessons.

Common beginner mistake:

A very common mistake is thinking that defining a function automatically runs it.

For example:

function sayHello() {
    console.log("Hello!");
}

Nothing is printed yet.

The function must be called:

sayHello();

Mini mental check:

Look at this code:

function openMenu() {
    console.log("Menu opened!");
}

openMenu();

Ask yourself:

1. Which line creates the function?
2. Which line calls the function?
3. How many times will "Menu opened!" be printed?

Quick rule to remember:

function → creates a function
functionName() → calls the function
{} → contains the function's code

A function lets you write a task once and reuse it whenever you need it.`,
            fa: `تابع یا Function یک بخش قابل استفاده مجدد از کد است که برای انجام یک کار مشخص ساخته می‌شود.

توابع یکی از مهم‌ترین بخش‌های JavaScript هستند، زیرا به شما اجازه می‌دهند کد خود را به بخش‌های جداگانه و قابل استفاده مجدد تقسیم کنید.

چرا به تابع نیاز داریم؟

فرض کنید می‌خواهید یک پیام خوش‌آمدگویی را در چند قسمت برنامه نمایش دهید:

console.log("Welcome to the JavaScript Bot!");
console.log("Welcome to the JavaScript Bot!");
console.log("Welcome to the JavaScript Bot!");

این روش کار می‌کند، اما تکرار کردن یک کد یکسان باعث می‌شود نگهداری برنامه سخت‌تر شود.

تابع به شما اجازه می‌دهد کد را یک بار بنویسید و دوباره از آن استفاده کنید:

function showWelcomeMessage() {
    console.log("Welcome to the JavaScript Bot!");
}

حالا می‌توانید هر زمان که نیاز داشتید آن کد را اجرا کنید:

showWelcomeMessage();

showWelcomeMessage();

هر بار که showWelcomeMessage() را می‌نویسید، JavaScript کد داخل تابع را اجرا می‌کند.

به این کار فراخوانی تابع یا Calling a Function گفته می‌شود.

ساختار تابع

یک تابع ساده سه بخش مهم دارد:

function functionName() {
    // code to run
}

کلمه function به JavaScript می‌گوید که در حال ساختن یک تابع هستید.

نام تابع مشخص می‌کند که این تابع چه نامی دارد.

پرانتزهای () بعد از نام تابع قرار می‌گیرند.

آکولادهای {} شامل کدی هستند که متعلق به تابع است.

برای مثال:

function sayHello() {
    console.log("Hello!");
}

ساختن یک تابع باعث اجرای خودکار آن نمی‌شود.

برای اجرای آن باید تابع را فراخوانی کنید:

sayHello();

مثال ۱:

function showMessage() {
    console.log("Learning JavaScript!");
}

showMessage();

ابتدا تابع ساخته می‌شود و سپس با فراخوانی آن، پیام نمایش داده می‌شود.

مثال ۲:

function startGame() {
    console.log("Game started!");
}

startGame();
startGame();

می‌توان یک تابع را چندین بار فراخوانی کرد. هر بار که تابع فراخوانی شود، کد داخل آن دوباره اجرا می‌شود.

مثال ۳:

function calculateScore() {
    let score = 10;
    score += 5;
    console.log(score);
}

calculateScore();

یک تابع می‌تواند شامل متغیرها و دستورهای مختلف JavaScript باشد.

مثال ۴:

function showProfile() {
    let username = "Ali";
    let age = 25;

    console.log(username);
    console.log(age);
}

showProfile();

مزیت اصلی این است که کد مربوط به یک کار مشخص را می‌توان زیر یک نام معنادار قرار داد.

توابع در ادامه می‌توانند بسیار قدرتمندتر شوند و اطلاعات دریافت کنند و نتیجه برگردانند. پارامترها، آرگومان‌ها و مقدار بازگشتی را در درس‌های بعدی یاد می‌گیرید.

اشتباه رایج مبتدی‌ها:

یک اشتباه رایج این است که فکر کنیم تعریف کردن یک تابع باعث اجرای خودکار آن می‌شود.

برای مثال:

function sayHello() {
    console.log("Hello!");
}

در این مرحله چیزی نمایش داده نمی‌شود.

برای اجرای تابع باید آن را فراخوانی کنید:

sayHello();

تمرین ذهنی:

به کد زیر نگاه کنید:

function openMenu() {
    console.log("Menu opened!");
}

openMenu();

از خودتان بپرسید:

۱. کدام خط تابع را ایجاد می‌کند؟
۲. کدام خط تابع را فراخوانی می‌کند؟
۳. عبارت "Menu opened!" چند بار نمایش داده می‌شود؟

قانون ساده برای به خاطر سپردن:

function → ساختن تابع
functionName() → فراخوانی تابع
{} → کد داخل تابع

تابع به شما اجازه می‌دهد یک کار را یک بار بنویسید و هر زمان که نیاز داشتید دوباره از آن استفاده کنید.`
        }
    },

    {
        id: 17,
        title: "Function Declarations & Calling",
        faTitle: "تعریف و فراخوانی توابع",
        content: {
            en: `A function declaration is the way you define a named function in JavaScript.

You already learned that a function is a reusable block of code. Now it is important to understand the two separate actions involved:

1. Declaring a function
2. Calling a function

Declaring a function means creating the function and defining what it should do.

For example:

function greet() {
    console.log("Hello!");
}

This creates a function named greet.

However, the code inside the function does not run yet.

To execute the function, you need to call it:

greet();

Calling a function means writing its name followed by parentheses.

The parentheses are important because they tell JavaScript that you want to execute the function.

Basic syntax:

function functionName() {
    // code
}

functionName();

The first part declares the function.

The second part calls the function.

Example 1:

function sayHello() {
    console.log("Hello!");
}

sayHello();

The function is declared first and then called once, so "Hello!" is printed once.

Example 2:

function showMessage() {
    console.log("Welcome!");
}

showMessage();
showMessage();

The same function can be called multiple times. Each call executes the function's code again.

Example 3:

function startLesson() {
    console.log("Lesson started!");
}

startLesson();

console.log("Keep learning!");

JavaScript executes the statements in order. The function is declared first, then it is called, and then the next statement runs.

Example 4:

function showScore() {
    console.log(100);
}

showScore();
showScore();
showScore();

The function is declared only once, but it is called three times. Therefore, the code inside the function runs three times.

Why separate declaration and calling?

This separation makes functions reusable.

You can define a task once and decide exactly when you want that task to happen.

For example:

function openMenu() {
    console.log("Menu opened!");
}

openMenu();

console.log("User selected a menu item.");

openMenu();

The same function can be used whenever the program needs to open the menu.

Common beginner mistake:

A common mistake is confusing the function declaration with the function call.

This declares a function:

function greet() {
    console.log("Hello!");
}

This calls the function:

greet();

Another common mistake is forgetting the parentheses when calling a function:

greet;

Writing greet by itself does not call the function.

Mini mental check:

Look at this code:

function startGame() {
    console.log("Game started!");
}

startGame();
startGame();

Ask yourself:

1. How many times is the function declared?
2. How many times is the function called?
3. How many times will "Game started!" be printed?

Quick rule to remember:

Function declaration → creates and defines the function
Function call → executes the function
functionName() → calls the function

Declare once. Call whenever you need it.`,
            fa: `تعریف تابع یا Function Declaration روشی است که با آن یک تابع نام‌دار را در JavaScript ایجاد می‌کنید.

در درس قبل یاد گرفتید که تابع یک بخش قابل استفاده مجدد از کد است. حالا مهم است دو عمل جداگانه مربوط به تابع را بشناسید:

۱. تعریف تابع
۲. فراخوانی تابع

تعریف تابع یعنی ساختن تابع و مشخص کردن کاری که باید انجام دهد.

برای مثال:

function greet() {
    console.log("Hello!");
}

این کد یک تابع با نام greet ایجاد می‌کند.

اما کدی که داخل تابع قرار دارد هنوز اجرا نمی‌شود.

برای اجرای تابع باید آن را فراخوانی کنید:

greet();

فراخوانی تابع یعنی نوشتن نام تابع به همراه پرانتز.

پرانتزها مهم هستند، زیرا به JavaScript می‌گویند که می‌خواهید تابع را اجرا کنید.

ساختار پایه:

function functionName() {
    // code
}

functionName();

بخش اول تابع را تعریف می‌کند.

بخش دوم تابع را فراخوانی می‌کند.

مثال ۱:

function sayHello() {
    console.log("Hello!");
}

sayHello();

تابع ابتدا تعریف می‌شود و سپس یک بار فراخوانی می‌شود، بنابراین "Hello!" یک بار نمایش داده می‌شود.

مثال ۲:

function showMessage() {
    console.log("Welcome!");
}

showMessage();
showMessage();

یک تابع را می‌توان چندین بار فراخوانی کرد. هر بار که تابع فراخوانی شود، کد داخل آن دوباره اجرا می‌شود.

مثال ۳:

function startLesson() {
    console.log("Lesson started!");
}

startLesson();

console.log("Keep learning!");

JavaScript دستورها را به ترتیب اجرا می‌کند. ابتدا تابع تعریف می‌شود، سپس فراخوانی می‌شود و بعد دستور بعدی اجرا می‌شود.

مثال ۴:

function showScore() {
    console.log(100);
}

showScore();
showScore();
showScore();

تابع فقط یک بار تعریف شده، اما سه بار فراخوانی شده است. بنابراین کد داخل تابع سه بار اجرا می‌شود.

چرا تعریف و فراخوانی تابع جدا هستند؟

این جداسازی باعث می‌شود توابع قابل استفاده مجدد باشند.

شما می‌توانید یک کار را یک بار تعریف کنید و سپس دقیقاً مشخص کنید که چه زمانی آن کار انجام شود.

برای مثال:

function openMenu() {
    console.log("Menu opened!");
}

openMenu();

console.log("User selected a menu item.");

openMenu();

همین تابع می‌تواند هر زمان که برنامه نیاز دارد منوی کاربر را باز کند.

اشتباه رایج مبتدی‌ها:

یک اشتباه رایج این است که تعریف تابع را با فراخوانی تابع اشتباه بگیریم.

این کد یک تابع را تعریف می‌کند:

function greet() {
    console.log("Hello!");
}

این کد تابع را فراخوانی می‌کند:

greet();

یک اشتباه رایج دیگر فراموش کردن پرانتز هنگام فراخوانی تابع است:

greet;

نوشتن خود نام تابع به‌تنهایی باعث فراخوانی آن نمی‌شود.

تمرین ذهنی:

به کد زیر نگاه کنید:

function startGame() {
    console.log("Game started!");
}

startGame();
startGame();

از خودتان بپرسید:

۱. تابع چند بار تعریف شده است؟
۲. تابع چند بار فراخوانی شده است؟
۳. عبارت "Game started!" چند بار نمایش داده می‌شود؟

قانون ساده برای به خاطر سپردن:

تعریف تابع → ایجاد و مشخص کردن تابع
فراخوانی تابع → اجرای تابع
functionName() → فراخوانی تابع

یک بار تعریف کن. هر زمان نیاز داشتی فراخوانی کن.`
        }
    },

    {
        id: 18,
        title: "Parameters & Arguments",
        faTitle: "پارامترها و آرگومان‌ها",
        content: {
            en: `Functions become much more useful when they can receive information.

Parameters and arguments allow you to send data into a function so the function can work with different values.

Why do we need parameters?

Imagine you want to greet different users.

Without parameters, you might need separate functions:

function greetAli() {
    console.log("Hello Ali!");
}

function greetSara() {
    console.log("Hello Sara!");
}

This works, but it creates unnecessary repetition.

A parameter allows one function to work with different values:

function greet(name) {
    console.log("Hello " + name + "!");
}

Here, name is a parameter.

When you call the function, you can provide a value:

greet("Ali");

The value "Ali" is an argument.

The difference is simple:

Parameter → the variable written in the function definition
Argument → the actual value passed when the function is called

For example:

function greet(name) {
    console.log("Hello " + name + "!");
}

greet("Ali");
greet("Sara");

The same function is used twice, but it receives a different argument each time.

The first call passes "Ali", so the function prints:

Hello Ali!

The second call passes "Sara", so it prints:

Hello Sara!

A function can have multiple parameters.

For example:

function addNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

addNumbers(10, 5);

Here, firstNumber and secondNumber are parameters.

The values 10 and 5 are arguments.

The function uses those values when it runs:

10 + 5

which produces:

15

You can pass different arguments each time:

addNumbers(10, 5);
addNumbers(20, 7);
addNumbers(100, 50);

The function does not need to change. Only the arguments change.

The order of arguments matters.

For example:

function introduce(name, age) {
    console.log(name);
    console.log(age);
}

introduce("Ali", 25);

The first argument goes into name, and the second argument goes into age.

If you change the order:

introduce(25, "Ali");

then 25 goes into name and "Ali" goes into age.

Common beginner mistake:

A common mistake is confusing parameters with arguments.

In this function:

function greet(name) {
    console.log("Hello " + name);
}

name is the parameter.

In this function call:

greet("Ali");

"Ali" is the argument.

Another common mistake is forgetting that the argument is assigned to the corresponding parameter based on position.

Mini mental check:

Look at this code:

function multiply(a, b) {
    console.log(a * b);
}

multiply(4, 5);

Ask yourself:

1. What are the parameters?
2. What are the arguments?
3. What value will be printed?

Quick rule to remember:

Parameter → placeholder inside the function
Argument → actual value passed to the function
Order matters → first argument goes to first parameter, second to second, and so on.`,
            fa: `توابع زمانی بسیار کاربردی‌تر می‌شوند که بتوانند اطلاعات دریافت کنند.

پارامترها و آرگومان‌ها به شما اجازه می‌دهند داده‌هایی را به تابع ارسال کنید تا تابع بتواند با مقدارهای مختلف کار کند.

چرا به پارامتر نیاز داریم؟

فرض کنید می‌خواهید به کاربران مختلف خوش‌آمد بگویید.

بدون پارامتر ممکن است مجبور شوید تابع‌های جداگانه‌ای بسازید:

function greetAli() {
    console.log("Hello Ali!");
}

function greetSara() {
    console.log("Hello Sara!");
}

این روش کار می‌کند، اما باعث تکرار غیرضروری کد می‌شود.

پارامتر به شما اجازه می‌دهد یک تابع با مقدارهای مختلف کار کند:

function greet(name) {
    console.log("Hello " + name + "!");
}

در اینجا name یک پارامتر است.

هنگام فراخوانی تابع می‌توانید یک مقدار به آن بدهید:

greet("Ali");

مقدار "Ali" یک آرگومان است.

تفاوت این دو ساده است:

Parameter → متغیری که هنگام تعریف تابع نوشته می‌شود
Argument → مقدار واقعی که هنگام فراخوانی تابع ارسال می‌شود

برای مثال:

function greet(name) {
    console.log("Hello " + name + "!");
}

greet("Ali");
greet("Sara");

همان تابع دو بار استفاده شده است، اما هر بار آرگومان متفاوتی دریافت می‌کند.

در فراخوانی اول مقدار "Ali" ارسال می‌شود، بنابراین تابع عبارت زیر را نمایش می‌دهد:

Hello Ali!

در فراخوانی دوم مقدار "Sara" ارسال می‌شود، بنابراین عبارت زیر نمایش داده می‌شود:

Hello Sara!

یک تابع می‌تواند چندین پارامتر داشته باشد.

برای مثال:

function addNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

addNumbers(10, 5);

در اینجا firstNumber و secondNumber پارامتر هستند.

مقدارهای 10 و 5 آرگومان هستند.

تابع هنگام اجرا از این مقدارها استفاده می‌کند:

10 + 5

که نتیجه آن برابر است با:

15

می‌توانید هر بار آرگومان‌های متفاوتی ارسال کنید:

addNumbers(10, 5);
addNumbers(20, 7);
addNumbers(100, 50);

لازم نیست خود تابع تغییر کند. فقط آرگومان‌ها تغییر می‌کنند.

ترتیب آرگومان‌ها مهم است.

برای مثال:

function introduce(name, age) {
    console.log(name);
    console.log(age);
}

introduce("Ali", 25);

اولین آرگومان وارد name می‌شود و دومین آرگومان وارد age می‌شود.

اگر ترتیب را تغییر دهید:

introduce(25, "Ali");

در این حالت 25 وارد name می‌شود و "Ali" وارد age می‌شود.

اشتباه رایج مبتدی‌ها:

یک اشتباه رایج این است که پارامترها را با آرگومان‌ها اشتباه بگیریم.

در این تابع:

function greet(name) {
    console.log("Hello " + name);
}

name پارامتر است.

در این فراخوانی:

greet("Ali");

"Ali" آرگومان است.

یک اشتباه رایج دیگر این است که فراموش کنیم آرگومان‌ها بر اساس جایگاهشان به پارامترهای مربوطه اختصاص داده می‌شوند.

تمرین ذهنی:

به کد زیر نگاه کنید:

function multiply(a, b) {
    console.log(a * b);
}

multiply(4, 5);

از خودتان بپرسید:

۱. پارامترها کدام هستند؟
۲. آرگومان‌ها کدام هستند؟
۳. چه مقداری نمایش داده می‌شود؟

قانون ساده برای به خاطر سپردن:

Parameter → جای خالی داخل تابع
Argument → مقدار واقعی ارسال‌شده به تابع
ترتیب مهم است → آرگومان اول وارد پارامتر اول، آرگومان دوم وارد پارامتر دوم و به همین ترتیب می‌شود.`
        }
    },

    {
        id: 19,
        title: "Return Values",
        faTitle: "مقدارهای بازگشتی",
        content: {
            en: `A function can do more than just perform an action. It can also produce a value and send that value back to the part of the program that called it.

This is called returning a value.

Why do we need return values?

Imagine a function that adds two numbers:

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(10, 5);

This displays 15, but the function does not give the value 15 back to the rest of the program.

If you want to use the result later, the function can return it:

function addNumbers(a, b) {
    return a + b;
}

Now the function produces a value that can be stored in a variable:

let result = addNumbers(10, 5);

console.log(result);

The function returns 15, so result stores 15.

The return keyword sends a value back from the function.

Basic syntax:

function functionName() {
    return value;
}

When JavaScript reaches return, the function immediately stops running and sends the value back.

For example:

function getScore() {
    return 100;
}

let score = getScore();

console.log(score);

The function returns 100, and that value is stored in score.

A returned value can also be used directly in an expression:

function add(a, b) {
    return a + b;
}

console.log(add(10, 5) + 5);

The function returns 15, and then JavaScript adds 5 to it, producing 20.

Return values are different from console.log.

console.log() displays a value.

return sends a value back to the code that called the function.

For example:

function add(a, b) {
    console.log(a + b);
}

let result = add(10, 5);

Here, 15 is displayed, but result does not receive the value from console.log.

Compare that with:

function add(a, b) {
    return a + b;
}

let result = add(10, 5);

Now result contains 15 and can be used later.

A function can return the result of a calculation:

function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(20, 3);

console.log(total);

The function returns 60, so total contains 60.

A function can also return a String:

function getUsername() {
    return "Ali";
}

let username = getUsername();

console.log(username);

The returned String is stored in username.

A function can return a Boolean as well:

function isAdult(age) {
    return age >= 18;
}

let result = isAdult(20);

console.log(result);

The function returns true because 20 is greater than or equal to 18.

Common beginner mistake:

A common mistake is confusing return with console.log.

return does not mean "display this value."

It sends the value back so the program can use it.

Another important rule is that code after return inside the same function does not run:

function test() {
    return 10;
    console.log("Hello!");
}

The console.log statement is never reached because the function has already returned.

Mini mental check:

Look at this code:

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);

Ask yourself:

1. What value does the function return?
2. What value is stored in result?
3. Can result be used later in another calculation?

Quick rule to remember:

console.log() → displays a value
return → sends a value back
return also → immediately ends the function

A return value makes a function's result reusable.`,
            fa: `تابع می‌تواند کاری بیشتر از فقط اجرای یک عمل انجام دهد. یک تابع می‌تواند یک مقدار تولید کند و آن مقدار را به بخشی از برنامه که تابع را فراخوانی کرده برگرداند.

به این کار برگرداندن مقدار یا Returning a Value گفته می‌شود.

چرا به مقدار بازگشتی نیاز داریم؟

فرض کنید تابعی دو عدد را با هم جمع می‌کند:

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(10, 5);

این کد مقدار 15 را نمایش می‌دهد، اما تابع مقدار 15 را در اختیار بخش‌های دیگر برنامه قرار نمی‌دهد.

اگر بخواهید بعداً از نتیجه استفاده کنید، تابع می‌تواند آن را برگرداند:

function addNumbers(a, b) {
    return a + b;
}

حالا تابع مقداری تولید می‌کند که می‌توان آن را داخل یک متغیر ذخیره کرد:

let result = addNumbers(10, 5);

console.log(result);

تابع مقدار 15 را برمی‌گرداند، بنابراین result مقدار 15 را ذخیره می‌کند.

کلمه کلیدی return یک مقدار را از تابع به کدی که آن را فراخوانی کرده برمی‌گرداند.

ساختار پایه:

function functionName() {
    return value;
}

وقتی JavaScript به return می‌رسد، اجرای تابع را متوقف می‌کند و مقدار را برمی‌گرداند.

برای مثال:

function getScore() {
    return 100;
}

let score = getScore();

console.log(score);

تابع مقدار 100 را برمی‌گرداند و این مقدار داخل score ذخیره می‌شود.

یک مقدار بازگشتی را می‌توان مستقیماً در یک عبارت نیز استفاده کرد:

function add(a, b) {
    return a + b;
}

console.log(add(10, 5) + 5);

تابع مقدار 15 را برمی‌گرداند و سپس JavaScript عدد 5 را به آن اضافه می‌کند و نتیجه 20 می‌شود.

مقدار بازگشتی با console.log تفاوت دارد.

console.log() یک مقدار را نمایش می‌دهد.

return یک مقدار را به کدی که تابع را فراخوانی کرده برمی‌گرداند.

برای مثال:

function add(a, b) {
    console.log(a + b);
}

let result = add(10, 5);

در این حالت 15 نمایش داده می‌شود، اما result مقدار حاصل از console.log را دریافت نمی‌کند.

در مقابل:

function add(a, b) {
    return a + b;
}

let result = add(10, 5);

حالا result مقدار 15 را دارد و می‌توان بعداً از آن استفاده کرد.

یک تابع می‌تواند نتیجه یک محاسبه را برگرداند:

function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(20, 3);

console.log(total);

تابع مقدار 60 را برمی‌گرداند، بنابراین total مقدار 60 را ذخیره می‌کند.

یک تابع می‌تواند یک String نیز برگرداند:

function getUsername() {
    return "Ali";
}

let username = getUsername();

console.log(username);

رشته‌ای که تابع برگردانده شده است داخل username ذخیره می‌شود.

یک تابع حتی می‌تواند مقدار Boolean برگرداند:

function isAdult(age) {
    return age >= 18;
}

let result = isAdult(20);

console.log(result);

تابع مقدار true را برمی‌گرداند زیرا 20 بزرگ‌تر یا مساوی 18 است.

اشتباه رایج مبتدی‌ها:

یک اشتباه رایج این است که return را با console.log اشتباه بگیریم.

return به معنی «این مقدار را نمایش بده» نیست.

return مقدار را برمی‌گرداند تا برنامه بتواند از آن استفاده کند.

یک قانون مهم دیگر این است که کد بعد از return در همان تابع اجرا نمی‌شود:

function test() {
    return 10;
    console.log("Hello!");
}

دستور console.log هیچ‌وقت اجرا نمی‌شود زیرا تابع قبل از رسیدن به آن مقدار را برگردانده و تمام شده است.

تمرین ذهنی:

به کد زیر نگاه کنید:

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);

از خودتان بپرسید:

۱. تابع چه مقداری برمی‌گرداند؟
۲. چه مقداری داخل result ذخیره می‌شود؟
۳. آیا می‌توان بعداً از result در یک محاسبه دیگر استفاده کرد؟

قانون ساده برای به خاطر سپردن:

console.log() → نمایش یک مقدار
return → برگرداندن یک مقدار
return همچنین → اجرای تابع را بلافاصله متوقف می‌کند

مقدار بازگشتی باعث می‌شود نتیجه یک تابع قابل استفاده مجدد باشد.`
        }
    },

    {
        id: 20,
        title: "JavaScript Function Expressions",
        faTitle: "عبارت‌های تابعی در JavaScript",
        content: {
            en: `A function expression is another way to create a function in JavaScript.

Instead of declaring a function with a function declaration like this:

function greet() {
    console.log("Hello!");
}

You can create a function and store it in a variable:

const greet = function() {
    console.log("Hello!");
};

Here, the function is created and assigned to the variable greet.

You can call it using the variable name:

greet();

A function expression can also use parameters:

const greet = function(name) {
    console.log("Hello " + name);
};

greet("Ali");

The function receives "Ali" as the argument and uses it inside the function.

You can also store the function expression in a let variable:

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 5));

The important idea is that the function itself is stored in a variable.

Function expressions are useful when you want to treat a function like a value that can be stored, passed around, or assigned to a variable.

There is also an important difference between function declarations and function expressions.

A function declaration can be called before it appears in the code:

sayHello();

function sayHello() {
    console.log("Hello!");
}

Function expressions assigned to variables with const or let cannot be called before the assignment:

greet();

const greet = function() {
    console.log("Hello!");
};

This causes an error because greet has not been initialized yet.

A common beginner mistake is forgetting that a function expression needs to be assigned to a variable if you want to call it later by that variable name.

Quick rule to remember:

Function declaration → function name is declared directly
Function expression → function is stored in a variable

For now, focus on understanding that a function can be treated as a value and stored inside a variable.`,
            fa: `عبارت تابعی یا Function Expression روش دیگری برای ساختن تابع در JavaScript است.

به‌جای اینکه تابع را به شکل Function Declaration تعریف کنیم:

function greet() {
    console.log("Hello!");
}

می‌توانیم یک تابع بسازیم و آن را داخل یک متغیر ذخیره کنیم:

const greet = function() {
    console.log("Hello!");
};

در اینجا تابع ساخته شده و داخل متغیر greet قرار گرفته است.

می‌توانیم تابع را با استفاده از نام متغیر فراخوانی کنیم:

greet();

Function Expression می‌تواند پارامتر هم داشته باشد:

const greet = function(name) {
    console.log("Hello " + name);
};

greet("Ali");

در اینجا مقدار "Ali" به‌عنوان آرگومان وارد تابع می‌شود و داخل تابع استفاده می‌شود.

همچنین می‌توان Function Expression را داخل یک متغیر let ذخیره کرد:

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 5));

نکته مهم این است که خود تابع داخل یک متغیر ذخیره شده است.

Function Expression زمانی کاربردی است که بخواهید با تابع مانند یک مقدار رفتار کنید؛ یعنی آن را داخل متغیر ذخیره کنید، منتقل کنید یا به متغیر دیگری اختصاص دهید.

بین Function Declaration و Function Expression یک تفاوت مهم هم وجود دارد.

Function Declaration را می‌توان قبل از محل تعریف آن فراخوانی کرد:

sayHello();

function sayHello() {
    console.log("Hello!");
}

اما Function Expression که داخل متغیرهای const یا let ذخیره شده است، قبل از مقداردهی قابل فراخوانی نیست:

greet();

const greet = function() {
    console.log("Hello!");
};

این کد باعث خطا می‌شود زیرا متغیر greet هنوز مقداردهی نشده است.

یک اشتباه رایج برای مبتدی‌ها این است که فراموش کنند Function Expression برای استفاده بعدی معمولاً داخل یک متغیر ذخیره می‌شود.

قانون ساده برای به خاطر سپردن:

Function Declaration → نام تابع مستقیماً تعریف می‌شود
Function Expression → تابع داخل یک متغیر ذخیره می‌شود

فعلاً مهم‌ترین نکته این است که بدانید یک تابع می‌تواند مانند یک مقدار در نظر گرفته شود و داخل یک متغیر ذخیره شود.`
        }
    },

    {
        id: 21,
        title: "JavaScript Arrow Functions",
        faTitle: "توابع Arrow در JavaScript",
        content: {
            en: `An arrow function is a shorter way to write a function expression in JavaScript.

A regular function expression looks like this:

const greet = function() {
    console.log("Hello!");
};

The same function can be written as an arrow function:

const greet = () => {
    console.log("Hello!");
};

The => symbol is called the arrow syntax.

The function is still stored in the greet variable, so you call it the same way:

greet();

Arrow functions can also have parameters:

const greet = (name) => {
    console.log("Hello " + name);
};

greet("Ali");

The parameter is placed inside the parentheses, just like with a regular function.

Arrow functions can return values:

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));

This works just like a regular function that uses return.

When an arrow function has only one parameter, the parentheses can be omitted:

const double = number => {
    return number * 2;
};

console.log(double(5));

However, keeping the parentheses is also valid:

const double = (number) => {
    return number * 2;
};

Arrow functions can also use an even shorter return syntax when the function contains only one expression.

For example:

const add = (a, b) => a + b;

This automatically returns the result of a + b.

So these two functions produce the same result:

const add = (a, b) => {
    return a + b;
};

const add = (a, b) => a + b;

The shorter version is called an implicit return because the return keyword is not written.

A common beginner mistake is forgetting that curly braces change how the return works.

This returns a value:

const multiply = (a, b) => a * b;

But when curly braces are used, you normally need return:

const multiply = (a, b) => {
    return a * b;
};

Arrow functions are especially common in modern JavaScript and become very useful when working with arrays and callbacks.

Quick rule to remember:

Regular function expression → function() { ... }
Arrow function → () => { ... }

Both can be stored in variables, receive parameters, and return values.`,
            fa: `تابع Arrow یا Arrow Function روش کوتاه‌تری برای نوشتن Function Expression در JavaScript است.

یک Function Expression معمولی به این شکل نوشته می‌شود:

const greet = function() {
    console.log("Hello!");
};

همین تابع را می‌توان به شکل Arrow Function نوشت:

const greet = () => {
    console.log("Hello!");
};

علامت => در این ساختار بخشی از سینتکس Arrow Function است.

این تابع همچنان داخل متغیر greet ذخیره شده است، بنابراین به همان شکل فراخوانی می‌شود:

greet();

Arrow Function می‌تواند پارامتر هم داشته باشد:

const greet = (name) => {
    console.log("Hello " + name);
};

greet("Ali");

پارامتر داخل پرانتز قرار می‌گیرد، درست مانند یک تابع معمولی.

Arrow Function می‌تواند مقدار هم برگرداند:

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));

این کد مانند یک تابع معمولی که از return استفاده می‌کند عمل می‌کند.

وقتی Arrow Function فقط یک پارامتر داشته باشد، می‌توان پرانتز آن را حذف کرد:

const double = number => {
    return number * 2;
};

console.log(double(5));

البته استفاده از پرانتز همچنان کاملاً معتبر است:

const double = (number) => {
    return number * 2;
};

Arrow Function می‌تواند در شرایط خاص حتی کوتاه‌تر هم نوشته شود؛ زمانی که تابع فقط یک expression داشته باشد.

برای مثال:

const add = (a, b) => a + b;

در این حالت نتیجه a + b به‌صورت خودکار برگردانده می‌شود.

بنابراین دو تابع زیر نتیجه یکسانی دارند:

const add = (a, b) => {
    return a + b;
};

const add = (a, b) => a + b;

در نسخه کوتاه‌تر از Implicit Return استفاده شده است، زیرا کلمه return نوشته نشده اما مقدار expression به‌صورت خودکار برگردانده می‌شود.

یک اشتباه رایج برای مبتدی‌ها این است که فراموش کنند استفاده از آکولاد روی نحوه return تأثیر دارد.

این تابع یک مقدار برمی‌گرداند:

const multiply = (a, b) => a * b;

اما وقتی از آکولاد استفاده می‌کنیم، معمولاً باید return را به‌صورت صریح بنویسیم:

const multiply = (a, b) => {
    return a * b;
};

Arrow Functionها در JavaScript مدرن بسیار رایج هستند و زمانی که با آرایه‌ها و Callbackها کار می‌کنید کاربرد بیشتری پیدا می‌کنند.

قانون ساده برای به خاطر سپردن:

Function Expression معمولی → function() { ... }
Arrow Function → () => { ... }

هر دو می‌توانند داخل متغیر ذخیره شوند، پارامتر دریافت کنند و مقدار برگردانند.`
        }
    },

    {
        id: 22,
        title: "JavaScript Function Scope",
        faTitle: "محدوده تابع و متغیرهای محلی در JavaScript",
        content: {
            en: `Scope determines where a variable can be accessed in your JavaScript code.

A variable created inside a function has function scope. This means it can normally be accessed only from inside that function.

For example:

function showName() {
    let name = "Ali";
    console.log(name);
}

showName();

The variable name exists inside showName, so the function can access it.

But code outside the function cannot access that local variable:

function showName() {
    let name = "Ali";
}

console.log(name);

This causes an error because name was created inside the function and is not available outside it.

Variables created inside a function are called local variables.

Each time a function runs, its local variables belong to that function's execution.

For example:

function calculate() {
    let score = 10;
    console.log(score);
}

calculate();

The variable score is local to calculate.

A local variable can also have the same name as a variable outside the function.

For example:

let score = 100;

function showScore() {
    let score = 50;
    console.log(score);
}

showScore();
console.log(score);

The function uses its own local score, so it prints 50 inside the function. The score outside the function remains 100.

This shows that variables with the same name can exist in different scopes.

A function can access variables that were created outside of it:

let username = "Ali";

function showUser() {
    console.log(username);
}

showUser();

Here, username was created outside the function, so the function can access it.

However, the reverse is not true. Code outside a function cannot normally access a variable created inside that function.

This distinction is important because local variables help keep data limited to the part of the program that needs it.

A common beginner mistake is assuming that a variable created inside a function can be used anywhere in the program.

Quick rule to remember:

Inside function → local variable can be accessed there
Outside function → cannot directly access the function's local variable
Function → can access variables from an outer scope

Understanding function scope will become especially important when you learn global scope, block scope, and closures.`,
            fa: `محدوده یا Scope مشخص می‌کند که یک متغیر در کدام قسمت از کد JavaScript قابل دسترسی است.

متغیری که داخل یک تابع ایجاد می‌شود دارای Function Scope است. یعنی معمولاً فقط از داخل همان تابع می‌توان به آن دسترسی داشت.

برای مثال:

function showName() {
    let name = "Ali";
    console.log(name);
}

showName();

متغیر name داخل showName ایجاد شده است، بنابراین تابع می‌تواند به آن دسترسی داشته باشد.

اما کدی که خارج از تابع قرار دارد نمی‌تواند به آن متغیر دسترسی پیدا کند:

function showName() {
    let name = "Ali";
}

console.log(name);

این کد باعث خطا می‌شود زیرا name داخل تابع ایجاد شده و خارج از آن در دسترس نیست.

به متغیرهایی که داخل یک تابع ایجاد می‌شوند Local Variable یا متغیر محلی گفته می‌شود.

هر بار که یک تابع اجرا می‌شود، متغیرهای محلی آن متعلق به همان اجرای تابع هستند.

برای مثال:

function calculate() {
    let score = 10;
    console.log(score);
}

calculate();

متغیر score در اینجا محلی برای تابع calculate است.

یک متغیر محلی حتی می‌تواند همان نام متغیری را داشته باشد که خارج از تابع قرار دارد.

برای مثال:

let score = 100;

function showScore() {
    let score = 50;
    console.log(score);
}

showScore();
console.log(score);

تابع از score محلی خودش استفاده می‌کند، بنابراین داخل تابع مقدار 50 نمایش داده می‌شود. مقدار score خارج از تابع همچنان 100 باقی می‌ماند.

این موضوع نشان می‌دهد که متغیرهایی با یک نام می‌توانند در Scopeهای متفاوت وجود داشته باشند.

یک تابع می‌تواند به متغیرهایی که خارج از خودش ایجاد شده‌اند دسترسی داشته باشد:

let username = "Ali";

function showUser() {
    console.log(username);
}

showUser();

در اینجا username خارج از تابع ایجاد شده است، بنابراین تابع می‌تواند به آن دسترسی داشته باشد.

اما حالت برعکس وجود ندارد. کدی که خارج از تابع قرار دارد معمولاً نمی‌تواند به متغیری که داخل آن تابع ایجاد شده است دسترسی مستقیم داشته باشد.

این تفاوت مهم است زیرا متغیرهای محلی کمک می‌کنند داده‌ها فقط در بخشی از برنامه که به آن‌ها نیاز دارد قابل دسترسی باشند.

یک اشتباه رایج برای مبتدی‌ها این است که تصور کنند متغیری که داخل یک تابع ایجاد شده می‌تواند در هر جای برنامه استفاده شود.

قانون ساده برای به خاطر سپردن:

داخل تابع → متغیر محلی در همان محدوده قابل دسترسی است
خارج تابع → متغیر محلی تابع مستقیماً قابل دسترسی نیست
تابع → می‌تواند به متغیرهای موجود در Scope بیرونی دسترسی داشته باشد

درک Function Scope زمانی اهمیت بیشتری پیدا می‌کند که با Global Scope، Block Scope و Closureها آشنا شوید.`
        }
    },

    {
        id: 23,
        title: "Higher-Order Functions & Callbacks",
        faTitle: "توابع Higher-Order و Callback در JavaScript",
        content: {
            en: `A function in JavaScript can be treated like a value.

This means you can store a function in a variable, pass a function to another function, and return a function from another function.

When a function receives another function as an argument or returns a function, it is called a Higher-Order Function.

For example:

function greet() {
    console.log("Hello!");
}

function runFunction(fn) {
    fn();
}

runFunction(greet);

Here, greet is passed to runFunction as an argument.

The function that is passed to another function is commonly called a Callback Function.

A callback is simply a function that is given to another function so that the other function can call it later.

For example:

function showMessage() {
    console.log("Learning JavaScript!");
}

function execute(callback) {
    callback();
}

execute(showMessage);

The showMessage function is the callback because it is passed into execute.

You can also pass an arrow function directly:

function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello!");
});

Callbacks become especially useful when you want one function to control when another function runs.

For example:

function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

function finish() {
    console.log("Done!");
}

processUser("Ali", finish);

The processUser function receives two values: a name and a callback function.

It can then decide when to call the callback.

A Higher-Order Function does not have to use the word callback in its parameter name.

This works the same way:

function run(action) {
    action();
}

function sayHello() {
    console.log("Hello!");
}

run(sayHello);

The name action is just a parameter. What matters is that a function is being passed as a value.

Common beginner mistake:

Do not call the function when you want to pass it as a callback.

Correct:

run(sayHello);

This passes the function itself.

Incorrect:

run(sayHello());

This calls sayHello immediately and passes its returned value to run.

Quick rule:

Function passed to another function → Callback
Function receiving or returning a function → Higher-Order Function

Callbacks are one of the most important ideas in JavaScript because you will use them frequently with arrays, events, timers, and asynchronous code.`,
            fa: `تابع‌ها در JavaScript می‌توانند مانند یک مقدار با داده‌های دیگر استفاده شوند.

این یعنی می‌توان یک تابع را داخل یک متغیر ذخیره کرد، آن را به تابع دیگری به‌عنوان آرگومان داد یا از داخل یک تابع دیگر برگرداند.

وقتی یک تابع، تابع دیگری را به‌عنوان آرگومان دریافت می‌کند یا یک تابع را برمی‌گرداند، به آن Higher-Order Function گفته می‌شود.

برای مثال:

function greet() {
    console.log("Hello!");
}

function runFunction(fn) {
    fn();
}

runFunction(greet);

در اینجا تابع greet به‌عنوان یک آرگومان به runFunction داده شده است.

تابعی که به تابع دیگری داده می‌شود، معمولاً Callback Function نامیده می‌شود.

Callback در واقع تابعی است که به تابع دیگری داده می‌شود تا آن تابع بتواند در زمان مناسب آن را اجرا کند.

برای مثال:

function showMessage() {
    console.log("Learning JavaScript!");
}

function execute(callback) {
    callback();
}

execute(showMessage);

در اینجا showMessage یک Callback است زیرا به تابع execute داده شده است.

می‌توان یک Arrow Function را نیز مستقیماً به‌عنوان Callback ارسال کرد:

function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello!");
});

Callbackها زمانی بسیار کاربردی هستند که بخواهیم یک تابع زمان اجرای تابع دیگری را کنترل کند.

برای مثال:

function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

function finish() {
    console.log("Done!");
}

processUser("Ali", finish);

در این مثال تابع processUser دو مقدار دریافت می‌کند: یک name و یک تابع callback.

سپس خودش تصمیم می‌گیرد که Callback را چه زمانی اجرا کند.

یک Higher-Order Function لازم نیست حتماً پارامتری با نام callback داشته باشد.

این کد نیز همان مفهوم را دارد:

function run(action) {
    action();
}

function sayHello() {
    console.log("Hello!");
}

run(sayHello);

نام action فقط نام یک پارامتر است. چیزی که اهمیت دارد این است که یک تابع به‌عنوان مقدار به تابع دیگر داده شده است.

یک اشتباه رایج برای افراد مبتدی:

وقتی می‌خواهید یک تابع را به‌عنوان Callback ارسال کنید، آن را همان لحظه اجرا نکنید.

درست:

run(sayHello);

اینجا خود تابع به run داده می‌شود.

نادرست:

run(sayHello());

اینجا sayHello همان لحظه اجرا می‌شود و مقدار بازگشتی آن به run داده می‌شود.

قانون ساده:

تابعی که به تابع دیگری داده می‌شود → Callback
تابعی که یک تابع دریافت یا برمی‌گرداند → Higher-Order Function

Callbackها یکی از مهم‌ترین مفاهیم JavaScript هستند، زیرا در کار با آرایه‌ها، رویدادها، Timerها و کدهای asynchronous بسیار استفاده می‌شوند.`
        }
    },

    {
        id: 24,
        title: "Arrays & Indexes",
        faTitle: "آرایه‌ها و Index در JavaScript",
        content: {
            en: `An Array is a data structure used to store multiple values in a single variable.

Instead of creating separate variables:

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";

You can store all of them in one Array:

let fruits = ["Apple", "Banana", "Orange"];

Arrays can contain multiple values, and the values can be accessed individually.

Each value in an Array has a position called an index.

JavaScript Array indexes start at 0, not 1.

For example:

let fruits = ["Apple", "Banana", "Orange"];

The indexes are:

Apple → 0
Banana → 1
Orange → 2

You can access an item using its index:

console.log(fruits[0]);

This prints:

Apple

You can access the second item with index 1:

console.log(fruits[1]);

This prints:

Banana

The index is written inside square brackets:

array[index]

You can also store numbers, Booleans, Strings, or other values inside an Array:

let scores = [10, 20, 30];
let states = [true, false, true];
let mixed = ["Ali", 25, true];

Arrays can also be stored in const variables:

const colors = ["Red", "Blue", "Green"];

The const prevents the variable from being reassigned to a completely different Array, but the items inside the Array can still be changed.

For example:

const colors = ["Red", "Blue", "Green"];

colors[0] = "Yellow";

console.log(colors[0]);

This prints:

Yellow

You can also use a variable as an index:

let fruits = ["Apple", "Banana", "Orange"];
let position = 2;

console.log(fruits[position]);

This prints:

Orange

If you try to access an index that does not exist, JavaScript returns undefined:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[5]);

There is no item at index 5, so the result is undefined.

A common beginner mistake is forgetting that indexes start at 0.

For an Array with three items:

["Apple", "Banana", "Orange"]

the first item is index 0, the second is index 1, and the third is index 2.

Quick rule:

Array → stores multiple values
Index → identifies an item's position
First item → index 0
Second item → index 1
Third item → index 2

Arrays are extremely important in JavaScript because they let you work with collections of data. Later, you will learn how to add, remove, search, loop through, and transform Array items.`,
            fa: `آرایه یا Array یک ساختار داده برای ذخیره چند مقدار در یک متغیر است.

به‌جای اینکه متغیرهای جداگانه ایجاد کنیم:

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";

می‌توانیم همه آن‌ها را داخل یک Array قرار دهیم:

let fruits = ["Apple", "Banana", "Orange"];

آرایه می‌تواند چند مقدار را در خود نگه دارد و می‌توان به هر مقدار به‌صورت جداگانه دسترسی داشت.

هر مقدار داخل Array یک موقعیت دارد که به آن Index گفته می‌شود.

در JavaScript، Indexهای Array از 0 شروع می‌شوند، نه از 1.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

Indexها به این شکل هستند:

Apple → 0
Banana → 1
Orange → 2

برای دسترسی به یک مقدار می‌توان از Index آن استفاده کرد:

console.log(fruits[0]);

این کد مقدار زیر را نمایش می‌دهد:

Apple

برای دسترسی به مقدار دوم می‌توان از Index شماره 1 استفاده کرد:

console.log(fruits[1]);

این کد مقدار زیر را نمایش می‌دهد:

Banana

Index داخل براکت‌های مربعی نوشته می‌شود:

array[index]

می‌توان عددها، Booleanها، Stringها یا حتی ترکیبی از انواع مختلف داده را داخل Array قرار داد:

let scores = [10, 20, 30];
let states = [true, false, true];
let mixed = ["Ali", 25, true];

آرایه‌ها را می‌توان داخل متغیرهای const نیز ذخیره کرد:

const colors = ["Red", "Blue", "Green"];

استفاده از const مانع از این می‌شود که متغیر را به یک Array کاملاً متفاوت نسبت دهیم، اما مقدارهای داخل Array همچنان می‌توانند تغییر کنند.

برای مثال:

const colors = ["Red", "Blue", "Green"];

colors[0] = "Yellow";

console.log(colors[0]);

این کد مقدار زیر را نمایش می‌دهد:

Yellow

می‌توان از یک متغیر نیز به‌عنوان Index استفاده کرد:

let fruits = ["Apple", "Banana", "Orange"];
let position = 2;

console.log(fruits[position]);

این کد مقدار زیر را نمایش می‌دهد:

Orange

اگر به Indexای دسترسی پیدا کنیم که وجود ندارد، JavaScript مقدار undefined را برمی‌گرداند:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[5]);

در این Array مقداری در Index شماره 5 وجود ندارد، بنابراین نتیجه undefined است.

یک اشتباه رایج برای افراد مبتدی این است که فراموش کنند Indexها از 0 شروع می‌شوند.

برای یک Array با سه مقدار:

["Apple", "Banana", "Orange"]

مقدار اول Index شماره 0، مقدار دوم Index شماره 1 و مقدار سوم Index شماره 2 دارد.

قانون ساده:

Array → چند مقدار را ذخیره می‌کند
Index → موقعیت یک مقدار را مشخص می‌کند
مقدار اول → Index شماره 0
مقدار دوم → Index شماره 1
مقدار سوم → Index شماره 2

Arrayها یکی از بخش‌های بسیار مهم JavaScript هستند، زیرا به شما اجازه می‌دهند با مجموعه‌ای از داده‌ها کار کنید. در ادامه یاد می‌گیرید چگونه مقدارهای Array را اضافه، حذف، جست‌وجو، Loop و تغییر دهید.`
        }
    },

    {
        id: 25,
        title: "Array Length & Updating Items",
        faTitle: "طول آرایه و تغییر مقدارها در JavaScript",
        content: {
            en: `Every Array has a length property that tells you how many items it contains.

For example:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);

This prints:

3

The length property counts the number of items, not the highest index.

Because Array indexes start at 0, the last index is always one less than the length.

For example:

let fruits = ["Apple", "Banana", "Orange"];

The length is 3.

The indexes are:

Apple → 0
Banana → 1
Orange → 2

So the last index is:

fruits.length - 1

You can use length to access the last item:

console.log(fruits[fruits.length - 1]);

This prints:

Orange

The length property is especially useful when you do not know how many items an Array contains.

For example:

let scores = [10, 20, 30, 40, 50];

console.log(scores.length);

This gives 5.

You can also update an existing Array item by assigning a new value to its index.

For example:

let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits[1]);

This prints:

Mango

The original Array is now:

["Apple", "Mango", "Orange"]

You can update any existing index:

let scores = [10, 20, 30];

scores[0] = 100;
scores[2] = 300;

Now the Array is:

[100, 20, 300]

You can also use a variable as the index:

let fruits = ["Apple", "Banana", "Orange"];
let position = 1;

fruits[position] = "Mango";

Now the Array becomes:

["Apple", "Mango", "Orange"]

Be careful when assigning a value to an index that is beyond the current Array.

For example:

let numbers = [10, 20, 30];

numbers[5] = 60;

JavaScript creates empty slots between the existing items and index 5.

The length becomes 6 because the highest index is now 5.

This is different from simply adding one item to the end of an Array. Later, you will learn dedicated Array methods for adding and removing items.

A common beginner mistake is confusing length with the last index.

For this Array:

let colors = ["Red", "Blue", "Green", "Yellow"];

The length is 4.

But the last index is 3.

So:

colors.length → 4
colors[colors.length - 1] → "Yellow"

Quick rule:

length → number of items
last index → length - 1
Update an item → array[index] = newValue

Remember that length counts from 1, while indexes start from 0.`,
            fa: `هر Array یک property به نام length دارد که تعداد مقدارهای داخل آن را مشخص می‌کند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);

این کد مقدار زیر را نمایش می‌دهد:

3

property مربوط به length تعداد مقدارها را می‌شمارد، نه بزرگ‌ترین Index را.

چون Indexهای Array از 0 شروع می‌شوند، آخرین Index همیشه یک عدد کمتر از length است.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

طول Array برابر 3 است.

Indexها به این شکل هستند:

Apple → 0
Banana → 1
Orange → 2

بنابراین آخرین Index برابر است با:

fruits.length - 1

می‌توان از length برای دسترسی به آخرین مقدار Array استفاده کرد:

console.log(fruits[fruits.length - 1]);

این کد مقدار زیر را نمایش می‌دهد:

Orange

property مربوط به length زمانی بسیار کاربردی است که تعداد مقدارهای یک Array را از قبل ندانیم.

برای مثال:

let scores = [10, 20, 30, 40, 50];

console.log(scores.length);

این کد مقدار 5 را برمی‌گرداند.

می‌توان مقدارهای موجود در Array را نیز با قرار دادن یک مقدار جدید در Index آن‌ها تغییر داد.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits[1]);

این کد مقدار زیر را نمایش می‌دهد:

Mango

در نتیجه Array اصلی به شکل زیر تغییر می‌کند:

["Apple", "Mango", "Orange"]

می‌توان هر Index موجود را تغییر داد:

let scores = [10, 20, 30];

scores[0] = 100;
scores[2] = 300;

حالا Array به شکل زیر است:

[100, 20, 300]

می‌توان از یک متغیر نیز به‌عنوان Index استفاده کرد:

let fruits = ["Apple", "Banana", "Orange"];
let position = 1;

fruits[position] = "Mango";

حالا Array به شکل زیر تبدیل می‌شود:

["Apple", "Mango", "Orange"]

هنگام قرار دادن مقدار در Indexای که خارج از محدوده فعلی Array است باید دقت کرد.

برای مثال:

let numbers = [10, 20, 30];

numbers[5] = 60;

در این حالت JavaScript بین مقدارهای قبلی و Index شماره 5 جایگاه‌های خالی ایجاد می‌کند.

در نتیجه length برابر 6 می‌شود، زیرا بزرگ‌ترین Index اکنون 5 است.

این کار با اضافه کردن ساده یک مقدار به انتهای Array متفاوت است. در ادامه با روش‌های مخصوص اضافه و حذف کردن مقدارها آشنا می‌شوید.

یک اشتباه رایج برای افراد مبتدی این است که length را با آخرین Index اشتباه بگیرند.

برای این Array:

let colors = ["Red", "Blue", "Green", "Yellow"];

length برابر 4 است.

اما آخرین Index برابر 3 است.

بنابراین:

colors.length → 4
colors[colors.length - 1] → "Yellow"

قانون ساده:

length → تعداد مقدارها
آخرین Index → length - 1
تغییر یک مقدار → array[index] = newValue

به یاد داشته باشید که length تعداد مقدارها را از 1 می‌شمارد، اما Indexها از 0 شروع می‌شوند.`
        }
    },

    {
        id: 26,
        title: "Adding & Removing Array Items",
        faTitle: "اضافه و حذف کردن مقدارها از Array",
        content: {
            en: `JavaScript provides several methods for adding and removing items from an Array.

The most common methods are push(), pop(), unshift(), and shift().

The push() method adds one or more items to the end of an Array.

For example:

let fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

The Array becomes:

["Apple", "Banana", "Orange"]

push() adds the new item after the existing last item.

You can also add multiple items:

let numbers = [1, 2];

numbers.push(3, 4);

Now the Array is:

[1, 2, 3, 4]

The pop() method removes the last item from an Array.

For example:

let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);

The result is:

["Apple", "Banana"]

pop() removes only the last item.

The unshift() method adds one or more items to the beginning of an Array.

For example:

let fruits = ["Banana", "Orange"];

fruits.unshift("Apple");

The Array becomes:

["Apple", "Banana", "Orange"]

The shift() method removes the first item from an Array.

For example:

let fruits = ["Apple", "Banana", "Orange"];

fruits.shift();

The Array becomes:

["Banana", "Orange"]

You can remember these methods by thinking about the two ends of an Array:

push() → add to the end
pop() → remove from the end
unshift() → add to the beginning
shift() → remove from the beginning

These methods also change the original Array.

For example:

let numbers = [10, 20];

numbers.push(30);

console.log(numbers);

The original numbers Array is now [10, 20, 30].

An important detail is that push(), pop(), shift(), and unshift() return a value.

push() returns the new length of the Array.

For example:

let numbers = [10, 20];

let result = numbers.push(30);

console.log(result);

The result is 3 because the Array now contains three items.

pop() returns the item that was removed:

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.pop();

console.log(removed);

This prints:

Orange

shift() returns the first item that was removed.

unshift() returns the new length of the Array.

These return values become especially useful when you need to know what changed after modifying an Array.

A common beginner mistake is confusing which end each method affects.

Quick rule:

push() → add to end
pop() → remove from end
unshift() → add to beginning
shift() → remove from beginning

These four methods are some of the most important Array methods and will be used frequently when working with lists of data.`,
            fa: `جاوااسکریپت چندین Method برای اضافه و حذف کردن مقدارها از یک Array در اختیار ما قرار می‌دهد.

چهار Method مهم برای این کار push()، pop()، unshift() و shift() هستند.

Method مربوط به push() یک یا چند مقدار را به انتهای Array اضافه می‌کند.

برای مثال:

let fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

Array به شکل زیر تبدیل می‌شود:

["Apple", "Banana", "Orange"]

push() مقدار جدید را بعد از آخرین مقدار موجود قرار می‌دهد.

می‌توان چند مقدار را نیز هم‌زمان اضافه کرد:

let numbers = [1, 2];

numbers.push(3, 4);

حالا Array به شکل زیر است:

[1, 2, 3, 4]

Method مربوط به pop() آخرین مقدار Array را حذف می‌کند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);

نتیجه به شکل زیر است:

["Apple", "Banana"]

pop() فقط آخرین مقدار را حذف می‌کند.

Method مربوط به unshift() یک یا چند مقدار را به ابتدای Array اضافه می‌کند.

برای مثال:

let fruits = ["Banana", "Orange"];

fruits.unshift("Apple");

Array به شکل زیر تبدیل می‌شود:

["Apple", "Banana", "Orange"]

Method مربوط به shift() اولین مقدار Array را حذف می‌کند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

fruits.shift();

Array به شکل زیر تبدیل می‌شود:

["Banana", "Orange"]

می‌توان این Methodها را با توجه به دو انتهای Array به خاطر سپرد:

push() → اضافه کردن به انتها
pop() → حذف کردن از انتها
unshift() → اضافه کردن به ابتدا
shift() → حذف کردن از ابتدا

این Methodها Array اصلی را نیز تغییر می‌دهند.

برای مثال:

let numbers = [10, 20];

numbers.push(30);

console.log(numbers);

حالا Array اصلی numbers برابر [10, 20, 30] است.

نکته مهم این است که push()، pop()، shift() و unshift() یک مقدار را نیز برمی‌گردانند.

push() طول جدید Array را برمی‌گرداند.

برای مثال:

let numbers = [10, 20];

let result = numbers.push(30);

console.log(result);

نتیجه 3 است، زیرا Array اکنون شامل سه مقدار است.

pop() مقداری را که حذف کرده است برمی‌گرداند:

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.pop();

console.log(removed);

این کد مقدار زیر را نمایش می‌دهد:

Orange

shift() نیز اولین مقداری را که حذف کرده است برمی‌گرداند.

unshift() طول جدید Array را برمی‌گرداند.

این مقدارهای بازگشتی زمانی کاربردی هستند که بخواهیم بدانیم بعد از تغییر Array چه اتفاقی افتاده است.

یک اشتباه رایج برای افراد مبتدی این است که فراموش کنند هر Method روی کدام انتهای Array تأثیر می‌گذارد.

قانون ساده:

push() → اضافه کردن به انتها
pop() → حذف کردن از انتها
unshift() → اضافه کردن به ابتدا
shift() → حذف کردن از ابتدا

این چهار Method از مهم‌ترین Methodهای Array هستند و در هنگام کار با لیست‌های داده بسیار استفاده خواهند شد.`
        }
    },

    {
        id: 27,
        title: "Searching & Looping Through Arrays",
        faTitle: "جست‌وجو و Loop کردن روی Array",
        content: {
            en: `Once you know how to store and update values in an Array, you often need to search through those values or work with each item.

One simple way to search an Array is to use includes().

The includes() method checks whether an Array contains a specific value.

For example:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));

This prints:

true

Because Banana exists in the Array.

If the value does not exist, includes() returns false:

console.log(fruits.includes("Mango"));

This prints:

false

includes() returns a Boolean, so you can use it directly in a condition:

let fruits = ["Apple", "Banana", "Orange"];

if (fruits.includes("Banana")) {
    console.log("Fruit found!");
}

Another common task is going through every item in an Array.

You can use a for loop for this:

let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

This prints:

Apple
Banana
Orange

The loop starts at index 0 and continues while i is smaller than the Array length.

Using i < fruits.length is important because the last valid index is one less than the length.

You can also use a for...of loop to access each value directly:

let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

This produces the same output:

Apple
Banana
Orange

With a regular for loop, you work with the index:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

With for...of, you get the value directly:

for (let fruit of fruits) {
    console.log(fruit);
}

This can make simple Array loops easier to read.

You can also use a loop to search for a specific value:

let numbers = [10, 20, 30, 40];

for (let number of numbers) {
    if (number === 30) {
        console.log("Found!");
    }
}

The loop checks each item until it finds 30.

You can combine Array searching with other JavaScript concepts you already learned.

For example:

let scores = [45, 80, 92, 60];

for (let score of scores) {
    if (score >= 60) {
        console.log(score);
    }
}

This checks every score and prints only the scores that are at least 60.

A common beginner mistake is using an invalid index when looping.

For example:

let numbers = [10, 20, 30];

for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}

The condition should normally use < rather than <=.

The valid indexes are 0, 1, and 2, while the length is 3.

Using <= allows i to become 3, and numbers[3] is undefined.

Quick rule:

includes(value) → checks whether an Array contains a value
for loop → gives you control over the index
for...of → gives you each value directly
Array length → useful for controlling loops

Searching and looping through Arrays are fundamental skills. Later, Array methods will let you perform many of these operations with shorter and more expressive code.`,
            fa: `بعد از یادگیری ذخیره و تغییر مقدارها در Array، معمولاً لازم است بین مقدارها جست‌وجو کنیم یا روی تک‌تک آن‌ها کاری انجام دهیم.

یکی از روش‌های ساده برای جست‌وجو در Array استفاده از includes() است.

Method مربوط به includes() بررسی می‌کند که آیا یک مقدار مشخص داخل Array وجود دارد یا نه.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));

این کد مقدار زیر را نمایش می‌دهد:

true

زیرا Banana در Array وجود دارد.

اگر مقدار موردنظر وجود نداشته باشد، includes() مقدار false را برمی‌گرداند:

console.log(fruits.includes("Mango"));

این کد مقدار زیر را نمایش می‌دهد:

false

چون includes() یک Boolean برمی‌گرداند، می‌توان از آن مستقیماً داخل شرط استفاده کرد:

let fruits = ["Apple", "Banana", "Orange"];

if (fruits.includes("Banana")) {
    console.log("Fruit found!");
}

یکی دیگر از کارهای رایج، عبور از روی تمام مقدارهای یک Array است.

برای این کار می‌توان از for loop استفاده کرد:

let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

این کد مقدارهای زیر را نمایش می‌دهد:

Apple
Banana
Orange

حلقه از Index شماره 0 شروع می‌شود و تا زمانی ادامه پیدا می‌کند که i از length کوچک‌تر باشد.

استفاده از i < fruits.length مهم است، زیرا آخرین Index معتبر همیشه یک واحد کمتر از length است.

می‌توان از for...of نیز برای دسترسی مستقیم به هر مقدار استفاده کرد:

let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

این کد نیز همان نتیجه را ایجاد می‌کند:

Apple
Banana
Orange

در یک for loop معمولی، با Index کار می‌کنیم:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

اما در for...of مستقیماً مقدار هر آیتم را دریافت می‌کنیم:

for (let fruit of fruits) {
    console.log(fruit);
}

به همین دلیل for...of برای Loopهای ساده روی Array می‌تواند خواناتر باشد.

همچنین می‌توان از Loop برای پیدا کردن یک مقدار مشخص استفاده کرد:

let numbers = [10, 20, 30, 40];

for (let number of numbers) {
    if (number === 30) {
        console.log("Found!");
    }
}

حلقه هر مقدار را بررسی می‌کند تا به 30 برسد.

می‌توان مفاهیم جست‌وجو و Loop کردن Array را با چیزهایی که قبلاً یاد گرفته‌اید ترکیب کرد.

برای مثال:

let scores = [45, 80, 92, 60];

for (let score of scores) {
    if (score >= 60) {
        console.log(score);
    }
}

این کد هر score را بررسی می‌کند و فقط مقدارهایی را نمایش می‌دهد که حداقل 60 هستند.

یک اشتباه رایج برای افراد مبتدی استفاده از Index نامعتبر هنگام Loop کردن است.

برای مثال:

let numbers = [10, 20, 30];

for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}

در حالت معمول باید از < به‌جای <= استفاده شود.

Indexهای معتبر این Array برابر 0، 1 و 2 هستند، در حالی که length برابر 3 است.

استفاده از <= باعث می‌شود i به 3 برسد و numbers[3] مقدار undefined را برمی‌گرداند.

قانون ساده:

includes(value) → بررسی می‌کند آیا مقدار در Array وجود دارد
for loop → امکان کنترل Index را می‌دهد
for...of → هر مقدار را مستقیماً در اختیار قرار می‌دهد
Array length → برای کنترل Loopها کاربرد دارد

جست‌وجو و Loop کردن روی Array از مهارت‌های پایه و بسیار مهم هستند. در ادامه با Array Methodهایی آشنا می‌شوید که بسیاری از این کارها را با کد کوتاه‌تر و خواناتر انجام می‌دهند.`
        }
    },

    {
        id: 28,
        title: "Array Methods: forEach, map, filter & find",
        faTitle: "متدهای Array: forEach، map، filter و find",
        content: {
            en: `JavaScript provides powerful Array methods that let you work with Array items without manually writing a traditional for loop every time.

Four important methods are forEach(), map(), filter(), and find().

The forEach() method runs a function once for every item in an Array.

For example:

let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

This prints:

Apple
Banana
Orange

You can also use an arrow function:

fruits.forEach((fruit) => {
    console.log(fruit);
});

The function passed to forEach() is a callback.

The map() method also runs a function for every item, but it creates and returns a new Array containing the results.

For example:

let numbers = [1, 2, 3];

let doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);

The result is:

[2, 4, 6]

The original numbers Array is still:

[1, 2, 3]

This is an important difference between forEach() and map().

forEach() → performs an action for each item
map() → creates a new Array from the returned values

The filter() method creates a new Array containing only the items that pass a condition.

For example:

let numbers = [10, 15, 20, 25];

let bigNumbers = numbers.filter((number) => {
    return number >= 20;
});

console.log(bigNumbers);

The result is:

[20, 25]

The callback passed to filter() should return a Boolean.

true → keep the item
false → remove the item from the new Array

The find() method searches for an item that satisfies a condition.

For example:

let numbers = [10, 15, 20, 25];

let result = numbers.find((number) => {
    return number > 18;
});

console.log(result);

The result is:

20

find() returns the first item that satisfies the condition.

If no item satisfies the condition, find() returns undefined.

For example:

let numbers = [10, 15, 20];

let result = numbers.find((number) => {
    return number > 50;
});

console.log(result);

This prints:

undefined

You can use these methods with strings too.

For example:

let names = ["Ali", "Sara", "John"];

let longNames = names.filter((name) => {
    return name.length > 3;
});

This creates a new Array containing the names with more than three characters.

These methods use callbacks, which connects directly to the Higher-Order Functions and Callback lesson.

A common beginner mistake is forgetting that map(), filter(), and find() depend on the value returned by their callback.

For example, map() uses the returned value to create each item in the new Array.

filter() uses the returned Boolean to decide whether an item stays.

find() uses the returned Boolean to decide whether an item is the first match.

Quick rule:

forEach() → do something for every item
map() → transform every item into a new Array
filter() → keep items that pass a condition
find() → return the first item that passes a condition

These methods are fundamental to modern JavaScript and will appear constantly when working with real-world data.`,
            fa: `جاوااسکریپت متدهای قدرتمندی برای کار با Arrayها دارد که اجازه می‌دهند بدون نوشتن for loop معمولی در هر بار، روی مقدارهای Array کار کنیم.

چهار متد مهم در این بخش forEach()، map()، filter() و find() هستند.

متد forEach() یک تابع را برای هر مقدار موجود در Array یک بار اجرا می‌کند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

این کد مقدارهای زیر را نمایش می‌دهد:

Apple
Banana
Orange

می‌توان از Arrow Function نیز استفاده کرد:

fruits.forEach((fruit) => {
    console.log(fruit);
});

تابعی که به forEach() داده می‌شود یک Callback است.

متد map() نیز یک تابع را برای هر مقدار اجرا می‌کند، اما یک Array جدید شامل نتیجه‌های آن تابع ایجاد و برمی‌گرداند.

برای مثال:

let numbers = [1, 2, 3];

let doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);

نتیجه به شکل زیر است:

[2, 4, 6]

Array اصلی numbers همچنان به شکل زیر باقی می‌ماند:

[1, 2, 3]

این تفاوت بین forEach() و map() بسیار مهم است.

forEach() → انجام یک کار برای هر مقدار
map() → ساخت یک Array جدید از مقدارهای برگشتی

متد filter() یک Array جدید ایجاد می‌کند که فقط شامل مقدارهایی است که یک شرط را قبول می‌کنند.

برای مثال:

let numbers = [10, 15, 20, 25];

let bigNumbers = numbers.filter((number) => {
    return number >= 20;
});

console.log(bigNumbers);

نتیجه:

[20, 25]

Callback مربوط به filter() باید یک Boolean برگرداند.

true → مقدار در Array جدید باقی می‌ماند
false → مقدار از Array جدید حذف می‌شود

متد find() برای پیدا کردن مقداری استفاده می‌شود که یک شرط را قبول می‌کند.

برای مثال:

let numbers = [10, 15, 20, 25];

let result = numbers.find((number) => {
    return number > 18;
});

console.log(result);

نتیجه:

20

متد find() اولین مقداری را برمی‌گرداند که شرط را قبول کند.

اگر هیچ مقداری شرط را قبول نکند، find() مقدار undefined را برمی‌گرداند.

برای مثال:

let numbers = [10, 15, 20];

let result = numbers.find((number) => {
    return number > 50;
});

console.log(result);

این کد مقدار زیر را نمایش می‌دهد:

undefined

می‌توان از این متدها با Stringها نیز استفاده کرد.

برای مثال:

let names = ["Ali", "Sara", "John"];

let longNames = names.filter((name) => {
    return name.length > 3;
});

این کد یک Array جدید شامل نام‌هایی ایجاد می‌کند که بیشتر از سه کاراکتر دارند.

این متدها از Callback استفاده می‌کنند و به همین دلیل مستقیماً با درس Higher-Order Functions و Callback ارتباط دارند.

یک اشتباه رایج برای افراد مبتدی این است که فراموش کنند map()، filter() و find() به مقداری که Callback برمی‌گرداند وابسته هستند.

برای مثال، map() از مقدار برگشتی برای ساخت هر مقدار در Array جدید استفاده می‌کند.

filter() از Boolean برگشتی برای تصمیم‌گیری درباره باقی ماندن یک مقدار استفاده می‌کند.

find() نیز از Boolean برگشتی برای پیدا کردن اولین مقدار مطابق شرط استفاده می‌کند.

قانون ساده:

forEach() → انجام یک کار برای هر مقدار
map() → تبدیل هر مقدار و ساخت یک Array جدید
filter() → نگه داشتن مقدارهایی که شرط را قبول می‌کنند
find() → برگرداندن اولین مقدار مطابق شرط

این متدها از مفاهیم بسیار مهم JavaScript مدرن هستند و هنگام کار با داده‌های واقعی بسیار زیاد استفاده می‌شوند.`
        }
    },

    {
        id: 29,
        title: "slice() and splice()",
        faTitle: "متدهای slice() و splice()",
        content: {
            en: `JavaScript provides two useful Array methods called slice() and splice().

Although their names are similar, they behave very differently.

The slice() method creates a new Array containing a portion of the original Array.

For example:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(1, 3);

console.log(selected);

The result is:

["Banana", "Orange"]

The first argument is the starting index.

The second argument is the ending index, but the ending index itself is not included.

So slice(1, 3) takes indexes 1 and 2.

The original Array is not changed:

["Apple", "Banana", "Orange", "Mango"]

You can also use slice() with only one argument.

For example:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(2);

The result is:

["Orange", "Mango"]

When the second argument is omitted, slice() takes everything from the starting index to the end.

Negative indexes can also be used.

For example:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(-2);

The result is:

["Orange", "Mango"]

The splice() method is different.

splice() changes the original Array by adding, removing, or replacing items.

For example:

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);

The result is:

["Apple", "Orange"]

The first argument is the starting index.

The second argument is the number of items to remove.

So splice(1, 1) starts at index 1 and removes one item.

splice() can also add items.

For example:

let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);

The result is:

["Apple", "Banana", "Orange"]

Here:

1 → start at index 1
0 → remove zero items
"Banana" → add this item

You can add multiple items:

fruits.splice(1, 0, "Banana", "Mango");

The original Array is changed.

splice() can also replace items.

For example:

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango");

The result is:

["Apple", "Mango", "Orange"]

One item is removed and one new item is inserted at the same position.

Another important difference is their return value.

slice() returns a new Array containing the selected portion.

splice() returns a new Array containing the items that were removed.

For example:

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.splice(1, 1);

console.log(removed);

The result is:

["Banana"]

The original Array is now:

["Apple", "Orange"]

A common beginner mistake is confusing the second argument of slice() and splice().

slice(start, end)
→ end is the stopping index and is not included.

splice(start, deleteCount)
→ deleteCount tells JavaScript how many items to remove.

Quick rule:

slice() → copy part of an Array without changing the original.

splice() → modify the original Array by removing, adding, or replacing items.

Understanding this difference is important because it helps you control whether an Array should remain unchanged or be modified.`,
            fa: `جاوااسکریپت دو متد کاربردی به نام slice() و splice() برای Arrayها دارد.

با اینکه اسم این دو متد شبیه یکدیگر است، عملکرد آن‌ها کاملاً متفاوت است.

متد slice() یک Array جدید شامل بخشی از Array اصلی ایجاد می‌کند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(1, 3);

console.log(selected);

نتیجه:

["Banana", "Orange"]

آرگومان اول اندیس شروع را مشخص می‌کند.

آرگومان دوم اندیس پایان را مشخص می‌کند، اما خود اندیس پایان در نتیجه قرار نمی‌گیرد.

بنابراین slice(1, 3) اندیس‌های 1 و 2 را انتخاب می‌کند.

Array اصلی تغییر نمی‌کند:

["Apple", "Banana", "Orange", "Mango"]

می‌توان slice() را فقط با یک آرگومان نیز استفاده کرد.

برای مثال:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(2);

نتیجه:

["Orange", "Mango"]

وقتی آرگومان دوم وجود نداشته باشد، slice() همه مقدارها را از اندیس شروع تا انتهای Array انتخاب می‌کند.

اندیس‌های منفی نیز قابل استفاده هستند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let selected = fruits.slice(-2);

نتیجه:

["Orange", "Mango"]

متد splice() متفاوت است.

متد splice() خود Array اصلی را با اضافه کردن، حذف کردن یا جایگزین کردن مقدارها تغییر می‌دهد.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);

نتیجه:

["Apple", "Orange"]

آرگومان اول اندیس شروع را مشخص می‌کند.

آرگومان دوم تعداد مقدارهایی است که باید حذف شوند.

بنابراین splice(1, 1) از اندیس 1 شروع می‌کند و یک مقدار را حذف می‌کند.

متد splice() می‌تواند مقدارهای جدید نیز اضافه کند.

برای مثال:

let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);

نتیجه:

["Apple", "Banana", "Orange"]

در اینجا:

1 → شروع از اندیس 1
0 → حذف نکردن هیچ مقداری
"Banana" → اضافه کردن این مقدار

می‌توان چند مقدار را نیز اضافه کرد:

fruits.splice(1, 0, "Banana", "Mango");

Array اصلی تغییر می‌کند.

متد splice() می‌تواند مقدارها را نیز جایگزین کند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango");

نتیجه:

["Apple", "Mango", "Orange"]

یک مقدار حذف می‌شود و یک مقدار جدید در همان موقعیت قرار می‌گیرد.

تفاوت مهم دیگر مربوط به مقدار برگشتی این دو متد است.

slice() یک Array جدید شامل بخش انتخاب‌شده برمی‌گرداند.

splice() یک Array جدید شامل مقدارهای حذف‌شده برمی‌گرداند.

برای مثال:

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.splice(1, 1);

console.log(removed);

نتیجه:

["Banana"]

Array اصلی اکنون:

["Apple", "Orange"]

یک اشتباه رایج برای افراد مبتدی این است که آرگومان دوم slice() و splice() را با یکدیگر اشتباه بگیرند.

slice(start, end)
→ end اندیس توقف است و خودش در نتیجه قرار نمی‌گیرد.

splice(start, deleteCount)
→ deleteCount مشخص می‌کند چند مقدار باید حذف شود.

قانون ساده:

slice() → کپی کردن بخشی از Array بدون تغییر Array اصلی.

splice() → تغییر Array اصلی با حذف، اضافه یا جایگزین کردن مقدارها.

درک این تفاوت مهم است، چون کمک می‌کند تشخیص دهیم چه زمانی Array باید بدون تغییر باقی بماند و چه زمانی باید تغییر کند.`
        }
    },

    {
        id: 30,
        title: "Objects & Key-Value Pairs",
        faTitle: "آبجکت‌ها و جفت‌های کلید و مقدار",
        content: {
            en: `An Object is a JavaScript data structure used to store related data together.

Unlike an Array, which stores values in numbered indexes, an Object stores data using key-value pairs.

For example:

let user = {
    name: "Ali",
    age: 25,
    isStudent: true
};

Here, user is an Object.

The Object contains three key-value pairs:

name → "Ali"
age → 25
isStudent → true

A key identifies a piece of data, while the value is the actual data stored under that key.

Keys are usually written as names without quotes:

let car = {
    brand: "Porsche",
    model: "911",
    year: 2025
};

You can also write keys using quotes:

let car = {
    "brand": "Porsche",
    "model": "911"
};

Both forms are valid for normal Object property names.

Object values can have different data types.

For example:

let product = {
    name: "Laptop",
    price: 1200,
    available: true
};

Here:

name contains a String
price contains a Number
available contains a Boolean

Objects can also contain Arrays:

let student = {
    name: "Ali",
    courses: ["JavaScript", "HTML", "CSS"]
};

An Object can contain many different kinds of data together.

Objects are useful because related information can be grouped into one variable.

For example, instead of creating separate variables:

let name = "Ali";
let age = 25;
let city = "Baku";

You can group the information:

let user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

The data now belongs to one user Object.

You can access Object properties using dot notation.

For example:

let user = {
    name: "Ali",
    age: 25
};

console.log(user.name);

This prints:

Ali

You can also access a property using bracket notation:

console.log(user["name"]);

This also prints:

Ali

Dot notation is usually the simplest choice when you already know the property name.

Bracket notation becomes especially useful when the property name is stored in a variable.

For example:

let user = {
    name: "Ali",
    age: 25
};

let property = "age";

console.log(user[property]);

This prints:

25

Notice that user[property] uses the value stored inside property.

If you write user.property instead, JavaScript looks for a property literally named "property".

A common beginner mistake is confusing an Object with an Array.

Array:

let colors = ["red", "blue", "green"];

Object:

let user = {
    name: "Ali",
    age: 25
};

Arrays are mainly useful when working with ordered collections of values.

Objects are mainly useful when working with related data described by named properties.

Quick rule:

Array → ordered values using indexes
Object → related data using named keys

Objects are one of the most important structures in JavaScript and will become much more powerful when we learn how to update, delete, nest, and work with Object methods.`,
            fa: `آبجکت یک ساختار داده در JavaScript است که برای نگهداری اطلاعات مرتبط در کنار یکدیگر استفاده می‌شود.

برخلاف Array که مقدارها را با اندیس‌های عددی ذخیره می‌کند، Object اطلاعات را به صورت جفت‌های کلید و مقدار ذخیره می‌کند.

برای مثال:

let user = {
    name: "Ali",
    age: 25,
    isStudent: true
};

در اینجا user یک Object است.

این Object شامل سه جفت کلید و مقدار است:

name → "Ali"
age → 25
isStudent → true

کلید یک بخش از داده را مشخص می‌کند و مقدار، داده‌ای است که زیر آن کلید ذخیره شده است.

کلیدها معمولاً بدون کوتیشن نوشته می‌شوند:

let car = {
    brand: "Porsche",
    model: "911",
    year: 2025
};

می‌توان کلیدها را با کوتیشن نیز نوشت:

let car = {
    "brand": "Porsche",
    "model": "911"
};

هر دو روش برای نام‌های معمول Property معتبر هستند.

مقدارهای داخل Object می‌توانند انواع داده مختلفی داشته باشند.

برای مثال:

let product = {
    name: "Laptop",
    price: 1200,
    available: true
};

در اینجا:

name شامل یک String است
price شامل یک Number است
available شامل یک Boolean است

Objectها می‌توانند شامل Array نیز باشند:

let student = {
    name: "Ali",
    courses: ["JavaScript", "HTML", "CSS"]
};

یک Object می‌تواند انواع مختلف داده را در کنار یکدیگر نگهداری کند.

Objectها کاربردی هستند چون می‌توان اطلاعات مرتبط را داخل یک متغیر گروه‌بندی کرد.

برای مثال، به جای ساختن متغیرهای جداگانه:

let name = "Ali";
let age = 25;
let city = "Baku";

می‌توان اطلاعات را در یک Object قرار داد:

let user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

اکنون این اطلاعات متعلق به یک Object به نام user هستند.

می‌توان Propertyهای Object را با Dot Notation دسترسی کرد.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

console.log(user.name);

این کد مقدار زیر را نمایش می‌دهد:

Ali

می‌توان از Bracket Notation نیز استفاده کرد:

console.log(user["name"]);

این کد نیز مقدار زیر را نمایش می‌دهد:

Ali

Dot Notation معمولاً ساده‌ترین انتخاب است وقتی نام Property را از قبل می‌دانیم.

Bracket Notation زمانی بسیار کاربردی می‌شود که نام Property داخل یک متغیر ذخیره شده باشد.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

let property = "age";

console.log(user[property]);

این کد مقدار زیر را نمایش می‌دهد:

25

توجه کنید که user[property] از مقدار ذخیره‌شده داخل property استفاده می‌کند.

اگر بنویسید user.property، JavaScript به دنبال Propertyای می‌گردد که نام واقعی آن "property" باشد.

یک اشتباه رایج برای افراد مبتدی، اشتباه گرفتن Object و Array است.

Array:

let colors = ["red", "blue", "green"];

Object:

let user = {
    name: "Ali",
    age: 25
};

Array بیشتر برای مجموعه‌ای مرتب از مقدارها با اندیس استفاده می‌شود.

Object بیشتر برای نگهداری اطلاعات مرتبط با کلیدهای نام‌گذاری‌شده استفاده می‌شود.

قانون ساده:

Array → مقدارهای مرتب با استفاده از اندیس
Object → اطلاعات مرتبط با استفاده از کلیدهای نام‌گذاری‌شده

Objectها یکی از مهم‌ترین ساختارهای JavaScript هستند و در درس‌های بعدی یاد می‌گیریم چگونه Propertyها را تغییر دهیم، حذف کنیم، Objectهای تو در تو بسازیم و با متدهای Object کار کنیم.`
        }
    },

    {
        id: 31,
        title: "Accessing, Updating & Deleting Object Properties",
        faTitle: "دسترسی، تغییر و حذف Propertyهای آبجکت",
        content: {
            en: `In the previous lesson, we learned that Objects store related data using key-value pairs.

Now we'll learn how to access, update, add, and delete Object properties.

For example:

let user = {
    name: "Ali",
    age: 25
};

An Object property can be accessed using dot notation.

For example:

console.log(user.name);

This prints:

Ali

You can access another property in the same way:

console.log(user.age);

This prints:

25

Dot notation is usually the simplest way to access a property when you already know its name.

You can also use bracket notation to access a property.

For example:

console.log(user["name"]);

This also prints:

Ali

Bracket notation is especially useful when the property name is stored inside a variable.

For example:

let property = "name";

console.log(user[property]);

This prints:

Ali

Notice that user[property] uses the value stored inside property as the property name.

If property contains "age":

let property = "age";

console.log(user[property]);

This prints:

25

This is different from:

console.log(user.property);

In this case, JavaScript looks for a property literally named "property".

You can also use bracket notation with a variable to update a property.

For example:

let property = "age";

user[property] = 26;

Now the age property contains:

26

Object properties can be updated using assignment.

For example:

let user = {
    name: "Ali",
    age: 25
};

user.age = 26;

console.log(user.age);

This prints:

26

You can also update a property using bracket notation:

user["name"] = "Sara";

Now the name property contains:

Sara

If a property does not exist, assigning a value to it creates a new property.

For example:

let user = {
    name: "Ali"
};

user.age = 25;

Now the Object contains:

name → "Ali"
age → 25

You can also create a new property using bracket notation:

user["city"] = "Baku";

Now the Object also contains:

city → "Baku"

To remove a property from an Object, we use the delete operator.

For example:

let user = {
    name: "Ali",
    age: 25
};

delete user.age;

After this operation, the age property no longer exists in the Object.

The name property still exists:

user.name → "Ali"

A common beginner mistake is confusing delete with assigning undefined.

For example:

user.age = undefined;

This does not remove the age property.

The property still exists, but its value is undefined.

However:

delete user.age;

removes the property itself.

This difference becomes important when checking whether an Object contains a specific property.

Quick rule:

Read a property:

user.name

Read using a variable:

user[property]

Update a property:

user.name = "Sara"

Add a property:

user.age = 25

Delete a property:

delete user.age

Remember:

Dot notation is convenient when you know the property name.

Bracket notation is useful when the property name is stored in a variable.

Assignment can update existing properties or create new ones.

delete removes the property itself.

These operations are the foundation for working with Object data in JavaScript. In the next lessons, we'll learn more powerful ways to work with Object methods, nested Objects, and Object utility methods.`,

            fa: `در درس قبل یاد گرفتیم که Objectها اطلاعات مرتبط را به صورت جفت‌های کلید و مقدار ذخیره می‌کنند.

حالا می‌خواهیم یاد بگیریم چگونه به Propertyهای یک Object دسترسی پیدا کنیم، آن‌ها را تغییر دهیم، Property جدید اضافه کنیم و Propertyها را حذف کنیم.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

می‌توانیم با استفاده از Dot Notation به یک Property از Object دسترسی پیدا کنیم.

برای مثال:

console.log(user.name);

این کد مقدار زیر را نمایش می‌دهد:

Ali

می‌توانیم به Property دیگری نیز به همین روش دسترسی پیدا کنیم:

console.log(user.age);

این کد مقدار زیر را نمایش می‌دهد:

25

Dot Notation معمولاً ساده‌ترین روش برای دسترسی به یک Property است، زمانی که نام آن را از قبل می‌دانیم.

روش دیگری که برای دسترسی به Property استفاده می‌شود، Bracket Notation است.

برای مثال:

console.log(user["name"]);

این کد نیز مقدار زیر را نمایش می‌دهد:

Ali

Bracket Notation زمانی بسیار کاربردی است که نام Property داخل یک Variable ذخیره شده باشد.

برای مثال:

let property = "name";

console.log(user[property]);

این کد مقدار زیر را نمایش می‌دهد:

Ali

توجه کنید که عبارت user[property] از مقدار ذخیره‌شده داخل property به عنوان نام Property استفاده می‌کند.

اگر property شامل "age" باشد:

let property = "age";

console.log(user[property]);

این کد مقدار زیر را نمایش می‌دهد:

25

این عبارت با عبارت زیر متفاوت است:

console.log(user.property);

در این حالت JavaScript به دنبال Propertyای می‌گردد که نام واقعی آن "property" باشد.

می‌توانیم با استفاده از Bracket Notation و یک Variable، مقدار یک Property را نیز تغییر دهیم.

برای مثال:

let property = "age";

user[property] = 26;

اکنون مقدار Property مربوط به age برابر است با:

26

می‌توانیم مقدار Propertyهای Object را با Assignment تغییر دهیم.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

user.age = 26;

console.log(user.age);

این کد مقدار زیر را نمایش می‌دهد:

26

همچنین می‌توانیم با استفاده از Bracket Notation یک Property را تغییر دهیم:

user["name"] = "Sara";

اکنون مقدار Property مربوط به name برابر است با:

Sara

اگر یک Property وجود نداشته باشد، Assignment کردن یک مقدار به آن، یک Property جدید ایجاد می‌کند.

برای مثال:

let user = {
    name: "Ali"
};

user.age = 25;

اکنون Object شامل این Propertyهاست:

name → "Ali"
age → 25

همچنین می‌توانیم با استفاده از Bracket Notation یک Property جدید ایجاد کنیم:

user["city"] = "Baku";

اکنون Object شامل این Property نیز هست:

city → "Baku"

برای حذف یک Property از Object از Operator به نام delete استفاده می‌کنیم.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

delete user.age;

بعد از اجرای این دستور، Property مربوط به age دیگر در Object وجود ندارد.

Property مربوط به name همچنان وجود دارد:

user.name → "Ali"

یک اشتباه رایج برای افراد مبتدی، اشتباه گرفتن delete با Assignment کردن undefined است.

برای مثال:

user.age = undefined;

این دستور Property مربوط به age را حذف نمی‌کند.

خود Property همچنان وجود دارد، اما مقدار آن undefined است.

اما این دستور:

delete user.age;

خود Property را حذف می‌کند.

این تفاوت زمانی مهم می‌شود که بخواهیم بررسی کنیم آیا یک Object شامل یک Property خاص است یا نه.

قانون ساده:

خواندن یک Property:

user.name

خواندن با استفاده از یک Variable:

user[property]

تغییر دادن یک Property:

user.name = "Sara"

اضافه کردن یک Property:

user.age = 25

حذف کردن یک Property:

delete user.age

به یاد داشته باشید:

Dot Notation زمانی ساده و مناسب است که نام Property را می‌دانیم.

Bracket Notation زمانی کاربردی است که نام Property داخل یک Variable ذخیره شده باشد.

Assignment می‌تواند مقدار یک Property موجود را تغییر دهد یا یک Property جدید ایجاد کند.

delete خود Property را حذف می‌کند.

این عملیات پایه‌ی کار با داده‌های Object در JavaScript هستند. در درس‌های بعدی یاد می‌گیریم چگونه با Object Methodها، Objectهای تو در تو و متدهای کاربردی Object کار کنیم.`
        }
    },

    {
        id: 32,
        title: "Object Methods & this",
        faTitle: "متدهای Object و this",
        content: {
            en: `An Object can store more than just data.

It can also contain functions.

When a function is stored inside an Object, that function is called a Method.

For example:

let user = {
    name: "Ali",
    greet: function() {
        console.log("Hello");
    }
};

Here, greet is a Method of the user Object.

We can call the Method using dot notation:

user.greet();

This prints:

Hello

A Method can also work with data stored inside the same Object.

For example:

let user = {
    name: "Ali",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

When we call:

user.greet();

This prints:

Hello Ali

The this keyword refers to the Object that the Method is called from.

In this example:

user.greet();

this refers to user.

So:

this.name

means:

user.name

This allows Methods to work with the Object's own data.

For example:

let car = {
    brand: "Porsche",
    model: "911",

    showInfo: function() {
        console.log(this.brand + " " + this.model);
    }
};

car.showInfo();

This prints:

Porsche 911

A Method can also update properties of the Object.

For example:

let user = {
    name: "Ali",
    age: 25,

    birthday: function() {
        this.age = this.age + 1;
    }
};

user.birthday();

console.log(user.age);

This prints:

26

The Method changed the age property of the user Object.

Methods can also have parameters, just like regular functions.

For example:

let user = {
    name: "Ali",

    greet: function(message) {
        console.log(message + ", " + this.name);
    }
};

user.greet("Hello");

This prints:

Hello, Ali

The parameter receives the argument, while this can be used to access data from the Object.

A common beginner mistake is forgetting the parentheses when calling a Method.

This:

user.greet

refers to the Method itself.

This:

user.greet();

actually calls the Method.

Another common mistake is thinking that this always refers to the variable name.

The important idea is that this depends on how the function is called.

When a Method is called like:

user.greet();

this refers to the user Object.

Quick rule:

Function inside an Object → Method

Call a Method:

user.greet()

Access Object data inside a Method:

this.name

Update Object data inside a Method:

this.age = 26

Remember:

Methods allow Objects to contain both data and behavior.

The this keyword lets a Method work with the data belonging to the Object.

This makes Objects much more powerful and is an important step toward understanding how JavaScript organizes related data and behavior.`,

            fa: `یک Object فقط می‌تواند داده‌ها را نگهداری کند.

همچنین می‌تواند شامل Functionها نیز باشد.

وقتی یک Function داخل یک Object ذخیره شود، به آن Method گفته می‌شود.

برای مثال:

let user = {
    name: "Ali",
    greet: function() {
        console.log("Hello");
    }
};

در اینجا greet یک Method از Object مربوط به user است.

می‌توانیم Method را با استفاده از Dot Notation اجرا کنیم:

user.greet();

این کد مقدار زیر را نمایش می‌دهد:

Hello

یک Method می‌تواند با داده‌های ذخیره‌شده در همان Object نیز کار کند.

برای مثال:

let user = {
    name: "Ali",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

وقتی این Method را اجرا کنیم:

user.greet();

مقدار زیر نمایش داده می‌شود:

Hello Ali

کلمه کلیدی this به Objectی اشاره می‌کند که Method از طریق آن اجرا شده است.

در این مثال:

user.greet();

کلمه this به user اشاره می‌کند.

بنابراین:

this.name

به این معناست:

user.name

این ویژگی باعث می‌شود Method بتواند با داده‌های مربوط به Object خودش کار کند.

برای مثال:

let car = {
    brand: "Porsche",
    model: "911",

    showInfo: function() {
        console.log(this.brand + " " + this.model);
    }
};

car.showInfo();

این کد مقدار زیر را نمایش می‌دهد:

Porsche 911

یک Method می‌تواند Propertyهای Object را نیز تغییر دهد.

برای مثال:

let user = {
    name: "Ali",
    age: 25,

    birthday: function() {
        this.age = this.age + 1;
    }
};

user.birthday();

console.log(user.age);

این کد مقدار زیر را نمایش می‌دهد:

26

در اینجا Method مقدار Property مربوط به age را در Object مربوط به user تغییر داده است.

Methodها نیز مانند Functionهای معمولی می‌توانند Parameter داشته باشند.

برای مثال:

let user = {
    name: "Ali",

    greet: function(message) {
        console.log(message + ", " + this.name);
    }
};

user.greet("Hello");

این کد مقدار زیر را نمایش می‌دهد:

Hello, Ali

در اینجا Parameter مقدار Argument را دریافت می‌کند و this برای دسترسی به داده‌های Object استفاده می‌شود.

یک اشتباه رایج برای افراد مبتدی، فراموش کردن پرانتز هنگام اجرای یک Method است.

این:

user.greet

فقط به خود Method اشاره می‌کند.

اما این:

user.greet();

خود Method را اجرا می‌کند.

یک اشتباه رایج دیگر این است که فکر کنیم this همیشه به نام Variable اشاره می‌کند.

نکته مهم این است که مقدار this به نحوه اجرای Function بستگی دارد.

وقتی Method به این شکل اجرا شود:

user.greet();

کلمه this به Object مربوط به user اشاره می‌کند.

قانون ساده:

Function داخل یک Object → Method

اجرای یک Method:

user.greet()

دسترسی به داده‌های Object داخل Method:

this.name

تغییر داده‌های Object داخل Method:

this.age = 26

به یاد داشته باشید:

Methodها به Objectها اجازه می‌دهند هم داده و هم رفتار را در خودشان نگهداری کنند.

کلمه this به Method اجازه می‌دهد با داده‌های متعلق به Object کار کند.

این ویژگی باعث می‌شود Objectها بسیار قدرتمندتر شوند و قدم مهمی برای درک نحوه سازمان‌دهی داده‌ها و رفتارهای مرتبط در JavaScript است.`
        }
    },

    {
        id: 33,
        title: "Nested Objects & Object Utility Methods",
        faTitle: "آبجکت‌های تو در تو و متدهای کاربردی Object",
        content: {
            en: `Objects can contain other Objects.

When an Object is stored inside another Object, we call it a Nested Object.

For example:

let user = {
    name: "Ali",
    profile: {
        city: "Baku",
        age: 25
    }
};

Here, profile is an Object inside the user Object.

We can access a nested property by using dot notation multiple times.

For example:

console.log(user.profile.city);

This prints:

Baku

The first dot accesses profile, and the second dot accesses city inside profile.

We can also access nested properties using bracket notation.

For example:

console.log(user["profile"]["city"]);

This also prints:

Baku

Dot notation and bracket notation can also be combined.

For example:

console.log(user.profile["city"]);

This is also valid.

Nested Objects can contain more levels.

For example:

let user = {
    name: "Ali",
    address: {
        location: {
            city: "Baku"
        }
    }
};

We can access the city with:

console.log(user.address.location.city);

This prints:

Baku

We can also update properties inside a Nested Object.

For example:

let user = {
    name: "Ali",
    profile: {
        city: "Baku"
    }
};

user.profile.city = "Tehran";

Now the city property contains:

Tehran

We can also add a new property to a Nested Object.

For example:

user.profile.age = 25;

Now profile contains:

city → "Tehran"
age → 25

JavaScript also provides useful Object methods for working with Object properties.

Object.keys() returns an Array containing the Object's property names.

For example:

let user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

let keys = Object.keys(user);

console.log(keys);

This prints:

["name", "age", "city"]

Object.values() returns an Array containing the values of the Object's properties.

For example:

let values = Object.values(user);

console.log(values);

This prints:

["Ali", 25, "Baku"]

Object.entries() returns an Array containing key-value pairs.

For example:

let entries = Object.entries(user);

console.log(entries);

This produces:

[
    ["name", "Ali"],
    ["age", 25],
    ["city", "Baku"]
]

Each key-value pair inside the returned Array is itself an Array containing two values:

The property name
The property value

For example:

entries[0]

returns:

["name", "Ali"]

And:

entries[0][1]

returns:

Ali

These Object methods return new Arrays. They do not turn the original Object into an Array.

A common beginner mistake is confusing Object.keys(), Object.values(), and Object.entries().

Object.keys() → property names

Object.values() → property values

Object.entries() → key-value pairs

Quick rule:

Nested Object:

user.profile.city

Object keys:

Object.keys(user)

Object values:

Object.values(user)

Object entries:

Object.entries(user)

Nested Objects are useful when information has its own structure.

Object.keys(), Object.values(), and Object.entries() are useful when we need to inspect or work with an Object's properties.

These tools will become especially useful when we start looping through Object data and combining Objects with other JavaScript features.`,

            fa: `آبجکت‌ها می‌توانند شامل Objectهای دیگری نیز باشند.

وقتی یک Object داخل Object دیگری قرار داشته باشد، به آن Nested Object گفته می‌شود.

برای مثال:

let user = {
    name: "Ali",
    profile: {
        city: "Baku",
        age: 25
    }
};

در اینجا profile یک Object است که داخل Object مربوط به user قرار دارد.

می‌توانیم با استفاده از Dot Notation و چند نقطه به Propertyهای داخلی دسترسی پیدا کنیم.

برای مثال:

console.log(user.profile.city);

این کد مقدار زیر را نمایش می‌دهد:

Baku

در این عبارت، نقطه اول به profile دسترسی پیدا می‌کند و نقطه دوم به city داخل profile دسترسی پیدا می‌کند.

همچنین می‌توانیم برای دسترسی به Propertyهای تو در تو از Bracket Notation استفاده کنیم.

برای مثال:

console.log(user["profile"]["city"]);

این کد نیز مقدار زیر را نمایش می‌دهد:

Baku

می‌توانیم Dot Notation و Bracket Notation را با یکدیگر ترکیب کنیم.

برای مثال:

console.log(user.profile["city"]);

این روش نیز معتبر است.

Nested Objectها می‌توانند چندین سطح تو در تو داشته باشند.

برای مثال:

let user = {
    name: "Ali",
    address: {
        location: {
            city: "Baku"
        }
    }
};

می‌توانیم با عبارت زیر به city دسترسی پیدا کنیم:

console.log(user.address.location.city);

این کد مقدار زیر را نمایش می‌دهد:

Baku

همچنین می‌توانیم Propertyهای داخل یک Nested Object را تغییر دهیم.

برای مثال:

let user = {
    name: "Ali",
    profile: {
        city: "Baku"
    }
};

user.profile.city = "Tehran";

اکنون مقدار Property مربوط به city برابر است با:

Tehran

می‌توانیم یک Property جدید نیز به یک Nested Object اضافه کنیم.

برای مثال:

user.profile.age = 25;

اکنون profile شامل این Propertyهاست:

city → "Tehran"
age → 25

JavaScript همچنین متدهای کاربردی مختلفی برای کار با Propertyهای Object در اختیار ما قرار می‌دهد.

Object.keys() یک Array شامل نام Propertyهای Object برمی‌گرداند.

برای مثال:

let user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

let keys = Object.keys(user);

console.log(keys);

این کد مقدار زیر را نمایش می‌دهد:

["name", "age", "city"]

Object.values() یک Array شامل مقدار Propertyهای Object برمی‌گرداند.

برای مثال:

let values = Object.values(user);

console.log(values);

این کد مقدار زیر را نمایش می‌دهد:

["Ali", 25, "Baku"]

Object.entries() یک Array شامل جفت‌های کلید و مقدار برمی‌گرداند.

برای مثال:

let entries = Object.entries(user);

console.log(entries);

این کد نتیجه‌ای مانند زیر ایجاد می‌کند:

[
    ["name", "Ali"],
    ["age", 25],
    ["city", "Baku"]
]

هر جفت کلید و مقدار داخل Array برگشتی، خودش یک Array است که شامل دو مقدار می‌شود:

نام Property
مقدار Property

برای مثال:

entries[0]

مقدار زیر را برمی‌گرداند:

["name", "Ali"]

و:

entries[0][1]

مقدار زیر را برمی‌گرداند:

Ali

نکته مهم این است که این متدهای Object، Arrayهای جدید برمی‌گردانند و Object اصلی را به Array تبدیل نمی‌کنند.

یک اشتباه رایج برای افراد مبتدی، اشتباه گرفتن Object.keys()، Object.values() و Object.entries() است.

Object.keys() → نام Propertyها

Object.values() → مقدار Propertyها

Object.entries() → جفت‌های کلید و مقدار

قانون ساده:

Nested Object:

user.profile.city

نام Propertyها:

Object.keys(user)

مقدار Propertyها:

Object.values(user)

جفت‌های کلید و مقدار:

Object.entries(user)

Nested Objectها زمانی کاربردی هستند که اطلاعات ساختار داخلی مشخصی داشته باشند.

Object.keys()، Object.values() و Object.entries() زمانی کاربردی هستند که بخواهیم Propertyهای یک Object را بررسی کنیم یا با آن‌ها کار کنیم.

این ابزارها در ادامه زمانی کاربردی‌تر می‌شوند که یاد بگیریم چگونه روی داده‌های Object حلقه بزنیم و Objectها را با قابلیت‌های دیگر JavaScript ترکیب کنیم.`
        }
    },

    {
        id: 34,
        title: "Object Destructuring",
        faTitle: "Destructuring آبجکت",
        content: {
            en: `Object Destructuring is a JavaScript feature that allows us to extract properties from an Object and store their values in variables.

For example:

let user = {
    name: "Ali",
    age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);

This prints:

Ali
25

The variables name and age receive the values of the corresponding Object properties.

The property names inside the destructuring pattern must match the Object property names.

For example:

let user = {
    name: "Ali",
    age: 25
};

const { name } = user;

console.log(name);

This prints:

Ali

You do not have to extract every property from an Object.

For example:

let user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

const { name, city } = user;

console.log(name);
console.log(city);

This prints:

Ali
Baku

The order of properties does not matter when using Object Destructuring.

For example:

let user = {
    name: "Ali",
    age: 25
};

const { age, name } = user;

console.log(age);
console.log(name);

This prints:

25
Ali

JavaScript matches the property names, not their positions.

We can also rename a destructured property when creating the variable.

For example:

let user = {
    name: "Ali"
};

const { name: userName } = user;

console.log(userName);

This prints:

Ali

Here, name is the Object property and userName is the new variable name.

We can also provide a default value when a property does not exist.

For example:

let user = {
    name: "Ali"
};

const { age = 25 } = user;

console.log(age);

This prints:

25

If the age property does not exist, the default value 25 is used.

If the property exists, its actual value is used instead.

For example:

let user = {
    name: "Ali",
    age: 30
};

const { age = 25 } = user;

console.log(age);

This prints:

30

If you destructure a property that does not exist and do not provide a default value, the variable receives undefined.

For example:

let user = {
    name: "Ali"
};

const { age } = user;

console.log(age);

This prints:

undefined

Object Destructuring can also work with Nested Objects.

For example:

let user = {
    name: "Ali",
    profile: {
        city: "Baku"
    }
};

const { profile: { city } } = user;

console.log(city);

This prints:

Baku

Here, JavaScript first accesses the profile Object and then extracts its city property.

A common beginner mistake is thinking that Object Destructuring depends on property order.

It does not.

JavaScript matches the property names.

Another common mistake is confusing renaming with creating a new Object property.

For example:

const { name: userName } = user;

This does not rename the name property inside the Object.

It creates a new variable called userName that receives the value of name.

Quick rule:

Extract properties:

const { name, age } = user

Rename a variable:

const { name: userName } = user

Use a default value:

const { age = 25 } = user

Extract from a Nested Object:

const { profile: { city } } = user

Remember:

Object Destructuring makes it easier to work with Object data by extracting the properties we need into variables.

It is especially useful when an Object contains many properties and we only need a few of them.

As you work with JavaScript, you'll see Object Destructuring frequently in functions, APIs, and modern JavaScript code.`,

            fa: `قابلیت Object Destructuring در JavaScript به ما اجازه می‌دهد Propertyهای یک Object را استخراج کنیم و مقدار آن‌ها را داخل Variableها قرار دهیم.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);

این کد مقدارهای زیر را نمایش می‌دهد:

Ali
25

در اینجا Variableهای name و age مقدار Propertyهای متناظر خود را دریافت می‌کنند.

نام Propertyها در الگوی Destructuring باید با نام Propertyهای Object مطابقت داشته باشد.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

const { name } = user;

console.log(name);

این کد مقدار زیر را نمایش می‌دهد:

Ali

لازم نیست تمام Propertyهای یک Object را استخراج کنیم.

برای مثال:

let user = {
    name: "Ali",
    age: 25,
    city: "Baku"
};

const { name, city } = user;

console.log(name);
console.log(city);

این کد مقدارهای زیر را نمایش می‌دهد:

Ali
Baku

ترتیب Propertyها هنگام استفاده از Object Destructuring اهمیتی ندارد.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

const { age, name } = user;

console.log(age);
console.log(name);

این کد مقدارهای زیر را نمایش می‌دهد:

25
Ali

نکته مهم این است که JavaScript Propertyها را بر اساس نام آن‌ها پیدا می‌کند، نه موقعیت آن‌ها.

می‌توانیم هنگام ساخت Variable، نام Property استخراج‌شده را نیز تغییر دهیم.

برای مثال:

let user = {
    name: "Ali"
};

const { name: userName } = user;

console.log(userName);

این کد مقدار زیر را نمایش می‌دهد:

Ali

در اینجا name نام Property در Object است و userName نام Variable جدید است.

همچنین می‌توانیم زمانی که یک Property وجود ندارد، یک مقدار پیش‌فرض برای آن مشخص کنیم.

برای مثال:

let user = {
    name: "Ali"
};

const { age = 25 } = user;

console.log(age);

این کد مقدار زیر را نمایش می‌دهد:

25

اگر Property مربوط به age وجود نداشته باشد، مقدار پیش‌فرض 25 استفاده می‌شود.

اگر Property وجود داشته باشد، مقدار واقعی آن استفاده می‌شود.

برای مثال:

let user = {
    name: "Ali",
    age: 30
};

const { age = 25 } = user;

console.log(age);

این کد مقدار زیر را نمایش می‌دهد:

30

اگر Propertyای را Destructure کنیم که وجود ندارد و مقدار پیش‌فرضی هم مشخص نکنیم، Variable مقدار undefined را دریافت می‌کند.

برای مثال:

let user = {
    name: "Ali"
};

const { age } = user;

console.log(age);

این کد مقدار زیر را نمایش می‌دهد:

undefined

Object Destructuring می‌تواند با Nested Objectها نیز کار کند.

برای مثال:

let user = {
    name: "Ali",
    profile: {
        city: "Baku"
    }
};

const { profile: { city } } = user;

console.log(city);

این کد مقدار زیر را نمایش می‌دهد:

Baku

در اینجا JavaScript ابتدا به Object مربوط به profile دسترسی پیدا می‌کند و سپس Property مربوط به city را استخراج می‌کند.

یک اشتباه رایج برای افراد مبتدی این است که فکر کنند Object Destructuring به ترتیب Propertyها وابسته است.

این‌طور نیست.

JavaScript Propertyها را بر اساس نام آن‌ها پیدا می‌کند.

یک اشتباه رایج دیگر، اشتباه گرفتن Renaming با تغییر نام Property داخل Object است.

برای مثال:

const { name: userName } = user;

این دستور Property مربوط به name را داخل Object تغییر نام نمی‌دهد.

بلکه یک Variable جدید به نام userName ایجاد می‌کند که مقدار Property مربوط به name را دریافت می‌کند.

قانون ساده:

استخراج Propertyها:

const { name, age } = user

تغییر نام Variable:

const { name: userName } = user

استفاده از مقدار پیش‌فرض:

const { age = 25 } = user

استخراج از Nested Object:

const { profile: { city } } = user

به یاد داشته باشید:

Object Destructuring کار با داده‌های Object را ساده‌تر می‌کند، چون می‌توانیم Propertyهای موردنیاز خود را مستقیماً داخل Variableها استخراج کنیم.

این قابلیت مخصوصاً زمانی کاربردی است که یک Object Propertyهای زیادی داشته باشد و فقط به چند مورد از آن‌ها نیاز داشته باشیم.

در ادامه مسیر JavaScript، Object Destructuring را به‌طور مرتب در Functionها، APIها و کدهای مدرن JavaScript خواهید دید.`
        }
    },

    {
        id: 35,
        title: "Global, Function & Block Scope",
        faTitle: "Scope سراسری، تابعی و بلوکی",
        content: {
            en: `Scope determines where a variable can be accessed in JavaScript.

In other words, Scope tells us which parts of our code can see and use a variable.

For example:

let name = "Ali";

console.log(name);

The variable name can be accessed from the code where it is available.

JavaScript has different kinds of Scope.

The three important types we will learn are:

Global Scope
Function Scope
Block Scope

━━━━━━━━━━━━━━

🔹 Global Scope

A variable declared outside a function or block can have Global Scope.

For example:

let name = "Ali";

function greet() {
    console.log(name);
}

greet();

This prints:

Ali

The function can access the name variable because name was declared outside the function.

A globally scoped variable can be accessed from different parts of the program where that variable is visible.

For example:

let score = 100;

console.log(score);

function showScore() {
    console.log(score);
}

showScore();

Both console.log statements can access score.

Global variables can be useful, but creating too many global variables can make larger programs harder to manage.

━━━━━━━━━━━━━━

🔹 Function Scope

Variables declared inside a function are available inside that function.

For example:

function greet() {
    let message = "Hello";

    console.log(message);
}

greet();

This prints:

Hello

However, the message variable cannot be accessed from outside the function.

For example:

function greet() {
    let message = "Hello";
}

console.log(message);

This causes an error because message only exists inside the function.

This is called Function Scope.

Each time the function runs, its local variables belong to that function execution.

For example:

function showNumber() {
    let number = 10;

    console.log(number);
}

showNumber();

The variable number is local to the function.

━━━━━━━━━━━━━━

🔹 Global vs Function Scope

Compare these two examples:

let name = "Ali";

function greet() {
    console.log(name);
}

Here, name is available inside the function because it was declared outside.

Now compare:

function greet() {
    let name = "Ali";
}

console.log(name);

Here, name is only available inside the function.

The important rule is:

A function can access variables from its surrounding scope.

Code outside the function cannot directly access variables declared inside the function.

━━━━━━━━━━━━━━

🔹 Block Scope

A Block is code surrounded by curly braces.

For example:

if (true) {
    let message = "Hello";

    console.log(message);
}

The code inside the curly braces is a block.

Variables declared with let or const inside a block are Block Scoped.

For example:

if (true) {
    let message = "Hello";

    console.log(message);
}

This works because message is used inside the block where it was declared.

But this:

if (true) {
    let message = "Hello";
}

console.log(message);

causes an error because message only exists inside the block.

Block Scope commonly appears with if statements and loops.

For example:

for (let i = 0; i < 3; i++) {
    console.log(i);
}

The variable i is available inside the loop block.

It cannot be accessed after the loop.

━━━━━━━━━━━━━━

🔹 let and const Are Block Scoped

Both let and const follow Block Scope.

For example:

if (true) {
    const city = "Baku";
    let age = 25;

    console.log(city);
    console.log(age);
}

Both variables are available inside the block.

They are not available outside it.

This is one reason let and const are safer and easier to control than var in modern JavaScript.

━━━━━━━━━━━━━━

🔹 Scope Can Be Nested

Scopes can exist inside other scopes.

For example:

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

The innermost block can access variables from its surrounding scopes.

In this example, the block can access:

name
message
city

because those variables are available from the surrounding scopes or the current block.

━━━━━━━━━━━━━━

🔹 Common Beginner Mistake

A common mistake is thinking that a variable declared inside a function or block can always be accessed from outside.

For example:

function test() {
    let value = 10;
}

console.log(value);

This does not work because value belongs to the function scope.

The same idea applies to block scope:

if (true) {
    let value = 10;
}

console.log(value);

This does not work because value belongs to the block.

━━━━━━━━━━━━━━

🧠 Quick Rule

Global Scope:

let name = "Ali";

Function Scope:

function test() {
    let value = 10;
}

Block Scope:

if (true) {
    let value = 10;
}

Remember:

Global → available from its surrounding program scope

Function → available inside the function

Block → available inside the block

A variable can be accessed only where its Scope allows it.

Understanding Scope is extremely important because it prevents variables from being used in places where they should not exist.

In the next lesson, we'll go deeper into how JavaScript remembers surrounding variables with Lexical Scope and Closures.`
            ,
            fa: `محدوده یا Scope مشخص می‌کند که یک Variable در کدام بخش از JavaScript قابل دسترسی است.

به عبارت دیگر، Scope مشخص می‌کند کدام قسمت‌های کد می‌توانند یک Variable را ببینند و از آن استفاده کنند.

برای مثال:

let name = "Ali";

console.log(name);

در اینجا Variable مربوط به name از بخشی از کد که در Scope آن قرار دارد قابل دسترسی است.

در JavaScript چند نوع Scope وجود دارد.

سه نوع مهمی که در این درس یاد می‌گیریم عبارت‌اند از:

Global Scope
Function Scope
Block Scope

━━━━━━━━━━━━━━

🔹 Global Scope

متغیری که خارج از Function یا Block تعریف شود، می‌تواند دارای Global Scope باشد.

برای مثال:

let name = "Ali";

function greet() {
    console.log(name);
}

greet();

این کد مقدار زیر را نمایش می‌دهد:

Ali

در اینجا Function می‌تواند به Variable مربوط به name دسترسی داشته باشد، چون name خارج از Function تعریف شده است.

یک Variable با Global Scope می‌تواند از بخش‌های مختلف برنامه که در Scope آن قرار دارند قابل دسترسی باشد.

برای مثال:

let score = 100;

console.log(score);

function showScore() {
    console.log(score);
}

showScore();

هر دو دستور console.log می‌توانند به score دسترسی داشته باشند.

متغیرهای Global می‌توانند مفید باشند، اما استفاده بیش از حد از آن‌ها در برنامه‌های بزرگ می‌تواند مدیریت کد را سخت‌تر کند.

━━━━━━━━━━━━━━

🔹 Function Scope

متغیرهایی که داخل یک Function تعریف می‌شوند، در داخل همان Function قابل دسترسی هستند.

برای مثال:

function greet() {
    let message = "Hello";

    console.log(message);
}

greet();

این کد مقدار زیر را نمایش می‌دهد:

Hello

اما Variable مربوط به message را نمی‌توان از خارج Function استفاده کرد.

برای مثال:

function greet() {
    let message = "Hello";
}

console.log(message);

این کد باعث خطا می‌شود، چون message فقط داخل Function وجود دارد.

به این نوع محدوده Function Scope گفته می‌شود.

هر بار که Function اجرا می‌شود، Variableهای محلی آن متعلق به همان اجرای Function هستند.

برای مثال:

function showNumber() {
    let number = 10;

    console.log(number);
}

showNumber();

در اینجا Variable مربوط به number محلی برای Function است.

━━━━━━━━━━━━━━

🔹 Global vs Function Scope

این دو مثال را با یکدیگر مقایسه کنید:

let name = "Ali";

function greet() {
    console.log(name);
}

در اینجا name داخل Function قابل دسترسی است، چون خارج از Function تعریف شده است.

حالا این مثال را ببینید:

function greet() {
    let name = "Ali";
}

console.log(name);

در اینجا name فقط داخل Function قابل دسترسی است.

قانون مهم این است:

یک Function می‌تواند به Variableهای موجود در Scopeهای اطراف خود دسترسی داشته باشد.

کدی که خارج از Function قرار دارد، نمی‌تواند مستقیماً به Variableهای تعریف‌شده داخل Function دسترسی پیدا کند.

━━━━━━━━━━━━━━

🔹 Block Scope

یک Block بخشی از کد است که داخل آکولادهای { } قرار دارد.

برای مثال:

if (true) {
    let message = "Hello";

    console.log(message);
}

کدی که داخل این آکولادها قرار دارد، یک Block را تشکیل می‌دهد.

متغیرهایی که با let یا const داخل یک Block تعریف می‌شوند دارای Block Scope هستند.

برای مثال:

if (true) {
    let message = "Hello";

    console.log(message);
}

این کد درست است، چون message داخل همان Blockی استفاده شده که در آن تعریف شده است.

اما این کد:

if (true) {
    let message = "Hello";
}

console.log(message);

باعث خطا می‌شود، چون message فقط داخل همان Block وجود دارد.

Block Scope معمولاً در If Statementها و Loopها دیده می‌شود.

برای مثال:

for (let i = 0; i < 3; i++) {
    console.log(i);
}

در اینجا Variable مربوط به i داخل Block مربوط به Loop قابل دسترسی است.

بعد از پایان Loop نمی‌توان به i دسترسی داشت.

━━━━━━━━━━━━━━

🔹 let و const دارای Block Scope هستند

متغیرهایی که با let و const تعریف می‌شوند از Block Scope پیروی می‌کنند.

برای مثال:

if (true) {
    const city = "Baku";
    let age = 25;

    console.log(city);
    console.log(age);
}

هر دو Variable داخل Block قابل دسترسی هستند.

اما خارج از Block قابل دسترسی نیستند.

این یکی از دلایلی است که let و const در JavaScript مدرن نسبت به var کنترل بهتری روی Scope ایجاد می‌کنند.

━━━━━━━━━━━━━━

🔹 Scope می‌تواند تو در تو باشد

Scopeها می‌توانند داخل Scopeهای دیگر قرار بگیرند.

برای مثال:

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

در اینجا داخلی‌ترین Block می‌تواند به Variableهای موجود در Scopeهای اطراف خود دسترسی داشته باشد.

در این مثال، Block می‌تواند به این Variableها دسترسی داشته باشد:

name
message
city

چون این Variableها در Scopeهای اطراف یا در Scope فعلی قابل دسترسی هستند.

━━━━━━━━━━━━━━

🔹 Common Beginner Mistake

یک اشتباه رایج برای افراد مبتدی این است که فکر کنند Variable تعریف‌شده داخل Function یا Block همیشه از خارج نیز قابل دسترسی است.

برای مثال:

function test() {
    let value = 10;
}

console.log(value);

این کد کار نمی‌کند، چون value متعلق به Function Scope است.

همین مفهوم برای Block Scope نیز وجود دارد:

if (true) {
    let value = 10;
}

console.log(value);

این کد نیز کار نمی‌کند، چون value متعلق به همان Block است.

━━━━━━━━━━━━━━

🧠 Quick Rule

Global Scope:

let name = "Ali";

Function Scope:

function test() {
    let value = 10;
}

Block Scope:

if (true) {
    let value = 10;
}

به یاد داشته باشید:

Global → در محدوده برنامه قابل دسترسی است

Function → داخل Function قابل دسترسی است

Block → داخل Block قابل دسترسی است

هر Variable فقط در محدوده‌ای قابل دسترسی است که Scope آن اجازه می‌دهد.

درک Scope بسیار مهم است، چون از استفاده از Variableها در قسمت‌هایی که نباید در دسترس باشند جلوگیری می‌کند.

در درس بعدی عمیق‌تر بررسی می‌کنیم که JavaScript چگونه Variableهای موجود در Scopeهای اطراف را به خاطر می‌سپارد و Lexical Scope و Closure چگونه کار می‌کنند.`
        }
    },

    {
        id: 36,
        title: "Lexical Scope & Closures",
        faTitle: "Lexical Scope و Closure",
        content: {
            en: `Lexical Scope describes how JavaScript determines which variables are available based on where the code is written.

For example:

let name = "Ali";

function greet() {
    console.log(name);
}

greet();

The function can access name because it was written inside a scope where name is available.

A nested function can access variables from its outer function.

For example:

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

This prints:

Hello

The inner function can access message because message belongs to its outer scope.

This also works even after the outer function has finished running.

When a function remembers and keeps access to variables from its surrounding scope, this is called a Closure.

For example:

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());

This prints:

1
2

The returned function remembers the count variable even though createCounter() has already finished.

Closures are useful for keeping data private and preserving state between function calls.

A common beginner mistake is thinking that local variables are always destroyed and inaccessible immediately after a function finishes.

A Closure can keep access to those variables when an inner function still references them.

Quick rule:

Outer scope → inner code can access it

Inner scope → outer code cannot directly access it

Closure → a function remembers variables from its surrounding scope

Closures are an important JavaScript concept and will become especially useful when working with callbacks, event handlers, and more advanced patterns.`,

            fa: `Lexical Scope توضیح می‌دهد که JavaScript بر اساس محلی که کد در آن نوشته شده است، مشخص می‌کند کدام Variableها در دسترس هستند.

برای مثال:

let name = "Ali";

function greet() {
    console.log(name);
}

greet();

در اینجا Function می‌تواند به name دسترسی داشته باشد، چون در Scopeای نوشته شده که name در آن قابل دسترسی است.

یک Function تو در تو می‌تواند به Variableهای Function بیرونی خود دسترسی داشته باشد.

برای مثال:

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

این کد مقدار زیر را نمایش می‌دهد:

Hello

در اینجا Function داخلی می‌تواند به message دسترسی داشته باشد، چون message متعلق به Scope بیرونی آن است.

این دسترسی حتی می‌تواند بعد از پایان اجرای Function بیرونی نیز ادامه داشته باشد.

وقتی یک Function Variableهای موجود در Scope اطراف خود را به خاطر می‌سپارد و همچنان به آن‌ها دسترسی دارد، به این رفتار Closure گفته می‌شود.

برای مثال:

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());

این کد مقدارهای زیر را نمایش می‌دهد:

1
2

در اینجا Function برگشتی، Variable مربوط به count را به خاطر می‌سپارد، حتی اگر createCounter() قبلاً تمام شده باشد.

Closureها برای نگهداری اطلاعات خصوصی و حفظ State بین اجرای Functionها کاربردی هستند.

یک اشتباه رایج برای افراد مبتدی این است که فکر کنند Variableهای محلی بلافاصله بعد از پایان Function دیگر قابل دسترسی نیستند.

Closure می‌تواند زمانی که یک Function داخلی همچنان به آن Variableها اشاره می‌کند، دسترسی به آن‌ها را حفظ کند.

قانون ساده:

Scope بیرونی → کد داخلی می‌تواند به آن دسترسی داشته باشد

Scope داخلی → کد بیرونی نمی‌تواند مستقیماً به آن دسترسی داشته باشد

Closure → یک Function Variableهای Scope اطراف خود را به خاطر می‌سپارد

Closureها یکی از مفاهیم مهم JavaScript هستند و در ادامه هنگام کار با Callbackها، Event Handlerها و الگوهای پیشرفته‌تر بسیار کاربردی خواهند بود.`
        }
    },

    {
        id: 37,
        title: "Template Literals & Default Parameters",
        faTitle: "Template Literal و Default Parameter",
        content: {
            en: `Template Literals provide an easier way to create Strings that contain variables or expressions.

They use backticks instead of single or double quotes.

For example:

let name = "Ali";

let message = \`Hello \${name}\`;

console.log(message);

This prints:

Hello Ali

The \${} syntax allows us to insert a variable or expression directly into a String.

For example:

let age = 25;

let message = \`I am \${age} years old.\`;

console.log(message);

This prints:

I am 25 years old.

We can also use expressions inside Template Literals.

For example:

let price = 100;
let quantity = 3;

let total = \`Total: \${price * quantity}\`;

console.log(total);

This prints:

Total: 300

Template Literals can also contain multiple lines without using special newline characters.

For example:

let message = \`Hello Ali
Welcome to JavaScript
Keep learning!\`;

This creates a String containing multiple lines.

A common beginner mistake is using normal quotes instead of backticks when trying to use \${}.

For example:

let name = "Ali";

let message = "Hello \${name}";

Here, \${name} is treated as normal text.

With backticks:

let message = \`Hello \${name}\`;

JavaScript replaces \${name} with the value of name.

━━━━━━━━━━━━━━

🔹 Default Parameters

A function parameter can have a default value.

For example:

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();

This prints:

Hello Guest

If an argument is provided, the provided value is used.

For example:

greet("Ali");

This prints:

Hello Ali

Default parameters are useful when a function should have a fallback value when no argument is provided.

For example:

function createMessage(message = "No message") {
    console.log(message);
}

createMessage();

This prints:

No message

But:

createMessage("Hello");

prints:

Hello

Quick rule:

Template Literal → use backticks

Insert a value:

\`Hello \${name}\`

Default Parameter:

function greet(name = "Guest") {}

No argument → default value

Argument provided → provided value

Template Literals make dynamic Strings easier to read, while Default Parameters make functions more flexible when arguments are missing.`,

            fa: `Template Literalها روش ساده‌تری برای ساختن Stringهایی هستند که شامل Variable یا Expression می‌شوند.

این Stringها به جای Single Quote یا Double Quote با Backtick نوشته می‌شوند.

برای مثال:

let name = "Ali";

let message = \`Hello \${name}\`;

console.log(message);

این کد مقدار زیر را نمایش می‌دهد:

Hello Ali

ساختار \${} به ما اجازه می‌دهد یک Variable یا Expression را مستقیماً داخل String قرار دهیم.

برای مثال:

let age = 25;

let message = \`I am \${age} years old.\`;

console.log(message);

این کد مقدار زیر را نمایش می‌دهد:

I am 25 years old.

همچنین می‌توانیم داخل Template Literal از Expression استفاده کنیم.

برای مثال:

let price = 100;
let quantity = 3;

let total = \`Total: \${price * quantity}\`;

console.log(total);

این کد مقدار زیر را نمایش می‌دهد:

Total: 300

Template Literalها می‌توانند چندین خط را نیز بدون نیاز به کاراکترهای مخصوص New Line در خود نگهداری کنند.

برای مثال:

let message = \`Hello Ali
Welcome to JavaScript
Keep learning!\`;

این کد یک String چندخطی ایجاد می‌کند.

یک اشتباه رایج برای افراد مبتدی، استفاده از Quoteهای معمولی به جای Backtick هنگام استفاده از \${} است.

برای مثال:

let name = "Ali";

let message = "Hello \${name}";

در اینجا \${name} به عنوان متن معمولی در نظر گرفته می‌شود.

اما با استفاده از Backtick:

let message = \`Hello \${name}\`;

JavaScript مقدار name را جایگزین \${name} می‌کند.

━━━━━━━━━━━━━━

🔹 Default Parameters

یک Parameter در Function می‌تواند مقدار پیش‌فرض داشته باشد.

برای مثال:

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();

این کد مقدار زیر را نمایش می‌دهد:

Hello Guest

اگر یک Argument ارسال کنیم، مقدار ارسال‌شده استفاده می‌شود.

برای مثال:

greet("Ali");

این کد مقدار زیر را نمایش می‌دهد:

Hello Ali

Default Parameter زمانی کاربردی است که Function در صورت دریافت نکردن Argument باید یک مقدار جایگزین داشته باشد.

برای مثال:

function createMessage(message = "No message") {
    console.log(message);
}

createMessage();

این کد مقدار زیر را نمایش می‌دهد:

No message

اما:

createMessage("Hello");

مقدار زیر را نمایش می‌دهد:

Hello

قانون ساده:

Template Literal → استفاده از Backtick

قرار دادن یک مقدار:

\`Hello \${name}\`

Default Parameter:

function greet(name = "Guest") {}

بدون Argument → مقدار پیش‌فرض

با Argument → مقدار ارسال‌شده

Template Literalها ساختن Stringهای پویا را ساده‌تر می‌کنند و Default Parameterها باعث می‌شوند Functionها هنگام نبودن Argument انعطاف‌پذیرتر باشند.`
        }
    },

    {
        id: 38,
        title: "Spread & Rest",
        faTitle: "Spread و Rest",
        content: {
            en: `The Spread and Rest syntax both use three dots (...), but they do different jobs.

━━━━━━━━━━━━━━

🔹 Spread Syntax

Spread expands the values of an Array or Object.

For example:

let fruits = ["Apple", "Banana"];
let moreFruits = [...fruits, "Orange"];

console.log(moreFruits);

This creates:

["Apple", "Banana", "Orange"]

The original Array is not changed.

Spread is useful for combining Arrays.

For example:

let first = [1, 2];
let second = [3, 4];

let numbers = [...first, ...second];

numbers becomes:

[1, 2, 3, 4]

Spread can also copy an Array:

let original = ["A", "B", "C"];
let copy = [...original];

The two Arrays contain the same values, but they are separate Arrays.

Spread can also be used with Objects.

For example:

let user = {
    name: "Ali",
    age: 25
};

let updatedUser = {
    ...user,
    city: "Baku"
};

The new Object contains all properties from user plus city.

━━━━━━━━━━━━━━

🔹 Rest Syntax

Rest also uses ..., but it collects multiple values into one Array.

For example:

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);

numbers becomes:

[10, 20, 30]

Rest is useful when a function can receive an unknown number of arguments.

For example:

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

sum(10, 20, 30);

The function receives all three arguments inside the numbers Array.

Rest can also be used with normal parameters.

For example:

function greet(firstName, ...others) {
    console.log(firstName);
    console.log(others);
}

greet("Ali", "Sara", "John");

firstName receives "Ali".

others receives:

["Sara", "John"]

A common beginner mistake is confusing Spread and Rest.

Quick rule:

Spread → expands values

Rest → collects values

Spread is commonly used when creating or combining Arrays and Objects.

Rest is commonly used in function parameters when collecting multiple arguments.

The three dots look the same, but their job depends on where they are used.`
            ,
            fa: `Spread و Rest هر دو از سه نقطه (...) استفاده می‌کنند، اما کاربرد متفاوتی دارند.

━━━━━━━━━━━━━━

🔹 Spread Syntax

Spread مقدارهای یک Array یا Object را باز می‌کند.

برای مثال:

let fruits = ["Apple", "Banana"];
let moreFruits = [...fruits, "Orange"];

console.log(moreFruits);

این کد مقدار زیر را ایجاد می‌کند:

["Apple", "Banana", "Orange"]

Array اصلی تغییر نمی‌کند.

Spread برای ترکیب کردن Arrayها نیز کاربرد دارد.

برای مثال:

let first = [1, 2];
let second = [3, 4];

let numbers = [...first, ...second];

مقدار numbers برابر می‌شود با:

[1, 2, 3, 4]

همچنین می‌توان با Spread یک Array را کپی کرد:

let original = ["A", "B", "C"];
let copy = [...original];

هر دو Array مقدارهای یکسانی دارند، اما دو Array جداگانه هستند.

Spread را می‌توان برای Object نیز استفاده کرد.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

let updatedUser = {
    ...user,
    city: "Baku"
};

Object جدید تمام Propertyهای user را به همراه city خواهد داشت.

━━━━━━━━━━━━━━

🔹 Rest Syntax

Rest نیز از ... استفاده می‌کند، اما چند مقدار را جمع‌آوری کرده و داخل یک Array قرار می‌دهد.

برای مثال:

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);

در اینجا numbers برابر می‌شود با:

[10, 20, 30]

Rest زمانی کاربردی است که Function بتواند تعداد نامشخصی Argument دریافت کند.

برای مثال:

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

sum(10, 20, 30);

در این Function تمام Argumentها داخل Array مربوط به numbers قرار می‌گیرند.

Rest می‌تواند همراه با Parameterهای معمولی نیز استفاده شود.

برای مثال:

function greet(firstName, ...others) {
    console.log(firstName);
    console.log(others);
}

greet("Ali", "Sara", "John");

در اینجا firstName مقدار "Ali" را دریافت می‌کند.

others مقدار زیر را دریافت می‌کند:

["Sara", "John"]

یک اشتباه رایج برای افراد مبتدی، اشتباه گرفتن Spread و Rest است.

قانون ساده:

Spread → مقدارها را باز می‌کند

Rest → مقدارها را جمع می‌کند

Spread معمولاً برای ساختن یا ترکیب کردن Array و Object استفاده می‌شود.

Rest معمولاً در Parameterهای Function برای جمع‌آوری چند Argument استفاده می‌شود.

سه نقطه در هر دو Syntax یکسان هستند، اما کاربرد آن‌ها به محل استفاده بستگی دارد.`
        }
    },

    {
        id: 39,
        title: "DOM Basics & Selecting Elements",
        faTitle: "مبانی DOM و انتخاب Elementها",
        content: {
            en: `The DOM (Document Object Model) is the structure JavaScript uses to interact with an HTML page.

When a browser loads HTML, it creates a DOM representation of the page.

For example:

<h1 id="title">Hello</h1>

JavaScript can access this element through the DOM.

━━━━━━━━━━━━━━

🔹 Selecting an Element

The most common way to select an element by its id is:

document.getElementById("title");

For example:

let title = document.getElementById("title");

Now title refers to the <h1> element.

You can then work with that element using JavaScript.

Another common method is:

document.querySelector("h1");

querySelector returns the first element that matches a CSS selector.

For example:

document.querySelector("#title");

selects the element with id="title".

You can also select a class:

document.querySelector(".card");

━━━━━━━━━━━━━━

🔹 Selecting Multiple Elements

querySelectorAll selects all elements matching a CSS selector.

For example:

let items = document.querySelectorAll(".item");

This returns a collection containing all matching elements.

For example, if the HTML contains:

<p class="item">One</p>
<p class="item">Two</p>

querySelectorAll(".item") selects both elements.

━━━━━━━━━━━━━━

🔹 DOM and JavaScript

The DOM allows JavaScript to interact with HTML elements.

For example:

let title = document.getElementById("title");

console.log(title);

JavaScript can now access the selected element and later change its text, styles, attributes, or other properties.

A common beginner mistake is forgetting that querySelector uses CSS selector syntax.

For an id:

document.querySelector("#title");

For a class:

document.querySelector(".card");

For an element:

document.querySelector("button");

Quick rule:

getElementById("id") → select by id

querySelector("selector") → select the first matching element

querySelectorAll("selector") → select all matching elements

The DOM is the bridge between JavaScript and the HTML page. In the next lessons, we will use selected elements to actually change the page.`,

            fa: `DOM یا Document Object Model ساختاری است که JavaScript برای تعامل با صفحه HTML از آن استفاده می‌کند.

وقتی مرورگر HTML را بارگذاری می‌کند، یک ساختار DOM از صفحه ایجاد می‌کند.

برای مثال:

<h1 id="title">Hello</h1>

JavaScript می‌تواند از طریق DOM به این Element دسترسی پیدا کند.

━━━━━━━━━━━━━━

🔹 انتخاب Element

رایج‌ترین روش برای انتخاب یک Element با id استفاده از getElementById است:

document.getElementById("title");

برای مثال:

let title = document.getElementById("title");

اکنون title به Element مربوط به h1 اشاره می‌کند.

می‌توانیم سپس با استفاده از JavaScript با این Element کار کنیم.

روش رایج دیگر querySelector است:

document.querySelector("h1");

متد querySelector اولین Element مطابق با CSS Selector را برمی‌گرداند.

برای مثال:

document.querySelector("#title");

Element دارای id برابر title را انتخاب می‌کند.

همچنین می‌توان یک Class را انتخاب کرد:

document.querySelector(".card");

━━━━━━━━━━━━━━

🔹 انتخاب چند Element

متد querySelectorAll تمام Elementهای مطابق با یک CSS Selector را انتخاب می‌کند.

برای مثال:

let items = document.querySelectorAll(".item");

این کد مجموعه‌ای شامل تمام Elementهای مطابق را برمی‌گرداند.

برای مثال اگر HTML شامل موارد زیر باشد:

<p class="item">One</p>
<p class="item">Two</p>

عبارت querySelectorAll(".item") هر دو Element را انتخاب می‌کند.

━━━━━━━━━━━━━━

🔹 DOM و JavaScript

DOM به JavaScript اجازه می‌دهد با Elementهای HTML تعامل داشته باشد.

برای مثال:

let title = document.getElementById("title");

console.log(title);

اکنون JavaScript به Element انتخاب‌شده دسترسی دارد و در درس‌های بعدی می‌توانیم متن، Style، Attribute و Propertyهای آن را تغییر دهیم.

یک اشتباه رایج برای افراد مبتدی، فراموش کردن Syntax مربوط به CSS Selector در querySelector است.

برای id:

document.querySelector("#title");

برای Class:

document.querySelector(".card");

برای Element:

document.querySelector("button");

قانون ساده:

getElementById("id") → انتخاب با id

querySelector("selector") → انتخاب اولین Element مطابق Selector

querySelectorAll("selector") → انتخاب تمام Elementهای مطابق Selector

DOM پل ارتباطی بین JavaScript و صفحه HTML است. در درس‌های بعدی از Elementهای انتخاب‌شده برای تغییر واقعی صفحه استفاده می‌کنیم.`
        }
    },

    {
        id: 40,
        title: "Changing Text, Content, Styles, Classes & Attributes",
        faTitle: "تغییر متن، محتوا، Style، Class و Attribute",
        content: {
            en: `Once JavaScript can select an HTML element, it can also change that element.

━━━━━━━━━━━━━━

🔹 textContent

textContent changes or reads the text inside an element.

For example:

let title = document.getElementById("title");

title.textContent = "Hello JavaScript";

If the HTML is:

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;

the text becomes:

Hello JavaScript

━━━━━━━━━━━━━━

🔹 innerHTML

innerHTML changes the HTML content inside an element.

For example:

let box = document.getElementById("box");

box.innerHTML = "&lt;strong&gt;Hello&lt;/strong&gt;";

This adds a strong element inside box.

textContent treats the assigned value as text, while innerHTML can interpret HTML markup.

━━━━━━━━━━━━━━

🔹 Changing Styles

JavaScript can change inline styles through the style property.

For example:

let title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "30px";

CSS property names written in JavaScript use camelCase.

For example:

background-color → backgroundColor
font-size → fontSize

━━━━━━━━━━━━━━

🔹 Changing Classes

classList allows JavaScript to work with an element's classes.

For example:

title.classList.add("active");

This adds the active class.

You can also remove or toggle a class:

title.classList.remove("active");
title.classList.toggle("active");

━━━━━━━━━━━━━━

🔹 Changing Attributes

setAttribute() can add or change an HTML attribute.

For example:

let link = document.querySelector("a");

link.setAttribute("href", "https://example.com");

getAttribute() reads an attribute:

let url = link.getAttribute("href");

━━━━━━━━━━━━━━

A common beginner mistake is confusing textContent and innerHTML.

textContent → treats the value as text

innerHTML → interprets HTML markup

Quick rule:

textContent → change text

innerHTML → change HTML content

style → change inline styles

classList → manage classes

setAttribute() → change attributes

getAttribute() → read attributes

Now JavaScript can do more than select elements — it can actually change the page.`,

            fa: `وقتی JavaScript بتواند یک Element از HTML را انتخاب کند، می‌تواند آن Element را نیز تغییر دهد.

━━━━━━━━━━━━━━

🔹 textContent

textContent برای خواندن یا تغییر متن داخل یک Element استفاده می‌شود.

برای مثال:

let title = document.getElementById("title");

title.textContent = "Hello JavaScript";

اگر HTML به این شکل باشد:

&lt;h1 id="title"&gt;Hello&lt;/h1&gt;

متن به این مقدار تغییر می‌کند:

Hello JavaScript

━━━━━━━━━━━━━━

🔹 innerHTML

innerHTML محتوای HTML داخل یک Element را تغییر می‌دهد.

برای مثال:

let box = document.getElementById("box");

box.innerHTML = "&lt;strong&gt;Hello&lt;/strong&gt;";

این کد یک Element از نوع strong را داخل box قرار می‌دهد.

textContent مقدار را به عنوان متن در نظر می‌گیرد، اما innerHTML می‌تواند Markup مربوط به HTML را تفسیر کند.

━━━━━━━━━━━━━━

🔹 تغییر Style

JavaScript می‌تواند با استفاده از Property مربوط به style، Styleهای Inline را تغییر دهد.

برای مثال:

let title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "30px";

نام Propertyهای CSS در JavaScript به صورت camelCase نوشته می‌شوند.

برای مثال:

background-color → backgroundColor
font-size → fontSize

━━━━━━━━━━━━━━

🔹 تغییر Class

classList به JavaScript اجازه می‌دهد با Classهای یک Element کار کند.

برای مثال:

title.classList.add("active");

این کد Class مربوط به active را اضافه می‌کند.

همچنین می‌توان Class را حذف یا Toggle کرد:

title.classList.remove("active");
title.classList.toggle("active");

━━━━━━━━━━━━━━

🔹 تغییر Attribute

متد setAttribute() می‌تواند یک Attribute را اضافه یا تغییر دهد.

برای مثال:

let link = document.querySelector("a");

link.setAttribute("href", "https://example.com");

متد getAttribute() برای خواندن یک Attribute استفاده می‌شود:

let url = link.getAttribute("href");

یک اشتباه رایج برای افراد مبتدی، اشتباه گرفتن textContent و innerHTML است.

textContent → مقدار را به عنوان متن در نظر می‌گیرد

innerHTML → Markup مربوط به HTML را تفسیر می‌کند

قانون ساده:

textContent → تغییر متن

innerHTML → تغییر محتوای HTML

style → تغییر Styleهای Inline

classList → مدیریت Classها

setAttribute() → تغییر Attribute

getAttribute() → خواندن Attribute

اکنون JavaScript فقط Elementها را انتخاب نمی‌کند، بلکه می‌تواند واقعاً صفحه را تغییر دهد.`
        }
    },


    {
        id: 41,
        title: "Creating & Removing Elements",
        faTitle: "ساخت و حذف Elementها",
        content: {
            en: `JavaScript can create new HTML elements and add them to the page.

━━━━━━━━━━━━━━

🔹 createElement()

The document.createElement() method creates a new HTML element.

For example:

let paragraph = document.createElement("p");

This creates a new p element, but it is not on the page yet.

You can add content to it:

paragraph.textContent = "Hello JavaScript";

━━━━━━━━━━━━━━

🔹 append()

The append() method adds an element to the end of another element.

For example:

let box = document.getElementById("box");
let paragraph = document.createElement("p");

paragraph.textContent = "Hello";

box.append(paragraph);

Now the new paragraph is inside box.

━━━━━━━━━━━━━━

🔹 prepend()

prepend() adds an element to the beginning.

For example:

box.prepend(paragraph);

The paragraph is inserted before the existing content inside box.

━━━━━━━━━━━━━━

🔹 remove()

An element can remove itself from the page using remove().

For example:

let paragraph = document.querySelector("p");

paragraph.remove();

The selected paragraph is removed from the DOM.

━━━━━━━━━━━━━━

🔹 Creating and Adding Together

These methods are often used together.

For example:

let button = document.createElement("button");

button.textContent = "Click me";

document.body.append(button);

This creates a new button, gives it text, and adds it to the page.

━━━━━━━━━━━━━━

A common beginner mistake is thinking createElement() automatically puts the new element on the page.

It does not.

createElement() → creates the element

append() / prepend() → adds it to the page

remove() → removes it from the page

Quick rule:

createElement() → create

textContent → add text

append() → add to the end

prepend() → add to the beginning

remove() → remove

These methods let JavaScript dynamically change the structure of an HTML page.`,

            fa: `JavaScript می‌تواند Elementهای جدید HTML را ایجاد کند و آن‌ها را به صفحه اضافه کند.

━━━━━━━━━━━━━━

🔹 createElement()

متد document.createElement() یک Element جدید HTML ایجاد می‌کند.

برای مثال:

let paragraph = document.createElement("p");

این کد یک Element از نوع p ایجاد می‌کند، اما هنوز آن را به صفحه اضافه نکرده است.

می‌توانیم داخل آن محتوا قرار دهیم:

paragraph.textContent = "Hello JavaScript";

━━━━━━━━━━━━━━

🔹 append()

متد append() یک Element را به انتهای یک Element دیگر اضافه می‌کند.

برای مثال:

let box = document.getElementById("box");
let paragraph = document.createElement("p");

paragraph.textContent = "Hello";

box.append(paragraph);

اکنون paragraph جدید داخل box قرار گرفته است.

━━━━━━━━━━━━━━

🔹 prepend()

متد prepend() یک Element را به ابتدای محتوای یک Element اضافه می‌کند.

برای مثال:

box.prepend(paragraph);

در این حالت paragraph قبل از محتوای موجود داخل box قرار می‌گیرد.

━━━━━━━━━━━━━━

🔹 remove()

یک Element می‌تواند با استفاده از remove() خودش را از صفحه حذف کند.

برای مثال:

let paragraph = document.querySelector("p");

paragraph.remove();

در اینجا Element مربوط به paragraph از DOM حذف می‌شود.

━━━━━━━━━━━━━━

🔹 ساخت و اضافه کردن همزمان

این متدها معمولاً در کنار یکدیگر استفاده می‌شوند.

برای مثال:

let button = document.createElement("button");

button.textContent = "Click me";

document.body.append(button);

این کد یک Button جدید ایجاد می‌کند، متن آن را مشخص می‌کند و سپس آن را به صفحه اضافه می‌کند.

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، تصور این است که createElement() به صورت خودکار Element جدید را روی صفحه قرار می‌دهد.

این اتفاق نمی‌افتد.

createElement() → ساخت Element

append() / prepend() → اضافه کردن به صفحه

remove() → حذف Element

قانون ساده:

createElement() → ساختن

textContent → قرار دادن متن

append() → اضافه کردن به انتها

prepend() → اضافه کردن به ابتدا

remove() → حذف کردن

این متدها به JavaScript اجازه می‌دهند ساختار صفحه HTML را به صورت پویا تغییر دهد.`
        }
    },

    {
        id: 42,
        title: "Events & Event Listeners",
        faTitle: "Eventها و Event Listenerها",
        content: {
            en: `JavaScript can respond to things that happen on a webpage. These are called events.

Examples:

- A user clicks a button
- A key is pressed
- The mouse moves
- A form is submitted

━━━━━━━━━━━━━━

🔹 addEventListener()

The addEventListener() method tells JavaScript to listen for an event.

For example:

let button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("Button clicked");
});

When the button is clicked, the function runs.

━━━━━━━━━━━━━━

🔹 Event Type

The first argument tells JavaScript which event to listen for.

For example:

"click"

Other common events include:

"mouseover"
"keydown"
"input"
"submit"

━━━━━━━━━━━━━━

🔹 Callback Function

The second argument is a function that runs when the event happens.

For example:

button.addEventListener("click", () => {
    console.log("Hello");
});

The arrow function is the callback.

━━━━━━━━━━━━━━

🔹 Multiple Listeners

You can listen for different events separately.

For example:

button.addEventListener("click", () => {
    console.log("Clicked");
});

button.addEventListener("mouseover", () => {
    console.log("Mouse over");
});

Each listener responds to its own event.

━━━━━━━━━━━━━━

A common beginner mistake is calling the function immediately:

button.addEventListener("click", handleClick());

This executes handleClick() immediately instead of giving addEventListener the function to call later.

Use:

button.addEventListener("click", handleClick);

Quick rule:

addEventListener() → listen for an event

First argument → event type

Second argument → callback function

Event happens → callback runs

Events are what make webpages interactive. Next, we will learn how to work with the Event Object and user input.`,

            fa: `JavaScript می‌تواند به اتفاق‌هایی که در یک صفحه رخ می‌دهند واکنش نشان دهد. به این اتفاق‌ها Event گفته می‌شود.

مثال‌ها:

- کاربر روی یک Button کلیک می‌کند
- یک Key فشرده می‌شود
- Mouse حرکت می‌کند
- یک Form ارسال می‌شود

━━━━━━━━━━━━━━

🔹 addEventListener()

متد addEventListener() به JavaScript می‌گوید منتظر یک Event مشخص بماند.

برای مثال:

let button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("Button clicked");
});

وقتی Button کلیک شود، این Function اجرا می‌شود.

━━━━━━━━━━━━━━

🔹 نوع Event

اولین آرگومان مشخص می‌کند JavaScript منتظر چه Eventای باشد.

برای مثال:

"click"

چند Event رایج دیگر:

"mouseover"
"keydown"
"input"
"submit"

━━━━━━━━━━━━━━

🔹 Callback Function

آرگومان دوم یک Function است که هنگام رخ دادن Event اجرا می‌شود.

برای مثال:

button.addEventListener("click", () => {
    console.log("Hello");
});

در اینجا Arrow Function نقش Callback را دارد.

━━━━━━━━━━━━━━

🔹 چند Listener

می‌توان برای Eventهای مختلف Listenerهای جداگانه ایجاد کرد.

برای مثال:

button.addEventListener("click", () => {
    console.log("Clicked");
});

button.addEventListener("mouseover", () => {
    console.log("Mouse over");
});

هر Listener به Event مربوط به خودش واکنش نشان می‌دهد.

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، اجرای Function هنگام ثبت Listener است:

button.addEventListener("click", handleClick());

این کد handleClick() را همان لحظه اجرا می‌کند، در حالی که addEventListener باید خود Function را دریافت کند تا بعداً آن را اجرا کند.

ساختار درست:

button.addEventListener("click", handleClick);

قانون ساده:

addEventListener() → گوش دادن به Event

آرگومان اول → نوع Event

آرگومان دوم → Callback Function

وقوع Event → اجرای Callback

Eventها باعث می‌شوند صفحات وب تعاملی شوند. در درس بعدی با Event Object و ورودی کاربر آشنا می‌شویم.`
        }
    },

    {
        id: 43,
        title: "Forms, User Input & Event Objects",
        faTitle: "Formها، ورودی کاربر و Event Object",
        content: {
            en: `Webpages often need to receive information from users.

Examples:

- Typing into an input
- Submitting a form
- Clicking a button

━━━━━━━━━━━━━━

🔹 Reading Input Values

You can get the current value of an input using .value.

For example:

let input = document.querySelector("input");

console.log(input.value);

If the user typed "Ali", the value is "Ali".

━━━━━━━━━━━━━━

🔹 The input Event

The "input" event runs whenever the value of an input changes.

For example:

input.addEventListener("input", () => {
    console.log(input.value);
});

This lets JavaScript react while the user is typing.

━━━━━━━━━━━━━━

🔹 The submit Event

Forms have a "submit" event.

For example:

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
});

━━━━━━━━━━━━━━

🔹 Event Object

When an event occurs, JavaScript can provide information about that event through the Event Object.

The event object is commonly received as a parameter:

button.addEventListener("click", (event) => {
    console.log(event);
});

The parameter name can be anything, but event is a common choice.

━━━━━━━━━━━━━━

🔹 preventDefault()

Some browser actions happen automatically.

For example, submitting a form normally causes the browser to perform its default form submission behavior.

event.preventDefault() stops that default behavior.

This is useful when JavaScript needs to handle the form itself.

━━━━━━━━━━━━━━

A common beginner mistake is forgetting .value when reading an input.

input gives you the Element.

input.value gives you the current text inside it.

Quick rule:

.value → input's current value

"input" → value changes

"submit" → form is submitted

event → information about the event

preventDefault() → stop the browser's default action

These tools are the foundation for building interactive forms and user-driven features.`,

            fa: `Formها یکی از اصلی‌ترین راه‌های دریافت اطلاعات از کاربران در صفحات وب هستند.

مثال‌ها:

- کاربر داخل Input تایپ می‌کند
- کاربر یک Form را ارسال می‌کند
- کاربر روی یک Button کلیک می‌کند

━━━━━━━━━━━━━━

🔹 خواندن مقدار Input

می‌توان مقدار فعلی یک Input را با استفاده از .value دریافت کرد.

برای مثال:

let input = document.querySelector("input");

console.log(input.value);

اگر کاربر Ali را وارد کرده باشد، مقدار input.value برابر Ali خواهد بود.

━━━━━━━━━━━━━━

🔹 Event مربوط به input

رویداد "input" هر بار که مقدار Input تغییر کند اجرا می‌شود.

برای مثال:

input.addEventListener("input", () => {
    console.log(input.value);
});

این روش به JavaScript اجازه می‌دهد هنگام تایپ کاربر به تغییرات واکنش نشان دهد.

━━━━━━━━━━━━━━

🔹 Event مربوط به submit

Formها دارای Event مربوط به "submit" هستند.

برای مثال:

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
});

━━━━━━━━━━━━━━

🔹 Event Object

وقتی یک Event رخ می‌دهد، JavaScript می‌تواند اطلاعات مربوط به آن Event را از طریق Event Object در اختیار ما قرار دهد.

برای دریافت آن، معمولاً Event Object را به عنوان Parameter دریافت می‌کنیم:

button.addEventListener("click", (event) => {
    console.log(event);
});

نام این Parameter می‌تواند هر چیزی باشد، اما event یک نام رایج است.

━━━━━━━━━━━━━━

🔹 preventDefault()

برخی رفتارهای مرورگر به صورت پیش‌فرض انجام می‌شوند.

برای مثال، ارسال معمولی یک Form باعث اجرای رفتار پیش‌فرض مربوط به ارسال Form توسط مرورگر می‌شود.

متد event.preventDefault() این رفتار پیش‌فرض را متوقف می‌کند.

این قابلیت زمانی کاربردی است که بخواهیم JavaScript خودش Form را مدیریت کند.

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، فراموش کردن .value هنگام خواندن مقدار Input است.

input خود Element است.

input.value مقدار فعلی متن داخل Input است.

قانون ساده:

.value → مقدار فعلی Input

"input" → تغییر مقدار Input

"submit" → ارسال Form

event → اطلاعات مربوط به Event

preventDefault() → متوقف کردن رفتار پیش‌فرض مرورگر

این ابزارها پایه ساخت Formهای تعاملی و قابلیت‌هایی هستند که بر اساس ورودی کاربر عمل می‌کنند.`
        }
    },

    {
        id: 44,
        title: "JSON & Local Storage",
        faTitle: "JSON و Local Storage",
        content: {
            en: `JavaScript often needs to store or transfer data in a simple text format.

Two useful tools for this are JSON and Local Storage.

━━━━━━━━━━━━━━

🔹 JSON

JSON stands for JavaScript Object Notation.

It is a text format commonly used to represent structured data.

For example:

{
    "name": "Ali",
    "age": 25
}

JSON looks similar to a JavaScript Object, but JSON is text.

━━━━━━━━━━━━━━

🔹 JSON.stringify()

JSON.stringify() converts a JavaScript value into a JSON string.

For example:

let user = {
    name: "Ali",
    age: 25
};

let data = JSON.stringify(user);

Now data contains a String.

━━━━━━━━━━━━━━

🔹 JSON.parse()

JSON.parse() does the opposite.

It converts a JSON string back into a JavaScript value.

For example:

let data = '{"name":"Ali","age":25}';

let user = JSON.parse(data);

Now user is a JavaScript Object again.

━━━━━━━━━━━━━━

🔹 Local Storage

Local Storage allows a webpage to store data in the user's browser.

For example:

localStorage.setItem("username", "Ali");

This stores the value under the key username.

You can retrieve it with:

let username = localStorage.getItem("username");

━━━━━━━━━━━━━━

🔹 Removing Data

You can remove one item:

localStorage.removeItem("username");

Or clear all Local Storage data:

localStorage.clear();

━━━━━━━━━━━━━━

🔹 Storing Objects

Local Storage stores values as Strings.

Therefore, Objects are usually converted to JSON before storing them.

For example:

let user = {
    name: "Ali",
    age: 25
};

localStorage.setItem("user", JSON.stringify(user));

Later, retrieve and convert it back:

let data = localStorage.getItem("user");
let user = JSON.parse(data);

━━━━━━━━━━━━━━

A common beginner mistake is trying to store an Object directly and expecting Local Storage to preserve it as an Object.

Remember:

JSON.stringify() → JavaScript value → JSON String

JSON.parse() → JSON String → JavaScript value

Local Storage → stores Strings

Quick rule:

setItem() → store

getItem() → retrieve

removeItem() → remove one

clear() → remove everything

JSON is especially useful when working with APIs and storing structured data.`,

            fa: `JavaScript معمولاً به روشی برای ذخیره یا انتقال داده‌ها به صورت متنی و ساختاریافته نیاز دارد.

دو ابزار کاربردی برای این کار JSON و Local Storage هستند.

━━━━━━━━━━━━━━

🔹 JSON

عبارت JSON مخفف JavaScript Object Notation است.

JSON یک قالب متنی برای نمایش داده‌های ساختاریافته است.

برای مثال:

{
    "name": "Ali",
    "age": 25
}

ظاهر JSON شبیه JavaScript Object است، اما JSON در اصل متن است.

━━━━━━━━━━━━━━

🔹 JSON.stringify()

متد JSON.stringify() یک مقدار JavaScript را به یک JSON String تبدیل می‌کند.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

let data = JSON.stringify(user);

اکنون data شامل یک String است.

━━━━━━━━━━━━━━

🔹 JSON.parse()

متد JSON.parse() عملیات برعکس را انجام می‌دهد.

این متد یک JSON String را دوباره به یک مقدار JavaScript تبدیل می‌کند.

برای مثال:

let data = '{"name":"Ali","age":25}';

let user = JSON.parse(data);

اکنون user دوباره یک JavaScript Object است.

━━━━━━━━━━━━━━

🔹 Local Storage

Local Storage به یک صفحه وب اجازه می‌دهد داده‌ها را داخل مرورگر کاربر ذخیره کند.

برای مثال:

localStorage.setItem("username", "Ali");

این کد مقدار Ali را با کلید username ذخیره می‌کند.

می‌توان مقدار را با این کد دریافت کرد:

let username = localStorage.getItem("username");

━━━━━━━━━━━━━━

🔹 حذف داده

می‌توان یک مورد مشخص را حذف کرد:

localStorage.removeItem("username");

همچنین می‌توان تمام داده‌های Local Storage را حذف کرد:

localStorage.clear();

━━━━━━━━━━━━━━

🔹 ذخیره Object

Local Storage مقدارها را به صورت String ذخیره می‌کند.

به همین دلیل معمولاً Objectها را قبل از ذخیره کردن به JSON تبدیل می‌کنیم.

برای مثال:

let user = {
    name: "Ali",
    age: 25
};

localStorage.setItem("user", JSON.stringify(user));

سپس می‌توان داده را دریافت و دوباره به Object تبدیل کرد:

let data = localStorage.getItem("user");
let user = JSON.parse(data);

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، ذخیره مستقیم Object در Local Storage و انتظار برای حفظ نوع Object است.

قانون ساده:

JSON.stringify() → مقدار JavaScript به JSON String

JSON.parse() → JSON String به مقدار JavaScript

Local Storage → ذخیره String

قانون کاربردی:

setItem() → ذخیره کردن

getItem() → دریافت کردن

removeItem() → حذف یک مورد

clear() → حذف همه موارد

JSON به‌خصوص هنگام کار با APIها و ذخیره داده‌های ساختاریافته بسیار کاربردی است.`
        }
    },

    {
        id: 45,
        title: "Fetch API",
        faTitle: "Fetch API",
        content: {
            en: `JavaScript can communicate with servers and APIs to send or receive data.

The Fetch API provides a modern way to make HTTP requests.

━━━━━━━━━━━━━━

🔹 fetch()

The fetch() function starts a request.

For example:

fetch("https://example.com/data");

fetch() returns a Promise, which represents the result of an asynchronous operation.

We will learn Promises in more detail in the next lesson.

━━━━━━━━━━━━━━

🔹 Getting the Response

You can use .then() to handle the response.

For example:

fetch("https://example.com/data")
    .then((response) => {
        console.log(response);
    });

The response contains information about the server's response.

━━━━━━━━━━━━━━

🔹 response.json()

When an API returns JSON data, you can convert the response body into a JavaScript value.

For example:

fetch("https://example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

The second .then() receives the converted data.

━━━━━━━━━━━━━━

🔹 Sending Data

fetch() can also send data by providing options.

For example:

fetch("https://example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Ali"
    })
});

The method, headers, and body describe how the request should be sent.

━━━━━━━━━━━━━━

🔹 GET and POST

GET is commonly used to request data.

POST is commonly used to send data to a server.

For example:

fetch("/users");

This makes a GET request by default.

A POST request can be created by specifying method: "POST".

━━━━━━━━━━━━━━

A common beginner mistake is expecting fetch() to immediately give you the final API data.

fetch() is asynchronous and returns a Promise.

The response also needs to be processed, often with response.json() when the server returns JSON.

Quick rule:

fetch() → make a request

response → server response

response.json() → convert JSON response

.then() → handle the result

GET → request data

POST → send data

The next lesson will explain Promises and async/await, which make asynchronous code easier to understand and write.`,

            fa: `JavaScript می‌تواند با Server و APIها ارتباط برقرار کند تا داده دریافت یا ارسال کند.

Fetch API یک روش مدرن برای ایجاد HTTP Request فراهم می‌کند.

━━━━━━━━━━━━━━

🔹 fetch()

تابع fetch() یک Request را شروع می‌کند.

برای مثال:

fetch("https://example.com/data");

تابع fetch() یک Promise برمی‌گرداند که نتیجه یک عملیات غیرهمزمان را نشان می‌دهد.

در درس بعدی Promiseها را با جزئیات بیشتری یاد می‌گیریم.

━━━━━━━━━━━━━━

🔹 دریافت Response

می‌توان با استفاده از .then()، Response را مدیریت کرد.

برای مثال:

fetch("https://example.com/data")
    .then((response) => {
        console.log(response);
    });

این Response شامل اطلاعات مربوط به پاسخ Server است.

━━━━━━━━━━━━━━

🔹 response.json()

وقتی یک API داده را به صورت JSON برمی‌گرداند، می‌توان Body پاسخ را به یک مقدار JavaScript تبدیل کرد.

برای مثال:

fetch("https://example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

در اینجا .then() دوم داده تبدیل‌شده را دریافت می‌کند.

━━━━━━━━━━━━━━

🔹 ارسال داده

می‌توان با قرار دادن Options در fetch()، داده نیز ارسال کرد.

برای مثال:

fetch("https://example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Ali"
    })
});

در این ساختار method، headers و body مشخص می‌کنند Request چگونه ارسال شود.

━━━━━━━━━━━━━━

🔹 GET و POST

معمولاً GET برای دریافت داده استفاده می‌شود.

معمولاً POST برای ارسال داده به Server استفاده می‌شود.

برای مثال:

fetch("/users");

این کد به صورت پیش‌فرض یک GET Request ایجاد می‌کند.

برای ایجاد POST باید method را روی "POST" قرار داد.

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، انتظار دریافت مستقیم داده نهایی از fetch() است.

تابع fetch() غیرهمزمان است و یک Promise برمی‌گرداند.

همچنین Response باید پردازش شود و اگر Server داده را به صورت JSON برگرداند، معمولاً از response.json() استفاده می‌شود.

قانون ساده:

fetch() → ایجاد Request

response → پاسخ Server

response.json() → تبدیل پاسخ JSON

.then() → مدیریت نتیجه

GET → دریافت داده

POST → ارسال داده

در درس بعدی Promiseها و async/await را یاد می‌گیریم تا کار با کدهای غیرهمزمان ساده‌تر شود.`
        }
    },

    {
        id: 46,
        title: "Promises & async/await",
        faTitle: "Promise و async/await",
        content: {
            en: `Some JavaScript operations take time to finish.

Examples:

- Fetching data from an API
- Reading data
- Waiting for another operation to finish

JavaScript uses Promises to represent these future results.

━━━━━━━━━━━━━━

🔹 Promise

A Promise represents an asynchronous operation that may finish successfully or fail.

A Promise can be:

pending → still running

fulfilled → completed successfully

rejected → failed

━━━━━━━━━━━━━━

🔹 then() and catch()

A Promise can be handled with .then() and .catch().

For example:

fetch("/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

then() handles a successful result.

catch() handles an error.

━━━━━━━━━━━━━━

🔹 async

The async keyword makes a function asynchronous.

For example:

async function getUsers() {
    console.log("Hello");
}

An async function always returns a Promise.

━━━━━━━━━━━━━━

🔹 await

The await keyword waits for a Promise to settle before continuing inside an async function.

For example:

async function getUsers() {
    let response = await fetch("/users");
    let data = await response.json();

    console.log(data);
}

This often makes asynchronous code easier to read.

━━━━━━━━━━━━━━

🔹 try and catch

With async/await, errors can be handled using try...catch.

For example:

async function getUsers() {
    try {
        let response = await fetch("/users");
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

━━━━━━━━━━━━━━

A common beginner mistake is using await outside an appropriate async context.

For example:

async function getData() {
    let response = await fetch("/users");
}

The await keyword is normally used inside an async function.

Quick rule:

Promise → represents a future result

then() → handle success

catch() → handle failure

async → makes a function asynchronous

await → wait for a Promise

try...catch → handle errors with async/await

Promises and async/await are essential when working with APIs and other asynchronous operations.`,

            fa: `بعضی عملیات JavaScript برای کامل شدن به زمان نیاز دارند.

مثال‌ها:

- دریافت داده از API
- خواندن داده
- منتظر ماندن برای پایان یک عملیات دیگر

JavaScript برای نمایش نتیجه این عملیات‌های آینده از Promise استفاده می‌کند.

━━━━━━━━━━━━━━

🔹 Promise

Promise یک عملیات غیرهمزمان را نشان می‌دهد که ممکن است با موفقیت تمام شود یا با خطا مواجه شود.

Promise می‌تواند در یکی از این وضعیت‌ها باشد:

pending → هنوز در حال انجام

fulfilled → با موفقیت کامل شده

rejected → با خطا مواجه شده

━━━━━━━━━━━━━━

🔹 then() و catch()

می‌توان یک Promise را با .then() و .catch() مدیریت کرد.

برای مثال:

fetch("/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

متد then() نتیجه موفقیت‌آمیز را مدیریت می‌کند.

متد catch() خطا را مدیریت می‌کند.

━━━━━━━━━━━━━━

🔹 async

کلمه کلیدی async یک Function را به Function غیرهمزمان تبدیل می‌کند.

برای مثال:

async function getUsers() {
    console.log("Hello");
}

یک Function دارای async همیشه یک Promise برمی‌گرداند.

━━━━━━━━━━━━━━

🔹 await

کلمه کلیدی await منتظر می‌ماند تا یک Promise تعیین تکلیف شود و سپس اجرای کد داخل همان Function ادامه پیدا می‌کند.

برای مثال:

async function getUsers() {
    let response = await fetch("/users");
    let data = await response.json();

    console.log(data);
}

این روش معمولاً خواندن کد غیرهمزمان را ساده‌تر می‌کند.

━━━━━━━━━━━━━━

🔹 try و catch

می‌توان در کنار async/await از try...catch برای مدیریت خطا استفاده کرد.

برای مثال:

async function getUsers() {
    try {
        let response = await fetch("/users");
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، استفاده از await در خارج از Context مناسب async است.

برای مثال:

async function getData() {
    let response = await fetch("/users");
}

کلمه کلیدی await معمولاً داخل یک async Function استفاده می‌شود.

قانون ساده:

Promise → نمایش نتیجه آینده

then() → مدیریت موفقیت

catch() → مدیریت خطا

async → ساخت Function غیرهمزمان

await → انتظار برای Promise

try...catch → مدیریت خطا با async/await

Promise و async/await هنگام کار با APIها و عملیات غیرهمزمان بسیار مهم هستند.`
        }
    },

    {
        id: 47,
        title: "Error Handling & Modules",
        faTitle: "مدیریت خطا و Moduleها",
        content: {
            en: `JavaScript programs can encounter errors while running.

Good programs handle errors instead of letting unexpected problems break the entire flow.

━━━━━━━━━━━━━━

🔹 try...catch

The try block contains code that may cause an error.

The catch block runs if an error occurs.

For example:

try {
    let result = JSON.parse("invalid");
} catch (error) {
    console.log("Something went wrong");
}

━━━━━━━━━━━━━━

🔹 The Error Object

The catch parameter contains information about the error.

For example:

try {
    JSON.parse("invalid");
} catch (error) {
    console.log(error.message);
}

The message property contains a description of the error.

━━━━━━━━━━━━━━

🔹 throw

You can create your own error using throw.

For example:

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

throw stops the current execution and creates an error.

━━━━━━━━━━━━━━

🔹 Modules

Modules let you split JavaScript code into separate files.

One file can export something:

export const name = "Ali";

Another file can import it:

import { name } from "./user.js";

This makes larger projects easier to organize.

━━━━━━━━━━━━━━

🔹 Default Export

A module can also have one default export.

For example:

export default function greet() {
    console.log("Hello");
}

It can be imported without curly braces:

import greet from "./greet.js";

━━━━━━━━━━━━━━

A common beginner mistake is confusing named exports with default exports.

Named export:

export const name = "Ali";

Import:

import { name } from "./user.js";

Default export:

export default greet;

Import:

import greet from "./greet.js";

Quick rule:

try → code that may fail

catch → handle the error

throw → create an error

export → make something available from a module

import → use something from another module

Modules become especially useful as JavaScript projects grow larger.`,

            fa: `گاهی برنامه‌های JavaScript هنگام اجرا با خطا مواجه می‌شوند.

مدیریت درست خطا باعث می‌شود برنامه بتواند مشکلات غیرمنتظره را بهتر کنترل کند.

━━━━━━━━━━━━━━

🔹 try...catch

بخش try شامل کدی است که ممکن است باعث خطا شود.

بخش catch زمانی اجرا می‌شود که خطایی رخ دهد.

برای مثال:

try {
    let result = JSON.parse("invalid");
} catch (error) {
    console.log("Something went wrong");
}

━━━━━━━━━━━━━━

🔹 Error Object

پارامتر catch اطلاعات مربوط به خطا را در اختیار ما قرار می‌دهد.

برای مثال:

try {
    JSON.parse("invalid");
} catch (error) {
    console.log(error.message);
}

Property مربوط به message توضیحی درباره خطا را نگهداری می‌کند.

━━━━━━━━━━━━━━

🔹 throw

می‌توان با استفاده از throw یک Error دلخواه ایجاد کرد.

برای مثال:

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

عبارت throw اجرای فعلی را متوقف کرده و یک Error ایجاد می‌کند.

━━━━━━━━━━━━━━

🔹 Moduleها

Moduleها اجازه می‌دهند کد JavaScript را در فایل‌های جداگانه تقسیم کنیم.

یک فایل می‌تواند چیزی را Export کند:

export const name = "Ali";

فایل دیگری می‌تواند آن را Import کند:

import { name } from "./user.js";

این روش سازمان‌دهی پروژه‌های بزرگ‌تر را ساده‌تر می‌کند.

━━━━━━━━━━━━━━

🔹 Default Export

یک Module می‌تواند یک Default Export نیز داشته باشد.

برای مثال:

export default function greet() {
    console.log("Hello");
}

می‌توان آن را بدون Curly Braces وارد کرد:

import greet from "./greet.js";

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی، اشتباه گرفتن Named Export و Default Export است.

Named Export:

export const name = "Ali";

Import:

import { name } from "./user.js";

Default Export:

export default greet;

Import:

import greet from "./greet.js";

قانون ساده:

try → کدی که ممکن است خطا ایجاد کند

catch → مدیریت خطا

throw → ایجاد Error

export → در دسترس قرار دادن چیزی از Module

import → استفاده از چیزی از Module

Moduleها با بزرگ‌تر شدن پروژه‌های JavaScript کاربرد بیشتری پیدا می‌کنند.`
        }
    },

    {
        id: 48,
        title: "Debugging & Clean Code",
        faTitle: "Debugging و Clean Code",
        content: {
            en: `Writing code is only part of programming. Finding and fixing problems is also a major skill.

━━━━━━━━━━━━━━

🔹 Debugging

Debugging means finding and fixing problems in your code.

A useful first step is reading the error message.

For example:

let user = {
    name: "Ali"
};

console.log(user.age.toUpperCase());

This causes an error because user.age is undefined.

━━━━━━━━━━━━━━

🔹 console.log()

console.log() is one of the simplest debugging tools.

For example:

let total = 10 + 20;

console.log(total);

You can use it to check what values your variables contain.

━━━━━━━━━━━━━━

🔹 Read Errors Carefully

Errors often tell you:

- what went wrong
- where the problem happened
- sometimes what caused it

Do not immediately rewrite everything when you see an error.

First identify the exact line and value causing the problem.

━━━━━━━━━━━━━━

🔹 Clean Code

Clean code is code that is easy to read, understand, and maintain.

Use meaningful variable names.

Better:

let userAge = 25;

Instead of:

let x = 25;

Keep functions focused on one clear job.

For example:

function calculateTotal(price, tax) {
    return price + tax;
}

━━━━━━━━━━━━━━

🔹 Avoid Repetition

If the same logic appears many times, consider putting it inside a function.

Instead of repeating:

console.log("Hello Ali");
console.log("Hello Sara");

You can create reusable logic.

━━━━━━━━━━━━━━

🔹 Comments

Comments can explain why something is done when the reason is not obvious.

Do not use comments to explain every simple line of code.

The code itself should be readable whenever possible.

━━━━━━━━━━━━━━

A common beginner mistake is changing many parts of the program at once while debugging.

Change one thing, test the result, and then continue.

Quick rule:

Debugging → find and fix problems

console.log() → inspect values

Meaningful names → easier reading

Small functions → easier maintenance

Less repetition → cleaner code

Clear code → easier debugging

These habits will be especially useful in the final JavaScript project.`,

            fa: `نوشتن کد فقط بخشی از برنامه‌نویسی است و پیدا کردن و رفع مشکل نیز یک مهارت مهم محسوب می‌شود.

━━━━━━━━━━━━━━

🔹 Debugging

Debugging یعنی پیدا کردن و رفع مشکلات موجود در کد.

اولین قدم مفید، خواندن پیام Error است.

برای مثال:

let user = {
    name: "Ali"
};

console.log(user.age.toUpperCase());

این کد باعث Error می‌شود چون user.age مقدار undefined دارد.

━━━━━━━━━━━━━━

🔹 console.log()

متد console.log() یکی از ساده‌ترین ابزارهای Debugging است.

برای مثال:

let total = 10 + 20;

console.log(total);

می‌توان از آن برای بررسی مقدار Variableها استفاده کرد.

━━━━━━━━━━━━━━

🔹 خواندن Errorها

پیام‌های Error معمولاً اطلاعاتی درباره موارد زیر می‌دهند:

- مشکل چیست
- مشکل در کجا رخ داده
- گاهی علت مشکل چیست

هنگام دیدن Error نباید فوراً کل کد را تغییر داد.

ابتدا باید Line و مقدار ایجادکننده مشکل را پیدا کرد.

━━━━━━━━━━━━━━

🔹 Clean Code

Clean Code یعنی کدی که خواندن، درک کردن و نگهداری آن ساده باشد.

بهتر است از نام‌های واضح برای Variableها استفاده کنیم.

بهتر:

let userAge = 25;

به جای:

let x = 25;

همچنین بهتر است هر Function یک وظیفه مشخص داشته باشد.

برای مثال:

function calculateTotal(price, tax) {
    return price + tax;
}

━━━━━━━━━━━━━━

🔹 جلوگیری از تکرار

اگر یک منطق چندین بار در کد تکرار شود، بهتر است آن را داخل یک Function قرار دهیم.

برای مثال، به جای تکرار چندباره یک منطق، می‌توان یک Function قابل استفاده مجدد ساخت.

━━━━━━━━━━━━━━

🔹 Commentها

گاهی Comment می‌تواند دلیل انجام یک کار را توضیح دهد؛ مخصوصاً وقتی دلیل آن از خود کد مشخص نباشد.

نباید برای هر خط ساده Comment بنویسیم.

تا حد ممکن خود کد باید قابل فهم باشد.

━━━━━━━━━━━━━━

یک اشتباه رایج برای افراد مبتدی این است که هنگام Debugging چند قسمت مختلف برنامه را همزمان تغییر می‌دهند.

بهتر است هر بار یک تغییر انجام شود، نتیجه بررسی شود و سپس سراغ مرحله بعد برویم.

قانون ساده:

Debugging → پیدا کردن و رفع مشکل

console.log() → بررسی مقدارها

نام‌گذاری واضح → خوانایی بیشتر

Functionهای کوچک → نگهداری ساده‌تر

تکرار کمتر → کد تمیزتر

کد واضح → Debugging ساده‌تر

این مهارت‌ها در پروژه نهایی JavaScript بسیار کاربردی خواهند بود.`
        }
    },

    {
        id: 49,
        title: "Final JavaScript Mini Project",
        faTitle: "پروژه نهایی کوچک JavaScript",
        content: {
            en: `You have now learned the core JavaScript skills needed to build interactive web pages.

This final lesson brings several of them together in one small project.

━━━━━━━━━━━━━━

🔹 The Project

Build a simple Task Manager.

The user should be able to:

- Add a task
- Display tasks
- Mark a task as completed
- Delete a task
- Save tasks in localStorage

━━━━━━━━━━━━━━

🔹 Suggested Structure

Start with an array:

let tasks = [];

Each task can be an Object:

{
    text: "Learn JavaScript",
    completed: false
}

Use Functions to separate responsibilities.

For example:

function addTask() {
    // add task
}

function renderTasks() {
    // display tasks
}

function deleteTask(index) {
    // remove task
}

━━━━━━━━━━━━━━

🔹 DOM

Use the DOM to create and update the interface.

You can use:

- createElement()
- append()
- textContent
- classList
- remove()

Listen for user actions with Event Listeners.

━━━━━━━━━━━━━━

🔹 User Input

Read the task from an input:

input.value

Then use the value to create a new task Object.

After adding the task, clear the input.

━━━━━━━━━━━━━━

🔹 localStorage

Save the tasks as JSON:

localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
);

When the page loads, retrieve them:

const savedTasks = localStorage.getItem("tasks");

Then convert the JSON back into an Array:

tasks = JSON.parse(savedTasks);

━━━━━━━━━━━━━━

🔹 A Good Development Process

Build the project step by step.

1. Create the HTML structure.
2. Select the required Elements.
3. Add a task.
4. Render the task list.
5. Add delete functionality.
6. Add completion functionality.
7. Save data with localStorage.
8. Test and debug.

Do not try to build everything at once.

━━━━━━━━━━━━━━

🔹 What You Are Practicing

This project combines:

Variables
Arrays
Objects
Functions
Events
DOM manipulation
Array methods
JSON
localStorage
Debugging

That is much closer to how JavaScript is used in real projects.

━━━━━━━━━━━━━━

Final rule:

Don't just memorize JavaScript.

Build with it.

When you get stuck, debug the problem, search your knowledge, and solve it step by step.

You have finished the learning curriculum. Now the real practice begins.`,

            fa: `حالا مهارت‌های اصلی JavaScript را یاد گرفته‌ای و می‌توانی از آن‌ها برای ساخت صفحات تعاملی استفاده کنی.

این درس نهایی چندین مهارت را در قالب یک پروژه کوچک ترکیب می‌کند.

━━━━━━━━━━━━━━

🔹 پروژه

یک Task Manager ساده بساز.

کاربر باید بتواند:

- یک Task اضافه کند
- Taskها را نمایش دهد
- یک Task را کامل‌شده کند
- یک Task را حذف کند
- Taskها را در localStorage ذخیره کند

━━━━━━━━━━━━━━

🔹 ساختار پیشنهادی

ابتدا یک Array داشته باش:

let tasks = [];

هر Task می‌تواند یک Object باشد:

{
    text: "Learn JavaScript",
    completed: false
}

بهتر است مسئولیت‌های مختلف را داخل Functionهای جدا قرار دهی.

برای مثال:

function addTask() {
    // add task
}

function renderTasks() {
    // display tasks
}

function deleteTask(index) {
    // remove task
}

━━━━━━━━━━━━━━

🔹 DOM

از DOM برای ساخت و تغییر رابط کاربری استفاده کن.

می‌توانی از موارد زیر استفاده کنی:

- createElement()
- append()
- textContent
- classList
- remove()

همچنین برای دریافت تعامل کاربر از Event Listener استفاده کن.

━━━━━━━━━━━━━━

🔹 ورودی کاربر

متن Task را از Input دریافت کن:

input.value

سپس با این مقدار یک Object جدید برای Task بساز.

بعد از اضافه کردن Task بهتر است Input را خالی کنی.

━━━━━━━━━━━━━━

🔹 localStorage

Taskها را می‌توان به صورت JSON ذخیره کرد:

localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
);

هنگام Load شدن صفحه، داده را دریافت کن:

const savedTasks = localStorage.getItem("tasks");

سپس JSON را دوباره به Array تبدیل کن:

tasks = JSON.parse(savedTasks);

━━━━━━━━━━━━━━

🔹 روند مناسب ساخت پروژه

پروژه را مرحله‌به‌مرحله بساز.

1. ساختار HTML را ایجاد کن.
2. Elementهای موردنیاز را انتخاب کن.
3. قابلیت اضافه کردن Task را بساز.
4. لیست Taskها را نمایش بده.
5. قابلیت حذف را اضافه کن.
6. قابلیت تکمیل شدن را اضافه کن.
7. داده‌ها را با localStorage ذخیره کن.
8. پروژه را تست و Debug کن.

نباید همه چیز را یک‌باره بسازی.

━━━━━━━━━━━━━━

🔹 مهارت‌هایی که تمرین می‌کنی

این پروژه چندین موضوع را ترکیب می‌کند:

Variableها
Arrayها
Objectها
Functionها
Eventها
کار با DOM
متدهای Array
JSON
localStorage
Debugging

این دقیقاً به نحوه استفاده از JavaScript در پروژه‌های واقعی نزدیک‌تر است.

━━━━━━━━━━━━━━

قانون نهایی:

JavaScript را فقط حفظ نکن.

با آن چیزی بساز.

وقتی به مشکل خوردی، مشکل را Debug کن، دانسته‌هایت را بررسی کن و مرحله‌به‌مرحله حلش کن.

تو حالا Curriculum یادگیری را تمام کرده‌ای و از اینجا به بعد تمرین واقعی شروع می‌شود.`
        }
    },
];