let alignType = process.argv[2];
let height = +process.argv[3];
let output;

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

if(alignType == "left"){
  output = left(height);
}
if(alignType == "right"){
  output = right(height);
}
console.log(output);
