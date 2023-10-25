// #eqObjectsTest

// FUNCTION IMPORTS
const expect = require('chai').expect;
const eqObjects = require('../eqObject');

// TEST CODE
describe('#eqObjects', () => {
  it('should return true for two objects with the same key-value pairs', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    expect(eqObjects(shirtObject, anotherShirtObject)).to.be.true;
  });

  it('should return false for two objects with different key-value pairs', () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    expect(eqObjects(shirtObject, longSleeveShirtObject)).to.be.false;
  });
});