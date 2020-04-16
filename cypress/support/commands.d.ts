declare namespace Cypress {
  interface Chainable<Subject> {

    /*
     * adds a new todo item
     * @example
     * cy.addTodo('todo title')
     */
    addTodo(todo: string): Chainable<any>

    /* 
      challenge hint: copy lines 4 - 9 and rewrite according
      the command you want to add
    */

  }
}