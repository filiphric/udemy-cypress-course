/// <reference types="cypress" />

it('gets the same input element using different selectors', () => {

  cy
    .visit('localhost:3000');

  // select via tag
  cy
    .get('input');

  // select via id
  cy
    .get('#add-todo');

  // select via class
  cy
    .get('.new-todo');

  // select via attribute
  cy
    .get('[placeholder="What needs to be done?"]');
    
  // select via relation
  cy
    .get('header input');

});
