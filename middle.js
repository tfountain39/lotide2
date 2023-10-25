// #middle

// ACTUAL FUNCTIONS
const middle = function(array) {
  // return empty array if array less than 2 in length
  if (array.length <= 2) {
    return [];
  }
  // If array is even check
  if (array.length % 2 === 0) {
    // make a variable that is half the array length, that will show a middle index
    const evenMiddleIndex1 = array.length / 2 - 1;
    const evenMiddleIndex2 = evenMiddleIndex1 + 1;
    return array.slice(evenMiddleIndex1, evenMiddleIndex2 + 1);
  }
  if (array.length % 2 !== 0) {
    const oddMiddleIndex = Math.floor(array.length / 2);
    return array.slice(oddMiddleIndex, oddMiddleIndex + 1);
  }
};

// EXPORTS
module.exports = middle;