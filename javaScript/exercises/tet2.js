function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.eyeColor,myFather.age);
 
