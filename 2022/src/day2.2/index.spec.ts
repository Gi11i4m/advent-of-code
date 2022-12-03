import { run } from '.';

describe('day 2.2', () => {
  it('should give expected answer', () => {
    expect(
      run(`
      A Y
      B X
      C Z
    `)
    ).toEqual(12);
  });
});
