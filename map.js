// #map

// MAIN FUNCTION
const map = function(array, callback) {
  // Make a container array
  const length = [];
  // Iterate over each item
  for (let item of array) {
    // Push item processed by callback into container array
    length.push(callback(item));
  }
  return length;
};



// EXPORT
module.exports = map;