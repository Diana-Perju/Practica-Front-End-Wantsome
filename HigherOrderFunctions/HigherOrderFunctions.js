
function Account() {
    this.name = "rr";
    this.arr = [7, 2, 3];
    this.newArr = [...this.arr, 0, 1];
    return { age: 3, ...this };
}

var x = new Account();
console.log(x);

/*var arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

function filterFn(arr, fn) {
 console.log({arr, Myfn});
 var result = [];
 for (var i = 1; i < arr.length; i++) {
    arr.push(i);
    console.log("fn result = ", myFn(arr[0]));
    }
    return result;
}

function isOdd(el) {
return el % 2 === 1;  
}

function isEven(el) {
return el % 2 === 0;  
}

function gtTwo(el) {
return el > 2;
 }

 function modify(arr, fn) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
        console.log("fn result = ", myFn(arr[0]));
        }
        return result;
    }


function findFn(arr, fn) {
    var result;
    for (let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
    return {
        index: 1,
    }
        }
     }
    }

console.log(findFn(arr));
     

console.log(filterFn(arr, isOdd));
console.log(filterFn(arr, isEven));
console.log(filterFn(arr, gtTwo));



/*(function myFn(name) {
    console.log("Hi " + name);
})("random")


/*var array1 = [1, 2, 3, 4];

var found = array1.find(function(element) {
  return element % 2 === 0;
});

console.log(found);

*/
