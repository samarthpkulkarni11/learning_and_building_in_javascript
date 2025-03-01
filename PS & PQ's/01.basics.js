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

//Relation between integer and string

//Now whenever we try to add any string with a number it does not really add the number but does the string concatenation. For example -

console.log("1" + 1); // does not give you 2 but gives 11 as it concatenates the string.

//what if there are more than two values
console.log(1 + 2 + "3" + 4 + 5); //let us stack down the operation
// 1 + 2 = 3
// 3 + "3" = 33 //concatenation happens as the other operand is of type string
// "33" + 4 = "334" //concatenates
// "334" + 5 = "3345" //final concatenation and the result is "3345" type - string

//Now that we see the + operand does the concatenation let us check what happens with other operators and what is their type for -, * and /.
console.log("10" - 5); //gives 5 as the answer and this is interesting

//JS uses something known as type coercion where in for subtract operation it converts the string type to the number internally and then performs the operation and the type is 'number' too.

console.log("10" * 5); //result is 50 happens same here too and  type: number
console.log("10" / 5); //result is 2 happens same here too and type: number

//Swap two variables using four different methods.

// 1st method: use extra variable to swap the values.
// 2nd method: use the array destructuring method.
// 3rd method: without an extra variable.
// 4th method: using XOR ^ operator (Works with JS only I think!!)

//1st method:

let letOne = 10;
let letTwo = 20;
let letThree; //added an extra variable for swapping values;

letOne = letThree;
letTwo = letOne;
letOne = letThree;

//2nd method

[letOne, letTwo] = [letTwo, letOne];

//3rd method

letOne = letOne + letTwo;
letTwo = letOne - letTwo;
letOne = letOne - letTwo;

//4th method -- converts the given value into binary, does the operation of adding binary numbers and gives back the result.

letOne = letOne ^ letTwo;
letTwo = letOne ^ letTwo;
letOne = letOne ^ letTwo;

//this is also one more method which works for strictly non zero inputs

letOne = letOne * letTwo;
letTwo = letOne / letTwo;
letOne = letOne / letTwo;

console.log(`The new swapped values are ${letOne}, ${letTwo}`);
