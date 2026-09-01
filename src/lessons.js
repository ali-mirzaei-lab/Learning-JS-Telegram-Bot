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

    {
        id: 4,
        title: "JavaScript Conditional Statements",
        faTitle: "دستورات شرطی در JavaScript",
        content: `Conditional statements allow your program to make decisions based on conditions.

The most common conditional statement is if:

if (age >= 18) {
    console.log("You are an adult.");
}

The code inside the if block runs only when the condition is true.

You can use else to run different code when the condition is false:

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

When you need to check multiple conditions, you can use else if:

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 60) {
    console.log("Good job!");
} else {
    console.log("Keep practicing!");
}

Conditions commonly use comparison operators:

===  Equal to
!==  Not equal to
>    Greater than
<    Less than
>=   Greater than or equal to
<=   Less than or equal to

You can also combine conditions with logical operators.

&& means AND. Both conditions must be true:

if (age >= 18 && hasLicense === true) {
    console.log("You can drive.");
}

|| means OR. At least one condition must be true:

if (isWeekend || isHoliday) {
    console.log("You can relax!");
}

! means NOT. It reverses a boolean value:

if (!isLoggedIn) {
    console.log("Please log in.");
}

You can also place one conditional statement inside another. This is called a nested condition:

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    }
}

Conditional statements are one of the most important parts of JavaScript because they allow your programs to make decisions and behave differently depending on the situation.`,
        faContent: `دستورات شرطی به برنامه شما اجازه می‌دهند بر اساس شرایط مختلف تصمیم‌گیری کند.

رایج‌ترین دستور شرطی، if است:

if (age >= 18) {
    console.log("You are an adult.");
}

کدی که داخل بلوک if قرار دارد فقط زمانی اجرا می‌شود که شرط درست باشد.

می‌توانید از else برای اجرای کد دیگری زمانی که شرط نادرست است استفاده کنید:

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

وقتی نیاز دارید چند شرط مختلف را بررسی کنید، می‌توانید از else if استفاده کنید:

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 60) {
    console.log("Good job!");
} else {
    console.log("Keep practicing!");
}

شرط‌ها معمولاً از عملگرهای مقایسه‌ای استفاده می‌کنند:

===  برابر است با
!==  برابر نیست با
>    بزرگ‌تر از
<    کوچک‌تر از
>=   بزرگ‌تر یا مساوی
<=   کوچک‌تر یا مساوی

می‌توانید چند شرط را با عملگرهای منطقی ترکیب کنید.

&& به معنی AND است. هر دو شرط باید درست باشند:

if (age >= 18 && hasLicense === true) {
    console.log("You can drive.");
}

|| به معنی OR است. حداقل یکی از شرط‌ها باید درست باشد:

if (isWeekend || isHoliday) {
    console.log("You can relax!");
}

! به معنی NOT است و مقدار یک عبارت بولی را برعکس می‌کند:

if (!isLoggedIn) {
    console.log("Please log in.");
}

همچنین می‌توانید یک دستور شرطی را داخل یک دستور شرطی دیگر قرار دهید. به این کار شرط تو در تو یا Nested Condition گفته می‌شود:

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    }
}

دستورات شرطی یکی از مهم‌ترین بخش‌های JavaScript هستند، زیرا به برنامه اجازه می‌دهند تصمیم بگیرد و بر اساس شرایط مختلف رفتار متفاوتی داشته باشد.`
    },
    {
        id: 5,
        title: "JavaScript Loops",
        faTitle: "حلقه‌ها در JavaScript",
        content: `Loops allow you to repeat a block of code multiple times without writing the same code again and again.

The most common loop in JavaScript is the for loop:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

This loop starts with i = 0, continues while i < 5, and increases i by 1 after each iteration.

The loop prints:

0
1
2
3
4

A for loop has three main parts:

1. Initialization
2. Condition
3. Update

You can also use a while loop:

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

The while loop continues running as long as its condition is true.

A do...while loop is similar to a while loop, but the code runs at least once before the condition is checked:

let number = 0;

do {
    console.log(number);
    number++;
} while (number < 5);

You can use break to stop a loop completely:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

This loop stops when i becomes 5.

You can use continue to skip the current iteration and move to the next one:

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

Loops are very useful when you need to repeat an action, process multiple values, or work with collections of data.`,
        faContent: `حلقه‌ها به شما اجازه می‌دهند یک بخش از کد را چندین بار تکرار کنید، بدون اینکه مجبور باشید همان کد را دوباره و دوباره بنویسید.

رایج‌ترین حلقه در JavaScript، حلقه for است:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

این حلقه با i = 0 شروع می‌شود، تا زمانی که i < 5 باشد ادامه پیدا می‌کند و بعد از هر بار اجرا، مقدار i را یک واحد افزایش می‌دهد.

خروجی این حلقه:

0
1
2
3
4

یک حلقه for سه بخش اصلی دارد:

1. مقداردهی اولیه (Initialization)
2. شرط (Condition)
3. به‌روزرسانی (Update)

همچنین می‌توانید از حلقه while استفاده کنید:

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

حلقه while تا زمانی که شرط آن درست باشد اجرا می‌شود.

حلقه do...while شبیه while است، اما کد داخل آن حداقل یک بار اجرا می‌شود و سپس شرط بررسی می‌شود:

let number = 0;

do {
    console.log(number);
    number++;
} while (number < 5);

می‌توانید از break برای متوقف کردن کامل یک حلقه استفاده کنید:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

این حلقه زمانی که i به 5 برسد متوقف می‌شود.

همچنین می‌توانید از continue برای رد کردن اجرای فعلی و رفتن به تکرار بعدی استفاده کنید:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}

خروجی این کد:

0
1
3
4

حلقه‌ها زمانی بسیار کاربردی هستند که بخواهید یک عملیات را چندین بار تکرار کنید، چند مقدار را پردازش کنید یا با مجموعه‌ای از داده‌ها کار کنید.`
    },
    {
        id: 6,
        title: "JavaScript Functions",
        faTitle: "توابع در JavaScript",
        content: `Functions are reusable blocks of code designed to perform a specific task.

Instead of writing the same code multiple times, you can put it inside a function and call the function whenever you need it.

You can create a function using the function keyword:

function greet() {
    console.log("Hello!");
}

To run the function, you call it by using its name followed by parentheses:

greet();

Functions can accept information called parameters:

function greet(name) {
    console.log("Hello, " + name);
}

When you call the function, you provide an argument:

greet("Ali");

Here, name is the parameter and "Ali" is the argument.

A function can have multiple parameters:

function add(a, b) {
    console.log(a + b);
}

add(5, 3);

You can use return to send a value back from a function:

function add(a, b) {
    return a + b;
}

const result = add(5, 3);

The value returned by the function can be stored in a variable or used somewhere else.

The return statement also stops the function from continuing:

function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }

    return "Allowed";
}

JavaScript also supports arrow functions.

A regular function can be written like this:

function add(a, b) {
    return a + b;
}

The same function can be written as an arrow function:

const add = (a, b) => {
    return a + b;
};

For simple expressions, arrow functions can be even shorter:

const add = (a, b) => a + b;

Functions can make your code easier to organize, reuse, and maintain.

They are an essential part of JavaScript and will become especially useful when working with larger applications.`,
        faContent: `توابع یا Functions بلوک‌های قابل استفاده مجدد از کد هستند که برای انجام یک کار مشخص طراحی شده‌اند.

به جای اینکه یک کد را چندین بار بنویسید، می‌توانید آن را داخل یک تابع قرار دهید و هر زمان که نیاز داشتید تابع را اجرا کنید.

می‌توانید یک تابع را با استفاده از کلمه کلیدی function ایجاد کنید:

function greet() {
    console.log("Hello!");
}

برای اجرای تابع، نام آن را به همراه پرانتز می‌نویسید:

greet();

توابع می‌توانند اطلاعاتی را دریافت کنند که به آن‌ها Parameter گفته می‌شود:

function greet(name) {
    console.log("Hello, " + name);
}

هنگام اجرای تابع، مقدار مورد نظر را به عنوان Argument ارسال می‌کنید:

greet("Ali");

در این مثال، name یک Parameter و "Ali" یک Argument است.

یک تابع می‌تواند چندین Parameter داشته باشد:

function add(a, b) {
    console.log(a + b);
}

add(5, 3);

می‌توانید از return برای برگرداندن یک مقدار از تابع استفاده کنید:

function add(a, b) {
    return a + b;
}

const result = add(5, 3);

مقداری که تابع برمی‌گرداند می‌تواند داخل یک متغیر ذخیره شود یا در بخش دیگری از برنامه استفاده شود.

دستور return همچنین باعث می‌شود اجرای تابع متوقف شود:

function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }

    return "Allowed";
}

JavaScript همچنین از Arrow Function پشتیبانی می‌کند.

یک تابع معمولی می‌تواند به این شکل نوشته شود:

function add(a, b) {
    return a + b;
}

همین تابع را می‌توان به صورت Arrow Function نوشت:

const add = (a, b) => {
    return a + b;
};

برای عبارت‌های ساده، Arrow Function می‌تواند کوتاه‌تر هم نوشته شود:

const add = (a, b) => a + b;

توابع باعث می‌شوند کد شما منظم‌تر، قابل استفاده مجدد و نگهداری آن آسان‌تر باشد.

Functions یکی از بخش‌های بسیار مهم JavaScript هستند و زمانی که با برنامه‌های بزرگ‌تر کار کنید اهمیت آن‌ها بیشتر مشخص می‌شود.`
    },
    {
        id: 7,
        title: "JavaScript Arrays",
        faTitle: "آرایه‌ها در JavaScript",
        content: `Arrays are used to store multiple values in a single variable.

For example:

const fruits = ["Apple", "Banana", "Orange"];

An array can contain multiple values, and each value has a position called an index.

JavaScript array indexes start at 0.

In this array:

const fruits = ["Apple", "Banana", "Orange"];

Apple has index 0.
Banana has index 1.
Orange has index 2.

You can access an item using its index:

console.log(fruits[0]);

This prints:

Apple

You can find the number of items in an array using the length property:

console.log(fruits.length);

This returns:

3

Arrays can contain different types of values:

const data = ["Ali", 25, true];

You can change an item by assigning a new value to its index:

fruits[1] = "Mango";

You can add an item to the end of an array using push():

fruits.push("Grape");

You can remove the last item using pop():

fruits.pop();

You can remove the first item using shift():

fruits.shift();

You can add an item to the beginning using unshift():

fruits.unshift("Strawberry");

You can use includes() to check whether an array contains a specific value:

fruits.includes("Apple");

It returns true if the value exists and false if it does not.

Arrays are especially useful when working with lists of data, such as users, products, messages, or scores.`,
        faContent: `آرایه‌ها برای ذخیره چندین مقدار در یک متغیر استفاده می‌شوند.

برای مثال:

const fruits = ["Apple", "Banana", "Orange"];

یک آرایه می‌تواند چندین مقدار داشته باشد و هر مقدار یک موقعیت به نام index دارد.

در JavaScript، شماره‌گذاری index از 0 شروع می‌شود.

در این آرایه:

const fruits = ["Apple", "Banana", "Orange"];

Apple دارای index برابر 0 است.
Banana دارای index برابر 1 است.
Orange دارای index برابر 2 است.

می‌توانید با استفاده از index به یک مقدار دسترسی پیدا کنید:

console.log(fruits[0]);

این کد Apple را چاپ می‌کند.

برای پیدا کردن تعداد عناصر آرایه می‌توانید از ویژگی length استفاده کنید:

console.log(fruits.length);

نتیجه:

3

آرایه‌ها می‌توانند شامل انواع مختلف داده باشند:

const data = ["Ali", 25, true];

می‌توانید با اختصاص دادن یک مقدار جدید به index، مقدار یک عنصر را تغییر دهید:

fruits[1] = "Mango";

برای اضافه کردن یک مقدار به انتهای آرایه می‌توانید از push() استفاده کنید:

fruits.push("Grape");

برای حذف آخرین مقدار می‌توانید از pop() استفاده کنید:

fruits.pop();

برای حذف اولین مقدار می‌توانید از shift() استفاده کنید:

fruits.shift();

برای اضافه کردن یک مقدار به ابتدای آرایه می‌توانید از unshift() استفاده کنید:

fruits.unshift("Strawberry");

برای بررسی اینکه آیا یک مقدار در آرایه وجود دارد می‌توانید از includes() استفاده کنید:

fruits.includes("Apple");

این متد در صورت وجود مقدار true و در غیر این صورت false برمی‌گرداند.

آرایه‌ها زمانی بسیار کاربردی هستند که با لیستی از داده‌ها مانند کاربران، محصولات، پیام‌ها یا امتیازها کار می‌کنید.`
    },
    {
        id: 8,
        title: "JavaScript Objects",
        faTitle: "اشیاء در JavaScript",
        content: `Objects are used to store related data and functionality together.

An object stores data as key-value pairs.

For example:

const person = {
    name: "Ali",
    age: 25,
    isStudent: true
};

Here:

name, age, and isStudent are called properties.

"Ali", 25, and true are their corresponding values.

You can access a property using dot notation:

console.log(person.name);

This prints:

Ali

You can also access properties using bracket notation:

console.log(person["age"]);

This prints:

25

You can change an object's property:

person.age = 26;

You can also add a new property:

person.city = "Baku";

And you can delete a property using delete:

delete person.isStudent;

Objects can also contain functions. A function stored inside an object is called a method:

const person = {
    name: "Ali",
    greet: function() {
        console.log("Hello!");
    }
};

You can call the method like this:

person.greet();

You can use the this keyword inside an object method to refer to the object itself:

const person = {
    name: "Ali",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();

This prints:

Hello, Ali

Objects are extremely useful in JavaScript because they allow you to organize related information together.

For example, a user, product, car, or lesson can all be represented using objects.`,
        faContent: `اشیاء یا Objects برای ذخیره اطلاعات مرتبط و عملکردهای مربوط به آن‌ها در کنار یکدیگر استفاده می‌شوند.

یک Object داده‌ها را به صورت جفت‌های key-value ذخیره می‌کند.

برای مثال:

const person = {
    name: "Ali",
    age: 25,
    isStudent: true
};

در این مثال:

name، age و isStudent به عنوان Property شناخته می‌شوند.

مقادیر "Ali"، 25 و true نیز Value مربوط به این Propertyها هستند.

می‌توانید با استفاده از Dot Notation به یک Property دسترسی پیدا کنید:

console.log(person.name);

این کد Ali را چاپ می‌کند.

همچنین می‌توانید از Bracket Notation استفاده کنید:

console.log(person["age"]);

این کد 25 را چاپ می‌کند.

می‌توانید مقدار یک Property را تغییر دهید:

person.age = 26;

همچنین می‌توانید یک Property جدید اضافه کنید:

person.city = "Baku";

برای حذف یک Property نیز می‌توانید از delete استفاده کنید:

delete person.isStudent;

Objects همچنین می‌توانند شامل Function باشند. تابعی که داخل یک Object قرار دارد Method نامیده می‌شود:

const person = {
    name: "Ali",
    greet: function() {
        console.log("Hello!");
    }
};

می‌توانید Method را به این شکل اجرا کنید:

person.greet();

می‌توانید داخل یک Method از کلمه کلیدی this استفاده کنید تا به خود Object اشاره کنید:

const person = {
    name: "Ali",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();

این کد عبارت زیر را چاپ می‌کند:

Hello, Ali

Objects یکی از بخش‌های بسیار مهم JavaScript هستند، زیرا به شما اجازه می‌دهند اطلاعات مرتبط را در کنار یکدیگر سازمان‌دهی کنید.

برای مثال، می‌توان یک کاربر، محصول، خودرو یا درس را با استفاده از Object نمایش داد.`
    },
    {
        id: 9,
        title: "JavaScript Scope",
        faTitle: "محدوده دسترسی در JavaScript",
        content: `Scope determines where a variable can be accessed in your code.

JavaScript has different types of scope, including global scope, function scope, and block scope.

A variable declared outside of any function or block has global scope:

const name = "Ali";

It can be accessed from different parts of the program.

Variables declared inside a function have function scope:

function greet() {
    const message = "Hello!";
    console.log(message);
}

The message variable can be accessed inside the function, but not outside it.

let and const also have block scope.

A block is code surrounded by curly braces:

{
    let age = 25;
    const name = "Ali";
}

The variables age and name can only be accessed inside that block.

Variables declared with var behave differently. var is function-scoped rather than block-scoped:

if (true) {
    var age = 25;
}

console.log(age);

This works because var is not limited to the if block.

However, let and const are block-scoped:

if (true) {
    let age = 25;
}

console.log(age);

This causes an error because age only exists inside the block.

Scope helps prevent variables from interfering with other parts of your program.

JavaScript also uses lexical scope, which means an inner scope can access variables from an outer scope:

const name = "Ali";

function greet() {
    console.log(name);
}

greet();

The function can access name because name exists in an outer scope.

However, the outer scope cannot access variables that only exist inside an inner scope.

Understanding scope is important because it helps you write safer and more predictable JavaScript code.`,
        faContent: `Scope یا محدوده دسترسی مشخص می‌کند که یک متغیر در کدام قسمت از کد قابل دسترسی است.

JavaScript انواع مختلفی از Scope دارد که شامل Global Scope، Function Scope و Block Scope می‌شود.

متغیری که خارج از هر Function یا Block تعریف شود دارای Global Scope است:

const name = "Ali";

این متغیر می‌تواند از قسمت‌های مختلف برنامه مورد استفاده قرار بگیرد.

متغیرهایی که داخل یک Function تعریف می‌شوند دارای Function Scope هستند:

function greet() {
    const message = "Hello!";
    console.log(message);
}

متغیر message داخل Function قابل دسترسی است، اما خارج از آن نمی‌توان به آن دسترسی داشت.

let و const همچنین دارای Block Scope هستند.

Block بخشی از کد است که داخل آکولاد قرار دارد:

{
    let age = 25;
    const name = "Ali";
}

متغیرهای age و name فقط داخل همان Block قابل دسترسی هستند.

متغیرهایی که با var تعریف می‌شوند رفتار متفاوتی دارند. var دارای Function Scope است، نه Block Scope:

if (true) {
    var age = 25;
}

console.log(age);

این کد کار می‌کند، چون var فقط به Function محدود است و محدود به Block مربوط به if نیست.

اما let و const دارای Block Scope هستند:

if (true) {
    let age = 25;
}

console.log(age);

این کد باعث خطا می‌شود، چون age فقط داخل Block وجود دارد.

Scope کمک می‌کند متغیرها با قسمت‌های دیگر برنامه تداخل پیدا نکنند.

JavaScript همچنین از Lexical Scope استفاده می‌کند. یعنی یک Scope داخلی می‌تواند به متغیرهای Scope بیرونی دسترسی داشته باشد:

const name = "Ali";

function greet() {
    console.log(name);
}

greet();

Function می‌تواند به name دسترسی داشته باشد، چون name در یک Scope بیرونی قرار دارد.

اما Scope بیرونی نمی‌تواند به متغیری که فقط داخل یک Scope داخلی وجود دارد دسترسی پیدا کند.

درک Scope بسیار مهم است، زیرا به شما کمک می‌کند کد JavaScript امن‌تر و قابل پیش‌بینی‌تری بنویسید.`
    },
    {
        id: 10,
        title: "JavaScript DOM",
        faTitle: "DOM در JavaScript",
        content: `The DOM stands for Document Object Model.

The DOM represents an HTML page as a tree of objects that JavaScript can interact with.

For example, this HTML:

<h1 id="title">Hello World</h1>

Can be accessed with JavaScript:

const title = document.getElementById("title");

Now the title variable refers to the h1 element.

You can change the text of an element using textContent:

title.textContent = "Hello JavaScript!";

You can also select elements using querySelector():

const title = document.querySelector("#title");

querySelector() returns the first element that matches the CSS selector.

For example:

const button = document.querySelector(".button");

You can change an element's HTML using innerHTML:

title.innerHTML = "Hello <strong>JavaScript!</strong>";

You can also change CSS styles using the style property:

title.style.color = "red";

JavaScript can also respond to user interactions using event listeners.

For example:

button.addEventListener("click", function() {
    console.log("Button clicked!");
});

This code runs the function whenever the button is clicked.

You can also change attributes:

const image = document.querySelector("img");

image.setAttribute("src", "image.jpg");

And you can read an attribute:

image.getAttribute("src");

The DOM makes JavaScript interactive because it allows you to change HTML elements, styles, content, and attributes while the page is running.

This is one of the most important concepts for frontend development because it connects JavaScript with HTML and CSS.`,
        faContent: `DOM مخفف Document Object Model است.

DOM یک صفحه HTML را به صورت یک ساختار درختی از Objectها نمایش می‌دهد که JavaScript می‌تواند با آن‌ها تعامل داشته باشد.

برای مثال، این HTML را در نظر بگیرید:

<h1 id="title">Hello World</h1>

می‌توانیم با JavaScript به آن دسترسی پیدا کنیم:

const title = document.getElementById("title");

حالا متغیر title به عنصر h1 اشاره می‌کند.

می‌توانید متن یک عنصر را با استفاده از textContent تغییر دهید:

title.textContent = "Hello JavaScript!";

همچنین می‌توانید با استفاده از querySelector() عناصر را انتخاب کنید:

const title = document.querySelector("#title");

متد querySelector() اولین عنصری را که با Selector مربوط به CSS مطابقت داشته باشد برمی‌گرداند.

برای مثال:

const button = document.querySelector(".button");

می‌توانید HTML داخل یک عنصر را با استفاده از innerHTML تغییر دهید:

title.innerHTML = "Hello <strong>JavaScript!</strong>";

همچنین می‌توانید با استفاده از Property به نام style، استایل‌های CSS را تغییر دهید:

title.style.color = "red";

JavaScript می‌تواند به تعاملات کاربر نیز واکنش نشان دهد. برای این کار می‌توان از Event Listener استفاده کرد.

برای مثال:

button.addEventListener("click", function() {
    console.log("Button clicked!");
});

این کد هر بار که روی دکمه کلیک شود Function را اجرا می‌کند.

همچنین می‌توانید Attributeهای عناصر را تغییر دهید:

const image = document.querySelector("img");

image.setAttribute("src", "image.jpg");

و می‌توانید مقدار یک Attribute را دریافت کنید:

image.getAttribute("src");

DOM باعث می‌شود JavaScript تعاملی شود، زیرا به شما اجازه می‌دهد عناصر HTML، استایل‌ها، محتوا و Attributeها را هنگام اجرای صفحه تغییر دهید.

این یکی از مهم‌ترین مفاهیم برای Frontend Development است، زیرا JavaScript را به HTML و CSS متصل می‌کند.`
    },
    
];