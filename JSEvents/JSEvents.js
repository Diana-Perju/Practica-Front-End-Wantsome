

var btn = document.getElementById("button");
var usr = document.getElementById("username");
var pas = document.getElementById("password");
var cfpas = document.getElementById("cfpassword");
var frm = document.querySelector("form");

function isRequired(value) {
  return !!value;
}

function hasMinChars(numOfChar) {
  return function(value) {
    return value.length >= numOfChar;
  };
}
const hasMinLength = hasMinChars(4);

function hasValidPw(value) {
  var pwReg = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{0,}/);
  return pwReg.test(value);
}

function hasConfPw(value, cfpasswordValue) {
  return value === cfpasswordValue;
}

/*

frm.addEventListener("keyup", onChange);
const formState = {
  isValid: true,
  fields: { username: true, password: true, cfpassword: true }
};

function onChange(e) {
  const isUsernameValid = isRequired(usr.value) && hasMinLength(usr.value);
  const isPwValid = isRequired(pas.value) && hasValidPw(pas.value);
  const isConfirm =
    isRequired(cfpas.value) && hasConfPw(cfpas.value, pas.value);
  formState.fields.username = isUsernameValid;
  formState.fields.password = isPwValid;
  formState.fields.cfpassword = isConfirm;
  formState.isValid = isUsernameValid && isPwValid && isConfirm;
  usr.nextElementSibling.innerText = isUsernameValid ? "" : "Error";
  console.log(formState);
}





/*const formState = {
    isValid: true,
    fields: {
        username: true,
        password: true,
        confirmPassword: true,
    }
}


*/
