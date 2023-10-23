// FUNCTION IMPLEMENTATION
// This function determines if two primitive data inputs are equal
const assertEqual = function(actual, expected) {
  // Conditional checking
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// EXPORT
module.exports = assertEqual;
