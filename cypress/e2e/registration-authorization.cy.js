

describe('Registration and authorization', () => {

  it('fill form and login', () => {
    cy.visit('https://automationteststore.com');
    cy.get('[href="https://automationteststore.com/index.php?rt=account/login"]').first().click();
    cy.get('[title="Continue"]').click();

    cy.get('#AccountFrm_firstname').type('First Name');
    cy.get('#AccountFrm_lastname').type('Last Name');

    cy.get('#AccountFrm_email').type('test6@mail.com');

    cy.get('#AccountFrm_telephone').type('0441111111111');
    cy.get('#AccountFrm_fax').type('044222222222');
    cy.get('#AccountFrm_company').type('Company');
    cy.get('#AccountFrm_address_1').type('address 1');
    cy.get('#AccountFrm_address_2').type('address 2');
    cy.get('#AccountFrm_city').type('Kyiv');
    cy.get('[name="country_id"]').select('Ukraine').should('have.value', '220');
    cy.get('[name="zone_id"]').select('3490').should('have.value', '3490');
    cy.get('#AccountFrm_postcode').type('33001');

    cy.get('#AccountFrm_loginname').type('TestUsername6');

    cy.get('#AccountFrm_password').type('Password1');
    cy.get('#AccountFrm_confirm').type('Password1');
    cy.get('[type="radio"]').eq(1).check();
    cy.get('[type="checkbox"]').check();

    cy.get('button[type="submit"]').eq(0).click();
    cy.get('.maintext').should('contain', ' Your Account Has Been Created!');
    

    cy.get('.side_account_list [href="https://automationteststore.com/index.php?rt=account/logout"]').click();
    cy.get('[href="https://automationteststore.com/index.php?rt=account/login"]').first().click();
    cy.get('[id="loginFrm_loginname"]').type('TestUsername6');
    cy.get('[id="loginFrm_password"]').type('Password1');
    cy.get('[title="Login"]').click();
    cy.get('.sidewidt').should('be.visible');


  })
})