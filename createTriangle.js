const lib =  require('./src/patternLib.js');
const {genTriangle} = lib;

const main = function(){
let alignType = process.argv[2];
let height = +process.argv[3];
console.log(genTriangle(alignType,height));
}

main();


