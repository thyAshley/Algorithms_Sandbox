function twoSum(nums: number[], target: number): number[] {
    let hash: {[key: number]: number} = {};
    
    for (let i = 0; i < nums.length; i++){
      if (hash[nums[i]] >= 0) {
        return [hash[nums[i]], i]
      }
      hash[target - nums[i]] = i
    }
    return []
};
