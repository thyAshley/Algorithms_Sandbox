function gridTraveler(m: number, n: number, memo:{[key:string]: number} = {}): any {
    const key = m + ',' + n
    if (key in memo) return memo[key]
    if (m === 0 || n === 0) return 0;
    if (m===1 || n === 1) return 1;
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key]
}

console.log(gridTraveler(18,18))