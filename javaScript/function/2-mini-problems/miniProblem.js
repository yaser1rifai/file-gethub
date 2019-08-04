console.log(`-------------------------#### 1. Hitting the Jackpot -----------------------------------`)
function testJackpot(arr){
let check=arr.every( (val, i, arr) => val === arr[0] )
console.log(check)
}
function testJackpot1(arr){
let f=!!arr.reduce(function(a, b){ return (a === b) ? a : NaN; });
console.log(f)
}

testJackpot1(["@", "@", "@", "@"])/// ➞ true
testJackpot1(["abc", "abc", "abc", "abc"])// ➞ true
testJackpot1(["SS", "SS", "SS", "SS"]) //➞ true
testJackpot1(["&&", "&", "&&&", "&&&&"]) //➞ false
testJackpot1(["SS", "SS", "SS", "Ss"]) //➞ false
console.log(`------------------------#### 2. Sudoku---------------------------------`) 
function isMiniSudoku(arr){
    let arr1=[]
 let f=arr.map(i=>i.sli)
 console.log(f)
}

isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]])// ➞ true
/* isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]]) //➞ false
// The 1 is repeated twice 
isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]])// ➞ false
// The 0 is included (outside range)
isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]]) //➞ true  */