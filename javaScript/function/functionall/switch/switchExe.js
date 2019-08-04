//# Switch Statements

//## Please log all your answers to the console. Remember to add defaults to your switch statements. 

console.log( `-----------1. Color Analyzer ---------------` )
//Create a function that takes a string in its parameters. 
//Console log a different statement for each color (red, blue, green, yellow). 
//Example: analyzeColor("Red") -> "Red is a primary color". 

 function colorAnalyzer (color){
switch (color) {
    case "red":
     color = "Red is a primary color";
      break;
    case "blue":
      color = "Blue  is a secondary color";
      break;
    case "green":
       color = "Green  is a third color";
      break;
    case "yellow":
      color = "Yellow  is a fourth color";
      break;
     default:"no Color";
  }
  console.log(color);
}
colorAnalyzer ("green");

console.log(`-----------#### 2. Grading ----------------`)
//Create a function that takes a grade in its parameters. 
//Console log comments depending on the grade. 
//* Example: grade("A") -> "Good job!", grade("F") -> "Failed"

function grade(x){
switch (x) {
               case "A":x= "Good job";
               break;
            
               case 'B':x="Pretty good";
               break;
            
               case 'C':x="Passed";
               break;
            
               case 'D':X="Not so good ";
               break;
            
               case 'F':x="Failed ";
               break;
            
               default: x= "Unknown grade";
            }
            console.log(x)
        }
        
grade(`b`);

console.log(`-----------3. What month is it?-----------------`) 
//Create a function using the new Date().getMonth() method and
 //switch case in order to return the month of the year. 
 //Return "It's the month of May!"

 function getMonth(){
     let d=new Date();
     month=d.getMonth()
 switch(month)
 {
   case 0:
     month="January";
     break;
   case 1:
     month="February";
     break;
   case 2:
     month="March";
     break;
   case 3:
     month="April";
     break;
   case 4:
     month="May";
     break;
   case 5:
     month="June";
     break;
   case 6:
     month="July";
     break;
   case 7:
     month="August";
     break;
   case 8:
     month="September";
     break;
   case 9:
     month="October";
     break;
   case 10:
     month="November";
     break;
   case 11:
     month="December";
     break;
   default:
     month="Invalid month";
 }
 console.log("It's the month of "+month+"!");
}
getMonth();


console.log(`---------------------------4. Fruits----------------------------`) 
//Create a function that takes a string in its parameters. 
//Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple). 
//Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"
function fruits(x){
    switch (x) {
                   case "banana":x=` Great choice!  A ${x} is full of vitamin C!`;
                   break;
                
                   case 'orange':x=` Great choice! An ${x}  is full of vitamin C!`;
                   break;
                
                   case 'strawberry':x=` Great choice!  A ${x} is full of vitamin C!`;
                   break;
                
                   case 'apple':x=` Great choice! An ${x} is full of vitamin C!`;
                   break;
                            
                   default: x= ` NO choice!  A ${x}  `;
                }
                console.log(x)
            }
            
            fruits(`banana`);
console.group(`----------------------------------------- 5.Jobs -------------`)
//Create a function and a person object. 
//Console log different statements for each job (e.g."teacher", "driver", "programmer", "actor", "chef") using a switch statement.
//* Examples of expected output
//* "Maria Smith is a teacher. She teaches children."
//* "Maria Smith is a driver. She drives a truck." 

function jobs(x){
  var person = {name:["Maria Smith","Adam Adam","Yaser Yaser","Ahmad"],job:["teacher", "driver", "programmer", "actor", "chef"], work:["children","truck","program","theater"]};
    switch (x) {
                   case "Maria Smith":x=` ${person.name[0]} is a ${person.job[0]}. She teaches ${person.work[0]}.`;
                   break;
                
                   case "Adam Adam":x=` ${person.name[1]} is a ${person.job[1]}. He drives ${person.work[1]}.`;
                   break;
                
                   case "Yaser Yaser":x=` ${person.name[2]} is a ${person.job[2]}. He makes a ${person.work[2]}.`;
                   break;
                
                   case "Ahmad":x=` ${person.name[3]} is a ${person.job[3]}. He works in a ${person.work[3]}.`;
                   break;
                            
                   default: x= ` NO choice! for ${x}  `;
                }
                console.log(x)
            }
           jobs("Maria Smith") ;
           jobs("Yaser Yaser") ;
           jobs("Adam Adam") ;
           jobs("Ahmad") ;
           jobs("Sara") ;
           
           
  