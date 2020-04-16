beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/accounts');

});

it('sends a welcome email', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('');

  cy
    .get('[type=\'password\']')
    .type('');

  cy
    .contains('Send me a welcome email')
    .prev()
    .check();

  cy
    .get('.signup-button')
    .click();
  
});