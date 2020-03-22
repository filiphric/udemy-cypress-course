/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should have todo item with text "create list of todos"', () => {

  cy
    .get('.todo');
  
});

it('Should have todo item with text "buy milk"', () => {

  cy
    .get('.todo-list');
  
});

it('Should have one todo item', () => {

  cy
    .get('.todo')
    .should('have.length', 1);
  
});

it('Should have todo item with text "wash dishes" on first position', () => {

  cy
    .get('.todo')
    .eq(0)
    .should('contain.text', 'wash dishes');
  
});