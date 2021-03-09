// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen

function maximumToys(prices: number[], k: number) {
  let sorted = MergeSort(prices);
  console.log(sorted);
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (k > sorted[i]) {
      k -= sorted[i];
      count++;
    } else {
      break;
    }
  }
  console.log(count);
  return count;
}

function MergeArray(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}

function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));
  return MergeArray(left, right);
}

console.log(MergeSort([1, 6, 42, 34, 42, 4, 1, 54]));
