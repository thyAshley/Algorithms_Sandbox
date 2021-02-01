function asc(val1: number, val2: number) {
    if (val1 > val2) {
         return [val2, val1]
     }
     return [val1, val2]
}

function desc(val1: number, val2: number) {
    if (val1 < val2) {
         return [val2, val1]
     }
     return [val1, val2]
}

function bubbleSort(arr: number[], mode: string = 'asc') {
    for (let i=0; i <arr.length; i++) {
        for (let j=0; j <arr.length-i-1; j++) {
            if (mode === 'asc') {
                [arr[j], arr[j+1]] = asc(arr[j], arr[j+1])
            } else if (mode ==='desc') {
                [arr[j], arr[j+1]] = desc(arr[j], arr[j+1])
            }
        }
    }
    console.log(arr)
    return arr
}

bubbleSort([37,45,29,8], 'desc')