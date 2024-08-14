function login() {
    // Hardcoded username and password for demonstration purposes
    const validUsername = "user";
    const validPassword = "password";

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate login credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to a different page (optional)
        // window.location.href = "dashboard.html";
    } else {
        // Show error message
        document.getElementById("error-message").style.display = "block";
    }
}
