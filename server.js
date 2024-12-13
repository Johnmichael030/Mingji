const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files like HTML, CSS, and JS
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle sign-up
app.post('/signup', (req, res) => {
  const { fullname, username, password } = req.body;

  if (!fullname || !username || !password) {
    return res.status(400).send('Please fill in all the fields!');
  }

  if (password.length < 6) {
    return res.status(400).send('Password must be at least 6 characters long.');
  }

  // Save the user info to a text file
  const userData = `${username}:${password}:${fullname}\n`;

  fs.appendFile('users.txt', userData, (err) => {
    if (err) {
      return res.status(500).send('Error saving user data.');
    }
    res.send('Sign-up successful!');
  });
});

// Route to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('users.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading user data.');
    }

    const users = data.split('\n').map(line => {
      const [user, pass, fullname] = line.split(':');
      return { username: user, password: pass, fullname };
    });

    // Check if the username and password match any stored user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      res.send(`Welcome back, ${user.fullname}!`);
    } else {
      res.status(400).send('Invalid credentials!');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
