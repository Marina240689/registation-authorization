import loginPage from '../support/pages/LoginPage'; 
import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import item from '../fixtures/items.json';
import productDetail from '../support/pages/ProductDetailsPage';
import cart from '../support/pages/CartPage';
import confirm from '../support/pages/ConfirmCheckoutPage';
import successOrderPage from '../support/pages/SuccessOrderPage';


describe('Successfull order', () => {

    it('Make an order', () => {
      loginPage.fullLogin(user);
      homePage.visit();

      cy.log('Find item via Search field');
      homePage.chooseItemByTitle(item.itemTitle);

      cy.log('Add item to the cart from product details page and check');
      productDetail.addItemToCart();
      cart.getProductName().should('contain', item.itemTitle)


      cy.log('Finish order');
      cart.checkout();
      confirm.confirmOrder();

      cy.log('Check order was created');
      successOrderPage.checkText(' Your Order Has Been Processed!');
     
    })
})