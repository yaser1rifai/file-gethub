
console.log(` --------------Exercise 1 -----------------------------`)//1
var cityName="New york";
let str3=cityName.slice(0,3);
if(str3===`Los` || str3===`New`){console.log(cityName);}


console.log(`-------------Exercise  2 -----------------------------`)//2
let ar = [5, 10, 15];
let sum=0;
for(let i=0;i<=2;i++){sum=sum+ar[i];}
console.log(` sum is ${sum}`);


console.log(` ------------------- Exercise 3 -----------------------------`)//3
let fName=`Yaser`;
let lName=`Rifai`;
console.log(`"${lName}, ${fName}"`);



console.log(`------------------Exercise  4 -----------------------------`)//4
let num=1000;
if (num%100===0){console.log(true)}
else            {console.log(false)}



console.log(`--------------------Exercise   5 -----------------------------`)//5
let strAdd="ly";
let strA=["clever", "meek", "hurried", "nice"];
let strB=[];
for(let a=0;a<strA.length;a++){strB[a]=strA[a]+strAdd;}
console.log(strB);

console.log(`----------------- Exercise  6 -----------------------------`)//6
let num1=146;
if(num1%2===0){console.log(`even`)}
else          {console.log(`odd`)}

console.log(`7 -----------------------------`)//7
  let an=1;
  let an1=1;
  if(an===0 || an1===0){console.log(` no Angle or no triangle`)}
  else if (180-(an+an1)<90) {console.log(` the third angel is An acute angle`)}
  else if (180-(an+an1)==90) {console.log(` the third angel is A right angle `)}
  else   {console.log(` the third angel is An obtuse angle `)}

  console.log(`8 -----------------------------`)//8
let string=`maria jane jones`;
let str4=string.split(" ");console.log(str4);
let str5=[""];
for(let p=0;p<str4.length;p++){
  str5[p]=str4[p].charAt(0).toUpperCase() + str4[p].slice(1); 
}
console.log(str5);

  console.log(` ------------ 9 -----------------------------`)//9
  let myword1="   This is an example   ";
console.log(myword1.trim().split(" ").length);



  
console.log(`10 -----------------------------`)//10
let arr=[2, 3, 1, 0];
let arr1=[];
let m=4;
let z=0;
for(z=0;z<arr.length;z++)
{
  arr1[z]=arr[z]*m;
  
}
console.log(arr1); 



