import BasePage from "./BasePage";

class HomePage extends BasePage{
    
    constructor(){
        super();
        this.elements.itemTitle = '[title]';
    }

    visit(){
        cy.log('Opening home page...');
        cy.visit('/');
    }

    getItemTitle(title){
        return cy.get(this.elements.itemTitle).contains(title);
    }

    chooseItemByTitle(title){
        this.getItemTitle(title).click();
    }


    





}
export default new HomePage();