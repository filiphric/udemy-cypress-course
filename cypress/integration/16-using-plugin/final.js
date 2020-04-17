/// <reference types="cypress" />

beforeEach(() => {
  
  cy
    .request('POST', 'localhost:3000/todos/seed', [
      {
        'title': 'take over the world',
        'completed': false,
        'id': 1
      },
      {
        'title': 'take a nap',
        'completed': true,
        'id': 2
      }
    ]);

  cy
    .visit('localhost:3000');

});

it('drags item to second position', () => {

  cy
    .get('.todo')
    .eq(0)
    .as('first');

  cy
    .get('.todo')
    .eq(1)
    .as('second');

  cy
    .get('@first')
    .drag('@second');
  
});