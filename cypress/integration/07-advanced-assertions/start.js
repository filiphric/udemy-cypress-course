// multiple assertions using then
// assertions using should

/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should check texts of todo items', () => {

  cy
    .get('.todo');   
  
});

it('Should have todo item with text "wash dishes" on first position (solution 1)', () => {

  cy
    .get('.todo')
    .first()
    .contains('wash dishes');
  
});

it('Should have todo item with text "wash dishes" on first position (solution 2)', () => {

  cy
    .get('.todo');
  
});