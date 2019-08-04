//VALUE VS REFERENCE
// ------------------------------------------------//

// Some Data Types are Primitives like numbers
// Primitive Data Types have a `Clones` values in the background
// Clones are the values that doesn't change or get affected by another related variables
// Objects are Not-Primitive Data Types, they have a `References` value in the background
// References are the values that change or get affected by another related variables

console.clear();

let myVal = 10;

function add10 (val) {
   return val + 10;
}

console.log(add10(myVal)); // 20

// ------------------------------------------------//

// Numbers: are always passed by `value/clone`

let germany = 0;
let southKorea = germany;

germany += 1;
southKorea += 2;

console.log(germany, southKorea); // 1 2

// ------------------------------------------------//

// String: are always passed by `value/clone`

let cheer = "Ole";
let boo = cheer;

cheer = "Goal!!!!";
boo = "kwqjksad";

console.log(cheer, boo); // Goal!!!! kwqjksad

//--   -----------------

//boolean are always `passed by value`/clones
let win=true;
let lose=win;
win=!win;
console.log(win);//false
console.log(lose);//true
//--------------------------------------------------------------------------
//object(arrays are also objects)are always reference
let score2018=[[0,1],[2,1]];
let score2022=score2018;
//both arrays will be affected when they are references of each other
score2018.push([3,1]);score2022.push([10,10]);
console.log(score2018);//[ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ] ]
console.log(score2022);//[ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ] ]
//------------------------------------------
//objects are always reference
let player={
    name:"christtiano Ronaldo",
    totalGoals:650,
}
let playerClone=player;
playerClone.totalGoals=6;
console.log(player==playerClone)//true
console.log(player);//     { name: 'christtiano Ronaldo', totalGoals: 6 }
console.log(playerClone);//{ name: 'christtiano Ronaldo', totalGoals: 6 }

//object have identity
let nums=[1,2,3];
let nums2=[1,2,3];

console.log(nums==nums2);//false

//reference are identical in identity as well
console.log(player==playerClone)//true

//primitives don't have an identity
let primitveData=true;
let primitveData2=true;
console.log(primitveData==primitveData2)//true

console.log(`--------------------------------------------------------`)
const players =["Christiano Ronaldo","Lionel Messi","Neymar"];
//SHALLOW Clones
//1.Clone an array with a for loop
function cloneArryFor(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    //return newArr;
    console.log(newArr);
}
cloneArryFor(players)

//2.clone an array with for each 
function cloneArryForEach(arr){
    let newArr=[];
   arr.forEach(item=>newArr.push(item));
    //return newArr;
    console.log(newArr);
}
cloneArryForEach(players)

//3.clone an array with Array.slice
function cloneArrySlice(arr){
    let newArr=arr.slice(0);
    //return newArr;
    console.log(newArr);
}
cloneArrySlice(players)

//4.clone an array with array.from 
function cloneArryFrom(arr){
    let newArr=Array.from(arr);
    //return newArr;
    console.log(newArr);
}
cloneArryFrom(players)

//5.clone an Array with the ... spread operator
function cloneArraySpread(arr){
    let newArr=[...arr];
    return newArr;
 
}


const players2 = cloneArraySpread(players);
players[0] = "Roben";
console.log(players); // [ 'Roben', 'Messi', 'Naymar' ]
console.log(players2); // [ 'Ronaldo', 'Messi', 'Naymar' ]
console.log(`----- cloning Object Literal`);
const ball={
    weight:"400gm",
    diameter:"15cm"
}

ball2={...ball}
ball2.weight="500cm";
console.log(ball);
console.log(ball2);
console.log(`--------------(how ++ and --  work)---------------------`);
let x=1;
console.log(`++x`)
console.log(x);      //1
console.log(++x);    //2
console.log(x++);    //2
console.log(x);      //3

console.log(`--x`)
console.log(x);   //3
console.log(--x); //2
console.log(x--); //2
console.log(x);   //1
console.log(`-------------while---------------`);
let y=1;
while(y<5){console.log(++y)}// 2   3   4   5
console.log(`------------objects and const---------------`);
let x2=1;
    x2="45";

const y2=22;
     // y2=42;

let greeter={
    greeting: "Hello",
}
console.log(greeter);//{ greeting: 'Hello' }

greeter="hello";
console.log(greeter);//hello
console.log(typeof greeter);//string
