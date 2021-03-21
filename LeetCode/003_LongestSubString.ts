function lengthOfLongestSubstring(s: string) {
    let charset = new Set();
    let maxlength = 0;
    let left = 0;
    let right= 0;
    while (right < s.length) {
      if (charset.has(s[right])){
        charset.delete(s[left]);
        left++;
      } else {
        charset.add(s[right]);
        right++;
        maxlength = Math.max(maxlength, charset.size);
      }
    }
    return maxlength
};

lengthOfLongestSubstring('abcabddab');
