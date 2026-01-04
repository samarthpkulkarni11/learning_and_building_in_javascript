let commonName = undefined; //or make it user defined variable by using prompt()
let myAge = 19;

if (typeof commonName == "string" && myAge > 18) {
  console.log(`Your identity has been verified and eligible to vote`);
} else if (typeof commonName == "string" || myAge > 18) {
  console.log(
    `Your identity is still not verified but you are eligible to vote though`
  );
} else {
  console.log(
    `Neither your identity nor your age is verified and you are not allowed to vote!`
  );
}

let day = 5; // again use prompt to get user based input on the same -> Number(prompt("Enter some value between 1 to 7 to check what day is it"));

switch (day) {
  case 1:
    console.log("Its Sunday");
    break;
  case 2:
    console.log("Its Monday");
    break;
  case 3:
    console.log("Its Tuesday");
    break;
  case 4:
    console.log("Its Wednesday");
    break;
  case 5:
    console.log("Its Thursday");
    break;
  case 6:
    console.log("Its Friday");
    break;
  case 7:
    console.log("Its Saturday");
    break;

  //we can also chain the conditions something like this in switch statements
  case 8:
  case 9:
    console.log("Oops! Its invalid input ");
    break;
}

//you can also handle the switch in this way

switch (true) {
  case 20 > 10:
    console.log("correct condition");
    break;

  case 10 < 8:
    console.log("wrong condition");
    break;

  default:
    console.log("no condition!");
}

//using ternary operator
const userName = "spkulkarni01";
typeof userName === "string"
  ? console.log("valid username")
  : console.log("invalid username");

//we can do nesting in ternary operator as follows -
//syntax blueprint - condition1 ? valueIfTrue : condition2 ? valueIfCondition2True : valueIfAllFalse;

typeof userName === Number
  ? console.log("given input type is a number")
  : typeof userName === "string"
  ? console.log("given input type is a string")
  : console.log("given input type is not a valid data type");

//we know basic operators like - +, -, *, /, % now let us cover ++, -- operators in here

let a = 5;
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a);

//too much console let us see it through an operation

let result = a + ++a + ++a + a++; //5+6+6+7 and last value of a is 8
console.log(a);
console.log(result);

let i = 11;
i = i++ + ++i; //11 + 13
console.log(i);

// Q.
let d = 11, //13,
  b = 22; //24,
let c = d + b + d++ + b++ + ++d + ++b; //11+22+11+22+13+24
console.log("d=" + d);
console.log("b=" + b);
console.log("c=" + c);

//some more operators like - ==, ===, !=, !==
//conditional operators like - >,<,>=,<=
//need to keep in mind that always use === instead of == and !== instead of != for strict comparision and avoid any bugs.
