function countDown(num: number) {
    if (num === 0) {
        return console.log('done');
    }
    console.log('counting down..', num);
    num--;
    countDown(num);
}

countDown(5)

