/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server();

  cy
    .route('GET', '/todos').as('todosList')
    .route('POST', '/todos').as('todoCreate');

  cy
    .visit('localhost:3000');

});

it('has no elements', () => {

  cy
    .wait('@todosList');

  cy
    .get('.todo')
    .should('have.length', 0);
  
});

it('adds an item to the list', () => {

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .wait('@todoCreate')
    .then( todoItem => {

      expect(todoItem.status).to.eq(201);
      expect(todoItem.response.body.title).to.eq('wash dishes');
      expect(todoItem.response.body.completed).to.be.false;

    });

});