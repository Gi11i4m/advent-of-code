"use strict";
class Coordinate {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistanceToZero() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  add(coordinate) {
    return new Coordinate(this.x + coordinate.x, this.y + coordinate.y);
  }
}

class Instruction {

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
    if (this.getMove() === 'L') {
      return {
        'N': 'E',
        'E': 'S',
        'S': 'W',
        'W': 'N'
      }[currentDirection];
    } else if (this.getMove() === 'R') {
      return {
        'N': 'W',
        'W': 'S',
        'S': 'E',
        'E': 'N'
      }[currentDirection];
    }
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

class Program {

  static execute(startingDirection, instructions) {
    let direction = startingDirection;

    return instructions
      .map(instruction => {
        direction = instruction.getNextDirection(direction);
        return instruction.getCoordinateAfterInstruction(direction);
      })
      .reduce((coordinate1, coordinate2) => coordinate1.add(coordinate2))
      .getDistanceToZero();
  }
}

// EXECUTE
const instructions = ['R4', 'R3', 'R5', 'L3', 'L5', 'R2', 'L2', 'R5', 'L2', 'R5', 'R5', 'R5', 'R1', 'R3', 'L2', 'L2', 'L1', 'R5', 'L3', 'R1', 'L2', 'R1', 'L3', 'L5', 'L1', 'R3', 'L4', 'R2', 'R4', 'L3', 'L1', 'R4', 'L4', 'R3', 'L5', 'L3', 'R188', 'R4', 'L1', 'R48', 'L5', 'R4', 'R71', 'R3', 'L2', 'R188', 'L3', 'R2', 'L3', 'R3', 'L5', 'L1', 'R1', 'L2', 'L4', 'L2', 'R5', 'L3', 'R3', 'R3', 'R4', 'L3', 'L4', 'R5', 'L4', 'L4', 'R3', 'R4', 'L4', 'R1', 'L3', 'L1', 'L1', 'R4', 'R1', 'L4', 'R1', 'L1', 'L3', 'R2', 'L2', 'R2', 'L1', 'R5', 'R3', 'R4', 'L5', 'R2', 'R5', 'L5', 'R1', 'R2', 'L1', 'L3', 'R3', 'R1', 'R3', 'L4', 'R4', 'L4', 'L1', 'R1', 'L2', 'L2', 'L4', 'R1', 'L3', 'R4', 'L2', 'R3', 'L1', 'L5', 'R4', 'R5', 'R2', 'R5', 'R1', 'R5', 'R1', 'R3', 'L3', 'L2', 'L2', 'L5', 'R2', 'L2', 'R5', 'R5', 'L2', 'R3', 'L5', 'R5', 'L2', 'R4', 'R2', 'L1', 'R3', 'L5', 'R3', 'R2', 'R5', 'L1', 'R3', 'L2', 'R2', 'R1']
  .map(instruction => new Instruction(instruction));

console.log(Program.execute('N', instructions));