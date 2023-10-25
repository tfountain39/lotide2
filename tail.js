// #tail

// MAIN FUNCTIONS
const tail = function(arr) {
  // check if array has one or less element, return empty array if true
  if (arr.length <= 1) {
    return [];
    // otherwise return the array with the first element removed
  } else {
    return arr.slice(1);
  }
};

// EXPORT
module.exports = tail;