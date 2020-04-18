beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/accounts');

});

it('does a signup', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('ja1g3tgi96k.l8toypmu@mailosaur.io');

  cy
    .get('[type=\'password\']')
    .type('admin');

  cy
    .get('.signup-button')
    .click();

  cy
    .get('#loginMessage')
    .should('be.visible')
    .should('contain.text', 'User is logged in');
  
  cy
    .url()
    .should('eq', 'http://localhost:3000/');

  cy
    .getCookie('auth')
    .its('value')
    .should('eq', 'true');
  
});