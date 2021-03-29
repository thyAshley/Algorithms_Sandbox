function distributeCandies(candyType: number[]): number {
    let newSet = new Set();
    for (let i = 0; i < candyType.length; i++) {
        newSet.add(candyType[i])
    }
    let limit = candyType.length /2 ;
    let candyvariation: number = newSet.size;
    return candyType.length / 2 > candyvariation ? candyvariation : candyType.length /2
};

distributeCandies([1,2,3,4])