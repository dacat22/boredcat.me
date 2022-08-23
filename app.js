//single line
/* multi-line */ 
console.log('JavaScript'); //string
console.log(2011); //number

//operators +-*/% %=remainder
console.log(28+3.5)
console.log(2022-1969)
console.log(65/240)
console.log(0.2708*100)

//add strings together
console.log('Hello'+'World')
console.log('Hello'+' '+'World')

//characters in a string
console.log('Teaching the world how to code'.length)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String string methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math math methods
console.log(Math.floor(Math.random()*100))
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))

/* Data is printed, or logged, to the console, a panel that displays messages, with console.log().

There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.

Numbers are any number without quotes: 23.8879

Strings are characters wrapped in single or double quotes: 'Sample String'

The built-in arithmetic operators include +, -, *, /, and %.

Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.

Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().

We can access properties and methods by using the ., dot operator.

Built-in objects, including Math, are collections of methods and properties that JavaScript provides.*/

var favoriteFood = 'pizza';
console.log(favoriteFood);
// Output pizza
var numOfSlices = 8;
console.log(numOfSlices)

let changeMe = true;
changeMe = false;
console.log(changeMe)

let myName = 'Jere';
let myCity = 'London';

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

/*
Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to concatenate strings including string values held in variables.
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
The typeof keyword returns the data type (as a string) of a value.
Instructions
To learn more about variables take on these challenges!

Create variables and manipulate the values.
Check what happens when you try concatenating strings using variables of different data types.
Interpolate multiple variables into a string.
See what happens when you use console.log() on variables declared by different keywords (const, let, var) before they’re defined. For example:
console.log(test1);
 
const test1 = 'figuring out quirks';
Find the data type of a variable’s value using the typeof keyword on a variable.
Use typeof to find the data type of the resulting value when you concatenate variables containing two different data types.
*/
//age
const myAge = 3
//early years
let earlyYears = 2
earlyYears *= 10.5
console.log(earlyYears)
let laterYears = myAge-2
//calc later years
laterYears *= 4
console.log(laterYears)
//my age in dog
let myAgeInDogYears = laterYears + earlyYears
console.log(myAgeInDogYears)
let myName = "Jere";
myName = myName.toLowerCase();
console.log(myName)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

let sale = true;
sale = false;
if (sale) {
console.log('Time to buy!');
}

let sale = true;

sale = false;

if (sale) {console.log('Time to buy.')}
else {console.log('Time to wait for a sale.')}

let hungerLevel = 7

if (hungerLevel > 7){console.log('Time to eat!')} else {console.log('We can eat later!')}