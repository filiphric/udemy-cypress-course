/// <reference types="cypress" />

it('resets database before opening app', () => {

  cy
    .visit('localhost:3000');
  
});