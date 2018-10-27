const lib = require('./src/patternLib.js');
const { genRectangle } = lib;

const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  console.log(genRectangle(type,width,height));
}

main();
