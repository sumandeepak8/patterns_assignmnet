const repeatChar = function(char,times){
  let line = "";
  for(let index = 0; index < times; index++){
    line += char;
  }
  return line;
}

const lineGenerator = function(leftChar,middleChar,rightChar,width){
  let middleChars = repeatChar(middleChar,width-2);
  if(width<2)
    rightChar ="";
  return leftChar.concat(middleChars.concat(rightChar));
}


exports.lineGenerator = lineGenerator;
exports.repeatChar = repeatChar;
