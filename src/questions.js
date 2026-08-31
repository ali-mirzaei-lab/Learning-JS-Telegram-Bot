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
    },

    {
        id: 4,
        lessonId: 1,
        question: 'What happens when you try to reassign a const variable?\n\nconst age = 20;\nage = 25;',
        options: [
            "The value becomes 25",
            "The value becomes 45",
            "JavaScript throws an error",
            "Nothing happens",
        ],
        correctAnswer: 2,
        explanation:
            "A const variable cannot be reassigned after it has been declared, so JavaScript throws an error.",
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
    },

    {
        id: 11,
        lessonId: 2,
        question: "Which data type is used to represent text in JavaScript?",
        options: [
            "Number",
            "Boolean",
            "String",
            "Undefined",
        ],
        correctAnswer: 2,
        explanation:
            "String is the data type used to represent text in JavaScript.",
    },

    {
        id: 12,
        lessonId: 2,
        question: "Which data type is used to represent numeric values?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Null",
        ],
        correctAnswer: 1,
        explanation:
            "Number is the JavaScript data type used for numeric values such as 10, 25, and 3.14.",
    },

    {
        id: 13,
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
    },

    {
        id: 14,
        lessonId: 2,
        question: 'What is the data type of the value "Hello"?',
        options: [
            "Number",
            "Boolean",
            "String",
            "Null",
        ],
        correctAnswer: 2,
        explanation:
            '"Hello" is text inside quotes, so it is a String.',
    },

    {
        id: 15,
        lessonId: 2,
        question: "What is the data type of the value 42?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Undefined",
        ],
        correctAnswer: 1,
        explanation:
            "42 is a numeric value, so its data type is Number.",
    },

    {
        id: 16,
        lessonId: 2,
        question: "What is the value of isStudent after this code runs?\n\nlet isStudent = true;",
        options: [
            "false",
            '"true"',
            "true",
            "undefined",
        ],
        correctAnswer: 2,
        explanation:
            "The variable isStudent is assigned the Boolean value true.",
    },

    {
        id: 17,
        lessonId: 2,
        question: "Which value represents an intentionally empty value in JavaScript?",
        options: [
            "undefined",
            "null",
            "false",
            '""',
        ],
        correctAnswer: 1,
        explanation:
            "null is commonly used to represent an intentional empty or missing value.",
    },

    {
        id: 18,
        lessonId: 2,
        question: "What is the value of a variable that has been declared but has not been assigned a value?",
        options: [
            "null",
            "false",
            "undefined",
            "0",
        ],
        correctAnswer: 2,
        explanation:
            "A declared variable that has not been assigned a value has the value undefined.",
    },

    {
        id: 19,
        lessonId: 2,
        question: 'Which code correctly stores the number 25 in a variable?',
        options: [
            'let age = "25";',
            'let age = 25;',
            'let age = true;',
            'let age = null;',
        ],
        correctAnswer: 1,
        explanation:
            "let age = 25; stores the numeric value 25 in the variable age.",
    },

    {
        id: 20,
        lessonId: 2,
        question: 'Which code correctly stores the text "Ali" in a variable?',
        options: [
            'let name = Ali;',
            'let name = 25;',
            'let name = "Ali";',
            'let name = true;',
        ],
        correctAnswer: 2,
        explanation:
            'Text values are strings and should be written inside quotes, so let name = "Ali"; is correct.',
    },
];