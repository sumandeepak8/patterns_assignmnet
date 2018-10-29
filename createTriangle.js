const lib =  require('./src/patternLib.js');
const {generateTriangle} = lib;

const main = function(){
let alignType = process.argv[2];
let height = +process.argv[3];
console.log(generateTriangle(alignType,height));
}

main();


