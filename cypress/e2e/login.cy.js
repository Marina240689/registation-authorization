
import user from '../fixtures/user.json'
import loginPage from '../support/pages/LoginPage'
import accountPage from '../support/pages/AccountPage'
import homePage from '../support/pages/HomePage'


it('Login', () => {

  homePage.visit();
  homePage.clickHeaderAccountButton();
  loginPage.fillLoginForm(user);
  loginPage.clickLoginButton();

  cy.log('Verify that user is logged in')
  accountPage.checkUserIsLoggedIn(user);
})


