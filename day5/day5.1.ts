const md5 = require('md5');

class Program{
  static execute(input: string) {
    let index: number = 0;
    let password: string = '';
    while(password.length < 8) {
      let hash: string = md5(input + index);
      if(hash.startsWith('00000')) {
        password += hash[5];
        process.stdout.write('...' + password.length + '...');
      }
      index++;
    }
    process.stdout.write('\nPassword: ' + password + '\n');
  }
}

Program.execute(process.argv[2]);