//#### 1. Multiply
//Multiply two numbers and return the result using an arrow function. 
console.log(`---------------------------1-------------------------`);
let multiplyTwoNumbers=(x,y)=>x*y;
console.log(multiplyTwoNumbers(3,5));//15
console.log(`--------------------------2-------------------------`);
//#### 2. Double The Odds
//Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30],
// filter the odd numbers into a new array and multiply each odd number by 2. 
let s=[3, 5, 67, 12, 34, 4, 9, 30];

let doubleTheOdds=(s)=>{
    let odd=[];
    for(let i=0;i<s.length;i++){
    if(s[i]%2!==0){odd.push(s[i]*2)}
    }
    console.log(odd);

}
doubleTheOdds(s);
//#### 3. Loopyloop
//Given an array of numbers, loop through the array and subract 10 from each element
// using an arrow function. Return the new array. 
console.log(`--------------------------3-------------------------`);
let loopyLoop=(s)=>{
    let sub=[];
    for(let i=0;i<s.length;i++){
   sub.push(s[i]-10)
    }
    console.log(sub);
}
loopyLoop(s);
//#### 4. Cars
//Create an object named car. Create key pair values which include the model of
// the car, the manufacturer, year etc. Create an arrow function which
// prints the key pair values of the object. 

console.log(`--------------------------4-------------------------`);
let cars=(model,manufacturerYear)=>{
console.log(` This car  is ${model} model and manufacturer Year is  ${manufacturerYear}`);
}
cars(`Fiat`,`2005`);
console.log(`--------------------------5-------------------------`);
let w=[3,62,234,7,23,74,23,76,92];
let filter=(w)=>{
    let fil=[];
    for(let i=0;i<w.length;i++){
    if(w[i]>70){fil.push(w[i])}
    }
    console.log(fil);
}
filter(w);
//6. Geometrizer
//Create two functions that calculate the properties of a circle. 
console.log(`--------------------------6-------------------------`);
let calcCircumfrence=(radius)=>{
   console.log(`The circumference is  ${2*Math.PI*radius} m²`);
}
calcCircumfrence(3);

 let calcArea=(radius)=>{
    console.log(`The area is  ${Math.pow(radius, 2) * Math.PI} m`);
}
calcArea(3);
console.log(`--------------------------7-------------------------`);
const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];
console.log(`---------------- 7 --1----------------------------`);
let invention = inventors.filter(function(element){
  return element.year >= 1500 && element.year < 1600
});
console.log(invention);
console.log(`---------------- 7  2----------------------------`);
let sorted = inventors.sort(function(a,b){
  if(a.year > b.year){
      return 1;
  } else {
      return -1
  }
  
})
console.log(sorted);

console.log(`---------------- 7  3----------------------------`);

let names= inventors.map(function(data){
   return `${data.first} ${data.last}`
})

console.log(names);

console.log(`--------------------------8-------------------------`);
const fullNames = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William','Blake, Ah'
    ];

//Given the following array, sort the people alphabetically by last name.

let pushedArr=[];
for (i = 0; i<fullNames.length; i++){
let splittedArr = fullNames[i].split(', ');
let reversedArr = splittedArr.reverse().join(', ');

pushedArr.push(reversedArr);


}

let sortedArr = pushedArr.sort();
console.log(sortedArr);

let repush = [];
for(j = 0; j <sortedArr.length; j++){
let newSplit = sortedArr[j].split(', ')
let newReverse= newSplit.reverse().join(', ');
repush.push(newReverse);
}
console.log(repush);