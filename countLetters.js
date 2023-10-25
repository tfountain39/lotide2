// #countLetters

// TEST FUNCTION
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

// MAIN FUNCTION
const countLetters = function(sentence) {
  const lowercasedSentence = sentence.toLowerCase();
  const splitSentence = lowercasedSentence.split('');
  const results = {};

  for (const letter of splitSentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const sentence = "This is a sentence used for assertion";
const result = countLetters(sentence);

// TEST CODE
assertEqual(result["t"], 3);
assertEqual(result["i"], 3);
assertEqual(result["s"], 6);
assertEqual(result["t"], 1);

// EXPORT
module.exports = countLetters;