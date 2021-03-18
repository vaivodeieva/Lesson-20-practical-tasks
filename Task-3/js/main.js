//3. Write a program to display n terms of natural number and their sum.
//Sample output:
//Input a number of terms: 7
//The natural numbers up to 7th terms are:
// 1 2 3 4 5 6 7 
//The sum of the natural numbers is: 28



/////----RISINĀJUMS------//////


const number = parseInt(prompt('Input a number of terms: '));   ///OR USE THIS - to show this in console: console.log('Input a number of terms:', '7'); 

console.log('The natural numbers up to 7th terms are:');



let naturalNumbers = '';         //this turns natural numbers into a string
for (let i = 1; i <= 7; i++) {
    naturalNumbers += i + ' ';   //here space between gives the space between numbers
}
console.log(naturalNumbers);


let sum = 0;

for(let i = 1; i <= 7; i ++) {
    sum = sum+i;
  }

console.log('The sum of the natural numbers is: ', sum);