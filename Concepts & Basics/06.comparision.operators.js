//We will be learning and covering the comparision operators and general use cases with the compairison operators.

//Operators -
// >, <, >=, <=, =, ==, ===, !=, !==

const valueOne = '100';
const valueTwo = 20;
if (valueOne >= valueTwo) {
    console.log("False");
}
else if(valueOne <= valueTwo) {
    console.log("True");
}
else {
    console.log("Cannot compair the given values")
}

const valueThree = '100';
const valueFour = 100;

console.log(valueThree != valueFour ? "True" : "False"); //converts the value from string to number for compairison.
console.log(valueThree !== valueFour ? "Yes it is true" : "No it is false"); //strict inequality check value and datatype both are checked here.
console.log(valueThree == valueFour ? "Yes the given values are same" : "No the values arent same"); //Under this compairision it converts the string value to number type for compairison.
console.log(valueThree === valueFour ? "The value and the datatype are same" : "Nope the values and datatypes arent same"); //Checks for the value and datatype both for equality operator.

