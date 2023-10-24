// #letterPosition

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

const assertArraysEqual = function(array1, array2) {
  const arraysAreEqual = eqArrays(array1, array2);
  arraysAreEqual
    ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
    : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};
// MAIN FUNCTION
const letterPosition = function(sentence) {
  // convert to lowercase
  const lowercasedSentence = sentence.toLowerCase();
  // split the sentence into characters
  const splitSentence = lowercasedSentence.split('');

  // container object for results of loop
  let results = {};

  // begin loop
  for (let i = 0; i < sentence.length; i++) {
    const letter = splitSentence[i];
    // ignore spaces
    if (letter !== " ") {
      // if the letter is already a key, push current letter
      if (results[letter]) {
        results[letter].push(i);
      // if the letter isn't a key yet, initialize it in the container object
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

// TEST CODE
const result = letterPosition("hello world");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3, 9]);
assertArraysEqual(result['o'], [4, 7]);
assertArraysEqual(result['w'], [6]);
assertArraysEqual(result['r'], [8]);
assertArraysEqual(result['d'], [10]);