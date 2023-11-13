export function login(user){
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('.heading1', {timeout: 2000}).should('contain', user.firstName);
}


export function openNeededItemFromTheCatalog(item) {
    for (let i = 0; i < 10; i++) {

        cy.get('[class="thumbnails grid row list-inline"] .prdocutname').then(($itemTitles) => {
            if ($itemTitles.text().includes(item)) {
                cy.wrap($itemTitles).click();
               
                i = 11;
            } else if (cy.get('[class="pagination"] li a').contains(">")) {
                cy.get('.pagination li:nth-last-child(2) a').click()
            }
            else {
                cy.log('element not found')
            }
        })
    }

}
   
