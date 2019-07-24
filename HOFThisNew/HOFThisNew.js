var obj = {
  op1: 10,
  op2: 5,
};

var obj2 = {
  op3: 7,
  fn: function() {
    return this.op3;
  },

  mult: function() {
    return this.op1 * this.op3;
  }
}

console.log(obj2.mult.call({...obj,...obj2}));
console.log(obj2.mult.apply({...obj,...obj2}));

console.log(obj2.fn());


/*function greet() {
  console.log(this.name);
}

var obj = {
  name: "Name1"
};

greet.apply(obj);

//fn.call(obj, 2, "Ion");

/*
function greet() {
  console.log(this.name);
}

var obj = {
  name: "Name1"
};

greet.call(obj);


/*function greet() {
  console.log(this.name);
}

var obj = {
  name: "Name1"
};

var obj2 = {
  name: "Name2"
};

var greetName1 = greet.bind(obj);
greetName1();

var greetName2 = greet.bind(obj2);
greetName2();



/*function f() {
  return this.a;
}

var g = f.bind({ a: "sss"});
console.log(f());



/*function MakeCar(myCar, milage) {
  
  this.make = myCar;
  this.milage = milage;

  this.changekm = function changekm(km) {
  this.milage += km;
  }
  return car;
}

var car = new MakeCar("Volvo", 1000);
console.log(car);


/*function makeCar(myCar, milage) {
  var car = {};
  car.make = myCar;
  car.milage = milage;
  car.changekm = function changekm(km) {
  car.milage += km;
  }
  return car;
}

var car = makeCar("Volvo", 1000);
console.log(car);

/*var myCar = {
  make: "Volvo",
  milage: 160000,
  changekm: function(km) {

return (myCar.milage += km);
  }
};

myCar.changekm(1000);
console.log(myCar.milage);

*/