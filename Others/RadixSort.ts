function RadixSortHelper(num: number, i: number) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10 
}

function digitCount(num: number): number {
    if (num === 0) return 1
    return num >= 0 ? num.toString().length : num.toString().length - 1
}

function mostDigit(num: number[]):number {
    return num.reduce((curr, val) => Math.max(curr,digitCount(val)), 0)
}

function radixSort(num: number[]): number[] {
    let maxDigitCount = mostDigit(num);
    for (let i=0; i < maxDigitCount;i++) {
        let digitBucket:number[][] = Array.from({length: 10}, () => [])
        for (let j =0; j<num.length; j++) {
            let index = RadixSortHelper(num[j], i)
            digitBucket[index].push(num[j])
            console.log(index)
        }
        num = ([] as number[]).concat(...digitBucket)
        console.log(num)
    }
    return num
}
let arr = [23,345,5467,12,2345,9852]
radixSort(arr)