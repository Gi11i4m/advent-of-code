import { run } from '.';

describe('day 1.2', () => {
  it('should give expected answer', () => {
    expect(run([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toEqual(5);
  });
});
