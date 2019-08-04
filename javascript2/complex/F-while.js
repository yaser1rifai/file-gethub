var  end, start; 
start = new Date();
function factorialize(num) { 
var result = num;
 if (num === 0 || num === 1) return 1;
 while (num > 1) { num--; result *= num; }
 return result; } 
console.log( factorialize(100));
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');