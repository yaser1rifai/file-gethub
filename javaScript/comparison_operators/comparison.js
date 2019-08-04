//Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y. 
let x=20;
let y=30;
console.log(` x equal y is                  ${x == y}`);//false
console.log(` x equal y is not equal        ${x != y}`);//true
console.log(` x is greater than y           ${x > y}` );//false
console.log(` x is less than or equal to y  ${x <= y}`);//true
console.log(`  y is greater than x          ${y > x }`);//true
// Declare another variable "z" and give it a value of 5. Multiply z and x and, 
//check whether this result is greater than z added to y. 
let z=5;
console.log(`  z*x is greater than z+y      ${z*x > z+y }`);//true
console.log(`  z-x is   less  than y/z      ${z-x < y/z }`);//true
console.log(`   z, x and y are equal        ${z==x && x==y }  or  ${z == x == y }`);//false
console.log(`the remainder of x divided by z and the remainder of y divided by z are equal. ${x%z == y%z }`);//true
console.log(`  z added to x is greater than y minus z      ${z+x > y-z }`);//false
console.log(`  z added to x is equal to  y minus z         ${z+x == y-z }`);//true



