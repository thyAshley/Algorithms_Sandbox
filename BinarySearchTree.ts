class _Node {
  val: any;
  left: _Node | null;
  right: _Node | null;
  constructor(value: any) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: _Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: any) {
    const newNode = new _Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let node = this.root;
      while (true) {
        if (value === node.val) {
          break;
        }
        if (value < node.val) {
          if (node.left === null) {
            node.left = newNode;
            break;
          }
          node = node.left;
        } else {
          if (node.right === null) {
            node.right = newNode;
            break;
          }
          node = node.right;
        }
      }
    }
    return this;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(10);
tree.insert(10);
console.log(tree);
