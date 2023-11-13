import BasePage from "./BasePage";

class SuccessOrderPage extends BasePage{

    constructor(){
        super();
        this.elements.titleText = '.maintext';

    }

    getTitleText(){
        return cy.get(this.elements.titleText);
    };

    checkText(text){
        this.getTitleText().should('contain', text);

    }
}

export default new SuccessOrderPage();