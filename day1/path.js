const Coordinate = require('./coordinate');

module.exports = class Path {
  
  constructor(startingCoordinate, startingDirection) {
    this.coordinates = [startingCoordinate];
    this.direction = startingDirection;
  }

  addCoordinate(coordinate) {
    this.coordinates.push(coordinate);
  }

  parseInstruction(instruction) {
    this.direction = this.getNextDirection(instruction.getMove());
    this.addCoordinate(this.getNextCoordinate(instruction.getDistance()));
  }

  getNextDirection(move) {
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
    }[move][this.direction];
  }

  getNextCoordinate(distance) {
    return {
      'N': new Coordinate(this.getLastCoordinate().x, this.getLastCoordinate().y+distance),
      'E': new Coordinate(this.getLastCoordinate().x+distance, this.getLastCoordinate().y),
      'S': new Coordinate(this.getLastCoordinate().x, this.getLastCoordinate().y-distance),
      'W': new Coordinate(this.getLastCoordinate().x-distance, this.getLastCoordinate().y)
    }[this.direction];
  }

  getLastCoordinate() {
    return this.coordinates[this.coordinates.length-1];
  }

  findFirstDoubleCrossedCoordinate() {
    let duplicateCoordinates = [];
    this.coordinates
      .forEach((coordinate, index) => {
        if (this.coordinates.slice(index+1).findIndex(element => element.equals(coordinate)) !== -1)
          duplicateCoordinates.push(coordinate);
      });
    return duplicateCoordinates[0];
  }
}