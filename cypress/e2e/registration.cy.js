import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';

user.email = faker.internet.email({ provider: 'fakeMail.com'});
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postcode = faker.location.zipCode('####');

describe('Registration', () => {

  it('Registration', () => {
    homePage.visit();
    
    cy.log('Opening registration page...');
    homePage.getHeaderAccountButton().click();    
    loginPage.getRegisterAccountButton().click();

    registrationPage.fillRegistrationFields(user);

    cy.log('Submit registration form...');
    registrationPage.getNewsLetterCheckbox().check();
    registrationPage.getPrivacyPolicyCheckbox().check();
    registrationPage.getSubmitRegistrationFormButton().click();

    cy.log('Verify first name displayed on account page...');
    accountPage.getFirstNameText().should('contain', user.firstName);
})


  it('Login', () => {
    cy.log('Perfom login');
    loginPage.fullLogin(user);

  })

})