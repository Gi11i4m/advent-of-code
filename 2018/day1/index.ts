export function calculateFrequencyDrift(frequencyChanges: Array<number>) {
  console.log('Working');
  return frequencyChanges.reduce((freq1, freq2) => freq1 + freq2, 0);
}

calculateFrequencyDrift([]);