/* //shift
let fruits=['Cherry','Orange','Banana','Melon']
//console.log(fruits.shift());//Cherry
let schiftItem=fruits.shift();
console.log(fruits);

let newFruits=fruits.unshift("Lemon","Cherries");
console.log(newFruits);//4
console.log(fruits);//[ 'Lemon', 'Cherries', 'Orange', 'Banana', 'Melon' ]
console.log(fruits);
fruits.splice(0,2,'Peach', 'Guava');
console.log(fruits);//[ 'Peach', 'Guava', 'Orange', 'Banana', 'Melon' ]

let todaysFruits=fruits.splice(0,2);
console.log(todaysFruits);//[ 'Peach', 'Guava' ]
console.log(fruits);//[ 'Orange', 'Banana', 'Melon' ]
console.log(fruits.splice(3,1));
 */
let neewString="Digital Career Institute";
console.log(neewString.split(" "));
let new1=neewString.split(" ");
console.log(Array.isArray(new1));