function calculate_age (data) {
    var now = new Date();
    var age = now - data;
    age = Math.floor(age/1000/60/60/24/365);
    return age;
    };
    
    console.log(calculate_age(new Date(1980, 09, 1)));

