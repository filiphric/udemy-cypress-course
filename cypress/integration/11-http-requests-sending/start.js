
it.only('creates a todo item via api', () => {

});
    
describe('resetting app state before each test', () => {

  beforeEach( () => {
    
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