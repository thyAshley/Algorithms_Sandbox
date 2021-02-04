function insertionSort(arr: number[]) {
    if (arr.length < 2) return arr
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i-1; j>= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j]
        }
        console.log('comparing', arr[j], current,j);
        arr[j+1] = current
        console.log(arr)
    }
    return arr
}

const result = insertionSort([1,2,7,6,3,4,5]);
console.log(result)