function minswap(arr: number[]) {
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (current !== i+1) {
          [arr[current-1], arr[i]] = [arr[i], arr[current-1]]
          swap++;
          i--;
      console.log('swap')
      }
  }
  console.log(arr);
  console.log(swap)
}

minswap([2,3,4,1,5])