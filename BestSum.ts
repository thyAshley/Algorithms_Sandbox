function bestSum(targetSum: number, numbers: number[], memo: {[key: number]: number[]} = {}) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (memo[targetSum]) return memo[targetSum];
    let shortestCombination: number[] | null = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination: any = bestSum(remainder, numbers, memo);
        if (remainderCombination) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
                memo[targetSum] = shortestCombination
            }
        }
    }
    return shortestCombination
}

console.log(bestSum(1255,[5,3,4,7]))
