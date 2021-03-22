function maxArea(height: number[]): number {
    let largestArea = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
      largestArea = Math.max(largestArea, Math.min(height[left], height[right]) * (right - left));
      if (height[left] > height[right]) {
        right--;
      } else {
        left++;
      }
    }
      return largestArea
  };