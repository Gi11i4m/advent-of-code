import {Keypad} from "./keypad";
import {Position} from "./position";

export class KeypadUser {
  keypad: Keypad;
  constructor(public fingerPosition: Position) {
    this.keypad = new Keypad();
  }

  moveFinger(instructions: string[]): void {
    instructions.forEach(instruction => {
      this.fingerPosition = this.getFingerPosition(instruction);
    });
  }

  getFingerPosition(instruction): Position { // TODO: map to keypadnumbers instead of positions, create function for mapping
    const positionAfterInstruction = {
      1: {
        'R': new Position(0, 1),
        'D': new Position(1, 0)
      },
      2: {
        'L': new Position(0, 0),
        'R': new Position(0, 2),
        'D': new Position(1, 1)
      },
      3: {
        'L': new Position(0, 1),
        'D': new Position(1, 2)
      },
      4: {
        'R': new Position(1, 1),
        'U': new Position(0, 0),
        'D': new Position(2, 0)
      },
      5: {
        'L': new Position(1, 0),
        'R': new Position(1, 2),
        'U': new Position(0, 1),
        'D': new Position(2, 1)
      },
      6: {
        'L': new Position(1, 1),
        'U': new Position(0, 2),
        'D': new Position(2, 2)
      },
      7: {
        'R': new Position(2, 1),
        'U': new Position(1, 0)
      },
      8: {
        'L': new Position(2, 0),
        'R': new Position(2, 2),
        'U': new Position(1, 1)
      },
      9: {
        'L': new Position(2, 1),
        'U': new Position(1, 2)
      }
    }[this.getKeypadKeyUnderFinger()][instruction];
    return (positionAfterInstruction === undefined) ? this.fingerPosition : positionAfterInstruction;
  }

  getKeypadKeyUnderFinger(): number {
    return this.keypad.keys[this.fingerPosition.x][this.fingerPosition.y];
  }
}