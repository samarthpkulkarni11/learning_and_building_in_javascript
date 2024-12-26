# Readme for JavaScript Zero-To-One.

## Table of Contents
- [JavaScript Brief History](#javascript-brief-history)
- [Working with JavaScript](#working-with-javascript)
- [JavaScript Variable Basics](#javascript-variable-basics)
  - [Variable Declaration Rules](#variable-declaration-rules)
  - [Types of Declarations](#types-of-declarations)
  - [Global vs Block Scope](#global-vs-block-scope)
  - [Example: Hoisting and Temporal Dead Zone (TDZ)](#example-hoisting-and-temporal-dead-zone-tdz)
- [Primitive Data Types](#primitive-data-types)
- [Non-Primitive (Reference) Data Types](#non-primitive-reference-data-types)
- [Using `alert()`, `confirm()`, and `prompt()` in JavaScript](#using-alert-confirm-and-prompt-in-javascript)

---

# Javascript Brief History

Take a moment to understand the fascinating journey of JavaScript:

Back in the 1990s, Netscape, a popular browser with 90% market share, sought to make websites dynamic.
Brendan Eich developed the first version of JavaScript (then called Mocha) in just 10 days.
The language was later renamed LiveScript and finally JavaScript (to leverage the popularity of Java at the time). Note that JavaScript has no relation to Java.
To ensure consistency across browsers, ECMA (European Computers Market Association) standardized JavaScript, introducing rules and updates in the form of ECMAScript (ES) versions, such as ES4, ES5, and ES6.

Initially, JavaScript was interpreted line-by-line. However, modern advancements like Google Chrome's V8 engine transformed it into a Just-In-Time Compiler for improved performance, compiling code as it runs.

# Working with JavaScript

Whenever we write code in JavaScript, it gets executed in two phases:

### 1. Memory Creation Phase
In this phase:
- The JavaScript engine scans the code to find all declared variables.
- It allocates space in memory for these variables with the `undefined` value and `undefined` data type.

### 2. Code Execution Phase
In this phase:
- The JavaScript engine assigns values to the declared variables.
- It determines the correct data type for each variable.

### Debugging Phases
While the memory creation and execution phases are not directly visible, you can inspect the process:
1. Open your browser's **Inspect > Sources** tab.
2. Use a **debugger** to observe the memory creation phase and how values are assigned sequentially.


# JavaScript Variable Basics

A beginner-friendly guide to understanding variable declarations, scope, and naming conventions in JavaScript.

## Introduction

Variables are fundamental in JavaScript and serve as containers for storing data. This repository focuses on explaining the three types of variables in JavaScript—`var`, `let`, and `const`—and their behavior in different scenarios, such as scope and hoisting. The examples provided illustrate practical use cases and highlight common pitfalls.

---

## Variables in JavaScript

JavaScript provides three main ways to declare variables:

1. **`var`**: Declares globally or functionally scoped variables.
2. **`let`**: Declares block-scoped variables.
3. **`const`**: Declares block-scoped constants (values that cannot be reassigned).

---

### Variable Declaration Rules
- Variable names can include letters, numbers, `$`, and `_`.
- Names cannot start with a number.
- Avoid using special characters (e.g., `%`, `#`, etc.).
- JavaScript is case-sensitive (`myVar` and `myvar` are distinct).

---

### Types of Declarations
1. **Declaration**: `var variableName;`
2. **Initialization**: `var variableName = "value";`
3. **Empty Value**: Variables can be initialized to `""` (empty string).

---

### Global vs Block Scope

- Variables declared with `var` are accessible outside their block scope.
- Variables declared with `let` are accessible only within the block.

```javascript
var globalVar = "global";
{
    var globalVar = "updated global";
    console.log(globalVar); // "updated global"
}
console.log(globalVar); // "updated global"

let blockVar = "block";
{
    let blockVar = "updated block";
    console.log(blockVar); // "updated block"
}
console.log(blockVar); // "block"

```

---

### Example: Hoisting and Temporal Dead Zone (TDZ)
```javascript
// Variable declarations:
console.log(varVariable); // undefined
var varVariable = "some var value"; // Hoisted but initialized to undefined

// Accessing `let` and `const` before declaration throws an error:
console.log(letVariable); // ReferenceError
console.log(constVariable); // ReferenceError

let letVariable = "some let value";
const constVariable = "some const value";
```
TDZ (Temporal Dead Zone): Variables declared with let or const are in a temporal dead zone from the start of their block until their declaration is encountered. Accessing them during this time throws a ReferenceError.
var allows access before declaration (hoisted as undefined) because it is the oldest JavaScript declaration type.

# Primitive Data Types 

### These are predefined types with specific meanings and direct representations of values.

Examples:
Number
Null
String
Symbol
Boolean
BigInt
Undefined

### Non-Primitive (Reference) Data Types
These types are usually user-defined and don't inherently carry a meaning. They can store complex data structures or values.

Examples:
Arrays
Objects
Regular Expressions
Functions
Maps
Sets

```
var numberType = 123456; // This is a number data type variable

let nullType = null; // Obviously its null

// BigInt: Used to represent large integers beyond the Number type's range.
const bigIntType = BigInt("123456789012345678901234567890"); // A big-valued integer

const booleanType = 'true or false'; // Can have both values as booleans

const stringType = `A simple string with backticks helps to use template literals which will be covered soon!`; // Most of the time, used - A Stringgg!

// Symbol: Unique identifier, often used as keys in objects.
var symbolType = Symbol();
console.log(symbolType); // Symbol()

// Creating a Symbol with a description
var moreSymbolType = Symbol("description");
console.log(moreSymbolType); // Symbol(description)

var undefinedType; //:)

```

### typeof() function
We can check the data type of any variable using the typeof() function.

```
console.log(typeof(booleanType)); // Any variable data type can be checked with this function.
```

### Interesting Facts About Data Types in JS

### Type Coercion: When you add the + operator to a string, JavaScript will attempt to convert it to a number if possible.

```
let stringToNumberType = +'100';
console.log(typeof(stringToNumberType)); // Prints 'number'
```

### Type Conversion for Other Values: Similarly, you can observe conversions for other types:

```
console.log(typeof (+null)); // 'number'
console.log(typeof (-false)); // 'number'
console.log(typeof ('1000qjhdahdajhsjhdahhdljdha0000')); // 'number' (NaN)
```

### Operator Precedence: In mathematical operations, the * and / operators have higher precedence than + and -

```
console.log(2 + 4 - 6 * 12 / 6); // Order of operations, prints 2
console.log((2 + 4) - 5 * 6 / 3); // With brackets, it prints 2
```

### Parsing Values with parseInt(): The parseInt() function is helpful for extracting numbers from a jumbled string

```
console.log(parseInt('192948ajfauohfhaohhaoofqofoqoqiqq')); // 192948
console.log(parseInt("746384774jkahfahfhhhhi3gry3764834")); // 746384774
```

### Prompt for User Input: prompt() is used to get input from the user

```
var printMyName = prompt("Please enter your name here: ");
console.log(`Hi` + " " + printMyName + " " + "Welcome here!!");
```

# Using `alert()`, `confirm()`, and `prompt()` in JavaScript

In JavaScript, `alert()`, `confirm()`, and `prompt()` are commonly used functions for interacting with users through dialog boxes. These functions are part of the browser's window object and are often used in web applications to gather input or display messages.

### alert()
The `alert()` function displays a simple pop-up message to the user. It only contains a message and an "OK" button.

- **Syntax**:  
  ```
  alert("Your message here");
  
  ```
### confirm()
The confirm() function displays a dialog box with a message and OK and Cancel buttons. It returns true if the user clicks "OK" and false if the user clicks "Cancel".

- **Syntax**:  
  ```
  const result = confirm("Are you sure?");
  
  ```
### prompt()
The prompt() function displays a dialog box with a message and an input field, allowing the user to enter some text. It returns the text entered by the user (or null if the user clicks "Cancel").
  
- **Syntax**:  
  ```
  const userInput = prompt("Please enter your name:");
  
  ```

# JavaScript Math Object Documentation

## Overview
The Math object in JavaScript provides a collection of properties and methods for performing mathematical operations. This documentation covers the essential properties and methods of the Math object with practical examples.

## Properties
The Math object includes several mathematical constants:
- `Math.E`: Euler's number (≈ 2.718)
- `Math.LN2`: Natural logarithm of 2 (≈ 0.693)
- `Math.LN10`: Natural logarithm of 10 (≈ 2.303)
- `Math.LOG2E`: Base-2 logarithm of E (≈ 1.443)
- `Math.LOG10E`: Base-10 logarithm of E (≈ 0.434)
- `Math.PI`: Pi constant (≈ 3.142)
- `Math.SQRT1_2`: Square root of 1/2 (≈ 0.707)
- `Math.SQRT2`: Square root of 2 (≈ 1.414)

## Common Methods

### Rounding Methods
```javascript
Math.floor(x)    // Rounds down to nearest integer
Math.ceil(x)     // Rounds up to nearest integer
Math.round(x)    // Rounds to nearest integer
```

Key differences:
- `floor()`: Always rounds down (12.54 → 12)
- `ceil()`: Always rounds up (12.54 → 13)
- `round()`: Rounds to nearest integer (12.4 → 12, 12.6 → 13)

### Mathematical Operations
```javascript
Math.pow(x, y)   // Returns x raised to power y
Math.sqrt(x)     // Returns square root of x
```

### Random Number Generation
```javascript
// Generate random number between 0 and 9
Math.floor(Math.random() * 10)

// Generate random number between min and max (inclusive)
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
```

## Examples

Basic usage:
```javascript
let value = 12.54;
console.log(Math.floor(value));     // Output: 12
console.log(Math.ceil(value));      // Output: 13
console.log(Math.pow(value, 2));    // Output: 157.2516
console.log(Math.sqrt(value));      // Output: 3.5411...
```

Random number generation within range:
```javascript
let min = 10;
let max = 20;
let random = Math.floor(Math.random() * (max - min + 1) + min);
// Generates a random integer between 10 and 20 (inclusive)
```

## Best Practices
1. Use `Math.floor()` with `Math.random()` when generating random integers
2. Always specify range boundaries when generating random numbers
3. Be aware of floating-point precision when working with decimal numbers

## Notes
- All Math object properties are read-only
- Methods always return a number value
- The Math object cannot be instantiated (no `new Math()`)

# JavaScript Truthy and Falsy Values

## Overview
In JavaScript, all values have an inherent boolean value when used in a boolean context. These values are categorized as either "truthy" or "falsy". While there are many truthy values, there are only a few specific falsy values.

## Falsy Values
In JavaScript, there are exactly five falsy values:

1. `0` and `-0`
   ```javascript
   Boolean(0)     // false
   Boolean(-0)    // false
   ```

2. `NaN` (Not a Number)
   ```javascript
   Boolean(NaN)   // false
   ```

3. Empty string (`''` or `""`)
   ```javascript
   Boolean('')    // false
   Boolean("")    // false
   ```

4. `undefined`
   ```javascript
   Boolean(undefined)   // false
   ```

5. `null`
   ```javascript
   Boolean(null)   // false
   ```

## Truthy Values
Everything else not listed above is considered truthy. Some examples include:
```javascript
Boolean(1)         // true
Boolean(-1)        // true
Boolean('hello')   // true
Boolean([])        // true
Boolean({})        // true
Boolean(true)      // true
```

## Practical Usage

### In Conditional Statements
```javascript
if (value) {
    // Executes if value is truthy
} else {
    // Executes if value is falsy
}
```

### Common Use Cases
```javascript
// Checking for empty strings
const name = '';
if (!name) {
    console.log('Name is empty');
}

// Checking for undefined values
const value = undefined;
if (!value) {
    console.log('Value is not defined');
}
```

## Best Practices
1. Use explicit comparisons when checking for specific values:
   ```javascript
   // Instead of
   if (value) {}
   
   // Better to be explicit when checking for null/undefined
   if (value !== null && value !== undefined) {}
   ```

2. Be careful with array and object checks:
   ```javascript
   // Empty arrays and objects are truthy!
   Boolean([])   // true
   Boolean({})   // true
   
   // Use length or Object.keys() for emptiness checks
   if (array.length) {}
   if (Object.keys(obj).length) {}
   ```

## Common Gotchas
1. The number `0` is falsy, but the string `"0"` is truthy
2. Empty arrays `[]` and empty objects `{}` are truthy
3. Whitespace-only strings (e.g., `" "`) are truthy

# JavaScript Comparison Operators Guide

## Basic Operators
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to
- `==` Equal to (loose equality)
- `===` Strictly equal to
- `!=` Not equal to
- `!==` Strictly not equal to

## Quick Reference

### Loose vs Strict Comparison
```javascript
// Loose equality (==) converts types before comparing
'100' == 100    // true

// Strict equality (===) compares both value and type
'100' === 100   // false
```

### Type Coercion in Comparisons
```javascript
const valueOne = '100';  // string
const valueTwo = 100;    // number

valueOne == valueTwo     // true (string converted to number)
valueOne === valueTwo    // false (different types)
valueOne != valueTwo     // false (string converted to number)
valueOne !== valueTwo    // true (different types)
```

## Best Practices
1. Use `===` and `!==` by default to avoid unexpected type coercion
2. Only use `==` and `!=` when type coercion is specifically desired
3. For numeric comparisons with strings, explicitly convert to numbers first

## Common Gotchas
- String numbers are converted to real numbers in `>`, `<`, `>=`, `<=` operations
- `==` and `!=` perform type coercion
- `===` and `!==` do not perform type coercion










