// #takeUntil

// MAIN FUNCTIONS
const takeUntil = function(array, callback) {
  // Container
  const result = [];
  // Loop over each item
  for (let input of array) {
    // If callback returns truthy, break
    if (callback(input)) {
      break;
    }
    // Othewise, push current item to results
    result.push(input);
  }
  return result;
};

// EXPORT
module.exports = takeUntil;