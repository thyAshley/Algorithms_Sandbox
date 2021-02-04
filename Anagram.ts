// frequencyCounter
function anagram(word:string, word2: string) {
    if (word.length !== word2.length) return false;
    let frequencyCounter: {[key: string]: number} = {}
    let frequencyCounter2: {[key: string]: number} = {}
    frequencyCounter = word.split('').reduce((acc, current) => {
        return {
            ...acc,
            [current]: acc[current] + 1 || 1
        }
    }, frequencyCounter)
    frequencyCounter2 = word2.split('').reduce((acc, current) => {
        return {
            ...acc,
            [current]: acc[current] + 1 || 1
        }
    }, frequencyCounter2)
    for (let key in frequencyCounter) {
        if (!(frequencyCounter[key] === frequencyCounter2[key])) {
            return false;
        }
    }
    return true
}

console.log(anagram('hello', 'lloeh'))
console.log(anagram('hello', 'weleo'))
console.log(anagram('wow', 'wwo'))