function permutation(arr: number[]) {
  let result: number[][] = [];
  if (arr.length === 1) return [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let newArray = [...arr.slice(0, i), ...arr.slice(i + 1)];
    permutation(newArray).forEach((element: any) => {
      result.push([arr[i]].concat(element));
    });
  }
  console.log(result);
  return result;
}

const arr = [1, 2, 3, 4];
permutation(arr);
