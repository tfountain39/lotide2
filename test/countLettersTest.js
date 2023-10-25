// #countLettersTest

// FUNCTION IMPORTS
const assert = require('chai').assert;
const countLetters = require('../countLetters');

// TEST CODE
describe('#countLetters', () => {
  const sentence = "This is a sentence used for assertion";
  const result = countLetters(sentence);

  it('should return correct letter count for a given sentence', () => {
    assert.equal(result['t'], 3);
    assert.equal(result['i'], 3);
    assert.equal(result['s'], 6);
    assert.equal(result['a'], 2);
  });

  it('should return undefined for letters that do not exist in the sentence', () => {
    assert.isUndefined(result['z']);
    assert.isUndefined(result['x']);
  });

  it('should handle case sensitivity by converting all letters to lowercase', () => {
    assert.equal(result['t'], 3);
  });

  it('should not count spaces', () => {
    assert.isUndefined(result[' ']);
  });
});