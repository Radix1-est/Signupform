document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const studentId = document.getElementById("studentId").value;
    const username  = document.getElementById("username").value;
    const password  = document.getElementById("password").value;

    // Simple confirmation message
    document.getElementById("message").textContent =
        `Account created for ${username}!`;
});
