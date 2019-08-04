var end, start;
var t=0;
let n=1000
start = new Date();
for (var i = 0; i < n; i++){   
     for (var j = 0; j < n; j++)
{   t++;}
}
console.log("number of operations= "+t);
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');