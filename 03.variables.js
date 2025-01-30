// Variables are the containers which stores up the assigned values and consume memory in the system
//There are three types of variables in JS - var, let and const
//Var is global scoped variable while let is block scoped variable and const is used for constants.
// ; is not a strict rule to be added after every line of code, as a standard practice I will keep using it!

//Let us once understand through the variable declaration rules.

var $1332 = 110556; //valid

// let 1232 = "value"; //Invalid cant start with a number!

const _constvariable = "constant value"; //Valid can start with underscore.

// var % dfhdao = "dah fcuk"; //Cant just randomly use any special chars apart from $ and _!

let myLet = "LetLet"; // Can have casesensitive letters

//Let us once understand through the variable declaration rules.

var variableone; // This is known as declaring a variable

var variableone = "valueone"; // This is known as initialisng a variable by storing some value in it.

//Let us try to print only declared variable but not initialised with any value

var onlyDeclaredVariable; //returns undefined as the result as the variable is only declared but not initialised by assigning any value to it!
console.log(onlyDeclaredVariable);
let justDeclaredVariable;
console.log(justDeclaredVariable);

//What if we just declare the variable with empty string

var emptyStringVariable = ""; // dumb try ofcourse it will print empty space as result :)
console.log(emptyStringVariable);

//Similarly we can also initalise variables using let and const here

let variabletwo = "valuetwo";
const variablethree = "valuethree";

//Let us check with case sensitive part

let CAPITALVAR = "BIG VALUE";
console.log(CAPITALVAR);
var capitalvar = "big value";
console.log(capitalvar);

//Let us check the point of global scope vs block scope for var and let.

var variablefour = "valuefour";

{
  var variablefour = "updated valuefour";
  console.log(variablefour);
}

console.log(variablefour);

let variablefive = "valuefive"; //Prints "updated valuefour" as the result!

{
  let variablefive = "updated valuefive";
  console.log(variablefive); //Prints "updated valuefive" as the result!
}

console.log(variablefive); //Prints "valuefive" as the result!

const variablesix = "valuesix"; //Cannot be initialised and declared seperately, needs to be done in single instance and can be reinitialised twice after value is assigned!

//Lets move ahead

//Let us try to print the variable before we declare it and let us check the console!

console.log(varseven);
var varseven = "valueseven"; //throws undefined as the result but does not throw any error though!!

//Try the same along let
console.log(vareight);
var vareight = "valueeight"; //Throws ReferenceError: Cannot access 'vareight' before initialization both for let and const!!

//Types of variable declarations

//smallcased
var smallcased;

//capital or largecased -- whatever
let CAPITALLARGE;

//camel cased
const camelCased = "HUMP!"; //Most Preffered Type in JS

//snake cased
let snake_cased = "5_feet_long!";

//pascal cased
let PascalCased = "BlahBlah";

let letVariable = "some let variable value";

letVariable = "some updated let variable value";

console.log(letVariable); //let variables can be updated but does not allow redeclaring the variable;

// let letVariable = "redeclared let variable"; //prompts error - SyntaxError: Identifier 'letVariable' has already been declared
