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

function canSumTabulation(targetSum: number, numbers: number[]) {
    const table: any[] = Array.from({length: targetSum + 1}, () => null);
    table[0] = [];
    for (let i = 0; i < table.length; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num <= targetSum) {
                    table[i+num] = [...table[i], num]
                }
            }
        }
    }
    return table[targetSum]
}

console.log(canSumTabulation(11, [5,3,4]))