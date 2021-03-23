function isValid(s: string): boolean {
    let hashmap: {[key: string]: string} = {
      '(': ')',
      '{': '}',
      '[': ']'
    }
    let stack: string[] = [];
    let keys = Object.keys(hashmap);
    for (let i = 0; i < s.length; i++) {
      if (keys.includes(s[i])) {
        stack.push(hashmap[s[i]]);
      } else {
         if (stack[stack.length - 1] === s[i]) {
           stack.pop();
         } else {
           return false;
         }
      }
    }
    return stack.length === 0;
  };
  
  console.log(isValid('{()'))