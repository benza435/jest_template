const { Basket } = require("../classes/Basket.js");
const { Till } = require("../classes/Till.js");
const { findPrice } = require("../src/utils");

describe("Till.addProduct()", () => {
  it("updates the products property array with a correctly formed object ", () => {
    const testProduct = ["A", 50, 3, 20];
    const testTill = new Till();
    testTill.addProduct(testProduct);
    expect(testTill.products).toEqual({
      A: { price: 50, multibuy: 3, saving: 20 },
    });
  });
  it("updates the products property array repeatedly with multiple products", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];

    const expected = {
      A: { price: 50, multibuy: 3, saving: 20 },
      B: { price: 30, multibuy: 2, saving: 15 },
      C: { price: 20, multibuy: null, saving: 0 },
      D: { price: 15, multibuy: null, saving: 0 },
    };

    testProducts.forEach((product) => {
      testTill.addProduct(product);
    });
    expect(testTill.products).toEqual(expected);
  });
});

describe("Till.subtotaller()", () => {
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

describe("Till.applyDiscount", () => {
  it("returns subtotal when no discount needs to be applied", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];
    testProducts.forEach((product) => testTill.addProduct(product));
    const testBasket = new Basket(["A", "B", "C", "D", "D"]);
    const testSubtotal = testTill.subtotaller(testBasket);
    expect(testTill.applyDiscount(testSubtotal, testBasket)).toEqual(130);
  });
  it("returns discounted total for a single group of qualifying items", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];
    testProducts.forEach((product) => testTill.addProduct(product));
    const testBasket = new Basket(["A", "A", "A"]);
    const testSubtotal = testTill.subtotaller(testBasket);
    expect(testTill.applyDiscount(testSubtotal, testBasket)).toEqual(130);
  });
  it("returns correct total for multiple groups", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];
    testProducts.forEach((product) => testTill.addProduct(product));
    const testBasket = new Basket(["A", "A", "A", "B", "B", "B"]);
    const testSubtotal = testTill.subtotaller(testBasket);
    expect(testTill.applyDiscount(testSubtotal, testBasket)).toEqual(205);
  });
  it("returns correct total for multiple groups (alternate)", () => {
    const testTill = new Till();
    const testProducts = [
      ["A", 50, 3, 20],
      ["B", 30, 2, 15],
      ["C", 20, null, 0],
      ["D", 15, null, 0],
    ];
    testProducts.forEach((product) => testTill.addProduct(product));
    const testBasket = new Basket(["D", "C", "B", "B", "B", "B"]);
    const testSubtotal = testTill.subtotaller(testBasket);
    expect(testTill.applyDiscount(testSubtotal, testBasket)).toEqual(125);
  });
});
