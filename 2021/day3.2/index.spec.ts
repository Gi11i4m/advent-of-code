import { run } from '.';

describe('day 3.2', () => {
  it('should give expected answer', () => {
    expect(
      run([
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
      ])
    ).toEqual(230);
  });
});
