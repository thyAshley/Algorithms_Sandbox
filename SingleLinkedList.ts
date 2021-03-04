class _Node {
    val: any;
    next: _Node | null;
    constructor(value: any) {
        this.val = value;
        this.next = null;
    }
}

class SingleLinkedList{
    head: _Node | null;
    tail: _Node | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any) : SingleLinkedList {
        let node = new _Node(val);
        if (!this.tail) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        this.length += 1;
        return this;
    }
}

let list = new SingleLinkedList();
list.push("Hey");
list.push("There");
list.push("Test");
console.log(list.head);