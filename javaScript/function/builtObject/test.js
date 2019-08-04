console.log(` ------------------------------------------------------------ `);
function vehicle(type,speed){
    this.type=type;
    this.speed=speed;
}
vehicle.prototype.type="Mercedes";
vehicle.prototype.speed=80;
vehicle.prototype.wheels=4;
vehicle.prototype.move=function(){
    console.log(`The type of vehicle is ${this.type } and speed is ${this.speed}`)
};

vehicle.prototype.stop=function(){
    console.log(`The type of vehicle is ${this.type } and speed is stop`)
};
 let myCar=new vehicle("Mazda",60)
 myCar.move();
 myCar.stop();

 console.log(myCar.wheels);//4
 myCar.move=function(){return "Hello!";}
console.log(myCar.move()); //Hello!

myCar.autoPilot=function(){return `This ${this.type} is on autopilot mode!`}
console.log(myCar.autoPilot()); //This car is on autopilot mode!