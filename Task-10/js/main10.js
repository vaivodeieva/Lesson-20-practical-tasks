//10. Write a program to find the sum of digits of a given number.
//Sample output:
//Input a number: 1234
//The sum of digits of 1234 is: 10





const number = parseInt(prompt('Input a number: '));

let value = 1234,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log('The sum of digits of ' + number + ' is: ' + sum);





//// 2nd solution:


//10. Write a program to find the sum of digits of a given number. 
//Sample Output:
//Input a number: 1234
//The sum of digits of 1234 is: 10


const value = 1234;
console.log('Input a number:' + value)
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log('The sum of digits of 1234 is:' +sum);

