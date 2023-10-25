// #assertArraysEqualTest

// TEST IMPORTS
const assert = require('chai').assert;
const assertArrayEqual = require('../assertArrayEqual.js');

// TEST ASSERTIONS
describe("#assertArrayEqual", () => {
  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.isTrue(assertArrayEqual(array1, array2));
  });

  it("should return false for [1, 2, 3] and [1, 2, 4]", () => {
    const array3 = [1, 2, 3];
    const array4 = [1, 2, 4];
    assert.isFalse(assertArrayEqual(array3, array4));
  });
});