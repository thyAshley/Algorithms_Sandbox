const reduce = (arr: number[], callback: any, initialValue: number) => {
  let sum = initialValue;
  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i]);
  }
  console.log(sum);
};

reduce(
  [1, 2, 3],
  function (total: number, current: number) {
    return (total += current);
  },
  10
);
