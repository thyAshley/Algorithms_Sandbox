function swap(value1: number, value2: number) {
    return [value2, value1]
  }
  
  function minSwap(arr: number[]) {
    let swapCount = 0;
    for (let i = 0; i < arr.length; i++) {
      let max = arr[i];
      let maxIdx = i;
  
      // iterate to find largest
      for (let j = maxIdx + 1; j < arr.length; j++) {
        if (max < arr[j]) {
          max = arr[j];
          maxIdx = j
        }
      }
  
      if (max !== arr[i]) {
        swapCount++;
        [arr[maxIdx], arr[i]] = swap(max, arr[i])
      }
  
    }
    console.log(swapCount)
  }
  
  minSwap([4,3,1,2,4])