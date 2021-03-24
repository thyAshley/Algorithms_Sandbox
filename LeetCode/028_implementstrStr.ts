function strStr(haystack: string, needle: string): number {
    if (haystack.length < needle.length) return -1;
    if (needle.length === 0) return 0
    let pointer = 0;
    let needlePointer = 0;
    let idx = -1;
  
    while (pointer < haystack.length) {
      if (needlePointer === needle.length) return idx;
      
      if (haystack[pointer] === needle[needlePointer]) {
        if (idx === -1) {
          idx = pointer;
        }
        needlePointer++;
        pointer++;
        continue;
      } else {
        if (idx !== -1) {
          pointer = idx
        }
        idx = -1;
        needlePointer = 0;
        pointer++;
      }
    }
    return (needlePointer === needle.length) ? idx : -1
  }
  console.log(strStr('mississippi', 'isippi'))