class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // search, remove
  addNode(val) {
    let node = new ListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    let last = this.tail;
    last.next = node;
    this.tail = node;
    this.tail.previous = last;
  }

  search(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

let ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
console.log(ll.search(1));
