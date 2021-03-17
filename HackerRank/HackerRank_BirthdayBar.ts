// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s: number[], d:number, m: number) {
    let [chocolate, sum, length] = [s,d,m];
    let count = 0;
    for (let i = 0; i < chocolate.length - length + 1; i++) {
        if (chocolate.slice(i,i+length).reduce((acc, current) => acc += current, 0) === sum) {
            count++;
        }
    }
    return count;
}

birthday([2,2,1,3,2],4,2)