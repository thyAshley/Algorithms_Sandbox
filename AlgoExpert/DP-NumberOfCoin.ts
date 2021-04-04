function minCoins(arr: number[], target: number) {
  function dp(arr: number[], target: number, count: number) {
    if (!arr.length) return Infinity;
    if (target === 0) return count;
    if (target < 0) return Infinity;
    let remainder = target - arr[0];
    return Math.min(
      dp(arr, remainder, count + 1),
      dp(arr.slice(1), target, count)
    );
  }
  let result = dp(arr, target, 0);
  return result === Infinity ? -1 : result;
}

console.log(minCoins([1, 2, 5], 7));
