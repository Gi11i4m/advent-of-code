import {CinematicAnimation} from "./cinematic-animation";
const md5 = require("md5");

class Program{
  static execute(input: string) {
    let index: number = 0;
    let password: string[] = [];
    const animation: CinematicAnimation = new CinematicAnimation('Decrypting...');
    while(this.isFilled(password, 8)) {
      let hash: string = md5(input + index);
      if (hash.startsWith('00000')) {
        animation.generateAnimationFrame();
        const position: number = Number(hash.charAt(5));
        if (!isNaN(position) && position < 8) {
          const character = hash.charAt(6);
          if (password[position] === undefined) {
            animation.print('val' + character + '@pos' + position);
            password[position] = character;
          }
        }
      }
      index++;
    }
    animation.print('\nPassword = ' + password.join('') + '\n');
  }

  static isFilled(array: string[], length: number) {
    for (let i: number = 0; i < length; i++) {
      if (array[i] === undefined) return true;
    }
    return false;
  }
}

Program.execute(process.argv[2]);