// #findKeyByValue

// MAIN FUNCTION
const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
};

// EXPORT
module.exports = findKeyByValue;