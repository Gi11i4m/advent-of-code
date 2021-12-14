import instructions from './input';

export const run = (instructions: [string, number][]) => {
  const [horizontal, depth, aim] = instructions.reduce(
    ([horizontal, depth, aim], [command, value]) => [
      command === 'forward' ? horizontal + value : horizontal,
      command === 'forward' ? depth + aim * value : depth,
      command === 'up' ? aim - value : command === 'down' ? aim + value : aim,
    ],
    [0, 0, 0]
  );
  return horizontal * depth;
};

console.log(run(instructions));
