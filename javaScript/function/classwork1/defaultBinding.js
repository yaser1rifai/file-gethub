/* 
//--------------
console.clear();
"use strict"
//default binding
function foo(){
  
    console.log(this.a);
}

a=10;
foo();//10

 */
//----------------implicit -------------------------------------------------
/* 
function foo(){
    console.log(this.a);
}
var obj={
    a:2,
}
let a=25;
foo.call(obj);//2
 */
//-----------------------------------------------------------------
/* 
function foo2(){
    console.log(this.a);
}

function doFoo(){
    foo2();
}
let obj={
    a:2,
    foo2:foo2,
}
a="Oops,global!";
doFoo(obj.foo2);//Oops,global!
// */
//-----------------------------------------------
/* 
//explicit binding
function foo(){
    console.log(this.a);
}
let obj={a:20}
foo.call(obj)//20 */
//------------------------------------------
/* 
function foo2(){console.log(this.a)}
let obj2={a:2,}
a=40;
let bar2=function(){foo2.call(obj2);}//2
bar2();

 */
//-------------------------------------------
/* 
//new binding
function foo(a){
    this.a=a;
}

let bar=new foo(2);
console.log(bar);
console.log(bar.a)//2

function bar2(){

};
 let instanceOfBar=new bar2();
 console.log(instanceOfBar)//bar2 {}
 */

 function car(maxSpeed){this.maxSpeed=maxSpeed;}
/* 
 let fastCar=new car(2000);
 let slowCar=new car(80);
console.log(fastCar);
console.log(slowCar);
 console.log(fastCar.maxSpeed);//2000
 console.log(slowCar.maxSpeed);//80
 */

 //implicit binding
/*  function foo(){
     console.log(this.a+this.b);
 }
 let obj={a:2,b:2,key:foo,}
 a=30;
 b=50;
obj.key();
foo(obj);
 */
function foo2(){
    console.log(this.x)
}
let obj2={x:100,foo2:foo2,}
let obj1={x:1,obj2:obj2,}
obj1.obj2.foo2();//100