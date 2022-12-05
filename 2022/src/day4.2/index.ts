import { generateRange } from '../utils/generator';
import { parseGroupedRanges } from '../utils/parser';
import { sum } from '../utils/reduce';

const areArraysOverlapping = (range1: number[], range2: number[]) =>
  !!range1.find((num) => range2.includes(num));

export const run = (input: string) =>
  (parseGroupedRanges(input) as [[number, number], [number, number]][])
    .map(([range1, range2]) => [generateRange(range1), generateRange(range2)])
    .map(([range1, range2]) => areArraysOverlapping(range1!, range2!))
    .filter((isOverlapping) => isOverlapping)
    .map(Number)
    .reduce(sum, 0);
