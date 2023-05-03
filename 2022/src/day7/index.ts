import { sum } from '../utils/reduce';
import { parseCommands } from './parser';

const COMMAND_PREFIX = '$ ';

const getCommandType = (command: string): 'cd' | 'file' | false =>
  command.startsWith(COMMAND_PREFIX)
    ? command.replace(COMMAND_PREFIX, '').startsWith('cd') && 'cd'
    : !command.startsWith('dir ') && command.search(/^\d/) !== -1 && 'file';

const getFileSize = (command: string) => Number(command.split(' ')[0]);

const cd = (command: string, currentDir: string) => {
  const dir = command.replace(`${COMMAND_PREFIX}cd `, '');
  return dir === '/'
    ? dir
    : dir === '..'
    ? currentDir.slice(0, currentDir.lastIndexOf('/'))
    : currentDir.endsWith('/')
    ? `${currentDir}${dir}`
    : `${currentDir}/${dir}`;
};

const containingDir = (dirs: string[], dir: string) =>
  dirs.filter((d) => dir.length > d.length && dir.includes(d));

export const run = (input: string) =>
  Object.values(
    parseCommands(input).reduce<[{ [key: string]: number }, string]>(
      ([dirSizes, currentDir], command) => {
        const commandType = getCommandType(command);
        if (commandType === 'cd') {
          return [dirSizes, cd(command, currentDir)];
        }
        if (commandType === 'file') {
          const fileSize = getFileSize(command);
          dirSizes[currentDir]
            ? (dirSizes[currentDir] += fileSize)
            : (dirSizes[currentDir] = fileSize);
          containingDir(Object.keys(dirSizes), currentDir).forEach(
            (dir) => (dirSizes[dir] += fileSize)
          );
        }
        return [dirSizes, currentDir];
      },
      [{}, '']
    )[0]
  )
    .filter((fileSize) => fileSize <= 100000)
    .reduce(sum, 0);
