import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
        this.elements.firstNameText = '.heading1';
    }

    getFirstNameText(){
        return cy.get(this.elements.firstNameText, {timeout: 2000})
    }

    checkUserIsLoggedIn(user){
        this.getFirstNameText().should('contain', user.firstName)
    }

    
}
export default new AccountPage();