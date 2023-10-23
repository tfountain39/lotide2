// TEST FUNCTION
const tail = require('../tail');
const assertEqual = require('/home/labber/lighthouse/1-Week/lotide/assertEqual.js');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); // an empty array

const result3 = tail([]);
assertEqual(result3[0], undefined); // ensure we get undefined