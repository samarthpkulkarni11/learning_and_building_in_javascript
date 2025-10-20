//Covering different data types in JS

`There are majorly two different data types in JS they are -

Primitive Data types - These are the one which are actually predefined and has an actual meaning to the data stored under a particular type.
Examples - Number, Null, String, Symbol, Boolean, BigInt and Undefined. (NNBBSSU)

Non Primitve Data types - These are the one which are user defined and does not have any meaning to their names and can store any format of data.
Examples - Arrays, Objects, Regular Expressions, Functions, Maps, Sets etc `;

var numberType = 123456; //This is a number data type variable

let nullType = null; //Obviously its null

//Here we can observe the value of bigint is being covered in the strings, which does not make it string but internally converted to hold the original data type value as
//BigInt and this is the way of how big values in JS are stored rather than a simple number.
const bigIntType = BigInt("123456789012345678901234567890"); //A big valued integer variable

const booleanType = true; // Can have both the values as the booleans
const booleanTypeTwo = false;

const stringType = `A simple string with backticks helps to use template literals which will be covered soon!`; // Most of the times used - A Stringgg!

//Not oftenly used, rarely required but good to know though and will cover more on implementing symbols as unique identifiers in objects part or nonprimitivedata types file.
var symbolType = Symbol();
console.log(symbolType); // Symbol()

// Creating a Symbol with a description
var moreSymbolType = Symbol("description");
console.log(moreSymbolType); // Symbol(description)

var undefinedType; //:)

//We have a support of checking of the data type for any variable by using `typeof()` function.

console.log(typeof booleanType); // Any variable data type can be checked with this function.

// We do have some more interesting facts in JS on data types:

//If the + operator is added to a string where in the string is `100` it converts it to number.

let stringToNumberType = +"100";
console.log(typeof stringToNumberType); // Prints number as the result

//Similarly we can extract value out of some data type values like
console.log(typeof +null);
console.log(typeof -false);

console.log(1 && 4); //returns the second value as the result in this case 4.
console.log(1 || 4); //returns the first value as the result in this case 1.

console.log(+null);
console.log(undefined == false);
console.log(+NaN);
console.log(+true);

console.log(typeof "1000qjhdahdajhsjhdahhdljdha0000");

console.log(2 + 4 - (6 * 12) / 6); //Here we dont see the BODMAS rule working rather the * and / operators are preferred over the other operators

console.log(2 + 4 - (5 * 6) / 3); // Now the bracket operation is preferred more over the * and /operators and later rest other operators.

//One more function to parse a jumbled up string into number we can use `parseInt()` function to do that

console.log(parseInt("192948ajfauohfhaohhaoofqofoqoqiqq")); //Works uptill an extent and tries to fetch the number value out of the string given.
console.log(parseInt("746384774jkahfahfhhhhi3gry3764834")); //Does not completely extract number

//One last function which is very useful and handy to know is prompt();
//Prompt is oftenly used to get the value from the user or client basically maybe client is not the better word here but yaa basically to get the input

// var printMyName = prompt("Please enter your name here: ");
// console.log(`Hi` + " " + printMyName + " " + "Welcome here!!")
