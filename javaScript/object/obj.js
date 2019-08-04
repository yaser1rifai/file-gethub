let user={
    name:"john",
    age:34,
}
console.log(user.age);//34

user.address="ChinaTown";
console.log(user);//{ name: 'john', age: 34, address: 'ChinaTown' }

delete user.age;
console.log(user);//{ name: 'john', address: 'ChinaTown' }

let user2={
    name:"Jane",
    age:30,
   "Likes Birds":true,
}
console.log(user2);

user2.age=40;
console.log(user2);//{ name: 'Jane', age: 40, 'Likes Birds': true }

user2["age"]=50;
console.log(user2);//{ name: 'Jane', age: 50, 'Likes Birds': true }

user2["Likes Birds"]=false;
console.log(user2);//{ name: 'Jane', age: 50, 'Likes Birds': false }

let userAdd="Address";
//COMPUTING THE PROPERTIES OR COMPUTED THE PROPERTIES
let user3={
    [userAdd+"-BlahBhal"]:"chinaTown",
}
console.log(user3);//{ 'Address-BlahBhal': 'chinaTown' }
 
let user4={
   true:5,
   return:6,
   var:7,
}
console.log(user4.true+user4.var-user4.return);//6


