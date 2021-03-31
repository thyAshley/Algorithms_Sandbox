class _Node {
  val: any;
  next: _Node | null;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  first: _Node | null;
  last: _Node | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: any) {
    const node = new _Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      const previousFirst = this.first;
      node.next = previousFirst;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;

    let firstNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }
    this.size--;
    return firstNode!.val;
  }
}

let stack = new Stack();
stack.push("230");
stack.push("234");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
