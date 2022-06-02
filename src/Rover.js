class Rover {

  constructor(x, y, direction) {
    this.X = x;
    this.Y = y;
    this.Direction = direction;
  }

  Rotate90Left() {
    switch (this.Direction) {
      case 'N':
        this.Direction = 'W';
        break;
      case 'S':
        this.Direction = 'E';
        break;
      case 'E':
        this.Direction = 'N';
        break;
      case 'W':
        this.Direction = 'S';
        break;
      default:
        break;
    }
  }

  Rotate90Right() {
    switch (this.Direction) {
      case 'N':
        this.Direction = 'E';
        break;
      case 'S':
        this.Direction = 'W';
        break;
      case 'E':
        this.Direction = 'S';
        break;
      case 'W':
        this.Direction = 'N';
        break;
      default:
        break;
    }
  }
 
  MoveInSameDirection() {
    switch (this.Direction) {
      case 'N':
        this.Y += 1;
        break;
      case 'S':
        this.Y -= 1;
        break;
      case 'E':
        this.X += 1;
        break;
      case 'W':
        this.X -= 1;
        break;
      default:
        break;
    }
  }

  StartMoving(xLimit, yLimit, moves) {
    
    for (let move of moves) {
      switch (move) {
        case 'M':
          this.MoveInSameDirection();
          break;
        case 'L':
          this.Rotate90Left();
          break;
        case 'R':
          this.Rotate90Right();
          break;
        default:
          console.log("Invalid command");
          break;
      }
    }
       
    if (this.X < 0 || this.X > xLimit || this.Y < 0 || this.Y > yLimit) {
      console.log("Position out of boundaries: ", this.X, this.Y, xLimit, yLimit);
    }
  }
}

module.exports = Rover