it('stubs items', () => {

  cy
    .server();

  cy
    .route('GET', '/todos', [])    
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

  cy
    .server();

  cy
    .route('GET', '/todos', 'fx:two-items')    
    .as('getTodoList');
    
  cy
    .visit('localhost:3000');

  cy
    .log('there are two items in list')
    .get('li.todo')
    .should('have.length', 2);

});

it('posts new item to the server', () => {

  cy
    .server();

  cy
    .route('GET', '/todos', [])    
    .as('getTodoList');

  cy
    .route('POST', '/todos')    
    .as('createTodoItem');  

  cy
    .visit('localhost:3000');

  cy
    .log('add new item')
    .get('.new-todo')
    .type('test api{enter}');

  cy
    .wait('@createTodoItem')
    .its('status')
    .should('eq', 201);

});

it('shows error when adding new item', () => {

  cy
    .server();

  cy
    .route('GET', '/todos', [])    
    .as('getTodoList');

  cy
    .route({
      method: 'POST',
      url: '/todos',
      response: {},
      status: 404
    })    
    .as('createTodoItem');  

  cy
    .visit('localhost:3000');

  cy
    .log('adds new item')
    .get('.new-todo')
    .type('test api{enter}');

  cy
    .log('error message appears')
    .get('#note')
    .should('be.visible');

  cy
    .log('error message disappears')
    .get('#note')
    .should('not.be.visible');
  
});

it('loads slowly and sees „loading items“ element', () => {
  
  cy
    .server({delay: 10000});

  cy
    .route('GET', '/todos', [])    
    .as('getTodoList');

  cy
    .visit('localhost:3000');

  cy
    .log('loading message is visible')
    .get('.loading')
    .should('be.visible');

  cy
    .wait('@getTodoList');

  cy
    .log('there are no items in list')
    .get('li.todo')
    .should('have.length', 0);

});

