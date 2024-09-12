document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Client-side validation
    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

   

    // Make API request
    const loginData = {
        username: email,
        password: password
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then(response => response.json())
    .then(data => {
        successMessage.textContent = "Login successful!";
    })
    .catch((error) => {
        errorMessage.textContent = "Login failed. Please try again.";
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Show/hide password functionality
document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    // Toggle password visibility
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
