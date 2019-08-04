console.log(`#### 1. Reverse ---------------------------------------`);
function reverse_a_number(n){
n+="";
 return n.split("").reverse().join(``);
}
console.log(reverse_a_number(123456));
console.log(`------------------------ 2 ---------------------------------------`);
function alphaOrder(str){
   return str.split("").sort().join(``);
  }
  console.log(alphaOrder(`YASER rifai yaser`));
  console.log(`------------------------ 3 ---------------------------------------`);
function findGreatest(str, number){
for(var i=0;i<str.length;i++){
  if(str[i]>=number){console.log(str[i])};
}
}
findGreatest([3, 4, 5], 4);
console.log(`------------------------4 ---------------------------------------`);
function dogAge(day){
  console.log(`Your doggo is ${day*7} years old in human years!`);
}

dogAge(4) //-> expected output example: "Your doggo is 28 years old in human years!"
console.log(`------------------------5 ---------------------------------------`);
function calcSupply(age, amountDay){
  var total=amountDay*365*(80-age);
  console.log("You will need "+ Math.round(total) + " bars of chocolate (" +amountDay+ " a day) to last you till the age of 80. ");
}
calcSupply(25, 2);//
calcSupply(25.30, 2.50);
console.log(`------------------------6 ---------------------------------------`);
function longestWord(str){
var l=0;var s=0;
strr=str.split(` `);
console.log(strr);
for (var i=0;i<strr.length;i++){
  if(strr[i].length>l){l=strr[i].length;s=s+i;}
  
}
console.log(strr[s]);
}
longestWord("this is a web development course") //->  expected output: "development"
console.log(`------------------------7 ---------------------------------------`);
function findVowels(str){
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var i=0;i<str.length;i++){
    if( vowel_list.indexOf(str[i])!==-1){++vcount; }
                               }
 return vcount;

}
console.log(findVowels("this is a string")); //-> expected output: 4 vowels found
console.log(`------------------------8 ---------------------------------------`);
function detectType(type){
  console.log(`type of argument  ${type} is ${typeof type}. `);
}
detectType("hello")// -> expected output: type of argument is a string. 
* detectType(4) //-> expected output: type of argument is a number. 
console.log(`------------------------9 ---------------------------------------`);
function countOccurrences(str,letter){
let count=0;
for(var i=0;i<str.length;i++){
  if(str[i]===letter){count++}
}
return count;
}
console.log(countOccurrences("this is a string", "i")); //-> expected output: occurrences of i: 3 
console.log(`------------------------10 ---------------------------------------`);
function countLetters(str){
  var counts=[] ;
  var ch, index, len, count;
   len = str.length;
  for (index = 0; index < len; ++index) {
      ch = str.charAt(index); // Not all engines support [] on strings
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
  }
  for (ch in counts) {
      console.log(ch + " count: " + counts[ch]);
  }
  }
  countLetters("tree") //-> expected output: t: 1, r: 1, e: 2
  
  

