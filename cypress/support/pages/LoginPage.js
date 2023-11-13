///<reference types="cypress"/>

import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor(){
        super();
        this.elements.registerAccountButton = '#accountFrm button';
        this.elements.loginButton = '[title="Login"]';
        this.elements.usernameField = '[id="loginFrm_loginname"]';
        this.elements.passwordField = '[id="loginFrm_password"]';
    }

    visitLogin() {
        cy.visit('/index.php?rt=account/login');
    }

    getRegisterAccountButton(){
        return cy.get(this.elements.registerAccountButton)
    }

    getLoginButton(){
        return cy.get(this.elements.loginButton);
    }

    getUsernameField() {
        return cy.get(this.elements.usernameField);
    }

    getPasswordField(){
        return cy.get(this.elements.passwordField);
    }


    fillLoginForm(user){
        cy.log('Fill login form');
        this.getUsernameField().type(user.loginName);
        this.getPasswordField().type(user.password);
    }

    clickLoginButton(){
        this.getLoginButton().click();
    }

    fullLogin(user){
        this.visitLogin();
        this.fillLoginForm(user);
        this.clickLoginButton();
        cy.get('.heading1', {timeout: 2000}).should('contain', user.firstName);
    }



}

export default new LoginPage();