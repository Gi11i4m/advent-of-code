import {Screen} from './screen';

export class Controller {
  screen: Screen;
  constructor() {
    this.screen = new Screen(50, 6)
  }
  
  parseInstruction(instruction: string): void {
    if (instruction.startsWith('rect')) {
      const numeralMatches: RegExpExecArray = /(\d+)x(\d+)/g.exec(instruction);
      const x: number = Number(numeralMatches[1]);
      const y: number = Number(numeralMatches[2]);
      this.screen.drawRectangle(x, y);
    } else if (instruction.startsWith('rotate row')) {
      const numeralMatches: RegExpExecArray = /y=(\d+) by (\d+)/g.exec(instruction);
      const y: number = Number(numeralMatches[1]);
      const rotation: number = Number(numeralMatches[2]);
      this.screen.rotateRow(y, rotation);
    } else if (instruction.startsWith('rotate column')) {
      const numeralMatches: RegExpExecArray = /x=(\d+) by (\d+)/g.exec(instruction);
      const x: number = Number(numeralMatches[1]);
      const rotation: number = Number(numeralMatches[2]);
      this.screen.rotateColumn(x, rotation);
    }
  }
}