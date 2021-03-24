function removeElement(nums: number[], val: number): number {
    let pointer = 0;
    while (pointer < nums.length){
      if (nums[pointer] === val) {
        nums.splice(pointer,1);
      } else {
        pointer++;
      }
    }
    return nums.length
  };
  
  removeElement([3,2,2,3], 3)