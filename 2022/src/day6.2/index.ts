import { generateRange } from '../utils/generator';

const PATTERN_LENGTH = 14;

export const run = (input: string) =>
  input.split('').findIndex(
    (_, index, array) =>
      index >= PATTERN_LENGTH &&
      generateRange([-(PATTERN_LENGTH - 1), 0])
        .map((indexOffset) => array[index + indexOffset])
        .every((v, _, arr) => arr.indexOf(v) === arr.lastIndexOf(v))
  ) + 1;
