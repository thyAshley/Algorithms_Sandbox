function ThreeNumberSum(arr: number[], target: number) {
  arr.sort((a, b) => a - b);
  let result: number[][] = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    let newTarget = target - arr[i];
    while (left < right) {
      if (newTarget - arr[left] === arr[right]) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        continue;
      }
      if (newTarget - arr[left] < arr[right]) {
        right--;
        continue;
      }
      if (newTarget - arr[left] > arr[right]) {
        left++;
        continue;
      }
    }
  }
  console.log(result);
}

ThreeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
