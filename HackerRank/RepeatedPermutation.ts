function permutationWithReptition(arr: number[], length: number) {
    const permutation: number[][] = []
    if (length === 1) {
        return arr.map(num => [num])
    }

    const partialPermutation = permutationWithReptition(arr, length - 1);

    for (const element of arr) {
        for (const partial of partialPermutation) {
            permutation.push([element, ...partial])
        }
    }

    return permutation;
}

const digits = [1,2,3];
const resultLength = 3;

console.log(permutationWithReptition(digits, resultLength));