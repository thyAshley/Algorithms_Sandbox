class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }

  insert(element: number) {
    this.values.push(element);
    this.bubbleUp();
  }

  getMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length === 0) return max;
    this.values[0] = end as number;
    this.bubbledown();
    return max;
  }

  bubbledown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let rightChild = this.values[right] ? this.values[right] : null;
      let leftChild = this.values[left] ? this.values[left] : null;
      let swap = null;
      if (leftChild) {
        if (leftChild > element) {
          swap = left;
        }
      }

      if (rightChild) {
        if (
          (rightChild > element && swap === null) ||
          (swap !== null && rightChild > leftChild!)
        ) {
          swap = right;
        }
      }

      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
      idx = swap;
      swap = null;
    }
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (true) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.values[parentIdx] < element) {
        [this.values[parentIdx], this.values[index]] = [
          this.values[index],
          this.values[parentIdx],
        ];
        index = parentIdx;
      } else {
        break;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(10);
heap.insert(5);
heap.insert(13);
heap.insert(44);
console.log(heap.values);
console.log(heap.getMax());
console.log(heap.values);
