/* console.log('-----------------------------  1 -------------------------------')
let firstNumber=8;
let secondNumber='8';
console.log(firstNumber==secondNumber);//true
console.log(firstNumber===secondNumber);//false
console.log('------------------------------ 2 -------------------------------')
let firstNumber1=true;
let secondNumber1='true';
console.log(firstNumber1==secondNumber1);//false
console.log(firstNumber1===secondNumber1);//false
console.log(typeof firstNumber1=== typeof secondNumber1);//false
console.log('-----------------------------  3 --------------------------------')
let firstNumber2=8;
let secondNumber2='8';
console.log(firstNumber2==secondNumber2);//true
console.log(firstNumber2!=secondNumber2);//false

console.log(firstNumber2===secondNumber2);//false
console.log(firstNumber2!==secondNumber2);//true

console.log(firstNumber2 >= secondNumber2);//true
console.log(firstNumber2 >= secondNumber2);//true
console.log(firstNumber2 > secondNumber2);//false */

console.log('------------------------- 4 logial Operator ----------------------------')
let firstVar=10;
let secondVar=20;
let thirdVar=20;
let fourtVar=20;
console.log((firstVar>secondVar)&&(firstVar==secondVar));//false
console.log((firstVar<secondVar)||(firstVar==secondVar));//true
console.log((firstVar<secondVar)||(firstVar==secondVar)&&(secondVar===thirdVar));//true

//NOT
console.log(!(firstVar<secondVar));//false
console.log();
// Ternary operator
let ternaryOp=(firstVar < secondVar) ? console.log("The answer is true") : console.log("The answer is false");

(firstVar == secondVar) ? console.log("The answer is true") : console.log("The answer is false");




