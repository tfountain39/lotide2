// #findKey

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

// EXPORT
module.exports = findKey;