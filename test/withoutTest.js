// #withoutTest

// TEST IMPORTS
const assert = require('chai').assert
const without = require('../without.js')

// TEST CODE
// const words = ["tree", "true", true];
// const result = without(words, ["tree"]);
// assertArrayEqual(result, ["true", true]);
// assertArrayEqual(words, ["tree", "true", true]);

describe("#takeUntil", () => {
  it('should return an array without specified items', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3], "Array should only contain [2, 3]");
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], "Array should only contain ['1', '2']");
  });

  it('should not modify the original array', () => {
    const originalArray = [1, 2, 3];
    without(originalArray, [1]);
    assert.deepEqual(originalArray, [1, 2, 3], "Original array should remain unchanged");
  });

  it('should return an empty array if all items are removed', () => {
    assert.deepEqual(without([1, 2, 3], [1, 2, 3]), [], "Array should be empty");
  });

  it('should return the same array if no items are removed', () => {
    assert.deepEqual(without([1, 2, 3], [4, 5]), [1, 2, 3], "Array should be [1, 2, 3]");
  });
});