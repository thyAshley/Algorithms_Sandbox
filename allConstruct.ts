function allConstruct(target: string, wordBank: string[], memo: {[key: string]: string[][]} = {}) {
    if (target in memo) return memo[target]
    if (target === '') return [[]];

    let result: string[][] = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const ways = allConstruct(suffix, wordBank, memo)
            const targetway = ways.map(way => [word, ...way])
            result.push(...targetway);
        }
    }
    memo[target] = result
    return memo[target]
}


// console.log(allConstruct('purple', ['purp', 'ee', 'le', 'pur', 'ple']))
// console.log(allConstruct('skateboard', ['bo','rd','ate','t','ska', "sk", "boar"]))
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(allConstruct('eeeeeeeeeeeee', ['e','ee','eee','eeeee','eeeeee']))