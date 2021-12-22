import diagnostics from './input';

const diagnosticFilter = (filterMostCommonBit: boolean) => {
  const filterFunction = (
    diagnostics: string[],
    filterBitIndex = 0
  ): number => {
    if (diagnostics.length === 1) {
      return parseInt(diagnostics[0], 2);
    }

    const [zero, one] = diagnostics
      .map((v) => v.charAt(filterBitIndex))
      .reduce(
        ([zero, one], curr) =>
          curr === '1' ? [zero, one + 1] : [zero + 1, one],
        [0, 0]
      );

    const bitToFilter = filterMostCommonBit
      ? one >= zero
        ? '1'
        : '0'
      : zero <= one
      ? '0'
      : '1';

    const filteredDiagnostics = diagnostics.filter(
      (v) => v.charAt(filterBitIndex) === bitToFilter
    );

    return filterFunction(filteredDiagnostics, filterBitIndex + 1);
  };
  return filterFunction;
};

export const run = (diagnostics: string[]) => {
  const oxygenGeneratorRating = diagnosticFilter(true)(diagnostics) || 0;
  const co2ScrubberRating = diagnosticFilter(false)(diagnostics) || 0;
  return oxygenGeneratorRating * co2ScrubberRating;
};

console.log(run(diagnostics));
