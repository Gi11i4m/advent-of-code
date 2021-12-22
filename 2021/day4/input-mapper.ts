export const getNumbersFrom = (input: string) =>
  input
    .split('\n')[0]
    .split(',')
    .map((num) => Number(num));

export const getBoardsFrom = (input: string) =>
  input
    .split('\n\n')
    .slice(1)
    .map((board) =>
      board
        .split('\n')
        .map((row) => row.split(/\s+/).map((rowVal) => Number(rowVal)))
    );
