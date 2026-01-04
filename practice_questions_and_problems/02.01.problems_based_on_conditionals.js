//some interesting problems based on the conditionals

//check if a valid voter or not

let userAge = 15; //use prompt() here again to get the input from user in realtime.

if (userAge >= 18) {
  console.log("The voter candidate is eligible to vote!");
} else {
  console.log("The voter candidate is not eligible to vote!");
}

//we can also chain it in the single line using ternary operator
userAge >= 18
  ? console.log("The voter candidate is eligible to vote!")
  : console.log("The voter candidate is not eligible to vote!");

//also use the switch statement in here to keep it more detailed precise or to check among the different age groups

switch (true) {
  case userAge >= 18:
    console.log("You are a valid voter");
    break;
  case userAge <= 18 && userAge >= 10:
    console.log(`You need ${18 - userAge} years to turn into valid voter`);
    break;
  default:
    console.log(" You are still a kid please go home");
}

//discount generator based on the total bill value.
/*
Here is the input table of what discount shall be given to the user based on the total bill value.

0-5000              0%
5001-7000           5%
7001-9000           10%
more than 9000      20%
*/

let userBillAmount = 10400; //again use prompt() as already known
let discount = 0;
let finalPayableAmount;

if (userBillAmount <= 5000) {
  console.log(
    `You have got 0% discount and your final amount is ${userBillAmount}`
  );
} else if (userBillAmount >= 5001 && userBillAmount < 7000) {
  finalPayableAmount = userBillAmount - (userBillAmount * 5) / 100;
  console.log(
    `You have got 5% discount and your final amount is ${finalPayableAmount}`
  );
} else if (userBillAmount >= 7001 && userBillAmount < 9000) {
  finalPayableAmount = userBillAmount - (userBillAmount * 10) / 100;
  console.log(
    `You have got 10% discount and your final amount is ${finalPayableAmount}`
  );
} else {
  finalPayableAmount = userBillAmount - (userBillAmount * 20) / 100;
  console.log(
    `You have got 20% discount and your final amount is ${finalPayableAmount}`
  );
}

//let us generate the electricity bill generated for the units consumed using price ranges between the units consumed.

/*
upto 100        4.2/unit
from 101-200    6/unit
from 201-400    8/unit
more than 400   13/unit
*/

let consumedUnits = 500; //again use prompt() same story!
let billedUnits;
let billAmount;

if (consumedUnits > 400) {
  billedUnits = consumedUnits - 400; //100 units for the current input
  billAmount = billedUnits * 13; // 1300 total here
  billedUnits = 400;
}
if (billedUnits >= 201 && billedUnits <= 400) {
  billedUnits = billedUnits - 201; //199
  billAmount = billAmount + billedUnits * 8; //1592
  billedUnits = 199;
}
if (billedUnits >= 101 && billedUnits <= 200) {
  billedUnits = billedUnits - 101; //98
  billAmount = billAmount + billedUnits * 6; //588
  billedUnits = 98;
}
if (billedUnits < 100) {
  billedUnits = billedUnits * 4.2;
  billAmount = billAmount + billedUnits; //411.6
}

console.log(
  `You have used ${billedUnits} this month and the electricity bill for the same is ₹${billAmount}`
);
