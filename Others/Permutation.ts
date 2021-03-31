function getPermutation(arr: string[]) {
    const permutation: string[][] = [];
    if (arr.length === 1) return [arr];
    const makePartial: string[][]= getPermutation(arr.slice(1))
    
    let current = arr[0]
    for (let i = 0; i < makePartial.length; i++) {
        let target = makePartial[i];
        for (let j = 0; j <= target.length; j++) {
            let left = target.slice(0, j);
            let right = target.slice(j);
            permutation.push([...left, ...current, ...right])
        }
    }

    return permutation;
}

const todoListItems = ['A','B', 'C'];

console.log(getPermutation(todoListItems))
