// #letterPositionTest

// FUNCTION IMPORTS
const assert = require('chai').assert;
const expect = require('chai').expect;
const letterPosition = require('../letterPosition');

// TEST CODE
describe('#letterPosition', () => {
  it('should return correct letter positions for "hello world"', () => {
    const result = letterPosition("hello world");
    expect(result['h']).to.deep.equal([0]);
    expect(result['e']).to.deep.equal([1]);
    expect(result['l']).to.deep.equal([2, 3, 9]);
    expect(result['o']).to.deep.equal([4, 7]);
    expect(result['w']).to.deep.equal([6]);
    expect(result['r']).to.deep.equal([8]);
    expect(result['d']).to.deep.equal([10]);
  });
  
  it('should return an empty object for an empty string', () => {
    const result = letterPosition("");
    assert.deepEqual(result, {}, "Object is not empty");
  });

  it('should handle uppercase letters correctly', () => {
    const result = letterPosition("Hello World");
    assert.deepEqual(result['h'], [0], "Array for 'h' is not correct");
  });

  it('should not include spaces in the result object', () => {
    const result = letterPosition("hello world");
    assert.isUndefined(result[' '], "Spaces should not be included in the result object");
  });
});