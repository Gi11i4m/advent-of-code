import instructions from './input';

export const run = (instructions: [string, number][]) => {
  const [horizontal, depth] = instructions.reduce(
    ([horizontal, depth], [command, value]) => [
      command === 'forward' ? horizontal + value : horizontal,
      command === 'up'
        ? depth - value
        : command === 'down'
        ? depth + value
        : depth,
    ],
    [0, 0]
  );
  return horizontal * depth;
};

console.log(run(instructions));
