// 4. Write a program to find the perfect numbers between 1 and 500.
//The perfect numbers between 1 and 500 are:
// 6
// 28
// 496




let start = 1;
let end = 500;
let i = 1;
let total = 0;
let flag = 0;

for(start = start; start <= end; start++)
{
 for(i = 1; i < start; i++)
 {
  if(start % i == 0)
   total += i;
 }
 if((total == start) && (start != 0))
 {
  if(flag < 1)  
  {
   console.log("The perfect numbers between 1 and 500 are: ");
   flag = 1;
  }
  console.log(start +" ");
 }
 total = 0;
}