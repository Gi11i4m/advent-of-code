import {Input} from './input';
import {Signal} from './signal';
import {RepeatedSignal} from './repeated-signal';

class Program {
  static executePart1(signals: Signal[]) {
    console.log(new RepeatedSignal(signals).correctWithRepetitionAlgorithm().code);
  }
  static executePart2(signals: Signal[]) {
    console.log(new RepeatedSignal(signals).correctWithLeastLikelyAlgorithm().code);
  }
}

Program.executePart1(Input.get());
Program.executePart2(Input.get());