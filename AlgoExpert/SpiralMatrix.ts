function spiralTraverse(arr: number[][]) {
  let result: number[] = [];
  Traverse(arr, 0, arr[0].length - 1, 0, arr.length - 1, result);
}

function Traverse(
  arr: number[][],
  startCol: number,
  endCol: number,
  startRow: number,
  endRow: number,
  result: number[]
) {
  console.log(result);
  if (startCol > endCol || startRow > endRow) {
    return result;
  }
  for (let i = startCol; i < endCol + 1; i++) {
    result.push(arr[startRow][i]);
  }
  for (let j = startRow + 1; j < endRow + 1; j++) {
    result.push(arr[j][endCol]);
  }
  for (let k = endCol - 1; startCol < k; k--) {
    result.push(arr[endRow][k]);
  }

  for (let l = endRow; startRow + 1 <= l; l--) {
    result.push(arr[l][startCol]);
  }
  result = Traverse(
    arr,
    startCol + 1,
    endCol - 1,
    startRow + 1,
    endRow - 1,
    result
  );
  return result;
}

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12

// 1 2 3 4 8 12 11 10 9 5 6

// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

// spiralTraverse(arr)
