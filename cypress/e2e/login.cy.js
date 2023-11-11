it('Login', () => {
    cy.visit('https://automationteststore.com');
    cy.get('[href="https://automationteststore.com/index.php?rt=account/login"]').first().click();
    

    cy.get('[id="loginFrm_loginname"]').type('TestUsername8');
    cy.get('[id="loginFrm_password"]').type('Password1');
    cy.get('[title="Login"]').click();
    cy.get('.sidewidt').should('be.visible');


  })