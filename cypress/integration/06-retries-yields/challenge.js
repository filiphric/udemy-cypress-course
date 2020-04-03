/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
  📚 this challenge includes working with documentation. you can find it on https://docs.cypress.io, use https://on.cypress.io/<command> or find a command via autocomplete
  💡 there are additional explanations for video in final.js file of this chapter which might help with this challenge
*/ 

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/*
  👶 chalenge #1: use command .first() to select the first element in todos 
  list. start by first geting .todo
  ⚠️ before starting this test, make sure you have at least two todo items
*/
it('Selects first item in list', () => {

  cy
    .get('.todo');
  
});

/*
  👧 chalenge #2: based on your the last test, try to find a command in 
  documentation that will select last todo item. start the test by first geting .todo
  ⚠️ before starting this test, make sure you have at least two todo items
*/
it('Selects last item in list', () => {

  cy
    .get('.todo');
  
});

/*
  👩 challenge #3: select third todo item. use command from example in 
  video. start the test by first geting .todo
  ⚠️ before starting this test, have at least four items in to do list
*/
it('Selects third todo item', () => {

  cy
    .get('.todo');
  
});

/*
  🤓 challenge #4: there are commands for selecting previous and next 
  elements. find them in documentation and try them out. start the test 
  by first geting .todo
*/
it('Selects the first item and then the next or previous item', () => {
  
  cy
    .get('.todo');

});

/* 
  🦸‍♀ challenge #5: start test with no todo in list and add timeout to 
  .get() command. make the test pass by adding todo item (as demonstrated in video)
*/
it('Has one element in todo list', () => {

  cy
    .get('.todo')
    .should('have.length', 1);
  
});