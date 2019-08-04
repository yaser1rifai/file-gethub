console.log(`--------------#### 1. Combining Arrays`);
console.log(`--------------------------------------------------------------1 - 1`);
let euroCountries=['Austria','Germany']
let asianCountries=['Iran','Iraq','Syria'];
euroCountries=[...euroCountries,...asianCountries];
console.log(euroCountries);
console.log(`--------------------------------------------------------------1 - 2`);
let arr11=["yaser",`ahmad`];
let arr22=["MMustafa",`sameh`];
arr4=[...arr11,...arr22];
console.log(arr4);
console.log(`--------------------------------------------------------------1 - 3`);
let arr33=["1","2"];
let arr5=[...arr11,...arr33,...arr22];
console.log(arr5);
console.log(`------------------------------#### 2. Copying Arrays----------------`);
var arr = [3,2,1];
var arr2 = [...arr]; // like arr.slice()
console.log(arr2);
console.log(`------------------------------Find the Largest...----------------`);
function findLargest(arr){
   console.log(Math.max( ...arr ));
}
findLargest([7,8,4,99]);
console.log(`------------------------------Find the smallest----------------`);
function findSmallest(arr){
    console.log(Math.min( ...arr ));
 }
 findSmallest([7,8,4,99]);
 console.log(`------------------------------Clone and Merge----------------`);
 const person = {name: "John"}
const job = {role: "Teacher"}

let personOne={...person};
console.log(personOne);
let employee={...personOne,...job};
//console.log(employee);
 employee.name="Yaser";
 console.log(employee);
console.log(`------------------------------Is the average a whole number?----------------`);
function isWhole(...grades) {
    var sum = 0;
    for( i of grades ){
        sum += i; //don't forget to add the base
    }
    var avg = sum/grades.length;
    if (Number.isInteger(avg)){console.log(true)}
    else {console.log(false)}
}
isWhole(1, 2, 3, 4)// ➞ false
isWhole(9, 2, 2, 5)// ➞ false
isWhole(1,3,5,3)// ➞ true
isWhole(...[1,3,5,3])// ➞ true
console.log(`------------------------------Minimum Removals for Even Output ----------------`);
function minRemovals(...grades) {
    var sum = 0;
    for( i in grades){
        sum += parseInt( grades[i], 10 ); //don't forget to add the base
    }
    if(sum%2==0){console.log(`0 removals`)}
    else {console.log(`1 removals`)}
}
minRemovals(1, 2, 3, 4) //➞ 0 removals
minRemovals(5, 7, 9, 11) //➞ 0 removals 
minRemovals(5, 7, 9, 12) //➞ 1 removal 
console.log(`------------------------------------Quadratic Equation `);

//a as the coefficient of x^2 (x to the power of 2)
//b as the coefficient of x
//c as the constant term
function solve(...[a,b,c]){
    var result = ((-1*b) + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
    var result2 = ((-1*b) - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
    if(result>=0)console.log(result);
    if(result2>=0)console.log(result2);
}

solve(1,-5,6);
console.log(`-------------------------------------------Spread Date---------`)
let dateArray = [2012, 6, 5];
let dateObject = new Date(...dateArray);

console.log('Spread:', dateObject.getDay());
