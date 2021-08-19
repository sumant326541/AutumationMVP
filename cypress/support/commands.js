// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import LoginPage from '../../cypress/integration/pages/LoginPage'
import ProductPage from "../../cypress/integration/pages/ProductPage";

const loginPage =  new LoginPage()
const productPage = new ProductPage()

// this is costom command for ligin
   Cypress.Commands.add('doLogin', (email, password) => { 
      loginPage.setUserName(email)
      loginPage.setPassword(password)
      loginPage.clickLoginButton()

    })
   
// this is custom command for verify element is displaying by text
   Cypress.Commands.add('verifyElementDisplayedByText', (text) => { 
     cy.contains(text).should('be.visible')
    })

    // this is custom command for verify element is not displaying by text
   Cypress.Commands.add('verifyElementNotDisplayedByText', (text) => { 
   cy.contains(text).should('not.be.visible')
    })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
