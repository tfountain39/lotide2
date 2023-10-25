// #countOnly

// MAIN FUNCTION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// EXPORT
module.exports = countOnly;