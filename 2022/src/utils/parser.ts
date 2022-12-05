export const parseGroupedNumbers = (input: string): number[][] =>
  input
    .replaceAll(' ', '')
    .trim()
    .split('\n\n')
    .map((calorieGroup) =>
      calorieGroup
        .split('\n')
        .filter((calorie) => calorie !== '')
        .map((calorie) => Number(calorie))
    );

const parseLines = (input: string): string[] =>
  input.replaceAll(' ', '').trim().split('\n');

export const parseGroupedLetters = (input: string): string[][] =>
  parseLines(input).map((letterGroup) => letterGroup.split(''));

export const parseLinesAndSplitHalfway = (input: string): [string, string][] =>
  parseLines(input).map((line) => [
    line.slice(0, line.length / 2),
    line.slice(line.length / 2),
  ]);

export const parseLinesGroupedBy = (input: string, groupSize = 3) =>
  parseLines(input)
    .reduce<string[][]>(
      ([first, ...rest], next) =>
        first!.length < groupSize
          ? [[...first!, next], ...rest]
          : [[next], first!, ...rest],
      [[]]
    )
    .reverse();

export const parseGroupedRanges = (input: string): number[][][] =>
  parseLines(input).map((line) =>
    line.split(',').map((range) => range.split('-').map(Number))
  );
