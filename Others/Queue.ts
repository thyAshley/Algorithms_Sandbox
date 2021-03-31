class _Node {
  val: any;
  next: _Node | null;
  constructor(value: any) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  first: _Node | null;
  last: _Node | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: any) {
    const node = new _Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last!.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    const node = this.first;
    if (!node) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }
    this.size--;
    return node.val;
  }
}

const queue = new Queue();
queue.enqueue(123);
queue.enqueue(321);
queue.enqueue(3213);
console.log(queue.dequeue());
console.log(queue);
