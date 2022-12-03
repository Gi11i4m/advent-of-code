import { parseGroupedLetters } from '../utils/parser';
import { sum } from '../utils/reduce';

enum Opponent {
  ROCK = 'A',
  PAPER = 'B',
  SCISSORS = 'C',
}

enum You {
  ROCK = 'X',
  PAPER = 'Y',
  SCISSORS = 'Z',
}

const WINS = [
  [Opponent.ROCK, You.PAPER],
  [Opponent.PAPER, You.SCISSORS],
  [Opponent.SCISSORS, You.ROCK],
];

const getFixedScoreFor = (you: You) => Object.values(You).indexOf(you) + 1;

const getMatchScoreFor = (opp: Opponent, you: You) =>
  Object.values(Opponent).indexOf(opp) === Object.values(You).indexOf(you)
    ? 3
    : WINS.find(([o, y]) => o === opp && y === you)
    ? 6
    : 0;

export const run = (input: string) =>
  (parseGroupedLetters(input) as [Opponent, You][])
    .map(([opp, you]) => getFixedScoreFor(you) + getMatchScoreFor(opp, you))
    .reduce(sum, 0);
