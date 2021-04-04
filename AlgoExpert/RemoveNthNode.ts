class Nodeclass {
  val: number;
  next: null | Nodeclass;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  root: Nodeclass | null;
  tail: Nodeclass | null;
  constructor() {
    this.root = null;
    this.tail = null;
  }
  insert(val: number) {
    let node = new Nodeclass(val);
    if (!this.root) {
      this.root = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
}

function FindNthNode(ll: LinkedList, remove: number) {
  let first = ll.root;
  let second = first;
  while (remove >= 0) {
    second = second.next;
    remove--;
  }
  while (second.next) {
    first = first.next;
    second = second.next;
  }
  first = first.next;
  first.next = first.next.next;
  console.log(ll);
}

let ll = new LinkedList();
ll.insert(0);
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.insert(6);
ll.insert(7);
ll.insert(8);
ll.insert(9);
console.log(ll);
FindNthNode(ll, 4);
