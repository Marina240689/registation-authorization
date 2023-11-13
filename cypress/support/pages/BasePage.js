export default class BasePage{
    
    constructor(){
        this.elements = {};
        this.elements.headerAccountButton = '.topnavbar [data-id="menu_account"]';
        this.elements.searchField = 'input#filter_keyword';
        this.elements.categoryMenuItems = '.nav-pills.categorymenu';
        this.elements.searchButton = '.button-in-search';
    }

    getHeaderAccountButton(){
        return cy.get(this.elements.headerAccountButton);
    }

    getSearchField(){
        return cy.get(this.elements.searchField);
    }

    getSearchButton(){
        return cy.get(this.elements.searchButton);
    }

    clickHeaderAccountButton(){
        this.getHeaderAccountButton().click();
    }

    typeItemInSearchField(text){
        this.getSearchField().type(text);
    }

    checkTextInSearchField(text){
        this.getSearchField().should('have.value', text);
    }

    clickSearchButton(){
        this.getSearchButton().click();
    }

    findItemViaSearchField(text){
        this.typeItemInSearchField(text);
        this.checkTextInSearchField(text);
        this.clickSearchButton();
    }




}