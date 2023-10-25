// #countLetters

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

// EXPORT
module.exports = countLetters;