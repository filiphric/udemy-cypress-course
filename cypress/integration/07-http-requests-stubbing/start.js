it('stubs items', () => {

  cy
    .server();

  cy
    .route('GET', '/todos')    
    .as('getTodoList');

  cy
    .visit('localhost:3000');

  cy
    .wait('@getTodoList');

  cy
    .log('there are no items in list')
    .get('li.todo')
    .should('have.length', 0);
  
});

it('loads items from a fixture', () => {

});

it('posts new item to the server', () => {

});

it('shows error when adding new item', () => {
  
});

it('loads slowly and sees „loading items“ element', () => {
  
});

