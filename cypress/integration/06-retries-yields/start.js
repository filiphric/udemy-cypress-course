/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it.only('Should have todo item with text "create a list of todos"', () => {

  cy
    .get('.todo')
    .should('be.visible');
  
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