//Callback
//With the snippet of code below, create a function called "each" which accepts two parameters: an array and a callback function. The "each" function should loop over the array passed to it and run the callback function on each element in it.
// this function should accept 2 parameters, put them in!
/* 
function callBF(val){console.log(val)}
function callBF1(val){console.log(val*2)}
function callBF2(val){console.log(val/2)}

function each(str,callBF){
    // put your code inside here!
    for(let i=0;i<str.length;i++){  callBF( str[i]) }
}

console.log(`---------1---------`)
each([1,2,3,4], callBF)
console.log(`--------2----------`)
each([1,2,3,4], callBF1)
console.log(`--------3----------`)
each([1,2,3,4], callBF2)
 */
function each(numberArray,callback){
    // put your code inside here!
    numberArray.forEach(i => {
        callback(i)
    });
}

each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

each([1,2,3,4], function(val){
    console.log(val/2);
});
console.log(`------------------exe2  map`)
/* 
Create a function called "map" which accepts two parameters:
 an array and a callback. The "map" function should return a
  new array with the result of each value being passed
   to the callback function.
Example:
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]
*/
function map(numberArray, callback) {
    let result = [];
    numberArray.forEach(i => {
        result.push(callback(i));
    });
    console.log(result);
  }
  map([1,2,3,4], function(val){
    return val * 2;
  }); // [2,4,6,8]
console.log(`----------------------`)

function filter(numberArray, callback) {
    let result = [];
    numberArray.forEach(i => {
  
        if(!callback(i))result.push(i);
            ;
    });
    console.log(result);
    
  }
  
  
  
  
  filter([1,2,3,4], function(val){
    return val > 2;
  }); // [1,2]
  
  filter([2,3,4,5], function(val){
    return val % 2 === 0;
  }); // [3,5]