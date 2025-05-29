const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");
const authForm = document.getElementById("authForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strength = document.getElementById("strength");
const submitBtn = document.getElementById("submitBtn");

let isSignup = false;

loginToggle.addEventListener("click", () => {
  isSignup = false;
  loginToggle.classList.add("active");
  signupToggle.classList.remove("active");
  submitBtn.textContent = "Login";
});

signupToggle.addEventListener("click", () => {
  isSignup = true;
  signupToggle.classList.add("active");
  loginToggle.classList.remove("active");
  submitBtn.textContent = "Signup";
});

togglePassword.addEventListener("change", () => {
  passwordInput.type = togglePassword.checked ? "text" : "password";
});

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let msg = "Weak";
  let color = "red";

  if (val.length > 8 && /[A-Z]/.test(val) && /[\d]/.test(val) && /\W/.test(val)) {
    msg = "Strong";
    color = "green";
  } else if (val.length >= 6) {
    msg = "Medium";
    color = "orange";
  }

  strength.textContent = `Strength: ${msg}`;
  strength.style.color = color;
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 6;

  if (!emailValid) {
    emailInput.nextElementSibling.textContent = "Invalid email format.";
  } else {
    emailInput.nextElementSibling.textContent = "";
  }

  if (!passwordValid) {
    passwordInput.nextElementSibling.textContent = "Password must be at least 6 characters.";
  } else {
    passwordInput.nextElementSibling.textContent = "";
  }

  if (emailValid && passwordValid) {
    alert(isSignup ? "Signup successful!" : "Login successful!");
    authForm.reset();
    strength.textContent = "";
  }
});




