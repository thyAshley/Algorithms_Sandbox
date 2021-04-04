function maxSubArray(arr: number[]) {
  if (arr.length === 1) return arr[0];
  let hash = {};
  function dp(arr: number[], sum: number = 0) {
    let key = arr[0] + "#" + sum;
    if (key in hash) return hash[key];
    if (arr.length === 1) return sum + arr[0] > sum ? sum + arr[0] : 0;
    if (arr.length === 0) return sum + 0;
    hash[key] = Math.max(
      sum,
      dp(arr.slice(1), sum + arr[0]),
      dp(arr.slice(1), 0)
    );
    return hash[key];
  }
  console.log(dp(arr));
}

maxSubArray([-2, -1, 1, 5]);
