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
};