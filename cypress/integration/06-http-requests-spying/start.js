/// <reference types="cypress" />

it.only('has no elements', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.todo')
    .should('have.length', 0);
  
});

it('adds an item to the list', () => {
  
});