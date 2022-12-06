import { run } from '.';

describe('day 6', () => {
  it('should find marker in mjqjpqmgbljsphdztnvjfqwrcgsmlb', () =>
    expect(run(`mjqjpqmgbljsphdztnvjfqwrcgsmlb`)).toEqual(7));

  it('should find marker in bvwbjplbgvbhsrlpgdmjqwftvncz', () =>
    expect(run(`bvwbjplbgvbhsrlpgdmjqwftvncz`)).toEqual(5));

  it('should find marker in nppdvjthqldpwncqszvftbrmjlhg', () =>
    expect(run(`nppdvjthqldpwncqszvftbrmjlhg`)).toEqual(6));

  it('should find marker in nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', () =>
    expect(run(`nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`)).toEqual(10));

  it('should find marker in zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', () =>
    expect(run(`zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`)).toEqual(11));
});
