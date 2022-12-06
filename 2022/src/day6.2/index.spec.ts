import { run } from '.';

describe('day 6.2', () => {
  it('should find SoM in mjqjpqmgbljsphdztnvjfqwrcgsmlb', () =>
    expect(run(`mjqjpqmgbljsphdztnvjfqwrcgsmlb`)).toEqual(19));

  it('should find SoM in bvwbjplbgvbhsrlpgdmjqwftvncz', () =>
    expect(run(`bvwbjplbgvbhsrlpgdmjqwftvncz`)).toEqual(23));

  it('should find SoM in nppdvjthqldpwncqszvftbrmjlhg', () =>
    expect(run(`nppdvjthqldpwncqszvftbrmjlhg`)).toEqual(23));

  it('should find SoM in nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', () =>
    expect(run(`nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`)).toEqual(29));

  it('should find SoM in zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', () =>
    expect(run(`zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`)).toEqual(26));
});
