
console.log(`----------------------------------------1-----------------------------------------`)
let myVar="I am global";
function outerFunction(){
let myVar="I am just a local scope!"

let innerFunction=function(){return  console.log(myVar);}

return innerFunction;
}
outerFunction()();//I am just a local scope!
console.log(`----------------------------------------2-----------------------------------------`)
function makeAdder(x){
    function add(y){
        return y+x;
    }
    return add;
}

let plusOne=makeAdder(1);
let plusTen=makeAdder(10);
console.log(plusOne(3));//4
console.log(plusTen(3));//13

console.log(`---------------------------------------3------------------------------------------`)

function makeTitler(x){
    function title(y){
        return `${x} ${y}`;
    }
    return title;
}

let mrTitle=makeTitler("Mr.");
let msTitle=makeTitler("Ms.");

console.log(msTitle("Lara"));                      //Ms. Lara
console.log(mrTitle("John"));                    //Mr. John
console.log(makeTitler("Dr.")("Jane"));          //Dr. Jane
console.log(makeTitler("Prof.")("Mark"));       //Prof. Mark

