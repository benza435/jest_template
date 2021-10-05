const { findPrice } = require("../utils");

class Till {
  constructor() {
    this.products = {};
    this.subtotal = 0;
  }

  addProduct(productProperties) {
    let productCode = productProperties[0];
    this.products[productCode] = {
      price: productProperties[1],
      multibuy: productProperties[2],
      saving: productProperties[3],
    };
  }

  subtotaller(basket) {
    basket.contents.forEach((item) => {
      this.subtotal += findPrice(item, this.products);
    });

    return this.subtotal;
  }
  applyDiscount(subtotal, basket) {
    // count up groups of objects according to discount rules
    // return new price
  }
}

module.exports = { Till };
