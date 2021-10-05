const { Basket } = require("../classes/Basket.js");
const { Till } = require("../classes/Till.js");

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

describe("Till.addProduct()", () => {
  it("updates the products property array with a correctly formed object ", () => {
    const testProduct = ["A", 50, 3, 20];
    const testTill = new Till();
    testTill.addProduct(testProduct);
    expect(testTill.products).toEqual([
      { A: { price: 50, multibuy: 3, saving: 20 } },
    ]);
  });
  it("updates the products property array repeatedly with multiple products", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];

    const expected = [
      { A: { price: 50, multibuy: 3, saving: 20 } },
      { B: { price: 30, multibuy: 2, saving: 15 } },
      { C: { price: 20, multibuy: null, saving: 0 } },
      { D: { price: 15, multibuy: null, saving: 0 } },
    ];
    testProducts.forEach((product) => {
      testTill.addProduct(product);
    });
    expect(testTill.products).toEqual(expected);
  });
});

describe.skip("Till.subtotaller()", () => {
  it("returns collective cost of all items in basket, before discount (single item test)", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];
    testProducts.forEach((product) => testTill.addProduct(product));
    const testBasket = new Basket(["A"]);
    expect(testTill.subtotaller(testBasket)).toEqual(50);
  });
  it("returns collective cost of all items in basket, before discount (single item test, alternate item)", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];
    testProducts.forEach((product) => testTill.addProduct(product));
    const testBasket = new Basket(["B"]);
    expect(testTill.subtotaller(testBasket)).toEqual(30);
  });
});
