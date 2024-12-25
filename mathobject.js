//We will learn about math object in javascript here and explore use cases relating to it.
//Math object in console
//math.floor(), .ceil(), .pow(), .sqrt(), .random(), .round().

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