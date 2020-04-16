/// <reference types="cypress" />

/* 
  🚀 challenge #1: set up your own email on mailosaur.io and
  write a test for a signup email
*/ 
it('sends a welcome email', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('');

  cy
    .get('[type=\'password\']')
    .type('');

  cy
    .contains('Send me a welcome email')
    .prev()
    .check();

  cy
    .get('.signup-button')
    .click();
  
});