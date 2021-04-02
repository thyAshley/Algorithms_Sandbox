function map(arr: number[], callback: any) {
  let result = [];
  for (let num of arr) {
    result.push(callback(num));
  }
  console.log(result);
}

map([1, 2, 3, 4], (element: number) => {
  return element * 2;
});
