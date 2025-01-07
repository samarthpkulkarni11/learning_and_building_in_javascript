//We will be covering about switch statement with very simple calculator's operations and also learning about how switch can be a good alternative option replacing deep nested
//if-else loops

let userOption = prompt("Enter the operation number between 1 to 5");
userOption = parseInt(userOption);
const userInputOne = prompt("Enter the value for variable x");
const userInputTwo = prompt("Enter the value for variable y");

switch (userOption) {
    case 1:
        const sum = +userInputOne + +userInputTwo;
        alert(`The addition operation for the variable ${userInputOne} and variable ${userInputTwo} is ${sum}`);
        break
    
    case 2:
        const sub = userInputOne - userInputTwo;
        alert(`The substraction operation for the variable ${userInputOne} and variable ${userInputTwo} is ${sub}`);
        break
    
    case 3:
        const mul = userInputOne * userInputTwo;
        alert(`The multiplication operation for the variable ${userInputOne} and variable ${userInputTwo} is ${mul}`);
        break
    
    case 4:
        const div = userInputOne / userInputTwo;
        alert(`The division operation for the variable ${userInputOne} and variable ${userInputTwo} is ${div}`);
        break
    
    case 5:
        const remainder = userInputOne % userInputTwo;
        alert(`The remainder after division for the variable ${userInputOne} and variable ${userInputTwo} is ${remainder}`);
        break
    
    default:
        alert(`There is no specified operation with the operation value ${userOption}`);
        break
}