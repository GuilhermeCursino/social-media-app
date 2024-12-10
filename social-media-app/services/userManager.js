// services/userManager.js
const User = require('../models/user');
const bcrypt = require('bcryptjs');

class UserManager {
  constructor() {
    this.currentUser = null;
  }

  async register(username, password) {
    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error('Username already exists');
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the new user
    const user = await User.create({ username, password: hashedPassword });
    return user;
  }

  async login(username, password) {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      this.currentUser = user;
      return true;
    }
    return false;
  }
}

module.exports = UserManager;