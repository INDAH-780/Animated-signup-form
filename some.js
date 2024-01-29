function myf() {
  alert("Hooray!");
}

let element = document.querySelector("button");
element.addEventListener("click", myf);

function showPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`your password is  ${passwordInput.value}`);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);

function showSignUpFormValues(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let usernameInput = document.querySelector("#username-input");
  alert(` email is ${emailInput.value}`);
  alert(`username is ${usernameInput.value}`);
}

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", showSignUpFormValues);
