/* let str = "Please locate where locate 'locate' occurs!";
console.log(str.length);//43
//position
console.log(str.indexOf("locate",13));//20
console.log(str.indexOf("l"));// 1

//search
console.log(str.lastIndexOf("locate",15));//7
console.log(str.search("where"));//14

console.log(`--------------EXTRACT PARTS OF A STRING-----------------------`);
let stringFruits ="Apple, cherry,kiwi";
let sliceString=stringFruits.slice(7,13);
console.log(sliceString);//cherry
console.log(stringFruits);//Apple, cherry,kiwi

let subStringString =stringFruits.substring(7,13);
console.log(subStringString);//Apple, cherry
console.log(stringFruits);

let subStrString=stringFruits.substr(7,5);
console.log(subStrString);//cherr
 */
console.log(`--------------REPLACING-----------------------`);
let stringToBeReplaced="It is a lovely  lovely day ";
let replaced=stringToBeReplaced.replace(/lovely/ig,"cold");
console.log(replaced);//It is a cold  cold day 
console.log(stringToBeReplaced);//It is a lovely  lovely day
console.log(`-------------- trim-----------------------`);
let newString="       Hello world!      ";
console.log(newString.trim());//Hello world!

console.log(`-------------- EXTRACTING STRING CHARACTERS -----------------------`);

let newString1="Hello World";
let charAtNewString=newString1.charAt(0);
console.log(charAtNewString);//H

let charCodeAtNewString=newString1.charCodeAt(0);
console.log(charCodeAtNewString);//72

console.log(`-------------- CONVERTING A STRING INTO AN ARRAY -----------------------`);
let myNewString="a,b,c,d";
console.log(myNewString);

let stringToArray=myNewString.split("*");
console.log(stringToArray);


 


