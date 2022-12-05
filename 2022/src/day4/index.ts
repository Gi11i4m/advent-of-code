import { parseGroupedRanges } from '../utils/parser';
import { sum } from '../utils/reduce';

const isOneRangeContainedByOther = (
  [range1Min, range1Max]: [number, number],
  [range2Min, range2Max]: [number, number]
) =>
  (range1Min <= range2Min && range1Max >= range2Max) ||
  (range2Min <= range1Min && range2Max >= range1Max);

export const run = (input: string) =>
  (parseGroupedRanges(input) as [[number, number], [number, number]][])
    .map(([range1, range2]) => isOneRangeContainedByOther(range1, range2))
    .filter((isContained) => isContained)
    .map(Number)
    .reduce(sum, 0);
