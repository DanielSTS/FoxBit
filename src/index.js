const Rover = require('./Rover')

const nReadlines = require("n-readlines");
const broadbandLines = new nReadlines("src/tests/inputFile.txt");

let rover;
let line;
let limits = broadbandLines.next().toString("ascii").trim();
let numLine = 1;
let answer = [];

while ((line = broadbandLines.next())) {
  line = line.toString("ascii").trim();

  if (numLine % 2 != 0) {
    const [x, y, direction] = line.split(" ");
    rover = new Rover(parseInt(x), parseInt(y), direction);
  } else {
    const [xLimit, yLimit] = limits.split(' ');
    const directions = line; 
    rover.StartMoving(xLimit, yLimit, directions);
    let { X, Y, Direction } = rover;
    answer.push([X, Y, Direction]);
  }

  numLine++;
}

// print output
for (const position of answer) {
  const [x, y, direction] = position; 
  console.log(x, y, direction)
}