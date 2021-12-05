import inputs from "./day-2.input.ts";

const validate = ([positions, letter, password]: [string, string, string]) => {
  const [first, second] = positions
    .split(" - ")
    .map(count => Number(count) - 1);
  return (
    [password[first], password[second]].filter(
      passwordLetter => passwordLetter === letter
    ).length === 1
  );
};

const numberOfValidPasswords = (inputs as [string, string, string][])
  .map(validate)
  .filter(valid => valid).length;

console.log(numberOfValidPasswords);
