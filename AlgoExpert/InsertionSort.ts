function swapFun(arr: number[], idx1: number, idx2: number) {
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}

function bubbleSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        swapFun(arr, j, j + 1);
      }
    }
    if (!swap) {
      break;
    }
  }
  console.log(arr);
}

bubbleSort([1, 2, 3]);
