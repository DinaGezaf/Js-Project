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
var regMsg = /^[A-Za-z0-9.]{2,1000}$/;
var count = 0;

////Events on Every Input
Name.onkeyup = function () {
  ///Name
  Name.style.borderColor = "#CC7351";
  if (!regName.test(Name.value) || Name.value == "" || Name.value.length < 3) {
    spanName.style.display = "block";
    return false;
  } else {
    spanName.style.display = "none";
  }
};
email.onkeyup = function () {
  ///Email
  email.style.borderColor = "#CC7351";
  if (!regEmail.test(email.value) || email.value == "") {
    spanEmail.style.display = "block";
    return false;
  } else {
    spanEmail.style.display = "none";
  }
};
password.onkeyup = function () {
  ///Password
  password.style.borderColor = "#CC7351";
  if (!regPassword.test(password.value) || password.value == "") {
    spanPassword.style.display = "block";
    return false;
  } else {
    spanPassword.style.display = "none";
  }
};
password2.onkeyup = function () {
  ///Confirm Password
  password2.style.borderColor = "#CC7351";
  if (password2 == "" || password2.value !== password.value) {
    spanPassword2.style.display = "block";
    return false;
  } else {
    spanPassword2.style.display = "none";
  }
};
message.onkeyup = function () {
  ///TextArea
  message.style.borderColor = "#CC7351";
  if (!regMsg.test(message.value) || message.value == "") {
    spanMsg.style.display = "block";
    return false;
  } else {
    spanMsg.style.display = "none";
  }
};

///Submit
form.onsubmit = function validateForm(e) {
  e.preventDefault();
  ///Name
  if (!regName.test(Name.value) || Name.value == "" || Name.value.length < 3) {
    spanName.style.display = "block";
    result.innerHTML = "Form is not valid";
    ///Email
    if (!regEmail.test(email.value) || email.value == "") {
      spanEmail.style.display = "block";
      ///Password
      if (!regPassword.test(password.value) || password.value == "") {
        spanPassword.style.display = "block";
        ///Confirm Password
        if (password2.value !== password.value || password2.value == "") {
          spanPassword2.style.display = "block";
          ///TextArea
          if (!regMsg.test(message.value) || message.value == "") {
            spanMsg.style.display = "block";
          } else {
            spanMsg.style.display = "none";
            result.innerHTML = "Your data saved successfully";
          }
        } else {
          spanPassword2.style.display = "none";
        }
      } else {
        spanPassword.style.display = "none";
      }
    } else {
      spanEmail.style.display = "none";
    }
  } else {
    spanName.style.display = "none";
  }
  return true;
};

//backtotop
backtotop.onclick = function () {
  window.scrollTo(0, 0);
};
