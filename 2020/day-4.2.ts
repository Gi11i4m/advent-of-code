import inputs from "./day-4.input.ts";

const isBetween = (val: string, min: number, max: number) => {
  const valNum = Number(val);
  return valNum >= min && valNum <= max;
};

type PassportKey = "byr" | "iyr" | "eyr" | "hgt" | "hcl" | "ecl" | "pid";
type Passport = { [key in PassportKey]: string };

const PASSPORT_FIELD_VALIDATION: {
  [key in PassportKey]: (value: string) => boolean;
} = {
  byr: (value: string) => isBetween(value, 1920, 2002),
  iyr: (value: string) => isBetween(value, 2010, 2020),
  eyr: (value: string) => isBetween(value, 2020, 2030),
  hgt: (value: string) =>
    value.endsWith("in")
      ? isBetween(value.substring(0, value.length - 2), 59, 76)
      : value.endsWith("cm")
      ? isBetween(value.substring(0, value.length - 2), 150, 193)
      : false,
  hcl: (value: string) => !!value.match(/^#[0-9a-f]{6}$/),
  ecl: (value: string) => !!value.match(/amb|blu|brn|gry|grn|hzl|oth/),
  pid: (value: string) => !!value.match(/^\d{9}$/),
};

const stringToPassport = (data: string) =>
  Object.fromEntries(
    data.split(/\s/g).map(passPortEntry => passPortEntry.split(":"))
  ) as Passport;

const isValidPassport = (passport: Passport) =>
  !(Object.keys(PASSPORT_FIELD_VALIDATION) as PassportKey[]).find(
    passportKey =>
      !passport[passportKey] ||
      !PASSPORT_FIELD_VALIDATION[passportKey](passport[passportKey])
  );

const numberOfValidPassports = inputs
  .split("\n\n")
  .map(stringToPassport)
  .filter(isValidPassport).length;

console.log(numberOfValidPassports);
