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
