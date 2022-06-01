// Actions to interact with Login page
const pageElements = require('./elements').ELEMENTS;
const Utils = require('../../utils');

class ProductUI {
    clickProduct(productName: string) {
        cy.get(pageElements.addProduct).click();
    }
}
  
module.exports = {
    UI: new ProductUI(),
};