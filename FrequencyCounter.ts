function same(array1: number[], array2: number[]) {
    if (array1.length !== array2.length) return false
    let freqCounter1: {[key:number]: number} = {};
    let freqCounter2: {[key:number]: number} = {};

    freqCounter1 = array1.reduce((acc, current) => {
        acc[current] = acc[current] + 1 || 0;
        return acc
    }, freqCounter1)

    freqCounter2 = array2.reduce((acc, current) => {
        acc[current] = acc[current] + 1 || 0;
        return acc
    }, freqCounter2)

    for (let key in freqCounter1) {
        if (!(freqCounter1[key] === freqCounter2[+key * +key])) {
            return false
        }
    }

    return true
}

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2], [4,1,4]))
console.log(same([1,2,3], [1,4,4]))