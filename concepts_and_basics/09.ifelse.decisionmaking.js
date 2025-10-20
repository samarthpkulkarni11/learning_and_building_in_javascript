//We will be covering about if else decision making statements and also how to optimise decision making using else if and nested if else statements for multiple checks
//on given outputs to get the desired result.

const userInput = prompt("Enter some random number");

if (userInput <= 10) {
  alert("Nope this wasn't expected");
} else if (userInput <= 50) {
  alert("You are close to the expected range");
} else if (userInput >= 50) {
  if (userInput == 88) {
    alert("Gotcha! You got that The number was 88!");
  } else {
    alert("You are in right range you need to get hold of exact number");
  }
} else {
  alert("Nope You are no where near to the expected range or number :(");
}

//Using ternary operator

userInput >= 10 ? "Nope this wasn't expected" : "You are in valid range";

//how switch could be better than if else and what are the scenarios that the switch is preferred over the if-else block.
