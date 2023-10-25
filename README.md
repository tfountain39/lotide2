# lotide2

A mini clone of the [Lodash](https://lodash.com) library.
Sources: 
ChatGPT, 
MDN,
https://www.npmjs.com/package/lotide-from-todd, 

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tfountain39/lotide2`

**Require it:**

`const _ = require('@tfountain39/lotide2');`

**Call it:**

```javascript
const assertArraysEqualExample = _.assertArrayEqual([1, 2, 3], [1, 2, 3]); // => Assertion Passed: 1,2,3 === 1,2,3
const assertEqualExample = _.assertEqual("Lighthouse Labs", "Bootcamp"); // => Assertion Failed: Lighthouse Labs !== Bootcamp
const tailResults = _.tail([1, 2, 3]); // => [2, 3]
const headResult = _.head([1, 2, 3]); // => 1
const middleResult = _.middle([1, 2, 3, 4, 5]); // => [3]
const countLettersExample = _.countLetters("lighthouse labs"); // => { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 }
const countOnlyExample = _.countOnly(["a", "b", "a"], { "a": true, "b": true }); // => { a: 2, b: 1 }
const eqObjectsExample = _.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }); // => true
const findKeyExample = _.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
const findKeyByValueExample = _.findKeyByValue({ a: "1", b: "2", c: "3" }, "2"); // => "b"
const letterPositionsExample = _.letterPositions("hello"); // => { h: [0], e: [1], l: [2, 3], o: [4] }
const mapExample = _.map([1, 2, 3], num => num * 2); // => [2, 4, 6]
```

## Documentation

The following functions are currently implemented:

* `assertEqualObjects(...)`: This function compares two objects for equality
* `countLetters(...)`: This function counts the letters in a string
* `countOnly(...)`: This function counts a specific parameter in an array
* `eqArrays(...)`: This function compares two arrays for equality 
* `eqObjects(...)`: This function compares two objects for equality
* `findKey(...)`: This function searchs an object for a specific key
* `findKeyByValue(...)`: This function searches an object for a specific value and returns the key
* `head(...)`: This function removes all items by the first in an array
* `map(...)`: This function applies a function to each element in an array and create a new array containing the results
* `middle(...)`: This function removes all but the middle one or two indexes from an array
* `tail(...)`: This function removes the first item in an array
* `takeUntil(...)`: This function iterates through an array and collects elements until the callback condition is metription
* `without(...)`: This functions removes specified items from an array and returns that array after transformation
