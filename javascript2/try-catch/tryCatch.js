24
0





6
Message List
Loading history...

Lorraine [10:25 AM]
Microsoft Atrium and The Digital Eatery
Unter den Linden 17
10117 Berlin

Alisio Delgado [10:26 AM]
Dear students and future graduates,

next week our current 10th Web Development course will have it´s final presentations which turned into a little event. the whole school will be involved.

When?

Thursday, 13 June,
1.00 pm to 4.00 / 5.00 pm

(You will have classes as usual in the morning and after lunch you´ll go to the Microsoft Atrium at Friedrichstraße.)

Where?

Microsoft Atrium and The Digital Eatery
Unter den Linden 17
10117 Berlin

Agenda:

13:00 h - 13:15 h  - Short introduction of invited companies
13:15 h - 13:45 h  - 1. presentation: Collectivity: Collective + Connecting
13:45 h - 14:15 h  - 2. presentation: Research Assistant
14:15 h - 14:30 h  - Handning out certificates
14:30 h - 16:00 h  - Networking

There will be companies joining the event who are looking for people to hire. For those of you who have nearly finished the course (and those who will finish it in a few months): This could be a good chance to get in contact with them.

There will be drinks for everyone, please have lunch before.

The event is mandatory because it´s happening during teaching time.

Looking forward - Sophia

Mariam Fatima [12:02 PM]
Debugging:  try catch 
// // syntax error
​
// // funtion myFunction () {
// //   console.log("Blah!");
  
// // }
​
// // runtime error
​
// // function loopp() {
// //   while(true) {
// //     console.log("Hello");
    
// //   }
// // }
​
// // loopp();
​
​
// // semantic errors
// function calcAreaOfRect(w, h) {
//   return w + h;  // area of rectangle is w * h
// }
// let myRectArea = calcAreaOfRect(2, 4);
// console.log(myRectArea);    // 6
​
​
​
// // ReferenceError
// // function myFunc() {
// //   console.log(`Print ${myVar}`);
  
// // }
// // myFunc();
​
// // type error
// let fruits = true;
// for (let i = 0; i < fruits.length; i++) {
//   const item = fruits[i];
//   console.log(item);  
// }
​
console.clear();
​
// try {
//   console.log("Exicute this code");
​
//   console.log("End try code block");
  
  
// } catch (error) {
//   console.log("Catch is ignored!");
  
// }
​
// console.log("....then continue with the rest of the script.");
​
// Exicute this code
// End try code block
// ....then continue with the rest of the script.
​
// try {
//   console.log("Heya!");
  
​
//   console.log(`Print: ${Hello}`);
​
//   console.log("World!");
  
  
// } catch (error) {
​
//   console.log("Caught the error!");
  
// }
​
// console.log("Continue with the script!");
​
// Heya!
// Caught the error!
// Continue with the script!
​
​
// ------------------------------
// try {
//   setTimeout(function() {
//     noSuchVariable;
//   }, 1000)
// } catch (error) {
//   console.log("Won't work");
  
// }
​
// setTimeout(function() {
//   try {
//     noSuchVariable;
//   } catch (error) {
//     console.log("Won't work");
//   }
// }, 1000)
​
console.clear();
​
// try {
//   hobbies;
//   name;
//   PaymentAddress;
//   lalala;
// } catch (error) {
//   console.log(`Error has occured!`);
//   console.log(`Error name: ${error.name}`);
//   console.log(`Error message: ${error.message}`);
//   console.log(`Error stack: ${error.stack}`);
//   console.log(error);
  
// }
​
// console.log("Exicute the rest!");
​
let jsonString = '{ "age": 30 }';
try {
​
 let user = JSON.parse(jsonString); // <-- no errors
​
 if (!user.name) {
  throw new ReferenceError("Incomplete data: no name" + jsonString); 
 }
​
 console.log( user.name );
​
} catch(error) {
  console.log( "JSON Error: " + error.message ); // JSON Error: Incomplete data: no name{ "age": 30 }
  console.log( "JSON Error: " + error.name );   // JSON Error: ReferenceError
}
​
// -----------------
​
function a() {
  throw new Error("Error from a!")
}
​
function b() {
  try {
    a();
  } catch (error) {
    throw(error)
  }
}
​
function c() {
  try {
    b();
  } catch (error) {
    console.log(`Error message: ${error.message}`);
    
  }
}
c();  // Error message: Error from a!
