function printMessage(){
    console.log(`Good Morining`);
}
printMessage();
console.log(`---------------------------------------------------------------`);
let myMessage="Hello World"
function printMessage2(){
    let  myMessage="Hello Class ToFu!";
    console.log(myMessage);
}

printMessage2();//Hello Class ToFu!
console.log(myMessage);//Hello World
console.log(`----------------------------------------------------------------`);
function squareRoot(num1,num2){
    let squareRoot=num1*num2;
    console.log(squareRoot);
}
squareRoot(5,4);//20
console.log(squareRoot);
console.log(`----------------------------------------------------------------`);
function squareRoot1(num1,num2){
    return num1*num2;
    console.log(squareRoot);
}
squareRoot(5,4);//25
console.log(`----------------------------------------------------------------`);
function newMessage(from="Sender",text=" No Message available"){
    let message=`${from}: ${text}`;
    console.log(message);
}
const errorHandle=undefined;
newMessage("Yaser", "How are you from yaser rifai");//Yaser: How are you from yaser rifai
newMessage("Samer");//Samer:  No Message available
newMessage();
newMessage(errorHandle, "Yaser");
console.log(`----------------------------------------------------------------`);
function calcAge(yearOfBirth){
    let age=2019-yearOfBirth;
    console.log(`The age is ${age}`);
}
calcAge(1973);