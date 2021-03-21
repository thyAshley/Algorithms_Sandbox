function longestPalindrome(s: string) {
    let maxLength = 0;
    let result = '';
  
    for (let i = 0; i < s.length; i++) {
      let left = i;
      let right =  i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        if (maxLength < right - left + 1) {
          maxLength = right - left + 1;
          result = s.slice(left,right + 1)
        }
        
        left--;
        right++;
      }
  
      left = i;
      right = i+1;
      while( left >=0 && right < s.length && s[left] === s[right]) {
        if (right-left+1 > maxLength) {
          maxLength = right - left + 1
          result = s.slice(left,right + 1)
        }
        left--;
        right++;
      }
    }
    return result;
  }
  