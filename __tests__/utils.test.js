const { Basket } = require("../classes/Basket.js");
const { Till } = require("../classes/Till.js");
const { findPrice } = require("../utils.js");

describe("findPrice", () => {
  it("returns the correct price for an item", () => {
    const till = {
      A: { price: 50, multibuy: 3, saving: 20 },
      B: { price: 30, multibuy: 2, saving: 15 },
      C: { price: 20, multibuy: null, saving: 0 },
      D: { price: 15, multibuy: null, saving: 0 },
    };

    const item = "B";

    expect(findPrice(item, till)).toEqual(30);
  });
});
