function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2
      if (!l2) return l1
    
      let i = l1
      let j = l2;
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