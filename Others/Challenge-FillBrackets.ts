function balanceBracket(str: string) {
    let stack = [];
    let ways = 0;
    for (let char of str) {
      if (char === '[' || char === '(' || char === '{') {
        stack.push(char);
        continue;
      }
      if (char === '}') {
        if (stack[stack.length-1] === '{') {
          stack.pop();
          continue;
        }
        return 'NO';
      }
      if (char === ']') {
        if (stack[stack.length-1] === '[') {
          stack.pop();
          continue;
       }
       return 'NO';
      }
  
      if (char === ')'){
        if (stack[stack.length-1] === '(') {
          stack.pop();
          continue;
       }
       return 'NO';
      }
      
      if (char === '?') {
        stack.pop();
      }
  
    }
    console.log(ways)
    return stack.length === 0 ? 'YES' : 'NO';
  }
  
  console.log(balanceBracket('(?{}))[{}]'))