
function Prime(number) {
  if (number === 2) {
    return true;
  } else if (number > 1) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      } else if (number === i * i);
      return true; 
    }
  }
}

console.log(Prime(9));


/*function minArray(array) {

var minvalue = array[0];
for (var i = 0; i < array.length; i++) {
if (array[i] < minvalue) {
minvalue = array[i];
  }
}
console.log(minvalue);
}
minArray([2, 3, 1, 9, 8]);



/*var helloWorldInLang = function (lang) {
    if (lang === "en") {
    console.log("Hello World");
    } else if (lang === "es") {
    console.log("Hola Mundo");
    } else if (lang === "de") {
    console.log("Hallo Welt");
    } else {
    console.log("Hello World");
}
}

helloWorldInLang ("de")
*/
