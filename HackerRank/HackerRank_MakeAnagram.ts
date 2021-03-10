// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=strings
function makeAnagram(a: string, b: string) {
  let firstHash: { [key: string]: number } = {};
  let secondHash: { [key: string]: number } = {};

  for (let char of a) {
    firstHash[char] = firstHash[char] + 1 || 1;
  }

  for (let char of b) {
    secondHash[char] = secondHash[char] + 1 || 1;
  }

  let similarity = 0;

  for (let key in firstHash) {
    if (secondHash[key] === firstHash[key]) {
      similarity += secondHash[key];
    } else if (secondHash[key] && firstHash[key]) {
      similarity += Math.min(secondHash[key], firstHash[key]);
    }
  }
  let difference = a.length + b.length - 2 * similarity;
  return difference;
}

makeAnagram("cde", "abc");
