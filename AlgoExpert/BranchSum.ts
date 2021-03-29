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

function branchSum(tree: TreeNode) {
    let result: number[] = [];
    function iteration(tree: TreeNode, sum: number = 0): void {
        if (!tree) {
            return;
        }
        sum += tree.val
        if (tree.left === null) {
           result.push(sum)
           return
        }
        iteration(tree.left!, sum)
        iteration(tree.right!, sum)
    }
    iteration(tree);
    console.log(result)
}

//        1
//    2      3
// 4    5   6   7
//8 9 10
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

branchSum(tree);
