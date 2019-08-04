
//1. Declare a variable named "euroCities" and assign an array to the 
//variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].
 //Declare another variable and assign the second item of the array as a value.

  console.log(`------------------------------------1`);
 let euroCities=["Paris", "London", "Valletta", "Prague", "Rome"];
 let euroCities2Item=euroCities.slice(1,2);
 console.log(euroCities2Item.toString());


 /* console.log(`------------------------------------2`);
 euroCities[0]="Berlin";
 console.log( euroCities); */

 /* console.log(`------------------------------------3`);
 console.log(euroCities.length); */

 /* console.log(`------------------------------------4`);
 console.log(euroCities.pop());
 console.log( euroCities); */

/*  console.log(`------------------------------------5`);
 console.log(euroCities.push(`Budapest`));
 console.log( euroCities); */

/*  console.log(`------------------------------------6`);
 console.log(euroCities.splice(1,2));
 console.log( euroCities); */
 /* console.log(`------------------------------------7`);
 let asianCities=["Japan","India","Indonesia","Vietnam"];
 console.log(asianCities); */
 /* console.log(`------------------------------------8`);
 asianCities1=asianCities.splice(1,3);
 console.log(asianCities1); */
 /* console.log(`------------------------------------9`);
 console.log(euroCities);
 console.log(asianCities);
 worldCities=euroCities.concat(asianCities);
 console.log(worldCities); */
 /* console.log(`------------------------------------10`);
 console.log(worldCities.reverse()); */
 /* console.log(`------------------------------------11`);
 worldCities[2]="Toronto";
 console.log(worldCities); */
/*  console.log(`------------------------------------12`);
 worldCities.splice(1,0,"Washington");
 console.log(worldCities); */
/*  console.log(`------------------------------------13`);
 var res1=worldCities.join(",");
 console.log(res1);
 var res = worldCities.join("+");
 console.log(res); */
/*  console.log(`------------------------------------14`);
 worldCities.splice(0,5);
 console.log(worldCities);  */
 console.log(`------------------------------------15`);
 //15. Write a program to reverse the string: "Hello World". 
 
 let str="Hello World";
 function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}
/*
let ww=reverseString(`HELLO WORLD`);
 console.log(` ${ww}`);
  var s="Hello World";
 var sre=[];

 for (i =1; i < s.length+1; i++) { 
   sre += s[s.length-i] ;
 }
 console.log(sre);

 var st="Hello World";
let stre=st.split("");
let strev=stre.reverse() ;
console.log(strev);
console.log(strev.toString());
 let s1=strev[0]+strev[1]+strev[2]+strev[3]+strev[4]+strev[5]+strev[6]+strev[7]+strev[8]+strev[9]+strev[10];
 console.log(s1);

 


//strev.split(" ");
//console.log(ss);  
 */
 console.log(`------------------------------------  Extra 16`);
/* 
 ## Extra Practice

**Print the results to the console.**

1. Make an array of your siblings' names or your favorite movie characters' names.
2. Make an array of your parents' names.
3. Combine these two arrays.
4. Add your pets' names.
5. Reverse the order of the array.
6. Access one of your parents' names.
7. Update the name of one of your parents. */ 
let mySiblings=['hasan','fathy','moutasem'];
let myParents=['walid','fatima'];
let myFamily=myParents.concat(mySiblings);
console.log(myFamily);
console.log(myFamily.reverse());

 myFamily[4]="Walid rifai";
 console.log(myFamily);
	

 
   
 

 
 


 
