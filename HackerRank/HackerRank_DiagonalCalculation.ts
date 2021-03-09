// https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen
function DiagonalCalculation(arr: number[][]) {
  let leftToRight = 0;
  let rightToLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][arr.length - 1 - i];
  }
  return Math.abs(leftToRight - rightToLeft);
}

DiagonalCalculation([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
