const {expect} = require("chai").use(require('chai-json-schema'));
import {schemaPost} from '../../cypress/support/schema/schemaPost.js'
import {urlPost} from '../../cypress/support/url/post.js'

describe('Desafio Banco Parana - Automação API  - GET PUT', () => {

  it('POST Post - Atualizar registro espefico ', () => {
    cy.putPost({uri:`${urlPost}/1`,id:1,title:'foo',body:'bar',userID:1}).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('body')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('userId')
      expect(response.body.id).to.eq(1)
      expect(response.body).to.be.jsonSchema(schemaPost)
    })
  }); 

});
