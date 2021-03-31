class PriorityQueue {
  values: _Node[];

  constructor() {
    this.values = [];
  }

  enqueue(val: any, priority: number) {
    let newNode = new _Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.bubbleDown();
    }
    return this;
  }

  private bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild: _Node, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild.priority > element.priority && swap === null) ||
          (swap !== null && rightChild.priority > leftChild!.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class _Node {
  val: any;
  priority: number;
  constructor(val: any, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

const queue = new PriorityQueue();

queue.enqueue("hey", 1);
queue.enqueue("there", 4);
queue.enqueue("bye", 2);
queue.enqueue("bye", 10);
console.log(queue.values);
console.log(queue.dequeue());
console.log(queue.dequeue());
