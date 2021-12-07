import diagnostics from './input';

export const run = (diagnostics: string[]) => {
  const countOnes = diagnostics.reduce<number[]>((acc, curr, index) => {
    const currBinarray = curr.split('').map((binary) => Number(binary));
    if (index === 0) {
      acc = currBinarray;
    }
    currBinarray.forEach((binary, index) => (acc[index] += binary));
    return acc;
  }, []);

  const gammaRate = parseInt(
    countOnes.map((ones) => (ones > diagnostics.length / 2 ? 1 : 0)).join(''),
    2
  );
  const epsilonRate = parseInt(
    countOnes.map((ones) => (ones <= diagnostics.length / 2 ? 1 : 0)).join(''),
    2
  );

  return gammaRate * epsilonRate;
};

console.log(run(diagnostics));
