// https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

function migratoryBirds(arr: number[]) {
    let frequencyCount: {[key: number]:number} = {};
    for (let bird of arr) {
        frequencyCount[bird] = frequencyCount[bird] + 1 || 1
    }
    let max = -Infinity;
    let returnKey = null
    for (let key in frequencyCount) {
        if (max < frequencyCount[key]) {
            max = frequencyCount[key]
            returnKey = key
        }
    }
    console.log(returnKey)
    return returnKey;
}

migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])