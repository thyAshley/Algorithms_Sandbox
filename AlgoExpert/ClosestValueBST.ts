class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findClosestVal(tree: TreeNode, target: number): number {
  let currentNode = tree;
  let closest = Infinity;
  while (currentNode) {
    if (target === currentNode.val) return currentNode.val;
    let differences = Math.abs(currentNode.val - target);
    if (differences < Math.abs(closest - target)) {
      console.log(currentNode.val);
      closest = currentNode.val;
    }
    if (target > currentNode.val) {
      if (currentNode.right) {
        currentNode = currentNode.right;
        continue;
      }
      break;
    }
    if (target < currentNode.val) {
      if (currentNode.left) {
        currentNode = currentNode.left;
        continue;
      }
      break;
    }
  }
  return closest;
}

let bst = new TreeNode(10);
bst.left = new TreeNode(5);
bst.left.left = new TreeNode(2);
bst.left.right = new TreeNode(5);
bst.left.left.left = new TreeNode(1);
bst.right = new TreeNode(15);
bst.right.left = new TreeNode(13);
bst.right.left.right = new TreeNode(14);
bst.right.right = new TreeNode(22);
console.log(findClosestVal(bst, 19));
