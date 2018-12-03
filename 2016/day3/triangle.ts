export class Triangle {

  constructor(public sideLengths: number[]) {}

  isValid() {
    return this.sideLengths[0] + this.sideLengths[1] > this.sideLengths[2]
        && this.sideLengths[1] + this.sideLengths[2] > this.sideLengths[0]
        && this.sideLengths[0] + this.sideLengths[2] > this.sideLengths[1];
  }
}