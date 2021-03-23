function generateParenthesis(n: number): string[] {
    let result: string[] = [];
    let stack: string[] = [];
    function backtracking(open: number = 0, close: number = 0) {
      if (open === close && close === n) {
        result.push(stack.join(''));
      }
      if(open < n) {
        stack.push('(');
        backtracking(open + 1, close);
        stack.pop();
      }
  
      if (close < open) {
        stack.push(')');
        backtracking(open, close + 1);
        stack.pop();
      }
      
    }
    backtracking();
    console.log(result);
  };
  
  generateParenthesis(2);