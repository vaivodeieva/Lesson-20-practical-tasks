//5. Write a program to check whether a number is prime or not.    // prime number - it is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
//Sample output: 
//Input a number to check prime or not: 13
//The entered number is a prime number.




//program to check if a number is prime or not
//take input from the user



const number = parseInt(prompt("Input a number to check prime or not: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`The entered number is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}



