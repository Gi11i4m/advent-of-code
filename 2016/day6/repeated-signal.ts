import {Signal} from './signal';

export class RepeatedSignal {
  constructor(public signals: Signal[]) {}

  correctWithRepetitionAlgorithm(): Signal {
    let correctedCode: string = '';
    for (let i = 0; i < this.signals[0].getLength(); i++) {
      const allSignalChars = this.signals
        .map(signal => signal.getCodeArray()[i]);
      correctedCode += this.orderByOccurrence(allSignalChars).pop();
    }
    return new Signal(correctedCode);
  }

  correctWithLeastLikelyAlgorithm(): Signal {
    let correctedCode: string = '';
    for (let i = 0; i < this.signals[0].getLength(); i++) {
      const allSignalChars = this.signals
        .map(signal => signal.getCodeArray()[i]);
      correctedCode += this.orderByOccurrence(allSignalChars)
        .reverse()
        .pop();
    }
    return new Signal(correctedCode);
  }

  private orderByOccurrence(array: Array<any>) {
    return array.sort((a, b) => array.filter(v => v === a).length - array.filter(v => v === b).length);
  }
}