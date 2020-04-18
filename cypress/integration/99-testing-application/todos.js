/// <reference types="cypress" />

beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/todos');

  cy
    .visit('localhost:3000');

});

it('Adds two items', () => {

  // add first todo
  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  // add second todo
  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .get('.todo')
    .should('have.length', 2);

});

it('Marks item as completed', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .contains('buy milk')
    .should('exist');

  cy
    .get('.toggle')
    .click();

  cy
    .get('.todo')
    .should('have.class', 'completed');

});

it('has one item', () => {

  cy
    .get('.todo')
    .should('have.length', 1)
    .should('contain.text', 'buy milk');
  
});