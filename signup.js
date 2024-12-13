// signup.js

document.getElementById('signupButton').addEventListener('click', function () {
    const fullname = document.getElementById('fullname').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!fullname || !username || !password) {
        alert('Please fill in all the fields!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Send data to the server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, username, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success message
        document.getElementById('signupForm').reset();
    })
    .catch(error => {
        alert('Error during signup: ' + error.message);
    });
});
