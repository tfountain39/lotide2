// #index

// index.js
const assertArrayEqual   = require('./assertArrayEqual');
const assertEqual        = require('./assertEqual');
const assertObjectEqual  = require('./assertObjectEqual');
const countLetters       = require('./countLetters');
const countOnly          = require('./countOnly');
const eqArray            = require('./eqArray');
const eqObject           = require('./eqObject');
const findKey            = require('./findKey');
const findKeyByValue     = require('./findKeyByValue');
const head               = require('./head');
const letterPosition     = require('./letterPosition');
const middle             = require('./middle');
const map                = require('./map');
const tail               = require('./tail');



const _ = {
  assertArrayEqual,
  assertEqual,
  assertObjectEqual,
  countLetters,
  countOnly,
  eqArray,
  eqObject,
  findKey,
  findKeyByValue,
  head,
  letterPosition,
  map,
  middle,
  tail,
};

// EXPORT
module.exports = _;