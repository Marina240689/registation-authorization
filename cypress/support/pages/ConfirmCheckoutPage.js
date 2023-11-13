import BasePage from "./BasePage";

class ConfirmCheckoutPage extends BasePage{

    constructor(){
        super();
        this.elements.confirmOrderButton = '#checkout_btn';
    }

    getConfirmOrderButton(){
        return cy.get(this.elements.confirmOrderButton);
    }


    confirmOrder(){
        this.getConfirmOrderButton().click();
    }


}

export default new ConfirmCheckoutPage();