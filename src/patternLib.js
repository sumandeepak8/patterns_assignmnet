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
  let rectangle = [];
  let lineGeneratorRef = [lineGenerator("*","*","*",width),lineGenerator("-","-","-",width)]
  for(let index = 0; index < height; index++){
    rectangle.push(lineGeneratorRef[index%2]);
  }
  return rectangle.join("\n");
}


const genRectangle = function(type,width,height){
  let rectangle = {};
  rectangle.filled = makeFilledRectangle(width,height);
  rectangle.hollow = makeHollowRectangle(width,height);
  rectangle.alternating = makeAlternatingRectangle(width,height);
  return rectangle[type];
}


// to make left sided triangle.
const left = function(height){
  let delimiter = "\n";
  let triangle =[];
  let spaces = height;
  for(let index=1; index<=height ; index++){
    triangle.push(repeatChar(" ",spaces-index).concat(repeatChar("*",index)));
  }
  return triangle.join(delimiter);

}

const right = function(height){
  let delimiter = "\n";
  let triangle =[];
  let spaces = height;
  for(let index=1; index<=height ; index++){
    triangle.push(repeatChar("*",index).concat(repeatChar(" ",spaces-index)));
  }
  return triangle.join(delimiter);
}

const genTriangle = function(alignType,height){
  if(alignType == "left"){
    return right(height);
  }
  if(alignType == "right"){
    return left(height);
  }
}

const genHollowDiamond = function(height){
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


const genFilledDiamond = function(height){
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

const genAngledHollowDiamond = function(height){
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

const genDiamond = function(type,height){
  if(type == "hollow"){
    return (genHollowDiamond(height));
  }
  if(type == "filled"){
    return genFilledDiamond(height);
  }
  if(type == "angled"){
    return (genAngledHollowDiamond(height));
  }
}


exports.genRectangle = genRectangle;
exports.makeFilledRectangle = makeFilledRectangle;
exports.makeHollowRectangle = makeHollowRectangle;
exports.genTriangle = genTriangle;
exports.genDiamond = genDiamond;
