const numbers =[1, 2, 3, 4, 5, 6, 7];

const result3 = numbers.filter(function(element) {
console.log("in filter ", element);
return element % 2 === 0;
});



console.log("result 3 = ", result3);


/*var singers = ["Dua Lipa", "Gabriel Cotabita", "Nu am", "The Weekend", "Elena Gheorghe"];

const result = singers.findIndex(function(element) {
  console.log("* -> ", element);
  return element.name === "Gabriel Cotabita";
});

console.log("Result = ", result);


/*var singers = ["Dua Lipa", "Gabriel Cotabita", "Nu am", "The Weekend", "Elena Gheorghe"];

console.log(singers.indexOf("Gabriel Cotabita"));


/*var venit = function(ren) {
  var taxa;
  if(ren <= 30000) {
    return "Taxa este 0%";
  }
  if(ren > 30000 && ren < 50000); {
    taxa = ren * 0.15;
  }
  return "Taxa este 15%. La anaf e " + taxa;
}

if(ren > 50000 && ren < 100000); {
  taxa = ren * 0.35;
}
return "Taxa este 35%. La anaf e " + taxa;
}

console.log(venit(500001));


/*function repeatstr(str, n) {
  var result = " ";
    for( var i = 0; i < n; i++) {
      result += str;
    }
    return result;
}

console.log (repeatstr("Repeat ", 3))
