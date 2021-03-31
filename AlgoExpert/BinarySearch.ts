// log(n)
function BinarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  if (target > arr[right] || target < arr[left]) return -1;
  while (left <= right) {
    if (arr[left] === target) return left;
    if (arr[right] === target) return right;
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
      continue;
    }
    if (arr[mid] > target) {
      right = mid - 1;
      continue;
    }
  }
  return arr[left] === target ? left : -1;
}

console.log(BinarySearch([0, 1], 0));
