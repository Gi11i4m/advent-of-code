import { identity } from '../utils/util';

const lettersAndSpaces = (line: string) =>
  line.replaceAll('[', '').replaceAll(']', '').replaceAll('    ', ' ');

const removeStackNumbers = (line: string) => !line.trim().startsWith('1');

export const parseCrates = (
  input: string
): { stacks: string[][]; instructions: [number, number, number][] } => {
  const [toParseCrates, toParseInstructions] = input
    .trimEnd()
    .split('\n\n') as [string, string];

  return {
    stacks: toParseCrates
      .split('\n')
      .filter(identity)
      .map(lettersAndSpaces)
      .filter(removeStackNumbers)
      .reduce(
        (acc, line) => {
          line.split(' ').reduce((acc, crate, index) => {
            crate && acc[index]!.push(crate);
            return acc;
          }, acc);
          return acc;
        },
        Array.from(
          Array(Number(toParseCrates.trim().split(' ').pop())),
          () => [] as string[]
        )
      ),
    instructions: toParseInstructions.split('\n').map(
      (line) =>
        line
          .split(' ')
          .filter((val) => !['move', 'from', 'to'].includes(val))
          .map(Number) as [number, number, number]
    ),
  };
};
