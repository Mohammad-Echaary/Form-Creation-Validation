document.addEventListener("DOMContentLoaded", (event) => {
  return formValidation();
});

function formValidation() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;
    let messages = [];
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must have at least 3 characters");
    }
    if (email.split("").includes("@") && email.split("").includes(".")) {
      isValid = false;
      messages.push("Email address must have @ and .");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must have at least 8 characters");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br/>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
}
