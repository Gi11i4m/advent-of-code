export class Ip {
  constructor(public ipAddress: string) {}

  isTlsSupported(): boolean {
    let chunksOutsideBraces = [];
    let chunksInsideBraces = [];
    const matchesAbba = /([a-z])((?!\1)[a-z])\2\1/;
    this.ipAddress
      .split(/\[|]/)
      .forEach((ipChunk, index) => index % 2 == 0 ? chunksOutsideBraces.push(ipChunk) : chunksInsideBraces.push(ipChunk));
    return chunksOutsideBraces
        .filter(chunk => matchesAbba.test(chunk))
        .length > 0
      && chunksInsideBraces
        .filter(chunk => matchesAbba.test(chunk))
        .length == 0;
  }
  
  isSslSupported(): boolean {
    
    return false;
  }
}