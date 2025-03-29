document.addEventListener("DOMContentLoaded", function () {
    // Toggle password visibility
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("password");

    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.classList.remove("fa-eye");
                togglePassword.classList.add("fa-eye-slash");
            } else {
                passwordInput.type = "password";
                togglePassword.classList.remove("fa-eye-slash");
                togglePassword.classList.add("fa-eye");
            }
        });
    }

    // Pass email to signup page
    const createAccountLink = document.getElementById("createAccountLink");
    if (createAccountLink) {
        createAccountLink.addEventListener("click", function (event) {
            let emailValue = document.getElementById("loginEmail").value;
            if (emailValue) {
                this.href = `signup.html?email=${encodeURIComponent(emailValue)}`;
            }
        });
    }

    // Autofill email from login page to signup page
    if (window.location.pathname.includes("signup.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        if (email) {
            document.getElementById("signupEmail").value = email;
        }
    }

    // Redirect back to login page
    const backToLoginButton = document.getElementById("backToLogin");
    if (backToLoginButton) {
        backToLoginButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
