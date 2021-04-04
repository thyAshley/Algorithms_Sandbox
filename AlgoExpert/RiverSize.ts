function RiverSize(grid: number[][]) {
  let rivercount = 0;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      if (grid[rowIndex][colIndex] === 1) {
        rivercount++;
      }
      terraform(rowIndex, colIndex, grid);
    }
  }
  return rivercount;
}

function terraform(rowIdx: number, colIdx: number, grid: number[][]) {
  if (!grid[rowIdx]) return;
  if (!grid[rowIdx][colIdx]) return;

  grid[rowIdx][colIdx] = 0;
  terraform(rowIdx + 1, colIdx, grid);
  terraform(rowIdx, colIdx + 1, grid);
}

// 1 0 0 1 0
// 1 0 1 0 0
// 0 0 1 0 1
// 1 0 1 0 1
// 1 0 1 1 0

let arr = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
console.log(RiverSize(arr));
