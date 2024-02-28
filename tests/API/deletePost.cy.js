const {expect} = require("chai").use(require('chai-json-schema'));
import {urlPost} from '../../cypress/support/url/post.js'

describe('Desafio Banco Parana - Automação API  - GET Delete', () => {

  it('DELETE Post - Deletar registro espefico ', () => {
    cy.deletePost({uri:`${urlPost}/1`}).then((response)=>{
      expect(response.status).to.eq(200)
    })
  }); 
  it('DELETE Post - Nao permitir deletar quando nao espeficico o ID', () => {
    cy.deletePost({uri:`${urlPost}`}).then((response)=>{
      expect(response.status).to.eq(404)   
    })
  });
});
