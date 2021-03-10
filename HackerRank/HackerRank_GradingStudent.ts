// https://www.hackerrank.com/challenges/grading/problem

function GradingStudents(n: number[]) {
  let arr = n.map((score) => {
    let remainder = score % 5;
    if (remainder > 2) {
      let newscore = score + (5 - remainder);
      if (!(newscore < 40)) {
        return newscore;
      }
    }
    return score;
  });
  return arr;
}

GradingStudents([73, 67, 38, 33]);
