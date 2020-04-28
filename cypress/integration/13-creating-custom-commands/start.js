/// <reference types="cypress" />

beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/todos');

  cy
    .visit('localhost:3000');

});

it('creates 4 todos', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .get('.new-todo')
    .type('clean windows{enter}');

  cy
    .get('.new-todo')
    .type('make bed{enter}');
  
});