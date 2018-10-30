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


const starsInRows = function(height) {
  let numbers = [];
  for(let index = -height+1; index < height; index +=2){
    numbers.push(height - Math.abs(index));
  }
  return numbers;
}

const spacesInRow = function(height,starsInRows,row) {
  let spaceLength = Math.ceil(Math.abs(height - starsInRows(height)[row-1])/2);
  return new Array(spaceLength).fill(" ");
}



exports.lineGenerator = lineGenerator;
exports.starsInRows = starsInRows;
exports.spacesInRow = spacesInRow;
exports.repeatChar = repeatChar;

