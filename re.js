document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const age = document.getElementById("age").value;
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;

        // Validate form fields
        if (username.trim() === '') {
            alert('Username cannot be empty');
            return;
        } else if (!validateUsername(username)) {
            alert('Username must be at least 6 characters long and contain only letters, numbers, underscores, or hyphens.');
            return;
        } else if (email.trim() === '') {
            alert('Email cannot be empty.');
            return;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        } else if (password.trim() === '') {
            alert('Password cannot be empty.');
            return;
        } else if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character(@!^*.)');
            return;
        }

        // Save user data to local storage
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("age", age);
        sessionStorage.setItem("height", height);
        sessionStorage.setItem("weight", weight);

        // Redirect to dashboard
        window.location.href = "dashbo.html";
    });
});

// Function to validate username
function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_-]{6,}$/;
    return regex.test(username);
}

// Function to validate email
function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

// Function to validate password
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
