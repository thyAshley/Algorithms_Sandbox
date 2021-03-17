function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]) {
    // rename
    const [houseStart, houseEnd, appleTree, OrangeTree] = [s,t,a,b];
    const applesLocation = apples.map(apple => apple + appleTree)
    const orangeLocation = oranges.map(orange => orange + OrangeTree)

    let appleCount = 0;
    let orangeCount = 0;
    for (let apple of applesLocation) {
        if (apple >= houseStart && apple <= houseEnd) {
            appleCount++;
        }
    }
    for (let orange of orangeLocation) {
        if (orange >= houseStart && orange <= houseEnd) {
            orangeCount++;
        }
    }
    console.log(appleCount)
    console.log(orangeCount)
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])