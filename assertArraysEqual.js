// IMPORT FUNCTIONS
const eqArrays = require('./eqArrays.js')

// MAIN FUNCTION
// This function determines if two arrays are equal to each other
const assertArraysEqual = function(array1, array2) {
  const arraysAreEqual = eqArrays(array1, array2);
  arraysAreEqual
    ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
    : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};

// EXPORT FUNCTIONS
module.exports = assertArraysEqual;