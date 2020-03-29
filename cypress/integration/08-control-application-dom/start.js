/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('has a delete icon (solution 1)', () => {

  cy
    .get('.destroy')
    .should('exist');
  
});

it('has a delete icon (solution 2)', () => {

  cy
    .get('.destroy');

});

it('has a link to application author', () => {

  cy
    .contains('Evan You')
    .click();
  
});
