// Selectati fiecare element folosind metodele ajutatoare
var allel = document.querySelector("body");
allel.style.color = "purple";

// primul element - dupa id - getElementById
var elem = document.getElementById("test");
elem.style.color = "red";
// al doilea si al treilea - dupa clasa - getElementsByClassName
var x = document.getElementsByClassName("im");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "blue";
}
// elementele de tip section - dupa tag - getElementsByTagName
var sec = document.getElementsByTagName("section");
var y;
for (y = 0; y < sec.length; y++) {
  sec[y].style.backgroundColor = "orange";
}
// La fiecare selectie vom schimba background color-ul - pentru fiecare metoda vom folosi o culoare diferita
