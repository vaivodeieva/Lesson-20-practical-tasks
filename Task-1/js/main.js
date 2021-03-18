//1. Write a program to find the first 10 natural numbers.
//Sample output:
//The natural numbers are:
// 1 2 3 4 5 6 7 8 9 10 


///////   1) atrisinājuma variants: skaitļi konsolē parādās kolonnā viens zem otra:///////

console.log('The first 10 natural numbers are:');
for (let i = 1; i <=10; i++) {
    console.log(i)
}


/////////   2) risinājuma variants: skaitļi konsolē parādās vienā rindā://///

/////////  (  += in JavaScript adds the right hand side to the variable on the left hand side, storing the result in that variable. )


console.log('The first 10 natural numbers are:');

let naturalNumbers = '';
for(let i = 1; i <= 10; i ++) {
  naturalNumbers += i + ' ';
}
console.log(naturalNumbers);





