let fact=function(num){
    if(num<=0) {return 1}
    else  {return num*fact(num-1)}
}
console.log(fact(4))

let factorial=function(number){
    if(number<=0){return 1;}
    else {return (number*factorial(number-1))}
};
console.log(factorial(4))