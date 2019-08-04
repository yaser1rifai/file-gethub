console.log(`--------------------- 1-Add up----------------------------------------`);

function addUp(n){ console.log(`The sum from 1 to ${n} = ${n * (n + 1) / 2}`);}
addUp(4) //➞ 10
addUp(13) //➞ 91
addUp(600) //➞ 180300

console.log(`----------------------2------------------------------------------`);
function lessThanOrEqualToZero(x){
    (x<=0)?console.log(true):console.log(false);
}
lessThanOrEqualToZero(3) //➞ false
lessThanOrEqualToZero(0) //➞ true
lessThanOrEqualToZero(-4) //➞ true
lessThanOrEqualToZero(10) //➞ false

console.log(`----------------------3------------------------------------------`);
function missingNums(arr) {
    var n = arr.length + 1;//+1  for missing number
    var sum = 0;
        expectedSum = n * (n + 1) / 2;
    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }
    console.log( expectedSum - sum);
}
missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) //➞ 5
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) //➞ 10
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) //➞ 7

console.log(`----------------------4------------------------------------------`);
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
           return false;
        }
    }
    return value > 1;
}
console.log(isPrime(113)) //➞ true
console.log(isPrime(9) )//➞ false
console.log(isPrime(10)) //➞ false
console.log(isPrime(1)) //➞ false

console.log(`----------------------5-----------------------------------------`);
function toCamelCase(snakeCaseString){
var find = /(\_\w)/g;
var convert =  function(matches){return matches[1].toUpperCase();};
var camelCaseString = snakeCaseString.replace(find,convert);
console.log(camelCaseString);}
toCamelCase("hello_world")// ➞ "helloWorld"
toCamelCase("javascript_is_fun") //➞ "javaScriptIsFun"
console.log(`----------------------6-----------------------------------------`);

 function unique(str){
   
    for(let i=0;i<str.length;i++){
        let counter=0;
        let a=str[i];
        for(let j=0;j<str.length;j++){
            let b=str[j]
            if(a==b){counter++}
        }
        if(counter==1){console.log(a)}
}
}
unique([3, 3, 3, 7, 3, 3])// ➞ 7 
unique([0, 0, 0.77, 0, 0])// ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1])// ➞ 0
console.log(`----------------------7----------------------------------------`);
function isWaldoHere(str) {
    let strLower=(str.toLowerCase());
    strNew=strLower.split("waldo");
    if(strLower!=strNew){console.log(true)}
    else {console.log(false)}
}
isWaldoHere("is there wal here ?") //➞ false
isWaldoHere("I found you Waldo!") //➞ true
isWaldoHere("is wally here?") //➞ false
isWaldoHere("waldo is here") //➞ true
console.log(`----------------------8----------------------------------------`);
/*8. Validate
Create a function that accepts a string, checks if it's a valid email address and 
returns either true or false, depending on the evaluation.
*/
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
console.log(validateEmail("y$(@gmail.com"));
console.log(`----------------------9----------------------------------------`);
function pigLatin(myStr) {
    let arr=[];let ff=[];
    let aa=myStr.split(".");
   let st=aa[0].toLowerCase().split(" ");
for(let i=0;i<st.length;i++){
    let str=st[i];
     arr=str
      .replace(/^([aeiouy])(.*)/, '$1$2way')
      .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
      
    ff.push(arr); 
    ff[0]=ff[0][0].toUpperCase()+ff[0].slice(1);
   
} 
ff[ff.length-1]=ff[ff.length-1]+".";
  console.log(ff)
}
  
  // test here

pigLatin("Cats are great pets.") //➞ "Atscay areway reatgay etspay."
pigLatin("Tom got a small piece of pie.") //➞ "Omtay otgay away allsmay iecepay ofway iepay."
pigLatin("He told us a very exciting tale.") //➞ "Ehay oldtay usway away eryvay excitingway aletay."

console.log(`----------------------10----------------------------------------`);
/* 
#### 10. X To The Power of X
Create a function that takes a base number and an exponent number and returns the calculation.

Examples
* calculateExponent(5, 5) ➞ 3125
* calculateExponent(10, 10) ➞ 10000000000
* calculateExponent(3, 3) ➞ 27

* **Notes**
* All test inputs will be positive integers.
*/
function calculateExponent(x, y){
    console.log(Math.pow(x,y));
}
calculateExponent(5, 5) //➞ 3125
calculateExponent(10, 10) //➞ 10000000000
calculateExponent(3, 3) //➞ 27
calculateExponent(-3.23, -3)
/* 
console.log(`---------------------------------------------`);
let s="The quick brown fox.";
let total = 0;
let words = s.split(" ");
        console.log(words);
    for(let i=0;i<words.length;i++)   {
        for(let j=0;j<words.length;j++)   {
            let f=words[i][j]
console.log(f.charCodeAt(0));
//console.log(String.fromCharCode(65));
}  }


   */