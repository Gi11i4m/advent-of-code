const Coordinate = require('./coordinate');

module.exports = class Path {

  constructor(startingCoordinate, startingDirection) {
    this.coordinates = [startingCoordinate];
    this.direction = startingDirection;
  }

  addCoordinate(coordinate) {
    this.coordinates = this.coordinates.concat(this.getLastCoordinate().getCoordinatesTo(coordinate));
  }

  parseInstruction(instruction) {
    this.addCoordinate(this.getNextCoordinate(instruction));
    this.direction = this.getNextDirection(instruction.getMove());
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

  getNextCoordinate(instruction) {
    return {
      'N': new Coordinate(this.getLastCoordinate().x, this.getLastCoordinate().y+instruction.getDistance()),
      'E': new Coordinate(this.getLastCoordinate().x+instruction.getDistance(), this.getLastCoordinate().y),
      'S': new Coordinate(this.getLastCoordinate().x, this.getLastCoordinate().y-instruction.getDistance()),
      'W': new Coordinate(this.getLastCoordinate().x-instruction.getDistance(), this.getLastCoordinate().y)
    }[this.getNextDirection(instruction.getMove())];
  }

  getLastCoordinate() {
    return this.coordinates[this.coordinates.length-1];
  }

  findFirstDoubleCrossedCoordinate() {
    let duplicateCoordinates = [];
    this.coordinates
        .forEach((coordinate, index) => {
          if (this.coordinates.slice(0, index-1).findIndex(element => element.equals(coordinate)) !== -1)
            duplicateCoordinates.push(coordinate);
        });
    return duplicateCoordinates[1]; // 1 because the first slice will be with (0,-1), which will include the first element
  }
};