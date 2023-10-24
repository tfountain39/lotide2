// TEST IMPORTS
const tail = require('../tail');
const assert = require('chai').assert;

// TEST ASSERTIONS
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns an empty array for a single-element array ['Hello']", () => {
    const result = tail(["Hello"]);
    assert.deepEqual(result, []);
  });

  it("returns an empty array for an empty array", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});