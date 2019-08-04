console.log(`-----------rest parameter------------`) 

function sumAll(...args){ // ... gather the remaining parameters into an array 
    let sum =0;
    for (let arg of args) 
    sum +=arg;

    return sum
}
console.log(sumAll(1,10)); // 11 'it will add 1 to every number
console.log(sumAll(1,10,10)); // 21

console.log(`-----------showName------------`) 

function showName(firstName, lastName, ...titles){
    console.log(`${firstName} ${lastName}`);
    console.log(titles); // [ 'consul', 'imperator' ]
    console.log(titles[0]); // since its an array now i can treat it as array
    console.log(titles.length); // 2
}
showName('julius', 'Caeser', 'consul', 'imperator');
console.log(`--------------------- show name 2 -----------`);
//argument variable
function showName(){
    console.log("Argument variable: is ",arguments.length);
    console.log(arguments[0]);//Hello
}
showName("e");//argument variable 0
showName("hello","World");//argument variable 2
console.log(`--------------------- details-----------`)
function details(address, age, ...status){
    console.log(`${address} ${age}`); // berlin 80
    
    console.log(status); // [ 'single' ]
    
}
 details('berlin', 80, 'single') 
 //---------------------------------------//
 console.log(`--------------SPREAD OPERATOR--------------`);
 //console.log(Math.max(3,4,56,74,34,75));//75

 let myARR=[3,4,56,74,34,75];
 console.log(Math.max(myARR));//NaN
 console.log(Math.max(myARR[0],myARR[1],myARR[2],myARR[3],myARR[4],myARR[5]))//75
 console.log(Math.max(...myARR));//75
 console.log(`--------------------------`);
 let myARR2=[3,4,-65,34,1123,0];
 console.log(Math.max(...myARR,353,...myARR2,54))//
 console.log(`--------------------------`);
 let aRRRR=[2,3,4];
 let aRRRR2=[20,30,40,50];

 let merge=[0,...aRRRR,...aRRRR2];
 console.log(merge);//[ 0, 2, 3, 4, 20, 30, 40, 50 ];
 console.log(`--------------------------`);
 let spreadStr=`Hello`;
 console.log(...spreadStr);//H e l l o
 console.log(`--------------------------`);
 function iAmFunction(param1,param2,...restParam){
     console.log([...arguments]);//[ 'Please', 'help', 'me', 'I', 'am', 'all', 'alone' ]
     console.log(restParam);//[ 'me', 'I', 'am', 'all', 'alone' ]
 }
 iAmFunction("Please","help","me","I","am","all","alone");

