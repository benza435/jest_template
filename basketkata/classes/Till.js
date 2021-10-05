const { findPrice } = require("../utils.js");

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
    const productsInBasket = Object.keys(this.products);
    let discount = 0;
    productsInBasket.forEach((product) => {
      if (
        basket.presentContents()[product] >= this.products[product].multibuy &&
        this.products[product].multibuy != null
      ) {
        discount +=
          Math.floor(
            basket.presentContents()[product] / this.products[product].multibuy
          ) * this.products[product].saving;
      }
    });
    return subtotal - discount;
  }
}

module.exports = { Till };
