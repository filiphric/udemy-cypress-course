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

it('Has first todo item with text "wash dishes" (solution 1)', () => {

  cy
    .get('.todo')
    .first()
    .contains('wash dishes');
  
});

it('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo');
  
});