function fibonacci(n: number): number {
  if (n === 2 || n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci_DP(n: number): number {
  let value = 0;
  if (n === 1 || n === 2) return 1;
  for (let i = 2; i < n; i++) {
    value += i;
  }
  return value;
}

console.log(fibonacci_DP(71));
