let Coordinate = require('./coordinate');

module.exports = class Instruction {

  constructor(instruction) {
    this.instruction = instruction;
  }

  getMove() {
    return this.instruction.charAt(0);
  }

  getDistance() {
    return Number(this.instruction.substring(1));
  }

  getNextDirection(currentDirection) {
    return {
      'L': {
        'N': 'W',
        'W': 'S',
        'S': 'E',
        'E': 'N'
      }, 
      'R': {
        'N': 'E',
        'E': 'S',
        'S': 'W',
        'W': 'N'
      }  
    }[this.getMove()][currentDirection];
  } 

  getNextCoordinate(coordinate, direction) {
    return {
      'N': new Coordinate(coordinate.x, coordinate.y+this.getDistance()),
      'E': new Coordinate(coordinate.x+this.getDistance(), coordinate.y),
      'S': new Coordinate(coordinate.x, coordinate.y-this.getDistance()),
      'W': new Coordinate(coordinate.x-this.getDistance(), coordinate.y)
    }[direction];
  }

  getCoordinateAfterInstruction(direction) {
    return {
      'N': new Coordinate(0, this.getDistance()),
      'E': new Coordinate(this.getDistance(), 0),
      'S': new Coordinate(0, -this.getDistance()),
      'W': new Coordinate(-this.getDistance(), 0)
    }[direction];
  }
}