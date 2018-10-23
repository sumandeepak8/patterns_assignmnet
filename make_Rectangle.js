let typeOfRectangle = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

const makeFilledRectangle = function(width,height){
  let stars ="";
  let rectangle ="";
  for(let rowIndex=1; rowIndex <= height; rowIndex++){
    for(let columnIndex=1; columnIndex <= width;columnIndex++){
      stars +="*";
    }
    rectangle += stars;
    if(rowIndex!=height){
      rectangle += "\n";
    }
    stars ="";
  }
  return rectangle;
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


let output;
if(typeOfRectangle == "filled"){
  output = makeFilledRectangle(width,height);
}

if(typeOfRectangle == "empty"){
  output = makeEmptyRectangle(width,height);
}

if(typeOfRectangle == "alternating"){
  output = makeAlternatingRectangle(width,height);
}


console.log(output);
