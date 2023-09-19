const form = document.querySelector("#form");
const emailField = document.querySelector(".email-field");
const email = document.querySelector("#email");
const passField = document.querySelector("#password-field");
const password = document.querySelector("#password");

//email validation

function checkEmail() {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!email.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class
  }
  emailField.classList.remove("invalid"); //removing invalid class
}

//password validation

function checkPassword() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class
  }
  passField.classList.remove("invalid"); //removing invalid class
}

document.getElementById("btn-claim").addEventListener("click", function (e) {
  e.preventDefault();
  checkEmail();
  checkPassword();
});
