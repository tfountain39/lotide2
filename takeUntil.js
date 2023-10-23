// TEST FUNCTION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArrayEqual = function(array1, array2) {
  const arrayAreEqual = eqArrays(array1, array2);
  arrayAreEqual
  ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
  : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};

// MAIN FUNCTION
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

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArrayEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);