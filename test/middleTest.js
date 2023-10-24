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
// // Test Case 1: Testing with an odd-length array
// const arr1 = [1, 2, 3, 4, 5];
// console.log("Test Case 1: Middle element of arr1 is", middle(arr1));
// assertArraysEqual(middle(arr1), [3]); // Expected output: [3]

// // Test Case 2: Testing with an even-length array
// const arr2 = [1, 2, 3, 4];
// console.log("Test Case 2: Middle elements of arr2 are", middle(arr2));
// assertArraysEqual(middle(arr2), [2, 3]); // Expected output: [2, 3]