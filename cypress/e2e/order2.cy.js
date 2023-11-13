import home from '../support/pages/HomePage'

it('test', () => {

    home.visit();
    home.findItemViaSearchField('i');

        // let item = '[title=Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15]'
        // for (let i = 0; i < 0; i++) {
    
        //     cy.get('[class="thumbnails grid row list-inline"] .prdocutname[title]').contains('[title=Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15]').then(($product) => {
        //         if (($itemTitles.text().contains('[title=Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15]'))) {
        //             cy.wrap($itemTitles).click();
                   
        //             i = 11;
        //         } else if (cy.get('[class="pagination"] li a').contains(">")) {
        //             cy.get('.pagination li:nth-last-child(2) a').click()
        //         }
        //         else {
        //             cy.log('element not found')
        //         }
        //     })
        // }



        // function findProduct(){

            cy.get('[class="thumbnails grid row list-inline"] .prdocutname[title]').contains('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15').then(($product) => {
                if ($product.length > 0) {
                    cy.wrap($product).click();

                    return;
                }
                 else {

                    cy.get('.pagination li:nth-last-child(2) a').click()

                }


            })
                    
        
                







        // for (let i = 0; i < 10; i++) {

        //     cy.get('[class="thumbnails grid row list-inline"] .prdocutname').then(($itemTitles) => {
        //         if ($itemTitles.includes('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15]')) {
        //             cy.wrap($itemTitles).click();
                   
        //         } else if (cy.get('[class="pagination"] li a').contains(">")) {
        //             cy.get('.pagination li:nth-last-child(2) a').click()
        //         }
        //         else {
        //             cy.log('element not found')
        //         }
        //     })
        // }
    
    

 




})

