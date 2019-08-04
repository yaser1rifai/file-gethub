/*  
console.log(`---------------------------#### 1. Run Along------------`);
//Create a while loop that runs as long as i is less than 15. Use a while loop. 
console.log(`----------------------- loop while-------------------------------`);
let text="";
let i=0;
while (i < 15) {
    text = `${text} The number is  ${i} \n`;
    i++;
    
  }
  console.log(text);
console.log(`-----------------------loop do while-------------------------------`);
 text="";
 i=0;
  do {
    text = `${text} The number is  ${i} \n`;
    i++;
  }
  while (i < 15);

  console.log(text);

console.log(`--------------------------#### 2. City Names------------`);
//Create an array of city names. Loop through the array and add the city names to a string. 
// Example of expected output: "Berlin, Paris, Prague, Rome". 
let city=["Berlin","Paris","Prague","Rome"];
city.forEach(function(elem){ 
 console.log(elem+",");
});
console.log(`--------------------------#### 3. Odds and Evens----------`);
//Create a function that takes an array as an argument. The function should add 1 to each odd integer and should minus 1 from each even integer.

function evenOddTransform(str){
let arr=[];
str.forEach(function(num){ 
  if(num%2==0){arr.push(num-1)}
  else        {arr.push(num+1)}; 
});
console.log(arr);
}
// Examples:
 evenOddTransform([3, 5, 2, 4])// -> expected output: [4, 6, 1, 3]
 evenOddTransform([6, 9, 10, 20]) //-> expected output: [5, 10, 9, 19]

 ///### Do While: Use do while loops to complete the tasks below.

console.log(`---------------1. sumOfNumbers---------------------`) 
//Create a function that takes an array of at least 3 numbers as an argument 
//and returns the sum of the numbers. Use a do while loop. 
function sumArray(x){
var i=0,sum=0;
  do {
    sum = sum+x[i];
    i++;
  }
  while (i < x.length);

  console.log(sum);
}
sumArray([2,4,4]);
console.log(`-------------#### 2. Add it up!-------------`);
//Create a function that adds numbers from 1-20 together using a while loop. 

function addItUp(){
  var i=0,sum=0;
    do {
      sum = sum+i;
      i++;
    }
    while (i <= 20);
  
    console.log(sum);
  }
  addItUp();
  */
console.log(`-------------#### 3. Count Instances---faultttt----------`); 
function check(arr){
  let i=0
  let count=0
  let result;
  do{
  if(arr[i]<arr[i+1]) count++
  i++
  }
  while(i<arr.length-1)
  if(count===arr.length-1) result ='increasing'
  else if (count===0)result = 'decreasing'
  else result = 'neither'

  return result

}


console.log(check([1, 2, 3]))// ➞ "increasing"
console.log(check([3, 2, 1])) //➞ "decreasing"
console.log(check([1, 2, 1])) //➞ "neither"
console.log(check([1, 1, 2])) //➞ "neither"
/* 
  console.log(`### forEach(): Use the forEach() method to complete the tasks below`)
//#### 1. Capitalize
//Create a function that takes an array of names and returns an array with the first letter capitalized using a do while loop.
let G,f,arr=[],arr1=[];
function format(str){
str.forEach(function(element) {
  let r=element.toLowerCase();element=r;
    G=element[0].toUpperCase();element[0]=G;
  let f=G+element.slice(1);//console.log(f)
  arr.push(f);
  
}
);
console.log(arr)
}

// Examples
format(["matt", "sara", "lara"]) //➞ ["Matt", "Sara", "Lara"]
//format(["samuel", "MARIA", "luke", "mary"])// ➞ ["Samuel", "Maria", "Luke", "Mary"]
//format(["Cynthia", "Karen", "Jane", "Carrie"])// ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

//Notes: Keep names in the same order and make sure that only the first lesson of the name is capitalised. See "Maria" in example 2. 

console.log(`----------#### 2. No Duplicates!----------------`);
//A set is a collection of unique items. A set can be formed from an array from removing all duplicate items. Create a function using a do while loop which takes an array and transforms it into a set of unique values. See the examples below.

var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};

console.log(uniqueArray([1, 4, 4, 7, 7, 7]));
console.log(uniqueArray([1, 6, 6, 9, 9]));
console.log(uniqueArray([2, 2, 2, 2, 2, 2]));
console.log(uniqueArray([5, 10, 15, 20, 25]));
var t=[],item="",times=0;
console.log(`------------------- Repeat it------------`)
function repeatIt(item, times){
 for(let i=1;i<=times;i++){
  t.push(item)
 }
 console.log(t);
 t=[];
}
repeatIt("yaser", 3);
repeatIt("example", 3) //-> ["example", "example", "example"]
console.log(`-------------------find the odd Ones Out --------------------`)
function findOdd(A) {
  var len = A.length;
  var A_sort = A.slice().sort();

  var count = {};

  A_sort.forEach(function(i) {
      count[i] = (count[i] || 0) + 1;
  });
  
//  Note on the above code - creates the associative array object 'count' that will have a key-value pair for each unique element in the array, where the key is the unique element value and the value is the count. Then iterating over the array and for each value either increments the value or creates the key value pair (the value of the non-existent key evaluates to undefined so the || or operator takes a zero instead and adds the 1)
  for (var key in count) {
      if (count.hasOwnProperty(key)) {

          //  var value = count[key];
          if (count[key] % 2 !== 0) {
              console.log( Number(key)+" appears "+count[key]+ " times")
          }
      }
  }
}
findOdd([-2, -2, 3, 3, -5, 7, -5, 7, 7]) //➞ 7 (appears three times)
findOdd([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2])// ➞ 2 (appears 5 times)
findOdd([12]) //➞ 12 (appears once)
console.log(`--------------- factors------------------------------------`)

var ar = [3, 6, 12, 36];

for(let i=0;i<ar.length;i++){
  if(ar[i+1]%ar[i]==0){console.log(`${ar[i]} is a factor of ${ar[i+1]}   (${ar[i]}*${(ar[i+1]/ar[i])}=${ar[i+1]})`)}
}
 // 3 is a factor of 6 (3 * 2 = 6)
 // 6 is a factor of 12 (6 * 2 = 12)
 // 12 is a factor of 36 (12 * 3 = 36)
 function factorChain(str){
  var n = 1;
  while (n < str.length) {
   if(str[n+1]%str[n]==0){return true}
   n++;
  }
  return false;
 }
 console.log(`------------------whether or not an array is a factor chain using a while loop.`)

console.log(factorChain([1, 2, 4, 8, 16, 32]));// ➞ true
console.log(factorChain([1, 1, 1, 1, 1, 1]))// ➞ true
console.group(factorChain([2, 4, 6, 7, 12])) //➞ false
console.log(factorChain([10,1]))// ➞ false
console.log(factorChain([1,2,7]))// ➞ false
console.log(`--------------------------END---------------------------------`) 

 */
