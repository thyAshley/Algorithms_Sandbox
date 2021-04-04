class Node {}

class maxStack {
  stack: number[];
  constructor() {
    this.stack = [];
  }
  add(val: number) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      return;
    }
    let i = 0;
    while (this.stack[i]) {
      if (this.stack[i] < val) {
        this.stack = [...this.stack.slice(0, i), val, ...this.stack.slice(i)];
        return;
      }
      i++;
    }
    this.stack.push(val);
  }
  getMax() {
    let max = this.stack[0];
    if (max) {
      this.stack = this.stack.slice(1);
    }
    return max;
  }
}

let stack = new maxStack();
stack.add(10);
stack.add(3);
stack.add(15);
stack.add(10);
stack.add(5);
console.log(stack.getMax());
console.log(stack);
