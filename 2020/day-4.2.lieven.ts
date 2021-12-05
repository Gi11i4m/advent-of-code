import input from "./day-4.input.ts";

interface Passport {
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
  cid: string;
}

const passports: Passport[] = input
  .split("\n\n")
  .map(passportLine =>
    Object.fromEntries(passportLine.split(/\s/g).map(item => item.split(":")))
  );

const POSSIBLE_EYE_COLORS = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

const isBetween = (
  numToCheck: number | string,
  num1: number,
  num2: number
): boolean => {
  return +numToCheck >= num1 && +numToCheck <= num2;
};

const isValidPassport = (input: Passport): input is Passport => {
  return !!(
    input.byr &&
    input.ecl &&
    input.eyr &&
    input.hcl &&
    input.hgt &&
    input.iyr &&
    input.pid
  );
};

const isValidHeight = (input: string): boolean => {
  const correctFormat = input.match(/\d*(cm|in)/);
  if (!correctFormat || correctFormat[0].length !== input.length) return false;

  const heightValue = correctFormat[0].match(/\d*/)![0];
  const heightUnit = correctFormat[0].match(/(cm|in)/)![0];
  if (heightUnit === "cm" && !isBetween(heightValue, 150, 193)) return false;
  if (heightUnit === "in" && !isBetween(heightValue, 59, 76)) return false;

  return true;
};

const isValidHairColor = (input: string): boolean => {
  const correctFormat = input.match(/#[0-9a-fA-F]{6}/);
  return !!correctFormat && correctFormat[0].length === input.length;
};

const isValidPassportContent = (input: Passport): boolean => {
  const { byr, ecl, eyr, hcl, hgt, iyr, pid } = input;
  return (
    isValidPassport(input) &&
    byr.length === 4 &&
    isBetween(byr, 1920, 2002) &&
    iyr.length === 4 &&
    isBetween(iyr, 2010, 2020) &&
    eyr.length === 4 &&
    isBetween(eyr, 2020, 2030) &&
    isValidHeight(hgt) &&
    isValidHairColor(hcl) &&
    POSSIBLE_EYE_COLORS.indexOf(ecl) > -1 &&
    pid?.length === 9 &&
    pid.match(/[0-9]{9}/)?.length === 1
  );
};

const validPassports = passports.filter(isValidPassportContent).map(pp => {
  console.log(pp);
  return pp;
}).length;

console.log(validPassports);
