import { parseLinesGroupedBy } from '../utils/parser';
import { sum } from '../utils/reduce';

const ALPHABETH = Array.of(
  (char: string) => char,
  (char: string) => char.toUpperCase()
).flatMap((fun) => fun('abcdefghijklmnopqrstuvwxyz').split(''));

const findCommonItem = ([firstItems, ...otherItems]: string[]) =>
  firstItems!
    .split('')
    .find((item) => otherItems.every((items) => items.includes(item)))!;

const getPriorityFor = (letter: string) => ALPHABETH.indexOf(letter) + 1;

export const run = (input: string) =>
  parseLinesGroupedBy(input, 3)
    .map(findCommonItem)
    .map(getPriorityFor)
    .reduce(sum, 0);
