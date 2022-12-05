export const generateRange = ([from, to]: [number, number]) =>
  Array.from(Array(to - from + 1), (_, i) => from + i);
