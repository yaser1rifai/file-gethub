/* 
These exercises are aimed at making you familiar with the aritmetic operators. Print all your results to the console.

Declare two variables "x" and "y" and assign number values. 


1. Add x and y, and print the result to the console.

2. Subtract y from x, and print the result to the console. Then, subtract x from y and print the result to the console.

3. Multiply x and y, and print the result to the console.

4. Divide x and y, and print the result to the console. 

5. Declare another variable "z" with the value "10". Multiply x and y. Then, divide the result by z. Store the result in a new variable named "resultOne". Print "resultOne" to the console.

5. Declare two variables "a" with the value of 15 and "b" with the value of 9. Print the remainder when a is divided by b. 

6. Declare another variable "c" with the value of 20. Add a and b, then multiply the result by c. Store the result in variable "resultTwo".  Print "resultTwo" to the console.

7. Increment a. Print the result to the console.

8. Decrement b. Print the result to the console.

9. Subtract a from b and store this in a new variable "d". Add d and c. Print the result to the console.

10. Print the remainder when "resultOne" is divided by "resultTwo" to the console. 

*/
console.log(" 1. Add x and y, and print the result to the console.");
let x=10;
let y=25;
console.log(x);
console.log(y);
console.log(" 2. Subtract y from x, and print the result to the console."
 +"Then, subtract x from y and print the result to the console.");
 console.log(x-y);
 console.log(y-x);
 console.log("3- Multiply x and y, and print the result to the console.");
 console.log(x*y);
 console.log("4- Divide x and y, and print the result to the console.  ");
 console.log(x/y);
console.log(' exe 5  Declare two variables "a" with the value of 15 and "b" with the value of 9. Print the remainder when a is divided by b. "');
let a=15;
let b=9;
let z=10;
let resultOne=(a*b)/z;
console.log(a%b);
console.log(resultOne);
console.log(" exe 6");
 let c=20;
 let resultTwo=(a+b)*c;
console.log(resultTwo);
console.log(" exe 7  Increment a. Print the result to the console."); 
console.log(++a);
console.log("exe 8  Decrement b. Print the result to the console.");
console.log(--b);
console.log(' exe 9 Subtract a from b and store this in a new variable "d". Add d and c. Print the result to the console.');
let d=a-b;
console.log(d+c);
console.log('exe 10  Print the remainder when "resultOne" is divided by "resultTwo" to the console.');
console.log(resultOne , resultTwo);
console.log(resultTwo % resultOne);

