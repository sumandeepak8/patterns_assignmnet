let typeDiamond = process.argv[2];
let height = +process.argv[3];

const makeHollowDiamond = function(height){
  let line = "";
  let lines ="";
  let lowerLines ="";
  let delimiter ="\n";
  let limit = Math.ceil(height/2);
  for(let rowIndex= 1; rowIndex <= limit; rowIndex++){
    let startPosition = Math.ceil(height/2)-(rowIndex-1);
    let endPosition = Math.ceil(height/2)+ (rowIndex-1);
    for(let columnIndex = 1; columnIndex <= height; columnIndex++){
      let stars = " ";
      if(columnIndex ==startPosition || columnIndex == endPosition){
        stars = "*";
      }
      line +=stars;
    }
    lines += line+delimiter;
    if(rowIndex != limit){
      lowerLines = line +delimiter+ lowerLines;
    }
    line ="";
  }
  return lines+lowerLines;
} 

/* I think the function should be small because it is easy to understand and by its name and return type we would get to know the purpose of this function.
 *function is written to do some specific task.
 *it should return some value.
 */ 

const makeFilledDiamond = function(height){
  let line = "";
  let lines ="";
  let lowerLines ="";
  let delimiter ="\n";
  let limit = Math.ceil(height/2);
  for(let rowIndex= 1; rowIndex <= limit; rowIndex++){
    let startPosition = Math.ceil(height/2)-(rowIndex-1);
    let endPosition = Math.ceil(height/2)+(rowIndex-1);
    for(let columnIndex = 1; columnIndex <= height; columnIndex++){
      let stars = " ";
      if(columnIndex >=startPosition && columnIndex <= endPosition){
        stars = "*";
      }
      line +=stars;
    }
    lines += line+delimiter;
    if(rowIndex != limit){
      lowerLines = line +delimiter+ lowerLines;
    }
    line ="";
  }
  return (lines + lowerLines) ;
} 


const makeAngledHollowDiamond = function(height){
  let line = "";
  let lines ="";
  let lowerLines ="";
  let delimiter ="\n";
  let lowerLine ="";
  let limit = Math.ceil(height/2);
  for(let rowIndex= 1; rowIndex <= limit; rowIndex++){
    let startPosition = Math.ceil(height/2)-(rowIndex-1);
    let endPosition = Math.ceil(height/2)+(rowIndex-1);
    for(let columnIndex = 1; columnIndex <= height; columnIndex++){  
      let stars = " ";
      if(columnIndex == startPosition ){
        stars ="/";
      }
      if(columnIndex == endPosition){
        stars ="\\";
      }
      if((rowIndex == 1 || rowIndex == limit) && (columnIndex == startPosition || columnIndex == endPosition)){
        stars = "*";
      }
      line +=stars;
      lowerLine = stars + lowerLine;
    }
    lines += line+delimiter;
    line ="";
    if(rowIndex != limit){
      lowerLines = lowerLine+delimiter+ lowerLines;
      lowerLine ="";
    }
  } 
  return (lines + lowerLines) ;
}

if(typeDiamond == "filled"){
  console.log(makeFilledDiamond(height));
}
if(typeDiamond == "hollow"){
  console.log(makeHollowDiamond(height));
}
if(typeDiamond == "angled"){
  console.log(makeAngledHollowDiamond(height));
}
