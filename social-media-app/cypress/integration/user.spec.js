// cypress/integration/user.spec.js
describe('User Registration and Login', () => {
  it('should register a new user', () => {
    cy.visit('/register.html');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('User registered');
  });

  it('should log in an existing user', () => {
    cy.visit('/login.html');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome to the protected page');
  });
});