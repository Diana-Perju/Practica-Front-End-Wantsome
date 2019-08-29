const form = document.querySelector("form");

form.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(r => r.json())
    .then(res => {
      if (res.error) {
        document.getElementById("error-container").innerText = res.error;
      } else {
        window.location.assign("https://4ew7x.csb.app/users.html");
      }
    });
}

const btn = document.getElementById("getPeople");

btn.addEventListener("click", getPeople);

function getPeople() {
  fetch("https://reqres.in/api/users")
    .then(r => r.json())
    .then(res => renderPeople(res.data));
}

function renderPeople(people = []) {
  const container = document.getElementById("people-container");
  console.log("ii afisez pe ->", people);
  people.forEach(p => {
    const avatar = document.createElement("img");
    avatar.alt = p.avatar;
    avatar.src = p.avatar;
    avatar.style.height = "80px";
    avatar.style.width = "80px";
    avatar.style.borderRadius = "50%";

    const peopleEl = document.createElement("div");
    peopleEl.style.backgroundColor = "salmon";
    peopleEl.style.color = "#333";

    peopleEl.appendChild(avatar);
    peopleEl.innerHTML = `<span>
    ${p.email} ${p.last_name}
    </span>
    `;

    container.appendChild(peopleEl);
  });
}




/*
var loginButton = document.getElementById("button");
loginButton.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  var emailContent = document.getElementById("email").value;
  var passContent = document.getElementById("password").value;
  var errorParagraph = document.getElementById("err");
  var data = { email: emailContent, password: passContent };

  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
  })

    .then(response => response.json())
    .then(response => {
      if (response.error) {
       
        errorParagraph.innerText = response.error;
      } else {
        console.log("succes");
        window.location.assign("https://4ew7x.csb.app/users.html");
       
      }
    });
}





/*
function formData() {
    var elemE = document.getElementById("email").value;
    var elemP = document.getElementById("password").value;

  fetch("https://regres.in/api/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(elemE, elemP),
      }
      
  })

   .then(function(response) {
    return console.log(response);
    })

    .then(response => response.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  
var btn = document.getElementById("button");
btn.addEventListener("click", formData);
*/