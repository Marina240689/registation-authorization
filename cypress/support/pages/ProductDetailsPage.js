
import BasePage from './BasePage';

class ProductDetailsPage extends BasePage{

    constructor(){
        super();
        this.elements.addToCartButton = '.productpagecart';

    }


    getAddToCartButton(){
        return cy.get(this.elements.addToCartButton);
    }


    addItemToCart(){
        this.getAddToCartButton().should('be.visible');
        this.getAddToCartButton().click();

    }





}

export default new ProductDetailsPage();