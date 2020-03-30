/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Checks text of todo item', () => {

  cy
    .get('.todo')
    .should('contain.text', 'buy milk');
  
});

it('Checks texts of all todo items', () => {

  cy
    .get('.todo');
  
});

it('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.todo')
    .eq(0)
    .should('contain.text', 'create todos list');
  
});

it('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo');
  
});