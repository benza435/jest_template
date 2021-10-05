class Till {
  constructor() {
    this.products = [];
    this.subtotal = 0;
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

  subtotaller(basket) {
    basket.contents.forEach((item) => {
      let index = 0;
      // how to make it equal 1 when item is B?
      console.log(this.products);

      let condition = this.products.hasOwnProperty(item);

      index = this.products.findIndex(condition);
      console.log(index);

      this.subtotal += this.products[index][item].price;
    });

    return this.subtotal;
  }
  applyDiscount(subtotal, basket) {
    // count up groups of objects according to discount rules
    // return new price
  }
}

module.exports = { Till };
