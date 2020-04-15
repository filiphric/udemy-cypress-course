/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
  ⚠️ most of the work on this challenge will take place in 
  beforeEach() hook. you need to call .server() and .route() 
  commands before you open your app, or more precisely - before 
  the request you want to route occurs. in case of GET /todos
  request, it is at the moment of opening our application
*/ 

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/* 
  👶 challenge #1: stub GET /todos request to return 0 items. 
  you can do that manually or using a fixture
*/
it('has 0 todo items', () => {
  
});

/* 
  👧 challenge #2: create your own fixture and use it in your 
  test. try to include a compled todo item too
*/
it('has n todo items (loaded from fixture)', () => {
  
});

/* 
  👩 challenge #3: recreate the scenario from video and write a test
  that will check error message when server returns error with status
  code 500
*/
it('shows error when adding new item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');
  
});

/* 
  🤓 challenge #4: manipulate the POST /todos request in such a way that 
  it will create a completed todo item instead of incomplete one
*/
it('creates completed todo item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');
  
});