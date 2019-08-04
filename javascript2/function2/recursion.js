

console.log(`----------1-------------`)
/* let counter=10;
while(counter>0){console.log(counter--);} */
console.log(`----------2-------------`)
let countdown=function(value){
    if(value>0){console.log(value); return countdown(value-1)}
    //else       {return value;}                 
};
countdown(10);
console.log(`----------3-------------`)
let factorial=function(number){
    if(number<=0){return 1;}
    else {return (number*factorial(number-1))}
};
console.log(factorial(10));//3628800


