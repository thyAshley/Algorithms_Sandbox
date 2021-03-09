function MinMaxSum(arr: number[]) {
  if (arr.length < 4) return null;
  let sorted = arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < 4; i++) {
    min += arr[i];
    max += arr[arr.length - 1 - i];
  }
  console.log(min, max);
  return;
}

MinMaxSum([1, 3, 5, 7, 9]);
