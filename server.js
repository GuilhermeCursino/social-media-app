// server.js
const express = require('express');
const path = require('path');
const UserManager = require('./social-media-app/services/userManager');
const { body, validationResult } = require('express-validator');
const app = express();
const userManager = new UserManager();
let lastRegisterError = '';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve index.html at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/register',
  // Validate and sanitize input
  body('username').isAlphanumeric().withMessage('Username must be alphanumeric').trim().escape(),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long').trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Handle validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      await userManager.register(username, password);
      lastRegisterError = '';
      res.redirect('/login.html');
    } catch (error) {
      if (error.message === 'Username already exists') {
        lastRegisterError = 'Username already exists. Please choose a different username.';
        res.redirect('/register.html');
      } else {
        lastRegisterError = 'An error occurred. Please try again later.';
        res.redirect('/register.html');
      }
    }
  });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const success = await userManager.login(username, password);
  if (success) {
    res.redirect('/protected.html');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/protected', (req, res) => {
  if (userManager.currentUser) {
    res.sendFile(path.join(__dirname, 'public', 'protected.html'));
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/register-error', (req, res) => {
  res.send(lastRegisterError);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});