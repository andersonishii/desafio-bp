describe('Desafio banco Parana - Automação Link', () => {
  let length
  beforeEach(() => {
    cy.fixture('url').then((urlData) => {
      cy.visit(`/${urlData.subDirectoryChallengingDom}`);
    });
  });

  it('Clicar em Todos os links de Edit e Delete', () => {
      cy.clickEdit({columnIndex:6})
     cy.clickDelete({columnIndex:6})
  });
});
