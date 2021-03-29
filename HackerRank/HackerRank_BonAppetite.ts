// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill: number[], k: number, b: number) {
    let totalCost = 0;
    for (let i = 0; i <bill.length; i++) {
        if (i !== k) totalCost += bill[i]
    }
    if (totalCost / 2 === b) {
        return  console.log('Bon Appetit')
    } 
    return console.log(b-(totalCost/2))
}

bonAppetit([3,10,2,9],1,7)  