// #assertArraysEqualTest

// TEST IMPORTS
const assertArraysEqual = require('../assertArraysEqual.js');

module.exports = assertArraysEqual;

// TEST ASSERTIONS
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

assertArraysEqual(array1, array2); // This should log: "✅ Assertion Passed: 1,2,3 and 1,2,3 are equal"

const array3 = [1, 2, 3];
const array4 = [1, 2, 4];

assertArraysEqual(array3, array4); // This should log: "🛑 Assertion Failed: 1,2,3 and 1,2,4 are not equal"