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

function BSThelper(tree: TreeNode, target: number, closest = Infinity): number {
  if (!tree) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.val)) {
    closest = tree.val;
  }
  if (target < tree.val) {
    return BSThelper(tree.left!, target, closest);
  }
  if (target > tree.val) {
    return BSThelper(tree.right!, target, closest);
  }
  return tree.val === target ? tree.val : closest;
}

function findClosestVal(tree: TreeNode, target: number): number {
  return BSThelper(tree, target);
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
console.log(findClosestVal(bst, 1));
