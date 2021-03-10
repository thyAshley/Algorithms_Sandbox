//https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function AlternatingCharacter(s: string) {
  let left = 0;
  let right = 1;
  let deleteCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[left] === s[right]) {
      deleteCount++;
    } else {
      left = right;
    }
    right++;
  }
  console.log(deleteCount);
}

AlternatingCharacter("AAABBB");
