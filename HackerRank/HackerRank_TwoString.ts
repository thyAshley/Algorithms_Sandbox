function RandomNote(s1: string, s2: string) {
  let string1hash: { [key: string]: number } = {};
  let arrS1 = s1.split("");
  let arrS2 = s2.split("");
  for (let word of arrS1) {
    string1hash[word] = string1hash[word] + 1 || 1;
  }
  for (let word of arrS2) {
    if (string1hash[word]) {
      return console.log("Yes");
    }
  }

  return console.log("No");
}

RandomNote("hello", "wzd");
