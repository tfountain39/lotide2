// #findKeyByValueTest.js

// FUNCTION IMPORTS
const expect = require('chai').expect;
const findKeyByValue = require('../findKeyByValue');

// TEST CODE
describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "Star Trek: TOS",
    comedy: "Friends",
    drama: "Kaguya Sama: Love is War"
  };
  it('should return "drama" for "Kaguya Sama: Love is War"', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "Kaguya Sama: Love is War")).to.equal('drama');
  });

  it('should return undefined for "That \'70s Show"', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.be.undefined;
  });
});