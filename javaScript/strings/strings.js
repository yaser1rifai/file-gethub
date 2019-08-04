
//1- Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
console.log(`number 1 ------------------------------------------`);
let str="I can walk in the park all day!";
console.log( str.substring(18, 22));

//2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
console.log(`number 2 ------------------------------------------`);
let str1= "JavaScript";
console.log(str1.substring(3, 6));
//3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
console.log(`number 3 ------------------------------------------`);
let str3="Hello World";
console.log(str3.toUpperCase());
//4- Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
console.log(`number 4 ------------------------------------------`);
let str4="Hello Earthling";
console.log(str4.toLocaleLowerCase());
//5- Check if the sentence "nice shoes" contains the letter l or n. 
console.log(`number 5 ------------------------------------------`);
str5="nice shoes";
var res_l = str5.match(/l/g);
var res_n = str5.match(/n/g);
console.log(res_l);
console.log(res_n);

//6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
console.log(`number 6------------------------------------------`);
let st="JavaScript";
console.log(`${st[0]}${st}${st[0]}`);
console.log(`${st.substring(0,1)}${st}${st[0]}`);

/* 7-Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
eg. of output: javascript => iptJavaScriptipt */
console.log(`number 7 ------------------------------------------`);
let str7="javascript";
let L=str7.length;
console.log(`${str7}${str7.substring(7,9)}`);
//8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
console.log(`number 8 ------------------------------------------`);
let var8="my java script ";
let str8="my java script ";
let str88=str8.toUpperCase();
console.log(str88);
console.log(str88.includes("JAVA"));

console.log( `${var8.toUpperCase().includes('JAVA')}` )


//9-Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
console.log(`number 9------------------------------------------`);
str9="Javascript";
//  //// str9.length
console.log(`${str9[9]}${str9.substring(1,9)}${str9[0]}`);


  let s = "JavaScript";
let firstChar = s[0];
 let lastChar = s[s.length - 1];
 let remainderString2 = s.substring(1, s.length - 1);
 console.log(lastChar + remainderString2 + firstChar);
 


//10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 
console.log(`number 10 ------------------------------------------`);
let myName=`Yaser`;
let myCity=`Berlin`;
let MyJob=` Teacher`;
console.log(`My name is ${myName}. I live in ${myCity} and I am a ${MyJob}`);

//11-Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
console.log(`number 11 ------------------------------------------`);
let str11="the quick brown fox";
l=str11.length;
console.log(`${str11[0].toUpperCase()}${str11.substring(1)}`);
//slice(1)  last letters
let remainderString = str11.slice(1);
console.log(`${str11[0].toUpperCase()}${remainderString}`);

