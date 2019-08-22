const arr = [];

for (var i = 0; i < 2; i++) {
    function iterator() {
        return i 
    }
    arr.push(iterator);
    }

    for (var i = 0; i < arr.length; i++) {
   arr[i]()
    }

console.log(arr);

/*const arr = [];

for (var i = 0; i < 2; i++) {
    function iterator() {
        return i 
    }
    arr.push(iterator);
    }

    for (var i = 0; i < arr.length; i++) {
   arr[i]()
    }

console.log(arr);


/*function makeDiff(d) {
    function inner(s) {
        return d - s
    }
  return inner;
}

console.log(makeDiff(10)(3));

//const diff10 = makeDiff(10)
//console.log(diff10(2));


/*
//Closures
function outerFunction() {
    const outer = "I see";
    function innerFunction() {
        console.log(outer);
    }

    return innerFunction;
}

const innerFn = outerFunction();
innerFn();


/*
//Hoisting

console.log(x);
var x = 2;
console.log(x);


/*function myFn() {
    var x = "Inside parent";

    function innerFn() {
        var y = "Inside the child";
        console.log(x);
        console.log(y);
    }

    innerFn();
}
myFn();




/*function testFn() {
    var x = 2;
    for (var i = 0; i < 1; i++) {
    let y = 3;
    if (y === 3);
    var x = 2;

}

console.log(x);
console.log(y);
}

console.log(x);
testFn();

/*const arr = [];

for (var i = 0; i < 2; i++) {
    arr.push(i);
    }

console.log(arr);


/*var a = 1;

function foo ()  {
    var a = 10;
    console.log(a);
}

console.log(a);
foo();

var i = 10;
for (i = 0; i < 5; i++); {
}
console.log(i);


function testFn() {
    var x = 2;
    let y = 2;
}

testFn();
*/