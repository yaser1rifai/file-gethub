console.log(`#### 1. Reverse ---------------------------------------`);
//Create a function to reverse a number.
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(1234567));

/* 
#### 2. Alphabetical Order
Create a function to sort a string into alphabetical order. 
Examples:
<<<<<<< HEAD
* alphaOrder("webdev") -> expected output: "bdeevw"

* Note: Assume numbers, symbols and punctuation are not included in the string.  

*/
console.log(`------------------------ 2 ---------------------------------------`);
function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join(``);
  }
  console.log(sortString(`Yaser rifai23444 $%&& `));
  console.log(`------------------------ 3 ---------------------------------------`);
  /* 
  #### 3. The Greater Numbers
Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. 
Examples: 
* findGreatest([3, 4, 5], 4) -> expected output: 5
* findGreatest([10, 20, 30], 12) -> expected output: 20, 30
* findGreatest([0, 10, 3], 4) -> expected output: 10

  */
 function findGreatest(arr,num){
 for(var i=0;i<arr.length;i++){
     if (arr[i]>num){console.log(arr[i])}
     
 }
 }
 findGreatest([0, 10, 3], 4);
 console.log(`------------------------ 4---------------------------------------`);
 /* 
 #### 4. Dog Years
Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years. 

Example
* dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"
 */
function dogAge(num){
    console.log(`Your doggo is ${num*7} years old in human years!`);
}
dogAge(4);
console.log(`------------------------ 5---------------------------------------`);
/* 
#### 5. A Lifetime Supply...
Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 

Examples: 
* calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80. 
* calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80. 
*/
var calculateSupply = function(age, amountDay){
    age1=80-age;
    var anualAmount = amountDay * 365;
    var total = anualAmount * age1;
    console.log("You will need " + Math.round(total) + " packets of crisps " + age);
  }
  
  calculateSupply(25, 2);

  console.log(`------------------------bouns---------------------------------------`);
  calculateSupply(12.50,2.5);
  console.log(`------------------------6---------------------------------------`);
  function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;var s=0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
    s=s+i;
     }
  }
  return strSplit[s];
}
console.log(findLongestWord(`this is a web development course`));
console.log(`------------------------7---------------------------------------`);
function vowel_count(str)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("this is a string"));
console.log(`------------------------8---------------------------------------`);
function detectType(type){
  console.log(`type of argument  ${type} is ${typeof type}. `);
}
detectType(144234**33444444443);
console.log(`------------------------9---------------------------------------`);
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count("this is a string", "i"));
console.log(`------------------------10---------------------------------------`);

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
