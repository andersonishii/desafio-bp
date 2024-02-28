describe('Desafio Banco Parana - Automação Button', () => {

  beforeEach(() => {
    cy.fixture('url').then((urlData) => {
      cy.visit(`/${urlData.subDirectoryChallengingDom}`);
    });
  });

  it('Clicar nos botões Baz(azul) , baz(vermelho) e baz ( verde)', () => {
    cy.clickButton({nthChild:1,rgbBackground:'43, 166, 203'});
    cy.clickButton({nthChild:3,rgbBackground:'198, 15, 19'});
    cy.clickButton({nthChild:5,rgbBackground:'93, 164, 35'});
  });
});
