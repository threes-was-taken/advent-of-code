import * as fs from 'fs';
import * as path from 'path';

export function solveDay01(): void {
  console.log('-- Day 1: Trebuchet?! --');

  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

  const lines = input.split('\n');

  const answer = lines.reduce((acc, line) => {
    const numberFromLine = line
      .split('')
      .filter((char) => RegExp(/\d/).exec(char))
      .join('');

    const joinedNumber = +(numberFromLine[0] + numberFromLine[numberFromLine.length - 1]);

    return acc + joinedNumber;
  }, 0);

  console.log('Answer part 1:', answer);
}
