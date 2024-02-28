import {schema} from '../../support/schema/schemaPost.js'


function getPost(requestedData = {}) {
    const data = {
        ...requestedData,
      };
      cy.request({
        method: 'GET',
        url: `${data.uri}`,
        failOnStatusCode: false
    }).then((response) => {
          cy.wrap(response).as('response');
    })
    return cy.get('@response')
      
}

function deletePost(requestedData = {}) {
  const data = {
      ...requestedData,
    };
    cy.request({
      method: 'DELETE',
      url: `${data.uri}`,
      failOnStatusCode: false
  }).then((response) => {
        cy.wrap(response).as('response');
  })
  return cy.get('@response')    
}

function putPost(requestedData = {}) {
  const data = {
      ...requestedData,
    };
    cy.request({
      method: 'PUT',
      url: `${data.uri}`,
      failOnStatusCode: false,
      body: {
        "id": data.id,
        "title": `${data.title}`,
        "body": `${data.body}`,
        "userId": data.userID

    }
  }).then((response) => {
        cy.wrap(response).as('response');
  })
  return cy.get('@response')    
}

function postPost(requestedData = {}) {
  const data = {
      ...requestedData,
    };
    cy.request({
      method: 'POST',
      url: `${data.uri}`,
      failOnStatusCode: false,
      body: {
        "title": data.title,
        "body": data.body,
        "userId": data.userID
    }
  }).then((response) => {
        cy.wrap(response).as('response');
  })
  return cy.get('@response')    
}

Cypress.Commands.add('postPost', (data) => postPost(data));  

Cypress.Commands.add('putPost', (data) => putPost(data));  

Cypress.Commands.add('deletePost', (data) => deletePost(data));  

Cypress.Commands.add('getPost', (data) => getPost(data));