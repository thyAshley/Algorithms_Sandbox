function isMatch(s: string, p: string): boolean {
    let memo: {[key]: boolean} = {}
    
     function dp(i: number, j: number) {
         if (memo[j]) return memo[j]
          if (j >= p.length) {
            return i === s.length;
          }

          let match = (p[j] === '.' || p[j] === s[i]) && i < s.length;

          if (j + 1 < p.length && p[j+1] === '*') {
            return (match && dp(i+1, j)) || dp(i,j+2)
          } else{
            return match && dp(i+1,j+1);
          }

        }

        return dp(0,0);
};