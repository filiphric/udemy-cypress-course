/// <reference types="cypress" />

beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/todos');

  cy
    .visit('localhost:3000');

});

it('creates 4 todos', () => {

  cy
    .addTodo('buy milk')
    .addTodo('wash dishes')
    .addTodo('clean windows')
    .addTodo('make beds');
  
});