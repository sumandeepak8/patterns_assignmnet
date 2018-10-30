const assert = require('assert');
const utilLib = require('../src/patternUtilLib');

const { 
  repeatChar,
  lineGenerator,
  starsInRows,
  spacesInRow,
} = utilLib;



// test for repeatChar function.
assert.deepEqual(repeatChar("*",5),"*****");
assert.deepEqual(repeatChar("*",0),"");

// test for lineGenerator function.
assert.deepEqual(lineGenerator("*","*","*",1),"*")
assert.deepEqual(lineGenerator("*","*","*",3),"***")


// test for starsInRows function.
expectedOutput = [1,3,1];
assert.deepEqual(starsInRows(3),expectedOutput);

expectedOutput = [1,3,5,3,1];
assert.deepEqual(starsInRows(5),expectedOutput);

// test for spacesInRow function.
expectedOutput = [" "];
assert.deepEqual(spacesInRow(3,starsInRows,1),expectedOutput);

expectedOutput = [" "," "];
assert.deepEqual(spacesInRow(5,starsInRows,1),expectedOutput);
