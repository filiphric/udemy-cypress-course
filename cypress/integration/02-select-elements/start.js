/// <reference types="cypress" />

it('gets input element', () => {

  cy
    .visit('localhost:3000');

  // select via tag
  cy
    .get('input'); 

  // select via id

  // select via class

  // select via attribute

  // select via relation

});
