import { run } from '.';

describe('day 5', () => {
  it('should give expected answer', () => {
    expect(
      run(`
    [D]    
[N] [C]    
[Z] [M] [P]
  1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
    `)
    ).toEqual('CMZ');
  });
});
