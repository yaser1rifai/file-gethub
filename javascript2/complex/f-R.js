var  end, start; 
start = new Date();
function factorialize(num) { 
if (num < 0) return -1; 
else if (num == 0) return 1;
 else { return (num * factorialize(num - 1)); } }
console.log( factorialize(100));
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');