function moveElementToEnd(arr: number[], target: number) {
  let rightpointer = arr.length - 1;
  let leftpointer = 0;
  while (leftpointer < rightpointer) {
    if (arr[rightpointer] === target) {
      rightpointer--;
    }
    if (arr[leftpointer] === target) {
      [arr[leftpointer], arr[rightpointer]] = [
        arr[rightpointer],
        arr[leftpointer],
      ];
      rightpointer--;
    }
    leftpointer++;
  }
  console.log(arr);
  return arr;
}

moveElementToEnd([2, 1, 2, 4, 2, 1, 4, 4, 2, 3, 4, 2], 2);
