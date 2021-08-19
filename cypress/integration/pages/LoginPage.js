 export default class LoginPage{

    username(){return cy.get('#user-name')}
    password(){return  cy.get('#password')}
    loginButton(){return  cy.get('#login-button')}
    errorMessage(){return  cy.get('[data-test="error"]')}
    


    setUserName(username){
        this.username().type(username)
    }  

    setPassword(password){
        this.password().type(password)
    } 

    clickLoginButton(){
        this.loginButton().click()
    } 


    verifyErrorMessage(errorMsg){
        this.errorMessage().should('have.text',errorMsg)
    }
        
    }
