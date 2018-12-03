module.exports = class Coordinate {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistanceToZero() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  getCoordinatesTo(targetCoordinate) {
    let coordinatesBetween = [];
    let coordinate = this.clone();
    while(!coordinate.equals(targetCoordinate)) {
      coordinate = coordinate.getOneCoordinateCloser(targetCoordinate);
      coordinatesBetween.push(coordinate);
    }
    return coordinatesBetween;
  }

  getOneCoordinateCloser(coordinateTo) {
    if (coordinateTo.x < this.x) {
      return new Coordinate(this.x-1, this.y);
    } else if (coordinateTo.x > this.x) {
      return new Coordinate(this.x+1, this.y);
    } else if (coordinateTo.y < this.y) {
      return new Coordinate(this.x, this.y-1);
    } else if (coordinateTo.y > this.y) {
      return new Coordinate(this.x, this.y+1);
    } else {
      return new Coordinate(this.x, this.y);
    }
  }

  add(coordinate) {
    return new Coordinate(this.x + coordinate.x, this.y + coordinate.y);
  }

  equals(coordinate) {
    return this.x === coordinate.x
      && this.y === coordinate.y;
  }

  clone() {
    return new Coordinate(this.x, this.y);
  }
};