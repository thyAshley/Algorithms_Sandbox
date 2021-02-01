function selectionSort(arr: number[]) {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
        let min = arr[i]
        let idx = i
        for (let j=1+i; j<arr.length-i; j++) {
            if (arr[j] < min) {
                min = arr[j]
                idx = j
            }
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
    console.log(arr)
    return arr
}

selectionSort([3,2,1,-1,4,6,7])