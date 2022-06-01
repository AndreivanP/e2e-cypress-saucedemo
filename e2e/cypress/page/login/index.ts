// Actions to interact with Login page
const pageElements = require('./elements').ELEMENTS;
const Utils = require('../../utils');

class LoginUI {
  visitLogin() {
    cy.visit('/');

    cy.get(pageElements.inputEmail).should('exist');
    cy.get(pageElements.inputPass).should('exist');
    cy.get(pageElements.buttonEnter).should('exist');
  }

  submitLogin(user: string, pass: string) {
    cy.get(pageElements.inputEmail).type(user);
    cy.get(pageElements.inputPass).type(pass);
    cy.get(pageElements.buttonEnter).click();
  }
}

class LoginCookie {
  submitLogin(user: string, pass: string) {
    document.cookie = `session-username=${user}; expires=${Utils.setExpireCookieDate()}; path=/`
  }
}

module.exports = {
  UI: new LoginUI(),
  Cookie: new LoginCookie(),
};