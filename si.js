document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById("signin-form");
    
    signinForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Check if the entered credentials match the stored data in local storage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        
        if (username === storedUsername && password === storedPassword) {
            // Redirect to dashboard
            window.location.href = "dashb.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
