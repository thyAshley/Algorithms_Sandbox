function waysToSum(target: number, k: number) {
    if (target === 0) return 1;
    if (target < 0) return 0;
  
    let count = 0;
  
    for (let i = k; i > 0; i--) {
      let remainder = target - i;
      let value = waysToSum(remainder, i);
      count+= value;
    }
    return count;
  }
  
  console.log(waysToSum(8,2))