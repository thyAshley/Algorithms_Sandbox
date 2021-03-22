function maxArea(height: number[]): number {
    let largestArea = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while(left !== right){
      let area = Math.min(height[left], height[right]) * (right - left);
      largestArea = Math.max(largestArea, area)
      if (height[left] > height[right]) {
        right--;
      } else {
        left++;
      }
    }
      return largestArea
  };