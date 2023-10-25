// #without

// MAIN FUNCTIONS
const without = function(source, itemsToRemove) {
  let sourceWithout = source.filter(item => !itemsToRemove.includes(item));
  return sourceWithout;
};

// EXPORT
module.exports = without;