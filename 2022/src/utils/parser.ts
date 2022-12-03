export const parseGroupedNumbers = (input: string): number[][] =>
  input
    .replaceAll(' ', '')
    .split('\n\n')
    .map((calorieGroup) =>
      calorieGroup
        .trim()
        .split('\n')
        .filter((calorie) => calorie.trim() !== '')
        .map((calorie) => Number(calorie.trim()))
    );
