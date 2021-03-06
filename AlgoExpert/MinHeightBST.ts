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

function MinHeightBST(arr: number[]) {
  let bst = new BinarySearchTree();
  function buildBST(arr: number[]) {
    if (arr.length === 1) return bst.add(arr[0]);
    if (arr.length === 0) return;
    let mid = Math.floor((arr.length - 1) / 2);
    bst.add(arr[mid]);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1);
    buildBST(left);
    buildBST(right);
  }
  buildBST(arr);
  return bst;
}

function InvertBST(bst: BinarySearchTree) {
  let queue: BSTNode[] = [bst.root];
  while (queue.length) {
    let node = queue.shift();
    if (node === null) continue;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    if (node.left || node.right) {
      [node.left, node.right] = [node.right, node.left];
    }
  }
}

let arr = [1, 2, 5, 7, 10, 13, 14, 15, 22];
const bst = MinHeightBST(arr);
InvertBST(bst);
