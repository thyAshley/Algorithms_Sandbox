class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyNode = new ListNode(0, head);
  let left = dummyNode;
  let right = head;

  while (n > 0 && right) {
    right = right.next as ListNode;
    n -= 1;
  }
  while (right) {
    left = left.next as ListNode;
    right = right.next;
  }
  left.next = left.next!.next;
  
  return dummyNode.next
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next  = new ListNode(3);
list.next.next.next  = new ListNode(4);
list.next.next.next.next  = new ListNode(5);

removeNthFromEnd(list, 2);