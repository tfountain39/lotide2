// #assertArrayEqual

// IMPORT
const eqArrays = require('./eqArray.js')

// MAIN FUNCTION
const assertArrayEqual = function(array1, array2) {
  return eqArrays(array1, array2);
};

// EXPORT
module.exports = assertArrayEqual;