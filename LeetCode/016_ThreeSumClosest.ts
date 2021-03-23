function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a,b) => a - b);
    let closest = -Infinity;
    let difference = Infinity;
    for (let i = 0; i < nums.length; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      let initial = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (left >= right) break;
        let sum = initial + nums[left] + nums [right];
        if (sum < target) {
          left++;
        } else {
          right--;
        }
        if (difference > Math.abs(sum - target)) {
          difference = Math.abs(sum - target);
          closest = sum;
        }
      }
    }
    return closest
  };
  
  threeSumClosest([1,1,1,0], 100)