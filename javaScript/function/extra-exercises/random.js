//-----------------------------------------------------------------------------------
console.log(`1. Create a random quote generator!`)
var quoteOptions = [{
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    name: "Marilyn Monroe"
  }, {
    quote: "“Don't cry because it's over, smile because it happened.”",
    name: "Dr. Seuss"
  }, {
    quote: "“Be yourself; everyone else is already taken.”",
    name: "Oscar Wilde"
  }, {
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    name: "Albert Einstein"
  }, {
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    name: " Bernard M. Baruch"
  }, {
    quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    name: "Dr. Seuss"
  }, {
    quote: "“A room without books is like a body without a soul.”",
    name: "Marcus Tullius Cicero"
  }, {
    quote: "“So many books, so little time.”",
    name: "Frank Zappa"
  }, {
    quote: "“You only live once, but if you do it right, once is enough.”",
    name: "Mae West"
  }, {
    quote: "“Be the change that you wish to see in the world.”",
    name: "Mahatma Gandhi"
  }, ];
    var r = Math.floor((Math.random() * quoteOptions.length));
   console.log(quoteOptions[r]);
 //-----------------------------------------------------------------------------------
console.log(`2. Create a random food generator for each day of the week!`) 
var myFood = [
  "Apples",
  "Bananas",
  "Pears",
  "Eggs",
  "Meat",
  "Soup",
  "Vegetables",
];

var randomItem = myFood[Math.floor(Math.random()*myFood.length)];

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var randomDay = days[Math.floor(Math.random()*days.length)];
console.log("My food for "+ randomDay+" is "+ randomItem);
//-----------------------------------------------------------------------------------
console.log(`3. Find out how many days there are till the end of a given month. `)
function getMonthDaysLeft(){
    date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();
}
console.log("the days there are till the end of a given month is "+getMonthDaysLeft());
//-----------------------------------------------------------------------------------
console.log(`4. Create a function that accepts two strings as arguments. Check if these words are anagrams. `)
function compare (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}
compare("yaser","aserj");
console.log(`5.Check what zodiac sign a person is depending on their birthdays!Zodiacs:aries,taurus,gemini etc.`)

//let Zodiacs=["Aries dates","Taurus dates","Gemini dates","Cancer dates"	,"Leo dates","Libra dates","Scorpio dates","Sagittarius dates","Virgo dates","Capricorn dates","Aquarius dates","Pisces dates"];
	
//let birthDays=["March 21 – April 19","April 20 – May 21","May 21 – June 21","June 21 – July 22","July 23 – August 22","September 23 – October 23","October 23 – November 21","November 22 – December 21","August 23 – September 22","December 22 – January 20","January 20 – February 19","February 19 – March 20"];


   var month=0,day=0;
   function Zodiacs(day,month){
    var zodiacSigns = [
      'capricorn',
      'aquarius',
      'pisces',
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius']
     
  
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
      console.log (zodiacSigns[0]);
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        console.log (zodiacSigns[1]);
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        console.log (zodiacSigns[2]);
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        console.log (zodiacSigns[3]);
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        console.log (zodiacSigns[4]);
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        console.log (zodiacSigns[5]);
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        console.log (zodiacSigns[6]);
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        console.log (zodiacSigns[7]);
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        console.log (zodiacSigns[8]);
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        console.log (zodiacSigns[9]);
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        console.log (zodiacSigns[10]);
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        console.log (zodiacSigns[11]);
    }
}
Zodiacs(4,4);
Zodiacs(4,1);
Zodiacs(4,2);
Zodiacs(4,3);
Zodiacs(4,5);
Zodiacs(20,6);
Zodiacs(12,7);
Zodiacs(13,8);
Zodiacs(14,9);
Zodiacs(4,12);

function *fibonacci(n = null, current = 0, next = 1) {
    if (n === 0) {
      return current;
    }
  
    let m = n !== null ? n - 1 : null;
  
    yield current;
    yield *fibonacci(m, next, current + next);
  }
   
  let [...first10] = fibonacci(10);
  console.log(first10)


