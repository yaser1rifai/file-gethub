console.log(`---------------------------------------------------------1`);
let i=0;
for( i=0;i<=3;i++){
    console.log(i);
}
console.log(`the value of i is ${i}`);
console.log(`---------------------------------------------------------2`);
let sum=0;
for( i=0;i<=5;i++){
    sum=sum+i;
    console.log(`Value of i= ${i} and The sum = ${sum}`); 
}
console.log(`Out loop Value of i1= ${i} and The sum1 = ${sum}`);
console.log(`---------------------------------------------------------3`);
let myString="Digital Career Institute";
for(let i=0;i<myString.length;i++){
    console.log(`The index of ${myString[i]} is ${i}`);
}
console.log(` ${myString[8]}` );
console.log(`---------------------------------------------------------4`);
let fruits=["Apple","Orange","Cherry"];
let newArr=[];
for(let i=fruits.length-1;i>=0;i--){
    newArr.push(fruits[i]);
    console.log( typeof newArr);
}
console.log(newArr);
console.log(`---------------------------------------------------------5`);
let fruits1=["Apple","Orange","Cherry"];
let newArr1=[];
for(let i=0;i<fruits1.length;i++){
    newArr1.push(fruits1[i]);
    console.log( typeof newArr1);
}
console.log(newArr1);
