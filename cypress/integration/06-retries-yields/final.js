/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should have one todo item', () => {

  cy
    .get('.todo', {timeout: 30000})
    .should('have.length', 1);
  
});

it('Should have todo item with text "create list of todos"', () => {

  cy
    .get('.todo') // parent command
    .contains('todos'); // child command

  cy
    .contains('todos'); // parent command
  
});

it('Should have todo item with text "buy milk"', () => {

  cy
    .get('.todo-list')
    .find('li')
    .eq(0)
    .should('contain.text', 'buy milk');
  
});

it('Should have todo item with text "wash dishes" on first position', () => {

  cy
    .get('.todo', {timeout: 30000}) // parent command, retries 
    .should('have.length', 3) // child command, makes .get() command retry until it returns 3 elements
    .first() // child command, yielding from parent
    .should('contain.text', 'wash dishes');
  
});