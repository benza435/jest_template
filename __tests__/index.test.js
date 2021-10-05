const { Basket } = require("../Basket.js");

describe("Basket.presentContents()", () => {
  it("returns correct object when called with a single item", () => {
    const testContents = ["A"];
    const testBasket = new Basket(testContents);
    expect(testBasket.presentContents()).toEqual({ A: 1 });
  });
  it("returns correct object when called with an alternate single item ", () => {
    const testContents = ["B"];
    const testBasket = new Basket(testContents);
    expect(testBasket.presentContents()).toEqual({ B: 1 });
  });
  it("returns correct object when called with single quantities of multiple items", () => {
    const testContents = ["A", "B"];
    const testBasket = new Basket(testContents);
    expect(testBasket.presentContents()).toEqual({ A: 1, B: 1 });
  });
  it("returns {'A':2, 'B':1}, when called with ['A','B', 'A'] - does not duplicate keys", () => {
    const testContents = ["A", "B", "A"];
    const testBasket = new Basket(testContents);
    expect(testBasket.presentContents()).toEqual({ A: 2, B: 1 });
  });
  it("sums up a decent sized basket of various multiples", () => {
    const testContents = [
      "A",
      "B",
      "A",
      "B",
      "C",
      "C",
      "D",
      "A",
      "D",
      "C",
      "A",
      "E",
      "F",
      "B",
    ];
    const testBasket = new Basket(testContents);
    expect(testBasket.presentContents()).toEqual({
      A: 4,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 1,
    });
  });
});
