console.log(`----------------------- loop while-------------------------------`);
let text="";
let i=0;
while (i < 10) {
    text = `${text} The number is  ${i} \n`;
    i++;
    
  }
  console.log(text);
console.log(`-----------------------loop do while-------------------------------`);
 
  do {
    text = `${text} The number is  ${i} \n`;
    i++;
  }
  while (i < 10);

  console.log(text);
console.log(`-----------------------loop for in  1-------------------------------`);
  let oldCar={
      make:"toyota",
      model:"Tercel",
      year:"1995"
  }
  for(const key in oldCar){
      console.log(`${key}:${oldCar[key]}`);}

console.log(`--------------------------loop for in  2------------------------------------`);   
      var person = {fname:"John", lname:"Doe", age:25}; 
 text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}
  console.log(text);
console.log(`-----------------------loop for each -------------------------------`);
let aRr=["apple","pear","mango"];
aRr.forEach(function(elem){
 console.log(elem)
})

let taSks=[
    [
        "clean",
        "floor"
    ],
    [
        "clean",
        "windows"
    ],
    [
        "clean",
        "dining table"
    ],
    [
        "clean",
        "kitchen platform"
    ],
    [
        "cook",
        "breakfast"
    ],
    [
        "clean",
        "the dishes"
    ],
    [
        "clean",
        "the desk"
    ],
]
taSks.forEach(taSks =>{
 switch(taSks[0]){
     case "clean":console.log(`I am cleaning ${taSks[1]}`);break;
     case "cook":console.log(`I am cooking ${taSks[1]}`);break;
     default: break;
 }
 })
 console.log(`-----------------------loop for of -------------------------------`);
 const fRuits= {apple:27,mango:48,banana:30};
 const entries=Object.entries(fRuits);
 console.log(entries);

 const keYs=Object.keys(fRuits);
 console.log(keYs);

 const value=Object.values(fRuits);
 console.log(value);

 for(const[fruit,count]of entries){
     console.log(`There are ${count} ${fruit}s`)
 }

 let sArray=["apple","pear","mango"];
 for(const i of sArray){
     console.log(i);
 }
