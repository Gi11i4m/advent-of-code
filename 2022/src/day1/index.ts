import { parseGroupedNumbers } from '../utils/parser';
import { sum } from '../utils/reduce';

export const run = (input: string) =>
  parseGroupedNumbers(input)
    .map((calorieGroup) => calorieGroup.reduce(sum, 0))
    .sort((a, b) => b - a)
    .at(0);
