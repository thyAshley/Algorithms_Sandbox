function sumZero(arr: number[]) {
    if (arr.length === 0 || 1) return undefined
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while (leftPointer !== rightPointer) {
        let sum = arr[leftPointer] + arr[rightPointer] ;
        if (sum === 0) {
            return [arr[leftPointer], arr[rightPointer]]
        } else if (sum > 0) {
            rightPointer--;
        } else {
            leftPointer++
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,2,3,5,6,8]));