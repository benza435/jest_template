class Till {
  constructor() {
    this.products = [];
  }

  addProduct(productProperties) {
    this.products.push({
      [productProperties[0]]: {
        price: productProperties[1],
        multibuy: productProperties[2],
        saving: productProperties[3],
      },
    });
  }

  subtotal(basket) {
    //foreach item in basket subtotal += item.price
    //return price
  }
  applyDiscount(subtotal, basket) {
    // count up groups of objects according to discount rules
    // return new price
  }
}

module.exports = { Till };
