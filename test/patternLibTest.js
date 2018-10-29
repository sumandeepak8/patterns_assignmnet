const assert = require('assert');
const lib = require('../src/patternLib.js');

const {
  generateRectangle,
  makeFilledRectangle,
  makeHollowRectangle,
  generateTriangle,
  leftTriangle,
  rightTriangle,
  justifier,
} = lib;


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
assert.deepEqual(generateRectangle("hollow",1,1),"*");

expectedOutput = ["**","**"].join("\n");
assert.deepEqual(generateRectangle("hollow",2,2),expectedOutput);

expectedOutput = ["***","* *","***"].join("\n");
assert.deepEqual(generateRectangle("hollow",3,3),expectedOutput);

// test for alternating rectangle.
expectedOutput = ["*","-"].join("\n");
assert.deepEqual(generateRectangle("alternating",1,2),expectedOutput);

expectedOutput = ["***","---","***","---"].join("\n");
assert.deepEqual(generateRectangle("alternating",3,4),expectedOutput);

expectedOutput = ["*"].join("\n");
assert.deepEqual(generateRectangle("alternating",1,1),expectedOutput);

// test for generateTriangle function for left triangle.
expectedOutput = ["*"].join("\n");
assert.deepEqual(generateTriangle("left",1),expectedOutput);

expectedOutput = ["*  ","** ","***"].join("\n");
assert.deepEqual(generateTriangle("left",3),expectedOutput);

// test of generateTriangle function for right triangle.
expectedOutput = ["*"].join("\n");
assert.deepEqual(generateTriangle("right",1),expectedOutput);

expectedOutput = ["  *"," **","***"].join("\n");
assert.deepEqual(generateTriangle("right",3),expectedOutput);

// test for leftTriangle function.
expectedOutput = ["*  ","** ","***"].join("\n");
assert.deepEqual(leftTriangle(3,3),expectedOutput);

expectedOutput = ["*    ","**   ","***  ","**** ","*****"].join("\n");
assert.deepEqual(leftTriangle(5,5),expectedOutput);

// test for rightTrianle function.
expectedOutput = ["*"].join("\n");
assert.deepEqual(rightTriangle(1,1),expectedOutput);

expectedOutput = ["  *"," **","***"].join("\n");
assert.deepEqual(rightTriangle(3,3),expectedOutput);

// test for justifier function.
expectedOutput = " * ";
assert.deepEqual(justifier(3,1,"*"),expectedOutput);
expectedOutput = "  *  ";
assert.deepEqual(justifier(5,1,"*"),expectedOutput);
