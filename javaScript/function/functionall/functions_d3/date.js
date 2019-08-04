
console.log("_________________________ quiz one _______________________________");
​
​
​
function randomNumber(myArray) {
​
  
​
  for(let a=0; a<myArray.length; a++) {
​
    myArray[a] = Math.random() /* * 100 */; 
​
  }
​
  /* return Math.random(number) */
​
  console.log(myArray);
​
}
​
randomNumber([1,2,3,4]);//gives any random No from; 0-1, 1-10, 10-100 etc.
​
​
​
console.log("_________________________ quiz two _______________________________");
​
​
​
function maxVal(Arr) {
​
  let maxVal = Arr.reduce(function(a,b){
​
    return Math.max(a,b);
​
  });
​
  console.log(maxVal);
​
};
​
maxVal([1,2,3,4]);//to get the biggest value 
​
​
​
                /* or minimum value*/
​
​
​
function minVal(minArr1) {
​
  let minNumber = minArr1.reduce(function(a,b){
​
    return Math.min(a,b);
​
  })
​
  console.log(minNumber);
​
}
​
minVal([1,2,3,4]);//to get the smallest value 
​
​
​
​
​
 /* or */
​
​
​
function minValue (arrayOfNumbers) { 
​
for (let b=0; b<arrayOfNumbers.length; b++) {
​
    return Math.min(...arrayOfNumbers);
​
  } 
​
};
​
console.log(minValue([4,56,79,123,-1]));//the smallest number is given
​
​
​
console.log("_________________________ quiz three ______________________________");
​
​
​
function powerOfSecond (first, second) {
​
  let power = Math.pow(first, second);
​
  console.log(power);
​
}
​
powerOfSecond(7,3);//it ll give us 7 to the power of 3 == 343
​
​
​
console.log("_________________________ quiz four _______________________________");
​
​
​
​
​
function biggestNumber (array2) {
​
  let max = array2.reduce(function(a, b) {
​
    return Math.max(a, b);
​
   });
​
   console.log(max);
​
};
​
biggestNumber([24, 22, 533]);//we ll get the biggest number in an array
​
​
​
console.log("_________________________ Bonus quiz _______________________________");
​
​
​
​
​
function randomName (myNameList) {
​
​
​
let randomItem = myNameList[Math.floor(Math.random()*myNameList.length)];
​
console.log(randomItem);
​
};//I get random name from the list, names could be repeated
​
randomName(["Ashenafi", "Saad", "Jasmine", "Alisio", "Angie"]);
​
​
​
​
​
console.log("___________________ second quiz - 1 - ______________________________");
​
​
​
function fullDate() {
​
   
​
  let myDate = new Date();
​
  console.log(myDate);
​
​
​
  let getDate = myDate.getDate();//day in number
​
 /*  console.log(getDate); */
​
​
​
  let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
​
  let getDaysName = days[myDate.getDay()];//day's name in letter
​
  /* console.log(getDaysName); */
​
   
​
  let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
​
  let getMonthName = months[myDate.getMonth()];//month in letter
​
  /* console.log(getMonthName); */
​
​
​
  let getYear = myDate.getFullYear();//year in number
​
  /* console.log(getYear); */
​
​
​
  console.log(`Today is : ${getDaysName} ${getDate}th of ${getMonthName} ${getYear} `);
​
};
​
fullDate();//we ll get sth like today is : 12 May 2019
​
​
​
​
​
console.log("___________________ second quiz - 2 - ______________________________");
​
​
​
function formalDay() {
​
let myDate = new Date();
​
console.log(myDate);
​
​
​
let getDate = myDate.getDate();
​
​
​
let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
​
let getDaysName = days[myDate.getDay()];//day's name in letter
​
 
​
​
​
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
​
let getMonthName = months[myDate.getMonth()];//month in letter
​
​
​
​
​
let getYear = myDate.getFullYear();//year in number
​
console.log(`${getDaysName} ${getDate}th/${getMonthName}/${getYear}`);
​
​
​
};
​
formalDay();
​
​
​
console.log("___________________ second quiz - 3 - ______________________________");
​
​
​
for (let year=2001; year<=2050; year++) {
​
  let sunday = new Date(year, 0, 1);//year month day
​
  if ( sunday.getDay() === 0 )//if day === 0 
​
    console.log(`First of January was & will be on ${year}`);
​
  };//2006,12,17 etc new-year == sunday
​
​
​
​
​
console.log("___________________ second quiz - 4 - ______________________________");
​
​
​
​
​
today = new Date();
​
let x_mas = new Date (today.getFullYear(), 11,25);
​
if(today.getMonth() == 11 && today.getDate() > 25) {
​
  x_mas.setFullYear(x_mas.getFullYear()+1);
​
} let one_day = 1000*60*60*24;
​
console.log(Math.ceil((x_mas.getTime() - today.getTime())/(one_day))+
​
"Days left until Christmas,");//.. days remaining to christmas
//Collapse
//the last one 
console.log("___________________ second quiz - 5 - ______________________________");
​
​
​
let getDaysInMonth = function(month,year) {
​
    return new Date(year, month, 0).getDate();// Here January is 0 based
​
       // Here January is 1 based
​
       //Day 0 is the last day in the previous month
​
       
​
      // return new Date(year, month+1, 0).getDate();
​
   };
​
   console.log(getDaysInMonth(1, 2016));
​
   console.log(getDaysInMonth(2, 2017));
​
   console.log(getDaysInMonth(9, 2018));
​
   console.log(getDaysInMonth(3, 2019));
​
​
​
 getDaysInMonth();//the length of the given months
​
​
​
 console.log("............. with function ...................");
​
 
​
                /* or use function*/
​
​
​
 function getDaysInMonth1 (month, year) {
​
  return new Date(year, month, 0).getDate();
​
 };
​
 console.log(getDaysInMonth1(1, 2016));
​
 console.log(getDaysInMonth1(2, 2017));
​
 console.log(getDaysInMonth1(3, 2018));
​
 console.log(getDaysInMonth1(4, 2019));//how long were months ...
