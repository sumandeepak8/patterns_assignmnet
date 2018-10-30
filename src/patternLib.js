const utilLib = require('./patternUtilLib');


const {
  lineGenerator,
  repeatChar,
  spacesInRow,
  starsInRows,
} = utilLib;

const makeFilledRectangle = function(width,height){
  return new Array(height).fill(lineGenerator("*","*","*",width));
}

const makeHollowRectangle = function(width,height){
  let lines = []; 
  let topLineGenerator = lineGenerator("*","*","*",width);
  let middleLineGenerator = lineGenerator("*"," ","*",width);
  let bottomLineGenerator = lineGenerator("*","*","*",width);
  if(height < 1)
    return "";
  if(height >1){
    lines = new Array(height-2).fill(middleLineGenerator);
    lines.push(bottomLineGenerator);
  }
  lines.unshift(topLineGenerator);
  return lines;
}

const makeAlternatingRectangle = function(width,height){
  let lines = new Array(height).fill(0);
  let firstLine = lineGenerator("*","*","*",width);
  let secondLine = lineGenerator("-","-","-",width);
  const callBack = function(element,index){
  return [firstLine,secondLine][index%2];
  }
  return lines.map(callBack);
}


const generateRectangle = function(type,width,height){
  let rectangle = {};
  rectangle.filled = makeFilledRectangle(width,height);
  rectangle.hollow = makeHollowRectangle(width,height);
  rectangle.alternating = makeAlternatingRectangle(width,height);
  return rectangle[type].join("\n");
}

const leftTriangle = function(height,spaces){
  let lines =[];
  for(let index=1; index<=height ; index++){
    lines.push(repeatChar("*",index).concat(repeatChar(" ",spaces-index)));
  }
  return lines;
}

const rightTriangle= function(height,spaces){
  let lines =[];
  for(let index=1; index<=height ; index++){
    lines.push(repeatChar(" ",spaces-index).concat(repeatChar("*",index)));
  }
  return lines;
}

const generateTriangle = function(alignType,height){
  let triangle = {};
  let spaces = height
  triangle.left = leftTriangle(height,spaces);
  triangle.right = rightTriangle(height,spaces);
  return triangle[alignType].join("\n");
}

const generateHollowDiamond = function(height){
  let numbersOfStars = starsInRows(height);
  let space = " ";
  let star = "*";
  let lines =[];
  for(let row = 1; row <= height; row++){
    let spaces = spacesInRow(height,starsInRows,row).join("");
    let numberOfStarsInRow = numbersOfStars.shift();
    lines.push(spaces.concat(lineGenerator("*"," ","*",numberOfStarsInRow).concat(spaces)))
  }
  return lines;
}

const generateFilledDiamond = function(height){
  let numbersOfStars = starsInRows(height);
  let space = " ";
  let star = "*";
  let lines = [];
  for(let row = 1; row <= height; row++){
    let spaces = spacesInRow(height,starsInRows,row).join("");
    let numberOfStarsInRow = numbersOfStars.shift();
    lines.push(spaces.concat(repeatChar(star,numberOfStarsInRow).concat(spaces)))
  }
  return lines;
}


const generateAngledHollowDiamond = function(height){
  let numbersOfStars = starsInRows(height);
  let lines = [];
  for(let row = 1; row <= height; row++){
    let spaces = spacesInRow(height,starsInRows,row).join("");
    let numberOfStarsInRow = numbersOfStars.shift();
    let lineGeneratorRef = lineGenerator("/"," ","\\",numberOfStarsInRow)
    if(row > height/2)
      lineGeneratorRef = lineGenerator("\\"," ","/",numberOfStarsInRow)
    if(row ==1 ||row == height ||row == Math.ceil( height/2))
      lineGeneratorRef = lineGenerator("*"," ","*",numberOfStarsInRow)
    lines.push(spaces.concat(lineGeneratorRef.concat(spaces)));
  }
  return lines;
}

const generateDiamond = function(type,height){
  let diamond = {};
  diamond.hollow = generateHollowDiamond(height);
  diamond.filled = generateFilledDiamond(height);
  diamond.angled = generateAngledHollowDiamond(height);
  return diamond[type].join("\n");
}


exports.generateRectangle = generateRectangle;
exports.makeFilledRectangle = makeFilledRectangle;
exports.makeHollowRectangle = makeHollowRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
exports.leftTriangle = leftTriangle;
exports.rightTriangle= rightTriangle;
exports.generateFilledDiamond = generateFilledDiamond;
exports.generateHollowDiamond = generateHollowDiamond;
