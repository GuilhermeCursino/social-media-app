# Uppgift 2

## Introduction
This project is part of Uppgift 2. 

# Social Media App

## Description
This project is a simple social media application with user registration and login functionality. It uses Express.js for the server, Sequelize for ORM, SQLite for the database, Cypress for end-to-end testing, and Jest for unit testing.

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the server: `node server.js`

## Testing
- Run unit tests: `npm run test`
- Run end-to-end tests: `npx cypress open`

## GitHub Actions
All tests are run automatically on every push to the repository using GitHub Actions.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/uppgift2.git
    ```
2. Navigate to the project directory:
    ```sh
    cd uppgift2
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
To start the project, run:
```sh
npm start
```

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License.



Explanation
.github/workflows/test.yml: GitHub Actions workflow configuration for running tests on every push.
cypress/integration/user.spec.js: Cypress end-to-end tests for user registration and login.
node_modules/: Directory for installed Node.js modules.
public/: Directory for static HTML files.
register.html: Registration page.
login.html: Login page.
protected.html: Protected page for logged-in users.
services/: Directory for service classes.
userManager.js: UserManager class for handling user registration and login.
userDatabase.js: UserDatabase class for interacting with the database.
models/: Directory for ORM models.
user.js: User model definition using Sequelize.
tests/: Directory for Jest unit tests.
userDatabase.test.js: Unit tests for UserDatabase class.
.gitignore: File to specify untracked files to ignore.
package.json: Project metadata and dependencies.
package-lock.json: Lockfile for dependencies.
server.js: Main server file for setting up the Express.js server.
README.md: Project description and setup instructions.