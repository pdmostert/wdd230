const pass1 = document.querySelector("#key");
const pass2 = document.querySelector("#key-repeat");
const email = document.querySelector("#email-input");
const message = document.querySelector("#message");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
  if (pass1.value !== pass2.value) {
    pass2.style.backgroundColor = "var(--input-invalid)";
    message.innerHTML = "Passwords don't match";
    pass2.value = "";
  } else {
    pass2.style.backgroundColor = "var(--input-valid)";
    message.innerHTML = "";
  }
}

email.addEventListener("focusout", validateEmail);

function validateEmail() {
  var email = document.getElementById("email-input").value;
  var pattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
  if (pattern.test(email)) {
    // email.classList.add("invalid");
  } else {
    message.innerHTML =
      "Invalid BYUI email address. Please enter a valid BYUI email address.";
    // email.classList.add("invalid");
  }
}
