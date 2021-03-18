//8. Write a program to find the last prime number occur before the entered number. 
//Sample Output:
//Input a number to find the last prime number occurs before the number: 50
//47 is the last prime number before 50



let n = parseInt(prompt('Input a number to find the last prime number occurs before the number: '));

let counter = 0;
let lastPrime = 2;
for (var i = n; i >= 2; --i) {
    counter = 0;
    for (let j = 2; j <= i; ++j) {
        if (i % j == 0) {
            ++counter;
        }
    }
    if (counter == 1) {
        lastPrime = i;
        break;

    }

}


console.log(' the last prime number that occurs before ', n, ' is ', lastPrime);
