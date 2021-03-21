
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let overflow = 0;
     let result = []
   
     while (true && (l1 || l2)) {
       let l1value = 0;
       let l2value = 0;
       if (l1) {
         l1value = l1.val;
         l1 = l1.next;
       }
   
       if (l2) {
         l2value = l2.val;
         l2 = l2.next;
       }
       let sum = l1value + l2value + overflow;
       if (sum >= 10) {
         overflow = 1;
       } else {
         overflow = 0;
       }
   
       result.push((sum) % 10)
     }
     if (overflow === 1) {
       result = [...result, overflow]
     }
     let finalResult = new ListNode(result[0])
     let pointer = finalResult;
     for (let i = 1; i < result.length; i++) {
       pointer.next = new ListNode(result[i]);
       pointer = pointer.next
     }
     return finalResult
   };