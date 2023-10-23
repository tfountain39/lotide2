const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CODE
// Test Case 1: Testing with an odd-length array
const arr1 = [1, 2, 3, 4, 5];
console.log("Test Case 1: Middle element of arr1 is", middle(arr1));
assertArraysEqual(middle(arr1), [3]); // Expected output: [3]

// Test Case 2: Testing with an even-length array
const arr2 = [1, 2, 3, 4];
console.log("Test Case 2: Middle elements of arr2 are", middle(arr2));
assertArraysEqual(middle(arr2), [2, 3]); // Expected output: [2, 3]