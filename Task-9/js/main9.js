//9. Write a program to find the Greatest Common Divisor (GCD) of two numbers.
//Sample output:
//Input the first number: 25
//Input the second number: 15
//The greatest Common Divisor is: 5




let gcd;
// take input
const number1 = prompt('Input the first number: ');
const number2 = prompt('Input the second number: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        gcd = i;
    }
}

// display the gcd
console.log(`The Greatest Common Divisor of ${number1} and ${number2} is: ${gcd}.`);

