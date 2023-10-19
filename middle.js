// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(array1, array2) {
  const arraysAreEqual = eqArrays(array1, array2);
  arraysAreEqual
    ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
    : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    const evenMiddleIndex1 = array.length / 2 - 1;
    const evenMiddleIndex2 = evenMiddleIndex1 + 1;
    return array.slice(evenMiddleIndex1, evenMiddleIndex2 + 1);
  }
  if (array.length % 2 !== 0) {
    const oddMiddleIndex = Math.floor(array.length / 2);
    return array.slice(oddMiddleIndex, oddMiddleIndex + 1);
  }
};

// TEST CODE
// Test Case 1: Testing with an odd-length array
const arr1 = [1, 2, 3, 4, 5];
console.log("Test Case 1: Middle element of arr1 is", middle(arr1));
assertArraysEqual(middle(arr1), [3]); // Expected output: [3]

// Test Case 2: Testing with an even-length array
const arr2 = [1, 2, 3, 4];
console.log("Test Case 2: Middle elements of arr2 are", middle(arr2));
assertArraysEqual(middle(arr2), [2, 3]); // Expected output: [2, 3]