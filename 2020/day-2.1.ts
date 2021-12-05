import inputs from "./day-2.input.ts";

const validate = ([counts, letter, password]: [string, string, string]) => {
  const [min, max] = counts.split(" - ").map(count => Number(count));
  const letterCount = password
    .split("")
    .filter(passwordLetter => passwordLetter === letter).length;
  return letterCount >= min && letterCount <= max;
};

const numberOfValidPasswords = (inputs as [string, string, string][]).map(
  validate
).length;

console.log(numberOfValidPasswords);
