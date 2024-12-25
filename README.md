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
