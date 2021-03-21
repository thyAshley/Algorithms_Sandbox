function idealNumber(low: number, high: number) {
    let count = 0;
  
    for (let i = low; i <= high; i++) {
      let value = i;
      while (value % 3 === 0) {
        value = value / 3
      }
      
      while (value % 5 === 0) {
        value = value / 5
      }
      if (value === 1) {
        console.log(i)
        count++;
      }
    }
    return count;
  }
  
  
  
  idealNumber(1,50);