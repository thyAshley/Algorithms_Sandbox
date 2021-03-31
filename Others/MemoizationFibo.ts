function fibo(n: number, memo: number[] = []): number {
  if (memo[n]) {
    return memo[n];
  }
  if (n === 1 || n === 0) return 1;

  let result = fibo(n - 1, memo) + fibo(n - 2, memo);
  memo[n] = result;
  return memo[n];
}

console.log(fibo(5));
