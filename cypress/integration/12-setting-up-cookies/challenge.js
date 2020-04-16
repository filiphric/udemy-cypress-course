/// <reference types="cypress" />

/* 
  ⚠️ remember you can run single test by using it.only
*/ 

beforeEach( () => {

  cy
    .request('POST', 'localhost:3000/accounts/seed', [
      {
        'email': 'admin@udemy-cypress-course.com',
        'password': 'admin'
      }
    ]);

});

/* 
  👶 challenge #1: log in and check cookie (as shown in video)
*/
it('saves auth cookie after login', () => {
  
});

/* 
  👧 challenge #2: test some other properties of saved cookie, like 
  location, path, etc.
*/
it('has correct auth cookie properties', () => {
  
});

/* 
  👩 challenge #3: save auth cookie using .setCookie() commandand then
  open the app. check if "logged in" message appears in application
*/
it('authenticates by storing cookie in browser', () => {
  
});

/* 
  🤓 challenge #4: try to store your own cookie. have some fun with it 
  and play around with different properties. make sure you’ll check out
  the docs: https://on.cypress.io/setcookie
*/
it('authenticates by storing cookie in browser', () => {
  
});

/* 
  🦸‍♀ challenge #4: there is a setting that can be changed in order to 
  not delete certain cookies between tests. 
  1. read about it in a documentation: https://on.cypress.io/cookies
  2. try test if it works in following describe block:
*/
describe('storing cookies between tests', () => {

  beforeEach(() => {

    cy
      .request('POST', 'localhost:3000/accounts/seed', [
        {
          'email': 'admin@udemy-cypress-course.com',
          'password': 'admin'
        }
      ]);
    
  });

  it('logs a user in', () => {

    cy
      .visit('localhost:3000/login');

    cy
      .get('[type=\'email\']')
      .type('admin@udemy-cypress-course.com');

    cy
      .get('[type=\'password\']')
      .type('admin');

    cy
      .get('.login-button')
      .click();
    
  });

  it('has auth cookie stored', () => {

    cy
      .getCookie('auth')
      .its('value')
      .should('eq', 'true');
    
  });
  
});