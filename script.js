const formValidation = document.querySelector("#formValidation");
const fullNameEL = document.querySelector("#fullName");
const phoneNumberEL = document.querySelector("#phoneNumber");
const emailAddressEL = document.querySelector("#emailAddress");
const websiteURLEL = document.querySelector("#websiteURL");
const passwordEL = document.querySelector("#password");
const confirmPasswordEL = document.querySelector("#Confirmpassword");
let small = document.querySelector("small");

// Submit event listener
formValidation.addEventListener("input", (event) => {
  console.log("clicked on form");
  event.preventDefault();
  // let inputFieldValues =
  //   fullNameValidation() &&
  //   phoneNumberValidation() &&
  //   emailAddressValidation() &&
  //   urlValidation() &&
  //   passwordValidation() &&
  //   confirmPasswordValidation();
  // if (!inputFieldValues) {
  //   alert("Input Fields can not be empty");
  // } else {
  switch (event.target.id) {
    case "fullName":
      fullNameValidation();
      break;

    case "phoneNumber":
      phoneNumberValidation();
      break;

    case "emailAddress":
      emailAddressValidation();
      break;

    case "websiteURL":
      urlValidation();
      break;

    case "password":
      passwordValidation();
      break;

    case "Confirmpassword":
      confirmPasswordValidation();
      break;

    default:
      alert("Please Enter the input values");
      break;
  }
  // }
});

// validation Utility Function
function isRequired(value) {
  return value !== "" ? true : false;
}

function isBetween(length, min, max) {
  return length > max || length < min ? false : true;
}

function validateEmail(email) {
  let emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  let passwrodPattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return passwrodPattern.test(password);
}

function validateURL(url) {
  let validUrl =
    /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.?\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[?6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1?,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00?a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u?00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  return validUrl.test(url);
}

function validatePhoneNumber(phone) {
  let validPhoneNumber =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return validPhoneNumber.test(phone);
}

// Success and Error utility function
function showSuccessMessage(input) {
  let formelement = input.parentElement;
  console.log(formelement);
  formelement.classList.add("success");
  formelement.classList.remove("error");
  let error = formelement.querySelector("small");
  error.innerText = "";
}

function showErrorMessage(input, message) {
  let formelement = input.parentElement;
  formelement.classList.add("error");
  formelement.classList.remove("success");
  let error = formelement.querySelector("small");
  error.innerText = message;
}

// Input fields validation'
function fullNameValidation() {
  console.log("fullname validation");
  let userName = fullNameEL.value.trim();
  console.log(userName);
  if (!isRequired(userName)) {
    showErrorMessage(fullNameEL, "FullName required");
  } else {
    showSuccessMessage(fullNameEL);
  }
}

function phoneNumberValidation() {
  let phoneNumber = phoneNumberEL.value.trim();
  if (!isRequired(phoneNumber)) {
    showErrorMessage(phoneNumberEL, "PhoneNumber required");
  } else if (!validatePhoneNumber(phoneNumber)) {
    showErrorMessage(phoneNumberEL, "Enter correct phone number");
  } else {
    showSuccessMessage(phoneNumberEL);
  }
}

function emailAddressValidation() {
  let emailValue = emailAddressEL.value.trim();
  if (!isRequired(emailValue)) {
    showErrorMessage(emailAddressEL, "EmailId required");
  } else if (!validateEmail(emailValue)) {
    showErrorMessage(emailAddressEL, "Enter correct Email id");
  } else {
    showSuccessMessage(emailAddressEL);
  }
}

function urlValidation() {
  let urlValue = websiteURLEL.value.trim();
  if (!isRequired(urlValue)) {
    showErrorMessage(websiteURLEL, "website URL required");
  } else if (!validateURL(urlValue)) {
    showErrorMessage(websiteURLEL, "Enter correct Email id");
  } else {
    showSuccessMessage(websiteURLEL);
  }
}

function passwordValidation() {
  let paswordValue = passwordEL.value.trim();
  if (!isRequired(paswordValue)) {
    showErrorMessage(passwordEL, "Password required");
  } else if (!validatePassword(paswordValue)) {
    showErrorMessage(passwordEL, "Enter the correct Password");
  } else {
    showSuccessMessage(passwordEL);
  }
}

function confirmPasswordValidation() {
  let confirm = confirmPasswordEL.value.trim();
  let password = passwordEL.value.trim();
  if (confirm === password) {
    showSuccessMessage(confirmPasswordEL);
  } else {
    showErrorMessage(confirmPasswordEL, "Password Didnot matched");
  }
}
