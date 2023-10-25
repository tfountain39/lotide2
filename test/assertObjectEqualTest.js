// #assertObjectsEqualTest

// FUNCTION IMPORTS
const assert = require('chai').assert;
const assertObjectEqual = require('../assertObjectEqual'); // Adjust the path as needed

// TEST CODE
describe("#assertObjectEqual", () => {
  it("should return true for two equal objects", () => {
    const obj1 = {
      name: "John",
      age: 30
    };

    const obj2 = {
      name: "John",
      age: 30
    };

    assert.isTrue(assertObjectEqual(obj1, obj2));
  });

  it("should return false for objects with different values", () => {
    const obj1 = {
      name: "John",
      age: 30
    };

    const obj2 = {
      name: "Jane",
      age: 30
    };

    assert.isFalse(assertObjectEqual(obj1, obj2));
  });

  it("should return false for objects with different keys", () => {
    const obj1 = {
      name: "John",
      age: 30
    };

    const obj2 = {
      firstName: "John",
      age: 30
    };

    assert.isFalse(assertObjectEqual(obj1, obj2));
  });
});