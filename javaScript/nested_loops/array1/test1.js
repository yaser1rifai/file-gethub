 
console.log(` 1--- Write a program to check whether JavaScript is a string or not.`);
let str=true;
if(String(str)===String){console.log(`str is string`)}
else              {console.log(`str is  not a string`)}

console.log(`2 ----Write a program to check whether a string is empty or not.`);
if (!str.length) {console.log(`str is empty ${!str.length}`)}
else              {console.log(`str is  not an empty`)}

console.log(`3. ----Write a program to split a string and convert it into an array of words. E.g. text: "I like to walk in the park.`);
let mytext= "I like to walk in the park.";
console.log(mytext.split(` `));

console.log(`4- Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.`);
let myName=`John Smith`;
let myName1=myName.split(` `);
console.log(`${myName1[0]} ${myName1[1][0]}`)

console.log(`5---Write a program to hide email addresses to protect from unauthorized user. E.g. "john_smith@example.com" -> "john...@example.com"`);
let myEmail="john_smith@example.com";
let myEmail1=myEmail.split(`_`);
let myEmail2=myEmail.split(`@`);
console.log(`${myEmail1[0]}...@ ${myEmail2[1]}`);

console.log(`6 ----Write a program to change a string to the following format: E.g. John Smith from Berlin -> john-smith-from-berlin.`);
let myStr=`John Smith from Berlin`;
let myStr1=myStr.split(` `);
let myStr2=myStr1.join('-');
console.log(myStr2);

console.log(`7 Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"`);
let nam="john smith";
let myNam=nam.split(` `);
console.log(`${myNam[0]}${myNam[1][0].toUpperCase()}${myNam[1].slice(1)}`);

console.log(`7--Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)`);
let day =1;
let allday=[];
for(let i=1;i<21;i++){
if (i == 1) { day = i + "st";}
 else if (i == 2) { day = i + "nd"} 
 else if (i == 3) {day = i + "rd"}
else                 {day = i + "th"}
allday=allday+" "+day

}
console.log(allday);

console.log( `8 --- Declare a variable and sort the characters into alphabetical order.`);

console.log(`9  Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"`);
let res=``;
for(let i=1;i<=60;i++){
     res=res+`-`;
    console.log(` ${i} ${res}`);
}

console.log(` 10 Arrays`);
console.log( `10    Leap Years Write a program which finds the leap years in a given range of years.`);
for(var i = 1890; i < 2005; i++){
    if((i % 100 != 0 || i % 400 === 0) && (i % 4 === 0) ){
    console.log(i)
    }
    }

 
    console.log(`11  First & Last Write a program that takes an array and returns the first and last elements as a new array.`);
var arr = ['one', 3, 'cool', 4];
var arr1=[arr[0], arr[arr.length - 1]];
  console.log( `${arr1} ` );

/*
Expected Output: [5, 10, 15, 20, 25] ➞ [5, 25] ["javascript", 13, null, false, true] ➞ ["javascript", true] [undefined, 4, "6", "hello", null] ➞ [undefined, null]

Find the Smallest Number Write a program that takes an array of numbers and returns the smallest number in the set.
E.g [34, 15, 88, 2] ➞ 2 [34, -345, -1, 100] ➞ -345 [-76, 1.345, 1, 0] ➞ -76 [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999 [7, 7, 7] ➞ 7

Return Student Names Write a program that takes an array of students and returns an array of student names. Example: [ { name: "Steve"}, { name: "Mike"}, { name: "John"} ]
➞ ["Steve", "Mike", "John"]

Spell it out Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
E.g. spelling("bee") ➞ ["b", "be", "bee"] spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"] spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

*/