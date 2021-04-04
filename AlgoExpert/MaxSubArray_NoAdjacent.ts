function maxSubset(arr: number[]) {
  function dp(arr: number[]) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0] + dp(arr.slice(2)), dp(arr.slice(1)));
  }
  return dp(arr);
}

let arr = [7, 10, 12, 7, 9, 14];
console.log(maxSubset(arr));
