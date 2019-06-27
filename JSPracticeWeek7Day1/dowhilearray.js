
function dif(x, y) {
const dif = x - y;
console.log("dif = ",dif);
}

dif(6, 3);



//function expressions

/*function add(a, b) {
  const sum = a + b;
  console.log("sum =", sum);
}
add(3, 6);
add(5, 6);

/*var greet = function() {
  console.log("hello");
}

greet();

//function declaration
/*function greet() {
  console.log("hello");
  return 4;
}

var x = greet();
console.log(x);

/*var array = ["cat cat", "dog dog"];
var dictionary = {
  cat: "cat cat",
  dog: "dog dog",
};

console.log(array[1]);
console.log(dictionary.cat);


/*var array = [2, 3, 1, 9, 8];
var minvalue = array[0];
for (var i = 0; i < array.length; i++) {
  if (array[i] < minvalue) {
    minvalue = array[i];
  }
}
console.log(minvalue);


/*var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
var min = Math.min.apply(Math, arr)
console.log(min)


/*var data = ["String", 1, null, false, {random:"whatever"}, undefined, Symbol('xyz')];
console.log(typeof data[0]);
console.log(typeof data[1]);
console.log(typeof data[2]);
console.log(typeof data[3]);
console.log(typeof data[4]);
console.log(typeof data[5]);
console.log(typeof data[6]);


/* var k = 1;
var j = 1;

while (k <= 100) {
    console.log (k);
    k++;
}

console.log("text");

do {
    console.log(j);
    j++;

} while ( j <= 100);
*/