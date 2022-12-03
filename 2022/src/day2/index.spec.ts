import { run } from '.';

enum You {
  ROCK = 'X',
  PAPER = 'Y',
  SCISSORS = 'Z',
}

describe('day 2', () => {
  it('should give expected answer', () => {
    expect(
      run(`
      A Y
      B X
      C Z
    `)
    ).toEqual(15);
  });

  it('should index enum values', () => {
    expect(Object.values(You).indexOf(You.PAPER)).toBe(1);
  });

  it('should index enum keys', () => {
    expect(Object.keys(You).indexOf('SCISSORS')).toBe(2);
  });
});
