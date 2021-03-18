

//7. Write a program to find the factorial of a number. 
//Sample output:
//Input a number to find the factorial: 5
//The factorial of the given number is: 120

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 5;
answer = factorial(n)
console.log("Input a number to find the factorial: " + n);
console.log("The factorial of the given number is:" + answer);






