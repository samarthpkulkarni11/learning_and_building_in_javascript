//We are going to practice about loops from basics understanding the syntax and solve some questions based on the same.

//use for loop to print the numbers between 1 and 10

//syntax
// for (start; end; change) {
//   `print or result needed in here`;
// }

//print 1 to 10
for (j = 1; j <= 10; j++) {
  console.log(j); //prints 1 to 9
}

//doing the same with while loop
let i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

//do the same with do-while
let k = 1;
do {
  console.log(k);
  k++;
} while (k < 10);

//print from 10 to 1
for (im = 10; im >= 1; im--) {
  console.log(im);
}

//lets go ahead with sum of n natural numbers

let sumNumber = 10; //can use prompt again to get the user based  value
let totalSum = 0;

for (i = 1; i <= sumNumber; i++) {
  totalSum += i;
}
console.log(` The total sum of ${sumNumber} natural numbers is ${totalSum}`);
