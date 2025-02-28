//We will learn about math object in javascript here and explore use cases relating to it.
//Math object in console
//math.floor(), .ceil(), .pow(), .sqrt(), .random(), .round().

//properties for Math.Object()
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951

//methods for Math.Object()
let valueForMathObject = 12.54;
console.log(Math.floor(valueForMathObject)); //gives up 12 as it just deletes the decimal value from it and returns back the whole.
console.log(Math.ceil(valueForMathObject)); //gives 13 as it rounds up to next big value
console.log(Math.pow(valueForMathObject, 2));
console.log(Math.sqrt(valueForMathObject));
console.log(Math.round(valueForMathObject)); //This also rounds to the next big value works similar to floor but let us check what is the diff between floor and round.

let valueForRoundAndCeil = 12.54544;
console.log(Math.floor(valueForRoundAndCeil)); //okay the floor only removes the decimal 
console.log(Math.round(valueForRoundAndCeil)); //and here the round rounds up to nearest value like for 12.4 ~ 12 and 12.6 ~ 13

//small program to return random numbers

let generateRandomNumber = Math.floor(Math.random() * 10);
console.log(generateRandomNumber);

//generate random numbers between specified range.
let min = 10;
let max = 20;

let generatedRandomNumberWithRange = Math.floor(Math.random() * (max - min + 1) + min); //this is rendered as (min, [max + 1]) as a range to generate random values.
console.log(generatedRandomNumberWithRange);