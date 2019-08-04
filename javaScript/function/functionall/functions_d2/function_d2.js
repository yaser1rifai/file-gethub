 console.log(`--------------1--------------------------------------`);
function XO(str) {
    str = str.toLowerCase();// make the string lowercase because we are case insensitive
    var arrayOfCharacters = str.split("");// put the string into an array
   
    var countX = arrayOfCharacters.reduce( function( n, val ) {return n + (val === 'x');},0); //count the x's
      
   
    var countO = arrayOfCharacters.reduce( function( n, val ) {return n + (val === 'o');}, 0); // count the o's
    
    // do these numbers match? if so return true and if not return false
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}
console.log(XO("xooOxx"));
console.log(`--------------2--------------------------------------`);
function equalSlices(total, recip, person){
if(recip*person<=total){console.log(`true`)}
else                    {console.log(`false`)}
}
equalSlices(8, 3, 2) //➞ true
 equalSlices(8, 3, 3)// ➞ false
 equalSlices(24, 12, 2)// ➞ true
 console.log(`--------------3--------------------------------------`);
function sumOfCubes(str){
   var l=str.length; 
   var sum=0;
   for(var i=0;i<l;i++){
    sum+=Math.pow(str[i], 3);
   }
  console.log(sum);
}
sumOfCubes([1, 5, 9])// ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
 sumOfCubes([3, 4, 5])// ➞ 216
 sumOfCubes([2])// ➞ 8
 sumOfCubes([]) //➞ 0
 console.log(`-------------4--------------------------------------`);
 function  amplify(x) {
     var str=0;var s=[];
    for(var i=1;i<=x;i++){
        if(i%4==0){ss=10*i;s.push(ss);}
        else  {ss=i;s.push(ss);}
      
       
 }
 console.log(s);
}
amplify(4) //➞ [1, 2, 3, 40]
 amplify(3)// ➞ [1, 2, 3]
 amplify(25)// ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
 console.log(`-------------5--------------------------------------`);
 function getMonthName(monthNumber) {
    var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];
    console.log(monthNames[monthNumber - 1]);
}
getMonthName(2);
getMonthName(3)// ➞ "March"
getMonthName(12)// ➞ "December"
getMonthName(6)// ➞ "June"
console.log(`------------6--------------------------------------`);
function evenNums(num){
  var even=[];
  for(var i=1;i<=num;i++){
    if(i%2==0){even.push(i);}
  }
  console.log(even);
}
evenNums(8)// ➞ [2, 4, 6, 8]
evenNums(4) //➞ [2, 4]
evenNums(2) //➞ [2]
console.log(`------------7--------------------------------------`);
function dictionary(part,str){

  const start = str.filter((x) => x.startsWith(part));
  
  console.log(start);
}
dictionary("bu", ["button", "breakfast", "border"]) //➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) //➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"])// ➞ []
console.log(`------------8--------------------------------------`);
function isFourLetters(str){
 var four=[];
 for(var i=0;i<str.length;i++){
   if(str[i].length==4){four.push(str[i])}
 }
 console.log(four);
}
isFourLetters(["John", "James", "Jack", "Jeanne"]) //➞ ["John", "Jack"]
isFourLetters(["Tomato", "Corn", "Lettuce"]) //➞ ["Corn"]
isFourLetters(["Dog", "Cat", "Deer"])// ➞ ["Deer"] 
console.log(`------------9--------------------------------------`);

function isSymmetrical(number){
  let num=number+"";
   let num1=num.split(``).reverse;
   if(num1===num) {console.log(true)}
  else {(console.log(false))};
  }


isSymmetrical(771265689287)// ➞ true 
 isSymmetrical(12567)// ➞ false
isSymmetrical(44444444)// ➞ true
isSymmetrical(9939)//➞ false
isSymmetrical(1112111)//➞ true 





 