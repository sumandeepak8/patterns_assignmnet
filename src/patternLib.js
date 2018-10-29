const utilLib = require('./patternUtilLib');
const {lineGenerator} = utilLib;
const {repeatChar} = utilLib;

const makeFilledRectangle = function(width,height){
  return Array(height).fill(lineGenerator("*","*","*",width)).join("\n");
}

const makeHollowRectangle = function(width,height){
  let rectangle = []; 
  if(height < 1)
    return "";
  if(height >1){
    rectangle = new Array(height-2).fill(lineGenerator("*"," ","*",width));
    rectangle.push(lineGenerator("*","*","*",width));
  }
  rectangle.unshift(lineGenerator("*","*","*",width));
  return rectangle.join("\n");
}

const makeAlternatingRectangle = function(width,height){
  let rectangle = new Array(height).fill(1);
  let lineGeneratorRef = [lineGenerator("*","*","*",width),lineGenerator("-","-","-",width)]
  return rectangle.map(function(element,index){
    return lineGeneratorRef[index%2];
  }).join("\n");
}

const generateRectangle = function(type,width,height){
  let rectangle = {};
  rectangle.filled = makeFilledRectangle(width,height);
  rectangle.hollow = makeHollowRectangle(width,height);
  rectangle.alternating = makeAlternatingRectangle(width,height);
  return rectangle[type];
}


// to make leftTriangle sided triangle.
const leftTriangle = function(height,spaces){
  let triangle =[];
  for(let index=1; index<=height ; index++){
    triangle.push(repeatChar("*",index).concat(repeatChar(" ",spaces-index)));
  }
  return triangle.join("\n");
}

// to make right-aligned triangle.
const rightTriangle= function(height,spaces){
  let triangle =[];
  for(let index=1; index<=height ; index++){
    triangle.push(repeatChar(" ",spaces-index).concat(repeatChar("*",index)));
  }
  return triangle.join("\n");
}

const generateTriangle = function(alignType,height){
  let spaces = height;
  let triangle = {};
  triangle.left = leftTriangle(height,spaces);
  triangle.right = rightTriangle(height,spaces);
  return triangle[alignType];
}

const generateHollowDiamond = function(height){
  let limit = Math.ceil(height/2);
  let lines = "";
  let lowerLines = "";
  let delimiter = "\n";
  let lowerLine = "";

  for(let rowIndex = 1; rowIndex <= limit; rowIndex++){
    lowerLines = lowerLine;
    lines += genLineOfHollowDiamond(height,rowIndex) + delimiter;
    lowerLine = genLineOfHollowDiamond(height,rowIndex) + delimiter + lowerLine;
    if(rowIndex == 1){
      lowerLine = genLineOfHollowDiamond(height,rowIndex);
    }
  }

  return (lines + lowerLines);
}

const genLineOfHollowDiamond = function(height,rowIndex,lowerLines){         
  let startPosition = Math.ceil(height/2)-(rowIndex-1);
  let endPosition = Math.ceil(height/2)+(rowIndex-1);
  let line = "";

  for(let columnIndex = 1; columnIndex <= height; columnIndex++){
    let stars = " ";
    if(columnIndex ==startPosition || columnIndex == endPosition){
      stars = "*";
    }
    line +=stars;
  }

  return line;
}

const justifier = function(height,row,chars) {
  let spaceLength = (height-row)/2
  let space = " ";
  return Array(spaceLength).fill(space).concat(chars.concat(Array(spaceLength).fill(space).join(""))).join("");

}

const generateFilledDiamond = function(height){
  let limit = Math.ceil(height/2);
  let lines = "";
  let lowerLines = "";
  let delimiter = "\n";
  let lowerLine = "";

  for(let rowIndex = 1; rowIndex <= limit; rowIndex++){
    lowerLines = lowerLine;
    lines += genLineOfFilledDiamond(height,rowIndex) + delimiter;
    lowerLine = genLineOfFilledDiamond(height,rowIndex) + delimiter + lowerLine;
    if(rowIndex == 1){
      lowerLine = genLineOfFilledDiamond(height,rowIndex);
    }
  }

  return (lines + lowerLines);
}

const genLineOfFilledDiamond = function(height,rowIndex,lowerLines){         
  let startPosition = Math.ceil(height/2)-(rowIndex-1);
  let endPosition = Math.ceil(height/2)+(rowIndex-1);
  let line = "";

  for(let columnIndex = 1; columnIndex <= height; columnIndex++){
    let stars = " ";
    if(columnIndex >=startPosition && columnIndex <= endPosition){
      stars = "*";
    }
    line +=stars;
  }

  return line;
}

const generateAngledHollowDiamond = function(height){
  let limit = Math.ceil(height/2);
  let lines = "";
  let lowerLines = "";
  let delimiter = "\n";
  let lowerLine = "";
  let rowIndex = 1; 
  for(rowIndex = 1; rowIndex <= limit; rowIndex++){
    if(rowIndex != limit) lines += genLineOfAngledHollowDiamond(height,rowIndex,limit) + delimiter;
    else lines += genLineOfAngledHollowDiamond(height,rowIndex,limit);
  }
  lowerLine =  lowerAngled(height,limit); 
  return (lines+"\n"+lowerLine);
}

const genLineOfAngledHollowDiamond = function(height,rowIndex,limit){         
  let startPosition = Math.ceil(height/2)-(rowIndex-1);
  let endPosition = Math.ceil(height/2)+(rowIndex-1);
  let line = "";

  for(let columnIndex = 1; columnIndex <= height; columnIndex++){
    let stars = " ";
    if((rowIndex == 1 && columnIndex == startPosition) || (rowIndex == limit && (columnIndex == startPosition ||columnIndex  == height))){
      stars ="*";
    }
    if(columnIndex == startPosition && rowIndex != limit && rowIndex != 1){
      stars ="/"
    }
    if(columnIndex == endPosition && rowIndex != limit && rowIndex != 1){
      stars ="\\"
    }
    line +=stars;
  }
  return line;
}

const lowerAngled = function(height,limit){
  let startPosition = 2;
  let endPosition = height-1;
  let line = "";
  for(let rowIndex = limit+1; rowIndex <= height; rowIndex++){
    for(let columnIndex = 1; columnIndex <= height; columnIndex++){
      stars =" ";
      if(columnIndex == startPosition ){
        stars ="\\";
      }
      if(columnIndex == endPosition){
        stars ="/";
      }
      if( rowIndex == height && columnIndex == startPosition){
        stars ="*";
      }
      line += stars ;
    }
    if(rowIndex != height){
      line  +=  "\n";
    }
    startPosition++;
    endPosition--;
  }
  return line;
}

const generateDiamond = function(type,height){
  let diamond = {};
  diamond.hollow = generateHollowDiamond(height);
  diamond.filled = generateFilledDiamond(height);
  diamond.angled = generateAngledHollowDiamond(height);
  return diamond[type];
}


exports.generateRectangle = generateRectangle;
exports.makeFilledRectangle = makeFilledRectangle;
exports.makeHollowRectangle = makeHollowRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
exports.leftTriangle = leftTriangle;
exports.rightTriangle= rightTriangle;
exports.justifier = justifier;
