// #tail

// MAIN FUNCTIONS
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

// EXPORT
module.exports = tail;