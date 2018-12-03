export class Room {
  encryptedName: string;
  sectorId: number;
  checkSum: string;
  constructor(data: string) {
    this.encryptedName = /^(?:[a-z]+-)+[a-z]+/.exec(data).toString();
    this.sectorId = Number(/\d+/.exec(data));
    this.checkSum = /\[([a-z]+)]/.exec(data)[1];
  }

  private countInEncryptedName(char: string): number {
    return Array.from(this.encryptedName)
      .filter(eNChar => eNChar == char)
      .length;
  }

  decryptName(): string {
    const mappings: any = {'a':'b','b':'c','c':'d','d':'e','e':'f','f':'g','g':'h','h':'i','i':'j','j':'k','k':'l','l':'m','m':'n','n':'o','o':'p','p':'q','q':'r','r':'s','s':'t','t':'u','u':'v','v':'w','w':'x','x':'y','y':'z','z':'a','-':' ',' ':' '};
    let decryptedName: string[] = Array.from(this.encryptedName);
    for (let i: number = 0; i < this.sectorId; i++) {
      decryptedName = decryptedName.map(char => mappings[char]);
    }
    return decryptedName.join('');
  }

  isValid(): boolean {
    return ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        .map(char => new CharCount(char, this.countInEncryptedName(char)))
        .sort((charCount1, charCount2) => charCount1.compareTo(charCount2))
        .filter((value, index) => index < this.checkSum.length)
        .map(charCount => charCount.char)
        .reduce((char1, char2) => char1 + char2) == this.checkSum;
  }
}

class CharCount {
  constructor(public char: string, public count: number) {}

  compareTo(charCount: CharCount): number {
    return this.count == charCount.count
      ? charCount.char > this.char ? -1 : 1
      : charCount.count - this.count;
  }
}