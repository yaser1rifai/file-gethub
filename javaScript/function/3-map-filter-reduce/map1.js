console.log("----------------------# Map, Filter, Reduce & Sort---------------------- ")
console.log("--------------#### 1. Increment by 1 ---------------")
let arrayOfNumbers = [3, 45, 6, 56, 7, 9];
let newAdd1=arrayOfNumbers.map(i=>i+1)
let newAddOne=arrayOfNumbers.map(function(i){return i+1})
console.log("arrayOfNumbers plus 1  is",newAdd1," or ",newAddOne);
console.log("--------------#### 2. Sum Up ---------------")
/* 
Write a function called sum that uses the reduce to sum up an array of numbers. 
Do NOT use a typical loop; just use the reduce method.

* Examples:
* sum([1,2,3,4,5]); //returns 15
* sum([6,7,7]); //returns 20 */

function sum(arrayS){
const sumArray=(accumulator,currentValue)=>accumulator+currentValue;
let sum=arrayS.reduce(sumArray);
console.log("sum of Array item is "+sum)
}
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20 */

console.log("---------------------------------------#### 3. instanceOf-------------");
//##### Reduce
//Sum up the instances of each of these:
//```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
/* object = {
  bike: 2
  car: 5
  pogostick: 1
  truck: 3
  van: 2
  walk: 2
} */

let dataS=data.reduce(function (acc,curr){
    if(curr in acc){ acc[curr]++}
    else           {acc[curr]=1}
    return acc;
},{}
);
console.log(dataS)
console.log("----------------------------------#### 4. Inventors")
//Look at the piece of code below and complete the tasks and questions.
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  console.log("map---Give an array of inventors' first and last names. ")

  let str=inventors.map(i=>(i.first+" "+i.last));
  console.log(str)

  console.log("reduce---How many years did all of the inventors live?  ")

  let totalYear=inventors.reduce((ac,cu)=>{
      
    currentTotal=cu.passed-cu.year;
    ac=ac+currentTotal;
   return ac;
   
  },0) 
  console.log( " totalYear",totalYear)
  console.log("------------------- 5-------Square Root---Given an array of numbers, find the square root of those numbers using map. ")
  let myArray=[9,16,100,81];
  let sq=myArray.map(i=>Math.sqrt(i));
  let sq1=myArray.map(i=>i**(0.5));
  console.log(sq,"or",sq1);

  /* 
  #### 6. Instances of Letters
Create a function that takes a string as an argument and
 counts the number of each letter in that string. 
   */
 console.log(`-------------------#### 6. Instances of Letters`)
   function InsOfLetter(str){
   let myStr=str.split("");
   let instance=myStr.reduce(function (acc,curr){
    if(curr in acc){ acc[curr]++}
    else           {acc[curr]=1}
    return acc;
},{}
);
console.log(instance)
}
InsOfLetter("how are you hohohoho");

console.log(`-------------------Create a function that returns an array of your friends favorite films!`)
let friends = [{
  name: 'Maria',
  films: ['Avengers: Infinity War', 'Avatar' ],
  age: 22
}, {
  name: 'John',
  films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
  age: 29
}, {
  name: 'Jean',
  films: ['Deadpool', 'Incredibles 2'],
  age: 20
}];

function FFilms(){
  let favoriteFilm=friends.map(i=>i.films);
 
  console.log(favoriteFilm);  
}
FFilms();

console.log("-------------------------#### 8. Filter Evens");
/*  
Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, 
and should not use a loop.

* Examples:

* filterEvens([1,2,3,11,12,13]); //returns [2,12]
* filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
*/
let numbers=[1,2,3,11,12,13];
var newNumbers = numbers.filter(function(number){
  return (number % 2 == 0);
})
console.log(newNumbers);

console.log("-----------------#### 9. Search -----------");
/* 
Given an array, create a function which uses filter() to filter
 an array based on a search query.
* Example
``` javascript */
 const friends1 = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};
console.log(filterItems(friends1, 'Ri')); // ["Rika", "Marika"];
console.log(filterItems(friends1, 'e')); // ["Alex", "Oliver"];
console.log(`-------#### 10. Reformat an Array-------------`)

let originalArray = [{key: 1, name: "John"},
	     {key: 2, name: "Maria"},
	     {key: 3, name: "Oliver"},
	     {key: 4, name: "Jane"},
	     {key: 5, name: "Jack"},
	     {key: 6, name: "Albert"},
	     {key: 7, name: "Harry"},
	     {key: 8, name: "Ron"},
	     {key: 9, name: "Kenneth"},
	     {key: 10, name: "Kyle"}];
let newArray= originalArray.map(i => {   
  let newObject = {};
  newObject[i.key] = i.name;
  return newObject;
});
console.log(newArray);
console.log(`-------#### 11. Sorting Numbers-------------`);
let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];
function sortNumber(a, b) { return a - b;}
arrayOfIntegers.sort(sortNumber);
console.log(arrayOfIntegers);
/* let sortArray=arrayOfIntegers.sort();
console.log(sortArray) */

console.log(`------------------------------#### 12. Sort Shapes------------------`);
let shapes = [
  [5, "Pentagon"],
  [3, "Triangle"],
  [8, "Octagon"],
  [4, "Rectangle"],
  [6, "Hexagon"],
  [10, "Decagon"]
  ];

  let sortShapes=shapes.sort(function(a,b) {
    return a[0]-b[0]
});
  console.log(sortShapes)
