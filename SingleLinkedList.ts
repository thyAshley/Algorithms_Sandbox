class _Node {
    val: any;
    next: _Node | null;
    constructor(value: any) {
        this.val = value;
        this.next = null;
    }
}

class SingleLinkedList {
    head: _Node | null;
    tail: _Node | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any): SingleLinkedList {
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

    shift(): SingleLinkedList | null {
        if (!this.head) return null;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return this;
    }

    unshift(val: any): SingleLinkedList {
        if (!this.head) {
            this.push(val);
            return this;
        }
        let node = new _Node(val);
        let currentHead = this.head;
        this.head = node;
        this.head.next = currentHead
        this.length++;

        return this;
    }

    pop(): SingleLinkedList {
        let current = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        while (current) {
            if (current.next == this.tail) {
                this.tail = current;
                current.next = null;
                this.length--;
                break;

            }
            current = current.next;

        }
        return this;
    }

    get(val: number): (_Node | null) {
        if (this.length < val || val < 0) return null;
        if (val === 1) return this.head!.next;
        if (val === 0) return this.head;
        let count = 0;
        let node = this.head;
        while (count !== val) {
            node = node!.next;
            count++;
        }
        return node;
    }

    set(val: any, index: number): SingleLinkedList | null {
        const node = this.get(index);
        if (!node) return null;
        node.val = val;
        return this;
    }
}
    

let list = new SingleLinkedList();
list.push("123");
list.push("1234");
list.push("1235");
list.push("bye");
console.log(list.set(1,5));