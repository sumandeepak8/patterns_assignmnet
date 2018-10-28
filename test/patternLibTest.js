const assert = require('assert');
const lib = require('../src/patternLib.js');

const {genRectangle} =lib;
const {makeFilledRectangle} = lib;
const {makeHollowRectangle} = lib;
const {genTriangle} = lib;

// test for filled rectangle.
let row = "*";
let expectedOutput = row;
assert.deepEqual(makeFilledRectangle(1,1),expectedOutput);
assert.deepEqual(makeFilledRectangle(1,0),"");
assert.deepEqual(makeFilledRectangle(0,1),"*");

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

// test for alternating rectangle.
expectedOutput = ["*","-"].join("\n");
assert.deepEqual(genRectangle("alternating",1,2),expectedOutput);

expectedOutput = ["***","---","***","---"].join("\n");
assert.deepEqual(genRectangle("alternating",3,4),expectedOutput);

expectedOutput = ["*"].join("\n");
assert.deepEqual(genRectangle("alternating",1,1),expectedOutput);

// test for left triangle.
expectedOutput = ["*"].join("\n");
assert.deepEqual(genTriangle("left",1),expectedOutput);

expectedOutput = ["  *"," **","***"].join("\n");
assert.deepEqual(genTriangle("left",3),expectedOutput);

// test for right triangle.
expectedOutput = ["*"].join("\n");
assert.deepEqual(genTriangle("right",1),expectedOutput);

expectedOutput = ["*  ","** ","***"].join("\n");
assert.deepEqual(genTriangle("right",3),expectedOutput);
