function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    let result: string[] = [];
    const digitMap: {[key: string]: string[]} = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    if (digits.length === 1) return digitMap[digits];
    const firstDigit = digits.slice(0, 1);
    const otherCombination = letterCombinations(digits.slice(1));
    let letters = digitMap[firstDigit];
    letters.map((char) => {
      otherCombination.map(otherchar => {
        result.push(char + otherchar);
      })
    })
    return result
   
  };