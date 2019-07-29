
//used new

function Calculator() {
  this.a;
  this.b;

  this.read = function(a, b) {
    this.a = a;
    this.b = b;
    console.log(`Numbers are read as: ${a}, ${b}`);
  };

  this.sum = function() {
    var sum = this.a + this.b;
    console.log("Sum result is: " + sum);
  };

  this.diff = function() {
    var diff = this.a - this.b;
    console.log("Difference result is: " + diff);
  };

  this.divide = function() {
    var divide = this.a / this.b;
    console.log("Divide result is: " + divide);
  };

  this.mult = function() {
    var mult = this.a * this.b;
    console.log("Multiply result is: " + mult);
  };
}

  var calc = new Calculator();
  calc.read(20, 10);
  calc.sum();
  calc.mult();
  calc.diff();
  calc.divide();


/*
//used bind, call, apply (read nu prea iese :-) )
var calculator = {
  a: 20,
  b: 10
};

function read() {
  console.log(this.a, this.b);
}

function sum() {
  return this.a + this.b;
}
function diff() {
  return this.a - this.b;
}

function mult() {
  return this.a * this.b;
}
function divide() {
  return this.a / this.b;
}


console.log(sum.call(calculator));
console.log(diff.call(calculator));
console.log(mult.call(calculator));
console.log(divide.call(calculator));

console.log(sum.apply(calculator));
console.log(diff.apply(calculator));
console.log(mult.apply(calculator));
console.log(divide.apply(calculator));

var res1 = sum.bind(calculator);
console.log(res1());

var res2 = diff.bind(calculator);
console.log(res2());

var res3 = divide.bind(calculator);
console.log(res3());

var res4 = mult.bind(calculator);
console.log(res4());
*/
