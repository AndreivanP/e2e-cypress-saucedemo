
/// <reference types="cypress" />

const LoginAction = require('../page/login');
const Utils = require('../utils');
const ProductAction = require('../page/product');

let USER: any;
const randomName = Utils.setRandomName();
const randomEmail = Utils.setRandomEmail(randomName);

describe('On products page', () => {
  beforeEach(() => {

    USER = {
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
    };

    LoginAction.Cookie.submitLogin(USER.username, USER.password);
    cy.visit('/inventory.html', {failOnStatusCode: false});
});

  it('Should add two products to the shopping cart', () => {

    ProductAction.UI.clickProduct('aaaaa')
    
  });

});
