
  
  /*

  //Event Handler (incomplete)
  var table = document.createElementbyId("mytable");

  table.onclick = function insertRow(table, rows) {

  var rows = table.getElementsByTagName("tr");
  table.innerHTML = rows.addEventListener("click", insertRow, false);
}

insertRow();



//Event Listener
function displayDate(a, b) {

  var b = document.getElementById("date");

  var a = new Date();
  b.textContent = a.getHours() + ':' + a.getMinutes();

  b.style.backgroundColor="orange";
  b.style.color="green";

};




/*
function chessTable() {
  var table = document.createElement("table");
  
  for (var i = 0; i < 8; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < 8; j++) {
          var td = document.createElement("td");
          if((i + j)%2 !== 0) {
            td.style.backgroundColor = "black";
          } 

          td.style.height = "30px";
          td.style.width = "30px";
           tr.appendChild(td);
      }

         table.appendChild(tr);
    }

    document.body.appendChild(table);
}

chessTable();



/*
function insertion(tag, id, text) {
  
var el1 = document.createElement(tag);

el1.setAttribute("id", id);
el1.textContent = text;
console.log(el1);

document.body.appendChild(el1)
}

insertion ("p", "top", "inserted child text node");

insertion("a", "href", "http://google.com");




/*
const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false
    }];
  
  // Creati o pagina web care are un h1 cu "Book List"
  // adugati un script style unde sa tinem js-ul
  //Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
  //BONUS: folositi ul si li pentru a face display la carti
  //BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
  //BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.


  function showLinks(links) {

var x = document.links;
var txt = "";
var i;
for (i = 0; i < x.length; i++) {
  txt = txt + x[i].href;
}
}
  */