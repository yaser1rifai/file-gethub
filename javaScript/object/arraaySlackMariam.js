//Write a program to check whether JavaScript is a string or not.
console.log(`-------------1------------------`);
let myVar=`I like to walk in the park.`;
if  (typeof myVar === 'string' || myVar instanceof String){console.log(`string`)}
else {console.log(`not string`)}
//Write a program to check whether a string is empty or not.
console.log(`-------------2------------------`);
if(myVar.length === 0){console.log(` empty`)}
else {console.log(` not empty`)}
//Write a program to split a string and convert it into an array of words. E.g. text: "I like to walk in the park.
console.log(`-------------3------------------`);
console.log(myVar.split(` `));
//Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.
console.log(`-------------4------------------`);
let str1=`John Smith`;
let str=str1.split(` `);
console.log(`${str[0]} ${str[1][0]}.`);
console.log(`-------------5------------------`);
let myStr="john_smith@example.com";
let myStr1=myStr.split("_");
let myStr2=myStr1[1].split("@");
console.log(`${myStr1[0]}...@${myStr2[1]}`);
console.log(`-------------6------------------`);
 str=`John Smith from Berlin`;
 let elements=str.split(` `);
 console.log(elements.join('-'));
 console.log(`-------------7------------------`);
 str1="john smith";
 str=str1.split(` `);
 console.log(`${str[0]}${str[1][0].toUpperCase()}${str[1].slice(1)}`);
 console.log(`-------------8------------------`);
 let i=1;
 for(i=1;i<11;i++){
 var day = i;

            if (day == 1) {day = i + "st"; }
             else if (day == 2) {day = i + "nd" }
             else if (day == 3) { day = i + "rd"}
              else  {day = i + "th"}
             console.log(day);
            }
console.log(`-------------9------------------`);
var text="hbadsfoptcz";
console.log(text.split('').sort().join(''));
console.log(`-------------10------------------`);
let x="";
for(let i=1;i<61;i++){
     x=x+"-";
    console.log(`${i} > ${x}`);
}
console.log(`-------------11------------------`);
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2007));
console.log(`-------------12------------------`);
var element = [5, 10, 15, 20, 25];
console.log(element.slice(2, 4));//[ 15, 20 ]
console.log(`-------------13------------------`);
let myList=[-27, 8, 9, -7];
let min=Math.min.apply(null,myList);
console.log(min);
console.log(`-------------14------------------`);
let myNames= [ { name: "Steve"}, { name: "Mike"}, { name: "John"} ];
var size = Object.keys(myNames).length;
var d=[];
for(let i=0;i<size;i++){
 d.push(myNames[i].name);
}
console.log(d);
console.log(`-------------15------------------`);
let myS="bee";
let mySpell=(myS.split(``));
var dd=``;let ss=[];
for( let i=0;i<myS.length;i++){
    dd=dd+mySpell[i];
   ss=dd.split(` `);
    console.log(ss);
   
}






           


            