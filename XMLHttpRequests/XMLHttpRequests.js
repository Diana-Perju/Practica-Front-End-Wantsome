

/*
var serverURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

function quoteGenerator() {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        console.log(this);
        if(this.readyState === 4) {
            var response = JSON.parse(this.response);
           document.getElementById("quote").innerHTML = response[0];
        }
    }
    request.open("GET", serverURL);
    request.send();
}
 */