// #countLettersTest

// FUNCTION IMPORTS
const assert = require('chai').assert;
const countOnly = require('../countOnly');

// TEST CODE
describe('#countOnly', () => {
  it('should return an object with counts of everything that the input object listed', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expectedOutput = { "Jason": 1, "Fang": 2 };
    assert.deepEqual(result, expectedOutput);
  });

  it('should not count items that are not in the input array', () => {
    const names = ["Alice", "Bob", "Eve"];
    const itemsToCount = { "Alice": true, "David": true };
    const result = countOnly(names, itemsToCount);
    assert.isUndefined(result["David"]);
  });

  it('should not count items if their value is set to false', () => {
    const names = ["Alice", "Bob", "Eve"];
    const itemsToCount = { "Alice": true, "Bob": false };
    const result = countOnly(names, itemsToCount);
    assert.isUndefined(result["Bob"]);
  });
});