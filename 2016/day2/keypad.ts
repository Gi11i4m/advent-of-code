export class Keypad {

  constructor(public currentlySelectedKey: number) {}

  setCurrentlySelectedKey(instruction: string): void {
    this.currentlySelectedKey = {
      'L': { 1:1, 2:1, 3:2, 4:4, 5:4, 6:5, 7:7, 8:7, 9:8 },
      'R': { 1:2, 2:3, 3:3, 4:5, 5:6, 6:6, 7:8, 8:9, 9:9 },
      'U': { 1:1, 2:2, 3:3, 4:1, 5:2, 6:3, 7:4, 8:5, 9:6 },
      'D': { 1:4, 2:5, 3:6, 4:7, 5:8, 6:9, 7:7, 8:8, 9:9 }
    }[instruction][this.currentlySelectedKey];
  }
}