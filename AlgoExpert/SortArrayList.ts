function sortArr(arr1: number[], arr2: number[]) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  let arr1idx = 0;
  let arr2idx = 0;
  let result: number[] = [];

  while (arr1idx < arr1.length && arr2idx < arr2.length) {
    if (arr1[arr1idx] < arr2[arr2idx]) {
      result.push(arr1[arr1idx]);
      arr1idx++;
    } else {
      result.push(arr2[arr2idx]);
      arr2idx++;
    }
  }
  return result.concat(arr1.slice(arr1idx), arr2.slice(arr2idx));
}

console.log(sortArr([1, 4], [2, 3]));

let arr = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function sortList(arr: number[][]) {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result = sortArr(result, arr[i]);
  }
  console.log(result);
}

sortList(arr);
