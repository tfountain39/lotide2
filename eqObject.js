// #eqObjects

// MAIN FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObject = function(obj1, obj2) {
  // obtain and list keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // check for length
  if (keys1.length !== keys2.length) return false;
  // loop through each key in object 1
  for (const key of keys1) {
    // check second object has the same key
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) return false;
    // check if value associated with key is in both objects
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      // recursively call to check if values are objects - compare equally if so
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else {
      // if the values are not objects, comapre them directly
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

// EXPORT
module.exports = eqObject;