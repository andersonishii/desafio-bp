const {expect} = require("chai").use(require('chai-json-schema'));
import {schema} from '../../cypress/support/schema/schemaPost.js'

import {urlPost} from '../../cypress/support/url/post.js'
describe('Desafio Banco Parana - Automação API  - GET Post', () => {

  beforeEach(() => {
  
  });

  it('GET All Post', () => {
    cy.getPost({uri:`${urlPost}`}).then((response)=>{
      expect(response.status).to.eq(200)
      for (const resp of response.body) {
        expect(resp).to.be.jsonSchema(schema)
        expect(resp).to.have.property('userId')
        expect(resp).to.have.property('id')
        expect(resp).to.have.property('title')
        expect(resp).to.have.property('body')
      }
    })
  });

  it('GET Post - Registro Espefico', () => {
    cy.getPost({uri:`${urlPost}/1`}).then((response)=>{
      expect(response).property('body')
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('userId')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('body')
      expect(response.body.id).to.eq(1)
      expect(response.body).not.to.be.null
    })
  });

  it('GET Post - Nao retornar nenhum registro quando ID inexistir', () => {
    cy.getPost({uri:`${urlPost}/101`}).then((response)=>{
      expect(response).property('body')
      expect(response.status).to.eq(404)   
    })
  });
});
