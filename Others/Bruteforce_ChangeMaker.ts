function ChangeMaker(availableCoin: number[], target: number) {
    let change: {[key: number] : number} = {}
    let remainder = target;
    let numberOfCoin = 0;

    for (let coin of availableCoin) {
        change[coin] = 0;
    }

    for (let coin of availableCoin) {
        if (coin > remainder) continue;
        if (remainder === 0) break;
        let newRemainder = remainder % coin;
        change[coin] = (remainder - newRemainder) / coin
        remainder = newRemainder
        numberOfCoin += change[coin]
    }
    console.log(change)
    return remainder == 0 ? numberOfCoin : Infinity

}

function GreedyAlgoBruteForce(availableCoin: number[], target:number) {
    let leastCoin = Infinity;
    leastCoin = Math.min(ChangeMaker(availableCoin, target), leastCoin);
    for (let i = 0; i < availableCoin.length; i++) {
       let left = availableCoin.slice(0,i)
       let right = availableCoin.slice(i+1)
       leastCoin = Math.min(ChangeMaker([...left, ...right], target), leastCoin);
    }
    console.log(leastCoin)
}

const target = 11;
const availableCoin = [8,6,5,1];

GreedyAlgoBruteForce(availableCoin, target);