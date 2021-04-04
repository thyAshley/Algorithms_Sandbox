function SingleCycleCheck(arr: number[]) {
  let elementVisited = 0;
  let currentIdx = 0;
  while (elementVisited < arr.length) {
    if (elementVisited > 0 && currentIdx === 0) {
      return false;
    }
    elementVisited++;
    currentIdx = getNextIdx(currentIdx, arr);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx: number, arr: number[]) {
  let move = currentIdx + arr[currentIdx];
  if (move > arr.length) move = move % arr.length;
  while (move < 0) {
    move = move + arr.length;
  }
  return move;
}
console.log(SingleCycleCheck([2, -1, 1, 2, 2]));
