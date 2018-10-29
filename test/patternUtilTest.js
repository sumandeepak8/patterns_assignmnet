const assert = require('assert');
const utilLib = require('../src/patternUtilLib');

const { 
  repeatChar,
  lineGenerator
} = uitlLib;


// test for repeatChar function.
assert.deepEqual(repeatChar("*",5),"*****");
