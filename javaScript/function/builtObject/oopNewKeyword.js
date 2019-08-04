console.clear();

//new keyword
console.log(`------------------- general the function `)
function vehicle(type,speed){
    this.type=type;
    this.speed=speed;

    this.move=function()
    {console.log(`I am a ${this.type}, moving at a speed of ${this.speed}.`)}

    this.stop=function()
    { console.log(`I am a ${type}.  I have stopping moving !`)}

   console.log(`I am a ${this.type}. I move at a speed of ${this.speed}.`)
}


vehicle("car",80)              //I am a car. I move at speed of 80
vehicle("truck",280)          //I am a truck. I move at speed of 280
console.log(`------------------- make instances `)
let car=new vehicle("car",80); //I am a car. I move at speed of 80
console.log(car)              //vehicle {}//vehicle { type: 'car', speed: 80 }
car.move();                   //I am a car, moving at a speed of 80.
console.log(vehicle)          //[Function: vehicle]

let bus=new vehicle("bus",200);//I am a bus. I move at a speed of 200.
console.log(bus);            //vehicle { type: 'bus', speed: 200 }
                            //vehicle { type: 'bus', speed: 200, move: [Function] }
bus.stop();                 // I am a bus.  I have stopping moving !
console.log(`----------------------------viper-------------------------------`);
vehicle.viper=function(){
    console.log(`The vehicle has a viper!`);
}

vehicle.viper();//The vehicle has a viper!
//car.vehicle.viper();

let truck=new vehicle("truck",200)
console.log(truck);//vehicle { type: 'truck', speed: 200, move: [Function], stop: [Function] }
console.log(vehicle) //{ [Function: vehicle] viper: [Function] }


