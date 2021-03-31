function BinarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  if (target > arr[right] || target < arr[left]) return -1;
  function BSHelper(
    arr: number[],
    target: number,
    left: number,
    right: number
  ) {
    console.log(arr, target, left, right);
    if (left > right) {
      return -1;
    }

    if (arr[left] === target) return left;
    if (arr[right] === target) return right;
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      return BSHelper(arr, target, mid + 1, right);
    }
    if (arr[mid] > target) {
      return BSHelper(arr, target, left, mid - 1);
    }
  }
  console.log("bst recursive", BSHelper(arr, target, left, right));
  return arr[left] === target ? left : -1;
}

console.log(BinarySearch([0, 1, 4, 8, 9, 121], 124));
