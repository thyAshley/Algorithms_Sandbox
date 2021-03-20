
function countConstruct(target: string, wordBank: string[], memo: {[key: string]: number} = {}) {
    if (target in memo) return memo[target]
    if (target === '') return 1;

    let totalCounter = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            totalCounter += countConstruct(suffix, wordBank, memo)
            memo[target] = totalCounter
        }
    }
    memo[target] = totalCounter
    return totalCounter
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('skateboard', ['bo','rd','ate','t','ska', "sk", "boar"]))
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeee', ['e','ee','eee','eeeee','eeeeee']))