/* //1. Check if two given integer values are in the range of 50 to 99
 //(this includes both 50 and 99). Print true if either of them are in the range.
 console.log(`---------------------------------- 1`)
 let n1=60;
 let n2=70;
 let check=true;
 if((n1>=50 && n1<=99) || (n2>=50 && n2<=99)){console.log(`two given integer values are in the range of 50 to 99  is  True`); }
 else {console.log(`false`)}

 //2. Check if three given integer values are in the range of 50 to 99 
 //(inclusive). Print true if one or more of them are in the range.
 console.log(`---------------------------------- 2`)
 let n3=8;
 if((n1>=50 && n1<=99) || (n2>=50 && n2<=99) || (n3>=50 && n3<=99)){console.log(`three given integer values are in the range of 50 to 99 is True`);}
 else {console.log(`no number in rang 50 und 99`)};

 console.log(`----------------------------- 3`)
 let a=50,b=60;c=5;
 if (a>=b && a>=c){console.log(`${a} is largest value `)}
 else if (b>=a && b>=c){console.log(`${b} is largest value `)}
 else if (c>=a && c>=b){console.log(`${c} is largest value `)}

  console.log(`-----------------------------4`);
 let mystr=`javascript`;
 if((mystr[0].toLowerCase()==="p") && (mystr[1].toLowerCase()==="y")){console.log(`${mystr}`)}
 else {console.log(`py${mystr}`)}

 console.log(`---------------------------------5`);
 let s1=30,s2=50;
 let sum=s1+s2;
 if ((sum>=50) && (sum <=80)){console.log(`65`)}
 else {console.log(`80`)}

 console.log(`---------------------------------6`);
 let d=-8,l=0;
if((d+l===8)||(Math.abs(d-l))===8){console.log(true)}
else{console.log(`false`)}
 */
console.log(`---------------------------------7`);
let q=0,w=15;
if(w===15||q===15||q+w===15){console.log(`true`)}
else {console.log(`false`)}

console.log(`---------------------------------8`);
let e=11,r=4;
if ((e%7===0 || e%11===0)){console.log(`e is multiple of 7 or 11`)}
if ((r%7===0 || r%11===0)){console.log(`r is multiple of 7 or 11`)}

console.log(`---------------------------------9`);
let t=15,z=15;
let sumTZ=t+z;
if (t==z){console.log(`${3*sumTZ}  `)}
else {console.log(`two number not equal`)}

const a1 = 15;
 const b1 = 15;
 if (a1 !== b1) {
     console.log(a1 + b1);
 } else {
     console.log((a1 + b1) * 3);
 }

console.log(`---------------------------------10`);
let u=10;
let div=19-u;
if (u>19){console.log(2*div)}
else (console.log(div));

const n = 10;
const sum = n - 19;

if (n <= 19) {
    console.log(19 - n);
} else {
    console.log(sum * 2);
}
let xx=550;
if (500 < xx < 600) {
   console.log(`gggg`)
  }



