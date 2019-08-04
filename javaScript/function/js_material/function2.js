//FUNCTION EXPRESSION
function sayHi(){
    console.log("Hi!");
}
sayHi();//Hi!
console.log(`-----------------------------------------------`);
let myFunction=sayHi;
myFunction();//Hi!
console.log(`-----------------------------------------------`);
let stat="Hi_global";
let square=function(number){
      stat="Hi_local";
    let result=number*number;
    console.log(result); 
};
square(3);//9
console.log(stat);//Hi_local
console.log(`-----------------------------------------------`);
const age=20;
let welcome=(age<=18)?function(){console.log(`Hello World`)}:function(){console.log(`welcome Dci`)};
welcome();
console.log(`-----------------------------------------------`);

    let welcome2=function(){
        if(age<=18) {x=function(){console.log(`Hello World`) }}
        else        {x=function(){console.log(`Welcome DCI`) }}
                         } 
 welcome2();
welcome();
