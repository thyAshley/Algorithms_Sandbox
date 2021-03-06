class _Node {
  val: any;
  next: _Node | null;
  previous: _Node | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

class DoubleLinkedList {
  head: _Node | null;
  tail: _Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop(): DoubleLinkedList {
    if (this.length === 0) return this;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length--;
      return this;
    }
    this.tail = this.tail!.previous;
    this.tail!.next = null;
    this.length--;
    return this;
  }

  push(val: any): DoubleLinkedList {
    const newNode = new _Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift(): DoubleLinkedList {
    if (!this.head) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let oldHead = this.head;
      this.head = this.head.next;
      this.head!.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return this;
  }

  get(index: number): _Node | null {
    if (index >= this.length || !this.head || index < 0) return null;
    let node: _Node;
    if (index < this.length / 2) {
      node = this.head!;

      for (let i = 0; i < index; i++) {
        node = node!.next!;
      }
    } else {
      node = this.tail!;
      for (let i = this.length - 1; i > index; i--) {
        node = node!.previous!;
      }
    }
    return node!;
  }

  insert(index: number, val: number) {
    if (index === 0 && index <= this.length) {
      this.unshift(val);
    }
    if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new _Node(val);
      let node = this.get(index - 1);
      if (node) {
        const nextNode = node.next;
        newNode.next = nextNode;
        newNode.previous = node;
        nextNode!.previous = newNode;
        node.next = newNode;
      }
    }
    this.length++;
    return this;
  }

  set(index: number, val: number) {
    let node = this.get(index);
    if (node) {
      node.val = val;
    }
    return this;
  }

  unshift(val: number): DoubleLinkedList {
    let newNode = new _Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  static print(dlist: _Node | DoubleLinkedList | null) {
    console.log(JSON.parse(JSON.stringify(dlist, getCircularReplacer())));
  }
}

const dlist = new DoubleLinkedList();
dlist.push(2);
dlist.push(4);
dlist.insert(0, 100);
dlist.insert(6, 1003);
DoubleLinkedList.print(dlist);
DoubleLinkedList.print(dlist.head);
