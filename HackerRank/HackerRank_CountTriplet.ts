function CountTriple(arr: number[], r: number) {
  let rightMap: { [key: number]: number } = {};
  let leftMap: { [key: number]: number } = {};
  let count = 0;

  arr.forEach((a) => (rightMap[a] = rightMap[a] + 1 || 1));

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    rightMap[current]--;

    if (leftMap[current / r] && rightMap[current * r] && current % r === 0) {
      console.log(current, leftMap[current / r] * rightMap[current * r]);
      count += leftMap[current / r] * rightMap[current * r];
    }

    leftMap[current] = leftMap[current] + 1 || 1;
  }
  console.log(count);
  return count;
}

CountTriple([1, 4, 4, 4, 16, 64], 4);
