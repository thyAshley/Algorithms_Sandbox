// function isValidSudoku(board: string[][]): boolean {
//   let rowHash: {[key: string]: number}[] = [];
//   let colHash: {[key: string]: number}[] = [];
//   let boxHash: any = [];
//   for (let i = 0; i < board.length; i++) {
//     let boxVert = (((i+1) - ((i % 3)) / 3));
//     if (!boxHash[boxVert]) {
//         boxHash[boxVert] = {}
//     }
//     rowHash[i] = {}
//     for (let j = 0; j < board[i].length; j++) {
//       let boxHori = (((j+1) - ((j+1) % 3)) / 3)
//       // if (!boxHash[boxVert][boxHori]) {
//       //   boxHash[boxVert] = {}
//       // }
//       if (!colHash[j]) {
//         colHash[j] = {}
//       }
//       let target = board[i][j]
//       if (target === '.') continue;
//       rowHash[i][target] = rowHash[i][j] + 1 || 1
//       colHash[j][target] = colHash[j][target] + 1 || 1
//       if (rowHash[i][target] > 1 || colHash[j][target] > 1) {
//         return false;
//       }
//     }
//   }
//   console.log(boxHash)
//   return true;
// }

// let board = [["2","3","."],["1",".","."],["3",".","1"]]
// // let board = [["5","3",".",".","7",".",".",".","."]
// // ,["6",".",".","1","9","5",".",".","."]
// // ,[".","9","8",".",".",".",".","6","."]
// // ,["8",".",".",".","6",".",".",".","3"]
// // ,["4",".",".","8",".","3",".",".","1"]
// // ,["7",".",".",".","2",".",".",".","6"]
// // ,[".","6",".",".",".",".","2","8","."]
// // ,[".",".",".","4","1","9",".",".","5"]
// // ,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(board))

class TreeNode {
  val: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function BreathFirstSearch(tree: TreeNode) {
  let result: string[] = [];
  let stack: TreeNode[] = [tree];
  while (stack.length > 0) {
    let target = stack.shift();
    result.push(target.val);
    if (target.left) stack.push(target.left);
    if (target.right) stack.push(target.right);
  }
  console.log(result);
}

function DepthFirstSearch(tree: TreeNode) {
  let result: string[] = [];
  function recursiveDFS(tree: TreeNode) {
    if (tree === null) return;
    console.log("here");
    if (tree) {
      result.push(tree.val);
    }
    recursiveDFS(tree.left);
    recursiveDFS(tree.right);
  }
  recursiveDFS(tree);
  console.log(result);
}

let tree = new TreeNode("A");
tree.left = new TreeNode("B");
tree.right = new TreeNode("C");
tree.left.left = new TreeNode("D");
tree.left.right = new TreeNode("E");

tree.right.left = new TreeNode("F");
tree.right.right = new TreeNode("G");
tree.left.left.left = new TreeNode("H");
tree.left.left.right = new TreeNode("I");
tree.left.right.left = new TreeNode("J");
DepthFirstSearch(tree);
