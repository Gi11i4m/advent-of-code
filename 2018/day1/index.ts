export function calculateFrequencyDrift(frequencyChanges: Array<number>) {
    return frequencyChanges.reduce((freq1, freq2) => freq1 + freq2, 0);
}

calculateFrequencyDrift([]);