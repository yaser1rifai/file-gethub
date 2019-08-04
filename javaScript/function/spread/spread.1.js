/* 
loop continued 

#### 3. Count Instances 
Create a function that takes an array as an argument and determines whether the array's elements are strictly increasing, decreasing or neither. 
* Examples:
* check([1, 2, 3]) ➞ "increasing"
* check([3, 2, 1]) ➞ "decreasing"
* check([1, 2,0,7,5,9]) ➞ "neither"
* check([1, 1, 2]) ➞ "neither"
*/
function check(arr){
    let count=0;
    let arr1=arr.slice();//copy of arr
   for(let i=0;i<arr.length;i++){if (arr[i]==arr1[i+1]) {count++}}      
         
if(count!=0){console.log(`neither`)}
else if(arr.join("")==arr1.sort().join("")){console.log(`increasing`)}
else if(arr.join("")==arr1.sort().reverse().join("")){console.log(`decreasing`)}
else {console.log(`neither`)}
}

check([1, 2, 3]) //➞ "increasing"
check([3, 2, 1])// ➞ "decreasing"
check([1, 2, 1])// ➞ "neither"
check([1, 1, 2]) //➞ "neither"