// Basic Operators - Arithametic - +, -, *, / and %

let letOne = 20;
let letTwo = 30;

console.log(letOne + letTwo);
console.log(letTwo - letOne);
console.log(letOne * letTwo);
console.log(letTwo / letOne); //does the division and gives the quotient as the answer.
console.log(letTwo % letOne); //does the division and gives the remainder as the answer.

//Relational Operator - >, <, >=, <=, ==, ===, !=, !==

console.log(10 > 5); //gives true
console.log(10 < 5); //gives false
console.log(5 >= 5); //gives true
console.log(5 <= 10); //gives true

console.log(10 == "10"); // gives true and the compiler does the type conversion where in it converts the string "10" to number and passes the condition. Typically this is fuc**n bug :|
console.log(10 === "10"); //gives false as it strictly compares the value along with the type as it does not convert by itself this is good to opt in practical conditions.

console.log(10 != 5); //gives true
console.log(10 != 10); //gives false as they are equal

console.log(10 !== "10"); //this does not do any conversion and gives true as it treats as compairision between number and string.

//Logical Operator - &&, ||

//simple thing is && gives true if all conditions are true and || gives true if any one of the condition is true.

console.log(10 && 1); //gives 1 as the result as it picks up the second value as the result.
console.log(10 || 1); //gives 10 as it picks up the first value as result

console.log(10 && "1");

//Urnary Operators - ++, --

//this is an interesting and simple operator to work with. let us start with declaring a variable

let somevariable = 100;

//now if i do this thing
somevariable++; //appends only here and if tried to print it still shows 100.
console.log(somevariable); //first it appends and then prints like 100 + 1 = 101

//if we do this thing
++somevariable; //appends and prints right away if applied with console.log

//some questions

let i = 10;
console.log(i++ + ++i); //gives 24 = 12 + 12
