const lib = require('./src/patternLib');
const {genDiamond} = lib;

const main = function(){
let type = process.argv[2];
let height = +process.argv[3];
  console.log(genDiamond(type,height));
}

main();


