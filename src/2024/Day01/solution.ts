// Solution for Day 01
// Advent of Code 2024

function part1(leftList: Array<number>, rightList: Array<number>): number {
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  return leftList.reduce((totalDistance, left, i) => totalDistance + Math.abs(left - rightList[i]), 0);
}

function part2(leftList: Array<number>, rightList: Array<number>): number {
  const rightCountMap = rightList.reduce(
    (countMap, num) => {
      countMap[num] = (countMap[num] || 0) + 1;
      return countMap;
    },
    {} as Record<number, number>
  );

  return leftList.reduce((totalScore, num) => totalScore + num * (rightCountMap[num] || 0), 0);
}

export function solveDay01(inputData: string): void {
  const pairs = inputData
    .trim()
    .split('\n')
    .map((line) => line.split(/\s+/).map(Number));

  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const [left, right] of pairs) {
    leftList.push(left);
    rightList.push(right);
  }

  console.log('Part 1: ', part1(leftList, rightList));
  console.log('Part 2: ', part2(leftList, rightList));
}
