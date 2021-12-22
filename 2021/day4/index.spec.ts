import { run } from '.';
import { numbers, boards } from './test-input';

describe('day 4', () => {
  it('should give expected answer', () => {
    expect(run(numbers, boards)).toEqual(4512);
  });
});
