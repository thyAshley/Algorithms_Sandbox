// too slow for hackerrank

function FraudulentActivity(n: number[], d: number) {
  let total = 0;
  let alert = 0;
  let arr = [];
  let isOdd = d % 2 !== 0;
  for (let i = 0; i < d; i++) {
    total += n[i];
    arr.push(n[i]);
  }

  function GetMedian(arr: number[]) {
    if (isOdd) {
      let idx = Math.floor((arr.length - 1) / 2);
      console.log(arr);
      return arr[idx];
    } else {
      let idx = arr.length / 2;
      return (arr[idx] + arr[idx - 1]) / 2;
    }
  }
  for (let i = d; i < n.length; i++) {
    arr = MergeSort(arr);
    let median = GetMedian(arr);
    if (n[i] >= 2 * median) alert++;
    total = total + n[i] - n[i - d];
    arr.push(n[i]);
    arr.shift();
  }
  console.log(alert);
  return 1;
}

function MergeArray(arr1: number[], arr2: number[]) {
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  return [...arr, ...arr1.slice(i), ...arr2.slice(j)];
}

function MergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));
  return MergeArray(left, right);
}

FraudulentActivity([2, 3, 4, 2, 3, 6, 8, 4, 5], 4);
