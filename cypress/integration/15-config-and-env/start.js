/// <reference types="cypress" />

it('creates a todo item via api', () => {

  cy
    .request('POST', 'localhost:3000/todos', {
      title: 'new todo',
      completed: false
    });

  cy
    .visit('localhost:3000');

});