function longestPalidrome(s: string) {
  let maxLength = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentLength = right - left + 1;
      if (maxLength < currentLength) {
        maxLength = currentLength;
        result = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentLength = right - left + 1;
      if (maxLength < currentLength) {
        maxLength = currentLength;
        result = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }
  return result;
}

longestPalidrome("dabbadad");
