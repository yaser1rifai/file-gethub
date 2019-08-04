/* 
console.log(`---------------------------------------------`);
function wordRank(s){
let total = 0;let rank=0;let word="";
let words = s.split(" ");
        
    for(let i=0;i<words.length;i++)   {
        let ss=words[i];
        for(let j=0;j<ss.length;j++)   {
            
             rank=rank+ss[j].charCodeAt(0);
           
        }
        if(rank>total){total=rank;word=words[i];}
} 
console.log(total,word);
}

wordRank("The quick brown fox.") //➞ "brown"
wordRank("Nancy is very pretty.")// ➞ "pretty"
wordRank("Check back tomorrow, man!")// ➞ "tomorrow"
wordRank("Today is Wednesday.")// ➞ "Wednesday" 

//console.log(String.fromCharCode(65))
 */

var str = "Visit W3Schools!";
var n = str.repeat("W3Schools","yaser");
console.log(n);