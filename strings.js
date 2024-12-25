//What is a string datatype and how is it declared?

const firstString = "some string value"; //Any value which is enclosed under ' ' or " " is to be named as string.
const numberString = "987456321";
const specialCharString = "@#%$%$&^*(*);";
const emptyString = " ";

const sentenceString = firstString + " " + numberString;

//Properties and methods related to string

//string length property -- to find the string length -> "stringname.length"

const findingStringLength = "this is a one of the string let us check its value with inbuilt functions in JS";
console.log(findingStringLength.length)

//String methods without arguements
//trim()
//trimStart()
//trimEnd()

const convertStringToLowerCase = "SOME STRING HERE";
console.log(convertStringToLowerCase.toLowerCase())

const convertStringToUpperCase = "some string here";
console.log(convertStringToUpperCase.toUpperCase());

const trimTheString = "     some string again here      after some spaces"; //this will not be trimmed as we have some value after the first string which it considers as a valid value.
console.log(trimTheString)
console.log(trimTheString.trim());

const startTrimString = "    trim me at the start!";
console.log(startTrimString.trimStart());

const endTrimString = "trim me at the end!         ";
console.log(endTrimString.trimEnd());

