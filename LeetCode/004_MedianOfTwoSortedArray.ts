function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let sortedArr = sortArray(nums1, nums2);
  
    let length = sortedArr.length - 1;
    let left = Math.floor(length / 2);
    let right = Math.ceil(length / 2);
    if (length % 2) {
      return (sortedArr[left] + sortedArr[right]) / 2
    }
    return sortedArr[left]
  
  };
  
  function sortArray(arr1: number[], arr2: number[]) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    return [...result, ...arr1.slice(i), ...arr2.slice(j)]
  }
  
  console.log(findMedianSortedArrays([1,4], [2,3]))