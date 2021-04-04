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

function KadaneAlgo(arr: number[]) {
  let kadaneArr = Array.from({ length: arr.length }, () => 0);
  let max = -Infinity;
  kadaneArr[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let newSum = arr[i] + kadaneArr[i - 1];
    if (newSum >= arr[i]) {
      kadaneArr[i] = newSum;
    } else {
      kadaneArr[i] = arr[i];
    }
    max = Math.max(kadaneArr[i], max);
  }
  console.log(max);
}

KadaneAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
