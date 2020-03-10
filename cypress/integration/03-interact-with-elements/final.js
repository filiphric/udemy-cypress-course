/// <reference types="cypress" />

it('adds a new todo item', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('input')
    .type('buy milk{enter}');
  
});

it('completes todo item', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.toggle')
    .click();
  
});

it('deletes todo item', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.destroy')
    .click({force: true});
  
});