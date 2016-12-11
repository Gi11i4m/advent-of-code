export class Signal {
  constructor(public code: string) {}

  getCodeArray() {
    return Array.from(this.code);
  }

  getLength() {
    return this.code.length;
  }
}