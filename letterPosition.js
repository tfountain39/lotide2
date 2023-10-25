// #letterPosition

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


// EXPORT
module.exports = letterPosition;