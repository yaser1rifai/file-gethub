//RETURN STATEMENT
let result=sum(2,5);
function sum(a,b){
return a+b;
}
//console.log("returned ",result);

function checkAge(age){
    if(age>18){return true;}
    else      {return false;}
}
//checkAge(15);
//checkAge(20);

function letDrive(age){
    if(checkAge(age)){console.log("You are  ready to drive ....",age);}
    else  {console.log("You are  not ready to drive ....",age);} 
}
letDrive(15);
letDrive(22);
console.log(`--------------------------------------------------------`);
/* let cloudDay=true;
if(!cloudDay){console.log(`I want some coffee`);}
else        {console.log(`I dont want some coffee .........`);} */
console.log(`--------------------------------------------------------`);
function doNothing(){
    let a=1;
    let b=2;
    let x=a+b;
    console.log(x);
    return ;
}
console.log(doNothing());//3
console.log(doNothing()===undefined);//true
console.log(`------------------------- ARROW FUNCTON-----------------------------`);
//ARROW FUNCTON
let mySum=function(a,b){return a+b;}
console.log(mySum(3,2));//5
//---------------------------
 let mysum1=(a,b)=>a+b;
 console.log(mysum1(3,2));//5
//---------------------------
 let double=(number)=>number*2;
 console.log(double(3));//6
 //---------------------------
 let sayHiii=()=>console.log(`Hello!`);
 sayHiii();//Hello!
  //---------------------------
  let ss=20;
  let welcomE=(ss < 18)?
  () =>console.log(`Hello!`):
  () =>console.log(`welcome!`);
  welcomE();//welcome!
  //---------------------------
  let age=20;
  let welcome=(age<=18)?
  function(){console.log(`Hello!`)}:
  function(){console.log(`welcome! `);};
  welcome();//welcome!
  //---------------------------
  let additt=(a,b)=>{let result=a+b; return result;}
  console.log(additt(2,5));
   //---------------------------
   let agee=20;
  let welcomee=(agee < 18)?
  (f,l=`Doe`) =>console.log(`Hello! ${f+l}`):
  (f,l=`Doe`) =>console.log(`welcome! ${f+l}`);
  welcomee(`Yaser`,`Rifai`);//welcome! YaserRifai
   //---------------------------
   
