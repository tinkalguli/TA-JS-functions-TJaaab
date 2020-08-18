// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(n) {
  return n + 1;
}

// - Write a Function Expression

let addOne = function (n) {
  return n + 1;
};

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets

let addOne = (n) => {
  return n + 1;
};

// - Execute the function

addOne(5);

// - Execute the function and store the return value in a variable.

let addedOne = addOne(5);

// - What is the typeof returnValue
// typeof addedOne is "number";

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(n) {
  return n - 1;
}

// - Write a Function Expression

let substractOne = function (n) {
  return n - 1;
};

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets

let substractOne = (n) => {
  return n - 1;
};

// - Execute the function

substractOne(8);

// - Execute the function and store the return value in a variable.

let substractedOne = substractOne(8);

// - What is the typeof returnValue
// typeof substractedOne is "number";

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(numA, numB) {
  return numA + numB;
}

// - Write a Function Expression

let sum = function (numA, numB) {
  return numA + numB;
};

// - Write an Arrow Function without curly brackets(if possible)

let sum = (numA, numB) => numA + numB;

// - Write an Arrow Function with curly brackets

let sum = (numA, numB) => {
  return numA + numB;
};

// - Execute the function

sum(9, 5);

// - Execute the function and store the return value in a variable

let addedAmount = sum(9, 5);

// - What is the typeof returnValue
// typeof addedAmount is "number";

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(n) {
  return n ** 2;
}

// - Write a Function Expression

let square = function (n) {
  return n ** 2;
}

// - Write an Arrow Function without curly brackets(if possible)

let square = (n) => n ** 2;

// - Write an Arrow Function with curly brackets

let square = (n) => {
  return n ** 2;
}

// - Execute the function

square(4);

// - Execute the function and store the return value in a variable

let squaredAmount = square(4);

// - What is the typeof returnValue
// typeof squaredAmount is "number";

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y) {
  return x > y ? true : false;
}

// - Write a Function Expression

let isGreater = function (x, y) {
  return x > y ? true : false;
};

// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => x > y ? true : false;

// - Write an Arrow Function with curly brackets

let isGreater = (x, y) => {
  return x > y ? true : false;
};

// - Execute the function

isGreater(7, 3);

// - Execute the function and store the return value in a variable

let isGreaterReturnValue = isGreater(7, 3);

// - What is the typeof returnValue
// typeof isGreaterReturnValue is "boolean";

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(z) {
  return z % 2 ? `Number is odd` : `Number is even`;
}

// - Write an anonymous Function Expression

let oddOrEven = function (z) {
  return z % 2 ? `Number is odd` : `Number is even`;
};

// - Write an named Function Expression

let isOddOrEven = function oddOrEven(z) {
  return z % 2 ? `Number is odd` : `Number is even`;
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (z) => z % 2 ? `Number is odd` : `Number is even`;

// - Write an Arrow Function with curly brackets

let oddOrEven = (z) => {
  return z % 2 ? `Number is odd` : `Number is even`;
};

// - Execute the function

oddOrEven(5);
isOddOrEven(8);

// - Execute the function and store the return value in a variable

let oddOrEvenreturnValue = oddOrEven(5);
let isoddOrEvenreturnValue = isOddOrEven(8);

// - What is the typeof returnValue
// typeof oddOrEvenreturnValue is "string";
// typeof isoddOrEvenreturnValue is "string";