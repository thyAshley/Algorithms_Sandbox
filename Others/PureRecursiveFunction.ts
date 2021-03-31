function collectOdds(nums: number[]): any {
    let newArr: number[] = [];
    if (nums.length === 0) {
        return newArr
    }
    let value = nums.shift()!
    if (value % 2) {
        newArr.push(value)
    }
    return newArr.concat(collectOdds(nums))
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9,1231]))