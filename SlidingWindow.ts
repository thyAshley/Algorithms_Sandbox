function maxSubarraySum(arr: number[], num: number) {
    if (num > arr.length || num === 0) {
        return null;
    }

    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        tempSum += arr[i]
    }
    let maxSum = tempSum;

   for (let i = num; i<arr.length; i++) {
       tempSum = tempSum + arr[i] - arr[i-num];
       maxSum = Math.max(tempSum, maxSum)
   }
    return maxSum
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
console.log(maxSubarraySum([4,2,1,6],1))
console.log(maxSubarraySum([4,2,1,6,2],4))
console.log(maxSubarraySum([], 4))