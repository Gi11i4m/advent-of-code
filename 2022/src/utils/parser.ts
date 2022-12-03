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

export const parseGroupedLetters = (input: string): string[][] =>
  input
    .replaceAll(' ', '')
    .trim()
    .split('\n')
    .map((letterGroup) => letterGroup.split(''));
