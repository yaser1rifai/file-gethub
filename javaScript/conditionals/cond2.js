//1. Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a boy/girl". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young man/woman". If none of these conditions apple, print "firstName is a man/woman". 
console.log(`---------------------------------1`);
let firstName=`yaser`, age=40;
if(age<13){console.log(`${firstName} is boy`);}
else if ((age >= 13)&&(age < 20)){console.log(`${firstName} is teenager`)}
else if ((age >= 20)&&(age < 30)){console.log(`${firstName} is young man`)}
else {console.log(`${firstName} is man`)}

console.log(`---------------------------------2`);
let job=`teacher`;
if(job===`teacher`){console.log(`${firstName} is ${job} in Berlin`)}
else if (job===`Prof`){console.log(`${firstName} is ${job} in Berlin`)}
else if (job===`designer`){console.log(`${firstName} is ${job}in Berlin`)}
else if (job===`doctor`){console.log(`${firstName} is ${job}in Berlin`)}
else if (job===`Engineer`){console.log(`${firstName} is ${job}in Berlin`)}
else if (job===`worker`){console.log(`${firstName} is ${job}in Berlin`)}
else {console.log(`${firstName} is not ${job}`)}

//3. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5". If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". If none of the above apply, print the number. 
console.log(`---------------------------------3`);
let x=26;
if ((x%3===0) && (x%5===0)){ console.log(`FizzBuzz`)}
else if ((x%3===0)){ console.log(`Fizz`)}
else if ((x%5===0)){ console.log(`Buzz`)}
else {console.log(`${x}`)}

console.log(`---------------------------------4`);
let temperature=40,weather=`sunny1`;
if((temperature>15)&&(weather===`sunny`)){console.log(`It is ${temperature} degrees outside and ${weather}`)}
else {console.log(`It is ${temperature} degrees outside and ${weather}`)}

console.log(`---------------------------------5`);
let average=(90+64+75+83+80+55)/6;
console.log(`Average is ${average}`);
if(average>90){{console.log(`A+`)}}
else if ((average>80) && (average<=90)){console.log(`A`)}
else if ((average>70) && (average<=80)){console.log(`B+`)}
else if ((average>60) && (average<=70)){console.log(`B`)}
else if ((average>50) && (average<=60)){console.log(`C+`)}
else if ((average>40) && (average<=50)){console.log(`C`)}
else if ((average>30) && (average<=40)){console.log(`D`)}
else {console.log(`F`)}
