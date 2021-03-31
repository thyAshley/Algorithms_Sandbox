function minimumBribes(q: number[]) {
  let bribes = 0;
  let first = 1;
  let second = 2;
  let third = 3;

  for (let i = 0; i < q.length; ++i) {
    if (q[i] === first) {
      first = second;
      second = third;
      third++;
    } else if (q[i] === second) {
      second = third;
      third++;
      bribes++;
    } else if (q[i] === third) {
      third++;
      bribes += 2;
    } else {
      return console.log("Too chaotic");
    }
  }
  console.log(bribes);
}

const q = [5, 1, 2, 3, 7, 8, 6, 4];
const q2 = [1, 2, 5, 3, 7, 8, 6, 4];
const q3 = [1, 2, 5, 3, 4, 7, 8, 6];
minimumBribes(q);
minimumBribes(q2);
minimumBribes(q3);
