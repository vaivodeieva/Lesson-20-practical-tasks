// TASK 2. Write a program to find the sum of first 10 natural numbers.
//Sample output:
//Find the first 10 natural numbers:
//-----------------------------------
//The natural numbers are:
// 1 2 3 4 5 6 7 8 9 10
//The sum of first 10 natural numbers: 55


/////RISINĀJUMS:///



console.log('Find the first 10 natural numbers:');
console.log('----------------------------------');
console.log('The natural numbers are:');

let naturalNumbers = '';
for(let i = 1; i <= 10; i ++) {
  naturalNumbers += i + ' ';
}
console.log(naturalNumbers);



let sum = 0;

for(let i = 1; i <= 10; i ++) {
    sum = sum+i;
  }

console.log('The sum of first 10 natural numbers:', sum);

