function MergeArray(arr1: number[], arr2: number[]) {
  let i = 0;
  let j = 0;
  let mergedarr: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedarr.push(arr1[i]);
      i++;
    } else {
      mergedarr.push(arr2[j]);
      j++;
    }
  }
  return mergedarr.concat(arr1.slice(i), arr2.slice(j));
}

function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));
  return MergeArray(left, right);
}

console.log(MergeSort([1, 2, 3, 4]));

function birthdayCakeCandles(candles: number[]) {
  let sortedCandles = MergeSort(candles);
  let count = 1;
  for (let i = 1; i < sortedCandles.length; i++) {
    if (sortedCandles[i] === sortedCandles[0]) {
      count++;
      continue;
    }
    break;
  }
  console.log(count);
}

birthdayCakeCandles([4, 4, 1, 3]);
