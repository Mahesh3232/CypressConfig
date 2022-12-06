

describe('Verify how to manage the ENV in cypress',()=>{

    it('Verify the ENV',()=>{
        cy.log(Cypress.config().baseUrl)
        let url = Cypress.config().baseUrl; 
        cy.visit(url); 
    })
})