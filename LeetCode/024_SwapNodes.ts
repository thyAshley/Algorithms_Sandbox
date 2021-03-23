
function swapPairs(head: ListNode | null): ListNode | null {
    let dummyNode = new ListNode(0, head);
    let current = head;
    let previous = dummyNode;
    while (current && current.next) {
      let nextValue = current.next;
      let nextPair = nextValue.next;
  
      nextValue.next = current;
      current.next = nextPair;
      previous.next = nextValue;
      previous = current;
      current = nextPair
    }
  
    return dummyNode.next
  };