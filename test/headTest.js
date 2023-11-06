const head = require('../head');
const assert = require('chai').assert;

//Tests
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("should return 5 for[5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should return 'howdy' for ['howdy', 'lighthouse', 'labs']", () => {
    assert.strictEqual(head(['howdy', 'lighthouse', 'labs']), 'howdy');
  })
});
