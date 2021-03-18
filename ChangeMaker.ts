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
        console.log('running..')
        let newRemainder = remainder % coin;
        change[coin] = (remainder - newRemainder) / coin
        remainder = newRemainder
        numberOfCoin += change[coin]
    }

}

const target = 129;
const availableCoin = [100,50,20,10,5,2,1];

ChangeMaker(availableCoin, target);