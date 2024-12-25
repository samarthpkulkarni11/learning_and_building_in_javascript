# JavaScript Variable Basics

A beginner-friendly guide to understanding variable declarations, scope, and naming conventions in JavaScript.

## Table of Contents
- [Introduction](#introduction)
- [Variables in JavaScript](#variables-in-javascript)
  - [Variable Declaration Rules](#variable-declaration-rules)
  - [Types of Declarations](#types-of-declarations)
  - [Global vs Block Scope](#global-vs-block-scope)
  - [`const` Rules](#const-rules)
  - [Hoisting Behavior](#hoisting-behavior)
  - [Naming Conventions](#naming-conventions)
- [Examples](#examples)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

---

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
