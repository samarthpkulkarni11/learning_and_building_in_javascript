//Whenever we write the code in JavaScript, this is how the JS code will get executed -

`The code gets executed in two phases - 
1. Memory Creation Phase and
2. Code Execution Phase.``In the initial phase the JS runs and checks for all the declared variables in the code and creates the space in the memory with undefined data type and undefined value.
This is the memory creation phase.

As the second phase runs the code then inserts the value for the declared variable and sets up the data type too. This phase is called as code execution phase.``The memory creation phase and code execution space cannot be directly viewed, but still the phases of the code execution can be viewed under inspect -> sources tab where in 
a debugger can be deployed at the stages and the memory creation phase and the values being inserted in the created variables sequentially as they are declared in the code!`;

var samplevariable; //the memory is allocated for this variable with undefined type and value.
var simplevariable = "this is holding some value"; //the type and the value is now assigned in the created meomory for the variable.

`Remeber as we saw in the variables.js that the variables contain different scopes and also we did observe there are three different types - var, let and const with their own properties
and the var variables can be seen under global scope in the sources section and the rest variables can been seen under script section`;

//Here in this example if i try to get the variable before initialisation for var like

console.log(varVariable);

var varVariable = "some var value"; //throws undefined error
//one more important thing to avoid var as declaring a variable as it allows to access the variable before it has been defined or declared.

console.log(letVariable);
console.log(constVariable);

let letVariable = "some let value"; //block-scoped variable.
const constVariable = "some const value"; //needs to be declared and initialised at same time.

//For these above two variables, it gives out the error and this stage where in the let and const values are declared but cannot be accessed or used over any operation throws the
//variable in TDZ (temporal dead zone).

//Now why it gives undefined for var but throws error for let because the var is the oldest declared data type in JS and the other types like let gives error as it was declared somewhere
//around in the year 2015.
