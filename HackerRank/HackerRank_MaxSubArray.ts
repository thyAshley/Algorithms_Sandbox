// https://www.hackerrank.com/challenges/max-array-sum/problem

function maxSubarray(arr: number[]) {
    let table = [];
    table[0] = Math.max(arr[0], 0);
    table[1] = Math.max(arr[1], table[0]);
    let max = Math.max(table[0], table[1]);
    for (let i = 2; i < arr.length; i++) {
      table[i] = Math.max(table[i-1], arr[i] + table[i-2])
      max = Math.max(max, table[i])
    }
    return max
  }
  console.log(maxSubarray([-4,-2,3,5,-1,4]))