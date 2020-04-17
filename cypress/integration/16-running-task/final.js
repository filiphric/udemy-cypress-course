it('resets database before opening app', () => {

  cy
    .task('resetDatabase');

  cy
    .visit('localhost:3000');
  
});