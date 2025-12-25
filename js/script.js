const form = document.getElementById("form");
const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const success = document.getElementById("success");

const ruleStrength = document.getElementById("rule-strength");
const ruleLength = document.getElementById("rule-length");
const ruleSymbolNumber = document.getElementById("rule-symbol-number");
const ruleNoPersonal = document.getElementById("rule-no-personal");

username.addEventListener("input", () => validateField(username));
fullname.addEventListener("input", () => {
  validateField(fullname);
  validateField(password);
});
email.addEventListener("input", () => {
  validateField(email);
  validateField(password);
});
password.addEventListener("input", () => validateField(password));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  success.style.display = "block";
  success.innerText = "Account created successfully!";

  console.log({
    username: username.value,
    fullName: fullname.value,
    email: email.value,
    password: "*".repeat(password.value.length)
  });

  form.reset();
  btn.disabled = true;
  btn.classList.remove("active");

  document
    .querySelectorAll(".input-group")
    .forEach(g => g.classList.remove("success", "error"));

  resetPasswordRules();
});

function validateField(input) {
  const value = input.value.trim();

  if (input === username) {
    if (!value) return clearState(input);
    if (value.length < 3 || value.length > 15)
      return setError(input, "Username must be between 3 and 15 characters");
    if (!/^[a-zA-Z0-9]+$/.test(value))
      return setError(input, "Username can only contain letters and numbers");
    setSuccess(input);
  }

  if (input === fullname) {
    if (!value) return clearState(input);
    if (!/^[a-zA-Z\s]+$/.test(value))
      return setError(input, "Full name must contain only letters and spaces");
    if (!value.includes(" "))
      return setError(input, "Please enter your full name");
    setSuccess(input);
  }

  if (input === email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return clearState(input);
    if (!emailRegex.test(value))
      return setError(input, "Please enter a valid email address");
    setSuccess(input);
  }

  if (input === password) {
    if (!value) {
      clearState(input);
      resetPasswordRules();
      return;
    }

    let validCount = 0;

    toggleRule(ruleLength, value.length >= 8);
    if (value.length >= 8) validCount++;

    const symbolOrNumber = /[0-9!@#$%^&*(),.?":{}|<>]/;
    toggleRule(ruleSymbolNumber, symbolOrNumber.test(value));
    if (symbolOrNumber.test(value)) validCount++;

    const nameParts = fullname.value
      .toLowerCase()
      .split(" ")
      .filter(Boolean);

    const emailParts = email.value
      .toLowerCase()
      .split(/[@.]/)
      .filter(Boolean);

    const personalParts = [...nameParts, ...emailParts];

    const containsPersonal = personalParts.some(part =>
      value.toLowerCase().includes(part)
    );

    toggleRule(ruleNoPersonal, !containsPersonal);
    if (!containsPersonal) validCount++;

    if (validCount === 3) {
      ruleStrength.innerText = "Password strength: Strong";
      ruleStrength.classList.add("valid");
      ruleStrength.classList.remove("invalid");
      setSuccess(input);
    } else {
      ruleStrength.innerText = "Password strength: Weak";
      ruleStrength.classList.add("invalid");
      ruleStrength.classList.remove("valid");
      setError(input, "Password does not meet all requirements");
    }
  }

  checkFormValidity();
}

function toggleRule(element, condition) {
  element.classList.toggle("valid", condition);
  element.classList.toggle("invalid", !condition);
}

function resetPasswordRules() {
  ruleStrength.innerText = "Password strength: Weak";
  [ruleStrength, ruleLength, ruleSymbolNumber, ruleNoPersonal]
    .forEach(li => li.classList.remove("valid", "invalid"));
}

function checkFormValidity() {
  const inputs = [username, fullname, email, password];
  const allValid = inputs.every(
    input => input.parentElement.classList.contains("success")
  );

  btn.disabled = !allValid;
  btn.classList.toggle("active", allValid);
}

function setError(input, message) {
  const group = input.parentElement;
  group.className = "input-group error";
  group.querySelector("small").innerText = message;
}

function setSuccess(input) {
  const group = input.parentElement;
  group.className = "input-group success";
  group.querySelector("small").innerText = "";
}

function clearState(input) {
  const group = input.parentElement;
  group.className = "input-group";
  group.querySelector("small").innerText = "";
}
