function searchInsert(nums: number[], target: number): number {
  let count = 0;
  while (nums.length >= 1) {
    let mid = Math.floor(nums.length/2);
    if (target === mid) {
      count = mid;
      break;
    }
    if (target > mid) {
      nums = nums.slice(mid + 1);
    } 
    if (target < mid) {
      nums = nums.slice
    }
  }
};

searchInsert([1,3,5,6], 5)