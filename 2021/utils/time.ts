import { existsSync } from 'fs';
import path from 'path';

const script = path.resolve(__dirname, `../${process.argv[2]}`);

if (!existsSync(script)) {
  console.error(`Can not find ${script}, did you specify an existing day?`);
  process.exit(1);
}

console.time('Runtime');
const day = require(script);
console.timeEnd('Runtime');
