import {Input} from './input';
import {Controller} from './controller';

class Program {
  static executePart1(instructions) {
    const controller: Controller = new Controller();
    instructions.forEach(instruction => controller.parseInstruction(instruction));
    console.log(controller.screen.toString());
  }
  static executePart2(instructions) {
    
  }
}

Program.executePart1(Input.get());
Program.executePart2(Input.get());