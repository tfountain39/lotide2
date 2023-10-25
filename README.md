# lotide2

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/tfountain39');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

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

  head,
  tail,
  middle,
  assertEqualObjects,
  countLetters,
  countOnly,
  eqArrays
  eqObjects,
  findKey,
  findKeyByValue,
  map,
  takeUntil,
  without