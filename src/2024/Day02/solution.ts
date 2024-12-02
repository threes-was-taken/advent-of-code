// Solution for Day 02
// Advent of Code 2024

function isSafeReport(report: number[]): boolean {
  const increasing = report.every((value, index, array) => {
    if (index === 0) return true;
    const diff = value - array[index - 1];
    return diff > 0 && diff <= 3;
  });

  const decreasing = report.every((value, index, array) => {
    if (index === 0) return true;
    const diff = array[index - 1] - value;
    return diff > 0 && diff <= 3;
  });

  return increasing || decreasing;
}

function isSafeWithDampener(report: number[]): boolean {
  for (let i = 0; i < report.length; i++) {
    const newReport = report.slice(0, i).concat(report.slice(i + 1));
    if (isSafeReport(newReport)) {
      return true;
    }
  }
  return false;
}

function part1(reports: Array<Array<number>>): number {
  return reports.reduce((prev, curr) => {
    let initial: number = prev;

    if (isSafeReport(curr)) {
      initial += 1;
    }

    return initial;
  }, 0);
}

function part2(reports: Array<Array<number>>): number {
  return reports.reduce((prev, curr) => {
    let initial: number = prev;

    if (isSafeReport(curr) || isSafeWithDampener(curr)) {
      initial += 1;
    }

    return initial;
  }, 0);
}

export function solveDay02(inputData: string): void {
  const reports = inputData.trim().split('\n');

  const reportList: Array<Array<number>> = [];

  for (const report of reports) {
    reportList.push(report.split(' ').map(Number));
  }

  console.log('Part 1: ', part1(reportList));
  console.log('Part 2: ', part2(reportList));
}
