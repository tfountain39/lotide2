// #findKey

// TEST FUNCTION
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};


// MAIN FUNCTION
// This function finds a key in an object based on a callback function
const findKey = function(object, callback) {
  // Grab all the keys from the object
  const keys = Object.keys(object);
  // Loop through each key
  for (const key of keys) {
    // If the callback is truthy, for current object's value, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  // If no key is found, return undefined
};

// TEST CODE
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

// Log the result
console.log(result);

// Test the result to ensure it's correct
assertEqual(result, "noma");

// EXPORT
module.exports = findKey;