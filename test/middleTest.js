// #middleTest

// TEST IMPORTS
const assert = require('chai').assert;
const middle = require('../middle');


// TEST ASSERTIONS
describe("#middle", () => {
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    const arr1 = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(arr1), [3]);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    const arr2 = [1, 2, 3, 4];
    assert.deepEqual(middle(arr2), [2, 3]);
  });
})
