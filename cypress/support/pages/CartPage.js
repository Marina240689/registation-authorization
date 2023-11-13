import BasePage from "./BasePage";

class CartPage extends BasePage{

    constructor(){
        super();
        this.elements.totalCheckoutButton = '#cart_checkout2';
        this.elements.productName = '.align_left [href]';
    }


    getTotalCheckoutButton(){
        return cy.get(this.elements.totalCheckoutButton);
    }

    getProductName(){
        return cy.get(this.elements.productName);
    }

    checkout(){
        this.getTotalCheckoutButton().click();
    }







}

export default new CartPage();