function longestValidParentheses(s: string): number {
    let table: number[] = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        table[i] = 0;
        continue;
      }
      if (s[i] === ')') {
        if (s[i-1] === '(') {
          table[i] = (table[i-2] ? table[i-2] : 0) + 2
          max = Math.max(max, table[i])
          continue;
        }
        if (s[i] === ')') {
          if (s[i - 1 - table[i-1]] === '(') {
            table[i] = table[i-1] + 2 + (table[i-table[i-1]-2] ? table[i-table[i-1]-2] : 0)
            max = Math.max(max, table[i])
          } else {
            table[i] = 0
          }
        }
      }
    }
    return max
};

function stacklongestValidParentheses(s: string): number {
  let table: number[] = [-1];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          table.push(i);
          continue;
      }
      table.pop();
      if (table.length === 0) {
        table.push(i)
      } else {
        max = Math.max(max,i - table[table.length - 1])
      }
  }
  return max
};