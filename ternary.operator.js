//We will be learning on how ternary operator are helpful to replace the traditional if-else flow and how do we chain multiple checks or conditions in ternary operator too.

let oneRandomValue = 200;

if (oneRandomValue = true) {
    console.log("yes it is a truthy value");
}
else {
    console.log("oops no it is the falsy value");
}

//the above traditional approach of if else check can be implemented using the ternary operator within single line as -


oneRandomValue = true ? "yes it is a truthy value" : "oops no it is the falsy value";

//now let us implement a nested if else loop and try to get it using ternary operator too and check how it would behave

if (someRanndomValue = false) {
    console.log("false value")
}
else if(someRanndomValue = ""){
    console.log(" ");
}
else {
    console.log("0")
}
//this is how it would look alike by using ternary operator

var someRanndomValue = false ? console.log("true") : "" ? console.log("true") : console.log("0"); //first it checks for the first condition about the variable being true or false

//and for the nested cases the ternary operator for the second check would work on checking `"" ? console.log("true") : console.log("0")` this complete set as one operator and 
//then return back the appropriate result.
