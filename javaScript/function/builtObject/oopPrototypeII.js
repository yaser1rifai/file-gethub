console.clear();
/* 
//prototype
//console.log(`------------------- general the function `)
function Vehicle(type,speed){
    this.type=type;
    this.speed=speed;
}

//default values
 Vehicle.prototype.speed=80;
Vehicle.prototype.type="Vehicle";
Vehicle.prototype.wheels=4; 
Vehicle.prototype.move=function(){console.log (`I am a ${this.type}. I move at a speed of ${this.speed}.`)}
Vehicle.prototype.stop=function()  { console.log(`I am a ${this.type}.  I have stopping moving !`)}
console.log(`//-------------------------------------------------------`);
//To create sub_class(Car) of class(Vehicle) through Prototype_Based Inheritance
function Car(speed){Vehicle.call(this,"car",speed)}
Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.emergencyStop=function(){
    //abs is anti-breaking system
    this.abs=true;
    this.stop(); //inherited from Vehicles class
}

let myCar=new Car(10);
console.log(myCar);//vehicle { type: 'car', speed: 10 }

console.log(`--------------------------------------`);
myCar.move();//I am a car. I move at a speed of 10.
myCar.emergencyStop();//I am a car.  I have stopping moving !
console.log(myCar.wheels)//4

 */

 class Vehicle{
     constructor(type,speed){
     this.type=type;
     this.speed=speed;
 }
move(){console.log (`I am a ${this.type}. I move at a speed of ${this.speed}.`)}
stop(){ console.log(`I am a ${this.type}.  I have stopping moving !`)}
static info(){console.log(`Vehicles is a base vehicles class`)}
}

let rustCar=new Vehicle("Rusty Car",40);
rustCar.move();  //I am a Rusty Car. I move at a speed of 40.
console.log(`--------------------------------------`);
rustCar.stop();//I am a Rusty Car.  I have stopping moving !
console.log(`--------------------------------------`);
Vehicle.info();//Vehicles is a base vehicles class
console.log(`--------------------------------------`);
//sub class
class Car extends Vehicle{
    constructor(speed){
    super("car",speed);
    this.abs=false;
}
// extends the stop method
emergencyStop(){
    console.log(`Car-emergencyStop: ${this.type}, ${this.speed}`)
    this.abs=true;
    this.stop();
}
}
let subCar=new Car(10);
    console.log(subCar);//Car { type: 'car', speed: 10, abs: false }
    console.log(`--------------------------------------`);
    subCar.stop();//I am a car.  I have stopping moving !
    console.log(`--------------------------------------`);
    subCar.emergencyStop();//I am a car.  I have stopping moving !

    class SuperCar extends Car{
        constructor(speed){
            super(200);
            this.jet=false;
    }
move(){console.log (`superCar.move: ${this.type}. ${this.speed}.`)
this.jet=true;
super.move()}
}

let coolCar=new SuperCar();
console.log(`--------------------------------------`);
console.log(coolCar);//SuperCar { type: 'car', speed: 200, abs: false, jet: false }
console.log(`--------------------------------------`);
coolCar.stop();//I am a car.  I have stopping moving !
console.log(`--------------------------------------`);
coolCar.emergencyStop();
//Car-emergencyStop: car, 200
//I am a car.  I have stopping moving !







