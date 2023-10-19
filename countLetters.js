const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

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

assertEqual(result["t"], 2);
assertEqual(result["i"], 3);
assertEqual(result["s"], 6);
assertEqual(result["t"], 1);