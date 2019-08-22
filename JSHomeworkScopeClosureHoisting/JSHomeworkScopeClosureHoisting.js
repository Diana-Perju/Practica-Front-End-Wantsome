



/*
//9. Creati o functie numita buildFun care primeste un numar N ca argument
si returneaza un array cu N elemente de tip function. Cand apelam pe rand
functiile din acest array ar trebui sa logam la consola numerele de la
0 la N.


function buildFun(n) {
  var arr = [];
  for(i = 0; i <= n; i++) {
    arr.push(i);
  }
  console.log(arr);
}
console.log(typeof buildFun(100))


// 8.
Creati o functie cu un singur parametru de tip numar si returneaza o alta
functie cu un parametru de tip numar. Functia copil returneaza suma
dintre argumentul primei functii si argumentul ei.
const add3 = makeAdder(3)
const add5 = makeAdder(5)
add3(10) -> 13
add3(5) -> 8
add5(10) -> 15




function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
const add5 = makeAdder(5);

console.log(add3(10));
console.log(add3(5));
console.log(add5(10));



//7. Creati o functie care ridica la patrat fiecare cifra a unui numar.
squareDigits(943) -> 81169; 9*9 = 81, 4 * 4 = 16, 3 * 3 = 9
squareDigits(12) -> 14
squareDigits(682) -> 36644



function numToSqr(num){
    var i, sqr=[], n;
    num = num.toString();
    for(i = 0; i < num.length; i++){
        n = Number(num[i]);
    sqr.push(n*n);
    }
    return Number(sqr.join(""));
}

console.log(numToSqr(943))
console.log(numToSqr(12))
console.log(numToSqr(682))



//6. Creati o functie care returneaza al N-lea numar din seria lui Fibonacci.
fibonacci(7) -> 13
fibonacci(9) -> 44


function fibonacci_series(n) {
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
}
console.log(fibonacci_series(7));
console.log(fibonacci_series(9));



// 5. Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un
string/numar.
removeDuplicates('aabcdeef') -> 'abcdef'
removeDuplicates(122334) - 1234




function removeDups(str){
    var unique = '';
    for(var i = 0; i < str.length; i++){
        if(unique.indexOf(str[i])==-1){
            unique += str[i];
        }
    }
    return unique;
}
    console.log(removeDups("aabcdeef"));
    console.log(removeDups("122334"));



//4. Creati o functie cu doi parametri de tip string si care verifica daca
cele doua cuvinte formeaza o anagrama.

function isAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    var sortStr1 = str1.split('').sort().join('');
    var sortStr2 = str2.split('').sort().join('');

    return (sortStr1 === sortStr2);
}

console.log(isAnagram('ana','naa')); 
console.log(isAnagram('no','yes')); 
console.log(isAnagram('foo','oof)); 


//3. Creati o functie care primeste o lista de persoane de forma {name, age} si
returneaza doar pe cei cu varsta peste 18 ani. Modificati functia astfel
incat conditia de filtrare sa poate fi controlata printr-o functie
pasata ca argument.


/*var person1 = {
name: "Adult1",
age: 24
};
  
var person2 = {
name: "Adult2",
age: 18
};

var person3 = {
name: "Minor",
age: 15
};
  
  function adultPerson(person) {
  
    if (person.age >= 18) {
  return person.name;
    }
  
    else {
  return person.name;
    }
  }
  
console.log(adultPerson(person1));
console.log(adultPerson(person2));
console.log(adultPerson(person3));




//2. Scrieti o functie care sa aiba output-ul asta
*
* *
* * *
* * * *
* * * * *

function truncateString(str, num) {
    if (num > 0) {
    return str.slice(0, num);
    } else if (str.length = num){
    return str;
    } return str.slice(0, num);
    }

console.log(truncateString("Abcdef", 1))
console.log(truncateString("Abcdef", 2))
console.log(truncateString("Abcdef", 3))
console.log(truncateString("Abcdef", 4))
console.log(truncateString("Abcdef", 5))


//1. Creati o functie care primeste ca argument un sir de caractere si gaseste cel mai lung cuvant din acest sir. Daca doua cuvinte au aceeasi lungime returnati primul cuvant cu acea lungime.

function longest(str) {
    let len = 0, lngst;
    for (let i = 0; i < str.length; i++) {
    if (str[i].length > len) {
    len = str[i].length;
    lngst = str[i];
    } 
    }
    
    return lngst;
    }
    let str = ['a', 'ab', 'abcdefgh1', 'abcdefgh2', 'abcd', 'abcde'];
    console.log(longest(str));
    */