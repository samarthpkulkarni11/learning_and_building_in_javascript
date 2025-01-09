//We will learn about arrays and start from pure basics of exploring array and also some methods related to arrays.

const rainbowColors = [
  "Violet",
  "Indigo",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Red",
];
console.log(rainbowColors);

let arrayLength = rainbowColors.length;
console.log(arrayLength);

//let us try using some common methods to push and remove elements from array -  push and pop
rainbowColors.push("mycolor");
console.log(rainbowColors);

let arrayValue = rainbowColors.pop();
arrayValue = rainbowColors.pop();
arrayValue = rainbowColors.pop();
arrayValue = rainbowColors.pop();
arrayValue = rainbowColors.pop();

console.log(rainbowColors);

//now let us try to store key value pair in the arrays like objects can we do that ? let us check

//declare an empty array
const keyValuePairArray = [];
keyValuePairArray.firstName == "Samarth"; //behaves like an object stores up the value but neither appends as an element or the total length of it.

//insert objects in arrays

const objectInArray = [
  {
    name: "Sammy",
    place: "Bidar",
    profession: "Dabba Engineering",
    role: "Thoda sa seh lenge wala Developer",
    status: "A total failure :)",
  },
];
console.log(objectInArray);
console.log(objectInArray.length);
