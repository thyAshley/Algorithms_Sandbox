//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&h_r=next-challenge&h_r=next-challenge&h_v=zen&h_v=zen&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function SherlockAnagram(s: string) {
  let result = [];
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.slice(i, j).split("").sort().join("");
      result.push(substring);
    }
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) count++;
    }
  }
  return count;
}
SherlockAnagram("kkkk");
