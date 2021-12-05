import depths from './input';

export const run = (depths: number[]) =>
  depths.reduce(
    ([depth1, acc], depth2) => [depth2, depth2 > depth1 ? acc + 1 : acc],
    [Infinity, 0]
  )[1];

console.log(run(depths));
