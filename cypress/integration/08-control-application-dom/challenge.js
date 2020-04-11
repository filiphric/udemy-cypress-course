/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
  ⚠️ some of these test require you to have some todo items 
  already in app. you can probably figure out which these are 🙂
*/ 

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/* 
  👶 challenge #1: continue with the test from video. make 
  the ".destroy" element disappear
*/
it('have delete icon', () => {

  cy
    .get('.destroy')
    .invoke('show');
    
  cy
    .get('.destroy')
    .should('be.visible');

  // add code here

  cy
    .get('.destroy')
    .should('be.visible');
  
});

/* 
  👧 challenge #2: try to delete a todo item using .trigger() 
  command. use devtools to look into event listeners on ".todo" item
*/
it('deletes a todo item', () => {

  cy
    .get('.todo');
    
  cy
    .get('.destroy')
    .should('not.be.visible');
  
});

/* 
  👩 challenge #3: check item as completed, without actually clicking on checkbox
  you can do this by adding class ".completed" to a todo item, look into documentation
  on how to do it
 */
it('completes a todo item', () => {

  cy
    .get('.todo')
    .invoke(); // add correct argument here
  
});

/* 
  🤓 challenge #4: you can use invoke to add text into the input field, 
  without using the command .type() all you need to do is to invoke 
  value of the ".new-todo" element
*/
it('add text into new todo field', () => {

  cy
    .get('.new-todo')
    .invoke(); // add correct argument here
  
});