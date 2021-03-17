// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function breakingRecords(scores: number[]) {
    let min = scores[0];
    let max = scores[0];
    let worst = 0;
    let better=  0;
    for (let score of scores) {
        if (score > max) {
            max = score;
            better++;
            continue;
        }
        if (score < min) {
            min = score;
            worst++;
            continue;
        }
    }
    console.log(better, worst);
}

breakingRecords([3,4,21,36,10,28,35,5,24,42])