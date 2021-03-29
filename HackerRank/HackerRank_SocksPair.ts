// https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=next-challenge&h_v=zen

function sockMerchant(n: number, ar:number[]) {
    let result: {[key: number]: number} = {};
    let pairs = 0;
    for (let i of ar) {
        if (result[i] > 0) {
            result[i]--;
            pairs++;
        } else {
            result[i] = 1
        }
    }
    console.log(pairs)
    return pairs;
}

sockMerchant(10, [1,1,3,1,2,1,3,3,3,3])