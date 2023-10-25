// #mapTest

// TEST FUNCTION
const expect = require('chai').expect;
const map = require('../map.js');


// TEST CODE
describe('#map', () => {
  it('should correctly apply the callback to each item in the array', () => {
    const result = map([1, 2, 3], num => num * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it('should return an array of the same length as the input array', () => {
    const array = ['apple', 'banana', 'cherry'];
    const result = map(array, word => word.length);
    expect(result).to.have.lengthOf(array.length);
  });

  it('should return an empty array when given an empty array', () => {
    const result = map([], num => num * 2);
    expect(result).to.be.empty;
  });

  it('should handle arrays of strings correctly', () => {
    const fruits = ['apple', 'banana', 'cherry'];
    const result = map(fruits, fruit => fruit.toUpperCase());
    expect(result).to.deep.equal(['APPLE', 'BANANA', 'CHERRY']);
  });
});