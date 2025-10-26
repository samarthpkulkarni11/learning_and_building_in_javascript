//data types in JS

`'string', Boolean (true or false), BIGINT, number(123), undefined, null, symbol`;

//declare a variable
let somename;

//declare and intialise the variable
let myname = "Sammy";

//other variable types
const myLastName = "Coolkarni"; //initialise and declare the value in same line cant be done seperately.
var myMiddleName = "P"; //global scoped variable

// let is block scoped variable
let myName = "Samarth";
{
  let myName = "Samarth P Kulkarni";
  console.log(myName); //Prints Samarth P Kulkarni
}
console.log(myName); //Prints Samarth

//whereas in same case of var it is global scoped
var mmyName = "Samarth";
{
  var mmyName = "Samarth P Kulkarni";
  console.log(mmyName); //Prints Samarth P Kulkarni
}
console.log(mmyName); //Prints Samarth P Kulkarni here too

//let us see what type coercion means in JS
//if we try to add a string with a number let us see what it returns back

const valueOne = 100;
const valueTwo = "100";
console.log(valueOne + valueTwo); //gives 100100 not 200 as the string and number gets concatenated not addition in here.

//but it is only in case of "+" operator not in case of -, *, / % operators though
console.log(valueTwo - valueOne);
console.log(valueTwo * valueOne);
console.log(valueTwo / valueOne); //this gives quotient out as the result
console.log(valueTwo % valueOne); //this gives remainder out as the result
