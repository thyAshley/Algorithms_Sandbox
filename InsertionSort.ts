function selectionSort(arr: number[], mode: string ='asc') {
    for (let i=0; i < arr.length; i++) {
        let swap = false;
        let min = arr[i]
        let idx = i
        for (let j=1+i; j<arr.length; j++) {
            if (mode === 'asc') {
                if (arr[j] < min) {
                    min = arr[j]
                    idx = j
                    swap= true
                }
            } else {
                if (arr[j] > min) {
                    min = arr[j]
                    idx = j
                    swap= true
                }
            }

        }
        if (!swap) break;
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    console.log(arr)
    return arr
}

selectionSort([3,1,2,4,4,6,-3,0], 'desc');