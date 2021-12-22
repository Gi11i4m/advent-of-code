import { numbers, boards } from './input';

const markNumberOn = (number: number, board: number[][]): number[][] => {
  return board.map((row) =>
    row.map((val) => (number === val ? Infinity : val))
  );
};

const hasBoardWon = (board: number[][]) => {
  const hasMarkedRow = () =>
    board.find((row) => row.every((v) => v === Infinity));
  const hasMarkedColumn = () =>
    !!board.find((_, columnIndex) =>
      [...Array(board.length)].every(
        (_, rowIndex) => board[columnIndex][rowIndex] === Infinity
      )
    );
  return hasMarkedRow() || hasMarkedColumn();
};

const unmarkedNumberSum = (board: number[][]) => {
  return board.reduce(
    (acc, row) =>
      acc + row.reduce((acc, val) => acc + (val === Infinity ? 0 : val), 0),
    0
  );
};

const playRound = (numbers: number[], boards: number[][][]): number => {
  const markedBoards = boards.map((board) => markNumberOn(numbers[0], board));
  const winningBoard = markedBoards.find(hasBoardWon);
  return winningBoard
    ? unmarkedNumberSum(winningBoard) * numbers[0]
    : playRound(numbers.slice(1), markedBoards);
};

export const run = (numbers: number[], boards: number[][][]) =>
  playRound(numbers, boards);

console.log(run(numbers, boards));
