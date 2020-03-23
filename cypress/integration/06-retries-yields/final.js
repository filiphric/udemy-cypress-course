/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should have todo item with text "create a list of todos"', () => {

  cy
    .get('.todo') // parent command
    .contains('todos'); // child command

  cy
    .contains('todos'); // parent command
  
});

it('Should have todo item with text "buy milk"', () => {

  cy
    .get('.todo-list') // yields ul element
    .find('li') // yields 2 li elements
    .eq(1) // yields li element 1
    .should('contain.text', 'buy milk'); // makes assertion on element 1
  
});

it('Should have one todo item', () => {

  cy
    .get('.todo', {timeout: 30000}) // retries until .todo element is found
    .should('have.length', 1); // retries until number of yielded elements is 1
  
});