import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../../pages/LoginPage'
import ProductPage from "../../../pages/ProductPage";

const loginPage =  new LoginPage()
const productPage = new ProductPage()

Given('User is on Swaglab Login page',function()
{
  cy.visit(this.data.LoginPageUrl) 
})

When('User enter username {string} and password {string} in text field',function(username,password)
{
    loginPage.setUserName(username)
    loginPage.setPassword(password)
})

And('User tap on login button',function()
{
    loginPage.clickLoginButton()
})



Then('User should navigate to Products page',function()
{
    productPage.verifyHeader()
})

And('User should able to see the specic product image',function()
{
    productPage.verifySauceLabsBackpackImage()
    productPage.verifySauceLabsBikeLightImage()
    
})

Then('User should see error message {string} on login page',function(errorMsg)
{
    loginPage.verifyErrorMessage(errorMsg)
})





 


