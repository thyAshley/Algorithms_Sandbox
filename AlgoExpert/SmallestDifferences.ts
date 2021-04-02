function smallestDifferences(arr1: number[], arr2: number[]) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let min = Infinity;
  let result: number[] = [];

  let firstArrPointer = 0;
  let secondArrPointer = 0;
  let idx1 = 0;
  let idx2 = 0;

  while (
    firstArrPointer < arr1.length - 1 ||
    secondArrPointer < arr2.length - 10
  ) {
    if (Math.abs(arr1[firstArrPointer] - arr2[secondArrPointer]) <= min) {
      min = Math.abs(arr1[firstArrPointer] - arr2[secondArrPointer]);
      idx1 = firstArrPointer;
      idx2 = secondArrPointer;
      if (min === 0) break;
    }
    if (arr1[firstArrPointer] < arr2[secondArrPointer]) {
      firstArrPointer++;
    } else {
      secondArrPointer++;
    }
  }
  result.push(arr1[idx1], arr2[idx2]);

  return result;
}

console.log(smallestDifferences([1, 2, 3, 4], [2, 3, 4, 5]));
