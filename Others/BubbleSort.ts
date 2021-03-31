function asc(val1: number, val2: number, noswap: boolean): [number, number,boolean]  {
    if (val1 > val2) {
         return [val2, val1, false]
     }
     return [val1, val2, noswap]
}

function desc(val1: number, val2: number, noswap: boolean): [number, number,boolean] {
    if (val1 < val2) {
         return [val2, val1, false]
     }
     return [val1, val2, noswap]
}

function bubbleSort(arr: number[], mode: string = 'asc') {
    let noswap;
    for (let i=0; i <arr.length; i++) {
        noswap = true;
        for (let j=0; j <arr.length-i-1; j++) {
            console.log(arr)
            if (mode === 'asc') {
                [arr[j], arr[j+1], noswap] = asc(arr[j], arr[j+1], noswap)
            } else if (mode ==='desc') {
                [arr[j], arr[j+1], noswap] = desc(arr[j], arr[j+1], noswap)
            }
        }
        if (noswap) break;
    }
    console.log(arr)
    return arr
}

bubbleSort([8,1,2,3,4,5,6,7], 'asc')