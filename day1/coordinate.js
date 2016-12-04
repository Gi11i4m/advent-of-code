module.exports = class Coordinate {
  
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

  equals(coordinate) {
    return this.x === coordinate.x
      && this.y === coordinate.y;
  }
}