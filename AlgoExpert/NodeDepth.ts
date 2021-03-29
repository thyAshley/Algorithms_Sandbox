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

function NodeDepth(tree: TreeNode, target: number, depth: number = 0): number {
    if (tree === null) return 0;
    if (target === tree.val) return depth;
    depth += 1;
    let left = NodeDepth(tree.left, target, depth)
    let right = NodeDepth(tree.right, target, depth);
    
    return left || right
    
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.left.left.left = new TreeNode(8);
tree.left.left.right = new TreeNode(9);
tree.left.right.left = new TreeNode(10);

console.log(NodeDepth(tree,11))