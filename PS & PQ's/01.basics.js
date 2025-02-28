//Basic With JS - Variable, Operator and Operations With Operator.

//Q1 sum of two integers.

//M1 - declare two variables and console the sum.

const varone = 10;
const vartwo = 20;

console.log("The sum of varone and vartwo is: ", +(varone + vartwo)); //Addded extra () for BODMAS else concatenation iykyk :)

//M2 - accepting input from user to add a variable and console the sum.

const varthree = Number.parseInt(prompt("Please enter the value for varthree"));
const varfour = Number.parseInt(prompt("Please enter the value for varfour"));
const sum = varthree + varfour;

console.log(`The sum of ${varthree} and ${varfour} is ${sum}`);

//M3 - Doing it using a function

const addtwovariables = function (varfive, varsix) {
  sum = varfive + varsix;
  return sum;
};

addtwovariables(10, 20);
console.log(sum);
