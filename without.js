// #without
// This functions removes specified items from an array and 
// returns that array after transformation

// MAIN FUNCTIONS
const without = function(source, itemsToRemove) {
  // Create a container to hold filtered source
  // Combine the bang operator with the includes method to return true when false and vice versa
  // So if the item appears in itemToRemove, it returns false(true without use of bang)
  // and every item that doesn't appears true(false without bang)
  // then all items marked false are added to the container
  let sourceWithout = source.filter(item => !itemsToRemove.includes(item));
  return sourceWithout;
};

// EXPORT
module.exports = without;