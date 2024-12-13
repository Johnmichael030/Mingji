// login.js

document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Send login data to the server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show welcome message
        window.location.href = 'try.html'; // Redirect after successful login
    })
    .catch(error => {
        alert('Invalid credentials. Please try again.');
    });
});
