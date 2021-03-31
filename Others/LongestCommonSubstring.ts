function LongestCommonSubsequence(str1: string, str2: string) {
  function helper(m: number, n: number) {
    if (m === 0 || n === 0) return 0;

    if (str1[m - 1] === str2[n - 1]) {
      return helper(m - 1, n - 1);
    }

    return Math.max(helper(m - 1, n), helper(m, n - 1));
  }

  let m = str1.length;
  let n = str2.length;

  return helper(m, n);
}
