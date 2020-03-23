
/// <reference types="cypress" />

it('has no elements', () => {

  cy
    .server();

  cy
    .route('GET', '/todos')
    .as('getTodoList');

  cy
    .visit('localhost:3000');

  cy
    .wait('@getTodoList');

  cy
    .get('.todo')
    .should('have.length', 0);
  
});

it('adds an item to the list', () => {

  cy
    .server();

  cy
    .route('POST', '/todos')
    .as('createTodoItem');

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .wait('@createTodoItem')
    .its('status')
    .should('eq', 201);
  
});