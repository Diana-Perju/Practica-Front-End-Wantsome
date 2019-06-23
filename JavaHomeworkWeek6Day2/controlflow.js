var temps = Number(prompt("Input temp"));
var tempScale = prompt("Input tempScale");


if (tempScale === "F") { 
     temps = (temps-32) * 5/9; 
     alert(temps);
    } else if (tempScale === "C") { 
    temps = (temps * 9/5) +32; 
    alert(temps);
    } else {
        alert("Invalid input");
    }
 
/*var a = prompt('First GCD:')
var b = prompt('Second GCD:')
var divisor = 2;
var greatest = 1;
if (a < 2 || b <2)
console.log(1)
while (a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0){
        cmmdc = divisor;
    }
    divisor++;
}
console.log(cmmdc);

/* var int = prompt("Control Flow n factorial");
var total = 1;
for(i = int; i > 1; i--) {
    total = i * total;
}
console.log(total);
*/