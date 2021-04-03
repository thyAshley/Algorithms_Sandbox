function longestMountain(arr: number[]): number {
  const result: number[] = findPeaks(arr);
  let longestLength = 0;
  for (let idx of result) {
    let leftLength = 1;
    let rightLength = 1;
    let leftSide = idx - 1;
    let rightSide = idx + 1;
    while (leftSide > 0) {
      if (arr[leftSide] <= arr[leftSide - 1]) {
        break;
      }
      leftLength++;
      leftSide--;
    }
    while (rightSide < arr.length - 1) {
      if (arr[rightSide] <= arr[rightSide + 1]) {
        break;
      }
      rightLength++;
      rightSide++;
    }
    longestLength = Math.max(longestLength, 1 + leftLength + rightLength);
  }
  return longestLength;
}

function findPeaks(arr: number[]) {
  let result = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
      result.push(i);
      continue;
    }
  }
  return result;
}
