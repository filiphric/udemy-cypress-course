/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server();

  cy
    .route('GET', '/todos', 'fx:three-items')
    .as('todosList');

  cy
    .route({
      method: 'POST', 
      url: '/todos',
      response: [],
      status: 500
    })
    .as('todoCreate');

  cy
    .visit('localhost:3000');

});

it.only('has zero items in list', () => {

  cy
    .wait('@todosList');

  cy
    .get('.todo')
    .should('have.length', 0);
  
});

it('has stubbed items in todo list', () => {

  cy
    .wait('@todosList');

});

it('shows error when adding new item', () => {

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');
  
});

