import input from "./day-1.input.ts";

const SUM = 2020;
let result: [number, number, number] = [0, 0, 0];

input.find(
  (num1, index1) =>
    !!input.find(
      (num2, index2) =>
        !!input.find((num3, index3) => {
          if (
            num1 + num2 + num3 === SUM &&
            index1 !== index2 &&
            index2 !== index3 &&
            index1 !== index3
          ) {
            result = [num1, num2, num3];
            return true;
          }
          return false;
        })
    )
);

const [res1, res2, res3] = result;
console.log(res1 * res2 * res3);
