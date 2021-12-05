import { run } from '.';

describe('day 2', () => {
  it('should give expected answer', () => {
    expect(
      run([
        ['forward', 5],
        ['down', 5],
        ['forward', 8],
        ['up', 3],
        ['down', 8],
        ['forward', 2],
      ])
    ).toEqual(150);
  });
});
