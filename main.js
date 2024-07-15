
let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const zip = document.getElementById('zip').value;
    const password = document.getElementById('password').value;
    const url = document.getElementById('url').value;
    const date = document.getElementById('date').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+\d{1,3}\s?\d{3,14}$/;
    const zipCodePattern = /^\d{5}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email');
        return false;
    }
    if (!phonePattern.test(phone)) {
        showError('phone', 'Please enter a valid phone number');
        return false;
    }
    if (!zipCodePattern.test(zip)) {
        showError('zip', 'Please enter a valid zip code');
        return false;
    }
    if (!passwordPattern.test(password)) {
        showError('password', 'Password must contain at least 8 characters including at least one number, one uppercase and one lowercase letter, and one special character');
        return false;
    }
    if (!urlPattern.test(url)) {
        showError('url', 'Please enter a valid URL');
        return false;
    }
    if (!datePattern.test(date)) {
        showError('date', 'Please enter a valid date in YYYY-MM-DD format');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function showError(inputId, message) {
    let inputElement = document.getElementById(inputId);
    let errorMessage = document.createElement('div');
    errorMessage.className = 'error';
    errorMessage.textContent = message;
    inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);

}