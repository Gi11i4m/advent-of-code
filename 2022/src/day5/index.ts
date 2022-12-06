import { parseCrates } from './parser';

export const run = (input: string) => {
  const { stacks, instructions } = parseCrates(input);

  const cratesAfterInstructions = instructions.reduce(
    (acc, [amount, from, to]) => {
      const fromIndex = from - 1;
      const toIndex = to - 1;
      const cratesToMove = stacks[fromIndex]!.slice(0, amount);
      acc[fromIndex] = stacks[fromIndex]!.slice(amount);
      acc[toIndex] = cratesToMove.reverse().concat(stacks[toIndex]!);
      return stacks;
    },
    stacks
  );

  return cratesAfterInstructions.map(([firstCrate]) => firstCrate).join('');
};
