// Simulated user credentials for testing purposes
const mockUser = {
    username: 'nicole',
    password: 'nicole'
};

// Event listener for the login button
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match the mock data
    if (username === mockUser.username && password === mockUser.password) {
        // Redirect to the user page (replace 'userpage.html' with the actual user page)
        window.location.href = 'try.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
