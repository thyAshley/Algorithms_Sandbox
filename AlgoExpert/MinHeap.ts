class minHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
  peek() {
    return this.heap;
  }
  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(val: number) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(currentIdx: number) {
    if (currentIdx === 0) return;
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    if (this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx);
      this.bubbleUp(parentIdx);
    }
  }

  bubbleDown(idx: number) {
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let leftChild = this.heap[left];
      let rightChild = this.heap[right];
      let swap = null;
      if (leftChild) {
        if (leftChild < this.heap[idx]) {
          swap = left;
        }
      }
      if (rightChild) {
        if (
          (rightChild < this.heap[idx] && swap === null) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = right;
        }
      }
      if (!swap) break;
      this.swap(idx, swap);
      idx = swap;
      swap = null;
    }
  }
  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    this.swap(0, this.heap.length - 1);
    let removeValue = this.heap.pop();
    this.bubbleDown(0);
    return removeValue;
  }

  insertBulk(arr: number[]) {
    arr.forEach((el) => this.insert(el));
  }
}

let a = new minHeap();
a.insertBulk([23, 34, 45, 56, 78532422, 0, 2547]);
a.remove();
console.log(a.peek());
