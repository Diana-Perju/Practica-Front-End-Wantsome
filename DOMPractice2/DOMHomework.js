// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
var chFont = document.querySelector("body");
chFont.style.fontFamily = "Arial, sans-serif";


// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
var elemName = document.getElementById("name").innerHTML = "Diana Perju";
var favDrink = document.getElementById("fav-drink").innerHTML = "Coca-Cola Cherry";
var bornPlace = document.getElementById("born-place").innerHTML = "Bacau";

// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
var listItems = document.getElementsByTagName('li');
for(var i = 0; i < listItems.length; i++) {
    listItems[i].classList.add("listitem");
    listItems[i].style.color = "red";
}


// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

var image = document.querySelector('img');
image.setAttribute('src', 'https://www.verywellmind.com/thmb/uKtEtZCgCL2vXZtTM654fiZDPM0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-567150195-58bc87ad3df78c353c360c56.jpg');
image.setAttribute('width', '500px');
document.body.appendChild(image);