/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it.only('has no elements', () => {

  cy
    .get('.todo')
    .should('have.length', 0);
  
});

it('adds an item to the list', () => {

});