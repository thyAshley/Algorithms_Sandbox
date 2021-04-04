function minDistance(word1: string, word2: string): number {
  let hash = {};
  function levenshteinDistance(
    str1: string,
    str2: string,
    m = str1.length,
    n = str2.length
  ) {
    let key = m + "#" + n;
    if (key in hash) return hash[key];
    if (m === 0) return n;
    if (n === 0) return m;

    if (str1[m - 1] === str2[n - 1]) {
      return levenshteinDistance(str1, str2, m - 1, n - 1);
    }

    hash[key] =
      1 +
      Math.min(
        levenshteinDistance(str1, str2, m, n - 1), //insert
        levenshteinDistance(str1, str2, m - 1, n - 1), //replace
        levenshteinDistance(str1, str2, m - 1, n)
      ); //remove
    return hash[key];
  }
  return levenshteinDistance(word1, word2);
}
