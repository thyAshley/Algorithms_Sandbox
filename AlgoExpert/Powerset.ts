function powerSet(arr: number[]) {
  let result: number[][] = [[]];
  for (let i = 0; i < arr.length; i++) {
    let subset = result.length;
    for (let j = 0; j < subset; j++) {
      result.push(result[j].concat(arr[i]));
    }
  }
  console.log(result);
}

const arr = [1, 2, 3, 4];
console.log(powerSet(arr));
