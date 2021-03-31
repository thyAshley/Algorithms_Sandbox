function isArr(element: any) {
    return typeof element === 'object'
}

function productSum(arr: any, depth: number = 0) {
    let count = 0;
    depth++;
    for (let i = 0; i < arr.length; i++) {
        if (isArr(arr[i])) {
            count += productSum(arr[i], depth)
        } else {
            count += arr[i]
        }
    }
    return count * depth;
}

console.log(productSum([5,2,[7,-1],3,[6,[-13,8],4]]));