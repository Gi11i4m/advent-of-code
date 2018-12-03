export class ArrayTransposer {
  static transpose(inputArray: number[][]): number[][] {
    let transposedInputArray: number[][] = [];
    for (let column = 0; column < inputArray[0].length; column++) {
      for (let row = 0; row < inputArray.length; row+=3) {
          transposedInputArray.push([inputArray[row][column], inputArray[row+1][column], inputArray[row+2][column]]);
      }
    }
    return transposedInputArray;
  }
}