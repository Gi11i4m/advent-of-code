import { run } from '.';

describe('day 4.2', () => {
  it('should give expected answer', () => {
    expect(
      run(`
      2-4,6-8
      2-3,4-5
      5-7,7-9
      2-8,3-7
      6-6,4-6
      2-6,4-8
    `)
    ).toEqual(4);
  });
});
