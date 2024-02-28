const {expect} = require("chai").use(require('chai-json-schema'));
import {schema} from '../../cypress/support/schema/schemaPost.js'
import {urlPost} from '../../cypress/support/url/post.js'

describe('Desafio Banco Parana - Automação API  - GET POST', () => {

  it('POST Post - Cria um novo Registro', () => {
    cy.postPost({uri:`${urlPost}`,title:'foo',body:'bar',userId:1}).then((response)=>{
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('body')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('title')
    })
  }); 

});
