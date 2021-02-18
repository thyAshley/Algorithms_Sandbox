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

let value = 124
console.log(mostDigit([543]))
console.log(mostDigit([1234,56,7]))
console.log(mostDigit([12,34,56,78]))