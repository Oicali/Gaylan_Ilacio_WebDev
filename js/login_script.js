let wrapper = document.querySelector(".wrapper"),
  signUpLink = document.querySelector(".link .signup-link"),
  signInLink = document.querySelector(".link .signin-link"); // Fixed selector

signUpLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signin");
  wrapper.classList.remove("animated-signup");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signup");
  wrapper.classList.remove("animated-signin"); // Removing class
});

//Validation for signup form
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("signupForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Stop form submission immediately

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const mobile = document.getElementById("mobile").value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        showToast("Please enter a valid email address.");
        return;
      }

      if (password.length < 8) {
        showToast("Password must be at least 8 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        showToast("Passwords do not match.");
        return;
      }

      if (!/^09\d{9}$/.test(mobile)) {
        showToast(
          "Please enter a valid 11-digit mobile number starting with 09."
        );
        return;
      }

      this.submit(); // Only submit if all conditions pass
    });
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000); // Hide after 3 seconds
}

// Login form validation

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("signinForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Stop form submission immediately

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        showToast("Please enter a valid email.");
        return;
      }

      this.submit(); // Only submit if valid
    });
});

function clearSignupForm() {
  document.getElementById("signupForm").reset();
}

function clearSigninForm() {
  document.getElementById("signinForm").reset();
}
