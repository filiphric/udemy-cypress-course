/// <reference types="cypress" />

it('Adds one item', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .get('.todo')
    .should('be.visible');

});

it('Adds two items', () => {

  cy
    .visit('localhost:3000');

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
    .visit('localhost:3000');

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