export class Screen {
  pixels: boolean[][];
  constructor(public width: number, public height: number) {
    this.pixels = [];
  }

  drawRectangle(x: number, y: number): void {
    
  }

  rotateRow(y: number, rotation: number): void {

  }

  rotateColumn(x: number, rotation: number): void {

  }

  toString(): string {
    return this.pixels
      .map(pixelRow => pixelRow
        .map(pixel => pixel ? '#' : '.')
        .join(' '))
      .join('\n');
  }
}