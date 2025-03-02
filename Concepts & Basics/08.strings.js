//What is a string datatype and how is it declared?

const firstString = "some string value"; //Any value which is enclosed under ' ' or " " is to be named as string.
const numberString = "987456321";
const specialCharString = "@#%$%$&^*(*);";
const emptyString = " ";

const sentenceString = firstString + " " + numberString;

//Properties and methods related to string

//string length property -- to find the string length -> "stringname.length"

const findingStringLength =
  "this is a one of the string let us check its value with inbuilt functions in JS";
console.log(findingStringLength.length);

//String methods without arguements
//trim()
//trimStart()
//trimEnd()

const convertStringToLowerCase = "SOME STRING HERE";
console.log(convertStringToLowerCase.toLowerCase());

const convertStringToUpperCase = "some string here";
console.log(convertStringToUpperCase.toUpperCase());

const trimTheString = "     some string again here      after some spaces"; //this will not be trimmed as we have some value after the first string which it considers as a valid value.
console.log(trimTheString);
console.log(trimTheString.trim());

const startTrimString = "    trim me at the start!";
console.log(startTrimString.trimStart());

const endTrimString = "trim me at the end!         ";
console.log(endTrimString.trimEnd());

//Let us trim and convert the case of the following strings.

const trimStartAndLowerCase =
  "          trim ME at The Start and Convert the CASE TO LOWER CASE";
console.log(trimStartAndLowerCase.trimStart().toLowerCase());

const trimEndAndUpperCase = "TRIM ME aT ThE EnD & CONVERT me to LoWer CaSE";
console.log(trimEndAndUpperCase.trimEnd().toUpperCase());

//Methods with arguments included

//1. includes() method - This method checks for the includes with argument inside the applied string if it exists it returns true else false. This method is case sensitive too!
//which means Am cannot be checked with am and result will return false.

let includesCheckString = "Hi I am string! Check for the includes method";
console.log(includesCheckString.includes("check")); //this is case sensitive too as it will returns false as it is looking strictly for "check" in the string.

//2.indexOf() method - This method is used to find the index of the character in the given string. It only supports single char check and returns -1 as the result for invalid or
//unknown character in the given string.

let stringWithMethodsApplied =
  "This is a quite long string with AbcDEF weird charActers to check and play @round with STRING methods";
console.log(stringWithMethodsApplied.indexOf("i"));

// 3.replace() method - This method involves replacing the first string argument with the next string argument being applied on.

console.log(stringWithMethodsApplied.replace("This", "Hello"));
console.log(stringWithMethodsApplied); // Does not modify or overwrite the original string but just does the job of the operation on the specified string.
console.log(stringWithMethodsApplied.replace("Hey", "Hello")); // If the first element to be replaced is not found in the string it will return back the original string as the result does not throw any error or any such thing.

console.log(stringWithMethodsApplied.replaceAll("i", "I")); //replaces all the string values with the given replacement value.

//4. concat() method - This is used to add two or multiple strings into some single value.

let concatedString = includesCheckString.concat(" ", stringWithMethodsApplied);
console.log(concatedString);

//5. padStart() and padEnd() methods - Adds up the given argument to the specified string. Takes argument as - appliedstring.padStart(totallengthofstringincludingpaddingchar, 'padding char')

let padString = "8525";
console.log(padString.padStart(8, "*"));
console.log(padString.padEnd(8, "#"));

//6. charAt() and charCodeAt() methods - Helps in finding the character and code (ascii value) of the character index specified on the applied string.

let charAtString = "Hello I am string again!";
console.log(charAtString.charAt(9)); //works with only index numbers.
console.log(charAtString.charAt("I")); //if tried with character value, returns `H` as the result dont know what this means!
console.log(charAtString.charCodeAt(9)); //returns the ascii value of the character's index specified
console.log(charAtString.charCodeAt("H")); //this works well with string value also still returns the ascii value for the character in the string.

//7. split methods - Helping to divide the given string into different string with the specified char value.

const splitString = "Hello, I, am, string, split, me, using, split, method,!";
console.log(splitString.split(",")); //takes only single agrument and deletes that argument from the string and gives back the splits as result.

//8. String Template Literals - ${} operator

const someRandomValue = 852741963;
console.log(`I have some random value specified as ${someRandomValue}`); //can insert only js terms and need to use it along backticks ` `
