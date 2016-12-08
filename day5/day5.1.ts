const md5 = require("md5");

class Program{
  static execute(input: string) {
    let index: number = 0;
    let password: string = '';
    while(password.length < 8) {
      let hash: string = md5(input + index);
      if(hash.startsWith('00000')) {
        password += hash[5];
        console.log("Found password character " + password.length);
      }
      index++;
    }
    console.log("Password = " + password);
  }
}

Program.execute(process.argv[2]);