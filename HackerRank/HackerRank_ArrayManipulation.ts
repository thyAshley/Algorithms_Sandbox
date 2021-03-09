//https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function ArrayManipulation(n: number, queries: number[][]) {
  let max = -Infinity;
  let arr = Array.from({ length: n }, () => 0);
  queries.forEach((query) => {
    let start = query[0];
    let end = query[1];
    let value = query[2];
    for (let i = start - 1; i < end; i++) {
      arr[i] += value;
      max = Math.max(arr[i], max);
    }
  });
  return max;
}

ArrayManipulation(10, [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
]);
