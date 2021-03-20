function canSum(targetSum: number, numbers: number[]) {
    let hash: {[key:number]: number} = {};

    for (let num of numbers) {
        hash[num] = hash[num] + 1 || 1;
    }

    for (let key in hash) {
        let compliment = targetSum - +key;
        if (+key === compliment) {
            return hash[compliment] > 1 ? true : false
        }
        if (compliment in hash) {
            return true;
        }
    }
    return false;
}

function canSumDP(targetSum: number, numbers: number[], memo: {[key: number]:boolean} = {}) {
    if (targetSum === 0) return true;
    if (targetSum in memo) return memo[targetSum]

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (remainder < 0) {
            break;
        }
        if (canSumDP(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSumDP(300,[7,14]))