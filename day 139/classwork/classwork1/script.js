function validateForm() {
    // Validate Name length
    const name = document.getElementById("fullname").value;
    if (name.length <= 5) {
        alert("Name must be greater than 5 characters.");
        return false;
    }

    // Validate Email format
    const email = document.getElementById("email").value;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Password and Confirm Password
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If everything is valid, allow form submission
    return true;
}