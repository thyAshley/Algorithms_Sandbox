function romanToInt(s: string): number {
  let hashmap: {[key: string]: number} = {
      'M': 1000,
      'D': 500,
      'C': 100,
      'L': 50,
      'X': 10,
      'V': 5,
      'I': 1,
  }
  
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (hashmap[s[i]] < hashmap[s[i+1]]) {
      answer -= hashmap[s[i]];
    } else {
      answer += hashmap[s[i]];
    }

  }
  return answer;
};

romanToInt('MCMXCIV');