var  end, start;
 start = new Date();
var m=160000,n=40;
while (m!=n){
if (m > n) {m=m-n;} 
else {    n=n-m;}
}
console.log("The biggest common denominator= "+m)
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');