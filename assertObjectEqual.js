// #assertObjectsEqual

// MAIN FUNCTION
const assertObjectEqual = function(object1, object2) {
  // Validate proper data type
  const isObject = (val) => {
    return val !== null && typeof val === 'object';
  };
  // comparison logic, 
  // using stringify to deep compare
  const compareObjects = (obj1, obj2) => {
    // compare strings of arrays if data is arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    // container variables for a list of keys

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // compare number of keys
    if (keys1.length !== keys2.length) return false;

    // iterate over each key
    for (let key of keys1) {
      const val1 = obj1[key];
      const val2 = obj2[key];
      // check if both are objects
      const areObjects = isObject(val1) && isObject(val2);
      // if both are objects, recursively compare them
      // if not, just check if they are the same value
      if (
        (areObjects && !compareObjects(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }
    // if full loop completely without false, true
    return true;
  };

  // Use the compareObjects function to compare the objects
  return compareObjects(object1, object2);
};


// EXPORT
module.exports = assertObjectEqual;