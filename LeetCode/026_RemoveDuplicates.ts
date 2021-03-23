function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let pointer = 0;
    while (pointer < nums.length) {
      if (pointer === 0) {
        pointer++;
        continue;
      }
      if (nums[pointer] === nums[pointer - 1]) {
        nums.splice(pointer, 1)
        continue;
      }
        pointer++;
  
    }
    return nums.length;
  };
  removeDuplicates([0,0,1,1,1,2,2,3,3,4])