import { run } from '.';

describe('day 1', () => {
  it('should give expected answer', () => {
    expect(
      run(`
        1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000
    `)
    ).toEqual(24000);
  });
});
