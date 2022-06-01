/// <reference types="cypress" />
const LoginAction = require('../page/login');
const Utils = require('../utils');
const globalElements = require('../page/global/elements').ELEMENTS;
const loginElements = require('../page/login/elements').ELEMENTS;

let USER: any;
const randomName = Utils.setRandomName();
const randomEmail = Utils.setRandomEmail(randomName);

describe('On login page', () => {
  beforeEach(() => {

    USER = {
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
    };
    LoginAction.UI.visitLogin();
});

  it('Should login with valid credentials', () => {
    // Prepare
    const LOGIN = {
      username: USER.username,
      password: USER.password,
    };

    // Execute
    LoginAction.UI.submitLogin(LOGIN.username, LOGIN.password);

    // Assert
    cy.get(globalElements.shoppingCartLink).should('exist');
  });

  it('Should not login with invalid credentials', () => {
    // Prepare
    const LOGIN = {
      username: randomName,
      password: randomEmail,
    };

    // Execute
    LoginAction.UI.submitLogin(LOGIN.username, LOGIN.password);

    // Assert
    cy.get(loginElements.wrongUserPassError).should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

});
