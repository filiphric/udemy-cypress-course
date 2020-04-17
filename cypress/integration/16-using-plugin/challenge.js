/// <reference types="cypress" />

/* 
  👦 challenge #1: install drag and drop plugin yourself and use
  it in your test
*/
describe('drag and drop', () => {

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
      
  });
  
});

/* 
  🤓 challenge #2: there is a very cool plugin called cypress-plugin-retries
  I recommend installing it and trying it out in following test. try to run 
  this test a couple of times. you’ll see that it sometimes passes, and sometimes 
  it fails. cypress-plugin-retries should be able to retry a test if it fails
*/
describe('retrying test', () => {

  beforeEach(() => {
  
    cy
      .request('POST', 'localhost:3000/todos/seed', [
        {
          'title': 'take over the world',
          'completed': false,
          'id': Math.round(Math.random()) // random id will be 1 or 0
        }
      ]);

    cy
      .server()
      .route('GET', '/todos').as('todosList');
  
    cy
      .visit('localhost:3000');
  
  });

  it('checks item of todo', () => {

    cy
      .wait('@todosList')
      .then( todo => {

        // always expecting todo id to be 0 which will 
        // cause this test to fail sometimes
        expect(todo.response.body[0].id).to.eq(0); 
        
      });
    
  });
  
});

