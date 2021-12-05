import depths from './input';

export const run = (depths: number[]) => {
  const slidingWindowScan = depths
    .map((val, index, arr) =>
      index >= 2 ? arr[index - 2]! + arr[index - 1]! + val : undefined
    )
    .filter((v) => !!v) as number[];
  const numberOfIncreases = slidingWindowScan.reduce(
    ([depth1, acc], depth2) => [depth2, depth2 > depth1 ? acc + 1 : acc],
    [Infinity, 0]
  )[1];
  return numberOfIncreases;
};

console.log(run(depths));
