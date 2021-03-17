// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n:number, k:number, ar:number[]) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                console.log(ar[i], ar[j], k)
                count++;
            }
        }
    }
    console.log(count)
}

divisibleSumPairs(6,3, [1,3,2,6,1,2])