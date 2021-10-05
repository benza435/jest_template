class Till {
  constructor() {
    this.prop = null;
    this.products = [];
  }
  // this class needs methods to reprice the entire basket
  //  and a method to accept the repricing rules

  addProduct(code, price, multibuyQty, saving) {}
}

module.exports = { Till };
/*
format of price object:

[item, price, special]
[
    {'A':{'price':50, 'multibuy': 3, 'saving': 20}},
    'B':{'price':30, 'multibuy': 2, 'saving': 15},
    'C':{'price':20, 'multibuy': null,'saving':0},
    'D':{'price':15, 'multibuy': null,'saving':0},

]
*/
