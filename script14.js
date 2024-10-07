document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError('nameError', 'Please enter a valid name (letters and spaces only).');
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (!passwordRegex.test(password)) {
        showError('passwordError', 'Password must be at least 8 characters long and contain at least one letter and one number.');
        valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        valid = false;
    }

    // If all validations pass, you can submit the form or do further processing
    if (valid) {
        alert('Registration successful!');
        // Here you could send the data to a server, for example
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.textContent = '');
}
