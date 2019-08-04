/* //1. Addition 
console.log(`1. Addition Write a program to add up the numbers 1 to 20.`);
let i=0;
for(i=0;i<21;i++){
    console.log(`the number is : ${i} `)
}
console.log(`2. -------------------------------------------------------`); 
let x=1;
for(x=1;x<6;x++){
    console.log(`there is ${x} bottle/s of beer on the wall`);
}
console.log(`3. -------------------------------------------------------`); 
let a=0;
for(a=0;a<21;a++){
    if(a%2===0) {console.log(`the number ${a} is even`)}
    else  {console.log(`the number ${a} is odd`)}
}
console.log(`4. -------------------------------------------------------`); 
let multi=0; let arrayMulti=[];

let q=0;
for(q=0;q<11;q++){
    console.log(`the result ${q} * 9 is = ${9*q}`)
     multi=q*9;
      arrayMulti.push(multi);
      console.log(`${q}*9 = ${q*9}`);
}
console.log(arrayMulti); */
/* console.log(`4. Bouns -------------------------------------------------------`); 
let w=0,e=0;
for(w=0;w<11;w++){
    console.log(` table ${w}`)
    for(e=1;e<11;e++){
    console.log(`the result ${w} * ${e} is = ${w*e}`)
}
} 
*/

/* console.log(`5. Grades -------------------------------------------------------`); 
let student=[`John`,`Tom`,`Jane`,`Maria`,`Carl`];
let Grades =[90,60,77,81,65];

let t=0;

    for(t=0;t<Grades.length;t++){
        if      (Grades[t]< 60){console.log(`${student[t]} with Grade ${Grades[t] } is F`)}
        else if (Grades[t]< 70){console.log(`${student[t]} with Grade ${Grades[t] } is D`)}
        else if (Grades[t]< 80){console.log(`${student[t]} with Grade ${Grades[t] } is C`)}
        else if (Grades[t]< 90){console.log(`${student[t]} with Grade ${Grades[t] } is B`)}
        else                   {console.log(`${student[t]} with Grade ${Grades[t] } is A`)} 
    } */
/* 
    console.log(`6. Fizz bizz -------------------------------------------------------`);
let z=0;
for(z=0;z<101;z++){
         if((z%3==0) &(z%5==0)){console.log(` FizzBuzz  the number ${z} is divided by 3 and 5 together `)}
    else if(z%3==0 ){console.log(` Fizz the number ${z} is divided by 3  `)}
    else if(z%5==0 ){console.log(` Buzz the number ${z} is divided by 5  `)}
    else {console .log(`  the number ${z}   `)}
}
 */
/* console.log(`7 -------------------------------------------------------`); 
let k=0; let yy=0;
for(k=0;k<10001;k++){
    if((k%3==0)|| (k%5==0)){yy=yy+k;};
} 
console.log(yy);*/
/* 
console.log(`8  und Bouns-------------------------------------------------------`);
let myFriends=[`Mohamd Rifai`,`Maher Asad`,`Ramez sibaii`];
let s=0;
for(s=0;s<myFriends.length;s++){
    console.log(`Hello ${myFriends[s]}! ${myFriends[s]} is at index ${s} of my friends array `)
}
 */
/* 
console.log(`9-------------------------------------------------------`);
let d=0;
for(d=1;d<11;d++){
   
    console.log(`${d*100} `);
}
let d1=0;
for(d1=0;d1<7;d1++){
   
    console.log(`${2**d1} `);
}
let d2=0;
for(d2=0;d2<6;d2++){
   
    console.log(`${2*d2} `);
}
let d3=0;
for(d3=1;d3<6;d3++){
   
    console.log(`${3*d3} `);
}
let d4=0;
for(d4=9;d4>=0;d4--){
   
    console.log(`${d4} `);
}
 */
console.log(`10 -------------------------------------------------------`);
 let h=0,kk=1,k=1;
 let str=`madam`;
 for(h=0;h<str.length;h++){

     // console.log(`${str[h]}  ${str[str.length-h-1]}`);
      if(str[h]==str[str.length-h-1]){k=1;}
      else {k=0;}
      kk=kk*k;
  }
  if (kk==1){console.log(`a word is a palindrome`)}
  else {console.log(`a word is a not  palindrome`)}
 
  /* let word = 'dad';
let newWord = word.split('');
let reversedWord= newWord.reverse();
let newX =reversedWord.join('');
console.log(`${newX}`);

if (word == newX) {
   console.log('it is true');

} else {
   console.log(`it isn´t correct`);

} */

/* 
let word='madammnm';
let newWord = word.split('');
let reversedWord= newWord.reverse();
let newX=reversedWord.join('');
console.log(word,newWord,reversedWord,newX);
if (word == newX) {console.log('it is true'); } 
else              {console.log(`it isn´t correct`)};


 */
 


