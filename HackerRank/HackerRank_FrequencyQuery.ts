function FrequencyQuery(queries: number[][]) {
  let frequencyCounter: { [key: number]: number } = {};
  let result: number[] = [];
  let freq: number[] = [];

  for (let query of queries) {
    let action = query[0];
    let value = query[1];
    switch (action) {
      case 1:
        frequencyCounter[value] = frequencyCounter[value] + 1 || 1;
        break;
      case 2:
        if (frequencyCounter[value]) {
          frequencyCounter[value]--;
        }
        break;
      case 3:
        let exist = false;
        for (let keys in frequencyCounter) {
          if (frequencyCounter[keys] === value) {
            exist = true;
          }
        }
        if (exist) {
          result.push(1);
        } else {
          result.push(0);
        }
    }
  }
  return result;
}

FrequencyQuery([
  [3, 4],
  [2, 1003],
  [1, 16],
  [3, 1],
]);
FrequencyQuery([
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
]);
FrequencyQuery([
  [1, 3],
  [2, 3],
  [3, 2],
  [1, 4],
  [1, 5],
  [1, 5],
  [1, 4],
  [3, 2],
  [2, 4],
  [3, 2],
]);
