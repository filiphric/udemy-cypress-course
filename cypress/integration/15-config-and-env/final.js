/// <reference types="cypress" />

it('creates a todo item via api', () => {

  cy
    .request('POST', '/todos', {
      title: 'new todo',
      completed: false
    }).then( item => {
      Cypress.env('todoItem', item.body);
    });

  cy
    .visit('/');

});