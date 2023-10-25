// #takeUntil
// This function iterates through an array and 
// collects elements until the callback condition is met

// MAIN FUNCTIONS
const takeUntil = function(array, callback) {
  // Empty array container
  const result = [];
  // Loop over each item - for-of because all items should be iterated
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