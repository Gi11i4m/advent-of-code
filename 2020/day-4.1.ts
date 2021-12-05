import inputs from "./day-4.input.ts";

const numberOfValidPassports = inputs
  .split("\n\n")
  .map(data => data.replaceAll("\n", " "))
  .filter(
    passport =>
      !!passport.match(
        /(?=.*byr:)(?=.*iyr:)(?=.*eyr:)(?=.*hgt:)(?=.*hcl:)(?=.*ecl:)(?=.*pid:).*/g
      )
  ).length;

console.log(numberOfValidPassports);
