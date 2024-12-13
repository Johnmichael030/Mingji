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

    // Simulate successful sign-up
    alert(`Sign-up successful! Welcome, ${fullname}!`);
    document.getElementById('signupForm').reset();
});
