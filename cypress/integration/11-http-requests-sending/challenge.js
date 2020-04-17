/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
  ⚠️ .visit() command is not included in these tests
  ⚠️ before each of these tests, all todos are deleted
  💡 there is a LOT you can do with .request() command. read
  about it in documentation https://on.cypress.io/request and
  have some fun with it!
*/ 

beforeEach( () => {

  cy
    .request('DELETE', 'localhost:3000/todos');
    
});

/* 
  👶 challenge #1: create a new todo via request and open the app
  to check that the todo item was requested
*/
it('creates a todo via api', () => {
  
});

/* 
  👦 challenge #2: create a new todo via request, but make the 
  state of the todo to be completed. you can just use POST /todos
  request to do that. after you open the app, verify that the todo 
  is there and it is completed
*/
it('creates a completed todo item', () => {
  
});

/* 
  👨 challenge #3: in README.md, find an api endpoint that
  seeds the database. then write a simple test that verifies 
  that you have seeded the app correctly
*/
it('seeds data before opening the app', () => {
  
});

/* 
  🤓 challenge #4: create a todo item in the application and then send
  the request to complete that item. to see that item completed, you 
  need to reload the application using .reload() command. the real challenge
  in this test is to find the id of your todo. hint: use .route(), .wait() 
  and .then() command to achieve this.
*/
it('deletes created todo item via api', () => {
  
});