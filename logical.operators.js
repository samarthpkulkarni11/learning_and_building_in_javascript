//We will be going through the logical operators here and dealing with operators like - && operator, || or operator and ! not operator.

let valueTen = 20;
let valueEleven = 30;

console.log(valueTen <= valueEleven && valueEleven >= valueTen ? "Yes the and operator works here and returns true" : "No the and operator fails here and returns false");
//checks for both the conditions and returns back true only if both the conditions are true.

console.log(valueTen <= valueEleven || valueEleven >= valueTen ? "Yes the OR opr works here and returns true" : "No the OR operator does not work here and returns false");
//checks for both conditions returns true even if one among the both conditions is true and returns false only if both conditions are false.


console.log(valueTen != valueEleven ? "NOT operator is correct here and returns true" : "Given values are same so the not operator returns false");