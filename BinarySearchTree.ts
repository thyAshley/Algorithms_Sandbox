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

  find(value: any) {
    if (this.root === null) {
      return false;
    }
    let node = this.root;
    while (true) {
      if (value === node.val) {
        return true;
      }
      if (value < node.val) {
        if (node.left === null) {
          return false;
        }
        node = node.left;
      } else {
        if (node.right === null) {
          return false;
        }
        node = node.right;
      }
    }
  }

  insert(value: any) {
    const newNode = new _Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
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
    return this;
  }

  BFS() {
    const queue = [];
    const visited = [];
    let node = this.root;
    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift() as _Node;
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  DFS_FirstOrder() {
    const queue = [];
    const visited = [];
    let node = this.root;
    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift() as _Node;
      visited.push(node.val);
      if (node.right) queue.unshift(node.right);
      if (node.left) queue.unshift(node.left);
    }
    return visited;
  }

  DFS_FirstOder_Recurvsive() {
    const visited: number[] = [];
    let node = this.root;
    if (!node) return null;
    function traverse(node: _Node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return visited;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(20);
tree.insert(3);
tree.insert(8);
console.log(tree.BFS());
console.log(tree.DFS_FirstOrder());
console.log(tree.DFS_FirstOder_Recurvsive());
