// tests/userDatabase.test.js
const UserDatabase = require('../services/userDatabase');
const User = require('../models/user');
jest.mock('../models/user');

describe('UserDatabase', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    User.mockClear();
  });

  it('should save a user', async () => {
    const userDatabase = new UserDatabase();
    const user = { username: 'testuser', password: 'password' };

    // Mock the create function
    User.create.mockResolvedValue(user);

    const savedUser = await userDatabase.saveUser(user);

    expect(User.create).toHaveBeenCalledWith(user);
    expect(savedUser).toEqual(user);
  });

  it('should get a user', async () => {
    const userDatabase = new UserDatabase();
    const username = 'testuser';

    // Mock the findOne function
    User.findOne.mockResolvedValue({ username: 'testuser', password: 'password' });

    const fetchedUser = await userDatabase.getUser(username);

    expect(User.findOne).toHaveBeenCalledWith({ where: { username } });
    expect(fetchedUser).toEqual({ username: 'testuser', password: 'password' });
  });
});