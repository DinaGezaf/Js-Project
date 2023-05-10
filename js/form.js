var form = document.getElementsByTagName("form")[0];
///inputs
var Name = document.getElementsByName("name")[0];
var email = document.getElementsByName("email")[0];
var password = document.getElementsByName("password")[0];
var password2 = document.getElementsByName("password2")[0];
var message = document.getElementsByTagName("textarea")[0];

///span
var spanName = document.getElementsByClassName("namespan")[0];
var spanEmail = document.getElementsByClassName("emailspan")[0];
var spanPassword = document.getElementsByClassName("passwordspan")[0];
var spanPassword2 = document.getElementsByClassName("password2span")[0];
var spanMsg = document.getElementsByClassName("msgspan")[0];

var result = document.getElementsByClassName("result")[0];
var backtotop = document.getElementById("backtotop");

var regName = /^[A-Za-z]+$/;
var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var regPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var regMsg = /^[A-Za-z0-9.\s]{2,1000}$/;
var count = 0;

//Validate Function

function validateField(inputField, regex, errorSpan, allowSpaces) {
  inputField.style.borderColor = "#CC7351";
  let value = inputField.value;
  if (!allowSpaces) {
    value = value.trim();
  }
  if (value === "" || !regex.test(value)) {
    errorSpan.style.display = "block";
    return false;
  } else {
    errorSpan.style.display = "none";
    return true;
  }
}

function validateConfirmPassword() {
  password2.style.borderColor = "#CC7351";
  if (password2.value.trim() === "" || password2.value !== password.value) {
    spanPassword2.style.display = "block";
    return false;
  } else {
    spanPassword2.style.display = "none";
    return true;
  }
}

function validateMessageField(inputField, regex, errorSpan) {
  inputField.style.borderColor = "#CC7351";
  let value = inputField.value.trim();

  if (value === "" || !regex.test(value)) {
    errorSpan.style.display = "block";
    return false;
  } else {
    errorSpan.style.display = "none";
    return true;
  }
}

///Events on Every Input
Name.onkeyup = function () {
  validateField(Name, regName, spanName, true);
};

email.onkeyup = function () {
  validateField(email, regEmail, spanEmail, true);
};

password.onkeyup = function () {
  validateField(password, regPassword, spanPassword, true);
};

password2.onkeyup = function () {
  validateConfirmPassword();
};

message.onkeyup = function () {
  validateField(message, regMsg, spanMsg);
};

form.onsubmit = function (e) {
  e.preventDefault();

  if (
    !validateField(Name, regName, spanName, true) ||
    !validateField(email, regEmail, spanEmail, true) ||
    !validateField(password, regPassword, spanPassword, true) ||
    !validateConfirmPassword() ||
    !validateField(message, regMsg, spanMsg)
  ) {
    result.innerHTML = "Form is not valid";
  } else {
    result.innerHTML = "Your data saved successfully";
  }
};

message.onkeyup = function () {
  validateField(message, regMsg, spanMsg, false);
};

//backtotop
backtotop.onclick = function () {
  window.scrollTo(0, 0);
};
