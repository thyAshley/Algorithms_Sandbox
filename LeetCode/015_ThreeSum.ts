function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    nums.sort((a,b) => a - b);
  
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      let target = nums[i];
      while (left < right) {
        let sum = target + nums[left] + nums[right]
        if (sum === 0) {
          
          result.push([target, nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        }
  
        if (sum > 0) {
          right--;
        }
  
        if (sum < 0) {
          left++;
        }
      }
    }
    console.log(result)
    return result;
  };
  
  threeSum([-1,0,1,2,-1,5])