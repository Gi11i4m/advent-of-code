import inputs from "./day-3.input.ts";

const numberOfEncounteredTrees = inputs
  .map((line, index) => [
    line[index % line.length],
    line[(index * 3) % line.length],
    line[(index * 5) % line.length],
    line[(index * 7) % line.length],
    index % 2 === 0 ? line[(index / 2) % line.length] : ".",
  ])
  .reduce(
    (acc, curr) =>
      acc.map((count, index) => (curr[index] === "#" ? count + 1 : count)),
    [0, 0, 0, 0, 0]
  )
  .reduce((acc, count) => acc * count);

console.log(numberOfEncounteredTrees);
