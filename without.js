
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

const without = function(source, itemsToRemove) {
  let sourceWithout = source.filter(item => !itemsToRemove.includes(item));
  return sourceWithout;
};

const words = ["tree", "true", true];
const result = without(words, ["tree"]);
assertArrayEqual(result, ["true", true]);
assertArrayEqual(words, ["tree", "true", true]);
