// #eqArraysTest

// TEST IMPORTS
const assert = require('chai').assert;
const eqArray = require('../eqArray');

// TEST CODE
describe('#eqArray', () => {
  it('should return true for equal arrays', () => {
    assert.isTrue(eqArray([1, 2, 3], [1, 2, 3]));
    assert.isTrue(eqArray(["Hello", "World"], ["Hello", "World"]));
  });

  it('should return false for arrays of different lengths', () => {
    assert.isFalse(eqArray([1, 2, 3], [1, 2, 3, 4]));
    assert.isFalse(eqArray(["Hello"], ["Hello", "World"]));
  });

  it('should return false for arrays with same length but different elements', () => {
    assert.isFalse(eqArray([1, 2, 3], [4, 5, 6]));
    assert.isFalse(eqArray(["Hello", "World"], ["Hello", "world"])); // Different case
  });

  it('should return true for empty arrays', () => {
    assert.isTrue(eqArray([], []));
  });
});