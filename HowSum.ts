function howSum(targetSum: number, numbers: number[], memo: {[key: number]: any}={}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (remainder < 0) return null;
        const result = howSum(remainder, numbers, memo);
        if (result) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(200,[5,1,4,7]));

