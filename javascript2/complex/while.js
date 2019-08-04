var end, start; 
start = new Date();
let n=1000;
var i = 0;
while (i<n) 
{  i++;} 
console.log("number of operations= "+i);

end = new Date();

console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');