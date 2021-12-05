import input from "./day-1.input.ts";

const SUM = 2020;
const entry = input.find(
  number => number !== SUM / 2 && input.includes(SUM - number)
);
const result = !!entry ? entry * (SUM - entry) : (SUM / 2) * (SUM / 2);
console.log(result);
