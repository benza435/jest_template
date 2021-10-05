const { Basket } = require("../Basket.js");

describe("Basket.organise()", () => {
  it("returns {'A':1}, when called with ['A'] ", () => {
    const testContents = ["A"];
    const testBasket = new Basket(testContents);
    expect(testBasket.organise()).toEqual({ A: 1 });
  });
});
