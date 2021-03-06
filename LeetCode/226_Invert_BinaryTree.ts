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
