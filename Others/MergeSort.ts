

let data: number[] = Array.from({length: 200}).map(() => {
    return Math.floor(Math.random() * 1000)
})

function MergeArray(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return [...result, ...arr1.slice(i), ...arr2.slice(j)]
}

function MergeSort(arr: number[]) : number[] {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    return MergeArray(left, right)
}

let mergeresult = MergeSort(data)
console.log(mergeresult)