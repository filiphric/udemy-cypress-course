
it('creates a todo item via api', () => {

  cy
    .request('POST', 'localhost:3000/todos', {
      title: 'new todo',
      completed: false
    });

  cy
    .visit('localhost:3000');

});
    
describe('resetting app state before each test', () => {

  beforeEach( () => {
    
    cy
      .request('DELETE', 'localhost:3000/todos');

    cy
      .visit('localhost:3000');

  });

  it('creates a todo item', () => {

    cy
      .get('input')
      .type('buy milk{enter}');

    cy
      .get('.todo')
      .should('have.length', 1);
    
  });

  it('completes a todo item', () => {

    cy
      .get('input')
      .type('wash dishes{enter}');

    cy
      .get('.toggle')
      .click();
    
  });
  
});
