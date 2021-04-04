class BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BSTNode | null;
  constructor() {
    this.root = null;
  }
  add(val: number) {
    const node = this.root;
    let newNode = new BSTNode(val);
    if (!node) {
      this.root = newNode;
      return;
    }
    function searchTree(node: BSTNode): any {
      if (newNode.val === node.val) {
        return;
      }
      if (newNode.val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return;
        }
        return searchTree(node.left);
      }
      if (newNode.val > node.val) {
        if (!node.right) {
          node.right = newNode;
          return;
        }
        return searchTree(node.right);
      }
      return null;
    }
    searchTree(node);
  }
}

function InvertBST(bst: BinarySearchTree) {
  let queue: BSTNode[] = [bst.root];
  while (queue.length) {
    let node = queue.shift();
    if (node === null) continue;
    if (node.left || node.right) {
      [node.left, node.right] = [node.right, node.left];
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  console.log(bst);
}

let invertbst = new BinarySearchTree();
invertbst.root = new BSTNode(1);
invertbst.root.left = new BSTNode(2);
invertbst.root.right = new BSTNode(3);
invertbst.root.left.left = new BSTNode(4);
invertbst.root.left.right = new BSTNode(5);
invertbst.root.right.left = new BSTNode(6);
invertbst.root.right.right = new BSTNode(7);
invertbst.root.left.left.left = new BSTNode(8);
invertbst.root.left.left.right = new BSTNode(9);
InvertBST(invertbst);
