console.log(`------------------round-------------------------`);
function MathRound(number){
    return Math.round(number);
}
console.log(MathRound(2.5));//
console.log(`------------------ceil-------------------------`);
function MathCeil(number){
    return Math.ceil(number);
}
console.log(MathCeil(1.4));
console.log(`------------------floor-------------------------`);
function MathFloor(number){
    return Math.floor(number);
}
console.log(MathFloor(1.4));
console.log(`------------------min-------------------------`);
function MathMin(n1,n2,n3){
    let minvalue=Math.min(n1,n2,n3);
    return minvalue;
}
console.log(MathMin(3,5,2));
console.log(`------------------random-------------------------`);
console.log(Math.random());
console.log(`------------------math2-------------------------`);
function mathMin2(){
    let arrayOfNumber=[-9,435,86767,5,0.32];
    let smallElement;
    let smallNum;
    let element;
    for(let i=0;i<arrayOfNumber.length;i++){
         element=arrayOfNumber[i];
         for(let j=0;j<arrayOfNumber.length;j++){
            smallElement=arrayOfNumber[j];
            smallNum=Math.min(arrayOfNumber[i],arrayOfNumber[j])
         }

    return smallNum;
    }
}
    console.log(mathMin2());//
    console.log(`------------------math3-------------------------`);
    function mathMin3(){
        let arrayOfNumber=[-9,435,86767,5,0.32];
        return Math.min(...arrayOfNumber);
    }
    console.log(mathMin3());
    console.log(`------------------square root-------------------------`);
    function squareRoot(number) {
        return console.log(Math.sqrt(number));
      }
      squareRoot(81);
      console.log(`------------------max-------------------------`);
    function mathMax(){
        let arrayOfNumber=[123,0.001,-123,0,332];
        return Math.max(...arrayOfNumber);
    }
    console.log(mathMax());
    console.log(`------------------ Date  -------------------------`);
    // Date 
    //getTime
    let myDate=new Date();
    console.log(myDate);//2019-05-14T09:17:17.270Z

    let getTime=myDate.getTime();
    console.log(getTime);//1557825437270

    //getYear
    let getYear=myDate.getFullYear();
    console.log(getYear);//2019

    //getMonth
    let getMonth=myDate.getMonth();
    console.log(getMonth);//4

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let getMonthName=months[myDate.getMonth()];
    console.log(getMonthName);

    //getDate
    let getDate=myDate.getDate();
    console.log(getDate);//14

    //getHours
    let getHours=myDate.getHours();
    console.log(getHours);//11

    console.log(Date.now());
    console.log(`---------------------------------`);
    let start=new Date();
    for(let i=0;i<100000000;i++){
        const doSomThing=i*i*i;
    }
    let end=new Date();
    console.log(`The loop took ${end-start} ms.`)//the loop took 6 ms




