// invoke addClass + check
// invoke attr _blank
// invoke show
// trigger mouseover

it('does stuff', () => {

  cy.visit('localhost:3000');

  cy
    .get('.toggle')
    .invoke('prop', 'checked', true);
  
});