import { parseGroupedLetters } from '../utils/parser';
import { sum } from '../utils/reduce';

enum Hand {
  ROCK = 'A',
  PAPER = 'B',
  SCISSORS = 'C',
}

enum Result {
  LOSE = 'X',
  DRAW = 'Y',
  WIN = 'Z',
}

const WINS = [
  [Hand.ROCK, Hand.PAPER],
  [Hand.PAPER, Hand.SCISSORS],
  [Hand.SCISSORS, Hand.ROCK],
];

const getYourHandFor = (opponent: Hand, result: Result) =>
  ({
    [Result.DRAW]: () => opponent,
    [Result.WIN]: () => WINS.find(([opp]) => opp === opponent)![1]!,
    [Result.LOSE]: () =>
      WINS.find(([opp, you]) => opp !== opponent && opponent !== you)![1]!,
  }[result]());

const getFixedScoreFor = (opp: Hand, res: Result) =>
  Object.values(Hand).indexOf(getYourHandFor(opp, res)) + 1;

const getMatchScoreFor = (res: Result) =>
  Object.values(Result).indexOf(res) * 3;

export const run = (input: string) =>
  (parseGroupedLetters(input) as [Hand, Result][])
    .map(([opp, res]) => getFixedScoreFor(opp, res) + getMatchScoreFor(res))
    .reduce(sum, 0);
