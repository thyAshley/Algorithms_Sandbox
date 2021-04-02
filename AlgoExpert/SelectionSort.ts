function SortHelper(arr: number[], idx1: number, idx2: number) {
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}

function selectionSort(arr: number[]) {
  let iteration = 0;
  while (true) {
    let swap = false;
    let min = arr[iteration];
    let idx = 0;
    for (let i = iteration + 1; i < arr.length; i++) {
      if (arr[i] < min) {
        swap = true;
        min = arr[i];
        idx = i;
      }
    }
    if (!swap) {
      console.log(arr);
      break;
    }
    SortHelper(arr, iteration, idx);
    iteration++;
  }
}

selectionSort([5, 4, 3, 2, 1]);
