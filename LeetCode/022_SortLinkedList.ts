class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeLinkList(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2
  if (!list2) return list1

  let i = list1;
  let j = list2;
  let newList = new ListNode(0);
  let pointer = newList;
  
  while (i && j) {
    if (i.val < j.val) {
      newList.next = i;
      i = i.next!;
      newList = newList.next;
    } else {
      newList.next = j;
      j = j.next!;
      newList = newList.next;
    }
  }
  if (i) newList.next = i;
  if (j) newList.next = j;
  return pointer.next;
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0];
  let mid = Math.floor(lists.length / 2);
  let start = mergeKLists(lists.slice(0, mid));
  let end = mergeKLists(lists.slice(mid));

  return mergeLinkList(start,end)
}

const list1 = new ListNode(1)
list1.next = new ListNode(4)
list1.next.next = new ListNode(5)

const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

const list3 = new ListNode(2)
list3.next = new ListNode(4)
console.log(mergeKLists([list1, list2, list3]))