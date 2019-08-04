//              0       1      2      3       4       5
const arr = ["rot", "grün", "blau", "gelb", "oliv", "grau"];

console.log (arr.slice (0, 3))//expected output: [ 'rot', 'grün', 'blau' ]
console.log (arr.slice (4))   //expected output:[ 'oliv', 'grau' ]
console.log (arr.slice (-1))  //[ 'grau' ]
console.log (arr.slice ())   //[ 'rot', 'grün', 'blau', 'gelb', 'oliv', 'grau' ]

console.log (arr.splice(0, 3, "lila", "braun", "ocker"))//[ 'rot', 'grün', 'blau' ]
console.log(arr);//[ 'lila', 'braun', 'ocker', 'gelb', 'oliv', 'grau' ]

console.log(arr.indexOf("gelb"));//3
console.log(arr.indexOf("aaaaa"));//-1

console.log(arr.pop());
// expected output: grau

console.log(arr);
// expected output: [ 'lila', 'braun', 'ocker', 'gelb', 'oliv' ]