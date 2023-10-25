// testLibrary.js

const _ = require('./index');

// Test to check if functions are accessible
const testLibrary = () => {
  // Array Test
  const tailResult = _.tail([1, 2, 3, 4]);
  console.log('Tail Result:', tailResult); // Expected: [2, 3, 4]

  // Object Test
  const object = { a: 1, b: 2, c: 3 };
  const findKeyResult = _.findKey(object, (x) => x === 2);
  console.log('Find Key Result:', findKeyResult); // Expected: 'b'

  // String Test
  const countLettersResult = _.countLetters("hello world");
  console.log('Count Letters Result:', countLettersResult); // Expected: {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
};

// Run the tests
testLibrary();