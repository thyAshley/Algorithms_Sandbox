function canConstructor(target: string, wordBank: string[], memo: {[key: string]: boolean} = {}) {
    if (memo[target]) return memo[target]
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstructor(suffix, wordBank, memo) === true){
                memo[target] = true;
                return memo[target]
            }
        }
    }

    memo[target] = false
    return memo[target]
}

console.log(canConstructor('abcdefg', ['ab','abc','cd','def','defg']))
console.log(canConstructor('skateboard', ['bo','rd','ate','t','ska', "sk", "boar"]))
console.log(canConstructor('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['ee','eee','e','eeeee','eeeeee']))