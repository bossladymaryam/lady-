document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user data from local storage
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const age = localStorage.getItem("age");
    const height = localStorage.getItem("height");
    const weight = localStorage.getItem("weight");

    // Display user data on the dashboard
    const profileInfo = document.getElementById("profile-info");
    profileInfo.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
    `;
});