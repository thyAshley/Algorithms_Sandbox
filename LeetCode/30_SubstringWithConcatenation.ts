function findSubstring(s: string, words: string[]) {
    let hash: {[key:string]: number} = {}
    for (let word of words) {
      hash[word] = hash[word] + 1 || 1;
      hash['sum'] = hash['sum'] + 1 || 1;
    }
    let maxLength = words[0].length
    let hashCopy = {...hash}
    let result = []
    let index = -1;
    let pointer = 0;
  
    if (s.length === 1 && words.length === 1 && s[0] === words[0]) {
      return [0]
    }
  
    while (pointer <= s.length + words.length - 1) {
      if (hashCopy['sum'] === 0) {
        result.push(index)
        hashCopy = {...hash}
        pointer = index + 1
        index = -1;
        continue;
      }
      let substring = s.slice(pointer, pointer + maxLength);
      console.log(substring)
      if (hashCopy[substring]) {
        if (index === -1) {
          index = pointer;
        }
        hashCopy[substring]--;
        hashCopy['sum']--;
        pointer += maxLength;
        continue;
      } else {
        if (index !== -1) {
          pointer = index;
          index = -1;
          hashCopy = {...hash}
        }
      }
      pointer++;
    }
    return result;
  };
  
  console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]))
  console.log(findSubstring('a', ["a"]))
  