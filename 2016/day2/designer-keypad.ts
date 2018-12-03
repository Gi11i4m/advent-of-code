export class DesignerKeypad {
  
  constructor(public currentlySelectedKey: number | string) {}

  setCurrentlySelectedKey(instruction: string): void {
    this.currentlySelectedKey = {
      'L': { 1:1, 2:1, 3:2, 4:3, 5:5, 6:5, 7:6, 8:7, 9:8, 'A':'A', 'B':'A', 'C':'B', 'D':'D' },
      'R': { 1:1, 2:3, 3:4, 4:4, 5:6, 6:7, 7:8, 8:9, 9:9, 'A':'B', 'B':'C', 'C':'C', 'D':'D' },
      'U': { 1:1, 2:2, 3:1, 4:4, 5:5, 6:2, 7:3, 8:4, 9:9, 'A':6, 'B':7, 'C':8, 'D':'B' },
      'D': { 1:3, 2:6, 3:7, 4:8, 5:5, 6:'A', 7:'B', 8:'C', 9:9, 'A':'A', 'B':'D', 'C':'C', 'D':'D' }
    }[instruction][this.currentlySelectedKey];
  }
}