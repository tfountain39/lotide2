// #findKeyTest

// FUNCTION IMPORTS
const expect = require('chai').expect;
const findKey = require('../findKey');

// TEST CODE
describe('#findKey', () => {
  it('should return "noma" for the given test case', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2); // => "noma"

    expect(result).to.equal("noma");
  });

  // Add more test cases if needed
});