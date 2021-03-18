//6. Write a program to find prime number within a range.

//Input number for starting range: 1
// Input number for ending range: 100
//The prime numbers between 1 and 100 are:
// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
//The total number of prime numbers between 1 to 100 is: 25





let naturalNumbers = '';
for(let i = 1; i <= 100; i ++) {
  naturalNumbers += i + ' ';
}
if (naturalNumbers % naturalNumbers===0) {console.log(naturalNumbers);}




let n=100;
let counter = 0;
let primeNumbers = "";
for(var i=2; i<=n; ++i)
{
    counter=0;
    for(var j=2; j<=n; ++j)
    {
        if(i>=j && i%j == 0)
        {
            ++counter;
        }
    }
    if(counter == 1)
        {
            primeNumbers = primeNumbers + i + "  ";
        }

}


console.log('Input number for starting range: 1');
console.log('Input number for ending range: 100');

console.log('The prime numbers between 1 and 100 are: ');
console.log(primeNumbers);


console.log('The total number of prime numbers between 1 to 100 is: ', );
const primeArray = primeNumbers.split('  ');
var pa = primeArray.filter(Boolean);
console.log(pa.length);

