// TEST FUNCTION
const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js')

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1], [1]), true); // => should PASS
assertEqual(eqArrays(['abc', 'def'], ['abc', 'def']), true); // => should PASS