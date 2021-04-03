function Monotonic(arr: number[]) {
  let decreasing;
  let newSequence = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (newSequence && arr[i] !== arr[i + 1]) {
      newSequence = false;
      if (arr[i] < arr[i + 1]) {
        decreasing = false;
        continue;
      }
      decreasing = true;
    }
    if (decreasing && arr[i] < arr[i + 1]) {
      return false;
    }
    if (!decreasing && arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let arr = [1, 1, 3, -1];
console.log(Monotonic(arr));
