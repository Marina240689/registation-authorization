import home from '../support/pages/HomePage'
// import helper from '../support/helper'

it('test', () => {

    home.visit();
    home.findItemViaSearchField('i');

    //function openNeededItemFromTheCatalog(item) {
        let item = '[pprdocutname=Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15]'
        for (let i = 0; i < 10; i++) {
    
            cy.get('[class="thumbnails grid row list-inline"] .prdocutname').then(($itemTitles) => {
                if ($itemTitles.text() = includes(item)) {
                    cy.get($itemTitles.contains(item)).click();
                   
                    i = 11;
                } else if (cy.get('[class="pagination"] li a').contains(">")) {
                    cy.get('.pagination li:nth-last-child(2) a').click()
                }
                else {
                    cy.log('element not found')
                }
            })
        }
    
    //}
 




})

