function countUniqueNumber(arr: number[]): number {
    if (arr.length <= 1) return arr.length;
    let uniqueCount = 0;
    let currentVal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (currentVal !== arr[i] || i === 0) {
            currentVal = arr[i];
            uniqueCount++;
            continue;
        }
    }
    return uniqueCount
}

console.log(countUniqueNumber([-2, -2, -1, 0, 2]))