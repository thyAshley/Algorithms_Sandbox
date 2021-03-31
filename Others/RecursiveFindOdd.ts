function collectOdds(nums: number[]) {
    let result: number[] = []
    function findOdds(nums: number[]) {
        if (nums.length === 0){
            return
        }
        let value = nums.shift()!
        if (value % 2 !== 0) {
            result.push(value)
        }
            findOdds(nums)
    }  
    findOdds(nums)
    return result
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9,1231]))