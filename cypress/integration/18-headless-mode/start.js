/// <reference types="cypress" />

beforeEach(() => {

  cy
    .request('POST', 'localhost:3000/todos/seed', [
      {
        title: 'buy milk',
        completed: false,
        id: 1
      }
    ]);

  cy
    .visit('localhost:3000');

});

it('should pass', () => {

  cy
    .get('.todo')
    .should('have.length', 1)
    .should('contain.text', 'buy milk');
  
});