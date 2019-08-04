var  end, start;
 start = new Date();
function factorialize(num) {
 if (num === 0 || num === 1) return 1;
 for (var i = num - 1; i >= 1; i--) { num *= i; } return num; } 
console.log(factorialize(100));
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');