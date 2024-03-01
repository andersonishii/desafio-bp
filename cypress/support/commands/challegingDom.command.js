

function clickButton(requestedData = {}) {
    const data = {
        ...requestedData,
      };
      cy.intercept('GET','/challenging_dom').as('getChallegingDom')  
      cy.get('.large-2').within(()=>{
        cy.get(`a:nth-child(${data.nthChild})`).click()
        cy.wait('@getChallegingDom').its('response.statusCode').should('eq', 200)
      })
      
  }

  function countTrElement() {
      let length=0
      cy.get("tbody").find('tr').then($value => {
        length = $value.length
        cy.wrap(length).as('countTr');
    });
    return cy.get('@countTr');
  }

function clickEdit(requestedData = {}) {
  const data = {
     ...requestedData,
  };
  cy.countTrElement().then((lenght) => {
    for (var i = 0; i<lenght; i++) {
      cy.get('tbody').find('tr').eq(i).find('td').eq(data.columnIndex).find('a[href="#edit"]').click()
    }
  })
}

function clickDelete(requestedData = {}) {
  const data = {
     ...requestedData,
    };
  cy.countTrElement().then((lenght) => {
    for (var i = 0; i<lenght; i++) {
      cy.get('tbody').find('tr').eq(i).find('td').eq(data.columnIndex).find('a[href="#delete"]').click()
    }
  })
}

Cypress.Commands.add('clickDelete', (data) => clickDelete(data));

Cypress.Commands.add('clickEdit', (data) => clickEdit(data));

Cypress.Commands.add('countTrElement', (data) => countTrElement(data));
  
Cypress.Commands.add('clickButton', (data) => clickButton(data));