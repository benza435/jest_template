class Basket {
  constructor(contents) {
    this.contents = contents;
  }
  presentContents() {
    const organisedContents = {};
    this.contents.forEach((item) => {
      if (organisedContents.hasOwnProperty(item)) {
        organisedContents[item] += 1;
      } else {
        organisedContents[item] = 1;
      }
    });
    return organisedContents;
  }
}

module.exports = { Basket };
