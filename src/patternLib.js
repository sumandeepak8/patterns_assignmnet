const utilLib = require('./patternUtilLib');

const {lineGenerator} = utilLib;


const makeFilledRectangle = function(width,height){
  let delimiter = "\n";
  let rectangle = [];
  if(height < 1)
    return "";
  rectangle.push(lineGenerator("*","*","*",width));
  for(let index = 0; index < height-2; index++){
  rectangle.push(lineGenerator("*","*","*",width));
  }
  if(height >1)
  rectangle.push(lineGenerator("*","*","*",width));
  return rectangle.join("\n");
}

const makeEmptyRectangle = function(width,height){
  let stars ="";
  let rectangle ="";
  let delimiter =" ";
  for(let rowIndex = 1; rowIndex <= height; rowIndex++){
    for(let columnIndex =1; columnIndex <= width; columnIndex++){
      if(rowIndex == 1 || rowIndex == height){
        stars +="*";
      }else if(columnIndex==1 || columnIndex == width){
        stars +="*";
      }else{
        stars +=delimiter;
      }
    }
    rectangle += stars;
    if(rowIndex!=height){
      rectangle +="\n";
    }
    stars ="";
  }
  return rectangle;
}


const makeAlternatingRectangle = function(width,height){
  let stars ="";
  let delimiter ="-";
  let rectangle ="";
  let modulous =0;
  for(let rowIndex = 1; rowIndex <= height; rowIndex++){
    modulous = rowIndex%2;
    for(let columnIndex = 1; columnIndex <= width; columnIndex++){ 
      if(modulous){
        stars +="*";
      }else{
        stars += delimiter;
      }
    }
    rectangle += stars;
    if(rowIndex!=height){
      rectangle +="\n";
    }
    stars ="";
  }
  return rectangle;
}

const genRectangle = function(type,width,height){
  if(type == "filled"){
    return makeFilledRectangle(width,height);
  }
  if(type == "empty"){
    return makeEmptyRectangle(width,height);
  }
  if(type == "alternating"){
    return makeAlternatingRectangle(width,height);
  }
}


// to make left sided triangle.
const left = function(height){
  let stars = "";
  let triangle ="";
  for(let rowIndex =1; rowIndex <= height; rowIndex++){
    for(let column =1; column <= rowIndex; column++){
      stars += "*";
    }
    triangle += stars;
    if(rowIndex!=height){
      triangle +="\n";
    }
    stars ="";
  }
  return triangle;
}


const right = function(height){
  let stars = "";
  let triangle ="";
  let delimiter =" ";
  let numOfStars = height-1;
  for(let rowIndex =1; rowIndex <= height; rowIndex++){
    for(let column =1; column <=height; column++){
      if(column > numOfStars){
        stars +="*";
      }
      else{
        stars += delimiter;
      }
    }
    triangle += stars;
    if(rowIndex!=height){
      triangle +="\n";
    }
    stars ="";
    numOfStars --;
  }
  return triangle;
}

const genTriangle = function(alignType,height){
  if(alignType == "left"){
    return left(height);
  }
  if(alignType == "right"){
    return right(height);
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
exports.genTriangle = genTriangle;
exports.genDiamond = genDiamond;
