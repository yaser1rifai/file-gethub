//Math Object	
console.log(`-----------------------1---------------------------------------`);
//1. Random Number
//Create a function to return a random integer. 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getRandomInt(5));// 0 or 1 or 2 or 3 or 4 
  console.log(getRandomInt(1));// 0
  console.log(`-----------------------2---------------------------------------`);
 // 2. Lowest Number
//Create a function that takes an array as an argument and 
//returns the number with the lowest value.
let str=[2,5,4.5,0,-4,-6]
function minArray(str){
   return console.log(Math.min(...str));
}
minArray(str);
console.log(`-----------------------3---------------------------------------`);
//3. The Power Of
//Create a function that takes two numbers as arguments.
 //Return the value of the first number to the power of the second number. 
  function power(x,y){
      return console.log(Math.pow(x,y))
  }
 power(7, 3);//  343
 power(4, 0.5);//2
 power(7, -2);// 0.02040816326530612
 power(-7, 0.5); NaN
 console.log(`-----------------------4---------------------------------------`);
 //4. Highest Number
 //Create a function that takes an array as an argument and 
 //returns the highest number in that array. 
 let str1=[2,5,4.5,0,-4,-6,678]
function maxArray(str1){
   return console.log(Math.max(...str1));
}
maxArray(str1);
console.log(`-----------------------5---------------------------------------`);
//5. Pi
//Create a function that given a number n, returns PI to n decimal places.
function myPi(num){
    var myNumber = Math.PI;

    console.log(myNumber.toFixed(num)); 
}
//Examples:
myPi(5) //➞ 3.14159 //5 decimal places
myPi(4)// ➞ 3.1416 //4 decimal places
myPi(15) //➞ 3.141592653589793 // 15 decimal places
console.log(`-----------------------5 Bouns ---------------------------------------`);
//Random Name 
//Create a function for our webdev class 13a that returns a random student's name. 
let webClass=[ 'Tamim Abo Tafish    ',
'    Alisio Delgado    ',
'   Boyan Doychinov    ',
'   Ehud Hermon    ',
'   Syed Ali Naveed Raza Naqvi    ',
'   Atmaz Alsbai Ramez    ',
'   Yaser Rifai    ',
'   Rene Sahlmann    ',
'   Hannah Klein    ',
'   Lorraine Lovas    ',
'   Franz Carl Jarkowski    ',
'   Angie Rey Romero    ',
'   Mohammad Kharma    ',
'   Yasmin Farag    ',
'   Shiferaw Ashenafi    ',
'   Ahmad Ghanem',
'   Saad alhashmi'  ];


   
   function RandomName(){
    let RandomNumber=getRandomInt(webClass.length);
    let ss=webClass[RandomNumber];
    console.log(ss);
    
   }
   RandomName();
    console.log(`-----------------------6 ---------------------------------------`);
//Date Object
console.log(`-----------------------date  1 ---------------------------------------`);

// 1. What day is it? 
//Create a function to to display the current date and time in 
//the following format:
function dayAndTime(){
var time = new Date();
var weekdays =[ "Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
var cDay = weekdays[time.getDay()];
 

let cTime=time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric' })
console.log(`Today is ${cDay}.The current time is ${cTime}`);
}


dayAndTime();//Today is Tuesday.The current time is 2:57:23 PM
 console.log(`-----------------------date  2 ---------------------------------------`);
 //2. Date Formats
//Create a function to display the current date in the following formats
// dd-mm-yyyy, dd/mm/yyyy.
function formatDate(){
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
}
formatDate();
console.log(`-----------------------date  3 ---------------------------------------`);
//3. Is New Year's day a Sunday?
//Create a function to check whether the 1st of January
// is a Sunday between the years of 2014 and 2050.
function getSundayYear(){
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
}
getSundayYear();
console.log('----------- date 4------------------------------------');
//How many days till Christmas?
//Create a function to calculate the days till Christmas.
function  daysTillChristmas(){
today=new Date();
console.log(today);//2019-05-14T13:37:18.319Z
var cmas=new Date(today.getFullYear(), 11, 25);console.log(cmas);//2019-12-24T23:00:00.000Z
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1);
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
}
daysTillChristmas();
console.log(`------------------5---------------------------`)
//5. Days in a month
//Create a function to calculate the number of days in a specified month. 
var getDaysInMonth = function(month,year) {
   console.log( new Date(year, month,0).getDate());
  };
//Examples and Expected Output: 
getDaysInMonth(1, 2012); //--> 31
getDaysInMonth(2, 2012); //--> 29
getDaysInMonth(9, 2012); //--> 30
getDaysInMonth(12, 2012); //--> 31
