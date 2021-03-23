function fourSum(nums: number[], target: number): number[][] {
    if (nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    console.log(nums)
    let result: number[][] = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && i !== 0) continue;
      for (let j = i + 1; j <= nums.length - 3; j++) {
        if (nums[j-1] === nums[j] && j > i + 1) continue;
        let left = j + 1;
        let right = nums.length - 1;
        while ( left < right ) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right]
          if (sum === target) {
            result.push([nums[i], nums[j],nums[left],nums[right]])
            left++;
            right--;
            while (nums[right] === nums[right+1]) right--;
            while (nums[left] === nums[left-1]) left++;
          }
          if (sum > target) {
            right--;
          } 
          if (sum < target) {
            left++;
          }
        }
      }
    }
    return result
  };
  
  fourSum([1,0,-1,0,-2,2],0);