//TASK 5 PART 2

//Request input from user
let start = alert(
    "This is a shape detector program.\nYou will be asked to enter four sides and four angles to determine the quadrilateral."
  );
  
  const sides = Array.from({length:4}).map((_,i) => +prompt(`Define length ${i+1}: `));
  const corners = Array.from({length:4}).map((_,i) => +prompt(`Define angle ${i+1}: `));
  const ninety = corners.every(corner => corner === 90)
  
  
  //if...else if...else statement
  if        (sides[0] === sides[1] &&
             sides[1] === sides[2] &&
             sides[2] === sides[3] && ninety) {
             console.log("This is a square."); //Square: all sides equal, all corners 90 degrees
  } 
  else if   (sides[0] === sides[2] &&
             sides[1] === sides[3] && ninety) {
             console.log("This is a Rectangle."); //Rectangle: opposite sides equal, all corners 90 degrees.
  } 
  else if   (sides[0] === sides[2] &&
             sides[1] === sides[3] &&
             sides[0] === sides[3] &&
             corners[0] < 90 &&
             corners[2] < 90 &&
             corners[1] > 90 &&
             corners[3] > 90) {
             console.log("This is a Rhombus."); //Rhombus: all sides equal, opposite angles equal. Two opposite corners are less than 90 degrees,the other two corners are more than 90 degrees.
  } 
  else if   (sides[0] === sides[2] &&
             sides[1] === sides[3] &&
             corners[1] > 90 &&
             corners[3] > 90 &&
             corners[0] < 90 &&
             corners[2] < 90) {
             console.log("This is a Parallelogram."); //Parallelogram: Opposite sides equal, opposite angles equal. Two opposite corners are less than 90 degrees, the other two corners are more than 90 degrees.
  } 
  else     {
             console.log("The determined shape is neither a square, rhombus, rectangle or parallelogram.");
  }

  /*
  Sources:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  */
