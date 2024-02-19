let userPassword = document.querySelector("#password");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email-id");
let emailInput = document.querySelector("#email");
let inputCheck = document.querySelector("#check");
let formBox = document.querySelector("#form-box");
let signUp = document.querySelector("#signup");
let formHeader = document.querySelector("#header");

userPassword.onclick = function () {
  inputCheck.innerHTML = `<span style='color:gray'>Password should be A-Z, a-z, symbols</span>`;
};
userName.onclick = function () {
  inputCheck.innerHTML = "";
};
signUp.onclick = function () {
  emailInput.remove();
  signUp.innerHTML = "Login";
  formHeader.innerHTML = "Login Form";
};
