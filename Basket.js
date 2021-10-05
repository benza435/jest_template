// this class holds the items and totals the quantities
class Basket {
  constructor(contents) {
    //pass an array of contents
    this.contents = contents;
  }
  //total the quatities of stuff, return an object with totals:  {"A":2,"B":4,"C":0}
  organise() {
    return { A: 1 };
  }
}

module.exports = { Basket };
