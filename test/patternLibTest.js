const assert = require('assert');
const lib = require('../src/patternLib.js');

const {genRectangle} =lib;
const {makeFilledRectangle} = lib;
const {makeHollowRectangle} = lib;

// test for filled rectangle.
let row = "*";
let expectedOutput = row;
assert.deepEqual(makeFilledRectangle(1,1),expectedOutput);

row = "**";
expectedOutput = row;
assert.deepEqual(makeFilledRectangle(2,1),expectedOutput);

row = "*";
expectedOutput = [row,row].join("\n");
assert.deepEqual(makeFilledRectangle(1,2),expectedOutput);

// test for hollow rectangle.
assert.deepEqual(genRectangle("hollow",1,1),"*");

expectedOutput = ["**","**"].join("\n");
assert.deepEqual(genRectangle("hollow",2,2),expectedOutput);

expectedOutput = ["***","* *","***"].join("\n");
assert.deepEqual(genRectangle("hollow",3,3),expectedOutput);
