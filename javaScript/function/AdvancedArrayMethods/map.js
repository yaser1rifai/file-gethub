/* let arr = [1, 2, 3, 4];
let squareArr = arr.map(num => num ** 2); //square---exponent base 2
//let squareArr=arr.map(i=>Math.pow(i,2))
console.log(squareArr);     //[ 1, 4, 9, 16 ]
//----------------------------------------------------------------//
let numbers = [4, 9, 16, 25];
function mapMethod() {
    return numbers.map(Math.sqrt);
}
console.log(mapMethod());   //[ 2, 3, 4, 5 ]
console.log(numbers);   //[ 4, 9, 16, 25 ]
//----------------------------------------------------------------//
let numArr = [1, 4, 9];
let doubles = numArr.map(function(num) {
    return num * 2;
});
console.log("doubles:", doubles);   //doubles: [ 2, 8, 18 ]
console.log("numArr:", numArr);     //numArr: [ 1, 4, 9 ]
//----------------------------------------------------------------//
let lengths = ["John", "Tom", "Harry"].map(item => item.length);
console.log(lengths);   //[ 4, 3, 5 ] ***john is 4, tom is 3, etc.
//----------------------------------------------------------------//
let newArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
]
let reformattedArray = newArray.map(objectParam => {    //word before => is always the parameter
    let newObject = {};
    newObject[objectParam.key] = objectParam.value;
    return newObject;
})
console.log(reformattedArray);  //[ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
console.log(newArray);  //[ { key: 1, value: 10 }, 
                        //{ key: 2, value: 20 },
                        //{ key: 3, value: 30 } ]
//----------------------------------------------------------------//
//------------------------FILTER--------------------------------//
console.clear();
let aRr = [1, 2, 3, 4, 5];
const evenArr = aRr.filter(num => num % 2 === 0);
console.log(evenArr);   //[ 2, 4 ]
console.log(aRr);   //[ 1, 2, 3, 4, 5 ]
//----------------------------------------------------------------//
let age = [32, 44, 53, 12, 34];
function checkAdults(age) {
    return age >= 18;
}
console.log(age.filter(checkAdults));   //[ 32, 44, 53, 34 ]
//----------------------------------------------------------------//
let words = ["spray", "limit", "elite", "destruction", "present"];
const result = words.filter(word => word.length > 6);
console.log(result);    //[ 'destruction', 'present' ]

 */
console.log("---------------------------------------reduce")

//console.clear();
let aRRay=[1,2,3,4];
const sumReduceFunction=(accumulator,currentValue)=>accumulator+currentValue;
const sum=aRRay.reduce(sumReduceFunction);
console.log("sum is "+sum);//10
console.log("--------------------")
const sum2=aRRay.reduce(sumReduceFunction,5);
console.log("sum2 is "+sum2)//15
console.log("--------------------")
let newArr=[1,2,3,4];
let resulT=newArr.reduce((sum, current) =>sum+current,10);
console.log(resulT);//20
console.log("--------------------")
const reducer=function(accumulator,currentValue,currentIndex,array){
    console.log("acc:",accumulator,"currVal:",currentValue,"currentIndex:",currentIndex,"array:",array,"=",accumulator+currentValue);
    return accumulator+currentValue;
}
    newArr.reduce(reducer);
    //acc: 1 currVal: 2 currentIndex: 1 array: [ 1, 2, 3, 4 ] = 3
    //acc: 3 currVal: 3 currentIndex: 2 array: [ 1, 2, 3, 4 ] = 6
    //acc: 6 currVal: 4 currentIndex: 3 array: [ 1, 2, 3, 4 ] = 10
    console.log("---------- sort ----------");
    console.log("---------- sort1 ----------");
    //console.clear();
    let month=["March","Jan","Dec","April"];
    month.sort();
    console.log(month);//[ 'April', 'Dec', 'Jan', 'March' ]
    console.log("---------- sort2 ----------");
    let arr1=[1,1000000000,30,21,30,4];
    arr1.sort();
    console.log(arr1);//[ 1, 1000000000, 21, 30, 30, 4 ]
    console.log("---------- sort3 ----------");
    let nums=[4,2,5,3,1];
    nums.sort((a,b)=>a-b);
    console.log(nums);//[ 1, 2, 3, 4, 5 ]
    nums.sort((a,b)=>b-a);
    console.log(nums);//[ 5, 4, 3, 2, 1 ]
    console.log("---------- sort4 ----------");
    
    let items=[
        {name:"The",value:-12},
        {name:"Magnetic",value:13},
        {name:"Edward",value:-23},
        {name:"shape",value:37},
        {name:"Zeros",value:-37},
        {name:"And",value:45},
    ]
    console.log("  --------sort by value ")
    items.sort(function(a,b){
     return a.value-b.value;
    })
    console.log(items);

    console.log(" --------------- sort by name  ----------");
    items.sort(function(a,b){
    let nameA=a.name.toLocaleUpperCase(); //ignore upper and lower case
    let nameB=b.name.toLocaleUpperCase();
    if(nameA<nameB){return -1}
    if(nameA>nameB){return  1}
                    return  0
})
console.log(items);
console.clear();

let myArray=[1,2,3,4]
console.log("-------------- array.isArray");
console.log(Array.isArray([1,2,3,4]));//true




