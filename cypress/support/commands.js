import "@testing-library/cypress/add-commands";

Cypress.Commands.add("addTodo", (title) => {
  cy.get(".new-todo").type(title + "{enter}");
});
