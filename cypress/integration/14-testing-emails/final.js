beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/accounts');

});

it('sends a welcome email', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('ja1g3tgi96k.l8toypmu@mailosaur.io');

  cy
    .get('[type=\'password\']')
    .type('admin');

  cy
    .contains('Send me a welcome email')
    .prev()
    .check();

  cy
    .get('.signup-button')
    .click();

  cy
    .request({
      method: 'POST',
      url: 'https://mailosaur.com/api/messages/await?server=l8toypmu',
      headers: {
        authorization: 'Basic ' + Buffer.from('pAyC4IcQzqfZvqq').toString('base64')
      },
      body: {
        sentTo: 'ja1g3tgi96k.l8toypmu@mailosaur.io'
      }
    }).then( message => {

      expect(message.body.html.links[0].href).to.eq('https://www.youtube.com/channel/UCDOCAVIhSh5VpJMEfdak1OA');

    });
  
});