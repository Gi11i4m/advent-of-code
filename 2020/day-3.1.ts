import inputs from "./day-3.input.ts";

console.log(
  inputs.filter((line, index) => line[(index * 3) % line.length] === "#").length
);
