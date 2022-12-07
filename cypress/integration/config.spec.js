

// describe('Verify how to manage the ENV in cypress',()=>{

//     it('Verify the ENV',()=>{
//         cy.log(Cypress.config().baseUrl)
//         let url = Cypress.config().baseUrl; 
//         cy.visit(url); 
//     })
// })

//my.spec.ts

//Import Utility from support folder
import { Utility } from "../support/utility"

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

describe('Verify Environment Config' + url, () => {
    it('Verify Environment', () => {
        cy.visit(url); //use url variable
    });
});