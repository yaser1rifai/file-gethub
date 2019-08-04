console.log(`--------------------------------------------`)

function firstFunc(){
    console.log(1);
    
}

function  secondFunc(){
    console.log(2);
    
}

firstFunc(); //1
secondFunc(); //2

console.log(`--------------------------------------------`)

 function firstFunc1(){
    setTimeout( function() {
         console.log(1);
        
    }, 500) // (with millisecond )this will take time before execution according what i set the timer 
 }

 function firstFunc2(){
    setTimeout( function() {
        console.log(2);
        
    })
 }
 firstFunc1()
 firstFunc2() // 2 function 2 will execute first until the timer of first one finished
 

 console.log(`-------------------------------------------`);
 function functionToBeCalled(name){
    console.log('i was called by ', name);
    
}

function funcWithCallback(callback){
    console.log('i am funcWithCallback');
    callback('funcWithCallback');
}

// 1 
funcWithCallback(functionToBeCalled);
 console.log(`-------------------------------------------`);

 console.log();
function callback(){
    console.log("Ì am callback function");
}
 function caller(func){
    console.log("Ì accept a function and call it");
    func();
 }

 caller(callback);
 //Ì accept a function and call it
//Ì am callback function
 callback();//Ì am callback function

 function IAm(){
     console.log(`I am YASER RIFAI`);
 }
 setTimeout(functionToBeCalled,1000);//i was called by  undefined
 functionToBeCalled("John")


 